import { a as __nuxt_component_0 } from './server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import Header from './index-CTWCnqHC.mjs';
import _sfc_main$1 from './index-CsOzwFyw.mjs';
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
import './virtual_public-Hyo1k0ua.mjs';
import './index-BSNndgB-.mjs';
import './MenuDropdownItem-BHrt9Oob.mjs';
import './link-CWCUPPCN.mjs';
import './nuxt-link-Bf9L1Upn.mjs';
import './line-ByzM3RBl.mjs';
import './input-fitter-B9Y0PVvt.mjs';
import './magnifying-glass-BFBcnZYt.mjs';
import './MobileMenu-DzXIMmHr.mjs';
import './MobileMenuItem-BFH11rZz.mjs';
import './chevron-right-Dd6J472h.mjs';
import './bar-3-DUFA80Ps.mjs';
import './xmark-solid-47jwrLJb.mjs';
import './space-R3NPDNyo.mjs';
import './ig-GAvdv2Sn.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "V\u0103n ho\xE1 c\u1ED3ng chi\xEAng"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
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
//# sourceMappingURL=default-B88Tg7gm.mjs.map
