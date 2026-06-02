// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// GitHub Pages user site: served from the domain root.
// https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
  site: "https://nelson-jnrnd.github.io",
  base: "/",
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
});
