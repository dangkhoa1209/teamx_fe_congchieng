import { defineComponent, computed, watch, mergeProps, unref, withCtx, withDirectives, createBlock, createCommentVNode, createVNode, vModelText, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useField, Field } from 'vee-validate';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "text-area",
  __ssrInlineRender: true,
  props: {
    modelValue: String,
    name: { type: String, required: true },
    label: String,
    placeholder: String,
    description: String,
    rules: [String, Object, Function],
    required: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    rows: { type: Number, default: 4 }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { value } = useField(props.name);
    const fieldValue = computed({
      get: () => props.modelValue,
      set: (val) => {
        emits("update:modelValue", val);
        emits("change", val);
      }
    });
    watch(
      () => props.modelValue,
      (newVal) => {
        value.value = newVal != null ? newVal : "";
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full" }, _attrs))}>`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", __props.name)} class="mb-1 text-body font-medium font-robo">${ssrInterpolate(__props.label)} `);
        if (__props.required) {
          _push(`<span class="ml-1 text-red-500">*</span>`);
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
            _push2(`<textarea${ssrRenderAttrs(mergeProps(field, {
              id: __props.name,
              placeholder: __props.placeholder,
              disabled: __props.disabled,
              readonly: __props.readonly,
              rows: __props.rows,
              class: "w-full rounded-xl tablet:rounded-2xl border px-4 py-2 transition-colors duration-200 outline-none bg-main border-primary hover:border-primary focus:ring-2 focus:ring-primary disabled:bg-gray-100 disabled:cursor-not-allowed resize-none text-body font-medium font-robo"
            }), "textarea")}${_scopeId}>${ssrInterpolate(fieldValue.value)}</textarea>`);
            if (errors.length) {
              _push2(`<p class="mt-1 text-sm text-red-500"${_scopeId}>${ssrInterpolate(errors[0])}</p>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              withDirectives(createVNode("textarea", mergeProps(field, {
                id: __props.name,
                "onUpdate:modelValue": ($event) => fieldValue.value = $event,
                placeholder: __props.placeholder,
                disabled: __props.disabled,
                readonly: __props.readonly,
                rows: __props.rows,
                class: "w-full rounded-xl tablet:rounded-2xl border px-4 py-2 transition-colors duration-200 outline-none bg-main border-primary hover:border-primary focus:ring-2 focus:ring-primary disabled:bg-gray-100 disabled:cursor-not-allowed resize-none text-body font-medium font-robo"
              }), null, 16, ["id", "onUpdate:modelValue", "placeholder", "disabled", "readonly", "rows"]), [
                [vModelText, fieldValue.value]
              ]),
              errors.length ? (openBlock(), createBlock("p", {
                key: 0,
                class: "mt-1 text-sm text-red-500"
              }, toDisplayString(errors[0]), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.description) {
        _push(`<p class="mt-1 text-sm text-gray-500">${ssrInterpolate(__props.description)}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/text-area.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=text-area-DmygkBmh.mjs.map
