import { _ as _sfc_main$1 } from './content-place-geFh5xeL.mjs';
import { computed, ref, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import _sfc_main$2 from './MenuDropdownItem-y3dyZ3WC.mjs';
import { _ as _export_sfc, u as useRouter, b as useRoute } from './server.mjs';
import './link-CWCUPPCN.mjs';
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
import './line-Cl7qy73P.mjs';
import 'vue-router';
import './permission-check-YYJosWmV.mjs';
import './_store-Ndlczi3l.mjs';
import 'pinia';
import '@iconify/vue';
import 'deep-pick-omit';
import 'vue-toastification';
import 'vee-validate';
import '@vee-validate/rules';

const menus = [
  {
    label: "Trang ch\u1EE7",
    page: "/admin/trang-chu",
    id: "admin-trang-chu",
    permissions: [
      "trang-chu"
    ]
  },
  {
    label: "Tin t\u1EE9c - S\u1EF1 ki\u1EC7n",
    id: "admin-tin-tuc-su-kien",
    permissions: [
      "tin-tuc-su-kien",
      "xa-lac-duong",
      "xa-da-teh",
      "xa-bao-lam-3",
      "xa-dinh-trang-thuong",
      "xa-dam-dong-4"
    ],
    childrens: [
      {
        label: "Qu\u1EA3n l\xFD tin t\u1EE9c - s\u1EF1 ki\u1EC7n",
        id: "quan-ly-tin-tuc-su-kien-a",
        page: "/admin/tin-tuc-su-kien/quan-ly",
        permissions: [
          "tin-tuc-su-kien"
        ]
      },
      {
        label: "Tin n\u1ED5i b\u1EADt",
        id: "quan-ly-tin-tuc-su-kien-tin-noi-bat-tat-ca",
        page: "/admin/tin-tuc-su-kien/tin-noi-bat/tat-ca",
        permissions: [
          "tin-tuc-su-kien"
        ]
      },
      {
        label: "Tin n\u1ED5i b\u1EADt X\xE3 L\u1EA1c D\u01B0\u01A1ng",
        id: "quan-ly-tin-tuc-su-kien-tin-noi-bat-xa-lac-duong",
        page: "/admin/tin-tuc-su-kien/tin-noi-bat/xa-lac-duong",
        permissions: [
          "xa-lac-duong"
        ]
      },
      {
        label: "Tin n\u1ED5i b\u1EADt X\xE3 \u0110\u1EA1 T\u1EBBh",
        id: "quan-ly-tin-tuc-su-kien-tin-noi-bat-xa-da-teh",
        page: "/admin/tin-tuc-su-kien/tin-noi-bat/xa-da-teh",
        permissions: [
          "xa-da-teh"
        ]
      },
      {
        label: "Tin n\u1ED5i b\u1EADt X\xE3 B\u1EA3o L\xE2m 3",
        id: "quan-ly-tin-tuc-su-kien-tin-noi-bat-xa-bao-lam-3",
        page: "/admin/tin-tuc-su-kien/tin-noi-bat/xa-bao-lam-3",
        permissions: [
          "xa-bao-lam-3"
        ]
      },
      {
        label: "Tin n\u1ED5i b\u1EADt X\xE3 \u0110inh Trang Th\u01B0\u1EE3ng",
        id: "quan-ly-tin-tuc-su-kien-tin-noi-bat-xa-dinh-trang-thuong",
        page: "/admin/tin-tuc-su-kien/tin-noi-bat/xa-dinh-trang-thuong",
        permissions: [
          "xa-dinh-trang-thuong"
        ]
      },
      {
        label: "Tin n\u1ED5i b\u1EADt X\xE3 \u0110am R\xF4ng 4",
        id: "quan-ly-tin-tuc-su-kien-tin-noi-bat-xa-dam-rong-4",
        page: "/admin/tin-tuc-su-kien/tin-noi-bat/xa-dam-rong-4",
        permissions: [
          "xa-dam-rong-4"
        ]
      }
    ]
  },
  {
    label: "T\xE0i kho\u1EA3n",
    page: "/admin/tai-khoan",
    id: "admin-tai-khoan",
    permissions: [
      "tai-khoan"
    ]
  },
  {
    label: "C\xE1 nh\xE2n",
    id: "admin-ca-nhan",
    page: "/admin/ca-nhan"
  }
];
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
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
    ref(false);
    ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_content_place = _sfc_main$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-[999] select-none" }, _attrs))} data-v-d75d7fc3><div class="h-[75px]" data-v-d75d7fc3><div class="header z-50 border-b border-primary" data-v-d75d7fc3>`);
      _push(ssrRenderComponent(_component_x_content_place, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex justify-between items-center h-[75px] gap-[40px]" data-v-d75d7fc3${_scopeId}><div class="relative overflow-hidden flex-1" data-v-d75d7fc3${_scopeId}>`);
            if (unref(showPrev)) {
              _push2(`<button class="absolute left-0 top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-main text-primary border border-primary shadow cursor-pointer z-50 flex items-center justify-center text-[16px]" data-v-d75d7fc3${_scopeId}> \u2039 </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<ul class="flex gap-[52px] overflow-x-auto no-scrollbar scroll-smooth" data-v-d75d7fc3${_scopeId}><!--[-->`);
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
              _push2(`<button class="absolute right-0 top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-main text-primary border border-primary shadow cursor-pointer z-50 flex items-center justify-center text-[16px]" data-v-d75d7fc3${_scopeId}> \u203A </button>`);
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
                ], 512)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin/header/menu/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d75d7fc3"]]);
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Menu
}, Symbol.toStringTag, { value: "Module" }));

export { Menu as M, index as i, menus as m };
//# sourceMappingURL=index-NM7jh0Jw.mjs.map
