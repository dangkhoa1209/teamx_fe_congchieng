import __nuxt_component_0 from './index-CPwABLrf.mjs';
import { toRefs, computed, mergeProps, unref, createElementBlock, openBlock, createElementVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';

const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "256",
  height: "256",
  viewBox: "0 0 24 24"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      d: "M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1m0 19a8 8 0 1 1 8-8 8 8 0 0 1-8 8",
      opacity: ".25"
    }, null, -1),
    createElementVNode("path", { d: "M12 4a8 8 0 0 1 7.89 6.7 1.53 1.53 0 0 0 1.49 1.3 1.5 1.5 0 0 0 1.48-1.75 11 11 0 0 0-21.72 0A1.5 1.5 0 0 0 2.62 12a1.53 1.53 0 0 0 1.49-1.3A8 8 0 0 1 12 4" }, [
      createElementVNode("animateTransform", {
        attributeName: "transform",
        dur: "0.75s",
        repeatCount: "indefinite",
        type: "rotate",
        values: "0 12 12;360 12 12"
      })
    ], -1)
  ])]);
}
const RingWithBg = { render };
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
      return props.icon || "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        disabled: __props.disabled,
        class: ["inline-flex items-center gap-2 rounded-lg px-4 py-2 cursor-pointer", cClass.value]
      }, _attrs))}><div class="flex gap-1 items-center">`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
        if (cIcon.value && !props.loading) {
          _push(ssrRenderComponent(_component_Icon, {
            name: cIcon.value,
            class: "h-5 w-5"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (props.loading) {
          _push(ssrRenderComponent(unref(RingWithBg), { class: "h-5 w-5 fill-main" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
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
//# sourceMappingURL=button-DiwB5Aa0.mjs.map
