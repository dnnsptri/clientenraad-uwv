import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'

export default function InterviewsNotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center py-12">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-primary-500">
              404
            </h1>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Interviews niet gevonden
              </h2>
              <p className="text-lg text-neutral-700">
                De interviews die u zoekt zijn niet beschikbaar.
              </p>
            </div>
            <div className="pt-6 space-y-4">
              <Link
                href="/"
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
              >
                Terug naar home
              </Link>
              <div className="text-sm text-neutral-600">
                <p>Of ga naar een van deze pagina's:</p>
                <div className="flex justify-center space-x-4 mt-2">
                  <Link
                    href="/foreword"
                    className="text-primary-500 hover:text-primary-600 underline"
                  >
                    Voorwoord
                  </Link>
                  <Link
                    href="/attachments"
                    className="text-primary-500 hover:text-primary-600 underline"
                  >
                    Bijlagen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
