import React from 'react'
import { Container } from '@/components/layout/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Voorwoord',
  description: 'Voorwoord van het Jaarverslag 2024 van de UWV cliëntenraad',
})

export default function ForewordPage() {
  return (
    <div className="min-h-screen bg-white">
      <Container>
        <div className="py-8">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Voorwoord', href: '/foreword' }
            ]} 
          />
        </div>
        
        <article className="max-w-4xl mx-auto py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Voorwoord
            </h1>
            <div className="text-lg text-neutral-600 space-y-2">
              <p>UWV cliëntenraad</p>
              <p>December 2024</p>
            </div>
          </header>

          <div className="prose-custom">
            <p>
              Hier komt de inhoud van het voorwoord. Dit wordt vervangen door de daadwerkelijke 
              content uit het PDF-document.
            </p>
            
            <p>
              Het voorwoord geeft een overzicht van het afgelopen jaar en introduceert de 
              thema's die in de interviews aan bod komen.
            </p>
          </div>
        </article>
      </Container>
    </div>
  )
}