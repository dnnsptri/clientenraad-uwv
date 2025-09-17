import { Hero175 } from "@/components/Hero175";
import { Gallery31 } from "@/components/Gallery31";
import { Cta5 } from "@/components/Cta5";
import FadeInSection from "@/components/FadeInSection";

export default function Page() {
  return (
    <main className="p-0">
      <FadeInSection>
        <Hero175 />
      </FadeInSection>
      <FadeInSection>
        <Gallery31 />
      </FadeInSection>
      <FadeInSection>
        <Cta5 />
      </FadeInSection>
    </main>
  )
}
