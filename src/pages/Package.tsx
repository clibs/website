import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
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

interface Params {
  owner: string
  repo: string
}

type Props = RouteComponentProps<Params>

const Package: React.ComponentType<Props> = ({ match }) => {
  const { owner, repo } = match.params
  const pkg = packages.find(p => p.name === `${owner}/${repo}`)

  if (!pkg) {
    analytics.missingPackage(owner, repo)
    return (
      <React.Fragment>
        <Helmet title={`Package “${owner}/${repo}” Not Found`}>
          <meta name="robots" content="noindex" />
        </Helmet>
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
      <Helmet title={`Package “${owner}/${repo}”`}>
        <meta
          name="description"
          content={`Package “${owner}/${repo}” &mdash; ${pkg.description}`}
        />
      </Helmet>

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
            label="GitHub Package Repository"
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
