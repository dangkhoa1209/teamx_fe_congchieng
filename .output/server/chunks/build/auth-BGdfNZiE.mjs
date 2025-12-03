import { a as checkRoutePermission } from './permission-check-DndiXs_j.mjs';
import { l as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { $ as $store } from './_store-BUh4dPf_.mjs';
import 'vue';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'pinia';
import 'vue-router';
import '@iconify/vue';
import 'deep-pick-omit';
import 'vue-toastification';
import 'vee-validate';
import '@vee-validate/rules';
import 'vue/server-renderer';

const auth = defineNuxtRouteMiddleware((to) => {
  const toRoute = to.name;
  if (!toRoute.startsWith("admin")) {
    return;
  }
  const guests = ["admin-auth-login", "admin-auth-forgot-password"];
  if (guests.includes(toRoute)) {
    return;
  }
  const notAuthRoute = "admin-auth-login";
  const { auth: auth2 } = $store();
  const accessToken = auth2 == null ? void 0 : auth2.getAccessToken;
  if (!accessToken) {
    return navigateTo({ name: notAuthRoute });
  }
  checkRoutePermission(to.name.toString());
});

export { auth as default };
//# sourceMappingURL=auth-BGdfNZiE.mjs.map
