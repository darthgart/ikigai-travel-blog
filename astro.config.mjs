// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(), 
    sitemap(), 
    starlight({
      title: 'IKIGAI - Blog de viajes',
      expressiveCode: false,
    })
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});