import React from 'react'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Interview: Maarten Oosterveld',
  description: 'Minimal detailpagina voor Maarten Oosterveld',
})

export default function MaartenMinimalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero visual */}
      <section className="relative w-full" style={{ height: '760px' }}>
        <Image
          src="/images/MaartenOosterveld1.jpg"
          alt="Header visual Maarten Oosterveld"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Overlapping blue bar with title, subtitle and arrow */}
      <div className="relative -mt-12">
        <Container>
          <div className="max-w-[1020px] mx-auto w-full bg-primary-600 text-white">
            <div className="flex items-center justify-between px-8 py-6 md:px-8 md:py-8">
              <div className="space-y-2">
                <h1 className="font-medium text-[40px] leading-tight tracking-tight">1UWV</h1>
                <p className="text-[20px] leading-[120%] font-semibold text-white">
                  Eric en Petra in gesprek met Maarten Oosterveld (SMZ)
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Content blocks with 80px spacing */}
      <Container>
        <div className="py-12 md:py-16 px-8 max-w-[1020px] mx-auto space-y-20">
          {/* Intro */}
          <div>
            <p className="text-neutral-900 font-semibold text-[24px] leading-[120%]">Maarten Oosterveld is manager Sociaal Medische Zaken (SMZ) bij UWV. Vanuit Arnhem werkt hij in de functie van experimentleider aan wat heet, 1UWV - een filosofie en werkwijze, ontstaan vanuit de gedachte dat het UWV de klantreis van de cliënt wilde vereenvoudigen, zonder veel verschillende loketten en contactpersonen.</p>
          </div>

          {/* Body 1 */}
          <div className="space-y-6 text-neutral-800">
            <p className="text-[17px] leading-[180%]">
              Vanuit Arnhem werkt hij in de functie van experimentleider aan wat heet, 1UWV - een filosofie en werkwijze, ontstaan vanuit de gedachte dat het UWV de klantreis van de cliënt wilde vereenvoudigen, zonder veel verschillende loketten en contactpersonen.
            </p>
            <p className="text-[17px] leading-[180%]">
              Momenteel is hij bezig deze werkwijze met een - waarschijnlijk - aangeboren enthousiasme te verspreiden binnen UWV. In dit artikel vertelt hij over de ontstaans-geschiedenis van 1UW, de stand van zaken en de toekomstplannen.
            </p>
          </div>

          {/* Centered Quote Block */}
          <div>
            <div className="relative">
              <div className="absolute -top-6 left-8 w-0 h-0 border-b-[32px] border-b-primary-600 border-r-[64px] border-r-transparent" aria-hidden="true" />
              <div className="bg-primary-600 text-white px-8 md:px-10 py-10 md:py-12">
                <blockquote className="text-[28px] md:text-[36px] leading-[140%] font-semibold tracking-wide">
                  ‘Door 1UWV wordt er niet meer gepingpongd met de cliënt’
                </blockquote>
                <div className="mt-8 text-white/90 text-[20px]">Maarten Oosterveld</div>
              </div>
            </div>
          </div>

          {/* Body 2 */}
          <div className="space-y-6 text-neutral-800">
            <p className="text-[17px] leading-[180%]">
                In 2021 steken Maarten en zijn collega Peter Zaagman - manager bij de afdeling Beroep en Bezwaar - voor het eerst de koppen bij elkaar en buigen zich over de schaarste van artsen-capaciteit. Maarten heeft namens SMZ de opdracht om artsen te leveren aan de afdeling van Peter, maar in de praktijk werkte dat niet altijd zo eenvoudig, vertelt hij. We kampten met tekorten en vroegen ons af of we onze processen anders konden inrichten om de mensen die we hadden, efficiënter in te zetten. Zo ontstond de Proeftuin SMZ Bezwaar & Beroep, waarbij we de dienstverlening en samenwerking tussen de afdelingen optimaliseerden om bezwaren te verminderen.’ Die proeftuin vormde het voorland van wat daarna 1UWV is gaan heten.
            </p>
            <p className="text-[17px] leading-[180%]">
                Momenteel is Maarten bezig deze werkwijze tot gemeengoed te maken binnen UWV. Voor het jaarverslag van de UWV-cliëntenraden liet hij zich interviewen door Petra van Wieringen (OGN) en Eric Beukema (OGN), beiden lid van het redactieoverleg dat dit jaarverslag inhoudelijk vormgeeft.’
            </p>
          </div>

          {/* Body 3 */}
          <div className="flex justify-center">
              <Image src="/images/uwv_logo.svg" alt="UWV logo" width={80} height={75} />
          </div>
          <h2 className="text-secondary-500 font-semibold text-[24px] mb-4">Die verbinding tussen afdelingen klinkt zo eenvoudig. Waarom is dit niet altijd al de werkwijze geweest?</h2>
          <div className="space-y-6 text-neutral-800">
            <p className="text-[17px] leading-[180%]">
                Die verschotting tussen afdelingen is ontstaan door de manier waarop de organisatie historisch is gegroeid. UWV is een omvangrijke organisatie waar door de jaren heen steeds meer processen zijn gestandaardiseerd en opgeknipt. Verschillende afdelingen werkten dus apart van elkaar, wat soms ook leidde tot klanten die tussen wal en schip vielen. Daar wilden we iets mee. Door professionals bij elkaar te zetten en te laten praten over de inhoud en bedoeling van hun werk, zagen we dat we de dienstverlening konden verbeteren. Op het moment werken we aan plannen om een nieuwe klantzone op te tuigen waar alle dienstverlening wordt vervlochten. Dit om de klant optimaal te kunnen bedienen, op één plek. Goed, daarvoor zal ook nieuwe huisvesting nodig zijn.
            </p>
          </div>

          {/* Centered Quote Block */}
          <div>
            <div className="relative">
              <div className="absolute -top-6 left-8 w-0 h-0 border-b-[32px] border-b-primary-600 border-r-[64px] border-r-transparent" aria-hidden="true" />
              <div className="bg-primary-600 text-white px-8 md:px-10 py-10 md:py-12">
                <blockquote className="text-[28px] md:text-[36px] leading-[140%] font-semibold tracking-wide">
                  ‘Communicatie is het toverwoord – het gaat om een proactieve houding, zowel intern als richting de cliënt’
                </blockquote>
              </div>
            </div>
          </div>
          {/* Body 4 */}
        </div>
      </Container>
    </div>
  )
}
