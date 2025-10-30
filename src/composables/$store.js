import * as stores from '@/store'

export default () => {
  const { $pinia } = useNuxtApp()
  console.log(stores.auth);
  
  return {
    auth: stores.auth($pinia),
  }
}