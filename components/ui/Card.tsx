import React from 'react'
import { clsx } from 'clsx'

export interface CardProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  href?: string
}

/**
 * Versatile card component that can be a div or link
 */
export function Card({ 
  children, 
  className, 
  as: Component = 'div',
  href,
  ...props 
}: CardProps) {
  const baseClasses = 'bg-white rounded-lg shadow-sm border border-neutral-200 p-6 hover:shadow-md transition-all duration-200'
  
  const classes = clsx(
    baseClasses,
    href && 'cursor-pointer hover:border-primary-300',
    className
  )

  if (href && Component === 'div') {
    Component = 'a'
  }

  return (
    <Component 
      className={classes}
      href={href}
      {...props}
    >
      {children}
    </Component>
  )
}