import { _ as __nuxt_component_0 } from './slide-ClAOf8PI.mjs';
import { ref, mergeProps, withCtx, createVNode, withModifiers, createBlock, createCommentVNode, toDisplayString, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "chi-khi",
  __ssrInlineRender: true,
  setup(__props) {
    const breakpoints = {
      100: { slidesPerView: 2 },
      // mobile nhỏ
      640: { slidesPerView: 3 },
      // mobile lớn
      768: { slidesPerView: 4 },
      // tablet
      1024: { slidesPerView: 5 }
      // laptop
    };
    const items = ref([
      {
        key: "nhac",
        title: "NH\u1EA0C KH\xCD",
        desc: "l\xE0 nh\u1EA1c c\u1EE5 \u0111\u1EC3 con ng\u01B0\u1EDDi bi\u1EC3u di\u1EC5n trong sinh ho\u1EA1t c\u1ED9ng \u0111\u1ED3ng, l\xE0 ti\u1EBFng n\xF3i c\u1EE7a ni\u1EC1m vui v\xE0 ng\xE0y h\u1ED9i.",
        showDesc: false,
        icon: "/assets/chi-khi/1.svg"
      },
      {
        key: "vu",
        title: "V\u0168 KH\xCD",
        desc: "l\xE0 s\u1EE9c m\u1EA1nh chi\u1EBFn th\u1EAFng, \xE2m thanh vang d\u1ED9i khi\u1EBFn qu\xE2n th\xF9 khi\u1EBFp s\u1EE3.",
        showDesc: false,
        icon: "/assets/chi-khi/2.svg"
      },
      {
        key: "linh",
        title: "LINH KH\xCD",
        desc: "l\xE0 v\u1EADt th\u1EDD ph\u1EE5ng, truy\u1EC1n qua nhi\u1EC1u th\u1EBF h\u1EC7 nh\u01B0 b\xE1u v\u1EADt thi\xEAng li\xEAng.",
        showDesc: false,
        icon: "/assets/chi-khi/3.svg"
      },
      {
        key: "te",
        title: "T\u1EBE KH\xCD",
        desc: "l\xE0 kh\xED c\u1EE5 linh thi\xEAng d\xF9ng trong nghi l\u1EC5 \u0111\u1EC3 con ng\u01B0\u1EDDi giao h\xF2a v\u1EDBi th\u1EA7n linh.",
        showDesc: false,
        icon: "/assets/chi-khi/4.svg"
      },
      {
        key: "sinh",
        title: "SINH KH\xCD",
        desc: "l\xE0 d\xF2ng n\u0103ng l\u01B0\u1EE3ng \u0111\u1EA1i di\u1EC7n cho v\xF9ng \u0111\u1EA5t v\xE0 c\u1ED9i ngu\u1ED3n c\u1EE7a m\u1ED7i d\xE2n t\u1ED9c. Khi m\u1ED9t b\u1ED9 chi\xEAng \u0111\u01B0\u1EE3c c\u1EA5t l\xEAn, \u1EA5y l\xE0 l\xFAc s\u1EE9c s\u1ED1ng c\u1EE7a c\u1EA3 bu\xF4n l\xE0ng \u0111\u01B0\u1EE3c \u0111\xE1nh th\u1EE9c, k\u1EBFt n\u1ED1i qu\xE1 kh\u1EE9 \u2013 hi\u1EC7n t\u1EA1i \u2013 t\u01B0\u01A1ng lai.",
        showDesc: false,
        icon: "/assets/chi-khi/5.svg"
      }
    ]);
    function toggle(index) {
      items.value[index].showDesc = !items.value[index].showDesc;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_slide = __nuxt_component_0;
      _push(ssrRenderComponent(_component_x_slide, mergeProps({
        items: items.value,
        breakpoints
      }, _attrs), {
        default: withCtx(({ item, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full aspect-[208/310] bg-extra rounded-xl cursor-pointer transition hover:shadow-md flex flex-col items-center justify-center relative"${_scopeId}><div class="w-[40%] aspect-square flex items-center justify-center"${_scopeId}><img${ssrRenderAttr("src", item.icon)} class="object-contain"${_scopeId}></div><h3 class="mt-4 text-primary font-medium text-[14px] md:text-[16px] uppercase text-center px-2"${_scopeId}>${ssrInterpolate(item.title)}</h3>`);
            if (item.showDesc) {
              _push2(`<div class="absolute inset-0 bg-primary text-main rounded-xl animate-fadeIn p-3"${_scopeId}><div class="mt-4"${_scopeId}><h3 class="font-medium text-body uppercase mb-1"${_scopeId}>${ssrInterpolate(item.title)}</h3><p class="text-mini leading-relaxed mt-4"${_scopeId}>${ssrInterpolate(item.desc)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "w-full aspect-[208/310] bg-extra rounded-xl cursor-pointer transition hover:shadow-md flex flex-col items-center justify-center relative",
                onClick: withModifiers(($event) => toggle(index), ["stop"])
              }, [
                createVNode("div", { class: "w-[40%] aspect-square flex items-center justify-center" }, [
                  createVNode("img", {
                    src: item.icon,
                    class: "object-contain"
                  }, null, 8, ["src"])
                ]),
                createVNode("h3", { class: "mt-4 text-primary font-medium text-[14px] md:text-[16px] uppercase text-center px-2" }, toDisplayString(item.title), 1),
                item.showDesc ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "absolute inset-0 bg-primary text-main rounded-xl animate-fadeIn p-3"
                }, [
                  createVNode("div", { class: "mt-4" }, [
                    createVNode("h3", { class: "font-medium text-body uppercase mb-1" }, toDisplayString(item.title), 1),
                    createVNode("p", { class: "text-mini leading-relaxed mt-4" }, toDisplayString(item.desc), 1)
                  ])
                ])) : createCommentVNode("", true)
              ], 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gioi-thieu/ignore/chi-khi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=chi-khi-DoE4UoJh.mjs.map
