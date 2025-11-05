export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/') {
    return navigateTo('/trang-chu')
  }
})
