import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = {
  __name: "space",
  __ssrInlineRender: true,
  props: {
    height: {
      type: Number,
      default: 100
    }
  },
  setup(__props) {
    const props = __props;
    const width = ref(void 0);
    const CHeight = computed(() => {
      if (width.value <= 640) {
        return props.height * 0.8;
      } else if (width.value <= 1024) {
        return props.height;
      }
      return props.height;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: { height: unref(CHeight) + "px", minHeight: unref(CHeight) + "px" }
      }, _attrs))}></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/space.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=space-R3NPDNyo.mjs.map
