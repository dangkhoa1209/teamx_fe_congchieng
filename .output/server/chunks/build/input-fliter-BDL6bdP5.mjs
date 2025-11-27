import { ref, toRefs, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDynamicModelProps } from 'vue/server-renderer';

const _sfc_main = {
  __name: "input-fliter",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    ref("");
    const emits = __emit;
    const props = __props;
    const { modelValue } = toRefs(props);
    const cValue = computed({
      get() {
        return modelValue.value;
      },
      set(value) {
        emits("update:modelValue", value);
        emits("change", value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        value: cValue.value,
        type: "text",
        placeholder: __props.placeholder,
        class: "w-full rounded border px-4 py-2 transition-colors duration-200 outline-none bg-main border-primary hover:border-primary focus:ring-2 focus:ring-primary disabled:bg-gray-100 disabled:cursor-not-allowed h-[40px] text-body font-medium font-robo"
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, cValue.value))))}>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/tin-tuc-su-kien/ignore/input-fliter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=input-fliter-BDL6bdP5.mjs.map
