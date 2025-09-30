import { notFound } from 'next/navigation'
import { HeroBlue } from '@/components/Hero50'
import { articles, getHeroContent } from '@/lib/articles'
import FadeInSection from '@/components/FadeInSection'

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  if (!resolvedParams?.slug) notFound()
  
  const article = articles.find(a => a.slug === resolvedParams.slug)
  if (!article) notFound()

  const heroContent = getHeroContent(resolvedParams.slug);

  return (
    <main>
      <FadeInSection>
        <HeroBlue 
          title={heroContent.title}
          description={heroContent.description}
          image={heroContent.image}
        />
      </FadeInSection>
      <FadeInSection>
        <div className="py-16">
          <div className="container">
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="w-full">
                  <div>
                    <div className="prose prose-h2:scroll-m-10 mt-6">
                      <p className="intro leading-7 mb-6">
                        {article.description}
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        {article.title}
                      </h2>
                      {(article.content || "")
                        .split(/\n\s*\n/) // paragraphs separated by blank lines
                        .map((para, i) => (
                          <p key={i} className="text-[19px] leading-8  mb-4">
                            {para.trim()}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </main>
  )
}