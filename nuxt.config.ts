import { installNuxtSiteConfig, updateSiteConfig } from 'nuxt-site-config-kit'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/robots",
    '@nuxtseo/module',
    'nuxt-icon',
    'nuxt-simple-sitemap'],
  site: {
    url: 'https://janaenderle.com',
    name: 'Studio Rotstich',
    description: 'Studio Rotstich is a design agency focusing on brand identities and print media. It was founded by Jana Enderle, a studied communication designer and operates throughout Germany and also partly abroad.',
    defaultLocale: 'en',
    identity: {
      type: 'Person'
    },
    instagram: '@studio.rotstich',
  },
})