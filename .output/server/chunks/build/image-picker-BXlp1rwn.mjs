import __nuxt_component_1 from './index-CyZG15Sy.mjs';
import { _ as _sfc_main$1 } from './button-Cp5cbQ9b.mjs';
import { toRefs, ref, computed, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, withModifiers, createBlock, createCommentVNode, openBlock, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { Field } from 'vee-validate';
import Cropper from 'cropperjs';

const _sfc_main = {
  __name: "image-picker",
  __ssrInlineRender: true,
  props: {
    modelValue: [File, String, null],
    name: { type: String, required: true },
    label: String,
    rules: [String, Object, Function],
    required: Boolean,
    width: {
      type: Number,
      width: 900
    },
    height: {
      type: Number,
      width: 600
    },
    labelConfirm: {
      type: String,
      default: "Ch\u1ECDn"
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { width, height, labelConfirm } = toRefs(props);
    const isDragging = ref(false);
    const imageSrc = ref(null);
    const croppedData = ref(props.modelValue || null);
    const cropperImage = ref(null);
    let cropper = null;
    const croppedDataPreview = computed(() => {
      if (!croppedData.value) return null;
      return croppedData.value instanceof File ? URL.createObjectURL(croppedData.value) : croppedData.value;
    });
    watch(
      () => props.modelValue,
      (val) => croppedData.value = val
    );
    const onFileChange = (e, handleChange) => {
      const file = e.target.files[0];
      if (!file) return;
      loadFile(file);
    };
    const onDrop = (e, handleChange) => {
      isDragging.value = false;
      const file = e.dataTransfer.files[0];
      if (!file) return;
      loadFile(file);
    };
    const loadFile = (file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        imageSrc.value = event.target.result;
        nextTick(() => {
          cropper == null ? void 0 : cropper.destroy();
          cropper = new Cropper(cropperImage.value, {
            aspectRatio: width.value / height.value,
            viewMode: 1,
            autoCropArea: 1
          });
        });
      };
      reader.readAsDataURL(file);
    };
    const cropImage = (handleChange) => {
      if (!cropper) return;
      const targetWidth = 1920;
      const targetHeight = Math.round(height.value / width.value * targetWidth);
      const canvas = cropper.getCroppedCanvas({
        width: targetWidth,
        height: targetHeight,
        imageSmoothingEnabled: true,
        imageSmoothingQuality: "high"
      });
      canvas.toBlob(
        (blob) => {
          if (!blob) return;
          const fileName = `image-${props.name || Date.now()}.jpg`;
          const file = new File([blob], fileName, { type: "image/jpeg" });
          croppedData.value = file;
          imageSrc.value = null;
          cropper == null ? void 0 : cropper.destroy();
          cropper = null;
          emit("update:modelValue", file);
          emit("change", file);
          handleChange(file);
        },
        "image/jpeg",
        0.9
      );
    };
    const clearImage = () => {
      cropper == null ? void 0 : cropper.destroy();
      cropper = null;
      imageSrc.value = null;
      croppedData.value = null;
      emit("update:modelValue", null);
      emit("change", null);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_x_form_button = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full" }, _attrs))}>`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", __props.name)} class="mb-1 text-body font-medium font-robo">${ssrInterpolate(__props.label)} `);
        if (__props.required) {
          _push(`<span class="text-red-500 ml-0.5">*</span>`);
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
        s: "",
        rules: __props.rules
      }, {
        default: withCtx(({ field, errors, handleChange }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-3 items-start w-full"${_scopeId}>`);
            if (!imageSrc.value && !croppedData.value) {
              _push2(`<label class="${ssrRenderClass([{
                "border-red-400": errors.length > 0,
                "border-gray-300": errors.length === 0,
                "bg-gray-100": isDragging.value
              }, "flex flex-col items-center justify-center w-full border-2 border-dashed rounded-lg p-3 text-sm text-gray-500 cursor-pointer hover:bg-gray-50 transition"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "mdi:image-plus-outline",
                class: "w-6 h-6 mb-1 text-gray-400"
              }, null, _parent2, _scopeId));
              if (!isDragging.value) {
                _push2(`<span${_scopeId}>Ch\u1ECDn \u1EA3nh ho\u1EB7c k\xE9o th\u1EA3 v\xE0o \u0111\xE2y</span>`);
              } else {
                _push2(`<span class="text-primary font-semibold"${_scopeId}>Th\u1EA3 \u1EA3nh v\xE0o \u0111\xE2y</span>`);
              }
              _push2(`<input type="file" accept="image/*" class="hidden"${_scopeId}></label>`);
            } else {
              _push2(`<!---->`);
            }
            if (imageSrc.value && !croppedData.value) {
              _push2(`<div class="relative w-full overflow-hidden rounded-lg border border-gray-200"${_scopeId}><img${ssrRenderAttr("src", imageSrc.value)} alt="\u1EA2nh c\u1EAFt" class="block w-full object-contain"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (imageSrc.value && !croppedData.value) {
              _push2(`<div class="flex justify-end gap-2 pt-2 w-full"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_x_form_button, {
                theme: "primary",
                outline: "",
                onClick: clearImage
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Hu\u1EF7`);
                  } else {
                    return [
                      createTextVNode("Hu\u1EF7")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_x_form_button, {
                theme: "primary",
                onClick: ($event) => cropImage(handleChange)
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(labelConfirm))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(labelConfirm)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (croppedData.value) {
              _push2(`<div class="flex flex-col items-start w-full gap-2"${_scopeId}><img${ssrRenderAttr("src", croppedDataPreview.value)} alt="Cropped Preview" class="w-full rounded-md border border-gray-200"${_scopeId}><div class="flex gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_x_form_button, { onClick: clearImage }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Ch\u1ECDn \u1EA3nh m\u1EDBi`);
                  } else {
                    return [
                      createTextVNode("Ch\u1ECDn \u1EA3nh m\u1EDBi")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (errors.length) {
              _push2(`<p class="mt-1 text-sm text-red-500"${_scopeId}>${ssrInterpolate(errors[0])}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "flex flex-col gap-3 items-start w-full",
                onDragover: withModifiers(($event) => isDragging.value = true, ["prevent"]),
                onDragleave: withModifiers(($event) => isDragging.value = false, ["prevent"]),
                onDrop: withModifiers(($event) => onDrop($event), ["prevent"])
              }, [
                !imageSrc.value && !croppedData.value ? (openBlock(), createBlock("label", {
                  key: 0,
                  class: ["flex flex-col items-center justify-center w-full border-2 border-dashed rounded-lg p-3 text-sm text-gray-500 cursor-pointer hover:bg-gray-50 transition", {
                    "border-red-400": errors.length > 0,
                    "border-gray-300": errors.length === 0,
                    "bg-gray-100": isDragging.value
                  }]
                }, [
                  createVNode(_component_Icon, {
                    name: "mdi:image-plus-outline",
                    class: "w-6 h-6 mb-1 text-gray-400"
                  }),
                  !isDragging.value ? (openBlock(), createBlock("span", { key: 0 }, "Ch\u1ECDn \u1EA3nh ho\u1EB7c k\xE9o th\u1EA3 v\xE0o \u0111\xE2y")) : (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-primary font-semibold"
                  }, "Th\u1EA3 \u1EA3nh v\xE0o \u0111\xE2y")),
                  createVNode("input", {
                    type: "file",
                    accept: "image/*",
                    class: "hidden",
                    onChange: (e) => onFileChange(e)
                  }, null, 40, ["onChange"])
                ], 2)) : createCommentVNode("", true),
                imageSrc.value && !croppedData.value ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "relative w-full overflow-hidden rounded-lg border border-gray-200"
                }, [
                  createVNode("img", {
                    ref_key: "cropperImage",
                    ref: cropperImage,
                    src: imageSrc.value,
                    alt: "\u1EA2nh c\u1EAFt",
                    class: "block w-full object-contain"
                  }, null, 8, ["src"])
                ])) : createCommentVNode("", true),
                imageSrc.value && !croppedData.value ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "flex justify-end gap-2 pt-2 w-full"
                }, [
                  createVNode(_component_x_form_button, {
                    theme: "primary",
                    outline: "",
                    onClick: clearImage
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Hu\u1EF7")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_x_form_button, {
                    theme: "primary",
                    onClick: ($event) => cropImage(handleChange)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(labelConfirm)), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])) : createCommentVNode("", true),
                croppedData.value ? (openBlock(), createBlock("div", {
                  key: 3,
                  class: "flex flex-col items-start w-full gap-2"
                }, [
                  createVNode("img", {
                    src: croppedDataPreview.value,
                    alt: "Cropped Preview",
                    class: "w-full rounded-md border border-gray-200"
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "flex gap-2" }, [
                    createVNode(_component_x_form_button, { onClick: clearImage }, {
                      default: withCtx(() => [
                        createTextVNode("Ch\u1ECDn \u1EA3nh m\u1EDBi")
                      ]),
                      _: 1
                    })
                  ])
                ])) : createCommentVNode("", true),
                errors.length ? (openBlock(), createBlock("p", {
                  key: 4,
                  class: "mt-1 text-sm text-red-500"
                }, toDisplayString(errors[0]), 1)) : createCommentVNode("", true)
              ], 40, ["onDragover", "onDragleave", "onDrop"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/image-picker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=image-picker-BXlp1rwn.mjs.map
