import React from 'react'
import Meta from 'react-document-meta'
import styles from './NotFound.css'

const NotFound: React.ComponentType = () => (
  <div className={styles.notFound}>
    <Meta
      title="404 &mdash; Not Found | clibs &mdash; C package manager"
      meta={{ name: { robots: 'noindex' } }}
    />
    <h1>Not Found</h1>
  </div>
)

NotFound.displayName = 'NotFoundPage'

export default NotFound
