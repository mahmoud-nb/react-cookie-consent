import React from 'react'
import { createRoot } from 'react-dom/client'
import CookieConsent from '../components/CookieConsent'

export function injectCookieConsent(
  onAccept: () => void = () => {},
  onDecline: () => void = () => {}
) {
  const containerElement = document.createElement('div')
  document.body.appendChild(containerElement)

  const root = createRoot(containerElement)
  root.render(
    React.createElement(CookieConsent, { onAccept, onDecline })
  )
}