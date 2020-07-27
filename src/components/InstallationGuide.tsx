import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import dedent from 'ts-dedent'
import * as analytics from '../lib/analytics'
import CodeBlock from './CodeBlock'
import styles from './InstallationGuide.css'

export enum Platform {
  MacOS = 0,
  Linux,
  Windows,
  Other
}

const Git: React.ComponentType = () => (
  <analytics.OutboundLink href="https://git-scm.com/" label="Git">
    <code>git</code>
  </analytics.OutboundLink>
)

const Releases: React.ComponentType = () => (
  <analytics.OutboundLink
    href="https://github.com/clibs/clib/releases"
    label="GitHub Releases"
  >
    GitHub Releases
  </analytics.OutboundLink>
)

const CURL: React.ComponentType = () => (
  <analytics.OutboundLink href="https://curl.haxx.se/libcurl/" label="cURL">
    <code>libcurl</code>
  </analytics.OutboundLink>
)

const Homebrew: React.ComponentType = () => (
  <analytics.OutboundLink
    href="https://github.com/Homebrew/homebrew"
    label="Homebrew"
  >
    <code>homebrew</code>
  </analytics.OutboundLink>
)

const InstallationGuide: React.ComponentType = () => {
  const [index, setIndex] = React.useState(0) // Default to MacOS

  const handleSelectTab = (i: number): void => {
    analytics.selectInstallationInstruction(i)
    setIndex(i)
  }

  // Detect platform type based on User Agent.
  React.useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    // Prerendering this causes the "tabs" to get confused.
    if (userAgent === 'reactsnap') {
      return
    }

    if (userAgent.indexOf('win') !== -1) {
      setIndex(Platform.Windows)
    } else if (userAgent.indexOf('mac') !== -1) {
      setIndex(Platform.MacOS)
    } else if (
      userAgent.indexOf('linux') !== -1 ||
      userAgent.indexOf('x11') !== -1
    ) {
      setIndex(Platform.Linux)
    } else {
      setIndex(Platform.Other)
    }
  }, [])

  return (
    <div className={styles.guide}>
      <h3>
        Install <code>clib(1)</code>
      </h3>

      <Tabs selectedIndex={index} onSelect={handleSelectTab}>
        <TabList>
          <Tab>MacOS</Tab>
          <Tab>Linux</Tab>
          <Tab>Windows</Tab>
          <Tab>Other</Tab>
        </TabList>

        <TabPanel>
          <p>
            With <Homebrew />, do:
          </p>

          <CodeBlock source="brew install clib" />

          <p>
            With <Git />, do:
          </p>

          <CodeBlock
            source={dedent`
              git clone https://github.com/clibs/clib.git /tmp/clib
              cd /tmp/clib
              make install
            `}
          />
        </TabPanel>
        <TabPanel>
          <p>
            First, you’ll need your distibution’s version of <CURL /> (on
            Ubuntu, this is <code>libcurl4-gnutls-dev</code>).
          </p>
          <p>
            Next, download and build the source with <Git />:
          </p>
          <CodeBlock
            source={dedent`
              git clone https://github.com/clibs/clib.git /tmp/clib
              cd /tmp/clib
              make
              sudo make install
            `}
          />
        </TabPanel>
        <TabPanel>
          <p>
            For Windows users, we have pre-compiled binaries available on our{' '}
            <Releases /> page.
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            With <Git />, do:
          </p>
          <CodeBlock
            source={dedent`
              git clone https://github.com/clibs/clib.git /tmp/clib
              cd /tmp/clib
              make install
              cd -
            `}
          />
        </TabPanel>
      </Tabs>
    </div>
  )
}

InstallationGuide.displayName = 'InstallationGuide'

export default InstallationGuide
