import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


/* --=======================================
    Start Import BrowserRouter Here 
========================================-- */
import { BrowserRouter } from 'react-router-dom'
/* --=======================================
    End Import BrowserRouter Here 
========================================-- */


createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </>
)
