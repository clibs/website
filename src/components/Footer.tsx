import React from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import { OutboundLink } from '../lib/analytics'
import { updatedAt, revision } from '../registry'
import styles from './Footer.css'

// Attempt to use the build-time variables, but fallback to registry data if not available.
const { UPDATED_AT = updatedAt.toString(), GIT_SHA = revision } = process.env

const Footer: React.ComponentType = () => (
  <footer className={styles.footer}>
    <nav className={styles.links} aria-label="links">
      <ul>
        <li>
          <Link to="/packages">Packages</Link>
        </li>
        <li>
          <OutboundLink href="https://github.com/clibs" eventLabel="GitHub">
            GitHub
          </OutboundLink>
        </li>
        <li>
          <OutboundLink
            href="https://github.com/clibs/clib/issues"
            eventLabel="GitHub Issues"
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
        eventLabel="GitHub People"
      >
        Clibs Authors
      </OutboundLink>
    </p>

    <p className={styles.build}>
      <OutboundLink
        href={`https://github.com/clibs/website/tree/${GIT_SHA}`}
        eventLabel="GitHub Website Revision"
      >
        revision {GIT_SHA.substring(0, 8)} (
        <TimeAgo date={new Date(UPDATED_AT)} />)
      </OutboundLink>
    </p>
  </footer>
)

Footer.displayName = 'Footer'

export default Footer
