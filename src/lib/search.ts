import { packages, keywords, categories } from '../registry'
import { Package } from '../types'

/**
 * Get packages matching the provided `query`.
 *
 * Matches are weighted by:
 *
 * 1. package name
 * 2. package description
 * 3. package category
 * 4. package keyword
 *
 * @param query
 */

export const getPackagesByQuery = (query: string): Package[] => {
  if (!query) {
    return []
  }

  const matches = new Set<string>()
  const filter = new RegExp(query, 'i')

  // 1 - by name
  for (const p of packages) {
    if (filter.test(p.name)) {
      matches.add(p.name)
    }
  }

  // 2 - by description
  for (const p of packages) {
    if (filter.test(p.description)) {
      matches.add(p.name)
    }
  }

  // 3 - by category
  for (const c in categories) {
    if (filter.test(c)) {
      const { packages } = categories[c]
      for (const p of packages) {
        matches.add(p)
      }
    }
  }

  // 4 - by keyword
  for (const k in keywords) {
    if (filter.test(k)) {
      const { packages } = keywords[k]
      for (const p of packages) {
        matches.add(p)
      }
    }
  }

  // Get each matched package.
  const results: Package[] = []
  for (const name of matches) {
    const pkg = packages.find(p => p.name === name)
    if (!pkg) {
      continue
    }
    results.push(pkg)
  }
  return results
}

/**
 * Get the "name" of a category or keyword by the provided slug.
 *
 * @param slug
 * @param type
 */

export const getNameFromSlug = (
  slug: string,
  type: 'keyword' | 'category'
): string | null => {
  const group = type === 'keyword' ? keywords : categories
  for (const name in group) {
    if (group[name].slug === slug) {
      return name
    }
  }
  return null
}

/**
 * Get a list of packages either in the category `slug` or with the keyword `slug`.
 *
 * @param slug
 * @param type
 */

export const getPackagesBySlug = (
  slug: string,
  type: 'keyword' | 'category'
): Package[] => {
  const name = getNameFromSlug(slug, type)
  if (!name) {
    return []
  }

  const group = type === 'category' ? categories : keywords
  const packageNames = group[name].packages || []
  return packages.filter(p => packageNames.includes(p.name))
}
