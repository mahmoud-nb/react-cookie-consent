import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { injectCookieConsent } from './index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Injecter le consentement des cookies
injectCookieConsent(
  () => console.log('Cookies acceptés'),
  () => console.log('Cookies refusés')
)