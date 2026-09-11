# Vorlen Digital Studio

Production-oriented Next.js App Router website for Vorlen.

## Included
- Multi-page information architecture: Home, Work, Services, Studio, Insights and Contact
- Individual service pages with direct-answer FAQ content
- Individual selected-work pages without unverifiable performance claims
- Insight articles for useful search/AEO/GEO coverage
- Server-rendered primary pages; client JavaScript limited to navigation, FAQ and project-brief interactions
- Canonical metadata, Open Graph/Twitter metadata, sitemap and robots
- Organization, WebSite, ProfessionalService, Service, BreadcrumbList, CreativeWork and Article structured data where relevant
- `/llms.txt` as a lightweight optional machine-readable summary (not a replacement for SEO)
- Semantic HTML, skip link, keyboard focus styles, accessible mobile navigation and reduced-motion support
- Responsive editorial visual system preserving the supplied black / cream / acid-lime creative direction
- Security headers and no framework-powered header
- Contact brief that opens the user's email client and does not claim to store or deliver data server-side

## Important launch checks
1. Confirm `https://vorlen.co.uk` is the final canonical production domain.
2. Replace or expand selected work copy with approved, factual project information.
3. Add verified testimonials/results only where evidence exists.
4. Add analytics/consent tooling appropriate to your legal and measurement requirements.
5. Connect Google Search Console and Bing Webmaster Tools after deployment.
6. If you want an in-site contact form rather than email-client handoff, connect a real mail/CRM provider and add spam protection/privacy handling.
7. Add social profile URLs to Organization structured data once confirmed.

## Run
```bash
npm install
npm run dev
```

## Production check
```bash
npm run build
npm start
```
