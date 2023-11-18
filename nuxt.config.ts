export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
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
        de: '/über',
      }
    }
  },

})