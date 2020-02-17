module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-clipboard2',
    'nuxt-i18n'
  ],

  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          greeting: 'Hello world!',
          ei_description: 'IOTA simple and easy.',
          ei_mission:
            'Our mission is to provide content around IOTA and to explain IOTA in simple language.',
          footer: {
            title: 'einfachIOTA',
            blog: 'Blog',
            magazine: 'Magazine',
            community: 'Community',
            partners: 'Partners',
            iota_title: 'IOTA',
            iota_web: 'Official Website',
            iota_news: 'News',
            iota_more: 'More',
            imprint: 'Imprint',
            privacy_policy: ' Privacy Policy'
          },
          advertisement: {
            text: 'First einfachIOTA magazine pre-sale - limited!',
            text_short: 'Magazine pre-sale',
            button: 'Magazine pre-sale'
          }
        },
        de: {
          greeting: 'Hallo Welt!',
          ei_description: 'IOTA einfach erklärt.',
          ei_mission:
            'Unsere Aufgabe ist es, deutschsprachigen Inhalt rund um IOTA bereitzustellen und IOTA in einfacher Sprache zu erklären.',
          footer: {
            title: 'einfachIOTA',
            blog: 'Blog',
            magazine: 'Magazin',
            community: 'Community',
            partners: 'Partner',
            iota_title: 'IOTA',
            iota_web: 'Offizielle Webseite',
            iota_news: 'News',
            iota_more: 'Mehr',
            imprint: 'Impressum',
            privacy_policy: 'Datenschutz'
          },
          advertisement: {
            text: 'einfachIOTA Magazin Vorverkauf - English Version',
            text_short: 'einfachIOTA Magazin (en)',
            button: 'Zum Shop'
          }
        }
      }
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    shopUrl: process.env.SHOP_URL || 'http://localhost:3001',
    refAddress:
      process.env.REF_ADDRESS ||
      'IKTYKKCZFZZECSFIJYWYSUUTXCIBNIFPFSPGUIUUAYONDYUSHEZVQBNPDYUTDMTNTHBLABCYYLZKLGIVCINGBALQVX'
  }
}
