import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = {
  __name: "chi-khi",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        key: "nhac",
        title: "NH\u1EA0C KH\xCD",
        desc: "l\xE0 nh\u1EA1c c\u1EE5 \u0111\u1EC3 con ng\u01B0\u1EDDi bi\u1EC3u di\u1EC5n trong sinh ho\u1EA1t c\u1ED9ng \u0111\u1ED3ng, l\xE0 ti\u1EBFng n\xF3i c\u1EE7a ni\u1EC1m vui v\xE0 ng\xE0y h\u1ED9i.",
        showDesc: false
      },
      {
        key: "vu",
        title: "V\u0168 KH\xCD",
        desc: "l\xE0 s\u1EE9c m\u1EA1nh chi\u1EBFn th\u1EAFng, \xE2m thanh vang d\u1ED9i khi\u1EBFn qu\xE2n th\xF9 khi\u1EBFp s\u1EE3.",
        showDesc: false
      },
      {
        key: "linh",
        title: "LINH KH\xCD",
        desc: "l\xE0 v\u1EADt th\u1EDD ph\u1EE5ng, truy\u1EC1n qua nhi\u1EC1u th\u1EBF h\u1EC7 nh\u01B0 b\xE1u v\u1EADt thi\xEAng li\xEAng.",
        showDesc: false
      },
      {
        key: "te",
        title: "T\u1EBE KH\xCD",
        desc: "l\xE0 kh\xED c\u1EE5 linh thi\xEAng d\xF9ng trong nghi l\u1EC5 \u0111\u1EC3 con ng\u01B0\u1EDDi giao h\xF2a v\u1EDBi th\u1EA7n linh.",
        showDesc: false
      },
      {
        key: "sinh",
        title: "SINH KH\xCD",
        desc: "l\xE0 d\xF2ng n\u0103ng l\u01B0\u1EE3ng \u0111\u1EA1i di\u1EC7n cho v\xF9ng \u0111\u1EA5t v\xE0 c\u1ED9i ngu\u1ED3n c\u1EE7a m\u1ED7i d\xE2n t\u1ED9c. Khi m\u1ED9t b\u1ED9 chi\xEAng \u0111\u01B0\u1EE3c c\u1EA5t l\xEAn, \u1EA5y l\xE0 l\xFAc s\u1EE9c s\u1ED1ng c\u1EE7a c\u1EA3 bu\xF4n l\xE0ng \u0111\u01B0\u1EE3c \u0111\xE1nh th\u1EE9c, k\u1EBFt n\u1ED1i qu\xE1 kh\u1EE9 \u2013 hi\u1EC7n t\u1EA1i \u2013 t\u01B0\u01A1ng lai.",
        showDesc: false
      }
    ]);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-5 gap-[40px] w-full" }, _attrs))}><!--[-->`);
      ssrRenderList(items.value, (item, index) => {
        _push(`<div class="bg-extra rounded-xl cursor-pointer transition hover:shadow-md flex flex-col relative z-0"><div class="w-full aspect-[208/310] flex flex-col items-center justify-center"><div class="w-[40%] aspect-square bg-primary rounded-xl flex items-center justify-center"><span class="text-main text-xs">icon</span></div><h3 class="mt-4 text-primary font-medium text-[16px] uppercase text-center">${ssrInterpolate(item.title)}</h3></div>`);
        if (item.showDesc) {
          _push(`<div class="absolute bottom-2 left-0 top-0 text-sm bg-primary text-main w-full h-full rounded-xl"><div class="w-full aspect-[208/310]"><div class="${ssrRenderClass([{
            "mt-8": index < items.value.length - 1,
            "mt-2": index = items.value.length - 1
          }, "px-2 flex gap-2 flex-col"])}"><h3 class="font-medium text-body uppercase text-left">${ssrInterpolate(item.title)}</h3><p class="text-mini">${ssrInterpolate(item.desc)}</p></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
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
//# sourceMappingURL=chi-khi-Cx-QAa0Z.mjs.map
