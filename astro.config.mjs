// astro.config.mjs
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Your full website URL
  site: 'https://Rex-8.github.io',

  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],

  // The base path for your repo (Rex-8.github.io/nh-web)
  base: '/nh-web',

  integrations: [mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
});