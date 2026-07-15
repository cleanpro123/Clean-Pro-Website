// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss(), wasm(), topLevelAwait()],
    assetsInclude: ['**/*.glb'],
    server: {
      allowedHosts: ['eokit.com', 'www.eokit.com']
    },
  },
  preview: {
    allowedHosts: ['eokit.com', 'www.eokit.com']
  }
});
