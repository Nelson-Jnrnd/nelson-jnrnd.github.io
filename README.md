# nelson-jnrnd.github.io

Personal portfolio of **Nelson Jeanrenaud** — a software engineer focused on
architecture, .NET applications, and industrial software.

Single-page site in the *"Engineering Field Notes"* visual direction: warm
paper tones (green / beige / yellow), a foldable treasure-map navigator pinned
to the top-right of the header, polaroid-style media placeholders, a "tool
roll" Toolkit, and a pinned-note contact card.

## Stack

- **[Astro](https://astro.build/)** (static output) + **TypeScript**
- Plain **CSS** (single global stylesheet, design tokens via CSS custom properties)
- Minimal vanilla TS (`reveal-on-scroll` + map-nav toggle), no animation/UI libraries
- `@astrojs/sitemap` for SEO
- Fonts: Source Serif 4, IBM Plex Sans, IBM Plex Mono (Google Fonts)

## Project structure

```
src/
├── layouts/BaseLayout.astro     # <head>, fonts, meta, skip-link, global CSS + script
├── components/
│   ├── SiteHeader.astro         # brand + field-map nav
│   ├── FieldMap.astro           # foldable treasure-map navigator (4 waypoints)
│   ├── Hero.astro
│   ├── Work.astro               # featured item + career timeline + personal systems
│   ├── Toolkit.astro            # "tool roll" of languages/frameworks/platforms
│   ├── About.astro              # bio + illustrated interest strip
│   ├── Contact.astro            # pinned-note contact card + CV link
│   └── SiteFooter.astro
├── pages/
│   ├── index.astro              # composes the single page
│   └── 404.astro
├── scripts/main.ts              # IntersectionObserver reveal + map-nav toggle
└── styles/global.css            # all styling + design tokens
public/
├── favicon.svg                  # NJ monogram stamp
├── robots.txt
├── cv/README.md                 # where to drop the real CV (see Placeholders)
└── images/README.md             # where to drop real imagery
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

## Placeholders to fill in

These are intentional, documented placeholders — no code change is required
beyond dropping in the asset (or editing the noted constant):

- **CV** — add `public/cv/nelson-jeanrenaud-cv.pdf` (the Download CV button
  already links to it). See `public/cv/README.md`.
- **Contact handles** — `src/components/Contact.astro` uses placeholder values
  (`hello@example.com`, `/in/njeanrenaud`, `@njeanrenaud`) carried over from the
  design. Update the constants at the top of that file with the real ones.
- **Imagery** — hero portrait, industrial-vision, motorsport, and workbench
  frames render hand-drawn SVG sketches. See `public/images/README.md` to swap
  in real photos.
- **Logo / mascot** — the `NJ` monogram is a placeholder per the content spec.

## Deployment

The site deploys to GitHub Pages via `.github/workflows/deploy.yml` on push to
`main`. In **Settings → Pages**, set *Build and deployment → Source* to
**GitHub Actions** (this replaces the old Jekyll build).
