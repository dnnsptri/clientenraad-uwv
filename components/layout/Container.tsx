import React from 'react'
import { clsx } from 'clsx'

export interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

/**
 * Responsive container component with consistent max-width and padding
 */
export function Container({ 
  children, 
  className, 
  as: Component = 'div' 
}: ContainerProps) {
  return (
    <Component className={clsx('container-custom', className)}>
      {children}
    </Component>
  )
}