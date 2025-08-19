'use client'

import Script from 'next/script'

export interface GoogleAnalyticsProps {
  gaId: string
}

/**
 * Google Analytics 4 component
 */
export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag(&apos;js&apos;, new Date());
          gtag(&apos;config&apos;, &apos;${gaId}&apos;, {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  )
}