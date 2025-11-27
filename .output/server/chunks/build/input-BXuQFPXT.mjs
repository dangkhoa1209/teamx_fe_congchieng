import __nuxt_component_1 from './index-C08a6tCK.mjs';
import { defineComponent, ref, computed, watch, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { useField, Field } from 'vee-validate';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "input",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    name: {
      type: String,
      required: true
    },
    label: String,
    placeholder: String,
    description: String,
    rules: [String, Object, Function],
    type: {
      type: String,
      default: "text"
    },
    required: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    min: Number,
    max: Number,
    numberInteger: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { value } = useField(props.name);
    const showPassword = ref(false);
    const isPasswordType = computed(() => props.type === "password");
    const inputType = computed(() => isPasswordType.value && !showPassword.value ? "password" : "text");
    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };
    const handleInput = (event, field) => {
      var _a;
      const target = event.target;
      let rawValue = target.value;
      if (props.type === "number") {
        if (!rawValue || rawValue === "") {
          updateFieldAndEmit(field, "");
          return;
        }
        let num = props.numberInteger ? parseInt(rawValue, 10) : parseFloat(rawValue);
        if (isNaN(num)) {
          num = (_a = props.min) != null ? _a : 0;
        }
        if (props.min !== void 0 && num < props.min) num = props.min;
        if (props.max !== void 0 && num > props.max) num = props.max;
        updateFieldAndEmit(field, num);
      } else {
        updateFieldAndEmit(field, rawValue);
      }
    };
    const updateFieldAndEmit = (field, value2) => {
      field.value = value2;
      emits("update:modelValue", value2);
      emits("change", value2);
    };
    watch(
      () => props.modelValue,
      (newVal) => {
        value.value = newVal != null ? newVal : "";
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full" }, _attrs))} data-v-aebfa9a0>`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", __props.name)} class="mb-1 text-body font-medium font-robo" data-v-aebfa9a0>${ssrInterpolate(__props.label)} `);
        if (__props.required) {
          _push(`<span class="ml-0.5 text-red-500" data-v-aebfa9a0>*</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(Field), {
        name: __props.name,
        label: __props.label,
        rules: __props.rules
      }, {
        default: withCtx(({ field, errors }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative w-full" data-v-aebfa9a0${_scopeId}><input${ssrRenderAttr("id", __props.name)}${ssrRenderAttr("type", inputType.value)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}${ssrIncludeBooleanAttr(__props.readonly) ? " readonly" : ""}${ssrRenderAttr("min", __props.min)}${ssrRenderAttr("max", __props.max)}${ssrRenderAttr("value", field.value)} class="w-full rounded-2xl border px-4 py-2 transition-colors duration-200 outline-none bg-main border-primary hover:border-primary focus:ring-2 focus:ring-primary disabled:bg-gray-100 disabled:cursor-not-allowed h-[60px] text-body font-medium font-robo" data-v-aebfa9a0${_scopeId}>`);
            if (isPasswordType.value) {
              _push2(`<button type="button" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700" data-v-aebfa9a0${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: showPassword.value ? "heroicons-solid:eye" : "heroicons-solid:eye-slash",
                class: "h-6 w-6"
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (errors[0]) {
              _push2(`<p class="mt-1 text-sm text-red-500" data-v-aebfa9a0${_scopeId}>${ssrInterpolate(errors[0])}</p>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "relative w-full" }, [
                createVNode("input", {
                  id: __props.name,
                  type: inputType.value,
                  placeholder: __props.placeholder,
                  disabled: __props.disabled,
                  readonly: __props.readonly,
                  min: __props.min,
                  max: __props.max,
                  value: field.value,
                  class: "w-full rounded-2xl border px-4 py-2 transition-colors duration-200 outline-none bg-main border-primary hover:border-primary focus:ring-2 focus:ring-primary disabled:bg-gray-100 disabled:cursor-not-allowed h-[60px] text-body font-medium font-robo",
                  onInput: ($event) => handleInput($event, field)
                }, null, 40, ["id", "type", "placeholder", "disabled", "readonly", "min", "max", "value", "onInput"]),
                isPasswordType.value ? (openBlock(), createBlock("button", {
                  key: 0,
                  type: "button",
                  class: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700",
                  onClick: togglePassword
                }, [
                  createVNode(_component_Icon, {
                    name: showPassword.value ? "heroicons-solid:eye" : "heroicons-solid:eye-slash",
                    class: "h-6 w-6"
                  }, null, 8, ["name"])
                ])) : createCommentVNode("", true)
              ]),
              errors[0] ? (openBlock(), createBlock("p", {
                key: 0,
                class: "mt-1 text-sm text-red-500"
              }, toDisplayString(errors[0]), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.description) {
        _push(`<p class="mt-1 text-sm text-gray-500" data-v-aebfa9a0>${ssrInterpolate(__props.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aebfa9a0"]]);

export { __nuxt_component_5 as _ };
//# sourceMappingURL=input-BXuQFPXT.mjs.map
