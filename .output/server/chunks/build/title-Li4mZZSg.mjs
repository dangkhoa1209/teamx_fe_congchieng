import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "title",
  __ssrInlineRender: true,
  props: {
    title: { type: String },
    variant: { type: String, default: "left" },
    // left | bottom
    className: { type: String }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inline-flex flex-col" }, _attrs))}>`);
      if (__props.variant === "left") {
        _push(`<div class="flex items-stretch gap-[10px]"><span class="w-[2px] bg-primary leading-[1]"></span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`<p class="${ssrRenderClass([__props.className, "m-0 leading-[1] text-primary p-0"])}">${ssrInterpolate(__props.title)}</p>`);
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<div class="flex flex-col">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`<p class="${ssrRenderClass([__props.className, "m-0 leading-[1] text-primary p-0"])}">${ssrInterpolate(__props.title)}</p>`);
        }, _push, _parent);
        _push(`<span class="block mt-[15px] w-[60px] h-[2px] bg-primary"></span></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/title.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=title-Li4mZZSg.mjs.map
