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
- Almost no client-side JavaScript — only the Music page talks to the Last.fm API
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
│   ├── music.astro              # Music page — now playing + recently played, as vinyl records (Last.fm)
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

## Music page

`/music` shows the current/last-played track as a (spinning, when playing)
vinyl record plus a small shelf of recently played tracks, pulled live from
[Last.fm](https://www.last.fm/api). It reads two build-time env vars:

- `PUBLIC_LASTFM_USERNAME` — the Last.fm account to show.
- `PUBLIC_LASTFM_API_KEY` — a Last.fm API key (read-only; it only ever sees
  public scrobble data, so it's safe to ship to the browser).

In CI these come from the repo's **Settings → Secrets and variables →
Actions**: add `PUBLIC_LASTFM_USERNAME` as a *Variable* and
`PUBLIC_LASTFM_API_KEY` as a *Secret* (the deploy workflow passes both to the
build). For local dev, put them in a `.env` file at the repo root. If either is
missing the page just renders a quiet empty state.

## Deployment

The site deploys to GitHub Pages via `.github/workflows/deploy.yml` on push to
`main`. In **Settings → Pages**, *Build and deployment → Source* must be set to
**GitHub Actions**.
