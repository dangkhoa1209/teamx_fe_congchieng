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

  console.log('accessToken', accessToken);
  
 return navigateTo({ name: notAuthRoute} )

})
