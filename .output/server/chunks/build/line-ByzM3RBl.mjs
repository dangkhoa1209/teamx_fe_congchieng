import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = {
  __name: "line",
  __ssrInlineRender: true,
  props: {
    className: {
      type: String,
      default: ""
    },
    classColor: {
      type: String,
      default: "bg-primary"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<hr${ssrRenderAttrs(mergeProps({
        class: ["h-[1px] border-0 opacity-100", [__props.className, __props.classColor]]
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/line.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=line-ByzM3RBl.mjs.map
