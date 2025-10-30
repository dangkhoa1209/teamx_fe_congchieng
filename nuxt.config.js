// https://nuxt.com/docs/api/configuration/nuxt-config
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
    'pinia-plugin-persistedstate/nuxt'
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
  ],
})
