import { computed, ref, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import '@iconify/vue';
import 'deep-pick-omit';
import 'vue-toastification';
import 'vee-validate';
import '@vee-validate/rules';

const _sfc_main = {
  __name: "pagination",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Number, default: 1 },
    total: { type: Number, default: 0 },
    perPage: { type: Number, default: 10 }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const currentPage = computed(() => props.modelValue);
    const totalPages = computed(() => Math.ceil(props.total / props.perPage));
    const displayedPages = ref([]);
    const initDisplayedPages = () => {
      const count = Math.min(5, totalPages.value);
      let start = Math.max(1, currentPage.value - Math.floor(count / 2));
      let end = Math.min(totalPages.value, start + count - 1);
      if (end - start + 1 < count) start = end - count + 1;
      displayedPages.value = Array.from({ length: count }, (_, i) => start + i);
    };
    watch([() => props.modelValue, () => props.total, () => props.perPage], () => {
      initDisplayedPages();
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (totalPages.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-[25px]" }, _attrs))} data-v-8c171b2d><button class="${ssrRenderClass([{ "opacity-30 cursor-not-allowed": currentPage.value === 1 }, "w-[38px] h-[38px] rounded-full border border-primary flex items-center justify-center text-primary transition-all"])}"${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} data-v-8c171b2d><span class="rotate-180" data-v-8c171b2d>\u203A</span></button><!--[-->`);
        ssrRenderList(displayedPages.value, (n) => {
          _push(`<button class="${ssrRenderClass([{
            "bg-primary text-main border-primary": n === currentPage.value,
            "text-primary hover:bg-primary/10": n !== currentPage.value
          }, "w-[38px] h-[38px] rounded-full border border-primary flex items-center justify-center font-semibold transition-all"])}" data-v-8c171b2d>${ssrInterpolate(n)}</button>`);
        });
        _push(`<!--]--><button class="${ssrRenderClass([{ "opacity-30 cursor-not-allowed": currentPage.value === totalPages.value }, "w-[38px] h-[38px] rounded-full border border-primary flex items-center justify-center text-primary transition-all"])}"${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} data-v-8c171b2d> \u203A </button></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tim-kiem/ignore/pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8c171b2d"]]);

export { Pagination as default };
//# sourceMappingURL=pagination-DA6UlCzT.mjs.map
