/**
 * Accessibility utilities and helpers
 */

/**
 * Generate accessible ID for elements
 */
export function generateId(prefix: string, text: string): string {
  return `${prefix}-${text.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
}

/**
 * Check if color contrast meets WCAG AA standards
 * @param foreground - Foreground color (hex)
 * @param background - Background color (hex)
 * @returns boolean indicating if contrast meets AA standards
 */
export function checkContrast(foreground: string, background: string): boolean {
  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }

  const fg = hexToRgb(foreground)
  const bg = hexToRgb(background)

  if (!fg || !bg) return false

  // Calculate relative luminance
  const getLuminance = (r: number, g: number, b: number) => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
  }

  const fgLum = getLuminance(fg.r, fg.g, fg.b)
  const bgLum = getLuminance(bg.r, bg.g, bg.b)

  // Calculate contrast ratio
  const ratio = (Math.max(fgLum, bgLum) + 0.05) / (Math.min(fgLum, bgLum) + 0.05)

  // WCAG AA requires 4.5:1 for normal text, 3:1 for large text
  return ratio >= 4.5
}

/**
 * Generate accessible label for form elements
 */
export function generateLabel(id: string, text: string): string {
  return `${text} (${id})`
}

/**
 * Skip to content link component props
 */
export interface SkipToContentProps {
  targetId: string
  children?: React.ReactNode
}

/**
 * Focus management utilities
 */
export const focusManagement = {
  /**
   * Trap focus within a container
   */
  trapFocus: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    container.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    })
  },

  /**
   * Move focus to first focusable element in container
   */
  focusFirst: (container: HTMLElement) => {
    const firstElement = container.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as HTMLElement
    
    if (firstElement) {
      firstElement.focus()
    }
  }
}