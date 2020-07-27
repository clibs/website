import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import dedent from 'ts-dedent'
import CodeBlock from './CodeBlock'
import styles from './InstallationGuide.css'

enum Platform {
  MacOS = 0,
  Linux,
  Windows,
  Other
}

const Windows: React.ComponentType = () => (
  <p>
    For Windows users, we have pre-compiled binaries available on our{' '}
    <a href="https://github.com/clibs/clib/releases" rel="external">
      GitHub Releases
    </a>{' '}
    page.
  </p>
)

Windows.displayName = 'Windows'

const Linux: React.ComponentType = () => (
  <React.Fragment>
    <p>
      First, you’ll need your distibution’s version of{' '}
      <a href="https://curl.haxx.se/libcurl/" rel="external">
        <code>libcurl</code>
      </a>{' '}
      (on Ubuntu, this is <code>libcurl4-gnutls-dev</code>).
    </p>
    <p>
      Next, download and build the source with{' '}
      <a href="https://git-scm.com/" rel="external">
        <code>git</code>
      </a>
      :
    </p>
    <CodeBlock
      source={dedent`
        git clone https://github.com/clibs/clib.git /tmp/clib
        cd /tmp/clib
        make
        sudo make install
      `}
    />
  </React.Fragment>
)

Linux.displayName = 'Linux'

const Other: React.ComponentType = () => (
  <React.Fragment>
    <p>
      With{' '}
      <a href="https://git-scm.com/" rel="external">
        <code>git</code>
      </a>
      , do:
    </p>
    <CodeBlock
      source={dedent`
        git clone https://github.com/clibs/clib.git /tmp/clib
        cd /tmp/clib
        make install
        cd -
      `}
    />
  </React.Fragment>
)

Other.displayName = 'Other'

const MacOS: React.ComponentType = () => (
  <React.Fragment>
    <p>
      With{' '}
      <a href="https://github.com/Homebrew/homebrew" rel="external">
        <code>homebrew</code>
      </a>
      , do:
    </p>

    <CodeBlock source="brew install clib" />

    <p>
      With{' '}
      <a href="https://git-scm.com/" rel="external">
        <code>git</code>
      </a>
      , do:
    </p>

    <CodeBlock
      source={dedent`
        git clone https://github.com/clibs/clib.git /tmp/clib
        cd /tmp/clib
        make install
      `}
    />
  </React.Fragment>
)

MacOS.displayName = 'MacOS'

const InstallationGuide: React.ComponentType = () => {
  const [index, setIndex] = React.useState(0) // Default to MacOS

  const handleSelectTab = (i: number): void => setIndex(i)

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
          <MacOS />
        </TabPanel>
        <TabPanel>
          <Linux />
        </TabPanel>
        <TabPanel>
          <Windows />
        </TabPanel>
        <TabPanel>
          <Other />
        </TabPanel>
      </Tabs>
    </div>
  )
}

InstallationGuide.displayName = 'InstallationGuide'

export default InstallationGuide
