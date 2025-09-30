import type { Metadata } from 'next'
import './globals.css'
import { Navbar1 } from '@/components/Navbar1'
import { Footer6 } from '@/components/Footer6'
import ReadingProgress from '@/components/ReadingProgress'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'UWV Cliëntenraad - Jaarverslag 2024',
  description: 'Online jaarverslag',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col relative">
        <div className="relative z-10 flex flex-col min-h-screen">
          <ReadingProgress />
          <Navbar1 />
          <main className="flex-1">
            {children}
          </main>
          <Footer6 />
          <BackToTop />
        </div>
        <div className="fixed bottom-0 left-0 w-full pointer-events-none -z-10" aria-hidden>
          <img src="/images/bg_content.svg" alt="" className="w-full h-auto select-none" />
        </div>
      </body>
    </html>
  )
}
