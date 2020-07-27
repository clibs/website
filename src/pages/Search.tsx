import React from 'react'
import { parse } from 'qs'
import { useLocation } from 'react-router'
import { Helmet } from 'react-helmet'
import { getPackagesByQuery } from '../lib/search'
import PackageList from '../components/PackageList'
import { Package } from '../types'

const Search: React.ComponentType = () => {
  const location = useLocation()
  const [title, setTitle] = React.useState('Search Results')
  const [packages, setPackages] = React.useState<Package[]>([])

  React.useEffect(() => {
    const { q: query } = parse(location.search.substr(1))
    setTitle(`“${query}” Search Results`)
    const matches = getPackagesByQuery(query as string)
    setPackages(matches)
  }, [location.search])

  return (
    <React.Fragment>
      <Helmet title={title}>
        <meta name="description" content={title} />
      </Helmet>
      <PackageList caption={title} packages={packages} />
    </React.Fragment>
  )
}

Search.displayName = 'SearchPage'

export default Search
