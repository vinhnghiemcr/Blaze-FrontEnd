import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'


const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
)

