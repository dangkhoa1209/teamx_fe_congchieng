import { computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = {
  __name: "content-place",
  __ssrInlineRender: true,
  props: {
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const paddingClass = computed(() => {
      return "px-4 tablet:px-6 laptop:px-10 wide:px-[120px]";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="${ssrRenderClass([[paddingClass.value, __props.className], "mx-auto w-full max-w-[1440px]"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content-place.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=content-place-geFh5xeL.mjs.map
