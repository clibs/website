import React from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import { updatedAt, revision } from '../registry'
import styles from './Footer.css'

const Footer: React.ComponentType = () => (
  <footer className={styles.footer}>
    <nav className={styles.links} aria-label="links">
      <ul>
        <li>
          <Link to="/packages">Packages</Link>
        </li>
        <li>
          <a href="https://github.com/clibs" rel="external">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://github.com/clibs/clib/issues" rel="external">
            Issues &amp; Help
          </a>
        </li>
      </ul>
    </nav>

    <p className={styles.copyright}>
      &copy; {new Date().getFullYear()}{' '}
      <a href="https://github.com/orgs/clibs/people" rel="external">
        Clibs Authors
      </a>
    </p>

    <p className={styles.build}>
      <a
        href={`https://github.com/clibs/website/tree/${revision}`}
        rel="external"
      >
        revision {revision.substring(0, 8)} (
        <TimeAgo date={new Date(updatedAt)} />)
      </a>
    </p>
  </footer>
)

Footer.displayName = 'Footer'

export default Footer
