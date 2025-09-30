import { HeroPurple } from '@/components/HeroPurple'
import FadeInSection from '@/components/FadeInSection'
import { ContentDivider } from '@/components/ContentDivider'
import { TestimonialPurple } from '@/components/TestimonialPurple'
import { TestimonialPurplePhoto } from '@/components/TestimonialPurplePhoto'
import { getNavbarMenuItems } from '@/lib/articles'

export default function ArticleReintegratieKeesPage() {
  return (
    <main>
      <FadeInSection>
        <HeroPurple 
          title="Re-integratie begint bij écht luisteren en maatwerk"
          description="Kees van Blerck:"
          image="/images/header_kees.jpg"
        />
      </FadeInSection>
      <FadeInSection>
        <div className="py-4 overflow-visible">
          <div className="container">
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="w-full">
                  <div>
                    <div className="prose prose-h2:scroll-m-10 mt-6">
                      <p className="intro leading-7 mb-6">
                        Re-integratie bij UWV is in beweging. Niet langer draait het alleen om regels en procedures, maar steeds meer om het goede gesprek: een gesprek waarin de cliënt zich gehoord, geholpen en gezien voelt. <b>Kees van Blerck</b> is Staf Arbeidsdeskundige bij het Werkbedrijf in de regio Arnhem-Nijmegen. Vanuit die functie werkt hij sinds 2018 op dagelijkse basis aan het re-integratieproces van cliënten. In het kader van het jaarverslag van de cliëntenraden vertelt hij over het integratief gedragsmodel, de praktijk van maatwerk en de impact op cliënten. ‘Het draait om aandacht, autonomie en realisme – en dat vraagt om een persoonlijke benadering.’<br /><br />
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Eigenlijk had hij leraar willen worden, laat Kees zich bij aanvang van het gesprek ontvallen. Maar, zoals dat gaat liepen de dingen anders; na de lerarenopleiding begon hij in de gezondheidszorg waar hij patiënten hielp op het gebied van gedragsproblematiek. Later werd hij ‘jobcoach’ en werkte bij diverse scholingsinstituten en integratiebureaus. Vanaf 2002 werk hij als arbeidsdeskundige en vanaf 2013 bij UWV. ‘Hier kan ik mijn passie voor re-integratie op een mooie manier voortzetten. De cases hier zijn zo uiteenlopend, maar altijd bijzonder.’ 
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Daarom stelt hij, het is eigenlijk altijd een kwestie van maatwerk: ‘Sommige mensen hebben behoefte aan een zeker mededogen, bepaalde empathie, waar anderen het nodig hebben om gepusht te worden, in hun kracht gezet te worden.’ 
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Voor het jaarverslag van de UWV-cliëntenraden liet Kees zich interviewen door Petra van Wieringen (OGN) en Eric Beukema (OGN), beiden lid van het redactieoverleg dat dit jaarverslag inhoudelijk vormgeeft. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="py-4 overflow-visible">
          <div className="container">
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="w-full">
                  <div>
                  <div className="prose prose-h2:scroll-m-10 mt-6">
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wat bedoel je eigenlijk met ‘het goede gesprek’ als we het hebben over re-integratie?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Het goede gesprek is een gesprek waarin de cliënt zich écht gehoord, geholpen en gezien voelt. Dat klinkt eenvoudig, maar het vraagt veel van de professional. Je moet echt luisteren, doorvragen, en je oordeel uitstellen. Tegelijkertijd moet je ook richting geven en zorgen dat het gesprek ergens toe leidt. Het draait dus om maatwerk, maar weldegelijk binnen een zekere methodiek.
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Stel, je hebt een cliënt tegenover je die al jaren uit het arbeidsproces is. Dan kun je niet meteen beginnen over vacatures. Je moet eerst begrijpen wat iemand heeft meegemaakt, waar de pijn zit, en wat iemand belangrijk vindt in het leven. Pas als je dat weet, kun je samen stappen zetten richting werk. Het nieuwe model helpt om dat proces gestructureerd aan te pakken.’
                      </p>
                      <TestimonialPurple 
                         quote='Cliënten voelen zich serieus genomen. Dat is belangrijk want re-integratie is niet alleen een praktisch, maar ook een emotioneel proces'
                      />
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Hoe is het idee voor dat nieuwe model – het integratief gedragsmodel – ontstaan?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Het idee ontstond uit de behoefte om het gesprek met cliënten te verbeteren. We merkten dat standaardprocedures niet altijd recht doen aan de persoonlijke situatie. Het integratief gedragsmodel is ontwikkeld om professionals te helpen het gesprek op een meer persoonlijke, motiverende manier te voeren. Het is gebaseerd op wetenschappelijke inzichten over gedragsverandering en motivatie. Inmiddels is het geïntroduceerd in verschillende regio’s en wordt het steeds vaker toegepast, maar het is nog geen standaard. Daar maak ik me hard voor, samen met een aantal collega’s.’
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wat zijn de belangrijkste elementen van het nieuwe gespreksmodel?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Het model helpt ons om te begrijpen waar iemand staat, wat iemand nodig heeft, en hoe we daar als UWV op kunnen aansluiten. Het is daarmee een manier om empathie en maatwerk expliciet met methodiek te kunnen combineren. Het gesprek bestaat uit verschillende fasen: contact maken, verkennen, doelen stellen, en actie ondernemen. In elke fase gebruik je andere gesprekstechnieken. Bijvoorbeeld: in de verkenningsfase stel je open vragen en luister je vooral. In de actiefase geef je meer richting en maak je afspraken. 
                      </p>
                      <TestimonialPurplePhoto 
                        quote='Dit model vraagt om training en oefening. Je moet als professional op een andere manier leren luisteren en vragen stellen'
                        image={{ src: "/images/content_kees_1.jpg", alt: "Kees van Blerck" }}
                      />
                      <p className="text-[19px] leading-8  mb-4">
                        Maar het mooie is dat het model flexibel is: je kunt het aanpassen aan de situatie en de persoon. Zo kom je tot de essentie van iemands motivaties, obstakels, drijfveren in werk en mogelijkheden op de arbeidsmarkt.’
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wat levert deze aanpak concreet op voor cliënten?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Mensen voelen zich serieus genomen. Ze merken dat het niet alleen gaat om ‘wat kún je nog?’, maar ook om ‘wie ben je?’ en ‘wat wil je?’. Dat maakt het gesprek menselijker. En dat is belangrijk, want re-integratie is niet alleen een praktisch proces, maar ook een emotioneel proces. Door deze aanpak voelen cliënten zich meer betrokken en gemotiveerd, wat de kans op succesvolle re-integratie vergroot.’
                      </p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="py-4 overflow-visible">
          <div className="container">
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="w-full">
                  <div>
                    <div className="prose prose-h2:scroll-m-10 mt-6">
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Dat lijkt me ook een tijdrovende aanpak. Wat zijn de uitdagingen bij het toepassen van het model?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Tijd is inderdaad een grote uitdaging. We hebben vaak maar een uur per gesprek, en dat is soms te kort om echt de diepte in te gaan. Daarom pleit ik ervoor om een tweede gesprek te plannen als dat nodig is. Ook vraagt het model om training en oefening. Om als professional goed uit de voeten te kunnen met dit model, moet je op een andere manier leren luisteren en vragenstellen. Dat kost in het begin altijd wat extra tijd, maar het levert uiteindelijk veel op. Als je in het begin van het re-integratie proces investeert, zal uiteindelijk sneller en beter verlopen.’ 
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Hoe probeer jij in dat licht bij te dragen aan een bredere ontwikkeling binnen UWV?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Door te reflecteren, feedback te vragen en geven, en te blijven leren. Ik geef zelf ook trainingen aan collega’s, en daarin merk ik hoe waardevol het is om ervaringen uit te wisselen. Zo ontstaat snel consensus over wat ons drijft: respect, dienstverlenend zijn, samenwerken. Die waarde-gedreven vorm van werken helpt ons om niet enkel vanuit regels te denken, maar juist ook vanuit waar de cliënt goed aan doet.’
                      </p>
                      <TestimonialPurple 
                         quote='Ik werk graag met ervaringsdeskundigen. Zij brengen een ander perspectief in, wat helpt om blinde vlekken te voorkomen’'
                      />
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wat is de rol van ervaringsdeskundigen in jouw werk?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Ik werk graag samen met ervaringsdeskundigen. Zij brengen een ander perspectief in, en dat helpt om blinde vlekken te voorkomen. We hadden ooit bijvoorbeeld een cliënt die zich niet begrepen voelde door zijn arbeidsdeskundige. Toen hebben we een ervaringsdeskundige gevraagd om mee te denken. Die kon vanuit eigen ervaring uitleggen wat er misging in het contact. Dat leidde tot een beter gesprek en uiteindelijk tot een goed re-integratieplan. Het laat zien hoe belangrijk het is om verschillende perspectieven te betrekken.’
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Verschillende perspectieven samenbrengen dus. Zie je ontwikkelingen in het vak van arbeidsdeskundigen?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Zeker. Het werkbedrijf is nog jong en ontwikkelt zich verder. Maar de consultfunctie van arbeidsdeskundigen wordt duidelijk breder, met meer aandacht voor problematiek uit de WW-situatie. Het vak blijft in beweging, en dat is mooi om te zien.’
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="py-4 overflow-visible">
          <div className="container">
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="w-full">
                  <div>
                    <div className="prose prose-h2:scroll-m-10 mt-6">
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        En wat zijn je verwachtingen voor de toekomst, wat betreft de nieuwe werkwijze?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Ik hoop dat het integratief gedragsmodel in de toekomst breed zal worden toegepast binnen UWV. Niet als verplicht format, maar als hulpmiddel om het gesprek te verbeteren. Ik geloof dat we daarmee het verschil kunnen maken voor cliënten. Als mensen zich gezien en gesteund voelen, zijn ze beter in staat om stappen te zetten richting werk. En dat is uiteindelijk waar we het voor doen.
                      </p>
                      <TestimonialPurplePhoto 
                        quote='De stip op de horizon is dat dit model een vaste plek krijgt in onze werkwijze, zodat we de mens achter het dossier blijven zien'
                        image={{ src: "/images/content_kees_2.jpg", alt: "Kees van Blerck" }}
                      />
                       <p className="text-[19px] leading-8  mb-4">
                        Er zijn bewegingen merkbaar: presentaties, trainingen en pilots. Tegelijkertijd is UWV een grote organisatie in verandering, dus het kost tijd. Ik zie mezelf als ambassadeur van het model en probeer het in Arnhem en Nijmegen verder te brengen. Landelijk zijn er ook initiatieven, maar het is nog geen standaard. De stip op de horizon is voor mij dat het model een vaste plek krijgt in onze werkwijze, zodat we de mens achter het dossier blijven zien.’ 
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wat zou je collega’s willen meegeven aan collega’s die met dit model gaan werken?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Begin met luisteren. Echt luisteren. Laat je oordeel los en probeer te begrijpen wat iemand beweegt. Gebruik het model als houvast, maar wees niet bang om af te wijken als dat nodig is. En vooral: zie de mens achter het dossier. Dat maakt het werk niet alleen effectiever, maar ook veel mooier.
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Re-integratie is mensenwerk. Het vraagt om aandacht, maatwerk en realisme. Het integratief gedragsmodel helpt om het goede gesprek te voeren, maar uiteindelijk gaat het om de houding van de professional. Dus blijf leren, reflecteren en samenwerken, met dat hogere doel van spoedige en duurzame re-integratie in het achterhoofd.’
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Lees ook het artikel met Theo en Marloes over <a href={getNavbarMenuItems()[4]?.url} className="underline">Moreel beraad</a>.
                      </p>
                      <ContentDivider src="/images/logo_uwv.svg" alt="Logo UWV cliëntenraad" />
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
