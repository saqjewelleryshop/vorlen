# Vorlen 10/10 pass — changes made

## UI / UX
- Preserved the black / cream / acid-lime editorial art direction.
- Refined navigation and added dedicated Work, Services, Studio, Insights, Contact and Privacy routes.
- Added service detail pages, selected-work detail pages and useful insight articles.
- Added strong mobile navigation, responsive layouts, consistent CTA patterns and clearer content hierarchy.
- Added accessible accordion behaviour, skip navigation, keyboard focus states and reduced-motion support.
- Removed the placeholder telephone number.
- Removed unsubstantiated numerical performance claims from the work presentation.

## Search / SEO / AEO / GEO
- Corrected canonical domain usage to https://vorlen.co.uk.
- Rebuilt XML sitemap for all public routes.
- Corrected robots directives and sitemap URL.
- Added page-specific titles, descriptions, canonicals and Open Graph metadata.
- Added Organization, WebSite, ProfessionalService, Service, BreadcrumbList, CreativeWork and Article structured data where appropriate.
- Added direct-answer service FAQs and clear single-topic service URLs.
- Added crawlable internal links throughout the information architecture.
- Added useful insight content addressing SEO/AEO/GEO, website briefs and automation.
- Added `/llms.txt` as an optional machine-readable site summary; it is not treated as a replacement for SEO.

## Performance / engineering
- Converted the homepage and main content to server components; only navigation, accordion and project-brief interactions use client JavaScript.
- Added security headers, compression and removed the Next.js powered-by header.
- Added a web manifest, favicon, semantic structure and responsive CSS without heavy image dependencies.
- Added a custom 404 page.

## Contact / privacy
- Added a detailed project-brief experience that opens the visitor's email app with a pre-filled brief.
- The supplied code does not claim to store or deliver form data server-side without a real provider.
- Added a privacy page describing the behaviour of the supplied code and calling out deployment-time review requirements.

## Before production
- Confirm all case-study names/copy are approved for publication.
- Add verified results/testimonials only when substantiated.
- Connect analytics/consent tooling if required.
- Connect Search Console and Bing Webmaster Tools after deployment.
- If you want a true in-site contact submission, connect a mail/CRM provider plus abuse protection and update privacy handling.

## 2026-09-11 — Live work visibility fix
- Added an explicit **Live client projects** grid at the top of the homepage Work area.
- NTM Associates and Tenant Dashboard are now named prominently before the visual case-study cards.
- Added direct **Visit live site** links on both homepage project entries.
- Kept dedicated internal case-study pages and external live-project CTAs.
- Confirmed there is no `reportAllChanges` or `startTime` code in the project source; that console trace is injected/runtime code rather than application source.
- Added the Ivy & Pearls live project URL (`https://ivyandpearls.co.uk/`) so its case study now shows the **See the work in the real world.** section and live-project CTA.



## Badr Adventures work update
- Added Badr Adventures as selected work item 06.
- Added live-project link to https://badradventures.co.uk/.
- Added dedicated Badr Adventures case-study content and live-project CTA.
- Updated selected-work count to 01—06.
