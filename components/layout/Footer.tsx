'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/content/site.config'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary-500 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="/images/uwv_logo.svg"
                  alt="UWV Logo"
                  width={40}
                  height={37}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-sm font-semibold">cliëntenraad</div>
                <div className="text-xs text-white/80 font-bold">UWV</div>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Werken aan kwalitatieve dienstverlening op maat voor alle UWV cliënten
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href={`https://twitter.com/${siteConfig.social.twitter.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href={`https://linkedin.com/company/${siteConfig.social.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Snelle links</h3>
            <nav className="flex flex-col space-y-2">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Over ons</h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>De UWV cliëntenraad vertegenwoordigt de belangen van alle UWV cliënten.</p>
              <p>We werken samen met UWV om de dienstverlening te verbeteren en toegankelijker te maken.</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>UWV cliëntenraad</p>
              <p>Postbus 30035</p>
              <p>9700 RM Groningen</p>
              <div className="pt-2">
                <a 
                  href="mailto:info@uwv-clientenraad.nl" 
                  className="text-white hover:text-white/80 transition-colors duration-200 underline decoration-2 underline-offset-2"
                >
                  info@uwv-clientenraad.nl
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-sm">
              © {new Date().getFullYear()} UWV cliëntenraad. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy
              </Link>
              <Link href="/voorwaarden" className="hover:text-white transition-colors duration-200">
                Voorwaarden
              </Link>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-1 hover:text-white transition-colors duration-200"
                aria-label="Terug naar boven"
              >
                <span>Terug naar boven</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}