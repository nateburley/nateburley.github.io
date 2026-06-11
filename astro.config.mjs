// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Live site URL — used for canonical links, sitemap, and RSS.
  site: 'https://nateburley.github.io',
  integrations: [sitemap()],
});
