import { HeroPurple } from '@/components/HeroPurple'
import FadeInSection from '@/components/FadeInSection'
import { ContentDivider } from '@/components/ContentDivider'
import { TestimonialPurple } from '@/components/TestimonialPurple'
import { TestimonialPurplePhoto } from '@/components/TestimonialPurplePhoto'
import { getNavbarMenuItems } from '@/lib/articles'

export default function ArticleKwaliteitHansPage() {
  return (
    <main>
      <FadeInSection>
        <HeroPurple 
          title="We moeten bruggen bouwen, geen barricades opwerpen"
          description="Hans Sijtsma:"
          image="/images/header_hans.jpg"
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
                        <b>Hans Sijtsma</b> is sinds anderhalf jaar actief als cliëntenraadslid in de regio Noord. Vanuit zijn eigen ervaring met een WIA-traject zet hij zich in voor de belangen van cliënten. In het kader van het jaarverslag van de cliëntenraden, blikt hij terug op zijn tijd in de raad, de ontwikkelingen rondom de WIA-problematiek in het noorden van het land, en de verbindende rol die de cliëntenraad volgens hem moet spelen. ‘Als je de lijntjes met het management kort en goed houdt zul je merken dat de signalen die je afgeeft beter worden opgepakt.’<br /><br />
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Hans Sijtsma is cliënt bij UWV en verbonden aan de regio Noord. Ooit studeerde hij Geschiedenis in Groningen. Hij zou er nooit vertrekken. Na een jarenlange loopbaan als beleidsadviseur en kortere tijd als manager bij verschillende gemeenten viel hij tijdens corona uit en kwam terecht bij UWV. Maar, zo vertelt hij, zijn fascinatie voor beleid stopte daar niet. Een uitlaat voor zijn ideeën vond hij bij de cliëntenraden: ‘Anderhalf jaar geleden ben ik lid geworden van de cliëntenraad UWV Noord, eerst als plaatsvervangend voorzitter en inmiddels als voorzitter. Mijn betrokkenheid komt voort uit mijn eigen ervaring met een burn-out en het WIA-traject dat daarop volgde. Die ervaring neem ik mee in mijn werk voor de raad.’
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Omdat Hans slechts gedeeltelijk arbeidsongeschikt is bevonden, begint hij binnenkort aan zijn re-integratieproces. ‘Binnenkort mag ik weer aan het werk. Dat betekent ook dat ik mijn werkzaamheden voor de cliëntenraad rond het zomerreces zal afronden. Ik wil me dan richten op een nieuwe stap, mogelijk als coach of in een adviserende rol bij organisaties die met het UWV samenwerken.’ 
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Voor het jaarverslag van de UWV-cliëntenraden liet Hans zich interviewen door Dick Tolsma (MOB), lid van het redactieoverleg dat dit jaarverslag inhoudelijk vormgeeft.
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
                        Wat is volgens jou de rol van de cliëntenraad in de WIA-problematiek?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Onze rol is vooral die van monitor en kritische gesprekspartner. We worden gelukkig goed en actief geïnformeerd door het management van UWV Noord, dat transparant is over de voortgang van herstelacties en de gevolgen van landelijke ontwikkelingen. We stellen kritische vragen en houden toezicht op de kwaliteit van de dienstverlening. Dat doen we vanuit onze eigen ervaring én vanuit signalen die we ontvangen van cliënten en begeleiders.’
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Hebben jullie ook direct contact met cliënten?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Niet structureel, en dat is iets wat we willen verbeteren. We krijgen wel input via leden van de raad die cliënten begeleiden, maar het directe contact met de achterban is beperkt. We willen als raad zichtbaarder worden, bijvoorbeeld door aanwezig te zijn op banenbeurzen of bijeenkomsten te organiseren voor cliënten die een keuring moeten ondergaan. Dat zou ook helpen om onze rol beter uit te leggen.’
                      </p>
                      <TestimonialPurple 
                         quote='De lijnen met het management zijn gelukkig kort - we merken daarmee dat onze signalen serieus worden genomen'
                      />
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wat merk je van de wachttijden en de impact daarvan op cliënten?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Zelf heb ik een jaar lang moeten wachten op een medische keuring. Dat soort ervaringen kunnen we goed terugkoppelen aan het management. In Noord zijn de achterstanden de afgelopen tijd flink opgelopen, terwijl dat eerder niet het geval was. Gelukkig zien we nu dat er stappen worden gezet om die achterstanden weg te werken, onder andere met hulp van collega’s uit andere regio’s. De lijnen met het management zijn daarnaast gelukkig kort, en we merken daarmee dat onze signalen serieus worden genomen.’
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wordt er ook iets met die signalen gedaan?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘We fungeren vooral als klankbord en geven zowel gevraagd als ongevraagd advies. Het management is over het algemeen open over wat goed gaat, maar ook over wat beter kan. Die transparantie waarderen we. Tegelijkertijd willen we meer weten over de ervaringen van cliënten zelf, zodat we onze signalen nog beter kunnen onderbouwen. Vanuit die gedachte is het verbeteren van onze zichtbaarheid als cliëntenraden nog wel een aandachtspunt.
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Niet alle medewerkers van UWV weten overigens precies wat de cliëntenraad doet. Sommigen associëren ons vooral met het management, wat soms zelfs een belemmering kan zijn in het contact. Ook het contact met cliëntenpanels is beperkt, terwijl daar juist kansen liggen om ervaringen op te halen. We willen als raad duidelijker gaan maken wie we zijn, wat we doen en waar we wel en niet voor zijn.’
                      </p>
                      <TestimonialPurplePhoto 
                         quote='Ik geloof niet in het conflictmodel - natuurlijk moeten we kritisch zijn, maar altijd met het doel samen verder te komen' 
                         image={{ src: "/images/content_Hans_1.jpg", alt: "Hans Sijtsma" }}
                      />
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
                        Je pleit sterk voor een constructieve houding van de cliëntenraad. Waarom is die belangrijk?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Ik geloof niet in een conflictmodel. Natuurlijk moeten we kritisch zijn, maar altijd met het doel om samen verder te komen. Dat betekent dat je niet alleen problemen benoemt, maar ook met oplossingen komt. Sommige raden zitten nog in een actiemodus, vaak ook vanuit een vakbondstraditie. Dat werkt in mijn ogen niet meer. We moeten bruggen bouwen, geen barricades opwerpen.’
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wat zou je andere cliëntenraden willen meegeven?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Investeer ook in een goede relatie met het UWV-management. Zorg dat je zichtbaar bent, ook in werkgroepen en landelijke overleggen. En zorg voor een goede sfeer binnen je eigen raad, dat maakt het werk als raadslid aantrekkelijker. Wij merken allemaal dat het tegenwoordig lastig is om commissies gevuld te krijgen. Formeel hadden we tot voor kort zestien leden, maar in de praktijk zijn er nu zo’n acht tot tien actief. Dat fluctueert. We denken daarom na over een andere vergaderstructuur en themadagen als toegankelijker alternatief voor commissies. Maar iets eenvoudigs als een goede lunch helpt soms ook om mensen naar een vergadering te trekken!’
                      </p>
                      <TestimonialPurple 
                         quote='Het is lastig om vrijwilligers te vinden én te behouden - Als UWV wil dat cliëntenraden een serieus instrument blijven moet daar naar gekeken worden'
                      />
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Jullie werken met een jaarplan. Wat zijn de speerpunten voor 2025 en 2026?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘We richten ons op het monitoren van de herstelacties en de gevolgen daarvan voor WIA- en Wajong-cliënten in het bijzonder. We hebben bijvoorbeeld Wajongers in de raad die regelmatig tegen knelpunten aanlopen die daaraan gerelateerd zijn. Die signalen willen we beter kunnen oppakken en terugkoppelen. Daarnaast willen we het contact met cliënten en achterbanorganisaties in versterken.’
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wat zou je willen veranderen aan de manier waarop cliëntenraden worden gefaciliteerd?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Het is lastig om vrijwilligers te vinden én te behouden. De onkostenvergoeding is prima, maar de vrijwilligersvergoeding is wat mager. Zeker voor mensen met een kleine uitkering kan dat een drempel zijn. Als UWV wil dat cliëntenraden een serieus instrument blijven, moet daar echt naar gekeken worden. Ook daarom weer zeg ik: blijf kritisch, maar wees vooral constructief. Zorg voor een goede relatie met het UWV, wees zichtbaar en investeer in onderlinge verbindingen. En vergeet niet: we doen dit voor de cliënten. Als zij zich gehoord en geholpen voelen, dan hebben wij ons werk goed gedaan.’
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Benieuwd naar meer? Lees het artikel van Ans over <a href={getNavbarMenuItems()[2]?.url} className="underline">Menselijke maat in kwaliteit</a>.
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
