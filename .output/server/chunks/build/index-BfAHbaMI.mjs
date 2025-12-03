import { _ as _sfc_main$1 } from './content-place-geFh5xeL.mjs';
import { _ as _sfc_main$2 } from './space-R3NPDNyo.mjs';
import { _ as _sfc_main$3 } from './title-Li4mZZSg.mjs';
import { _ as _sfc_main$4 } from './index-oDSxl5WY.mjs';
import { _ as _sfc_main$5 } from './line-ByzM3RBl.mjs';
import { _ as _sfc_main$6 } from './core-ttk-Qqm1MVVa.mjs';
import { _ as _sfc_main$7 } from './ver-CdpQh6no.mjs';
import { _ as _sfc_main$8 } from './button-BdQnFGJN.mjs';
import { withCtx, createTextVNode, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './core-ttnb-9NqOd1-V.mjs';
import './image-BZ3fmoRC.mjs';
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
import './v3-CjX-H-q3.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './_url-DeweAF6B.mjs';
import './_store-BUh4dPf_.mjs';
import 'pinia';
import '@vue/shared';
import './asyncData-BGFq45PL.mjs';
import 'perfect-debounce';
import 'vue-router';
import '@iconify/vue';
import 'deep-pick-omit';
import 'vue-toastification';
import 'vee-validate';
import '@vee-validate/rules';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_x_content_place = _sfc_main$1;
  const _component_x_space = _sfc_main$2;
  const _component_x_title = _sfc_main$3;
  const _component_x_page_news = _sfc_main$4;
  const _component_x_line = _sfc_main$5;
  const _component_x_core_ttk = _sfc_main$6;
  const _component_x_page_news_thumb_ver = _sfc_main$7;
  const _component_x_button = _sfc_main$8;
  _push(ssrRenderComponent(_component_x_content_place, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
        _push2(`<section class=""${_scopeId}>`);
        _push2(ssrRenderComponent(_component_x_title, {
          title: "TIN T\u1EE8C - S\u1EF0 KI\u1EC6N",
          variant: "bottom",
          "class-name": "font-bold text-14"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_x_page_news, null, null, _parent2, _scopeId));
        _push2(`</section>`);
        _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_x_line, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
        _push2(`<section${_scopeId}>`);
        _push2(ssrRenderComponent(_component_x_core_ttk, { limit: 18 }, {
          default: withCtx(({ items, loadMore, hasMore }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="grid grid-cols-2 laptop:grid-cols-3 gap-x-[40px] gap-y-[50px]"${_scopeId2}><!--[-->`);
              ssrRenderList(items, (item, index2) => {
                _push3(ssrRenderComponent(_component_x_page_news_thumb_ver, {
                  key: index2,
                  news: item
                }, null, _parent3, _scopeId2));
              });
              _push3(`<!--]--></div>`);
              if (hasMore) {
                _push3(`<div${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_x_space, { height: 50 }, null, _parent3, _scopeId2));
                _push3(`<div class="flex justify-center"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_x_button, {
                  theme: "primary",
                  outline: "",
                  uppercase: false,
                  onClick: loadMore
                }, {
                  default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Xem th\xEAm `);
                    } else {
                      return [
                        createTextVNode(" Xem th\xEAm ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div></div>`);
              } else {
                _push3(`<!---->`);
              }
            } else {
              return [
                createVNode("div", { class: "grid grid-cols-2 laptop:grid-cols-3 gap-x-[40px] gap-y-[50px]" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index2) => {
                    return openBlock(), createBlock(_component_x_page_news_thumb_ver, {
                      key: index2,
                      news: item
                    }, null, 8, ["news"]);
                  }), 128))
                ]),
                hasMore ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_component_x_space, { height: 50 }),
                  createVNode("div", { class: "flex justify-center" }, [
                    createVNode(_component_x_button, {
                      theme: "primary",
                      outline: "",
                      uppercase: false,
                      onClick: loadMore
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Xem th\xEAm ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</section>`);
        _push2(ssrRenderComponent(_component_x_space, { height: 80 }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_x_space, { height: 40 }),
          createVNode("section", { class: "" }, [
            createVNode(_component_x_title, {
              title: "TIN T\u1EE8C - S\u1EF0 KI\u1EC6N",
              variant: "bottom",
              "class-name": "font-bold text-14"
            }),
            createVNode(_component_x_space, { height: 40 }),
            createVNode(_component_x_page_news)
          ]),
          createVNode(_component_x_space, { height: 40 }),
          createVNode(_component_x_line),
          createVNode(_component_x_space, { height: 40 }),
          createVNode("section", null, [
            createVNode(_component_x_core_ttk, { limit: 18 }, {
              default: withCtx(({ items, loadMore, hasMore }) => [
                createVNode("div", { class: "grid grid-cols-2 laptop:grid-cols-3 gap-x-[40px] gap-y-[50px]" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index2) => {
                    return openBlock(), createBlock(_component_x_page_news_thumb_ver, {
                      key: index2,
                      news: item
                    }, null, 8, ["news"]);
                  }), 128))
                ]),
                hasMore ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_component_x_space, { height: 50 }),
                  createVNode("div", { class: "flex justify-center" }, [
                    createVNode(_component_x_button, {
                      theme: "primary",
                      outline: "",
                      uppercase: false,
                      onClick: loadMore
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Xem th\xEAm ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          createVNode(_component_x_space, { height: 80 })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tin-tuc-su-kien/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BfAHbaMI.mjs.map
