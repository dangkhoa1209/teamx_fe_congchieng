import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDynamicModelProps } from 'vue/server-renderer';

const _sfc_main = {
  __name: "input-fitter",
  __ssrInlineRender: true,
  emits: ["enter"],
  setup(__props, { emit: __emit }) {
    const value = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        value: value.value,
        type: "text",
        class: "w-full rounded-full h-[40px] bg-primary text-main px-5 py-2 border border-primary transition-colors duration-200 hover:border-primary focus:outline-none focus:ring-0 disabled:bg-gray-100 disabled:cursor-not-allowed text-body font-thin italic font-robo"
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, value.value))))}>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin/header/menu/input-fitter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=input-fitter-DT5qAuIU.mjs.map
