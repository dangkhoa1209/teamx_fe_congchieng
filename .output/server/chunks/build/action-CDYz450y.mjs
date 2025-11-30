import { _ as _sfc_main$2 } from './modal-action-DrQ_qsBz.mjs';
import { _ as _sfc_main$3 } from './select-CrPyhvG3.mjs';
import { _ as __nuxt_component_5 } from './input-CyFTOOcD.mjs';
import __nuxt_component_1 from './index-CyZG15Sy.mjs';
import { _ as _sfc_main$4 } from './text-area-DmygkBmh.mjs';
import { _ as _sfc_main$5 } from './image-DeCRukUU.mjs';
import { _ as _sfc_main$6 } from './button-Cryksw8w.mjs';
import { ref, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, createBlock, createCommentVNode, openBlock, computed, watch, withModifiers, toDisplayString, nextTick, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { Field } from 'vee-validate';
import Cropper from 'cropperjs';
import { c as checkPermission } from './permission-check-B69jzYEq.mjs';
import draggable from 'vuedraggable';
import { $ as $lodash } from './index-CtS2E8qT.mjs';
import { v4 } from 'uuid';
import { c as useRuntimeConfig } from './server.mjs';
import { $ as $toast } from './_toast-BM3znq4X.mjs';
import { $ as $api, a as $url } from './_url-BB8snvu0.mjs';
import './index-XektXWz7.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './v3-CjX-H-q3.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './asyncData-BGFq45PL.mjs';
import 'perfect-debounce';
import './_store-Ndlczi3l.mjs';
import 'pinia';
import 'lodash-es/get.js';
import 'lodash-es/join.js';
import 'lodash-es/set.js';
import 'lodash-es/assign.js';
import 'lodash-es/isNil.js';
import 'lodash-es/isEmpty.js';
import 'lodash-es/includes.js';
import 'lodash-es/filter.js';
import 'lodash-es/debounce.js';
import 'lodash-es/isPlainObject.js';
import 'lodash-es/inRange.js';
import 'lodash-es/trim.js';
import 'lodash-es/capitalize.js';
import 'lodash-es/isEqual.js';
import 'lodash-es/uniq.js';
import 'lodash-es/remove.js';
import 'lodash-es/maxBy.js';
import 'lodash-es/round.js';
import 'lodash-es/ceil.js';
import 'lodash-es/cloneDeep.js';
import 'lodash-es/multiply.js';
import 'lodash-es/delay.js';
import 'lodash-es/sortBy.js';
import 'lodash-es/map.js';
import 'lodash-es/pick.js';
import 'lodash-es/max.js';
import 'lodash-es/min.js';
import 'lodash-es/sumBy.js';
import 'lodash-es/uniqueId.js';
import 'vue-router';
import 'deep-pick-omit';
import 'vue-toastification';
import '@vee-validate/rules';
import '@vue/shared';

const newsScope = [
  {
    label: "Tin t\u1EE9c - S\u1EF1 ki\u1EC7n",
    value: "tin-tuc-su-kien",
    permission: "tin-tuc-su-kien"
  },
  {
    label: "Qu\u1EA3n l\xFD x\xE3 L\u1EA1c D\u01B0\u01A1ng",
    value: "xa-lac-duong",
    permission: "xa-lac-duong"
  },
  {
    label: "Qu\u1EA3n l\xFD x\xE3 \u0110\u1EA1 T\u1EBBh",
    value: "xa-da-teh",
    permission: "xa-da-teh"
  },
  {
    label: "Qu\u1EA3n l\xFD x\xE3 B\u1EA3o L\xE2m 3",
    value: "xa-lac-bao-lam-3",
    permission: "xa-lac-bao-lam-3"
  },
  {
    label: "Qu\u1EA3n l\xFD x\xE3 \u0110inh Trang Th\u01B0\u1EE3ng",
    value: "xa-dinh-trang-thuong",
    permission: "xa-dinh-trang-thuong"
  },
  {
    label: "Qu\u1EA3n l\xFD x\xE3 \u0110am R\xF4ng 4",
    value: "xa-dam-dong-4",
    permission: "xa-dam-dong-4"
  }
];
const __unimport_$newScope = () => {
  const list = newsScope.filter((item) => checkPermission(item.permission));
  const key = list.map((item) => item.value);
  const getLabel = (value) => {
    var _a;
    const scope = newsScope.filter((item) => item.value === value);
    if (!scope) {
      return "";
    }
    return ((_a = scope == null ? void 0 : scope[0]) == null ? void 0 : _a.label) || "";
  };
  return {
    list,
    key,
    getLabel
  };
};
const _sfc_main$1 = {
  __name: "image-picker",
  __ssrInlineRender: true,
  props: {
    modelValue: [File, String, null],
    name: { type: String, required: true },
    label: String,
    rules: [String, Object, Function],
    required: Boolean
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
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
            aspectRatio: 900 / 600,
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
      const targetHeight = Math.round(600 / 900 * targetWidth);
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
      const _component_x_form_button = _sfc_main$6;
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
                    _push3(`Ch\u1ECDn`);
                  } else {
                    return [
                      createTextVNode("Ch\u1ECDn")
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
                      createTextVNode("Ch\u1ECDn")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/image-picker.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "action",
  __ssrInlineRender: true,
  emits: ["refresh"],
  setup(__props, { expose: __expose, emit: __emit }) {
    var _a, _b;
    const config = useRuntimeConfig().public;
    const emits = __emit;
    const isVisible = ref(false);
    const isLoading = ref(false);
    const init = {
      location: ((_b = (_a = __unimport_$newScope().list) == null ? void 0 : _a[0]) == null ? void 0 : _b.value) || "",
      author: "",
      title: "",
      subtitle: "",
      status: "active",
      contents: []
    };
    const formData = ref($lodash.cloneDeep(init));
    const addContent = () => {
      $toast().info("Th\xEAm th\xE0nh c\xF4ng");
      formData.value.contents.push({
        id: v4(),
        type: "content",
        data: ""
      });
    };
    const addContentInDam = () => {
      $toast().info("Th\xEAm th\xE0nh c\xF4ng");
      formData.value.contents.push({
        id: v4(),
        type: "content-in-dam",
        data: ""
      });
    };
    const addImage = () => {
      $toast().info("Th\xEAm th\xE0nh c\xF4ng");
      formData.value.contents.push({
        id: v4(),
        type: "image",
        image: null,
        imageTitle: ""
      });
    };
    const removeItem = (index) => {
      formData.value.contents.splice(index, 1);
    };
    const open = (news) => {
      if (news) {
        formData.value = $lodash.cloneDeep(news);
      } else {
        formData.value = $lodash.cloneDeep(init);
      }
      isVisible.value = true;
    };
    const close = () => {
      isVisible.value = false;
    };
    const reset = () => {
      formData.value = $lodash.cloneDeep(init);
    };
    const buildFormData = async (data) => {
      const fd = new FormData();
      fd.append("title", data.title);
      fd.append("subtitle", data.subtitle);
      fd.append("status", data.status);
      fd.append("location", data.location);
      fd.append("author", data.author);
      fd.append(
        "contents",
        JSON.stringify(
          data.contents.map((c) => {
            const copy = { ...c };
            if (c.type === "image") delete copy.image;
            return copy;
          })
        )
      );
      for (const item of data.contents) {
        if (item.type === "image" && item.image) {
          let file = item.image;
          let fileName = `image-${item.id}`;
          if (file instanceof File) {
            fileName = file.name;
          } else if (typeof file === "string" && file.startsWith("blob:")) {
            const res = await fetch(file);
            const arrayBuffer = await res.arrayBuffer();
            const contentType = res.headers.get("Content-Type") || "image/jpeg";
            let ext = contentType.split("/")[1] || "jpeg";
            ext = ext.includes("jpeg") ? "jpg" : ext;
            fileName = `${fileName}.${ext}`;
            file = new File([arrayBuffer], fileName, { type: contentType });
          }
          fd.append(`image_${item.id}`, file, fileName);
        }
      }
      return fd;
    };
    const clearImage = (index) => {
      formData.value.contents[index] = {
        image: "",
        type: "image",
        imageTitle: formData.value.contents[index].imageTitle,
        id: formData.value.contents[index].id
      };
    };
    const handleSubmit = async () => {
      var _a2, _b2;
      isLoading.value = true;
      try {
        if (!formData.value._id) {
          const fd = await buildFormData(formData.value);
          const response = await $api($url.admin.news.create, { body: fd });
          const { data, success } = ((_a2 = response == null ? void 0 : response.data) == null ? void 0 : _a2.value) || {
            data: null,
            success: false
          };
          if (success) {
            $toast().success("Th\xEAm tin t\u1EE9c - s\u1EF1 ki\u1EC7n th\xE0nh c\xF4ng.");
            reset();
            emits("refresh");
            close();
          }
        } else {
          const fd = await buildFormData(formData.value);
          const response = await $api($url.admin.news.update, {
            body: fd,
            uriParams: {
              ":id": formData.value._id
            }
          });
          const { data, success } = ((_b2 = response == null ? void 0 : response.data) == null ? void 0 : _b2.value) || {
            data: null,
            success: false
          };
          if (success) {
            $toast().success("C\u1EADp nh\u1EADt tin t\u1EE9c - s\u1EF1 ki\u1EC7n th\xE0nh c\xF4ng.");
            reset();
            emits("refresh");
            close();
          }
        }
      } catch (error) {
        console.error("Failed to create news", error);
      } finally {
        isLoading.value = false;
      }
    };
    __expose({ open });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_modal_action = _sfc_main$2;
      const _component_x_form_select = _sfc_main$3;
      const _component_x_form_input = __nuxt_component_5;
      const _component_Icon = __nuxt_component_1;
      const _component_x_form_text_area = _sfc_main$4;
      const _component_x_image = _sfc_main$5;
      const _component_x_form_button = _sfc_main$6;
      const _component_x_form_image_picker = _sfc_main$1;
      _push(ssrRenderComponent(_component_x_modal_action, mergeProps({
        visible: unref(isVisible),
        "onUpdate:visible": ($event) => isRef(isVisible) ? isVisible.value = $event : null,
        title: "Tin t\u1EE9c - s\u1EF1 ki\u1EC7n",
        loading: unref(isLoading),
        onSubmit: handleSubmit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-2"${_scopeId}><div class="w-full flex flex-col gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_x_form_select, {
              modelValue: unref(formData).location,
              "onUpdate:modelValue": ($event) => unref(formData).location = $event,
              options: ("$newScope" in _ctx ? _ctx.$newScope : unref(__unimport_$newScope))().list,
              label: "Tr\u1EF1c thu\u1ED9c",
              name: "location",
              filterable: false,
              clearable: false,
              required: "",
              placeholder: "Tin t\u1EE9c - s\u1EF1 ki\u1EC7n tr\u1EF1c thu\u1ED9c c\u01A1 s\u1EDF n\xE0o"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_form_select, {
              modelValue: unref(formData).status,
              "onUpdate:modelValue": ($event) => unref(formData).status = $event,
              options: [
                { label: "Ho\u1EA1t \u0111\u1ED9ng", value: "active" },
                { label: "D\u1EEBng ho\u1EA1t \u0111\u1ED9ng", value: "unactive" }
              ],
              label: "Tr\u1EA1ng th\xE1i",
              name: "status",
              filterable: false,
              clearable: false,
              placeholder: "Ch\u1ECDn tr\u1EA1ng th\xE1i"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_form_input, {
              modelValue: unref(formData).author,
              "onUpdate:modelValue": ($event) => unref(formData).author = $event,
              label: "T\xE1c gi\u1EA3",
              name: "author",
              placeholder: "T\xEAn t\xE1c gi\u1EA3"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_form_input, {
              modelValue: unref(formData).title,
              "onUpdate:modelValue": ($event) => unref(formData).title = $event,
              label: "Ti\xEAu \u0111\u1EC1",
              name: "title",
              rules: "required",
              required: "",
              placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1 b\xE0i vi\u1EBFt"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_form_input, {
              modelValue: unref(formData).subtitle,
              "onUpdate:modelValue": ($event) => unref(formData).subtitle = $event,
              label: "Ti\xEAu \u0111\u1EC1 ph\u1EE5",
              name: "subtitle",
              rules: "required",
              required: "",
              placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1 ph\u1EE5"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(draggable), {
              modelValue: unref(formData).contents,
              "onUpdate:modelValue": ($event) => unref(formData).contents = $event,
              handle: ".drag-handle",
              "item-key": "id",
              class: "space-y-4"
            }, {
              item: withCtx(({ element: item, index }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="border rounded-lg p-3 relative bg-main shadow-sm flex flex-col gap-2"${_scopeId2}><div class="flex justify-end gap-2 top-2 right-2"${_scopeId2}><span class="drag-handle cursor-move"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "heroicons-solid:bars-4",
                    class: "text-black w-5 h-5 opacity-70"
                  }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="drag-handle cursor-move"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "heroicons-solid:x-mark",
                    class: "text-primary w-5 h-5",
                    onClick: ($event) => removeItem(index)
                  }, null, _parent3, _scopeId2));
                  _push3(`</span></div>`);
                  if (item.type === "content-in-dam") {
                    _push3(ssrRenderComponent(_component_x_form_text_area, {
                      modelValue: item.data,
                      "onUpdate:modelValue": ($event) => item.data = $event,
                      label: "N\u1ED9i dung In \u0110\u1EADm",
                      name: "content" + item.id,
                      rules: "required",
                      required: "",
                      placeholder: "Nh\u1EADp n\u1ED9i dung",
                      rows: 6
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (item.type === "content") {
                    _push3(ssrRenderComponent(_component_x_form_text_area, {
                      modelValue: item.data,
                      "onUpdate:modelValue": ($event) => item.data = $event,
                      label: "N\u1ED9i dung chi ti\u1EBFt",
                      name: "content-" + item.id,
                      rules: "required",
                      required: "",
                      placeholder: "Nh\u1EADp n\u1ED9i dung",
                      rows: 6
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (item.type === "image") {
                    _push3(`<div class="rounded-2xl border px-4 py-2 border-primary"${_scopeId2}>`);
                    if (item.url) {
                      _push3(`<div${_scopeId2}><p${_scopeId2}>H\xECnh \u1EA3nh</p>`);
                      _push3(ssrRenderComponent(_component_x_image, {
                        url: `${unref(config).apiURLFile}${item.url}`
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="flex gap-2 pt-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_x_form_button, {
                        onClick: ($event) => clearImage(index)
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`Ch\u1ECDn \u1EA3nh m\u1EDBi`);
                          } else {
                            return [
                              createTextVNode("Ch\u1ECDn \u1EA3nh m\u1EDBi")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                      _push3(ssrRenderComponent(_component_x_form_input, {
                        modelValue: item.imageTitle,
                        "onUpdate:modelValue": ($event) => item.imageTitle = $event,
                        label: "Ti\xEAu \u0111\u1EC1 cho \u1EA3nh",
                        name: "titleforimage",
                        placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1 \u1EA3nh",
                        class: "pt-2"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_x_form_image_picker, {
                        modelValue: item.image,
                        "onUpdate:modelValue": ($event) => item.image = $event,
                        name: "content-" + item.id,
                        label: "H\xECnh \u1EA3nh",
                        rules: "required",
                        required: ""
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_x_form_input, {
                        modelValue: item.imageTitle,
                        "onUpdate:modelValue": ($event) => item.imageTitle = $event,
                        label: "Ti\xEAu \u0111\u1EC1 cho \u1EA3nh",
                        name: "titleforimage",
                        placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1 \u1EA3nh"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "border rounded-lg p-3 relative bg-main shadow-sm flex flex-col gap-2" }, [
                      createVNode("div", { class: "flex justify-end gap-2 top-2 right-2" }, [
                        createVNode("span", { class: "drag-handle cursor-move" }, [
                          createVNode(_component_Icon, {
                            name: "heroicons-solid:bars-4",
                            class: "text-black w-5 h-5 opacity-70"
                          })
                        ]),
                        createVNode("span", { class: "drag-handle cursor-move" }, [
                          createVNode(_component_Icon, {
                            name: "heroicons-solid:x-mark",
                            class: "text-primary w-5 h-5",
                            onClick: ($event) => removeItem(index)
                          }, null, 8, ["onClick"])
                        ])
                      ]),
                      item.type === "content-in-dam" ? (openBlock(), createBlock(_component_x_form_text_area, {
                        key: 0,
                        modelValue: item.data,
                        "onUpdate:modelValue": ($event) => item.data = $event,
                        label: "N\u1ED9i dung In \u0110\u1EADm",
                        name: "content" + item.id,
                        rules: "required",
                        required: "",
                        placeholder: "Nh\u1EADp n\u1ED9i dung",
                        rows: 6
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "name"])) : createCommentVNode("", true),
                      item.type === "content" ? (openBlock(), createBlock(_component_x_form_text_area, {
                        key: 1,
                        modelValue: item.data,
                        "onUpdate:modelValue": ($event) => item.data = $event,
                        label: "N\u1ED9i dung chi ti\u1EBFt",
                        name: "content-" + item.id,
                        rules: "required",
                        required: "",
                        placeholder: "Nh\u1EADp n\u1ED9i dung",
                        rows: 6
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "name"])) : createCommentVNode("", true),
                      item.type === "image" ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "rounded-2xl border px-4 py-2 border-primary"
                      }, [
                        item.url ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("p", null, "H\xECnh \u1EA3nh"),
                          createVNode(_component_x_image, {
                            url: `${unref(config).apiURLFile}${item.url}`
                          }, null, 8, ["url"]),
                          createVNode("div", { class: "flex gap-2 pt-2" }, [
                            createVNode(_component_x_form_button, {
                              onClick: ($event) => clearImage(index)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Ch\u1ECDn \u1EA3nh m\u1EDBi")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          createVNode(_component_x_form_input, {
                            modelValue: item.imageTitle,
                            "onUpdate:modelValue": ($event) => item.imageTitle = $event,
                            label: "Ti\xEAu \u0111\u1EC1 cho \u1EA3nh",
                            name: "titleforimage",
                            placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1 \u1EA3nh",
                            class: "pt-2"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "name"])
                        ])) : (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode(_component_x_form_image_picker, {
                            modelValue: item.image,
                            "onUpdate:modelValue": ($event) => item.image = $event,
                            name: "content-" + item.id,
                            label: "H\xECnh \u1EA3nh",
                            rules: "required",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "name"]),
                          createVNode(_component_x_form_input, {
                            modelValue: item.imageTitle,
                            "onUpdate:modelValue": ($event) => item.imageTitle = $event,
                            label: "Ti\xEAu \u0111\u1EC1 cho \u1EA3nh",
                            name: "titleforimage",
                            placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1 \u1EA3nh"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "name"])
                        ]))
                      ])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="border border-1 p-2 box-border flex flex-col gap-4 w-[250px]"${_scopeId}><p${_scopeId}>Th\xEAm v\xE0o b\xE0i vi\u1EBFt</p>`);
            _push2(ssrRenderComponent(_component_x_form_button, {
              class: "w-full",
              theme: "primary",
              outline: "",
              icon: "heroicons-outline:bars-3",
              onClick: addContentInDam
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-bold font-robo text-subtitle"${_scopeId2}>Ti\xEAu \u0111\u1EC1</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-bold font-robo text-subtitle" }, "Ti\xEAu \u0111\u1EC1")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_form_button, {
              class: "w-full",
              theme: "primary",
              outline: "",
              icon: "heroicons-outline:bars-3",
              onClick: addContent
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-normal font-robo text-body"${_scopeId2}>N\u1ED9i dung</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-normal font-robo text-body" }, "N\u1ED9i dung")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_form_button, {
              class: "w-full",
              theme: "primary",
              icon: "heroicons-outline:photo",
              outline: "",
              onClick: addImage
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` H\xECnh \u1EA3nh `);
                } else {
                  return [
                    createTextVNode(" H\xECnh \u1EA3nh ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-2" }, [
                createVNode("div", { class: "w-full flex flex-col gap-4" }, [
                  createVNode(_component_x_form_select, {
                    modelValue: unref(formData).location,
                    "onUpdate:modelValue": ($event) => unref(formData).location = $event,
                    options: ("$newScope" in _ctx ? _ctx.$newScope : unref(__unimport_$newScope))().list,
                    label: "Tr\u1EF1c thu\u1ED9c",
                    name: "location",
                    filterable: false,
                    clearable: false,
                    required: "",
                    placeholder: "Tin t\u1EE9c - s\u1EF1 ki\u1EC7n tr\u1EF1c thu\u1ED9c c\u01A1 s\u1EDF n\xE0o"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                  createVNode(_component_x_form_select, {
                    modelValue: unref(formData).status,
                    "onUpdate:modelValue": ($event) => unref(formData).status = $event,
                    options: [
                      { label: "Ho\u1EA1t \u0111\u1ED9ng", value: "active" },
                      { label: "D\u1EEBng ho\u1EA1t \u0111\u1ED9ng", value: "unactive" }
                    ],
                    label: "Tr\u1EA1ng th\xE1i",
                    name: "status",
                    filterable: false,
                    clearable: false,
                    placeholder: "Ch\u1ECDn tr\u1EA1ng th\xE1i"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_x_form_input, {
                    modelValue: unref(formData).author,
                    "onUpdate:modelValue": ($event) => unref(formData).author = $event,
                    label: "T\xE1c gi\u1EA3",
                    name: "author",
                    placeholder: "T\xEAn t\xE1c gi\u1EA3"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_x_form_input, {
                    modelValue: unref(formData).title,
                    "onUpdate:modelValue": ($event) => unref(formData).title = $event,
                    label: "Ti\xEAu \u0111\u1EC1",
                    name: "title",
                    rules: "required",
                    required: "",
                    placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1 b\xE0i vi\u1EBFt"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_x_form_input, {
                    modelValue: unref(formData).subtitle,
                    "onUpdate:modelValue": ($event) => unref(formData).subtitle = $event,
                    label: "Ti\xEAu \u0111\u1EC1 ph\u1EE5",
                    name: "subtitle",
                    rules: "required",
                    required: "",
                    placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1 ph\u1EE5"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(unref(draggable), {
                    modelValue: unref(formData).contents,
                    "onUpdate:modelValue": ($event) => unref(formData).contents = $event,
                    handle: ".drag-handle",
                    "item-key": "id",
                    class: "space-y-4"
                  }, {
                    item: withCtx(({ element: item, index }) => [
                      createVNode("div", { class: "border rounded-lg p-3 relative bg-main shadow-sm flex flex-col gap-2" }, [
                        createVNode("div", { class: "flex justify-end gap-2 top-2 right-2" }, [
                          createVNode("span", { class: "drag-handle cursor-move" }, [
                            createVNode(_component_Icon, {
                              name: "heroicons-solid:bars-4",
                              class: "text-black w-5 h-5 opacity-70"
                            })
                          ]),
                          createVNode("span", { class: "drag-handle cursor-move" }, [
                            createVNode(_component_Icon, {
                              name: "heroicons-solid:x-mark",
                              class: "text-primary w-5 h-5",
                              onClick: ($event) => removeItem(index)
                            }, null, 8, ["onClick"])
                          ])
                        ]),
                        item.type === "content-in-dam" ? (openBlock(), createBlock(_component_x_form_text_area, {
                          key: 0,
                          modelValue: item.data,
                          "onUpdate:modelValue": ($event) => item.data = $event,
                          label: "N\u1ED9i dung In \u0110\u1EADm",
                          name: "content" + item.id,
                          rules: "required",
                          required: "",
                          placeholder: "Nh\u1EADp n\u1ED9i dung",
                          rows: 6
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "name"])) : createCommentVNode("", true),
                        item.type === "content" ? (openBlock(), createBlock(_component_x_form_text_area, {
                          key: 1,
                          modelValue: item.data,
                          "onUpdate:modelValue": ($event) => item.data = $event,
                          label: "N\u1ED9i dung chi ti\u1EBFt",
                          name: "content-" + item.id,
                          rules: "required",
                          required: "",
                          placeholder: "Nh\u1EADp n\u1ED9i dung",
                          rows: 6
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "name"])) : createCommentVNode("", true),
                        item.type === "image" ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "rounded-2xl border px-4 py-2 border-primary"
                        }, [
                          item.url ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("p", null, "H\xECnh \u1EA3nh"),
                            createVNode(_component_x_image, {
                              url: `${unref(config).apiURLFile}${item.url}`
                            }, null, 8, ["url"]),
                            createVNode("div", { class: "flex gap-2 pt-2" }, [
                              createVNode(_component_x_form_button, {
                                onClick: ($event) => clearImage(index)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Ch\u1ECDn \u1EA3nh m\u1EDBi")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            createVNode(_component_x_form_input, {
                              modelValue: item.imageTitle,
                              "onUpdate:modelValue": ($event) => item.imageTitle = $event,
                              label: "Ti\xEAu \u0111\u1EC1 cho \u1EA3nh",
                              name: "titleforimage",
                              placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1 \u1EA3nh",
                              class: "pt-2"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "name"])
                          ])) : (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode(_component_x_form_image_picker, {
                              modelValue: item.image,
                              "onUpdate:modelValue": ($event) => item.image = $event,
                              name: "content-" + item.id,
                              label: "H\xECnh \u1EA3nh",
                              rules: "required",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "name"]),
                            createVNode(_component_x_form_input, {
                              modelValue: item.imageTitle,
                              "onUpdate:modelValue": ($event) => item.imageTitle = $event,
                              label: "Ti\xEAu \u0111\u1EC1 cho \u1EA3nh",
                              name: "titleforimage",
                              placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1 \u1EA3nh"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "name"])
                          ]))
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "border border-1 p-2 box-border flex flex-col gap-4 w-[250px]" }, [
                  createVNode("p", null, "Th\xEAm v\xE0o b\xE0i vi\u1EBFt"),
                  createVNode(_component_x_form_button, {
                    class: "w-full",
                    theme: "primary",
                    outline: "",
                    icon: "heroicons-outline:bars-3",
                    onClick: addContentInDam
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "font-bold font-robo text-subtitle" }, "Ti\xEAu \u0111\u1EC1")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_x_form_button, {
                    class: "w-full",
                    theme: "primary",
                    outline: "",
                    icon: "heroicons-outline:bars-3",
                    onClick: addContent
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "font-normal font-robo text-body" }, "N\u1ED9i dung")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_x_form_button, {
                    class: "w-full",
                    theme: "primary",
                    icon: "heroicons-outline:photo",
                    outline: "",
                    onClick: addImage
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" H\xECnh \u1EA3nh ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/tin-tuc-su-kien/ignore/action.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const action = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));

export { __unimport_$newScope as _, _sfc_main as a, action as b };
//# sourceMappingURL=action-CDYz450y.mjs.map
