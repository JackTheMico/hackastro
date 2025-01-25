import mdx from "@astrojs/mdx";

import partytown from "@astrojs/partytown";
import paraglide from "@inlang/paraglide-astro";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

import swup from "@swup/astro";
import icon from "astro-icon";

import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import { USER_SITE } from "./src/consts.ts";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "directory",
  },
  site: USER_SITE,
  i18n: {
    defaultLocale: "zh", // the default locale
    locales: ["en", "zh"], // the locales you want to support
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [
    partytown(),
    icon({
      include: {
        mdi: ["*"],
      },
    }),
    tailwind(),
    mdx(),
    sitemap(),
    robotsTxt(),
    swup(),
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
    pagefind(),
  ],
  adapter: vercel(),
});
