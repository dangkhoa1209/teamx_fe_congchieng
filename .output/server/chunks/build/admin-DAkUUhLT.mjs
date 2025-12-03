import { a as __nuxt_component_0 } from './server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import Header from './index-Ci1osAMV.mjs';
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
import './virtual_public-Hyo1k0ua.mjs';
import './index-D9oGACb4.mjs';
import './MenuDropdownItem-D2iSj5_k.mjs';
import './link-CWCUPPCN.mjs';
import './nuxt-link-Bf9L1Upn.mjs';
import './line-ByzM3RBl.mjs';
import './permission-check-DndiXs_j.mjs';
import './_store-BUh4dPf_.mjs';
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
//# sourceMappingURL=admin-DAkUUhLT.mjs.map
