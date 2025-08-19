'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'

/**
 * Cookie consent banner component
 */
export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 z-50 shadow-lg">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-semibold text-neutral-900">
              Cookies en privacy
            </h3>
            <p className="text-sm text-neutral-700">
              Deze website gebruikt cookies om uw ervaring te verbeteren en verkeer te analyseren. 
              Door de website te gebruiken gaat u akkoord met ons cookiebeleid.
            </p>
          </div>
          
          <div className="flex space-x-3">
            <Button
              onClick={declineCookies}
              variant="outline"
              size="sm"
            >
              Weigeren
            </Button>
            <Button
              onClick={acceptCookies}
              variant="primary"
              size="sm"
            >
              Accepteren
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}