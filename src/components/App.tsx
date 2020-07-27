import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import * as analytics from '../lib/analytics'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Group from '../pages/Group'
import Package from '../pages/Package'
import Packages from '../pages/Packages'
import Search from '../pages/Search'
import Header from './Header'
import Footer from './Footer'
import styles from './App.css'

const App: React.ComponentType = () => {
  const location = useLocation()

  React.useEffect(() => {
    analytics.page(location.pathname)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className={styles.app}>
      <Helmet
        titleTemplate="%s | clibs &mdash; C package manager"
        defaultTitle="clibs &mdash; C package manager"
      />
      <Header />
      <main className={styles.main}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/:group/:slug" component={Group} />
          <Route exact path="/packages" component={Packages} />
          <Route exact path="/packages/:owner/:repo" component={Package} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

App.displayName = 'App'

export default App
