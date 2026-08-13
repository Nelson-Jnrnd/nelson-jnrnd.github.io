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
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
});
