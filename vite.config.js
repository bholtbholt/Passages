import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/passages/',
  clearScreen: false,
  server: {
    open: true,
  },
  build: {
    outDir: 'docs',
  },
  plugins: [svelte({ preprocess: sveltePreprocess() })],
});
