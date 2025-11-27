import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = {
  __name: "core-ttnb",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "tin-tuc-su-kien"
    }
  },
  setup(__props) {
    const featuredSlots = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlot(_ctx.$slots, "default", { items: unref(featuredSlots) }, null, _push, _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core-ttnb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=core-ttnb-hoiwhzfc.mjs.map
