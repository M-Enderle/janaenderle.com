export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/robots",
    'nuxt-simple-sitemap',
    "@nuxtjs/i18n",
    'nuxt-icon',
    "@nuxtjs/cloudinary",
    "@nuxt/image"
  ],

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
      free_hands: {
        en: '/free-hands',
        de: '/freihaende',
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

  //image: {
  //  quality: 40,
  //  format: ['webp'],
  //  screens: {
  //    'xs': 320,
  //    'sm': 640,
  //    'md': 768,
  //    'lg': 1024,
  //    'xl': 1280,
  //    'xxl': 1536,
  //    '2xl': 1536
  //  },
  //},


  nitro: {
    prerender: {
      crawlLinks: true, // recommended
    }
  },

  site: {
    url: 'https://next.janaenderle.com', //TODO: Change to live url
  },

  cloudinary: {
    cloudName: 'dqxwy7joy',
  }
})