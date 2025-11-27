import { _ as _sfc_main$1 } from './content-place-geFh5xeL.mjs';
import { _ as _sfc_main$2 } from './link-r8bg-CCq.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { I as IconFind } from './find-D99_m_FP.mjs';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-BuJvu1Wo.mjs';
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
  __name: "menutmp",
  __ssrInlineRender: true,
  setup(__props) {
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
        // page: '/van-hoa-cong-chieng',
        childrens: [
          {
            label: "T\u1ED5ng quan v\u0103n ho\xE1 c\u1ED3ng chi\xEAng",
            page: "/van-hoa-cong-chieng/tong-quan"
          },
          {
            label: "V\u0103n h\xF3a c\u1ED3ng chi\xEAng t\u1EA1i c\xE1c X\xE3",
            // page: '/van-hoa-cong-chieng/xa',
            childrens: [
              {
                label: "X\xE3 L\u1EA1c D\u01B0\u01A1ng",
                page: "/van-hoa-cong-chieng/xa/lac-duong"
              },
              {
                label: "X\xE3 \u0110\u1EA1 T\u1EBBh",
                page: "/van-hoa-cong-chieng/xa/da-teh"
              },
              {
                label: "X\xE3 B\u1EA3o L\xE2m 3",
                page: "/van-hoa-cong-chieng/xa/bao-lam-3"
              },
              {
                label: "X\xE3 \u0110inh Trang Th\u01B0\u1EE3ng",
                page: "/van-hoa-cong-chieng/xa/dinh-trang-thuong"
              },
              {
                label: "X\xE3 \u0110am R\xF4ng 4",
                page: "/van-hoa-cong-chieng/xa/tam-dong-4"
              }
            ]
          }
        ]
      },
      {
        label: "Ti\u1EC1m n\u0103ng ph\xE1t tri\u1EC3n",
        page: "/tiem-nang-phat-trien"
      },
      {
        label: "Tin t\u1EE9c - S\u1EF1 ki\u1EC7n",
        page: "/tin-tuc-su-kien"
      },
      {
        label: "H\u1EE3p t\xE1c",
        page: "/hop-tac"
      },
      { label: "Li\xEAn h\u1EC7", page: "/lien-he" }
    ];
    ref(null);
    const isFixed = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_content_place = _sfc_main$1;
      const _component_x_link = _sfc_main$2;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "h-[75px]" }, _attrs))} data-v-2e45aadb><div class="h-0" data-v-2e45aadb></div><header class="h-[75px]" data-v-2e45aadb><div class="${ssrRenderClass([{ "fixed-header": unref(isFixed) }, "header z-50 bg-main"])}" data-v-2e45aadb>`);
      _push(ssrRenderComponent(_component_x_content_place, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center h-[75px]" data-v-2e45aadb${_scopeId}><ul class="flex gap-[52px] uppercase text-[16px] font-robo font-medium" data-v-2e45aadb${_scopeId}><!--[-->`);
            ssrRenderList(menus, (item) => {
              _push2(`<li class="cursor-pointer hover:text-secondary" data-v-2e45aadb${_scopeId}>`);
              _push2(ssrRenderComponent(_component_x_link, {
                to: item.page
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-primary" data-v-2e45aadb${_scopeId2}>${ssrInterpolate(item.label)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-primary" }, toDisplayString(item.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
            _push2(ssrRenderComponent(unref(IconFind), { class: "w-6 h-6 fill-primary" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center h-[75px]" }, [
                createVNode("ul", { class: "flex gap-[52px] uppercase text-[16px] font-robo font-medium" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(menus, (item) => {
                    return createVNode("li", {
                      key: item.label,
                      class: "cursor-pointer hover:text-secondary"
                    }, [
                      createVNode(_component_x_link, {
                        to: item.page
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-primary" }, toDisplayString(item.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]);
                  }), 64))
                ]),
                createVNode(unref(IconFind), { class: "w-6 h-6 fill-primary" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default/header/menutmp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const menutmp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2e45aadb"]]);

export { menutmp as default };
//# sourceMappingURL=menutmp-BBRsaV7p.mjs.map
