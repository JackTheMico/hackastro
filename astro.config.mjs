import mdx from "@astrojs/mdx";

import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

import swup from "@swup/astro";
import icon from "astro-icon";

import robotsTxt from "astro-robots-txt";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en", // the default locale
    locales: ["en", "zh"], // the locales you want to support
  },
  integrations: [
    partytown(),
    icon(),
    tailwind(),
    mdx(),
    sitemap(),
    robotsTxt(),
    swup(),
  ],
  adapter: vercel(),
});
