import { $ as $store } from './_store-Ndlczi3l.mjs';
import { n as navigateTo } from './server.mjs';

const permissionRouters = {
  "admin-tai-khoan": ["tai-khoan"],
  "admin-tin-tuc-su-kien-quan-ly": ["tin-tuc-su-kien", "xa-lac-duong", "xa-da-teh", "xa-bao-lam-3", "xa-dinh-trang-thuong", "xa-dam-dong-4"],
  "admin-tin-tuc-su-kien-tin-noi-bat-tat-ca": ["tin-tuc-su-kien"],
  "admin-tin-tuc-su-kien-tin-noi-bat-xa-lac-duong": ["xa-lac-duong"],
  "admin-tin-tuc-su-kien-tin-noi-bat-xa-da-teh": ["xa-da-teh"],
  "admin-tin-tuc-su-kien-tin-noi-bat-xa-bao-lam-3": ["xa-bao-lam-3"],
  "admin-tin-tuc-su-kien-tin-noi-bat-xa-dinh-trang-thuong": ["xa-dinh-trang-thuong"],
  "admin-tin-tuc-su-kien-tin-noi-bat-xa-dam-dong-4": ["xa-dam-dong-4"],
  "admin-trang-chu": ["trang-chu"]
};
const checkPermission = (needPermissions, justOnePermission = false) => {
  try {
    if (typeof needPermissions === "string") {
      needPermissions = [needPermissions];
    }
    if (!(needPermissions || Array.isArray(needPermissions))) {
      return true;
    }
    const { auth } = $store();
    const { permissions = [], isAdmin } = (auth == null ? void 0 : auth.user) || {};
    if (isAdmin) {
      xfv;
      return true;
    }
    const valid = needPermissions.map((permission) => permissions.includes(permission));
    if (justOnePermission) {
      if (valid.includes(true)) {
        return true;
      }
    }
    return !valid.includes(false);
  } catch (e) {
    return true;
  }
};
const checkRoutePermission = async (routeName) => {
  if (!permissionRouters[routeName]) {
    return true;
  }
  const needPermissions = permissionRouters[routeName];
  const check = checkPermission(needPermissions, true);
  if (check) {
    return true;
  }
  return navigateTo({ name: "admin" });
};

export { checkRoutePermission as a, checkPermission as c };
//# sourceMappingURL=permission-check-YYJosWmV.mjs.map
