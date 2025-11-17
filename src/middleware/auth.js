import { checkRoutePermission } from '@/utils/permission-check.js';


export default defineNuxtRouteMiddleware((to) => {
  
  const toRoute = to.name

  if(!toRoute.startsWith('admin')){
    return 
  }
  
  const guests = [
    'admin-auth-login',
    'admin-auth-forgot-password'
  ]

  if (guests.includes(toRoute)) {
    return 
  }
  const notAuthRoute = 'admin-auth-login'

  const { auth } = $store()  
  const accessToken = auth?.getAccessToken

  if(!accessToken) {
    return navigateTo({ name: notAuthRoute} )
  }

  checkRoutePermission(to.name.toString(), true)
})
