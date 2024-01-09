export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/i18n",
    'nuxt-icon',
    "@nuxtjs/cloudinary",
    "@nuxt/image",
    ['@funken-studio/sitemap-nuxt-3', { generateOnBuild: true , hostname: 'https://janaenderle.com'}],
  ],

  // mutli language support
  i18n: {

    baseUrl: 'https://janaenderle.com', //TODO: Change to live url

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
        en: '/about',
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
      imprint: {
        en: '/imprint',
        de: '/impressum',
      },
      project: {
        en: '/project/',
        de: '/projekt/',
      },
      project_lenis: {
        en: '/project/lenis',
        de: '/projekt/lenis',
      },
      project_super_me: {
        en: '/project/super_me',
        de: '/projekt/super_me',
      },
      project_odds_and_ends: {
        en: '/project/odds_and_ends',
        de: '/projekt/odds_and_ends',
      },
      project_vulkanfieber: {
        en: '/project/vulkanfieber',
        de: '/projekt/vulkanfieber',
      },
      project_cre4te: {
        en: '/project/cre4te',
        de: '/projekt/cre4te',
      },

    }
  },

  nitro: {
    prerender: {
      crawlLinks: true, // recommended
    },
    compressPublicAssets: true
  },

  cloudinary: {
    cloudName: 'dqxwy7joy',
  },

  routeRules: {
    '/project': { redirect: '/projects' },
    '/de/projekt': { redirect: '/de/projekte' },
  }

})