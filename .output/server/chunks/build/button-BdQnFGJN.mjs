import { toRefs, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = {
  __name: "button",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
      // 'button' | 'submit' | 'reset'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: "main"
      // main: nền trắng chữ màu, primary: nền màu chữ trắng
    },
    uppercase: {
      type: Boolean,
      default: true
    },
    outline: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { theme, uppercase, outline } = toRefs(props);
    const cClass = computed(() => {
      const results = [];
      if (outline.value) {
        if (theme.value === "primary") {
          results.push(
            "bg-transparent",
            "text-primary",
            "border",
            "border-primary",
            "hover:bg-primary",
            "hover:text-main"
          );
        } else {
          results.push("bg-transparent", "text-main", "border", "border-main");
        }
      } else {
        if (theme.value === "main") {
          results.push("bg-main", "text-primary", "hover:bg-primary", "hover:text-main");
        } else {
          results.push(
            "bg-primary",
            "text-main",
            "hover:bg-main",
            "hover:text-primary",
            "border",
            "border-transparent",
            "hover:border-primary"
          );
        }
      }
      if (uppercase.value) {
        results.push("uppercase");
      }
      return results.join(" ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["font-robo text-body font-medium h-[28px] tablet:h-[45px] laptop:h-[48px] rounded-full transition-colors", cClass.value],
        type: __props.type,
        disabled: __props.disabled
      }, _attrs))}><div class="px-4 tablet:8 laptop:px-10">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=button-BdQnFGJN.mjs.map
