// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  srcDir: 'src/',
  ssr: true,
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        // {
        //   rel: 'preconnect',
        //   href: 'https://fonts.googleapis.com'
        // },
        // {
        //   rel: 'preconnect',
        //   crossorigin: '',
        //   href: 'https://fonts.googleapis.com'
        // },
        // {
        //   rel: 'stylesheet',
        //   href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        // }
      ]
    }
  },

  components: [
    {
      path: '~/components',
      prefix: 'x'
    }
  ],
  modules: [
    '@nuxtjs/tailwindcss', 
    '@vueuse/nuxt', 
    '@pinia/nuxt', 
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/image-edge',
    'nuxt-icon'
  ],
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict'
    },
    storage: 'cookies'
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/scss/index.scss',
    'cropperjs/dist/cropper.css'
  ],
  vite: {
    plugins: svgLoader(),
  },
  googleFonts: {
    families: {
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 800],
      Roboto: [100, 200, 300, 400, 500, 600, 700, 800]
    },
    display: 'swap',
    preload: true,
    download: true,
    inject: true
  },
  tailwindcss: {
    viewer: false
  },
  runtimeConfig: {
    appKey: process.env.APP_KEY || '',
    public: {
      apiURL: process.env.API_URL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      grantType: process.env.GRANT_TYPE,
      grantTypeRefresh: process.env.GRANT_TYPE_REFRESH
    }
  },
})
