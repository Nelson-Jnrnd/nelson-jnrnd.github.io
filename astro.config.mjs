// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// GitHub Pages user site, served from the root of the custom domain
// nelson-j.ch (carried by public/CNAME). `site` feeds the canonical link,
// og:url and the sitemap, so it must track the domain actually served.
// https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
  site: "https://nelson-j.ch",
  base: "/",
  redirects: {
  "/python/2024/02/25/Alpine-in-2024-A-Fresh-but-Rough-Start.html": "/blog/alpine-in-2024-a-fresh-but-rough-start/",
  "/python/2024/03/07/Alpine-in-2024-Bahrain-Rock-Bottom.html": "/blog/alpine-in-2024-bahrain-rock-bottom/",
  "/python/2024/03/21/Alpine-in-2024-Saudi-Arabia-Confirmation.html": "/blog/alpine-in-2024-saudi-arabia-confirmation/",
  "/python/2024/03/23/How-Ocon-got-out-of-Q1.html": "/blog/how-ocon-got-out-of-q1/",
  "/python/2024/03/30/Alpine-in-2024-Were-points-on-the-table-in-Melbourne.html": "/blog/alpine-in-2024-were-points-on-the-table-in-melbourne/",
  "/python/2024/04/21/Alpine-in-2024-New-Front-Wing-in-Japan.html": "/blog/alpine-in-2024-new-front-wing-in-japan/"
},
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
});
