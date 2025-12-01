import { mergeProps, unref, withCtx, renderSlot, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "slide",
  __ssrInlineRender: true,
  props: {
    items: { type: Array, required: true },
    breakpoints: {
      type: Object,
      default: () => ({
        0: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
        1280: { slidesPerView: 3 }
      })
    }
  },
  setup(__props) {
    const props = __props;
    const swiperBreakpoints = props.breakpoints;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))} data-v-fadf4ba9>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Autoplay), unref(Pagination)],
        "slides-per-view": 1,
        "space-between": 30,
        loop: true,
        autoplay: { delay: 1e4, disableOnInteraction: false },
        pagination: { clickable: true, dynamicBullets: true, dynamicMainBullets: 6 },
        breakpoints: unref(swiperBreakpoints),
        class: "society-slide"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.items, (item, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", {
                      item,
                      index
                    }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index
                      }, void 0, true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default", {
                      item,
                      index
                    }, void 0, true)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/slide.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fadf4ba9"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=slide-CI2g4fwB.mjs.map
