import { _ as _sfc_main$1 } from './content-place-geFh5xeL.mjs';
import { _ as _sfc_main$2 } from './space-R3NPDNyo.mjs';
import { _ as _sfc_main$3 } from './image-C4ecIkOA.mjs';
import { _ as _sfc_main$4 } from './button-Cryksw8w.mjs';
import { _ as _sfc_main$5 } from './image-picker-CTSdMzot.mjs';
import { ref, withCtx, unref, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { v4 } from 'uuid';
import { c as useRuntimeConfig } from './server.mjs';
import { $ as $api, a as $url } from './_url-Bg2mcYq_.mjs';
import { $ as $lodash } from './index-CtS2E8qT.mjs';
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
import './v3-CjX-H-q3.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './index-CyZG15Sy.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-BGFq45PL.mjs';
import 'perfect-debounce';
import 'vee-validate';
import 'cropperjs';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';
import 'vue-toastification';
import '@vee-validate/rules';
import './_store-Ndlczi3l.mjs';
import '@vue/shared';
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

const _sfc_main = {
  __name: "update-page-image",
  __ssrInlineRender: true,
  props: {
    title: { type: String },
    type: { type: String },
    width: {
      type: Number,
      width: 900
    },
    height: {
      type: Number,
      width: 600
    }
  },
  setup(__props) {
    const config = useRuntimeConfig().public;
    const item = ref({
      id: v4(),
      image: null
    });
    const props = __props;
    const clearImage = () => {
      item.value = {
        id: v4(),
        image: null
      };
    };
    const handleSave = async () => {
      var _a;
      const fd = new FormData();
      fd.append("type", props.type);
      let file = item.value.image;
      let fileName = `iimage-page`;
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
      fd.append(`image`, file, fileName);
      const response = await $api($url.admin.image_page.update, { body: fd }, true);
      const { data, success } = ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.value) || {
        data: null,
        success: false
      };
      if (success) {
        loadData();
      }
    };
    const loadData = $lodash.debounce(async () => {
      var _a;
      const response = await $api($url.admin.image_page.get, { body: { type: props.type } });
      const { data, success } = ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.value) || {
        data: null,
        success: false
      };
      if (success) {
        item.value.url = data.url;
      }
    }, 300);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_content_place = _sfc_main$1;
      const _component_x_space = _sfc_main$2;
      const _component_x_image = _sfc_main$3;
      const _component_x_form_button = _sfc_main$4;
      const _component_x_form_image_picker = _sfc_main$5;
      _push(ssrRenderComponent(_component_x_content_place, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
            _push2(`<div class="mb-8"${_scopeId}><h1 class="text-subtitle font-bold text-primary"${_scopeId}>${ssrInterpolate(__props.title)}</h1>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
            _push2(`<div class="laptop:w-1/2"${_scopeId}>`);
            if (unref(item).url) {
              _push2(`<div${_scopeId}><p${_scopeId}>H\xECnh \u1EA3nh</p>`);
              _push2(ssrRenderComponent(_component_x_image, {
                url: `${unref(config).apiURLFile}${unref(item).url}`,
                height: __props.height,
                width: __props.width
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex gap-2 pt-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_x_form_button, {
                onClick: ($event) => clearImage()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Ch\u1ECDn \u1EA3nh m\u1EDBi`);
                  } else {
                    return [
                      createTextVNode("Ch\u1ECDn \u1EA3nh m\u1EDBi")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_x_form_image_picker, {
                modelValue: unref(item).image,
                "onUpdate:modelValue": ($event) => unref(item).image = $event,
                name: "content-" + unref(item).id,
                label: "H\xECnh \u1EA3nh",
                rules: "required",
                required: "",
                height: __props.height,
                width: __props.width,
                labelConfirm: "L\u01B0u \u1EA3nh",
                onChange: handleSave
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(_component_x_space, { height: 40 }),
              createVNode("div", { class: "mb-8" }, [
                createVNode("h1", { class: "text-subtitle font-bold text-primary" }, toDisplayString(__props.title), 1),
                createVNode(_component_x_space, { height: 40 }),
                createVNode("div", { class: "laptop:w-1/2" }, [
                  unref(item).url ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("p", null, "H\xECnh \u1EA3nh"),
                    createVNode(_component_x_image, {
                      url: `${unref(config).apiURLFile}${unref(item).url}`,
                      height: __props.height,
                      width: __props.width
                    }, null, 8, ["url", "height", "width"]),
                    createVNode("div", { class: "flex gap-2 pt-2" }, [
                      createVNode(_component_x_form_button, {
                        onClick: ($event) => clearImage()
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Ch\u1ECDn \u1EA3nh m\u1EDBi")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_component_x_form_image_picker, {
                      modelValue: unref(item).image,
                      "onUpdate:modelValue": ($event) => unref(item).image = $event,
                      name: "content-" + unref(item).id,
                      label: "H\xECnh \u1EA3nh",
                      rules: "required",
                      required: "",
                      height: __props.height,
                      width: __props.width,
                      labelConfirm: "L\u01B0u \u1EA3nh",
                      onChange: handleSave
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "height", "width"])
                  ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/trang-chu/ignore/update-page-image.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=update-page-image-D-KyAGVU.mjs.map
