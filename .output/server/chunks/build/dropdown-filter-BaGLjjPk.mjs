import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { o as onClickOutside } from './index-DJgNxocm.mjs';
import { D as DotsVerticalIcon } from './dots-vertical-9Ah25TiT.mjs';
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
  __name: "dropdown-filter",
  __ssrInlineRender: true,
  props: {
    modelValue: [String, Number],
    actions: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue", "select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const triggerRef = ref(null);
    const open = ref(false);
    const close = () => {
      open.value = false;
    };
    const selectedLabel = computed(() => {
      const selected = props.actions.find((a) => a.value === props.modelValue);
      return selected ? selected.label || selected.value : "";
    });
    onClickOutside(triggerRef, () => {
      close();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "triggerRef",
        ref: triggerRef,
        class: "relative inline-flex text-left bg-main user-select-none"
      }, _attrs))} data-v-803e45ac><div class="flex items-center cursor-pointer px-3" data-v-803e45ac><p class="leading-[40px]" data-v-803e45ac>${ssrInterpolate(selectedLabel.value || "K\u1EBFt qu\u1EA3")}</p>`);
      _push(ssrRenderComponent(unref(DotsVerticalIcon), { class: "h-4 w-4 ml-1" }, null, _parent));
      _push(`</div>`);
      if (open.value) {
        _push(`<div class="absolute left-0 bottom-0 translate-y-[100%] origin-top-right border border-gray-100 bg-main shadow-lg ring-1 ring-black/5 focus:outline-none z-50" data-v-803e45ac><ul data-v-803e45ac><!--[-->`);
        ssrRenderList(__props.actions, (action) => {
          _push(`<li data-v-803e45ac><p class="${ssrRenderClass([
            "leading-[40px] px-3 cursor-pointer whitespace-nowrap",
            __props.modelValue == action.value ? "bg-primary text-main" : ""
          ])}" data-v-803e45ac>${ssrInterpolate(action.label || action.value)}</p></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tim-kiem/ignore/dropdown-filter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DropdownFilter = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-803e45ac"]]);

export { DropdownFilter as default };
//# sourceMappingURL=dropdown-filter-BaGLjjPk.mjs.map
