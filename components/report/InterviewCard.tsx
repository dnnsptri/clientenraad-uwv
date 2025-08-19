import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Interview } from '@/lib/content'

export interface InterviewCardProps {
  interview: Interview
}

/**
 * Interactive interview card component with mouseover effects
 */
export function InterviewCard({ interview }: InterviewCardProps) {
  return (
    <Link
      href={interview.slug === 'maarten-oosterveld' ? '/interviews/maarten-oosterveld' : `/interviews/${interview.slug}`}
      prefetch={false}
      className="interview-card-small block group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 rounded-xl">
        {interview.interviewee.photo ? (
          <Image
            src={interview.interviewee.photo}
            alt={`Portret van ${interview.interviewee.name}`}
            fill
            className="interview-image object-cover transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-white text-2xl font-bold">
                {interview.interviewee.name.charAt(0)}
              </span>
            </div>
          </div>
        )}

        {/* Dark overlay with 85% opacity */}
        <div className="absolute inset-0 bg-neutral-900/85 transition-colors duration-500" />

        {/* Name and Role Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
          <h3 className="text-lg font-bold text-white group-hover:text-primary-500 transition-colors duration-300 line-clamp-2 interview-name">
            {interview.title}
          </h3>
          <p className="text-lg font-bold text-white group-hover:text-primary-500 transition-colors duration-300 interview-name">
            {interview.interviewee.name}
          </p>
          <p className="text-sm text-white/80 font-medium">
            {interview.interviewee.role}
          </p>
        </div>

        {/* Hover arrow indicator */}
        <div className="interview-arrow">
          <div className="arrow-circle">
            <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}