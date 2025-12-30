import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$1 from './MobileMenuItem-MXQopccL.mjs';
import './nuxt-link-Bf9L1Upn.mjs';
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
import './server.mjs';
import 'pinia';
import 'vue-router';
import '@iconify/vue';
import 'deep-pick-omit';
import 'vue-toastification';
import 'vee-validate';
import '@vee-validate/rules';
import './index-CyZG15Sy.mjs';
import '@iconify/utils/lib/css/icon';
import './v3-CjX-H-q3.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './asyncData-BGFq45PL.mjs';
import 'perfect-debounce';

const _sfc_main = {
  __name: "MobileMenu",
  __ssrInlineRender: true,
  props: { menus: Array },
  emits: ["close"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "divide-y divide-main" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.menus, (item) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          key: item.id || item.label,
          item,
          depth: 0,
          onClose: ($event) => _ctx.$emit("close")
        }, null, _parent));
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin/header/menu/MobileMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=MobileMenu-CiKu2Jry.mjs.map
