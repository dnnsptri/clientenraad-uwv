'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center py-12">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-primary-500">
              Oeps!
            </h1>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Er is iets misgegaan
              </h2>
              <p className="text-lg text-neutral-700">
                Er is een onverwachte fout opgetreden. Probeer de pagina te verversen.
              </p>
            </div>
            <div className="pt-6 space-y-4">
              <button
                onClick={reset}
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
              >
                Probeer opnieuw
              </button>
              <div className="text-sm text-neutral-600">
                <p>Of ga naar een van deze pagina's:</p>
                <div className="flex justify-center space-x-4 mt-2">
                  <a
                    href="/"
                    className="text-primary-500 hover:text-primary-600 underline"
                  >
                    Home
                  </a>
                  <a
                    href="/foreword"
                    className="text-primary-500 hover:text-primary-600 underline"
                  >
                    Voorwoord
                  </a>
                  <a
                    href="/attachments"
                    className="text-primary-500 hover:text-primary-600 underline"
                  >
                    Bijlagen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
