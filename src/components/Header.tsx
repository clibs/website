import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/logo.png'

import SearchForm from './SearchForm'
import styles from './Header.css'

const Header: React.ComponentType = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <h1>
        <Link to="/">
          <img src={logo} alt="Clibs" />
        </Link>
      </h1>
    </div>

    <nav aria-label="navigation" className={styles.nav}>
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

    <div className={styles.search}>
      <SearchForm />
    </div>
  </header>
)

Header.displayName = 'Header'

export default Header
