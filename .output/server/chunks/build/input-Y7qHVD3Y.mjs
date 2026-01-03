import { ref, computed, watch, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, withDirectives, vShow, toDisplayString, createElementBlock, createElementVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { useField, Field } from 'vee-validate';
import { _ as _export_sfc } from './server.mjs';

const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  class: "size-6",
  viewBox: "0 0 24 24"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", { d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" }, null, -1),
    createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.76 1.76 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0",
      "clip-rule": "evenodd"
    }, null, -1)
  ])]);
}
const EyeIcon = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  class: "size-6",
  viewBox: "0 0 24 24"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", { d: "M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06zm19.146 10.083a11.25 11.25 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.2 11.2 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113" }, null, -1),
    createElementVNode("path", { d: "M15.75 12q0 .27-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12m-3.22 3.713-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" }, null, -1),
    createElementVNode("path", { d: "M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12" }, null, -1)
  ])]);
}
const EyeSlashIcon = { render };
const _sfc_main = {
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
    const inputType = computed(
      () => isPasswordType.value && !showPassword.value ? "password" : "text"
    );
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full" }, _attrs))} data-v-4b6839ae>`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", __props.name)} class="mb-1 text-body font-medium font-robo" data-v-4b6839ae>${ssrInterpolate(__props.label)} `);
        if (__props.required) {
          _push(`<span class="ml-0.5 text-red-500" data-v-4b6839ae>*</span>`);
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
            _push2(`<div class="relative w-full" data-v-4b6839ae${_scopeId}><input${ssrRenderAttr("id", __props.name)}${ssrRenderAttr("type", unref(inputType))}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}${ssrIncludeBooleanAttr(__props.readonly) ? " readonly" : ""}${ssrRenderAttr("min", __props.min)}${ssrRenderAttr("max", __props.max)}${ssrRenderAttr("value", field.value)} class="w-full rounded-xl tablet:rounded-2xl border py-1 px-2 tablet:px-4 tablet:py-2 h-[35px] tablet:h-[60px] transition-colors duration-200 outline-none bg-main border-primary hover:border-primary focus:ring-2 focus:ring-primary disabled:bg-gray-100 disabled:cursor-not-allowed text-body font-medium font-robo" data-v-4b6839ae${_scopeId}>`);
            if (unref(isPasswordType)) {
              _push2(`<button type="button" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700" data-v-4b6839ae${_scopeId}>`);
              _push2(ssrRenderComponent(unref(EyeIcon), {
                style: unref(showPassword) ? null : { display: "none" },
                class: "h-6 w-6"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(EyeSlashIcon), {
                style: !unref(showPassword) ? null : { display: "none" },
                class: "h-6 w-6"
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (errors[0]) {
              _push2(`<p class="mt-1 text-sm text-red-500" data-v-4b6839ae${_scopeId}>${ssrInterpolate(errors[0])}</p>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "relative w-full" }, [
                createVNode("input", {
                  id: __props.name,
                  type: unref(inputType),
                  placeholder: __props.placeholder,
                  disabled: __props.disabled,
                  readonly: __props.readonly,
                  min: __props.min,
                  max: __props.max,
                  value: field.value,
                  class: "w-full rounded-xl tablet:rounded-2xl border py-1 px-2 tablet:px-4 tablet:py-2 h-[35px] tablet:h-[60px] transition-colors duration-200 outline-none bg-main border-primary hover:border-primary focus:ring-2 focus:ring-primary disabled:bg-gray-100 disabled:cursor-not-allowed text-body font-medium font-robo",
                  onInput: ($event) => handleInput($event, field)
                }, null, 40, ["id", "type", "placeholder", "disabled", "readonly", "min", "max", "value", "onInput"]),
                unref(isPasswordType) ? (openBlock(), createBlock("button", {
                  key: 0,
                  type: "button",
                  class: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700",
                  onClick: togglePassword
                }, [
                  withDirectives(createVNode(unref(EyeIcon), { class: "h-6 w-6" }, null, 512), [
                    [vShow, unref(showPassword)]
                  ]),
                  withDirectives(createVNode(unref(EyeSlashIcon), { class: "h-6 w-6" }, null, 512), [
                    [vShow, !unref(showPassword)]
                  ])
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
        _push(`<p class="mt-1 text-sm text-gray-500" data-v-4b6839ae>${ssrInterpolate(__props.description)}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4b6839ae"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=input-Y7qHVD3Y.mjs.map
