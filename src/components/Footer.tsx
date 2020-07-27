import React from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import { OutboundLink } from '../lib/analytics'
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
          <OutboundLink href="https://github.com/clibs" label="GitHub">
            GitHub
          </OutboundLink>
        </li>
        <li>
          <OutboundLink
            href="https://github.com/clibs/clib/issues"
            label="GitHub Issues"
          >
            Issues &amp; Help
          </OutboundLink>
        </li>
      </ul>
    </nav>

    <p className={styles.copyright}>
      &copy; {new Date().getFullYear()}{' '}
      <OutboundLink
        href="https://github.com/orgs/clibs/people"
        label="GitHub People"
      >
        Clibs Authors
      </OutboundLink>
    </p>

    <p className={styles.build}>
      <OutboundLink
        href={`https://github.com/clibs/website/tree/${revision}`}
        label="GitHub Website Revision"
      >
        revision {revision.substring(0, 8)} (
        <TimeAgo date={new Date(updatedAt)} />)
      </OutboundLink>
    </p>
  </footer>
)

Footer.displayName = 'Footer'

export default Footer
