import __nuxt_component_1 from './index-CyZG15Sy.mjs';
import { ref, toRefs, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';
import 'vue-toastification';
import 'vee-validate';
import '@vee-validate/rules';
import './v3-CjX-H-q3.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './asyncData-BGFq45PL.mjs';
import 'perfect-debounce';

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
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full" }, _attrs))}><input${ssrRenderAttr("value", cValue.value)} type="text"${ssrRenderAttr("placeholder", __props.placeholder)} class="w-full rounded border-[0.1rem] px-4 pr-12 py-2 transition-colors duration-200 outline-none bg-main border-primary placeholder-black disabled:bg-gray-100 disabled:cursor-not-allowed h-[40px] text-body font-medium font-robo">`);
      _push(ssrRenderComponent(_component_Icon, {
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
//# sourceMappingURL=input-fliter-BSjNd1hz.mjs.map
