'use client'

import React, { useEffect, useState } from 'react'

/**
 * Reading progress indicator component
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(Math.min(scrollPercent, 100))
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="reading-progress">
      <div 
        className="reading-progress-bar"
        style={{ width: `${progress}%` }}
        aria-label={`Reading progress: ${Math.round(progress)}%`}
      />
    </div>
  )
}