import React from 'react'
import { Helmet } from 'react-helmet'
import styles from './NotFound.css'

const NotFound: React.ComponentType = () => (
  <div className={styles.notFound}>
    <Helmet title="404 &mdash; Not Found">
      <meta name="robots" content="noindex" />
    </Helmet>

    <h1>Not Found</h1>
  </div>
)

NotFound.displayName = 'NotFoundPage'

export default NotFound
