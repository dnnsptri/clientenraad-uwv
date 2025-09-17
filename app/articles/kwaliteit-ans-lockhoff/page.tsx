import { Hero50 } from '@/components/Hero50'
import FadeInSection from '@/components/FadeInSection'
import { ContentDivider } from '@/components/ContentDivider'
import { TestimonialBlue } from '@/components/TestimonialBlue'
import { TestimonialBluePhoto } from '@/components/TestimonialBluePhoto'
import { getNavbarMenuItems } from '@/lib/articles'

export default function ArticleKwaliteitAnsPage() {
  return (
    <main>
      <FadeInSection>
        <Hero50 
          title="Cliënten verdienen meer dan een systeemmatige benadering"
          description="Ans Lockhoff:"
          image="/images/header_ans.jpg"
        />
      </FadeInSection>
      <FadeInSection>
        <div className="py-4">
          <div className="container">
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="w-full">
                  <div>
                    <div className="prose prose-h2:scroll-m-10 mt-6">
                      <p className="intro leading-7 mb-6">
                      <b>Ans Lokhoff</b> is al bijna acht jaar actief als cliëntenraadslid in de regio Midden- en Oost-Brabant (MOB). Vanuit haar betrokkenheid bij de vakbond, de lokale politiek en haar vrijwilligerswerk, ziet ze van dichtbij waar cliënten van UWV tegenaan lopen. In het kader van het jaarverslag van de cliëntenraden deelt Ans haar zorgen over de WIA-procedures, de communicatie binnen UWV en de nood voor maatwerk. ‘Mensen die ik begeleid richting een keuring probeer ik altijd te voorzien van onafhankelijke ondersteuning. Die externe deskundigheid creëert meer gelijkwaardigheid.<br /><br />
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Ans Lokhoff is cliënt bij UWV. Ze is zeer betrokken vanuit een sterk rechtvaardigheidsgevoel en heeft oog voor de mensen om haar heen. Wanneer ze zich introduceert weet ze dat direct te illustreren. Ze noemt dat ze in al die jaren veel vrijwilligerswerk is blijven doen in Den Bosch, waar ze woonachtig is. ‘Onder andere bij de SP en de belastingservice van FNV.’
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Vanuit die rol kreeg Ans door de jaren heen veel mensen over de vloer met problemen bij UWV. Zij voelden zich niet gehoord, niet actief benaderd, en stonden naar eigen idee onderaan de prioriteitenlijst. Het liet haar niet onberoerd, vertelt ze. ‘Ik wilde daar iets aan doen. Inmiddels zit ik bijna acht jaar in de cliëntenraad Midden- en Oost-Brabant en ben ik ook actief in de werkgroep minima, de commissie Arbeidszaken en de commissie Klant, Beroep, Bezwaar en Handhaving.’
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Voor het jaarverslag van de UWV-cliëntenraden liet Ans zich interviewen door Gerard Haan (Noord), lid van het redactieoverleg dat dit jaarverslag inhoudelijk vormgeeft.
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
        <div className="py-4">
          <div className="container">
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="w-full">
                  <div>
                    <div className="prose prose-h2:scroll-m-10 mt-6">
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wat zijn volgens jou de grootste knelpunten in de dienstverlening van UWV?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        De menselijke maat ontbreekt af en toe. Cliënten zitten soms maanden in onzekerheid over hun WIA-beoordeling. Ze weten niet wat ze kunnen verwachten, krijgen geen uitleg over het proces en ervaren als gevolg daarvan veel stress. Ik hoor als raadslid soms verhalen van cliënten die jarenlang procederen om een hogere afkeuring te krijgen. Dat is schrijnend. Ook de onafhankelijkheid van mediation binnen UWV is discutabel. Die wordt uitgevoerd door mensen die door UWV betaald worden. Dat voelt niet altijd even onafhankelijk.’
                      </p>
                      <TestimonialBlue 
                         quote='We horen vaak ‘Dat valt niet onder deze manager, daar moet je bij een ander zijn.’' 
                      />
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Zie je verbetering in de afgelopen jaren?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Er is wel iets veranderd. Het besef dat maatwerk nodig is, begint door te dringen. Maar zo’n ontwikkeling kost tijd. Links en rechts ontstaan goede initiatieven, zoals een manager die uitleg gaf over werkplekaanpassingen voor mensen met een beperking. Maar ik merk dat UWV-medewerkers daar vaak niet van op de hoogte zijn. Dat is zonde. Ook de nieuwe website is een stap vooruit, maar mensen die niet digitaal vaardig zijn, vallen tussen wal en schip. Tegelijkertijd is een-op-een contact er nauwelijks.’
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Hoe ervaar je de WIA-procedures zelf, vanuit je rol in de cliëntenraad?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Ik begeleid mensen naar hun keuring, maar ga niet mee naar binnen. Wel probeer ik onafhankelijke cliëntondersteuners in te schakelen, zoals Stichting MEE in Den Bosch. Ik geloof dat zo’n extern deskundigenoordeel een gelijkwaardiger gesprek creëert. Daarnaast volg ik signalen via Facebookgroepen en het signaalregister van onze regio. Daar komen veel meldingen binnen: lange wachttijden, onduidelijke communicatie, en cliënten die zich niet serieus genomen voelen. De communicatie tussen afdelingen binnen UWV is vaak niet optimaal. Er wordt nog veel in eigen hokjes gedacht.’
                      </p>
                      <TestimonialBluePhoto 
                         quote='De communicatie is soms wat stroef, daardoor vinden we nog vaak het hetzelfde wiel opnieuw uit'
                         image={{ src: "/images/content_ans_1.jpg", alt: "Ans Lockhoff" }}
                      />
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wat zou er volgens jou moeten veranderen aan die communicatie?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                       ‘Meer met elkaar praten. Er zijn teams waarin verschillende disciplines samenwerken aan één casus. Dat werkt goed. Maar het gebeurt niet structureel. De ene medewerker verwijst wel door, de andere niet. Dat geldt ook voor toeslagen: de ene medewerker weet ervan, de andere niet. Er is geen lijn in. En als cliëntenraden geven we signalen af, maar die verdwijnen in de praktijk vaak een zwart gat.
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Begrijp me niet verkeerd, er vindt heus wel terugkoppeling plaats. We worden geïnformeerd door UWV-managers, maar het blijft bij zenden. Als wij iets willen teruggeven, horen we vaak: ‘Dat valt niet onder deze manager, daar moet je bij een ander zijn.’ Dat is wel frustrerend. We schrijven ongevraagde adviezen, maar krijgen daar niet altijd reactie op. Goed, ook binnen de cliëntenraden is de communicatie soms wat stroef. We weten vaak niet wat andere regio’s doen. Verslagen worden niet altijd gedeeld. Daardoor zijn nog wel eens met vier mensen hetzelfde wiel aan het uitvinden.’
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
        <div className="py-4">
          <div className="container">
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="w-full">
                  <div>
                    <div className="prose prose-h2:scroll-m-10 mt-6">
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Je noemde eerder het deskundigenoordeel.<br />Wat speelt daar de rol van?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Veel cliënten willen een deskundigenoordeel aanvragen, bijvoorbeeld als ze het niet eens zijn met hun beoordeling. Maar dat kost geld – zo’n honderd euro – plus reiskosten en soms een vrije dag. Dat kunnen veel mensen niet betalen. Daardoor blijven ze hangen in hun situatie. Ik pleit ervoor dat UWV die kosten op zich neemt. Dat zou het vertrouwen in UWV als organisatie vergroten.’
                      </p>
                      <TestimonialBlue 
                         quote='De meeste informatie krijg ik nog altijd via de vakbond, niet via UWV zelf' 
                      />
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Heeft de recente WIA-problematiek geleid tot meer vragen van cliënten?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Zeker. Op Facebook zag je dat mensen massaal reageerden toen bekend werd dat er fouten waren gemaakt. Veel mensen vroegen zich vervolgens af of hun eigen beoordeling ook fout was. Ze willen bezwaar maken, maar weten niet of dat nog kan. En ook hier geldt: de informatievoorziening vanuit UWV was schaars. De meeste informatie krijg ik via de vakbond, niet via UWV of de cliëntenraad.’
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wat zou je willen meegeven aan de beleidsmakers binnen UWV?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Zorg voor de menselijke maat. Nodig mensen uit voor een persoonlijk gesprek. Als er niet genoeg personeel is, schakel dan vrijwilligers of een extern bureau in. En zorg dat medewerkers goed geïnformeerd zijn over wat UWV allemaal kan doen. Cliënten zijn geen dossiers, het zijn mensen. En die verdienen het om serieus genomen te worden.’
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Tot slot: welke positieve ontwikkelingen zie je?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        Ik ben blij dat de leeftijdsgrens voor cliëntenraadsleden is afgeschaft. Mensen boven de 72 kunnen nu ook actief blijven. En ik waardeer het contact met cliënten op beurzen en bijeenkomsten. Dat geeft energie! Ook de samenwerking met de SP-fractie in Den Bosch verloopt goed. We versterken elkaar. Die dwarsverbanden kunnen leggen, daar doe ik het voor.’
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Lees ook het artikel met Kees over <a href={getNavbarMenuItems()[3]?.url} className="underline">Het nieuwe Re-integratie model</a>.
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
