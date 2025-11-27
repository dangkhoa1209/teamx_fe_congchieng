import { _ as __nuxt_component_0 } from './slide-BTYZyl4M.mjs';
import { _ as _sfc_main$1 } from './image-CfPwRy5O.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as __unimport_$image } from './_image-CatW-12k.mjs';
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
import './v3-CjX-H-q3.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {
  __name: "don-vi-hop-tac",
  __ssrInlineRender: true,
  setup(__props) {
    const breakpoints = {
      640: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1280: { slidesPerView: 6 }
    };
    const lists = [
      {
        image: __unimport_$image().url
      },
      {
        image: __unimport_$image().url
      },
      {
        image: __unimport_$image().url
      },
      {
        image: __unimport_$image().url
      },
      {
        image: __unimport_$image().url
      },
      {
        image: __unimport_$image().url
      },
      {
        image: __unimport_$image().url
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_slide = __nuxt_component_0;
      const _component_x_image = _sfc_main$1;
      _push(ssrRenderComponent(_component_x_slide, mergeProps({
        items: lists,
        breakpoints
      }, _attrs), {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_x_image, {
              url: item.image
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_x_image, {
                url: item.image
              }, null, 8, ["url"])
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
//# sourceMappingURL=don-vi-hop-tac-BVXTtCnE.mjs.map
