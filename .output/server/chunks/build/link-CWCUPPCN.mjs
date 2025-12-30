import { _ as __nuxt_component_0 } from './nuxt-link-Bf9L1Upn.mjs';
import { defineComponent, mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "link",
  __ssrInlineRender: true,
  props: {
    to: {
      type: [Object, String],
      required: true
    },
    active: Boolean,
    target: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      if (__props.to) {
        _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
          "no-prefetch": "",
          class: ["x-link", { "router-link-active": __props.active }],
          to: __props.to,
          target: __props.target
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/link.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=link-CWCUPPCN.mjs.map
