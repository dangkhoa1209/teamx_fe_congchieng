/**
 * Plugin Notification
 * Doc: https://github.com/Maronato/vue-toastification#usage
 */

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp()
  const options = {
    position: 'top-right',
    timeout: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    newestOnTop: true,
    transition: 'Vue-Toastification__bounce',
    maxToasts: 5,
  }

  nuxtApp.vueApp.use(Toast, options)
})
