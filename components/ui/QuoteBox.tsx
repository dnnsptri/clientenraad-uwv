import React from 'react'
import { clsx } from 'clsx'

export interface QuoteBoxProps {
  children: React.ReactNode
  className?: string
  author?: string
  role?: string
}

/**
 * Styled quote box component for highlighting important quotes
 */
export function QuoteBox({ 
  children, 
  className, 
  author, 
  role 
}: QuoteBoxProps) {
  return (
    <blockquote className={clsx(
      'relative bg-primary-50 border-l-4 border-primary-500 pl-6 py-4 my-6 italic text-neutral-700',
      className
    )}>
      <div className="text-lg leading-relaxed mb-3">
        &ldquo;{children}&rdquo;
      </div>
      {(author || role) && (
        <footer className="text-sm text-neutral-600 not-italic">
          {author && <span className="font-semibold">{author}</span>}
          {author && role && <span className="mx-2">•</span>}
          {role && <span>{role}</span>}
        </footer>
      )}
    </blockquote>
  )
}