import type { Metadata } from 'next'
import { Work_Sans, Open_Sans } from 'next/font/google'
import { siteConfig } from '@/content/site.config'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SkipToContent } from '@/components/ui/SkipToContent'
import { GoogleAnalytics } from '@/components/ui/GoogleAnalytics'
import { CookieConsent } from '@/components/ui/CookieConsent'
import { ReadingProgress } from '@/components/ui/ReadingProgress'

import '@/styles/global.css'

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: '/',
    siteName: siteConfig.name,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${workSans.variable} ${openSans.variable}`}>
      <body>
        <SkipToContent />
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
            <CookieConsent />
          </>
        )}
      </body>
    </html>
  )
}