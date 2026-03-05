---
allowedTools:
  - Edit
  - Write
  - Bash(*)
  - Read
  - Glob
  - Grep
  - WebFetch
  - WebSearch
  - TodoWrite
  - NotebookEdit
---

# Beacon Local — Project Brief

## What This Is
A website for Sean McKee's digital marketing agency, **Beacon Local**, specializing in websites and SEO for pelvic floor physical therapy practices.

## Owner
Sean McKee — builds fast, SEO-ready websites and manages ongoing SEO for pelvic floor PT practices nationwide.

## Domain
beacon-local.com

## Reference Project
This site follows the same stack and conventions as the AG Physical Therapy site at:
`c:\Users\mckee\OneDrive\Documents\agphysicaltherapypc-astro`

Use that project as the architectural reference for all patterns, component structure, and conventions.

---

## Stack
- **Astro 5.x** — static output, compressHTML
- **Tailwind CSS 4.x** — CSS-based theme config (no tailwind.config.mjs)
- **Integrations**: @astrojs/mdx, @astrojs/sitemap, @tailwindcss/vite
- **TypeScript strict** with `@/*` path alias
- **Content collections** for blog (Zod schema validation)
- **Central config** in `src/config/site.ts` (all business data, nav, services, SEO)
- **SEO components**: JsonLd.astro (schema.org graph), SEOHead.astro (meta/OG/Twitter)
- **Layouts**: BaseLayout.astro, BlogPostLayout.astro
- **Components**: Header.astro, Footer.astro in `src/components/layout/`
- **Global CSS** with Tailwind v4 `@theme` block, component classes, clamp() typography
- **Google Fonts**: DM Serif Display (headings) + Inter (body) loaded in SEOHead
- **Accessibility**: skip-to-main, focus-visible, semantic HTML, ARIA labels

---

## Business Model
- **Target**: Pelvic floor physical therapy practices (solo practitioners and small clinics)
- **Setup fee**: $1,500 — custom Astro website build, SEO-ready from day one
- **Monthly retainer**: ~$400/month — GBP management, local SEO, content, ongoing optimization
- **Key differentiator**: Niche expertise (knows what PF PT patients search for) + owns the tech stack (no maintaining other people's sites) + high-touch relationship (not a volume/AI play)
- **Capacity**: 33-50 clients max
- **No pricing displayed on site** (yet)

---

## Services Offered
1. **Custom Website Build** — Fast Astro sites designed for pelvic floor PT practices
2. **Google Business Profile Management** — Optimization, posts, review strategy
3. **Local SEO** — Rankings, citations, technical optimization
4. **Content Strategy** — Blog posts and service pages targeting patient search terms
5. **Monthly Reporting** — Plain-English updates on what's working

---

## Brand
- **Primary**: Deep ocean teal (#1B5E7B)
- **Accent**: Warm beacon gold (#E8A317)
- **Dark text**: #1A2332
- **Surfaces**: White, warm gray
- **Heading font**: DM Serif Display (serif)
- **Body font**: Inter (sans-serif)
- **Logo**: Lighthouse SVG at `/images/logo.svg`
- All colors defined in `src/styles/global.css` `@theme` block

---

## Pages
- **Home** — Hero + CTA, services overview, "Why Beacon Local" section, CTA
- **About** — Sean's background, niche focus on PF PT, approach, CTA
- **Services** — 5 service descriptions with detailed explanations
- **Contact** — Email, scheduling placeholder, what to expect
- **404** — Simple error page
- **Blog listing** — Empty but ready for posts
- **Blog post route** — Dynamic `[...slug].astro` route

---

## Schema.org
Use **ProfessionalService**. No geo tags — this is a nationwide remote business.

---

## What's NOT included (intentionally)
- No pricing displayed
- No testimonials (yet)
- No GA4 tracking (yet)
- No sticky mobile CTA (yet)
- No OG image — create when branding is finalized

---

*Last updated: March 2026*
