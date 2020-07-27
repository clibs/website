import React from 'react'
import { Link } from 'react-router-dom'
import GithubForkRibbon from 'react-github-fork-ribbon'
import { Helmet } from 'react-helmet'
import { OutboundLink } from '../lib/analytics'
import InstallationGuide from '../components/InstallationGuide'
import styles from './Home.css'

const Home: React.ComponentType = () => (
  <div className={styles.home}>
    <Helmet>
      <meta
        name="description"
        content="clib &mdash; Package manager for the C programming language"
      />
    </Helmet>

    <GithubForkRibbon
      position="right"
      href="//github.com/clibs/clib"
      target="_blank"
    >
      Fork me on GitHub
    </GithubForkRibbon>

    <div className={styles.hero}>
      <h1>clib(1)</h1>
      <h2>Package manager for the C programming language.</h2>
    </div>

    <InstallationGuide />

    <div className={styles.about}>
      <h3>
        What does <code>clib(1)</code> do?
      </h3>

      <p>
        Basically the lazy-man’s copy/paste promoting smaller C utilities, also
        serving as a nice way to discover these sort of libraries. From my
        experience C libraries are scattered all over the web and discovery is
        relatively poor. The footprint of these libraries is usually quite large
        and unfocused. The goal of <code>clibs</code> is to provide stand-alone
        “micro” C libraries for developers to quickly install without coupling
        to large frameworks.
      </p>

      <p>
        You should use <code>clib(1)</code> to fetch these files for you and
        check them into your repository, the end-user and contributors should
        not require having <code>clib(1)</code> installed. This allows{' '}
        <code>clib(1)</code> to fit into any new or existing C workflow without
        friction.
      </p>

      <p>
        The GitHub wiki{' '}
        <OutboundLink
          href="https://github.com/clibs/clib/wiki/Packages"
          label="GitHub Wiki"
        >
          listing of packages
        </OutboundLink>{' '}
        acts as the “registry” and populates both the{' '}
        <Link to="/packages">Packages</Link> page and the results from{' '}
        <code>clib-search(1)</code>.
      </p>
    </div>
  </div>
)

Home.displayName = 'HomePage'

export default Home
