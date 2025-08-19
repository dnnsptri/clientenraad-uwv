# UWV Cliëntenraad Jaarverslag 2024

Een responsive, toegankelijke microsite voor het jaarverslag 2024 van de UWV cliëntenraad.

## 🚀 Features

- **Responsive Design**: Mobile-first approach met Tailwind CSS
- **Toegankelijkheid**: WCAG 2.1 AA compliant
- **Performance**: Geoptimaliseerd voor snelle laadtijden
- **SEO**: Meta tags, Open Graph, structured data
- **PDF Download**: Volledig jaarverslag als PDF
- **Interviews**: 7 interviews met consistente template
- **Analytics**: Google Analytics 4 integratie

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Content**: MDX
- **Language**: TypeScript
- **Fonts**: Open Sans (Google Fonts)
- **Analytics**: Google Analytics 4

## 📁 Project Structuur

```
uwv_clientenraad/
├── app/                    # Next.js App Router
│   ├── (site)/           # Site layout en pagina's
│   ├── download/         # PDF download route
│   └── search/           # Zoek functionaliteit
├── components/            # React componenten
│   ├── ui/              # Basis UI componenten
│   ├── layout/          # Layout componenten
│   └── report/          # Rapport-specifieke componenten
├── content/              # Content en configuratie
├── lib/                  # Utility functies
├── styles/               # Global styles
└── public/               # Statische assets
```

## 🎨 Design System

### Kleuren
- **Primary**: #00A8FF (helder blauw)
- **Primary Dark**: #007EBE (donker blauw)
- **Secondary**: #650260 (diep paars)
- **Secondary Light**: #7D256A (lichter paars)
- **Dark**: #0F0F11 (bijna zwart)
- **Light Gray**: #F6F6F6 (off-white)
- **White**: #FFFFFF

### Typografie
- **Body Font**: Open Sans
- **Headings**: Bold weights voor hiërarchie
- **Line Height**: 1.75 voor leesbaarheid

## 🚀 Installatie

1. **Clone de repository**
   ```bash
   git clone [repository-url]
   cd uwv_clientenraad
   ```

2. **Installeer dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build voor productie
- `npm run start` - Start productie server
- `npm run lint` - ESLint check
- `npm run type-check` - TypeScript check
- `npm run a11y-check` - Toegankelijkheid check
- `npm run perf-check` - Performance check

## 🔧 Configuratie

### Environment Variables
Maak een `.env.local` bestand aan:

```env
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
GOOGLE_SITE_VERIFICATION=verification_code
```

### Content Beheer
- **Interviews**: Bewerk MDX bestanden in `/content/interviews/`
- **Site Config**: Bewerk `/content/site.config.ts`
- **Styling**: Bewerk `/styles/global.css` en `tailwind.config.ts`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Toegankelijkheid

- Skip to content link
- Focus management
- Semantic HTML
- ARIA labels
- Color contrast compliance
- Keyboard navigation

## 🔍 SEO Features

- Meta tags per pagina
- Open Graph images
- Structured data
- Sitemap (automatisch)
- Robots.txt

## 📊 Analytics

- Page views
- PDF downloads
- User interactions
- Performance metrics

## 🖨️ Print Styles

- Single column layout
- Page break control
- Hidden navigation
- Optimized typography

## 🚀 Deployment

### Vercel (Aanbevolen)
1. Push naar GitHub
2. Verbind met Vercel
3. Deploy automatisch

### Andere platforms
```bash
npm run build
npm run start
```

## 📋 Checklist

### Pre-deployment
- [ ] Environment variables geconfigureerd
- [ ] Google Analytics ID ingesteld
- [ ] Content gecontroleerd
- [ ] Images geoptimaliseerd
- [ ] Performance getest
- [ ] Accessibility getest

### Post-deployment
- [ ] Analytics tracking geverifieerd
- [ ] PDF download getest
- [ ] Mobile responsiveness gecontroleerd
- [ ] SEO meta tags geverifieerd

## 🤝 Bijdragen

1. Fork de repository
2. Maak een feature branch
3. Commit je wijzigingen
4. Push naar de branch
5. Open een Pull Request

## 📄 Licentie

Alle rechten voorbehouden - UWV Cliëntenraad

## 📞 Support

Voor vragen of problemen, neem contact op met het development team.