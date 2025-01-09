// @ts-check
import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  integrations: [partytown(), icon(), tailwind(), mdx(), sitemap(), robotsTxt()],
  adapter: vercel()
});
