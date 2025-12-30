import { _ as _sfc_main$1 } from './modal-action-B5hCZoQe.mjs';
import { _ as _sfc_main$2 } from './select-CrPyhvG3.mjs';
import { _ as __nuxt_component_1 } from './input-Cox1YUul.mjs';
import { _ as _sfc_main$3 } from './text-area-DmygkBmh.mjs';
import { _ as _sfc_main$4 } from './image-C4ecIkOA.mjs';
import { _ as _sfc_main$5 } from './button-Cp5cbQ9b.mjs';
import { _ as _sfc_main$6 } from './image-picker-BXlp1rwn.mjs';
import { c as checkPermission } from './permission-check-YYJosWmV.mjs';
import { ref, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, createBlock, createCommentVNode, openBlock, createElementBlock, createElementVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import draggable from 'vuedraggable';
import { $ as $lodash } from './index-CtS2E8qT.mjs';
import { v4 } from 'uuid';
import { c as useRuntimeConfig } from './server.mjs';
import { $ as $api, a as $url } from './_url-Bg2mcYq_.mjs';
import './index-CyZG15Sy.mjs';
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
import './index-Cy0o-wGa.mjs';
import 'vee-validate';
import 'cropperjs';
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
    value: "xa-bao-lam-3",
    permission: "xa-bao-lam-3"
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
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", { d: "M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h160v160c0 17.7 14.3 32 32 32s32-14.3 32-32V288h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H256z" }, null, -1)
  ])]);
}
const PlusIcon = { render: render$2 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", { d: "M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32" }, null, -1)
  ])]);
}
const BarsIcon = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 384 512"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", { d: "M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l137.3-137.4 137.4 137.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256l137.3-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7z" }, null, -1)
  ])]);
}
const XmarkIcon = { render };
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
      formData.value.contents.push({
        id: v4(),
        type: "content",
        data: ""
      });
    };
    const addContentInDam = () => {
      formData.value.contents.push({
        id: v4(),
        type: "content-in-dam",
        data: ""
      });
    };
    const addImage = () => {
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
          const response = await $api($url.admin.news.create, { body: fd }, true);
          const { data, success } = ((_a2 = response == null ? void 0 : response.data) == null ? void 0 : _a2.value) || {
            data: null,
            success: false
          };
          if (success) {
            reset();
            emits("refresh");
            close();
          }
        } else {
          const fd = await buildFormData(formData.value);
          const response = await $api(
            $url.admin.news.update,
            {
              body: fd,
              uriParams: {
                ":id": formData.value._id
              }
            },
            true
          );
          const { data, success } = ((_b2 = response == null ? void 0 : response.data) == null ? void 0 : _b2.value) || {
            data: null,
            success: false
          };
          if (success) {
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
      const _component_x_modal_action = _sfc_main$1;
      const _component_x_form_select = _sfc_main$2;
      const _component_x_form_input = __nuxt_component_1;
      const _component_x_form_text_area = _sfc_main$3;
      const _component_x_image = _sfc_main$4;
      const _component_x_form_button = _sfc_main$5;
      const _component_x_form_image_picker = _sfc_main$6;
      _push(ssrRenderComponent(_component_x_modal_action, mergeProps({
        visible: unref(isVisible),
        "onUpdate:visible": ($event) => isRef(isVisible) ? isVisible.value = $event : null,
        title: "Tin t\u1EE9c - s\u1EF1 ki\u1EC7n",
        loading: unref(isLoading),
        onSubmit: handleSubmit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-2 h-full max-h-[70vh]"${_scopeId}><div class="flex-1 flex flex-col min-w-0"${_scopeId}><div class="flex-1 overflow-y-auto pr-4"${_scopeId}><div class="w-full flex flex-col gap-4"${_scopeId}>`);
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
                  _push3(ssrRenderComponent(unref(BarsIcon), { class: "text-black w-5 h-5 opacity-70" }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="drag-handle cursor-pointer"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(XmarkIcon), {
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
                        placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1 \u1EA3nh",
                        name: "title-image-" + item.id,
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
                        placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1 \u1EA3nh",
                        name: "title-image-" + item.id
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
                          createVNode(unref(BarsIcon), { class: "text-black w-5 h-5 opacity-70" })
                        ]),
                        createVNode("span", { class: "drag-handle cursor-pointer" }, [
                          createVNode(unref(XmarkIcon), {
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
                            placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1 \u1EA3nh",
                            name: "title-image-" + item.id,
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
                            placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1 \u1EA3nh",
                            name: "title-image-" + item.id
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "name"])
                        ]))
                      ])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="border border-1 p-2 box-border flex flex-col gap-4 w-[250px] flex-shrink-0"${_scopeId}><p${_scopeId}>Th\xEAm v\xE0o b\xE0i vi\u1EBFt</p>`);
            _push2(ssrRenderComponent(_component_x_form_button, {
              class: "w-full",
              theme: "primary",
              outline: "",
              icon: "heroicons-outline:plus",
              onClick: addContent
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(PlusIcon), { class: "h-5 w-5 fill-primary" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(PlusIcon), { class: "h-5 w-5 fill-primary" })
                  ];
                }
              }),
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
              outline: "",
              icon: "heroicons-outline:plus",
              onClick: addContentInDam
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(PlusIcon), { class: "h-5 w-5 fill-primary" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(PlusIcon), { class: "h-5 w-5 fill-primary" })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-robo text-body"${_scopeId2}>N\u1ED9i dung in \u0111\u1EADm</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-robo text-body" }, "N\u1ED9i dung in \u0111\u1EADm")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_form_button, {
              class: "w-full",
              theme: "primary",
              icon: "heroicons-outline:plus",
              outline: "",
              onClick: addImage
            }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(PlusIcon), { class: "h-5 w-5 fill-primary" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(PlusIcon), { class: "h-5 w-5 fill-primary" })
                  ];
                }
              }),
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
              createVNode("div", { class: "flex gap-2 h-full max-h-[70vh]" }, [
                createVNode("div", { class: "flex-1 flex flex-col min-w-0" }, [
                  createVNode("div", { class: "flex-1 overflow-y-auto pr-4" }, [
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
                                createVNode(unref(BarsIcon), { class: "text-black w-5 h-5 opacity-70" })
                              ]),
                              createVNode("span", { class: "drag-handle cursor-pointer" }, [
                                createVNode(unref(XmarkIcon), {
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
                                  placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1 \u1EA3nh",
                                  name: "title-image-" + item.id,
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
                                  placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1 \u1EA3nh",
                                  name: "title-image-" + item.id
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "name"])
                              ]))
                            ])) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ]),
                createVNode("div", { class: "border border-1 p-2 box-border flex flex-col gap-4 w-[250px] flex-shrink-0" }, [
                  createVNode("p", null, "Th\xEAm v\xE0o b\xE0i vi\u1EBFt"),
                  createVNode(_component_x_form_button, {
                    class: "w-full",
                    theme: "primary",
                    outline: "",
                    icon: "heroicons-outline:plus",
                    onClick: addContent
                  }, {
                    icon: withCtx(() => [
                      createVNode(unref(PlusIcon), { class: "h-5 w-5 fill-primary" })
                    ]),
                    default: withCtx(() => [
                      createVNode("span", { class: "font-normal font-robo text-body" }, "N\u1ED9i dung")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_x_form_button, {
                    class: "w-full",
                    theme: "primary",
                    outline: "",
                    icon: "heroicons-outline:plus",
                    onClick: addContentInDam
                  }, {
                    icon: withCtx(() => [
                      createVNode(unref(PlusIcon), { class: "h-5 w-5 fill-primary" })
                    ]),
                    default: withCtx(() => [
                      createVNode("span", { class: "font-robo text-body" }, "N\u1ED9i dung in \u0111\u1EADm")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_x_form_button, {
                    class: "w-full",
                    theme: "primary",
                    icon: "heroicons-outline:plus",
                    outline: "",
                    onClick: addImage
                  }, {
                    icon: withCtx(() => [
                      createVNode(unref(PlusIcon), { class: "h-5 w-5 fill-primary" })
                    ]),
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
//# sourceMappingURL=action-BPcJvB7i.mjs.map
