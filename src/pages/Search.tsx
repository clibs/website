import React from 'react'
import { parse } from 'qs'
import { useLocation } from 'react-router'
import Meta from 'react-document-meta'
import { getPackagesByQuery } from '../lib/search'
import PackageList from '../components/PackageList'
import ErrorMessage from '../components/ErrorMessage'
import { Package } from '../types'

const Search: React.ComponentType = () => {
  const location = useLocation()
  const [title, setTitle] = React.useState('Search Results')
  const [packages, setPackages] = React.useState<Package[]>([])
  const query = React.useMemo(() => {
    const { q } = parse(location.search.substr(1))
    if (q) {
      return q as string
    }
    return null
  }, [location.search])

  React.useEffect(() => {
    // If no query is provided, we'll render an error. No need to search for packages.
    if (!query) {
      return
    }

    setTitle(`“${query}” Search Results`)
    const matches = getPackagesByQuery(query)
    setPackages(matches)
  }, [query])

  return (
    <React.Fragment>
      <Meta
        title={title + ' | clibs &mdash; C package manager'}
        description={title}
      />
      {query ? (
        <PackageList caption={title} packages={packages} />
      ) : (
        <ErrorMessage title="Missing search query">
          <p>Search query missing. Unable to search for packages</p>
        </ErrorMessage>
      )}
    </React.Fragment>
  )
}

Search.displayName = 'SearchPage'

export default Search
