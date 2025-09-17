import { Hero50 } from '@/components/Hero50'
import FadeInSection from '@/components/FadeInSection'
import { ContentDivider } from '@/components/ContentDivider'
import { TestimonialBlue } from '@/components/TestimonialBlue'
import { TestimonialBluePhoto } from '@/components/TestimonialBluePhoto'
import { getNavbarMenuItems } from '@/lib/articles'

export default function Article1UWVPage() {
  return (
    <main>
      <FadeInSection>
        <Hero50 
          title="Door 1UWV wordt er niet meer gepingpongd met de cliënt"
          description="Maarten Oosterveld:"
          image="/images/header_maarten.jpg"
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
                        <b>Maarten Oosterveld</b> is manager Sociaal Medische Zaken (SMZ) bij UWV. Vanuit Arnhem werkt hij in de functie van experimentleider aan wat heet, <em>1UWV</em> — een filosofie en werkwijze, ontstaan vanuit de gedachte dat het UWV de klantreis van de cliënt wilde vereenvoudigen, zonder veel verschillende loketten en contactpersonen. Momenteel is hij bezig deze werkwijze met een — waarschijnlijk — aangeboren enthousiasme te verspreiden binnen UWV. In dit artikel vertelt hij over de ontstaansgeschiedenis <em>1UWV</em>, de stand van zaken en de toekomstplannen.<br /><br />
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        In 2021 steken Maarten en zijn collega Peter Zaagman — manager bij de afdeling Beroep en Bezwaar — voor het eerst de koppen bij elkaar en buigen zich over de schaarste van artsencapaciteit. Maarten heeft namens SMZ de opdracht om artsen te leveren aan de afdeling van Peter, maar in de praktijk werkte dat niet altijd zo eenvoudig, vertelt hij. ‘We kampten met tekorten en vroegen ons af of we onze processen anders konden inrichten om de mensen die we hadden, efficiënter in te zetten. Zo ontstond de <em>Proeftuin SMZ Bezwaar & Beroep</em>, waarbij we de dienstverlening en samenwerking tussen de afdelingen optimaliseerden om bezwaren te verminderen.’ Die proeftuin vormde het voorland van wat daarna <strong>1UWV</strong> is gaan heten.
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Momenteel is Maarten bezig deze werkwijze tot gemeengoed te maken binnen UWV. Voor het jaarverslag van de UWV-cliëntenraden liet hij zich interviewen door Petra van Wieringen (OGN) en Eric Beukema (OGN), beiden lid van het redactieoverleg dat dit jaarverslag inhoudelijk vormgeeft.
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
                      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
                        Die verbinding tussen afdelingen klinkt zo eenvoudig. Waarom is dit niet altijd al de werkwijze geweest?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Die verschotting tussen afdelingen is ontstaan door de manier waarop de organisatie historisch is gegroeid. UWV is een omvangrijke organisatie waar door de jaren heen steeds meer processen zijn gestandaardiseerd en opgeknipt. Verschillende afdelingen werkten dus apart van elkaar, wat soms ook leidde tot klanten die tussen wal en schip vielen. Daar wilden we iets mee. Door professionals bij elkaar te zetten en te laten praten over de inhoud en bedoeling van hun werk, zagen we sindsdien snel verbeteringen in de samenwerking en dienstverlening.’
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Op het moment werken we aan plannen om een nieuwe klantzone op te tuigen waar alle dienstverlening wordt vervlochten. Dit om de klant optimaal te kunnen bedienen, op één plek. Goed, daarvoor zal ook nieuwe huisvesting nodig zijn.
                      </p>
                      <ContentDivider src="/images/logo_uwv.svg" alt="Logo UWV cliëntenraad" />
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Waar staan we nu dan?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘In januari 2024 is besloten om alle divisies op operationeel niveau bij elkaar te zetten en te werken vanuit een vast aaneengesloten postcodegebied. Wij geloofden dat deze meer lokale aanpak zou leiden tot beter geïntegreerde dienstverlening, mede door kwalitatief beter en sneller contact tussen teams. In november 2024 hebben we geëvalueerd, en met positief resultaat. Hieruit ontstond de wens om op te schalen binnen ons district. Op 6 mei 2025 kregen we daar toestemming voor vanuit de directies. We begrijpen natuurlijk ook dat dit niet de oplossing is voor alle problematiek binnen het UWV, maar er ligt veel potentieel in deze werkwijze.’
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Hoe omvangrijk is die poot van <em>1UWV</em> nu al?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘In Arnhem bestaat <em>1UWV</em> momenteel uit 84 medewerkers vanuit SMZ, Werkbedrijf, Uitkeren en B&B, die gezamenlijk de bewoners uit het stadgebied Arnhem bedienen, binnen de arbeidsmarktregio Gelderland Midden. We bedienen nu 50% van de arbeidsregio Gelderland midden – de stad Arnhem – maar zijn bezig met het uitbreiden van deze werkwijze naar de volledige regio en hopen dat dit uiteindelijk landelijk wordt omarmd.’
                      </p>
                      <TestimonialBluePhoto 
                        quote='Dit doen we naast ons gewone werk,uiteindelijk voor een betere UWV-dienstverlening en -ervaring bij de klant'
                        image={{ src: "/images/content_maarten_1.jpg", alt: "Maarten Oosterveld" }}
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
        <div className="py-4">
          <div className="container">
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="w-full">
                  <div>
                    <div className="prose prose-h2:scroll-m-10 mt-6">
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Jullie doel is de "klantreis" te bevorderen, meten jullie daaraan ook je succes af?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Succes meten is lastig, ook omdat wij enkel in onze eigen divisies op bestaande KPI’s (<em>key performance indicators</em>) kunnen meten en niet op KPI’s over de divisies heen. Deze dienstverlening is iets dat we doen naast ons gewone werk. Wij zijn allemaal met onze bestaande opdrachten in deze samenwerking gestapt. Het heeft daarmee ook geen extra geld gekost. We verantwoorden ons dus nog vanuit onze eigen opdracht en divisie. Daarnaast doen we het uiteindelijk voor een betere UWV-dienstverlening en -ervaring bij de klant, maar dat is een kwalitatieve parameter die niet snel te vatten in nullen en enen. Wel zien we op dat vlak dat de overdracht van informatie tussen divisies door de huidige werkwijze verbeterd is, wat heeft geleid tot minder fouten en terugvorderingen.
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Daarnaast levert deze werkwijze ook voor UWV-medewerkers zelf veel op. We hebben een onderzoeksrapport in de maak dat inzicht geeft in wat de veranderingen voor de medewerkers betekenen. 80% van de medewerkers omarmt deze nieuwe werkwijze en wil niet meer terug naar de oude situatie. Zij ervaren dat ze als volledig UWV completere diensten verlenen. Niet meer als los onderdeel. Daarnaast zien we concrete verbeteringen in bijvoorbeeld de informatieoverdracht tussen divisies, wat heeft geleid tot minder terugvorderingen en dus minder potentiële schulden voor onze cliënten.’
                      </p>
                      <ContentDivider src="/images/logo_uwv.svg" alt="Logo UWV cliëntenraad" />
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Kijkend naar de toekomst, hoe nu verder? Hoe gaat u verder?   
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘We zijn natuurlijk nog lang niet uitontwikkeld. Het eerste jaar hebben we gebruikt om elkaar en de divisie werkwijzen te leren kennen en te wennen aan de nieuwe werkwijze. We hebben verschillende professionals bij elkaar gezet en geleerd om vanuit een gezamenlijke basis en gezamenlijke kennis te werken. Dat heeft in termen van efficiëntie en oplossingsgerichtheid al veel opgeleverd.
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Wat we in dit proces hebben gezien, is dat we focus moeten aanbrengen. In het eerste jaar hadden we bijvoorbeeld vierentwintig ideeën voor optimalisatie en innovatie. We hebben tegen de medewerkers gezegd: “Het is aan jullie. Zeg maar wat je nodig hebt, en wij faciliteren het. Schrijf wel op wat je doet, zodat het meetbaar is.” Dit jaar hebben we meer focus aangebracht en richten ons op de doorontwikkeling van een aantal van die ideeën.’
                      </p>
                      <TestimonialBlue 
                         quote='Communicatie is het toverwoord – het gaat om een proactieve houding, zowel intern als richting de cliënt'
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
        <div className="py-4">
          <div className="container">
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="w-full">
                  <div>
                    <div className="prose prose-h2:scroll-m-10 mt-6">
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wat vraagt het van medewerkers om die ontwikkeling door te maken met elkaar?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Medewerkers moeten zich continu afvragen of hun inzet bijdraagt aan de daadwerkelijke dienstverlening. “Wat levert wat ik doe nu concreet op?” Ze moeten daartoe bereid zijn om samen te werken, voorbij de schotten van hun eigen team of afdeling, om zo het uiteindelijke belang van de klant beter te dienen.’
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Communicatie is daarin het toverwoord. Als organisatie willen we een proactieve houding aannemen, zowel intern als naar cliënten toe. Het is cruciaal om cliënten altijd goed te informeren over de status van hun “klantreis” en wat er precies gebeurt. We zijn nu veel bezig met nazorg, waarbij we cliënten nabellen na een beoordeling om te checken of alles duidelijk is en of ze nog iets extra's van ons nodig hebben alvorens we het dossier van hem of haar overdragen aan het Werkbedrijf. Die dubbele check, die extra stap, dat lijkt tijd te kosten maar levert juist tijdwinst op wanneer het je collega daar helpt om niet weer van vooraf aan te hoeven beginnen.’
                      </p>
                      <TestimonialBluePhoto 
                        quote='Dit is geen formule die alle capaciteitsproblemen van tafel veegt – wel wordt de “klantreis” efficiënter doorlopen’'
                        image={{ src: "/images/content_maarten_2.jpg", alt: "Maarten Oosterveld" }}
                      />
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Gebrek aan capaciteit was een aanleiding om te beginnen met <em>1UWV</em>, gaat dat nu beter?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘Dit is geen formule die ineens alle capaciteitsproblemen van tafel veegt. Wel zie ik dat het proces dat we met een klant doorlopen efficiënter wordt. Wat je vorig jaar kon zien is dat de herbeoordelingen die vanuit het Werkbedrijf zijn gegenereerd en door ons zijn opgepakt, allemaal geleid hebben tot een wijziging in het percentage van arbeidsongeschiktheid. In het verleden was dat lang niet altijd het geval of kwamen we soms zelfs niet toe aan die herbeoordeling.
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Dat soort ontwikkelingen zijn we momenteel meer nauwkeurig in kaart aan het brengen. Lastig daarbij is dat je zo'n vraag vanuit het Werkbedrijf en ons antwoord daarop niet eenvoudig terug kunt zien in "het systeem", het is immers geen "product". Dat, terwijl ik er wel capaciteit aan kwijt ben en voorkom dat er een vraag op een stapel komt te liggen en onbehandeld blijft.'
                      </p>
                      <ContentDivider src="/images/logo_uwv.svg" alt="Logo UWV cliëntenraad" />
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wordt de organisatie hiermee nu platter of bouw je juist een extra laag in?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        'De organisatie wordt niet per se platter of meer gelaagd. Iedereen blijft in principe doen wat hij doet, maar zoekt vanuit de eigen functie net wat intensiever naar samenwerking met andere teams. Dat doen we door verschillende professionals structureler fysiek bij elkaar te zetten.'
                      </p>
                      
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wie beslist of 1UWV uitgebreid wordt en of het de norm wordt, en wat is dan het tempo?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        'Voor mij is het landelijk uitrollen van 1UWV nooit een doel op zich geweest. Wel merk ik dat deze werkwijze links en rechts interesse wekt binnen de organisatie, maar de beslissing om 'één UWV' uit te breiden ligt bij de directies. 
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        We zijn daarvoor in gesprek met verschillende partijen binnen de organisatie. Als daar positief op gereageerd wordt, hangt het tempo vervolgens af van de bereidheid van de verschillende divisies om samen te werken en de omstandigheden te scheppen die dit mogelijk maken.'
                      </p>
                      <TestimonialBlue 
                        quote="Deze werkwijze verhoogt niet alleen de klanttevredenheid, maar ook die van onze medewerkers"
                      />
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wat heb je dit "1UWV-jaar" geleerd?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        'Je moet vooral focus durven aanbrengen en de initiatieven behapbaar maken. Het is belangrijk om de medewerkers te betrekken en hen de ruimte te geven om met ideeën te komen, maar die carte blanche creëerde een veelheid aan initiatieven die de uitvoering extra complex maakte. Het is dus zoeken naar een balans, een manier om de kennis vanuit de groep goed te kanaliseren.'
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Is iedereen zo enthousiast als jij?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        'Ik zie zeker veel enthousiasme om me heen, maar daarin zit altijd verschil. Sommige managers of medewerkers zijn échte front-runners, terwijl anderen zich meer richten op de dagelijkse werkzaamheden. Beide zijn nodig denk ik! Het is belangrijk om, ondanks die verschillen in interesse, de neuzen dezelfde kant op te krijgen als je kiest voor dit soort nieuwe samenwerkingen. Dan hoeven we niet met zijn allen de kar te trekken.'
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wat zou je je collega's nog willen meegeven?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        'Het is belangrijk om te benadrukken dat deze werkwijze niet alleen de klanttevredenheid verhoogt, maar ook de medewerkerstevredenheid. Medewerkers ervaren de samenwerking als verrijkend en ik zie continu dat zij niet meer terug willen naar de oude situatie. Maar het allerbelangrijkste: deze werkwijze draagt bij aan een betere dienstverlening. Er wordt niet meer gepingpongd met een cliënt. Dat maakt zo'n "klantreis" ontzettend veel aangenamer en effectiever, en daar doen we het uiteindelijk voor.'
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Meer? Lees het artikel van Hans over <a href={getNavbarMenuItems()[1]?.url} className="underline">Kwaliteit door bruggen bouwen</a>.
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
