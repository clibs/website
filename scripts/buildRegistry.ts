import wikiRegistry from 'wiki-registry'
import { Octokit } from '@octokit/rest'
import slugify from '@sindresorhus/slugify'
import prettier from 'prettier'
import execa from 'execa'
import deepEqual from 'fast-deep-equal'
import meow from 'meow'
import assert from 'assert'
import path from 'path'
import fs from 'fs'
import prettierConfig from '../.prettierrc.json'
import * as old from '../src/registry'
import type { CategoryList, KeywordList, Package } from '../src/types'

const REGISTRY_FILE = path.join(__dirname, '..', 'src', 'registry.ts')

const cli = meow(
  `
  Usage
    $ yarn registry
  
  Options
    --token, -t  Set the GitHub token
    --wiki, -w   Set the Wiki page URL
`,
  {
    flags: {
      token: {
        type: 'string',
        alias: 't',
        default: process.env.GITHUB_TOKEN || ''
      },
      wiki: {
        type: 'string',
        alias: 'w',
        default: 'https://github.com/clibs/clib/wiki/Packages'
      }
    }
  }
)

assert(
  cli.flags.token,
  'Missing token. Must pass `--token=` or set $GITHUB_TOKEN'
)

const github = new Octokit({ auth: cli.flags.token })

/**
 * Get the contents of a file.
 *
 * @param owner
 * @param repo
 * @param path
 */

const getFileContents = async (
  owner: string,
  repo: string,
  path: string
): Promise<string> => {
  const result = await github.repos.getContent({ owner, repo, path })
  // HACK: these types are a mess and don't correctly represent the returned shape of `repos#getContent()`.
  const data = result.data as any
  return Buffer.from(data.content, 'base64').toString('utf8')
}

interface Manifest {
  name: string
  version?: string
  repo?: string
  description?: string
  keywords?: string[]
  license?: string
  src?: string[]
  dependencies?: {
    [name: string]: string
  }
}

const getRevision = async (): Promise<string> => {
  try {
    const p = await execa('git', ['rev-parse', 'HEAD'])
    if (p.exitCode !== 0) {
      throw new Error(`Unable to parse revision: ${p.stderr}`)
    }
    const out = p.stdout
    return out.trim()
  } catch (error) {
    console.error(error)
    return 'unknown'
  }
}

/**
 * Fetch the manifest for the given `packageName`. Supports both `clib.json` and `package.json`.
 */

const getManifest = async (packageName: string): Promise<Manifest> => {
  const [owner, repo] = packageName.split('/')
  if (!owner || !repo) {
    throw new Error(`Invalid package name: "${packageName}"`)
  }

  let content: string
  try {
    content = await getFileContents(owner, repo, 'clib.json')
  } catch {
    // TODO: warn once clib@next lands.
    // console.warn('Package missing `clib.json`', { package: packageName })
    try {
      content = await getFileContents(owner, repo, 'package.json')
    } catch {
      throw new Error(`Package missing manifest (${packageName})`)
    }
  }

  const json = JSON.parse(content)
  json.name = packageName.toLowerCase()

  // Ensure the manifest has `keywords`.
  if (!Array.isArray(json.keywords)) {
    json.keywords = []
  }

  // Ensure the manifest has license text.
  if (!json.license) {
    json.license = 'Unlicensed'
  } else if (Array.isArray(json.license)) {
    json.license = json.license.join(', ')
  } else if (typeof json.license === 'object') {
    // Assume it's in the shape of `{ type, url }`
    json.license = json.license.type
  }

  // Ensure the manifest has dependencies.
  if (!json.dependencies) {
    json.dependencies = {}
  }

  // Handle clibs/ deps (see https://github.com/jwerle/strsplit.c/blob/0.1.1/package.json#L10)
  for (const dep of Object.keys(json.dependencies || {})) {
    if (dep.indexOf('/') === -1) {
      const version = json.dependencies[dep]
      json.dependencies[`clibs/${dep}`] = version
      delete json.dependencies[dep]
    }
  }

  return json
}

const scrapeWikiPage = (): Promise<wikiRegistry.Registry> => {
  return new Promise<wikiRegistry.Registry>((resolve, reject) => {
    wikiRegistry(cli.flags.wiki, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

const buildRegistry = async (): Promise<void> => {
  const categories: CategoryList = {}
  const keywords: KeywordList = {}
  const packages: Package[] = []

  const wiki = await scrapeWikiPage()

  const pkgMap = new Map<string, Package>()
  for (const category of Object.keys(wiki)) {
    for (const pkg of wiki[category]) {
      // Skip invalid packages.
      if (!pkg || !pkg.name) {
        continue
      }

      if (pkg.name.split('/').length !== 2) {
        console.warn('Invalid package name', { package: pkg })
        continue
      }

      if (!pkg.description) {
        console.warn('Invalid package description', { package: pkg })
        continue
      }

      if (!pkg.url) {
        console.warn('Invalid package url', { package: pkg })
        continue
      }

      let manifest: Manifest
      try {
        manifest = await getManifest(pkg.name)
      } catch (error) {
        console.error((error as Error).message)
        continue
      }

      const slug = slugify(pkg.name).toLowerCase()

      pkgMap.set(slug, {
        category,
        // This will be populated later on.
        dependents: [],
        description: pkg.description,
        manifest,
        name: pkg.name.toLowerCase(),
        slug,
        url: pkg.url,
        license: manifest.license
      })
    }
  }

  // TODO: this is incredibly inefficient and needs to be refactored.
  pkgMap.forEach(pkg => {
    if (!pkg.name || !pkg.manifest) {
      console.warn('Package missing name/manifest', pkg)
    }

    // Update keywords.
    for (const keyword of pkg.manifest.keywords || []) {
      keywords[keyword] = keywords[keyword] || {
        slug: slugify(keyword),
        packages: []
      }
      keywords[keyword].packages.push(pkg.name)
    }

    // Set package dependents.
    packages.forEach(b => {
      if (!b || !b.manifest) {
        // TODO: warn & remove from map
        return
      }

      if (b.manifest.dependencies[pkg.name]) {
        pkg.dependents.push(b.name)
      }
    })

    // Update registry categories.
    categories[pkg.category] = categories[pkg.category] || {
      slug: slugify(pkg.category),
      packages: []
    }
    categories[pkg.category].packages.push(pkg.name)

    packages.push(pkg)
  })

  // Check if anything has changed. If not, there's no need to re-write the registry, so we exit early.
  // This prevents unnecessarily using Netlify build minutes.
  if (
    deepEqual(keywords, old.keywords) &&
    deepEqual(categories, old.categories) &&
    deepEqual(packages, old.packages)
  ) {
    console.log('No changes in package registry')
    return
  }

  fs.writeFileSync(
    REGISTRY_FILE,
    prettier.format(
      `
      //
      // This is a generated file. Do not edit directly!
      //

      import { Package, CategoryList, KeywordList } from './types'

      export const keywords: KeywordList = ${JSON.stringify(keywords)}

      export const categories: CategoryList = ${JSON.stringify(categories)}

      export const packages: Package[] = ${JSON.stringify(packages)}
    
      export const updatedAt = new Date("${new Date()}")

      export const revision = "${await getRevision()}"
      `,
      {
        filepath: 'registry.ts',
        ...(prettierConfig as prettier.Options)
      }
    )
  )
  console.log('Updated registry')
}

buildRegistry().catch((error: Error) => {
  console.error()
  console.error('Unexpected error')
  console.error(error)
  console.error()
  process.exit(1)
})
