import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { useForm } from 'vee-validate';
import { $ as $toast } from './_toast-BM3znq4X.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    handleError: {
      type: Boolean,
      default: true
    }
  },
  emits: ["submit", "invalid"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { handleSubmit, resetForm: resetVeeForm } = useForm();
    const handleInvalid = (errors) => {
      if (!errors) {
        return;
      }
      emit("invalid", errors);
      if (!props.handleError) return;
      const errorList = Object.values(errors).flatMap((msg) => {
        if (!msg) return [];
        return Array.isArray(msg) ? msg : [msg];
      });
      errorList.forEach((message) => {
        if (message) {
          $toast().error(String(message));
        }
      });
    };
    const submitForm = handleSubmit(
      async (values) => {
        try {
          emit("submit", values);
        } finally {
        }
      },
      (errors) => {
        console.log("errors", errors);
        handleInvalid(errors == null ? void 0 : errors.errors);
      }
    );
    const reset = () => {
      resetVeeForm();
    };
    __expose({
      submit: submitForm,
      reset
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=index-XektXWz7.mjs.map
