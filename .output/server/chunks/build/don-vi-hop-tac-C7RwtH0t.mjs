import { _ as __nuxt_component_0 } from './slide-ClAOf8PI.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import 'swiper/vue';
import 'swiper/modules';
import './server.mjs';
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

const _sfc_main = {
  __name: "don-vi-hop-tac",
  __ssrInlineRender: true,
  setup(__props) {
    const breakpoints = {
      100: { slidesPerView: 4 },
      1280: { slidesPerView: 6 }
    };
    const lists = [
      {
        image: "/assets/hoptac/lienminhgr.svg"
      },
      {
        image: "/assets/hoptac/cityofmusic.svg"
      },
      {
        image: "/assets/hoptac/tcddl.svg"
      },
      {
        image: "/assets/hoptac/namabank.svg"
      },
      {
        image: "/assets/hoptac/seameo.png"
      },
      {
        image: "/assets/hoptac/kingcafe.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_slide = __nuxt_component_0;
      _push(ssrRenderComponent(_component_x_slide, mergeProps({
        items: lists,
        breakpoints
      }, _attrs), {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-[100px] flex items-center justify-center overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", item.image)} class="h-[100px] object-contain"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-[100px] flex items-center justify-center overflow-hidden" }, [
                createVNode("img", {
                  src: item.image,
                  class: "h-[100px] object-contain"
                }, null, 8, ["src"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/trang-chu/ignore/don-vi-hop-tac.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=don-vi-hop-tac-C7RwtH0t.mjs.map
