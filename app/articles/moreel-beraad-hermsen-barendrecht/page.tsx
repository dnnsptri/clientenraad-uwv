import { HeroBlue } from '@/components/Hero50'
import FadeInSection from '@/components/FadeInSection'
import { ContentDivider } from '@/components/ContentDivider'
import { TestimonialBlue } from '@/components/TestimonialBlue'
import { TestimonialBluePhoto } from '@/components/TestimonialBluePhoto'
import { ReadAloudButton } from '@/components/ReadAloudButton'

export default function ArticleMoreelBeraadPage() {
  return (
    <main>
      <FadeInSection>
        <HeroBlue 
          title="Rechtmatigheid leidt niet altijd tot rechtvaardigheid"
          description="Theo Hermsen & Marloes Barendrecht:"
          image="/images/header_theo_marloes.jpg"
        />
      </FadeInSection>
      
      {/* <FadeInSection>
        Read Aloud Button and Functionality (temporarily disabled)
        <ReadAloudButton />
      </FadeInSection> */}

      <FadeInSection>
        <div className="py-4">
          <div className="container">
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="w-full">
                  <div>
                    <div className="prose prose-h2:scroll-m-10 mt-6">
                      <p className="intro leading-7 mb-6">
                        De regeltjes netjes toepassen betekent niet altijd dat de uitkomst als rechtvaardig wordt ervaren, dat zullen veel mensen wel onderkennen. Wet- en regelgeving heeft in de basis als doel dat vergelijkbare situaties op dezelfde manier behandeld worden. De gedachte is dat daarmee iedereen recht gedaan wordt. In heel veel situaties gaat dat ook op, maar soms pakt het niet zo goed uit. Dan zijn alle regels juist toegepast zoals de bedoeling is, maar voelt de daar uit logischerwijs voortkomende beslissing toch niet goed. De uitkomst schuurt en voelt toch niet echt rechtvaardig.<br /><br />
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Voor dergelijke gevallen zet UWV het instrument van een moreel beraad in. Het zoeken naar een rechtvaardige oplossing die het toepassen van wet- en regelgeving niet automatisch opleveren. De cliëntenraad is hierbij ook betrokken, een cliëntenraadslid neemt deel aan het beraad. In 2024 is in het district Gelderland Midden & Zuid een Moreel Beraad ingesteld om in een “schurende” casus te adviseren.
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                      Twee UWV-ers die nauw betrokken zijn bij dit Gelderse Moreel Beraad zijn Theo Hermsen, Manager Uitvoering Sociaal Medische Zaken en Marloes Barendrecht, Arbeidsdeskundige Sociaal Medische Zaken, beiden werkzaam in district Gelderland Midden & Zuid. Voor het jaarverslag van de UWV-cliëntenraden lieten zij zich interviewen door Eric Beukema (OGN), lid van het redactieoverleg dat dit jaarverslag inhoudelijk vormgeeft. 
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
                        Hoe is het Moreel Beraad bekend geworden in de dienstverlening van SMZ?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        <b>Theo Hermsen (TH)</b>: ‘Het instrument Moreel Beraad, in het bijzonder de methode ‘morele oordeelsvorming’ is onderdeel van het Moreel Leerproces SMZ. Het traject om tot dit Moreel Leerproces te komen, wordt sinds 2020 opgetuigd door Wouter Neerings, directie adviseur SMZ.
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        De aanleiding hiervoor waren herbeoordelingsproblemen waarbij WIA-uitkeringen eerst werden toegekend en vervolgens weer ingetrokken. Dit leverde zowel bij cliënten als medewerkers veel menselijke drama’s op. Dit staat bekend als de WB3000. Onder begeleiding van Governance & Integrity heeft destijds een morele reconstructie plaats gevonden om te onderzoeken hoe het mis is gegaan en welke lessen daaruit getrokken kunnen worden. Daar kwam onder andere uit dat het wel rechtmatig was wat het UWV deed maar niet rechtvaardig.” (Zie kader, red. Cliëntenraad) 
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        ‘De lessen die hieruit naar voren kwamen zijn vertaald in negen aanbevelingen die leiden tot de invoering van een Moreel Leerproces binnen SMZ. Het instrument Moreel Beraad vaker toepassen en zo ‘moresprudentie’ opbouwen, is daar een onderdeel van. De aanpak binnen SMZ is voor de Raad van Bestuur de aanleiding geweest te besluiten dat deze aanpak binnen heel UWV moet worden overgenomen om zo de ‘menselijke maat’ te concretiseren.’
                      </p>
                      <ContentDivider src="/images/logo_uwv.svg" alt="Logo UWV cliëntenraad" />
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wie nemen deel aan een Moreel Beraad?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        TH: ‘Per casus kijken we daarnaar. Bij onze casus was het een collega van het Werkbedrijf, drie arbeidsdeskundigen waaronder Marloes, een drietal artsen waaronder de betrokken arts, een procesbegeleider, een Arbeidskundig Adviseur, een expert vanuit extern bureau, een collega van de afdeling Moreel Traject en iemand van de Cliëntenraad.’
                      </p>
                      <TestimonialBluePhoto 
                        quote='Medisch en arbeidsdeskundig klopte het, maar de impact voor de client was dermate groot dat wij er buikpijn van kregen'
                        image={{ src: "/images/content_theo_1.jpg", alt: "Theo Hermsen" }}
                      />
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wanneer komt een casus bij Moreel Beraad?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        TH: ‘Een moreel beraad komt in beeld wanneer een collega voelt dat er in een casus verschillende morele rechten botsen. Deze morele rechten noemen we beginselen. Deze morele rechten kunnen verankerd liggen in wetgeving maar ook op een andere manier tot uiting komen. Wanneer een collega bij het uitvoeren van zijn werk merkt dat hij geen recht doet aan alle beginselen dan leidt dat tot morele stress. UWV wil morele stress onder zijn werknemers verminderen om zo organisatiegezondheid te verhogen. Een moreel beraad is hier het instrument voor. De door UWV gekozen methode van moreel beraad - morele oordeelsvorming - brengt alle rechten, belangen en wensen in kaart voor verschillende handelingsopties. Hierdoor helpt het de werknemer zijn gevoel te duiden en uiteindelijk het goede te doen. Alles begint dus bij het scherpe eigen gevoel van onze collega’s.’
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        <b>Marloes Barendrecht (MB)</b>: ‘In onze casus voelden we in de uitvoering dat de wet knelde. Medisch inhoudelijk klopte het en ook arbeidsdeskundig inhoudelijk klopte het, maar de impact voor de client was dermate groot dat we er beiden professionele buikpijn van kregen.’
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Waar gaat jullie casus over?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        TH: ‘Het gaat kort gezegd om een herbeoordeling waarbij iemand na jaren volledig arbeidsongeschikt te zijn geweest bij een herkeuring ineens in de categorie minder 35% arbeidsongeschikt terecht komt. Op dat moment heeft iemand nog maar twee maanden recht op een uitkering.’
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                      MB: ‘Het gaat in deze zaak over een cliënt die een herbeoordeling wilde omdat de fysieke situatie verslechterd zou zijn. De cliënt had al langere tijd een WGA 80-100. Via het werkbedrijf had deze cliënt een aantal jaren geleden een herbeoordeling aangevraagd. De cliënt dacht voor een IVA in aanmerking te komen. Door capaciteitsgebrek is de aanvraag een aantal jaren blijven liggen. Bij de herbeoordeling bleek dat de belastbaarheid juist iets was toegenomen. Een aantal dingen waren zelfs beter geworden dan bij de eerste beoordeling. De verzekeringsarts stelde vervolgens een functionele mogelijkhedenlijst (FML) op. Als arbeidsdeskundige ga ik met toelichting van de verzekeringsarts en de FML kijken naar het opleidingsniveau, het loon, het aantal uren die iemand werkte en de beperkingen die er zijn. Dat voer ik in een computersysteem - CBBS: een functiebestand van duizenden vacatures die voorkomen - om te kijken of er passende functies zijn op de Nederlandse arbeidsmarkt. Daar rolt dan een voorselectie van functies uit, als arbeidsdeskundige maak je daar nog een schifting in gericht op de persoonlijke situatie van de client.
                      </p>
                      <TestimonialBlue 
                         quote='Als ik de 35-minuten-regel doorvoer stuur ik die mensen rechtstreeks de schuldhulpverlening in'
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
                      <p className="text-[19px] leading-8  mb-4">
                        In het geval van deze cliënt kwamen we bij de eerste keuring - jaren geleden - tot twee passende functies. Te weinig om vast te stellen wat iemand nog zou kunnen verdienen. Echter bij de herkeuring kwamen we tot drie passende functies. Met drie functies kun je wel vaststellen wat iemand zou kunnen verdienen. Daar komt dan een loon uit en dat vergelijk je dan met het loon dat de cliënt verdiende voor de arbeidsongeschiktheid. Ik kwam toen tot een verschil onder de 35% arbeidsongeschiktheid uit. Op termijn zou de cliënt die functies ook kunnen is mijn overtuiging, maar niet binnen de door Theo al genoemde twee maanden. Daar knelt het.<br />Deze cliënt heeft een partner die net boven de bijstandsnorm verdiend. Hierdoor is er geen financieel vangnet na die twee maanden. Na die twee maanden mist het gezin de helft van hun inkomsten. Kinderen wonen nog thuis, er zijn veel zorgkosten. Als ik die 35-minuten-regel doorvoer stuur ik die mensen rechtstreeks de schuldhulpverlening in.’
                      </p>
                      <ContentDivider src="/images/logo_uwv.svg" alt="Logo UWV cliëntenraad" />
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Speelt de lange duur van het hele proces ook een rol?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        MB: ‘Dat het zolang is blijven liggen was absoluut een complicerende factor. Er was jarenlang de veronderstelling een IVA te krijgen. En dat wordt door de geldende regels in twee maanden onderuitgehaald. Heel heftig.
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Als er een overgangstermijn van 12 of 24 maanden voor deze gevallen had bestaan had ik deze casus niet aangedragen voor moreel beraad. Het was in dit geval de persoonlijke situatie in combinatie met de wettelijke periode van twee maanden. En het feit dat cliënt zolang in de veronderstelling is gelaten volledig arbeidsongeschikt te zijn.
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        De arts en ik staan nog steeds achter onze beoordelingen dat de cliënt nog wel (deels) kan werken. Maar die termijn van twee maanden maakt het nemen van die beslissing onmogelijk. Daarmee stort je iemand geheid in psychische en financiële problemen. Dat voelde zo verkeerd. In ons advies hebben we aangegeven dat hier een periode van 12 maanden wenselijk is.’
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Dus met de uitkomst van dit moreel beraad - de wettelijk twee maanden is te kort dat moet in bepaalde gevallen 12 of 24 maanden kunnen zijn – willen jullie de grenzen van de wetgeving oprekken?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        MB: ‘Het schuurt echt heel erg. Je ziet dit soort situaties overheid-breed. Jarenlang werden de regels strak gevolgd, soms wel heel erg strak zoals bij de toeslagenaffaire. Het moet volgens de regels, door ze toe te passen handel je juist, maar je hebt ook nog zoiets als de menselijke maat. Zeker in mijn rol als arbeidsdeskundige binnen SMZ schuurt rechtmatigheid en rechtvaardigheid nog wel eens. Ik zei wel eens tegen Theo: “het klopt maar het klopt ook niet.” Ik doe echt regeltechnisch het juiste, maar deze uitkomst kan toch niet de bedoeling zijn.
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Soms is de uitkomst voor een cliënt vervelend maar hebben we het wel degelijk zo bedoeld, maar in dit specifieke geval waren er omstandigheden die buiten de cliënt zelf lagen. Dan krijg je een combinatie van factoren en vervolgens ontstaat er een totaalplaatje waarbij je denkt: dit kan niet, dit kunnen we niet zo toepassen.’
                      </p>
                      <TestimonialBluePhoto 
                        quote='Met een zeven-stappenplan en de methode “morele oordeelsvorming” dwingt het Moreel beraad je dieper na te denken over je casus'
                        image={{ src: "/images/content_marloes_1.jpg", alt: "Marloes Barendrecht" }}
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
                        Hoe passen jullie de methode morele oordeelsvorming toe in een casus? Wat is de werkwijze?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        MB: ‘De methode “morele oordeelsvorming” bestaat uit zeven stappen die je doorloopt onder leiding van een expert op het gebied van Morele Oordeelsvorming. Het zorgt voor een wat andere wijze naar een casus kijken. Je handelt niet van uit juridische, medische of taakbelasting kaders maar vanuit morele kaders. Welke rechten belangen en wensen van alle betrokkenen spelen een rol?
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Het stappenplan is de onderlegger om tot een oordeel te komen, daar heb je het als team over. Dat heeft echt een meerwaarde, stilstaan bij wat je dagelijks aan het doen bent. Er komen vragen voorbij zoals: - Hoe sta ik erin? - Wie zijn er belanghebbenden? - Wie zitten er allemaal bij? - Welke belangen en rechten heb je? - Welke smoesjes gebruik je? - Wat zijn grondwaarden? - Waar sta je voor en waarom doe je wat je doet? 
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        Zo’n werkwijze gaat veel dieper dan een maatwerkplaats. Een Moreel beraad zorgt dat je meer nadenkt over een casus en niet meer alleen klakkeloos uitvoert.’
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Leeft het Moreel Beraad-advies binnen de organisatie?
                      </h2>
                       <p className="text-[19px] leading-8  mb-4">
                        TH: ‘We merken dat er binnen het UWV wel naar ons gekeken wordt. Mensen willen op de hoogte blijven over hoe het verder gaat. Wat gaat de RvB doen met het advies? We zijn met de casus naar het UWV-hoofdkantoor in Amsterdam geweest en hebben het gepresenteerd Chantal Gielen, Directeur <em>arbeid & gezondheid Sociaal Medische Zaken</em> en Kevin De Decker, Medisch Adviseur/ Hoofd medische zaken. Het ligt nu bij hen.’
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Waar hopen jullie op?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                      MB: ‘Ik hoop enige ruimte te krijgen om in de toekomst - op goede gronden - af te kunnen wijken van de regel, de huidige termijn. Nu is het zo dat als iemand volledig arbeidsongeschikt is en bij een herbeoordeling in de categorie minder dan 35% arbeidsongeschikt de uitkering al na twee maanden stopt. Is iemand die 36% arbeidsongeschikt wordt beoordeeld loopt de uitkering 24 maanden. Soms is dat verschil heel terecht, maar soms is het echt veel te groot. Met name van mensen die lang uit het arbeidsproces zijn, kun je niet verwachten dat ze binnen twee maanden klaar zijn voor de arbeidsmarkt omdat dan de uitkering stopt. Zeker als er geen recht is op WW of een ander vangnet.’
                      </p>
                      <TestimonialBlue 
                         quote='Sinds twee jaar is de afspraak dat bij elke nieuwe herkeuringsaanvraag de procesbegeleider de cliënt binnen vijf dagen belt.'
                      />
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Zijn jullie na deze ervaring voorzichtiger met herkeuringen?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        TH: ‘Sinds ruim twee jaar is de afspraak dat bij elke nieuwe herkeuringsaanvraag de procesbegeleider de cliënt binnen vijf dagen belt om erop te wijzen dat een herkeuring twee kanten op kan gaan. Mensen moet zich daarvan bewust zijn.’
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        MB: ‘Ik leg mensen in de spreekkamer dit ook altijd uit. De reden waarom mensen nu arbeidsongeschikt zijn maar dat er op termijn bij een herkeuring de beoordeling anders kan uitvallen, bijvoorbeeld door gewijzigde medische omstandigheden. Een tijdelijke urenbeperkingen kan natuurlijk – omdat die als tijdelijk door de verzekeringsarts wordt ingeschat – gemakkelijk wegvallen bij een herbeoordeling. En dat kan grote impact hebben op het arbeidsongeschiktheidspercentage. Dat geef je wel duidelijk aan.’
                      </p>
                      <p className="text-[19px] leading-8  mb-4">
                        TH: ‘Hierbij moet wel opgemerkt worden dat het UWV-herkeuringen op dit moment bijna niet doet. Alle prioriteit ligt op de eerste beoordeling, er is geen capaciteit voor cliënten die een herkeuring aanvragen om die te beoordelen. Dus een casus zoals in Moreel Beraad komt nu eigenlijk niet voor omdat we bijna geen herkeuringen doen. Maar ik denk dat als we weer herkeuringen gaan uitvoeren we dergelijke situaties als in de betreffende casus veel tegen zullen komen.’
                      </p>
                      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Wat heeft de in kwestie uit deze casus aan de behandeling van de zaak in het moreel beraad?
                      </h2>
                      <p className="text-[19px] leading-8  mb-4">
                        TH: 'Nog weinig, we zijn in afwachting van de beslissing van de directie. De client heeft op dit moment de uitkering nog zoals die was. Het besluit is aangehouden'
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

      <FadeInSection>
        <div className="py-4">
          <div className="container">
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="w-full">
                  <div>
                    <div className="prose prose-h2:scroll-m-10 mt-6 callout-blue text-[17px]">
                      <h2 className="scroll-m-20 text-2xl tracking-tight first:mt-0">
                        Hoe passen jullie de methode morele oordeelsvorming toe in een casus?<br />Wat is de werkwijze?
                      </h2>
                      <p className="leading-8  mb-4">
                        In district Noord en district Noord Holland Noord speelde afgelopen jaar ook een Moreel Beraad. Het gaat hierbij niet om een individuele zaak maar om de situatie van een grote groep cliënten, aldus Esther Looman, secretaris Moreel leertraject & Cliëntenparticipatie commissie SMZ. “Het gaat over de huidige werkwijze bij te late WIA-beoordelingen. Hierbij moet op de datum van het spreekuur met terugwerkende kracht een inschatting gemaakt van de arbeidsgeschiktheid van een client op datum einde wachttijd. Daar zijn haken en ogen aan, hoe kun je met terugwerkende kracht een oordeel vormen, zeker als wachttijden zo oplopen?”
                      </p>
                      <p className="leading-8  mb-4">
                        Verzekeringsartsen, arbeidsdeskundigen en procesbegeleiders uit district Noord Holland Noord hebben een tijdlang in het weekend spreekuren gedraaid in district Noord om te helpen daar de wachttijden te verkorten. “Toen liepen ze tegen het probleem aan te moeten oordelen over een situatie van een jaar of anderhalf jaar geleden. Leg als cliënt maar eens uit hoe je situatie toen was en beoordeel dat vervolgens maar eens. Medewerkers kregen hier professionele buikpijn van. Daarom heeft een van de verzekeringsartsen deze zaak aangekaart voor een moreel beraad.” Ook deze casus wacht nog op een oordeel van de directie. “Er zijn wel wat mogelijk oplossingen bedacht. Bijvoorbeeld dat de datum waarop je iemand spreekt de beoordelingsdatum is, dus niet meer met terugwerkende kracht beoordelen. Maar dat kunnen we niet zomaar zelf beslissen.”<br /><br />
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
                    <div className="prose prose-h2:scroll-m-10 mt-6 callout-purple text-[17px]">
                      <h2 className="scroll-m-20 text-2xl tracking-tight first:mt-0">
                        WB3000: een morele reconstructie
                      </h2>
                      <p className="leading-8  mb-4">
                        WB3000 staat voor een groep cliënten die tussen 2006 en 2010 een arbeidsongeschiktheidsuitkering had gekregen (‘medisch 80-100’) en in 2011 herbeoordeeld had moeten worden. Maar dat was niet gebeurd. Zij waren aanvankelijk bij het WERKbedrijf terechtgekomen. Die kon er niets mee en stuurde ze terug naar SMZ. Daarna leidden ze een zwervend bestaan. Herbeoordeeld werden de cliënten nooit. Tot ze in 2017 werden vermeld in een brief van minister Lodewijk Asscher aan de Tweede Kamer over de werkvoorraad van UWV/SMZ. De ruim 3000 dossiers waren opgedoken en cliënten, van wie sommigen elf en anderen zeven jaar geen verzekeringsarts hadden gezien, zouden herbeoordeeld worden. Dat was het begin van een onvermoed pijnlijk en ontwrichtend proces dat tot op heden de gemoederen bezighoudt. Pijnlijk voor de cliënten die zich in hun rechts- en bestaanszekerheid zagen bedreigd. Pijnlijk voor de medewerkers van Ondersteuningsteam Noord in Groningen, die dachten vaart te maken en het goed te doen. Pijnlijk voor verzekeringsartsen in den lande die vonden dat hun vak tekort werd gedaan. Pijnlijk voor de directie SMZ en de raad van bestuur die vinden dat ze het beter hadden moeten doen.
                      </p>
                      <p className="leading-8  mb-4">
                        De morele evaluatie WB3000 kijkt, samen met betrokkenen, terug op dit proces. Samen onderzoeken we een aantal belangrijke beslissingen die zijn genomen en stellen daaraan een bijzondere vraag. Is de beslissing die toen is genomen moreel juist? Is recht gedaan aan alle betrokkenen? Zo nee, zijn er patronen aan te wijzen die tot dit onrecht hebben geleid? Een morele reconstructie.<br /><br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="w-full">
                  <div>
                    <div className="prose prose-h2:scroll-m-10 mt-6 callout-blue text-[17px]">
                      <p className="leading-8  mb-4">
                        <b>Nico Eeftink</b>,<br />secretaris van de Cliëntenraad Overijssel-Gelderland Noord/Gelderland Midden Zuid:
                      </p>
                      <h2 className="scroll-m-20 text-2xl tracking-tight first:mt-0">
                        "We hebben te maken met een structureel probleem binnen de WIA-uitvoering"
                      </h2>
                      <p className="leading-8  mb-4">
                        Als cliëntenraadslid had ik het voorrecht om deel te nemen aan een zeer intensief moreel beraad, dat bestond uit drie sessies van elk een dagdeel. Dit beraad ging over een complexe casus met grote gevolgen voor een cliënt die jarenlang een WIA-uitkering heeft ontvangen. Het was oprecht waardevol dat wij als cliëntenraad vertegenwoordigd waren. Mijn inbreng als CR-lid werd heel serieus genomen. Ik voelde en ervoer dat mijn stem echt meetelde in de discussie en de uiteindelijke overwegingen.
                      </p>
                      <p className="leading-8  mb-4">
                        Het beraad ging diep in op de spanningen tussen wat moreel wenselijk is en wat wettelijk mogelijk is. Dit spanningsveld bleek soms bijna onoverbrugbaar, waarbij het duidelijk werd hoe beperkt professionals soms zijn door strikte regelgeving. Tegelijkertijd werd benadrukt dat professionals zich ook vanuit een ethische en sociale verantwoordelijkheid moeten uitspreken, zeker wanneer de regels niet meer aansluiten bij wat rechtvaardig voelt.
                      </p>
                      <p className="leading-8  mb-4">
                        De dilemma’s in deze casus waren complex. Enerzijds was er het rechtmatigheidsbeginsel en het gelijkheidsbeginsel, die voorschreven dat beslissingen binnen de wet en consequent genomen moeten worden. Anderzijds stonden de inkomenszekerheid en het welzijn van de cliënt op het spel, wat leidde tot vragen over hoe hier op een menselijke manier mee om te gaan. Daarbij speelde de vertraagde afhandeling van de herbeoordeling een grote rol. Dit proces had jarenlang stilgelegen, met mogelijke onrechtvaardige gevolgen voor de cliënt.
                      </p>
                      <p className="leading-8  mb-4">
                        Het beraad werd bijgewoond door verschillende disciplines, waaronder arbeidsdeskundigen, artsen, een beleidsadviseur, een manager en dus een lid van de cliëntenraad. De brede vertegenwoordiging zorgde ervoor dat er vanuit diverse invalshoeken naar de casus gekeken werd, wat de diepgang en kwaliteit van de gesprekken ten goede kwam.
                      </p>
                      <p className="leading-8  mb-4">
                        Het beraad resulteerde in een genuanceerd standpunt. De meerderheid van de deelnemers vond dat een besluit om de cliënt als minder dan 35% arbeidsongeschikt te verklaren alleen verantwoord zou zijn als er schadebeperkende maatregelen genomen worden. Denk hierbij aan een langere uitlooptermijn, bijvoorbeeld twee jaar in plaats van twee maanden, en een intensief re-integratietraject. Zonder deze maatregelen zou het alternatief van een IVA-uitkering moreel meer recht doen aan de situatie van de cliënt. Dit is een mooi voorbeeld van de morele dilemma’s die men tegenkomt.
                      </p>
                      <p className="leading-8  mb-4">
                        Wat mij het meest raakte, was de eerlijkheid waarmee de beperkingen van het systeem werden besproken. Het werd duidelijk dat we te maken hebben met een structureel probleem binnen de WIA-uitvoering, dat niet alleen deze cliënt raakt maar velen. Er werd gepleit voor meer maatwerk en voor een betere balans tussen de wet en rechtvaardigheid. Het feit dat wij als cliëntenraad hieraan konden bijdragen, heeft mij gesterkt in de overtuiging dat onze rol essentieel is.
                      </p>
                      <p className="leading-8  mb-4">
                        Dit beraad liet zien dat het oplossen van dergelijke complexe vraagstukken vraagt om openheid, samenwerking en een kritische blik op zowel de wet als de praktijk. Ik hoop dat de uitkomsten niet alleen deze cliënt helpen, maar ook bijdragen aan verbeteringen binnen het systeem. Het zou prachtig en zinvol zijn als we als cliëntenraad/raden vaker en misschien zelfs structureel bij dergelijke overlegsituaties betrokken worden.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="w-full">
                  <div>
                    <div className="prose prose-h2:scroll-m-10 mt-6 callout-purple text-[17px]">
                      <h2 className="scroll-m-20 text-2xl tracking-tight first:mt-0">
                        Het 7-stappenplan voor een moreel vraagstuk
                      </h2>
                      <p className="leading-8  mb-4">
                        In 7 stappen een moreel vraagstuk of dilemma analyseren en door een zorgvuldige weging van de argumenten en het vaststellen van schadebeperkende maatregelen, komen tot een beslissing die moreel juist, rechtmatig en toereikend is.
                      </p>
                      <p className="leading-8  mb-4">
                        <b>1. Voor welke beslissing sta ik / welke beslissing moet ik nemen?</b><br />
                        Beschrijf de problematiek vanuit een persoonlijk perspectief en geef nauwkeurig aan
                        welke handeling wordt overwogen. Iets niet doen kan in voorkomende gevallen ook
                        een handeling zijn.<br />
                        Formuleer de vraag als volgt: Behoor ik X te doen / na te laten? Van belang is dat de
                        geformuleerde vraag alleen beantwoord kan worden met het antwoord ja of nee.<br /><br />
                      </p>
                      <p className="leading-8  mb-4">
                        <b>2. Wie zijn er bij mijn beslissing betrokken / wie zijn de belanghebbenden?</b><br />
                        Maak een inventarisatie van alle* partijen, individuen en instanties wiens belangen bij
                        de beslissing in het spel zijn of van wie het welzijn door de beslissing wordt geraakt.<br />
                        (*alle partijen die de gevolgen ondergaan van wat jij doet)<br /><br />
                      </p>
                      <p className="leading-8  mb-4">
                        <b>3. Wie neemt de beslissing?</b><br /><br />
                      </p>
                      <p className="leading-8  mb-4">
                        <b>4. Heb ik meer informatie nodig om een verantwoorde beslissing te nemen?</b><br />
                        Wat zeggen de beroepsregels, bedrijfscodes of andere bindende voorschriften?
                        Zijn er kaders die behulpzaam kunnen zijn bij de beslissing, bijvoorbeeld beroepsregels,
                        bedrijfscodes, bepalingen die voortkomen uit richtlijnen of wettelijke kaders.
                        Staat er nog iets in de gedragscode?<br /><br />
                      </p>
                      <p className="leading-8  mb-4">
                        <b>5. Wat zijn de argumenten en/of welke argumenten kunnen worden aangevoerd?</b><br />
                        Om een positie te bepalen - iets doen of nalaten - moet ik argumenten kunnen geven
                        die ook voor anderen overtuigend kunnen zijn. Ook moet ik aandacht besteden aan
                        de argumenten die tegen mijn standpunt kunnen worden ingebracht; niet om ze
                        volledig onschadelijk te maken maar om te laten zien dat ze in de overweging zijn
                        meegenomen en om in de conclusie aan te kunnen geven hoe ik recht wil doen aan
                        de tegenargumenten. Inventariseer de argumenten zowel pro als contra de in stap
                        één geformuleerde beslissing / handeling. Maak een overzicht met twee kolommen,
                        aan de ene kant de argumenten die voor de beslissing / handeling pleiten en aan de
                        andere kant de tegen argumenten. Check of alle belanghebbenden uit stap twee ook
                        terugkomen in de argumentatie.
                      </p>
                      <p className="leading-8  mb-4">
                        <b>6. Tot welke conclusie kom ik / wat is mijn conclusie?</b><br />
                        Zijn eenmaal de argumenten voor en tegen uitgewisseld en gewogen, dan kan en
                        moet er een duidelijke conclusie worden geformuleerd.<br />
                        Geef aan welke argumenten hierbij de doorslag hebben gegeven. Check ook of je, ná
                        stap vijf, alles uit stap twee en drie hebt ‘meegenomen’<br /><br />
                      </p>
                      <p className="leading-8  mb-4">
                        <b>7. Ik peil bij mezelf of ik me goed voel over de genomen beslissing (of niet!).<br />
                        Doe ik het ook?</b><br />
                        Sta ik achter mijn conclusie? Kan ik mezelf in de spiegel blijven aankijken? Ga ik het
                        daadwerkelijk doen (toets aan morele intuïtie).<br /><br />
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
