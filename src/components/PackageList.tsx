import React from 'react'
import { Link } from 'react-router-dom'
import slugify from '@sindresorhus/slugify'
import { Package } from '../types'
import styles from './PackageList.css'

interface Props {
  caption?: React.ReactNode
  packages: Package[]
  hideCategory?: boolean
}

const PackageList: React.ComponentType<Props> = ({
  packages,
  hideCategory = false,
  caption = 'Packages'
}) => (
  <table className={styles.table}>
    <caption>{caption}</caption>
    <thead>
      <tr>
        <th>package</th>
        <th>description</th>
        {hideCategory === false && <th>category</th>}
        <th>license</th>
      </tr>
    </thead>
    <tbody>
      {packages.length === 0 ? (
        <tr>
          <td colSpan={hideCategory ? 3 : 4}>
            <p>No packages found</p>
          </td>
        </tr>
      ) : (
        packages.map(p => (
          <tr key={p.name}>
            <td data-label="package">
              <Link to={`/packages/${p.name}`}>{p.name}</Link>
            </td>
            <td data-label="description">{p.description}</td>
            {hideCategory ? null : (
              <td data-label="category">
                <Link to={`/category/${slugify(p.category)}`}>
                  {p.category}
                </Link>
              </td>
            )}
            <td data-label="license">{p.license || 'Unlicensed'}</td>
          </tr>
        ))
      )}
    </tbody>
  </table>
)

PackageList.displayName = 'PackageList'

export default PackageList
