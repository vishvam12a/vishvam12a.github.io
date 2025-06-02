import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  // Specify that Astro should build a static site
  output: 'static',
  adapter: undefined, // Add this line

  integrations: [tailwind(), react()],

  vite: {
    server: {
      fs: {
        allow: ['.']
      },
      watch: {
        timeout: 300000,
        usePolling: true
      }
    },
  },
});