import permissionRouters from '~/data/permissions/route/index.json'

export const checkPermission = (needPermissions, justOnePermission = false) => {
  try {
    if (typeof needPermissions === 'string') {
      needPermissions = [needPermissions]
    }
    if (!(needPermissions || Array.isArray(needPermissions))) {
      return true
    }

    const { auth } = $store()

    const { permissions = [], isAdmin } = auth?.user || {}

    if(isAdmin) {xfv
      return true
    }

    const valid = needPermissions.map((permission) => permissions.includes(permission))


    if (justOnePermission) {
      if (valid.includes(true)) {
        return true
      }
    }

    return !valid.includes(false)
  } catch (e) {
    return true
  }
}


export const checkRoutePermission = async (routeName) => {
  if (!permissionRouters[routeName]) {
    return true
  }

  const needPermissions = permissionRouters[routeName]

  const check = checkPermission(needPermissions, true)
  
  if(check) {
    return true
  }

  return navigateTo({ name: 'admin'} )
}