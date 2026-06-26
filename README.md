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
[Last.fm](https://www.last.fm/api).

The account (`NestorDHCP`) and a read-only Last.fm API key are baked into
`src/pages/music.astro` as defaults — the key only ever sees public scrobble
data and ends up in the page source of any "now playing" widget anyway, so it's
safe to ship to the browser. (Last.fm's *shared secret* is **not** used or
stored: it's only needed for signed/authenticated calls, and this page just
reads public data.)

To point the page at a different account or key without editing the source, set
two build-time env vars, which override the defaults:

- `PUBLIC_LASTFM_USERNAME` — the Last.fm account to show.
- `PUBLIC_LASTFM_API_KEY` — the Last.fm API key.

In CI these can come from the repo's **Settings → Secrets and variables →
Actions** (username as a *Variable*, key as a *Secret*); the deploy workflow
passes both to the build. For local dev, put them in a `.env` file at the repo
root. If a value is empty the page just renders a quiet empty state.

## Deployment

The site deploys to GitHub Pages via `.github/workflows/deploy.yml` on push to
`main`. In **Settings → Pages**, *Build and deployment → Source* must be set to
**GitHub Actions**.
