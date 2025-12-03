import { _ as _sfc_main$1 } from './content-place-geFh5xeL.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_x_content_place = _sfc_main$1;
  _push(ssrRenderComponent(_component_x_content_place, mergeProps({ class: "flex items-center justify-center" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-[100px] text-center"${_scopeId}><p class="text-title font-medium text-primary"${_scopeId}>CH\xC0O M\u1EEANG \u0110\u1EBEN TRANG QU\u1EA2N L\xDD</p></div>`);
      } else {
        return [
          createVNode("div", { class: "mt-[100px] text-center" }, [
            createVNode("p", { class: "text-title font-medium text-primary" }, "CH\xC0O M\u1EEANG \u0110\u1EBEN TRANG QU\u1EA2N L\xDD")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DA7BbGUk.mjs.map
