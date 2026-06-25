# nelson-jnrnd.github.io

Personal site of **Nelson Jeanrenaud** — a software engineer based in
Switzerland (mostly .NET, Blazor, C#, industrial and computer-vision-adjacent
software).

A single, quiet, document-style page: off-black background, soft white text,
restrained gold + green accents. Minimal by design — typography, spacing and
alignment do the work, with no scroll choreography or decorative effects.

## Stack

- **[Astro](https://astro.build/)** (static output) + **TypeScript**
- Plain **CSS** (single global stylesheet, design tokens via CSS custom properties)
- No client-side JavaScript
- `@astrojs/sitemap` for SEO
- Fonts: IBM Plex Sans + IBM Plex Mono (Google Fonts), with a system fallback stack

## Project structure

```
src/
├── layouts/BaseLayout.astro     # <head>, fonts, meta, skip-link, global CSS
├── components/
│   ├── SiteHeader.astro         # name + anchor nav
│   └── SiteFooter.astro
├── pages/
│   ├── index.astro              # the whole page (intro, about, work, projects, toolkit, interests, contact)
│   └── 404.astro
└── styles/global.css            # all styling + design tokens
public/
├── favicon.svg / favicon.png
├── robots.txt
├── images/portrait.jpg
└── cv/nelson-jeanrenaud-cv.pdf  # linked from the Contact section
archive/legacy-site-2026-06-02/  # the previous Jekyll (Jalpc) site, archived
```

## Run locally

```bash
pnpm install
pnpm dev        # dev server at http://localhost:4321
pnpm build      # production build to ./dist
pnpm preview    # preview the production build
pnpm check      # astro type/diagnostics check
```

## Editing content

All copy and links live in `src/pages/index.astro`. Contact links (email,
GitHub, LinkedIn, CV) are defined as constants at the top of that file. To
update the CV, replace `public/cv/nelson-jeanrenaud-cv.pdf`.

## Deployment

The site deploys to GitHub Pages via `.github/workflows/deploy.yml` on push to
`main`. In **Settings → Pages**, *Build and deployment → Source* must be set to
**GitHub Actions**.
