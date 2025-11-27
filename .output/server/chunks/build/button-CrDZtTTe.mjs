import __nuxt_component_1 from './index-C08a6tCK.mjs';
import { toRefs, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = {
  __name: "button",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
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
      default: false
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
          results.push("bg-transparent", "text-primary", "border", "border-primary");
        } else {
          results.push("bg-transparent", "text-main", "border", "border-main");
        }
      } else {
        if (theme.value === "main") {
          results.push("bg-main", "text-primary");
        } else {
          results.push("bg-primary", "text-main");
        }
      }
      if (uppercase.value) {
        results.push("uppercase");
      }
      return results.join(" ");
    });
    const cIcon = computed(() => {
      if (props.loading) {
        return "svg-spinners:180-ring-with-bg";
      }
      return props.icon || "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        disabled: __props.disabled,
        class: ["inline-flex items-center gap-2 rounded-lg px-4 py-2 cursor-pointer", cClass.value]
      }, _attrs))}><div class="flex gap-1 items-center">`);
      if (cIcon.value) {
        _push(ssrRenderComponent(_component_Icon, {
          name: cIcon.value,
          class: "h-5 w-5"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p></div></button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=button-CrDZtTTe.mjs.map
