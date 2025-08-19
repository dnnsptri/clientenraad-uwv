'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'

// Add type definition for gtag
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
  }
}

export interface PdfDownloadButtonProps {
  className?: string
  variant?: 'primary' | 'secondary'
}

/**
 * PDF download button component
 */
export function PdfDownloadButton({ 
  className, 
  variant = 'primary' 
}: PdfDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    
    try {
      // Track download in analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'download', {
          event_category: 'engagement',
          event_label: 'jaarverslag-2024-pdf',
          value: 1
        })
      }

      // Trigger download
      const response = await fetch('/download')
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'UWV-Cliëntenraad-Jaarverslag-2024.pdf'
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      }
    } catch (error) {
      console.error('Download failed:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      variant={variant}
      size="lg"
      className={className}
    >
      {isDownloading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Downloaden...
        </>
      ) : (
        <>
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Jaarverslag 2024
        </>
      )}
    </Button>
  )
}