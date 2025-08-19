import React from 'react'
import { Container } from '@/components/layout/Container'
import { PdfDownloadButton } from '@/components/report/PdfDownloadButton'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Jaarverslag 2024',
  description: 'Jaarverslag 2024 van de UWV cliëntenraad - Een overzicht van onze activiteiten en resultaten',
})

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Purple block with "Werken aan" */}
      <section className="bg-secondary-500 text-white py-20">
        <Container>
          <div className="text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Werken aan
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-balance">
              kwalitatieve
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold text-balance">
              dienstverlening
            </h3>
            <h4 className="text-4xl md:text-6xl font-bold text-balance">
              op maat
            </h4>
            <div className="pt-6">
              <PdfDownloadButton 
                variant="primary"
                className="text-lg px-8 py-4"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Over het Jaarverslag
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              In dit jaarverslag delen we de verhalen en ervaringen van onze cliëntenraad. 
              Ontdek hoe we samen werken aan betere dienstverlening en wat we hebben bereikt in 2024.
            </p>
          </div>
        </Container>
      </section>

      {/* Masonry grid with 7 interviews */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Alle Interviews
              </h2>
              <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
                Een masonry-overzicht met Interview 3 klikbaar en de overige niet-klikbaar
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Interview 1 - non-clickable, black */}
              <div className="block group">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-neutral-900">
                  <div className="absolute inset-0 flex items-end p-4">
                    <h3 className="text-white text-lg font-bold">Interview 1</h3>
                  </div>
                </div>
              </div>

              {/* Interview 2 - non-clickable, black */}
              <div className="block group">
                <div className="relative overflow-hidden rounded-xl aspect-square bg-neutral-900">
                  <div className="absolute inset-0 flex items-end p-4">
                    <h3 className="text-white text-lg font-bold">Interview 2</h3>
                  </div>
                </div>
              </div>

              {/* Interview 3 - clickable, same style as overview */}
              <a href="/interviews/maarten-oosterveld" className="block group">
                <div className="relative overflow-hidden bg-neutral-100 rounded-xl aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <h3 className="text-white text-xl font-bold">Interview 3</h3>
                  </div>
                </div>
              </a>

              {/* Interview 4 - non-clickable, black */}
              <div className="block group">
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-neutral-900">
                  <div className="absolute inset-0 flex items-end p-4">
                    <h3 className="text-white text-lg font-bold">Interview 4</h3>
                  </div>
                </div>
              </div>

              {/* Interview 5 - non-clickable, black (wide) */}
              <div className="block group md:col-span-2">
                <div className="relative overflow-hidden rounded-xl aspect-[3/1] bg-neutral-900">
                  <div className="absolute inset-0 flex items-end p-4">
                    <h3 className="text-white text-lg font-bold">Interview 5</h3>
                  </div>
                </div>
              </div>

              {/* Interview 6 - non-clickable, black */}
              <div className="block group">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-neutral-900">
                  <div className="absolute inset-0 flex items-end p-4">
                    <h3 className="text-white text-lg font-bold">Interview 6</h3>
                  </div>
                </div>
              </div>

              {/* Interview 7 - non-clickable, black */}
              <div className="block group">
                <div className="relative overflow-hidden rounded-xl aspect-square bg-neutral-900">
                  <div className="absolute inset-0 flex items-end p-4">
                    <h3 className="text-white text-lg font-bold">Interview 7</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-500 text-white">
        <Container>
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Download het volledige rapport
            </h2>
            <p className="text-xl text-secondary-100 max-w-2xl mx-auto">
              Lees alle interviews, het voorwoord en de bijlagen in één compleet document
            </p>
            <PdfDownloadButton 
              variant="primary"
              className="text-lg px-8 py-4"
            />
          </div>
        </Container>
      </section>
    </div>
  )
}