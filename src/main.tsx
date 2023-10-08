import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles.scss'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <Analytics />
    </React.StrictMode>
  </BrowserRouter>
)
