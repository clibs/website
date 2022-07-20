import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Meta from 'react-document-meta'
import slugify from '@sindresorhus/slugify'
import { packages } from '../registry'
import * as analytics from '../lib/analytics'
import CommaSeparatedList from '../components/CommaSeparatedList'
import CodeBlock from '../components/CodeBlock'
import NotFoundError from '../components/NotFoundError'
import styles from './Package.css'

const renderKeyword = (keyword: string): React.ReactElement => {
  return (
    <li key={keyword}>
      <Link to={`/keyword/${slugify(keyword)}`}>{keyword}</Link>
    </li>
  )
}

const renderPackage = (packageName: string): React.ReactElement => (
  <li key={packageName}>
    <Link to={`/packages/${packageName}`}>{packageName}</Link>
  </li>
)

const Package: React.ComponentType = () => {
  const params = useParams()
  const owner = params.owner as string
  const repo = params.repo as string
  const pkg = packages.find(p => p.name === `${owner}/${repo}`.toLowerCase())

  if (!pkg) {
    analytics.missingPackage(owner, repo)
    return (
      <React.Fragment>
        <Meta
          title={`Package “${owner}/${repo}” Not Found | clibs &mdash; C package manager`}
          meta={{ name: { robots: 'noindex' } }}
        />
        <NotFoundError
          title="Error loading package"
          header={`The package “${owner}/${repo}” could not be found.`}
        />
      </React.Fragment>
    )
  }

  const keywords = pkg.manifest.keywords || []
  const dependencies = Object.keys(pkg.manifest.dependencies || {})
  const dependents = pkg.dependents || []

  return (
    <div className={styles.package}>
      <Meta
        title={`Package “${owner}/${repo}” | clibs &mdash; C package manager`}
        description={`Package “${owner}/${repo}” &mdash; ${pkg.description}`}
      />

      <h1>
        {owner}/{repo}
      </h1>

      <div className={styles.main}>
        <p className={styles.description}>{pkg.description}</p>

        <div className={styles.install}>
          <h2>Install</h2>
          <CodeBlock source={`clib install ${pkg.name}`} />
        </div>

        <div className={styles.repository}>
          <h3>Repository</h3>
          <analytics.OutboundLink
            href={pkg.url}
            eventLabel="GitHub Package Repository"
          >
            {pkg.url}
          </analytics.OutboundLink>
        </div>

        <div className={styles.license}>
          <h3>License</h3>
          <p>{pkg.license}</p>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.category}>
          <h3>Category</h3>
          <Link to={`/category/${slugify(pkg.category)}`}>{pkg.category}</Link>
        </div>

        {keywords.length ? (
          <div className={styles.keywords}>
            <h3>Keywords</h3>
            <CommaSeparatedList items={keywords} renderItem={renderKeyword} />
          </div>
        ) : null}

        <div className={styles.dependencies}>
          <h3>
            Dependencies {dependencies.length ? `(${dependencies.length})` : ''}
          </h3>
          {dependencies.length ? (
            <CommaSeparatedList
              items={dependencies}
              renderItem={renderPackage}
            />
          ) : (
            <span>None</span>
          )}
        </div>

        <div className={styles.dependents}>
          <h3>
            Dependents {dependents.length ? `(${dependents.length})` : ''}
          </h3>
          {dependents.length ? (
            <CommaSeparatedList items={dependents} renderItem={renderPackage} />
          ) : (
            <span>None</span>
          )}
        </div>
      </div>
    </div>
  )
}

Package.displayName = 'PackagePage'

export default Package
