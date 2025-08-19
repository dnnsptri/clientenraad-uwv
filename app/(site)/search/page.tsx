import React from 'react'
import { Container } from '@/components/layout/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Zoeken',
  description: 'Zoek door het Jaarverslag 2024 van de UWV cliëntenraad',
})

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Container>
        <div className="py-8">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Zoeken', href: '/search' }
            ]} 
          />
        </div>
        
        <div className="max-w-4xl mx-auto py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Zoeken
            </h1>
            <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
              Zoek door alle content van het jaarverslag
            </p>
          </header>

          <div className="text-center space-y-6">
            <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200">
              <p className="text-lg text-neutral-700 mb-4">
                Zoekfunctionaliteit is momenteel uitgeschakeld.
              </p>
              <p className="text-neutral-600">
                Gebruik de navigatie om door het jaarverslag te bladeren.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-neutral-900">
                Navigatie opties
              </h2>
              <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <a
                  href="/foreword"
                  className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Voorwoord lezen
                </a>
                <a
                  href="/attachments"
                  className="inline-block bg-secondary-500 hover:bg-secondary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  PDF downloaden
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/*
// Search functionality (commented out as requested)
'use client'

import React, { useState, useEffect } from 'react'
import { Container } from '@/components/layout/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { searchInterviews } from '@/lib/content'
import { InterviewCard } from '@/components/report/InterviewCard'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (query.trim()) {
      setIsSearching(true)
      searchInterviews(query).then(setResults).finally(() => setIsSearching(false))
    } else {
      setResults([])
    }
  }, [query])

  return (
    <div className="min-h-screen bg-white">
      <Container>
        <div className="py-8">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Zoeken', href: '/search' }
            ]} 
          />
        </div>
        
        <div className="max-w-4xl mx-auto py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Zoeken
            </h1>
            <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
              Zoek door alle content van het jaarverslag
            </p>
          </header>

          <div className="space-y-8">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek op naam, rol, of inhoud..."
                className="w-full px-4 py-3 text-lg border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {isSearching && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto"></div>
                <p className="mt-2 text-neutral-600">Zoeken...</p>
              </div>
            )}

            {!isSearching && query && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-neutral-900">
                  Zoekresultaten ({results.length})
                </h2>
                
                {results.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {results.map((interview) => (
                      <InterviewCard key={interview.slug} interview={interview} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-neutral-600">Geen resultaten gevonden voor "{query}"</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
*/