import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Helmet } from 'react-helmet'
import * as analytics from '../lib/analytics'
import { getNameFromSlug, getPackagesBySlug } from '../lib/search'
import PackageList from '../components/PackageList'
import NotFoundError from '../components/NotFoundError'
import NotFound from './NotFound'

type Props = RouteComponentProps<{
  group: 'keyword' | 'category'
  slug: string
}>

const Group: React.ComponentType<Props> = ({ match }) => {
  const { group, slug } = match.params
  const name = getNameFromSlug(slug, group)
  const packages = getPackagesBySlug(slug, group)

  if (group !== 'category' && group !== 'keyword') {
    return <NotFound />
  }

  if (!name || packages.length === 0) {
    analytics.missingGroup(group, slug)
    return (
      <React.Fragment>
        <Helmet title="No packages found">
          <meta name="robots" content="noindex" />
        </Helmet>
        <NotFoundError
          title={`Unknown ${group}`}
          header={
            group === 'category'
              ? `No packages found in the category “${slug}”.`
              : `No packages found with the keyword “${slug}”.`
          }
        />
      </React.Fragment>
    )
  }

  const title =
    group === 'keyword'
      ? `Keyword “${name}” packages`
      : `Category “${name}” packages`

  return (
    <React.Fragment>
      <Helmet title={title}>
        <meta name="description" content={title} />
      </Helmet>
      <PackageList
        hideCategory={group === 'category'}
        packages={packages}
        caption={title}
      />
    </React.Fragment>
  )
}

Group.displayName = 'GroupPage'

export default Group
