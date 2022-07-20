import React from 'react'
import Meta from 'react-document-meta'
import { packages } from '../registry'
import PackagesList from '../components/PackageList'

const Packages: React.ComponentType = () => (
  <React.Fragment>
    <Meta
      title="Package Listing | clibs &mdash; C package manager"
      description="Package listing for clibs"
    />
    <PackagesList packages={packages} />
  </React.Fragment>
)

Packages.displayName = 'PackagesPage'

export default Packages
