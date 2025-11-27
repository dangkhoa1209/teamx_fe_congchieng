import { _ as __nuxt_component_0 } from './slide-BTYZyl4M.mjs';
import { _ as _sfc_main$1 } from './image-CfPwRy5O.mjs';
import { _ as _sfc_main$2 } from './button-Z_YvHZ9u.mjs';
import { _ as __unimport_$image } from './_image-CatW-12k.mjs';
import { mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "xa",
  __ssrInlineRender: true,
  setup(__props) {
    const xaList = [
      {
        name: "X\xE3 L\u1EA1c D\u01B0\u01A1ng",
        description: "L\u1EA1c D\u01B0\u01A1ng l\xE0 tr\xE1i tim c\u1EE7a v\u0103n ho\xE1 C\u1ED3ng Chi\xEAng L\xE2m \u0110\u1ED3ng, n\u01A1i h\u1ED9i t\u1EE5 c\u1EE7a c\u1ED9ng \u0111\u1ED3ng d\xE2n t\u1ED9c K\u2019Ho v\u1EDBi truy\u1EC1n th\u1ED1ng l\xE2u \u0111\u1EDDi trong ngh\u1EC7 thu\u1EADt di\u1EC5n t\u1EA5u v\xE0 l\u1EC5 h\u1ED9i.",
        image: __unimport_$image().url
      },
      {
        name: "X\xE3 \u0110\u1EA1 T\u1EBBh",
        description: "\u0110\u1EA1 T\u1EBBh l\xE0 v\xF9ng \u0111\u1EA5t c\xF2n l\u01B0u gi\u1EEF nhi\u1EC1u ngh\u1EC7 nh\xE2n c\u1ED3ng chi\xEAng l\u1EDBn tu\u1ED5i, n\u01A1i c\xE1c gi\xE1 tr\u1ECB truy\u1EC1n th\u1ED1ng \u0111\u01B0\u1EE3c truy\u1EC1n d\u1EA1y qua nhi\u1EC1u th\u1EBF h\u1EC7.",
        image: __unimport_$image().url
      },
      {
        name: "X\xE3 B\u1EA3o L\xE2m 3",
        description: "B\u1EA3o L\xE2m 3 l\xE0 v\xF9ng \u0111\u1EA5t giao thoa gi\u1EEFa v\u0103n ho\xE1 b\u1EA3n \u0111\u1ECBa v\xE0 hi\u1EC7n \u0111\u1EA1i, n\u01A1i ti\u1EBFng c\u1ED3ng chi\xEAng v\u1EABn vang l\xEAn trong \u0111\u1EDDi s\u1ED1ng th\u01B0\u1EDDng nh\u1EADt c\u1EE7a ng\u01B0\u1EDDi M\u1EA1, K\u2019Ho v\xE0 Chu Ru.",
        image: __unimport_$image().url
      },
      {
        name: "X\xE3 \u0110inh Trang Th\u01B0\u1EE3ng",
        description: "B\u1ED9 c\u1ED3ng chi\xEAng c\u1ED5 nh\u1EA5t L\xE2m \u0110\u1ED3ng...",
        image: __unimport_$image().url
      },
      {
        name: "X\xE3 \u0110am R\xF4ng",
        description: "L\u1EC5 h\u1ED9i c\u1ED3ng chi\xEAng l\u1EDBn nh\u1EA5t n\u0103m...",
        image: __unimport_$image().url
      }
      // có thể thêm 10, 20 xã cũng được → tự động slide
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_slide = __nuxt_component_0;
      const _component_x_image = _sfc_main$1;
      const _component_x_button = _sfc_main$2;
      _push(ssrRenderComponent(_component_x_slide, mergeProps({ items: xaList }, _attrs), {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full flex flex-col bg-extra rounded-2xl overflow-hidden"${_scopeId}><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_x_image, {
              url: item.image || ("$image" in _ctx ? _ctx.$image : unref(__unimport_$image))().url,
              class: "w-full h-full object-cover",
              alt: "{{ item.name }}"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex-1 p-6 flex flex-col justify-between"${_scopeId}><div${_scopeId}><h3 class="font-robo font-medium text-subtitle text-primary mb-3 line-clamp-2"${_scopeId}>${ssrInterpolate(item.name)}</h3><hr class="border-0 h-px bg-primary/20 mb-4"${_scopeId}><p class="font-robo font-normal text-body text-gray-700 leading-relaxed line-clamp-5"${_scopeId}>${ssrInterpolate(item.description)}</p></div><div class="mt-6 pt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_x_button, {
              theme: "primary",
              outline: "",
              uppercase: false,
              class: "w-full laptop:w-auto whitespace-nowrap"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` T\xECm hi\u1EC3u th\xEAm `);
                } else {
                  return [
                    createTextVNode(" T\xECm hi\u1EC3u th\xEAm ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "h-full flex flex-col bg-extra rounded-2xl overflow-hidden" }, [
                createVNode("div", { class: "w-full" }, [
                  createVNode(_component_x_image, {
                    url: item.image || ("$image" in _ctx ? _ctx.$image : unref(__unimport_$image))().url,
                    class: "w-full h-full object-cover",
                    alt: "{{ item.name }}"
                  }, null, 8, ["url"])
                ]),
                createVNode("div", { class: "flex-1 p-6 flex flex-col justify-between" }, [
                  createVNode("div", null, [
                    createVNode("h3", { class: "font-robo font-medium text-subtitle text-primary mb-3 line-clamp-2" }, toDisplayString(item.name), 1),
                    createVNode("hr", { class: "border-0 h-px bg-primary/20 mb-4" }),
                    createVNode("p", { class: "font-robo font-normal text-body text-gray-700 leading-relaxed line-clamp-5" }, toDisplayString(item.description), 1)
                  ]),
                  createVNode("div", { class: "mt-6 pt-4" }, [
                    createVNode(_component_x_button, {
                      theme: "primary",
                      outline: "",
                      uppercase: false,
                      class: "w-full laptop:w-auto whitespace-nowrap"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" T\xECm hi\u1EC3u th\xEAm ")
                      ]),
                      _: 1
                    })
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/trang-chu/ignore/xa.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=xa-BCniZXkk.mjs.map
