// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://Rory-OG.github.io',
  base: '/professional-website',
  output: 'static',
  integrations: [sitemap()],
});
