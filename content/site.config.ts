export const siteConfig = {
  siteName: 'UWV cliëntenraad',
  year: '2024',
  title: 'Jaarverslag 2024',
  subtitle: 'Werken aan kwalitatieve dienstverlening op maat',
  description: 'Jaarverslag 2024 van de UWV cliëntenraad - Een overzicht van onze activiteiten en resultaten',
  url: 'https://uwv-clientenraad.nl',
  ogImage: '/opengraph.png',
  theme: {
    colors: {
      primary: '#00A8FF',
      primaryDark: '#007EBE',
      secondary: '#650260',
      secondaryLight: '#7D256A',
      dark: '#0F0F11',
      lightGray: '#F6F6F6',
      white: '#FFFFFF',
    },
    fonts: {
      sans: 'Work Sans',
    },
  },
  social: {
    twitter: '@uwv_clientenraad',
    linkedin: 'uwv-clientenraad',
  },
  authors: [
    {
      name: 'UWV cliëntenraad',
      role: 'Redactie',
      organization: 'UWV cliëntenraad',
    },
  ],
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Voorwoord', href: '/foreword' },
    { name: 'Alle Interviews', href: '/interviews' },
    { name: 'Bijlagen', href: '/attachments' },
  ],
} as const

export type SiteConfig = typeof siteConfig