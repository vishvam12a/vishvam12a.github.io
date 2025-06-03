import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify'; // <--- IMPORTANT: Import the Netlify adapter

export default defineConfig({

  adapter: netlify(),

  // Your integrations remain the same
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