import React from 'react'
import { Helmet } from 'react-helmet'
import { packages } from '../registry'
import PackagesList from '../components/PackageList'

const Packages: React.ComponentType = () => (
  <React.Fragment>
    <Helmet title="Package Listing">
      <meta name="description" content="Package listing for clibs" />
    </Helmet>
    <PackagesList packages={packages} />
  </React.Fragment>
)

Packages.displayName = 'PackagesPage'

export default Packages
