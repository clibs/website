import React from 'react'
import { render, hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import './main.css'

const root = document.getElementById('root')
if (!root) {
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
