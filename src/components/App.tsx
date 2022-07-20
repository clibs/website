import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
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
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:group/:slug" element={<Group />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:owner/:repo" element={<Package />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

App.displayName = 'App'

export default App
