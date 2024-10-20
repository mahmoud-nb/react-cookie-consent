import React, { useState, useEffect } from 'react'
import '../styles/CookieConsent.css'

interface CookieConsentProps {
  onAccept: () => void
  onDecline: () => void
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent')
    if (hasConsent === null) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
    onAccept()
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setIsVisible(false)
    onDecline()
  }

  if (!isVisible) return null

  return (
    <div className="cookie-consent">
      <p>Ce site utilise des cookies pour améliorer votre expérience. Acceptez-vous l'utilisation des cookies ?</p>
      <div className="cookie-consent-buttons">
        <button onClick={handleAccept}>Accepter</button>
        <button onClick={handleDecline}>Refuser</button>
      </div>
    </div>
  )
}

export default CookieConsent