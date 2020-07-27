interface PackageGroup {
  slug: string
  packages: string[]
}

export interface CategoryList {
  [category: string]: PackageGroup
}

export interface KeywordList {
  [keyword: string]: PackageGroup
}

export interface Package {
  name: string
  slug: string
  url: string
  description: string
  category: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  manifest: any
  dependents: string[]
  license?: string
}
