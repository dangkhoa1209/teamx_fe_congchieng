import * as stores from '@/store'

export default () => {
  const { $pinia } = useNuxtApp()
  return {
    auth: stores.auth($pinia),
  }
}