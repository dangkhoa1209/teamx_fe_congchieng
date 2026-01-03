import { ref, toRefs, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { M as MagnifyingGlassIcon } from './magnifying-glass-BFBcnZYt.mjs';

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
    const value = ref("");
    const emits = __emit;
    const props = __props;
    const { modelValue } = toRefs(props);
    const cValue = computed({
      get() {
        return modelValue.value;
      },
      set(value2) {
        emits("update:modelValue", value2);
        emits("change", value2);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full" }, _attrs))}><input${ssrRenderAttr("value", cValue.value)} type="text"${ssrRenderAttr("placeholder", __props.placeholder)} class="w-full rounded border-[0.1rem] px-4 pr-12 py-2 transition-colors duration-200 outline-none bg-main border-primary placeholder-black disabled:bg-gray-100 disabled:cursor-not-allowed h-[40px] text-body font-medium font-robo">`);
      _push(ssrRenderComponent(unref(MagnifyingGlassIcon), {
        name: "heroicons:magnifying-glass",
        class: "absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-primary hover:opacity-79 cursor-pointer",
        onClick: ($event) => emits("change", value.value)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tim-kiem/ignore/input-fliter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=input-fliter-CKrE10ME.mjs.map
