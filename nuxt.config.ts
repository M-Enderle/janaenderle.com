export default defineNuxtConfig({
  srcDir: 'src/',
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
        language: 'en-US',
        file: 'en-US.ts',
      },
      {
        code: 'de',
        language: 'de-DE',
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
      idex: {
        en: '/',
        de: '/de',
      },
      about: {
        en: '/about',
        de: '/ueber',
      },
      free_hand: {
        en: '/free-hand',
        de: '/freihand',
      },
      imprint: {
        en: '/imprint',
        de: '/impressum',
      },
      privacy: {
        en: '/privacy',
        de: '/datenschutz',
      },
      contact: {
        en: '/contact',
        de: '/kontakt',
      },
      contact_success: {
        en: '/contact-success',
        de: '/kontakt-erfolg',
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
      project_annayuna: {
        en: '/project/annayuna',
        de: '/projekt/annayuna',
      },
      project_finanzguru: {
        en: '/project/finanzguru',
        de: '/projekt/finanzguru',
      },
      project_thesharp_club: {
        en: '/project/thesharp_club',
        de: '/projekt/thesharp_club',
      },
      project_velvet_soul_street: {
        en: '/project/velvet_soul_street',
        de: '/projekt/velvet_soul_street',
      },
      project_weingut_werner: {
        en: '/project/weingut_werner',
        de: '/projekt/weingut_werner',
      }
    }
  },

  nitro: {
    prerender: {
      routes: [
        '/',
        '/de',
        '/free-hand',
        '/de/freihand',
        '/imprint',
        '/de/impressum',
        '/privacy',
        '/de/datenschutz',
        '/contact',
        '/de/kontakt',
        '/about',
        '/de/ueber',
        '/project/annayuna',
        '/de/project/annayuna',
        '/project/super_me',
        '/de/project/super_me',
        '/project/lenis',
        '/de/project/lenis',
        '/project/IKEAXAstraZeneca',
        '/de/project/IKEAXAstraZeneca',
        '/project/odds_and_ends',
        '/de/project/odds_and_ends',
        '/project/finanzguru',
        '/de/project/finanzguru',
        '/project/thesharp_club',
        '/de/project/thesharp_club',
        '/project/velvet_soul_street',
        '/de/project/velvet_soul_street',
        '/project/weingut_werner',
        '/de/project/weingut_werner',
        '/privacy.de',
        '/de/privacy.de'
      ]
    },
    compressPublicAssets: true
  },

  cloudinary: {
    cloudName: 'dqxwy7joy',
  },

  compatibilityDate: '2025-09-07',
})