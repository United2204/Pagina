import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { siteConfig } from './src/config/site';

export default defineConfig({
  site: siteConfig.origin,
  base: siteConfig.basePath,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (asset) =>
            asset.name?.endsWith('.css') ? '_astro/site.css' : '_astro/[name]-[hash][extname]',
        },
      },
    },
  },
});
