import { a as __nuxt_component_0 } from './server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import Header from './index-D1YPNy8q.mjs';
import Footer from './index-F2u6BlhH.mjs';
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
import './index-C08a6tCK.mjs';
import '@iconify/utils/lib/css/icon';
import './asyncData-DmOfOvfO.mjs';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './_image-CatW-12k.mjs';
import './index-BPS_N54y.mjs';
import './MenuDropdownItem-ALO0dNjY.mjs';
import './link-r8bg-CCq.mjs';
import './nuxt-link-BuJvu1Wo.mjs';
import './line-CYB7w7Wn.mjs';
import './input-fitter-B9Y0PVvt.mjs';
import './MobileMenu-CTSHYo2b.mjs';
import './MobileMenuItem-D_TPKKxP.mjs';
import './header-DFZJfgLv.mjs';
import './space-CZvezhho.mjs';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Khoa",
      meta: [{ name: "description", content: "Website c\u1EE7a Khoa - v\xED d\u1EE5 SEO t\u1ED1t h\u01A1n" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CQghWJuD.mjs.map
