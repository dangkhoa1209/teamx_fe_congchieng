import { _ as _sfc_main$1 } from './content-place-geFh5xeL.mjs';
import __nuxt_component_1 from './index-CyZG15Sy.mjs';
import { computed, ref, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import _sfc_main$2 from './MenuDropdownItem-CkeG-Mc5.mjs';
import _sfc_main$3 from './input-fitter-B9Y0PVvt.mjs';
import { _ as _export_sfc, u as useRouter, b as useRoute } from './server.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './v3-CjX-H-q3.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './asyncData-BGFq45PL.mjs';
import 'perfect-debounce';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';
import 'vue-toastification';
import 'vee-validate';
import '@vee-validate/rules';
import './link-CWCUPPCN.mjs';
import './nuxt-link-Bf9L1Upn.mjs';
import './line-DKbs4uri.mjs';

const menus = [
  {
    label: "Trang ch\u1EE7",
    page: "/trang-chu"
  },
  {
    label: "Gi\u1EDBi thi\u1EC7u",
    page: "/gioi-thieu"
  },
  {
    label: "V\u0103n ho\xE1 c\u1ED3ng chi\xEAng",
    id: "van-hoa",
    childrens: [
      {
        label: "T\u1ED5ng quan v\u0103n ho\xE1 c\u1ED3ng chi\xEAng",
        id: "tong-quan",
        page: "/van-hoa-cong-chieng/tong-quan"
      },
      {
        label: "V\u0103n h\xF3a c\u1ED3ng chi\xEAng t\u1EA1i c\xE1c X\xE3",
        id: "xa-parent",
        childrens: [
          {
            label: "X\xE3 L\u1EA1c D\u01B0\u01A1ng",
            id: "xa-lac-duong",
            page: "/van-hoa-cong-chieng/xa/lac-duong"
          },
          {
            label: "X\xE3 \u0110\u1EA1 T\u1EBBh",
            id: "xa-da-teh",
            page: "/van-hoa-cong-chieng/xa/da-teh"
          },
          {
            label: "X\xE3 B\u1EA3o L\xE2m 3",
            id: "xa-bao-lam",
            page: "/van-hoa-cong-chieng/xa/bao-lam-3"
          },
          {
            label: "X\xE3 \u0110inh Trang Th\u01B0\u1EE3ng",
            id: "xa-dinh-trang",
            page: "/van-hoa-cong-chieng/xa/dinh-trang-thuong"
          },
          {
            label: "X\xE3 \u0110am R\xF4ng 4",
            id: "xa-tam-dong",
            page: "/van-hoa-cong-chieng/xa/dam-dong-4"
          }
        ]
      }
    ]
  },
  {
    label: "Ti\u1EC1m n\u0103ng ph\xE1t tri\u1EC3n",
    id: "tiem-nang",
    childrens: [
      {
        label: "Ph\xE1t tri\u1EC3n v\u0103n h\xF3a - ngh\u1EC7 thu\u1EADt",
        id: "tn1",
        page: "/tiem-nang-phat-trien/van-hoa-nghe-thuat"
      },
      {
        label: "Ph\xE1t tri\u1EC3n du l\u1ECBch v\u0103n h\xF3a - c\u1ED9ng \u0111\u1ED3ng",
        id: "tn2",
        page: "/tiem-nang-phat-trien/du-lich-van-hoa-cong-dong"
      },
      {
        label: "Ph\xE1t tri\u1EC3n du l\u1ECBch t\u1EA1i \u0111\u1ECBa ph\u01B0\u01A1ng",
        id: "tn3",
        page: "/tiem-nang-phat-trien/du-lich-tai-dia-phuong"
      }
    ]
  },
  {
    label: "Tin t\u1EE9c - S\u1EF1 ki\u1EC7n",
    page: "/tin-tuc-su-kien"
  },
  {
    label: "H\u1EE3p t\xE1c",
    page: "/hop-tac"
  },
  {
    label: "Li\xEAn h\u1EC7",
    page: "/lien-he"
  }
];
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const currentPath = computed(() => {
      return route.path.replace(/\/$/, "") || "/trang-chu";
    });
    const activePath = ref([]);
    let closeTimer = null;
    const updatePath = (path) => {
      clearTimeout(closeTimer);
      activePath.value = path;
    };
    const scheduleClose = () => {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        activePath.value = [];
      }, 350);
    };
    const menuList = ref(null);
    const showPrev = ref(false);
    const showNext = ref(false);
    const scrollLeft = () => {
      var _a;
      return (_a = menuList.value) == null ? void 0 : _a.scrollBy({ left: -200, behavior: "smooth" });
    };
    const scrollRight = () => {
      var _a;
      return (_a = menuList.value) == null ? void 0 : _a.scrollBy({ left: 200, behavior: "smooth" });
    };
    const showSearch = ref(false);
    const isFocused = ref(false);
    const inputRef = ref(null);
    const onEnter = () => showSearch.value = true;
    const onLeave = () => !isFocused.value && (showSearch.value = false);
    const focusInput = () => {
      showSearch.value = true;
      nextTick(() => {
        var _a, _b;
        return (_b = (_a = inputRef.value) == null ? void 0 : _a.$el) == null ? void 0 : _b.focus();
      });
    };
    const outForcus = () => {
      isFocused.value = false;
      onLeave();
    };
    const handleEnter = (v) => {
      if (!v) return;
      isFocused.value = false;
      onLeave();
      router.push({ path: "/tim-kiem", query: { q: v } });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_content_place = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-[999] select-none" }, _attrs))} data-v-078a7b47><div class="h-[75px]" data-v-078a7b47><div class="header z-50 border-b border-primary" data-v-078a7b47>`);
      _push(ssrRenderComponent(_component_x_content_place, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex justify-between items-center h-[75px] gap-[40px]" data-v-078a7b47${_scopeId}><div class="relative overflow-hidden flex-1" data-v-078a7b47${_scopeId}>`);
            if (unref(showPrev)) {
              _push2(`<button class="absolute left-0 top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-main text-primary border border-primary shadow cursor-pointer z-50 flex items-center justify-center text-[16px]" data-v-078a7b47${_scopeId}> \u2039 </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<ul class="flex gap-[52px] overflow-x-auto no-scrollbar scroll-smooth" data-v-078a7b47${_scopeId}><!--[-->`);
            ssrRenderList(unref(menus), (item) => {
              _push2(ssrRenderComponent(_sfc_main$2, {
                key: item.id || item.label,
                item,
                "active-path": unref(activePath),
                "parent-path": [],
                "is-root": true,
                "current-path": unref(currentPath),
                "onUpdate:path": updatePath,
                onMouseleave: scheduleClose
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></ul>`);
            if (unref(showNext)) {
              _push2(`<button class="absolute right-0 top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-main text-primary border border-primary shadow cursor-pointer z-50 flex items-center justify-center text-[16px]" data-v-078a7b47${_scopeId}> \u203A </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="relative h-[75px] flex items-center" data-v-078a7b47${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "heroicons:magnifying-glass",
              class: "w-6 h-6 fill-primary cursor-pointer",
              onClick: focusInput
            }, null, _parent2, _scopeId));
            if (unref(showSearch)) {
              _push2(`<div class="absolute bottom-0 right-0 translate-y-[100%] text-main w-64" data-v-078a7b47${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                ref_key: "inputRef",
                ref: inputRef,
                placeholder: "Nh\u1EADp t\u1EEB kh\xF3a...",
                onFocus: ($event) => isFocused.value = true,
                onBlur: outForcus,
                onEnter: handleEnter
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative flex justify-between items-center h-[75px] gap-[40px]" }, [
                createVNode("div", {
                  ref: "menuWrapper",
                  class: "relative overflow-hidden flex-1"
                }, [
                  unref(showPrev) ? (openBlock(), createBlock("button", {
                    key: 0,
                    class: "absolute left-0 top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-main text-primary border border-primary shadow cursor-pointer z-50 flex items-center justify-center text-[16px]",
                    onClick: scrollLeft
                  }, " \u2039 ")) : createCommentVNode("", true),
                  createVNode("ul", {
                    ref_key: "menuList",
                    ref: menuList,
                    class: "flex gap-[52px] overflow-x-auto no-scrollbar scroll-smooth"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(menus), (item) => {
                      return openBlock(), createBlock(_sfc_main$2, {
                        key: item.id || item.label,
                        item,
                        "active-path": unref(activePath),
                        "parent-path": [],
                        "is-root": true,
                        "current-path": unref(currentPath),
                        "onUpdate:path": updatePath,
                        onMouseleave: scheduleClose
                      }, null, 8, ["item", "active-path", "current-path"]);
                    }), 128))
                  ], 512),
                  unref(showNext) ? (openBlock(), createBlock("button", {
                    key: 1,
                    class: "absolute right-0 top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-main text-primary border border-primary shadow cursor-pointer z-50 flex items-center justify-center text-[16px]",
                    onClick: scrollRight
                  }, " \u203A ")) : createCommentVNode("", true)
                ], 512),
                createVNode("div", {
                  class: "relative h-[75px] flex items-center",
                  onMouseenter: onEnter,
                  onMouseleave: onLeave
                }, [
                  createVNode(_component_Icon, {
                    name: "heroicons:magnifying-glass",
                    class: "w-6 h-6 fill-primary cursor-pointer",
                    onClick: focusInput
                  }),
                  unref(showSearch) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "absolute bottom-0 right-0 translate-y-[100%] text-main w-64"
                  }, [
                    createVNode(_sfc_main$3, {
                      ref_key: "inputRef",
                      ref: inputRef,
                      placeholder: "Nh\u1EADp t\u1EEB kh\xF3a...",
                      onFocus: ($event) => isFocused.value = true,
                      onBlur: outForcus,
                      onEnter: handleEnter
                    }, null, 8, ["onFocus"])
                  ])) : createCommentVNode("", true)
                ], 32)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default/header/menu/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-078a7b47"]]);
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Menu
}, Symbol.toStringTag, { value: "Module" }));

export { Menu as M, index as i, menus as m };
//# sourceMappingURL=index-RiHwGCxa.mjs.map
