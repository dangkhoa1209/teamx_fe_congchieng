import { a as _sfc_main$1, _ as _sfc_main$1$1 } from './core-ttnb-DdLyoc4Y.mjs';
import { _ as _sfc_main$2 } from './ver-DMB0jfIH.mjs';
import { mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "tin-tuc-su-kien"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_core_ttnb = _sfc_main$1;
      const _component_x_page_news_thumb_ver = _sfc_main$2;
      const _component_x_page_news_thumb_hor = _sfc_main$1$1;
      _push(ssrRenderComponent(_component_x_core_ttnb, mergeProps({ type: __props.type }, _attrs), {
        default: withCtx(({ items }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-[40px] flex-col laptop:flex-row"${_scopeId}>`);
            if (items.length >= 1) {
              _push2(`<div class="flex flex-col gap-5 laptop:w-[56.6%]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_x_page_news_thumb_ver, {
                news: items[0].news
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (items.length >= 2) {
              _push2(`<div class="laptop:w-[43.4%] flex flex-col gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(items.slice(1), (item, index) => {
                _push2(ssrRenderComponent(_component_x_page_news_thumb_hor, {
                  key: index,
                  exclude: ["subTitle"],
                  news: item.news
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-[40px] flex-col laptop:flex-row" }, [
                items.length >= 1 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-col gap-5 laptop:w-[56.6%]"
                }, [
                  createVNode(_component_x_page_news_thumb_ver, {
                    news: items[0].news
                  }, null, 8, ["news"])
                ])) : createCommentVNode("", true),
                items.length >= 2 ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "laptop:w-[43.4%] flex flex-col gap-4"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(items.slice(1), (item, index) => {
                    return openBlock(), createBlock(_component_x_page_news_thumb_hor, {
                      key: index,
                      exclude: ["subTitle"],
                      news: item.news
                    }, null, 8, ["news"]);
                  }), 128))
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=index-Da2oNOR2.mjs.map
