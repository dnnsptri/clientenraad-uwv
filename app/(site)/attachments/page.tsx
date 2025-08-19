import React from 'react'
import { Container } from '@/components/layout/Container'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { PdfDownloadButton } from '@/components/report/PdfDownloadButton'
import { getAttachments } from '@/lib/content'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Bijlagen',
  description: 'Download het volledige Jaarverslag 2024 van de UWV cliëntenraad',
})

export default async function AttachmentsPage() {
  const attachments = await getAttachments()

  return (
    <div className="min-h-screen bg-white">
      <Container>
        <div className="py-8">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Bijlagen', href: '/attachments' }
            ]} 
          />
        </div>
        
        <div className="max-w-4xl mx-auto py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Bijlagen
            </h1>
            <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
              Download het volledige jaarverslag inclusief alle interviews, het voorwoord en bijlagen
            </p>
          </header>

          <div className="space-y-8">
            {attachments.map((attachment) => (
              <div key={attachment.id} className="bg-neutral-50 rounded-lg p-8 border border-neutral-200">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-neutral-900">
                      {attachment.title}
                    </h2>
                    <p className="text-neutral-700">
                      {attachment.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-neutral-600">
                      <span>Type: {attachment.fileType}</span>
                      <span>Grootte: {attachment.fileSize}</span>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <PdfDownloadButton 
                      variant="primary"
                      className="text-lg px-8 py-4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-600 mb-6">
              Het jaarverslag is beschikbaar als PDF-document en kan worden gedownload 
              voor offline gebruik of printen.
            </p>
            <div className="inline-flex items-center space-x-2 text-sm text-neutral-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>PDF wordt gegenereerd op basis van de website content</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}