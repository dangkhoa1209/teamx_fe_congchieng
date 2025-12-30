import { a as __nuxt_component_0 } from './server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import Header from './index-COhvz7g9.mjs';
import { u as useHead } from './v3-CjX-H-q3.mjs';
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
import './content-place-geFh5xeL.mjs';
import './index-CyZG15Sy.mjs';
import '@iconify/utils/lib/css/icon';
import './asyncData-BGFq45PL.mjs';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './button-BdQnFGJN.mjs';
import './virtual_public-Hyo1k0ua.mjs';
import './index-BIrfQXJo.mjs';
import './MenuDropdownItem-Dei1bhor.mjs';
import './link-CWCUPPCN.mjs';
import './nuxt-link-Bf9L1Upn.mjs';
import './line-ByzM3RBl.mjs';
import './permission-check-YYJosWmV.mjs';
import './_store-Ndlczi3l.mjs';
import './change-password-m4Br2s_9.mjs';
import './modal-action-Cm0BfZlh.mjs';
import './button-Cryksw8w.mjs';
import './index-Cy0o-wGa.mjs';
import './index-CtS2E8qT.mjs';
import 'lodash-es/get.js';
import 'lodash-es/join.js';
import 'lodash-es/set.js';
import 'lodash-es/assign.js';
import 'lodash-es/isNil.js';
import 'lodash-es/isEmpty.js';
import 'lodash-es/includes.js';
import 'lodash-es/filter.js';
import 'lodash-es/debounce.js';
import 'lodash-es/isPlainObject.js';
import 'lodash-es/inRange.js';
import 'lodash-es/trim.js';
import 'lodash-es/capitalize.js';
import 'lodash-es/isEqual.js';
import 'lodash-es/uniq.js';
import 'lodash-es/remove.js';
import 'lodash-es/maxBy.js';
import 'lodash-es/round.js';
import 'lodash-es/ceil.js';
import 'lodash-es/cloneDeep.js';
import 'lodash-es/multiply.js';
import 'lodash-es/delay.js';
import 'lodash-es/sortBy.js';
import 'lodash-es/map.js';
import 'lodash-es/pick.js';
import 'lodash-es/max.js';
import 'lodash-es/min.js';
import 'lodash-es/sumBy.js';
import 'lodash-es/uniqueId.js';
import './input-Cox1YUul.mjs';
import './_url-Bg2mcYq_.mjs';
import '@vue/shared';
import './MobileMenu-CiKu2Jry.mjs';
import './MobileMenuItem-MXQopccL.mjs';
import './header-DFZJfgLv.mjs';

const _sfc_main = {
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Qu\u1EA3n l\xFD v\u0103n ho\xE1 c\u1ED3ng chi\xEAng"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=admin-C0v5L6V7.mjs.map
