export interface Article {
  slug: string;
  title: string;
  description: string;
  content?: string;
  // Preferred canonical author field
  author?: string;
  // Some items may use "name" from interviewee; keep for compatibility
  name?: string;
  publishedAt?: string;
  readTime?: string;
  category?: string;
  image: string;
}

export const articles: Article[] = [
  {
    slug: "1uwv-maarten-oosterveld",
    title: "1UWV",
    description: "Eric & Petra in gesprek met Maarten Oosterveld (SMZ)",
    content: "Door 1UWV wordt er niet meer gepingpongd met de cliënt",
    author: "Maarten Oosterveld (SMZ)",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
  },
  {
    slug: "kwaliteit-hans-sijtsma",
    title: "Kwaliteit door bruggen bouwen",
    description: "Hans Sijtsma (Noord) in gesprek met Dick",
    content: "We moeten bruggen bouwen, geen barricades opwerpen",
    author: "Hans Sijtsma (Noord)",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
  },
  {
    slug: "kwaliteit-ans-lockhoff",
    title: "Menselijke maat in kwaliteit",
    description: "Ans Lockhoff (MOB) in gesprek met Gerard",
    content: "Cliënten verdienen meer dan een systeemmatige benadering",
    author: "Ans Lockhoff (MOB)",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
  },
  {
    slug: "reintegratie-kees-van-blerck",
    title: "Het nieuwe re-integratie model",
    description: "Eric en Petra in gesprek met Kees van Blerck",
    content: "Re-integratie begint bij écht luisteren en maatwerk",
    author: "Kees van Blerck (Re-integratie)",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
  },
  {
    slug: "moreel-beraad-hermsen-barendrecht",
    title: "Moreel beraad",
    description: "Eric in gesprek met Theo Hermsen (SMZ) en Marloes Barendrecht (SMZ)",
    author: "Theo Hermsen en Marloes Barendrecht (SMZ)",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg"
  }
];

// Helper function to get hero content for articles
export const getHeroContent = (slug: string) => {
  const article = articles.find(a => a.slug === slug);
  if (!article) {
    return {
      title: "Artikel niet gevonden",
      description: "Het gevraagde artikel kon niet worden gevonden.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
    };
  }
  
  return {
    title: article.title,
    description: article.description,
    image: article.image
  };
};

// Helper function to get navbar menu items
export const getNavbarMenuItems = () => {
  return articles.map(article => ({
    title: article.title,
    description: article.description,
    url: `/articles/${article.slug}`
  }));
};
