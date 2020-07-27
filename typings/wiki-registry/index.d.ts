declare module 'wiki-registry' {
  namespace wikiRegistry {
    interface Package {
      name?: string
      url?: string
      description?: string
    }

    interface Registry {
      [category: string]: Package[]
    }
  }

  function wikiRegistry(
    url: string,
    callback: (err: Error | null, result: wikiRegistry.Registry) => void
  ): void

  export = wikiRegistry
}
