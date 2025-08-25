import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  integrations: [
    vue({ 
      reactivityTransform: true 
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          de: 'de-DE'
        }
      }
    })
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  site: 'https://janaenderle.com',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            $color-primary: white;
            $color-secondary: black;
            $color-tertiary: rgb(255, 26, 26);
          `
        }
      }
    }
  }
});