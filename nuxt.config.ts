export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxt/image',
    "@nuxtjs/robots",
    'nuxt-simple-sitemap',
    "@nuxtjs/i18n"],

  // mutli language support
  i18n: {

    baseUrl: 'https://next.janaenderle.com', //TODO: Change to live url

    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.ts',
      },
      {
        code: 'de',
        iso: 'de-DE',
        file: 'de-DE.ts',
      },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },

    // route names
    customRoutes: 'config',
    pages: {
      about: {
        en: '/about-me',
        de: '/ueber',
      },
      projects: {
        en: '/projects',
        de: '/projekte',
      },
      free_hand: {
        en: '/free-hand',
        de: '/freihand',
      },
      imprints: {
        en: '/imprints',
        de: '/impressum',
      },
      
    }
  },

  image: {
    quality: 40,
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },
})