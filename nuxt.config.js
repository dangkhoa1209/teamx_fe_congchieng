// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  srcDir: 'src/',
  ssr: false,
  $production: {
    devtools: { enabled: false },
    sourcemap: { server: false, client: false }
  },
  $development: {
    devtools: { enabled: true },
    sourcemap: { server: true, client: true }
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
})
