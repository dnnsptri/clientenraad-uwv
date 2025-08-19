import { siteConfig } from '@/content/site.config'

export interface Interview {
  slug: string
  title: string
  interviewee: {
    name: string
    role: string
    organization: string
    photo?: string
  }
  summary: string
  date: string
  tags: string[]
  content: string
  heroImage?: string
}

export interface Attachment {
  id: string
  title: string
  description: string
  fileType: string
  fileSize: string
  downloadUrl: string
}

export interface Foreword {
  title: string
  author: string
  date: string
  content: string
}

/**
 * Get all interviews
 */
export async function getInterviews(): Promise<Interview[]> {
  // This would typically fetch from MDX files
  // For now, returning mock data with one real interview
  return [
    {
      slug: 'maarten-oosterveld',
      title: '1UWV - Eric en Petra in gesprek met Maarten Oosterveld (SMZ)',
      interviewee: {
        name: 'Maarten Oosterveld',
        role: 'Manager Sociaal Medische Zaken (SMZ)',
        organization: 'UWV',
        photo: '/images/interviews/maarten-oosterveld.jpg',
      },
      summary: 'Maarten Oosterveld is manager Sociaal Medische Zaken (SMZ) bij UWV. In dit interview vertelt hij over de 1UWV filosofie en hoe dit de dienstverlening verbetert.',
      date: '2024-12-01',
      tags: ['1UWV', 'SMZ', 'dienstverlening', 'management'],
      content: 'Interview content hier...',
      heroImage: '/images/interviews/maarten-oosterveld-hero.jpg',
    },
    {
      slug: 'sarah-jansen',
      title: 'Interview met Sarah Jansen',
      interviewee: {
        name: 'Sarah Jansen',
        role: 'Lid',
        organization: 'UWV cliëntenraad',
        photo: '/images/interviews/sarah.jpg',
      },
      summary: 'Perspectief van een ervaren lid op de dagelijkse praktijk van de raad.',
      date: '2024-12-02',
      tags: ['lid', 'praktijk', 'ervaring'],
      content: 'Interview content hier...',
      heroImage: '/images/interviews/sarah-hero.jpg',
    },
    {
      slug: 'peter-de-vries',
      title: 'Interview met Peter de Vries',
      interviewee: {
        name: 'Peter de Vries',
        role: 'Secretaris',
        organization: 'UWV cliëntenraad',
        photo: '/images/interviews/peter.jpg',
      },
      summary: 'Inzicht in de administratieve en organisatorische aspecten van de raad.',
      date: '2024-12-03',
      tags: ['secretaris', 'administratie', 'organisatie'],
      content: 'Interview content hier...',
      heroImage: '/images/interviews/peter-hero.jpg',
    },
    {
      slug: 'maria-rodriguez',
      title: 'Interview met Maria Rodriguez',
      interviewee: {
        name: 'Maria Rodriguez',
        role: 'Lid',
        organization: 'UWV cliëntenraad',
        photo: '/images/interviews/maria.jpg',
      },
      summary: 'Perspectief op diversiteit en inclusie binnen de cliëntenraad.',
      date: '2024-12-04',
      tags: ['lid', 'diversiteit', 'inclusie'],
      content: 'Interview content hier...',
      heroImage: '/images/interviews/maria-hero.jpg',
    },
    {
      slug: 'johan-bakker',
      title: 'Interview met Johan Bakker',
      interviewee: {
        name: 'Johan Bakker',
        role: 'Lid',
        organization: 'UWV cliëntenraad',
        photo: '/images/interviews/johan.jpg',
      },
      summary: 'Ervaringen met digitale transformatie en moderne communicatiemethoden.',
      date: '2024-12-05',
      tags: ['lid', 'digitale transformatie', 'communicatie'],
      content: 'Interview content hier...',
      heroImage: '/images/interviews/johan-hero.jpg',
    },
    {
      slug: 'lisa-van-dongen',
      title: 'Interview met Lisa van Dongen',
      interviewee: {
        name: 'Lisa van Dongen',
        role: 'Lid',
        organization: 'UWV cliëntenraad',
        photo: '/images/interviews/lisa.jpg',
      },
      summary: 'Focus op klanttevredenheid en kwaliteitsverbetering van diensten.',
      date: '2024-12-06',
      tags: ['lid', 'klanttevredenheid', 'kwaliteit'],
      content: 'Interview content hier...',
      heroImage: '/images/interviews/lisa-hero.jpg',
    },
    {
      slug: 'thomas-mueller',
      title: 'Interview met Thomas Mueller',
      interviewee: {
        name: 'Thomas Mueller',
        role: 'Lid',
        organization: 'UWV cliëntenraad',
        photo: '/images/interviews/thomas.jpg',
      },
      summary: 'Internationale perspectieven en best practices uit andere landen.',
      date: '2024-12-07',
      tags: ['lid', 'internationaal', 'best practices'],
      content: 'Interview content hier...',
      heroImage: '/images/interviews/thomas-hero.jpg',
    },
  ]
}

/**
 * Get interview by slug
 */
export async function getInterview(slug: string): Promise<Interview | null> {
  const interviews = await getInterviews()
  return interviews.find(interview => interview.slug === slug) || null
}

/**
 * Get foreword content
 */
export async function getForeword(): Promise<Foreword> {
  return {
    title: 'Voorwoord',
    author: 'UWV cliëntenraad',
    date: '2024-12-01',
    content: 'Voorwoord content hier...',
  }
}

/**
 * Get attachments
 */
export async function getAttachments(): Promise<Attachment[]> {
  return [
    {
      id: 'jaarverslag-2024',
      title: 'Jaarverslag 2024 - Volledig rapport',
      description: 'Het complete jaarverslag 2024 van de UWV cliëntenraad in PDF-formaat.',
      fileType: 'PDF',
      fileSize: '2.4 MB',
      downloadUrl: '/download',
    },
  ]
}

/**
 * Search interviews
 */
export async function searchInterviews(query: string): Promise<Interview[]> {
  const interviews = await getInterviews()
  const searchTerm = query.toLowerCase()
  
  return interviews.filter(interview => 
    interview.title.toLowerCase().includes(searchTerm) ||
    interview.interviewee.name.toLowerCase().includes(searchTerm) ||
    interview.summary.toLowerCase().includes(searchTerm) ||
    interview.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}