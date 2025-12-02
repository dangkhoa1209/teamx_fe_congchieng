import __nuxt_component_1 from './index-CyZG15Sy.mjs';
import { _ as _sfc_main$3 } from './button-Cryksw8w.mjs';
import { computed, ref, mergeProps, withCtx, unref, renderSlot, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderTeleport, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './index-BzusrdnL.mjs';
import { $ as $lodash } from './index-CtS2E8qT.mjs';

const _sfc_main$1 = {
  __name: "modal",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Boolean,
      require: true
    },
    title: { type: String, default: "Modal" },
    loading: { type: Boolean, default: false },
    submitLabel: { type: String, default: "L\u01B0u" },
    cancelLabel: { type: String, default: "\u0110\xF3ng" }
  },
  emits: ["update:modelValue", "submit", "close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const handleClose = () => {
      emit("update:modelValue", false);
      emit("close");
    };
    const handleSubmit = () => emit("submit");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_x_form_button = _sfc_main$3;
      ssrRenderTeleport(_push, (_push2) => {
        if (__props.modelValue) {
          _push2(`<div class="fixed inset-0 z-[2000] flex items-center justify-center bg-black/40" tabindex="-1"><div class="w-full max-w-[70vw] max-h-[90vh] overflow-hidden rounded-xl bg-main shadow-lg flex flex-col transition-all duration-150 ease-out scale-100" role="dialog" aria-modal="true"><div class="flex items-center justify-between border-b border-gray-200 px-6 py-4"><h2 class="text-lg font-semibold text-gray-900 truncate">${ssrInterpolate(__props.title)}</h2><button type="button" class="rounded-full p-2 text-gray-500 hover:bg-gray-100">`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "mdi:close",
            class: "h-5 w-5"
          }, null, _parent));
          _push2(`</button></div><div class="flex-1 overflow-y-auto px-6 py-4">`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
          _push2(`</div><div class="flex items-center justify-end gap-3 border-t border-gray-200 px-6 py-4">`);
          _push2(ssrRenderComponent(_component_x_form_button, {
            type: "button",
            onClick: handleClose
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`${ssrInterpolate(__props.cancelLabel)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.cancelLabel), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(ssrRenderComponent(_component_x_form_button, {
            type: "button",
            theme: "primary",
            disabled: __props.loading,
            loading: __props.loading,
            onClick: handleSubmit
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`<span${_scopeId}>${ssrInterpolate(__props.submitLabel)}</span>`);
              } else {
                return [
                  createVNode("span", null, toDisplayString(__props.submitLabel), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`</div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "modal-action",
  __ssrInlineRender: true,
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "C\u1EADp nh\u1EADt"
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:visible", "submit"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const isVisible = computed({
      get: () => props.visible,
      set: (value) => emits("update:visible", value)
    });
    const form = ref();
    const handleSubmit = async () => {
      if (!form.value) return;
      await form.value.submit();
    };
    const onFormSubmit = $lodash.debounce((values) => {
      emits("submit", values);
    }, 200);
    __expose({
      form
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_modal = _sfc_main$1;
      const _component_x_form = _sfc_main$2;
      _push(ssrRenderComponent(_component_x_modal, mergeProps({
        modelValue: isVisible.value,
        "onUpdate:modelValue": ($event) => isVisible.value = $event,
        title: props.title,
        loading: props.loading,
        onSubmit: handleSubmit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_x_form, {
              ref_key: "form",
              ref: form,
              onSubmit: unref(onFormSubmit)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_x_form, {
                ref_key: "form",
                ref: form,
                onSubmit: unref(onFormSubmit)
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 8, ["onSubmit"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal-action.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=modal-action-CxUmJUDK.mjs.map
