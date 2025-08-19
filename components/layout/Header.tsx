'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/content/site.config'
import { Button } from '@/components/ui/Button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-40 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src="/images/uwv_logo.svg"
                  alt="UWV Logo"
                  width={48}
                  height={45}
                  className="w-full h-full object-contain"
                />
              </div>
              
            </div>
            <div className="hidden lg:block">
              <h1 className="text-xl font-bold text-secondary-500 max-w-xs">Jaarverslag 2024</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-primary-500 transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-neutral-700 hover:text-primary-500 hover:bg-neutral-100 transition-colors duration-200"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200 py-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-500 transition-colors duration-200 font-medium px-4 py-2 rounded-md hover:bg-neutral-50 flex items-center justify-between"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  <svg
                    className="w-4 h-4 text-neutral-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}