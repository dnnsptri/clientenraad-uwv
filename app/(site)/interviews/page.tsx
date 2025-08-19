import React from 'react'
import { Container } from '@/components/layout/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Alle Interviews',
  description: 'Bekijk alle interviews uit het Jaarverslag 2024 van de UWV cliëntenraad',
})

export default function InterviewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Container>
        <div className="py-8">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Alle Interviews', href: '/interviews' }
            ]} 
          />
        </div>
        
        <div className="max-w-7xl mx-auto py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Alle Interviews
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Overzicht van interviews
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/interviews/maarten-oosterveld" className="block group">
              <div className="relative overflow-hidden bg-neutral-100 rounded-xl aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500" />
                <div className="absolute inset-0 flex items-end p-4">
                  <h3 className="text-white text-xl font-bold">Interview 3</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}