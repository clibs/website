import React from 'react'
import { render, hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as analytics from './lib/analytics'
import App from './components/App'
import './main.css'

analytics.init()

const root = document.getElementById('root')
if (!root) {
  analytics.error('mount error', true)
  throw new Error('Unable to mount app')
}

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

if (root.firstElementChild) {
  hydrate(app, root)
} else {
  render(app, root)
}
