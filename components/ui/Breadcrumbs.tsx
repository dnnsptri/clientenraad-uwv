import React from 'react'
import Link from 'next/link'

export interface BreadcrumbItem {
  label: string
  href: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

/**
 * Breadcrumb navigation component
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm">
      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          {index > 0 && (
            <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
          {index === items.length - 1 ? (
            <span className="text-neutral-600 font-medium">
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className="text-neutral-500 hover:text-primary-500 transition-colors duration-200"
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}