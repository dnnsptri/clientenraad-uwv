import { Metadata } from 'next'
import { siteConfig } from '@/content/site.config'

export interface SeoProps {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
}

/**
 * Generate metadata for SEO and Open Graph
 */
export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
}: SeoProps): Metadata {
  const siteTitle = title 
    ? `${title} | ${siteConfig.siteName}`
    : siteConfig.siteName

  const siteDescription = description || siteConfig.description
  const siteImage = image || siteConfig.ogImage

  return {
    title: siteTitle,
    description: siteDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: siteConfig.url,
      siteName: siteConfig.siteName,
      images: [
        {
          url: siteImage,
          width: 1200,
          height: 630,
          alt: siteConfig.siteName,
        },
      ],
      locale: 'nl_NL',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [siteImage],
      creator: siteConfig.social.twitter,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  }
}

/**
 * Generate structured data for articles
 */
export function generateArticleStructuredData({
  title,
  description,
  author,
  date,
  image,
  url,
}: {
  title: string
  description: string
  author: string
  date: string
  image?: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image || siteConfig.ogImage,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    datePublished: date,
    dateModified: date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}