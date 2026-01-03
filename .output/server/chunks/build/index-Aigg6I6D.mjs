import { _ as _sfc_main$1 } from './content-place-geFh5xeL.mjs';
import { _ as _sfc_main$2 } from './space-R3NPDNyo.mjs';
import { _ as _sfc_main$3 } from './title-Li4mZZSg.mjs';
import { _ as _sfc_main$4 } from './index-Cy0o-wGa.mjs';
import { _ as __nuxt_component_1 } from './input-Y7qHVD3Y.mjs';
import { _ as _sfc_main$5 } from './text-area-DmygkBmh.mjs';
import { _ as _sfc_main$6 } from './button-BdQnFGJN.mjs';
import { ref, mergeProps, withCtx, unref, createTextVNode, createVNode, createElementBlock, openBlock, createElementVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { $ as $api, a as $url } from './_url-2PNiK-Su.mjs';
import 'vee-validate';
import './server.mjs';
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
import 'pinia';
import 'vue-router';
import '@iconify/vue';
import 'deep-pick-omit';
import 'vue-toastification';
import '@vee-validate/rules';
import './_store-Ndlczi3l.mjs';
import '@vue/shared';
import './asyncData-DJ0PUy8X.mjs';
import 'perfect-debounce';

const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "data-name": "Layer 2",
  viewBox: "0 0 25 25"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
    createElementVNode("g", { "data-name": "Layer 1" }, [
      createElementVNode("path", { d: "M14.47.16 13.24 0h-1.56C5.51.39.39 5.55.01 11.72c-.03.51.02 1.05 0 1.56l.22 1.56C2 24.08 13.16 28.22 20.49 22.11c8.26-6.87 4.54-20.23-6.02-21.95m2.73 12.37c-.81 1.52-1.83 3.07-2.7 4.57-.69 1.18-1.34 2.39-2.07 3.55-.73-1.19-1.41-2.43-2.12-3.64-.88-1.52-1.99-3.16-2.77-4.7-1.79-3.56.74-7.67 4.65-7.9 4.27-.25 6.99 4.37 5 8.12Z" }),
      createElementVNode("path", { d: "M10.43 7.78c-2.35 2.41.97 6.2 3.67 4.03 2.97-2.39-1.04-6.72-3.67-4.03" })
    ], -1)
  ])]);
}
const LocationIcon = { render: render$2 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "data-name": "Layer 2",
  viewBox: "0 0 25 25"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      d: "M.01 1.8C.12.9.95.12 1.85.05c1.58.09 3.31-.14 4.86 0 .91.08 1.74.77 1.86 1.69s.07 1.79.22 2.7c.21 1.25 1 2.63.28 3.77l-2.28 3.03c-.03.13.59 1.14.7 1.32 1.33 2.15 3.05 3.82 5.22 5.11.15.09.87.52.98.54.04 0 .07 0 .11-.02l2.96-2.26c1.15-.73 2.76.14 4.04.33 1.67.24 3.86-.26 4.16 2.03-.11 1.56.15 3.33 0 4.87-.09.9-.84 1.72-1.75 1.83h-1.22l-2.45-.25C9.41 23.25 1.33 14.92.17 4.74L.01 3.01c.04-.38-.04-.84 0-1.21",
      "data-name": "Layer 1",
      style: { "fill": "#4c2014" }
    }, null, -1)
  ])]);
}
const PhoneIcon = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "data-name": "Layer 2",
  viewBox: "0 0 24.92 19.18"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("g", { "data-name": "Layer 1" }, [
      createElementVNode("path", { d: "M24.84 4.33c-.03-.47-.22-1.25-.44-1.66-.08-.14-.16-.34-.35-.2l-7.8 7.75c-2.25 1.79-5.34 1.8-7.59 0L.86 2.47s-.09-.06-.15-.05c-.28.07-.63 1.59-.63 1.9.2 3.43-.26 7.15 0 10.55.16 2.06 1.79 3.83 3.81 4.21 5.71.11 11.47.13 17.18 0 2.05-.41 3.6-2.17 3.77-4.25-.18-3.43.23-7.1 0-10.5" }),
      createElementVNode("path", { d: "M15.18 8.77 22.91 1c0-.08-.01-.1-.06-.16-.07-.09-.62-.37-.75-.43-.5-.22-1.04-.35-1.58-.41L4.27.02c-.81.1-1.56.38-2.22.85L2.02 1l7.7 7.75a4.235 4.235 0 0 0 5.46.02" })
    ], -1)
  ])]);
}
const MailIcon = { render };
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = ref({
      name: "",
      phone: "",
      email: "",
      description: ""
    });
    const isSubmit = ref(false);
    const onSubmit = async () => {
      var _a;
      if (isSubmit.value) {
        return;
      }
      isSubmit.value = true;
      const response = await $api($url.contact.request, {
        body: formData.value
      });
      const { data, success } = ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.value) || {
        data: null,
        success: false
      };
      if (success) {
        formData.value = {
          name: "",
          phone: "",
          email: "",
          description: ""
        };
      }
      isSubmit.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_content_place = _sfc_main$1;
      const _component_x_space = _sfc_main$2;
      const _component_x_title = _sfc_main$3;
      const _component_x_form = _sfc_main$4;
      const _component_x_form_input = __nuxt_component_1;
      const _component_x_form_text_area = _sfc_main$5;
      const _component_x_button = _sfc_main$6;
      _push(ssrRenderComponent(_component_x_content_place, mergeProps({ class: "font-robo text-primary" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_title, {
              title: "LI\xCAN H\u1EC6",
              variant: "bottom",
              "class-name": "font-bold text-14"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-col laptop:flex-row gap-[40px]"${_scopeId}><div class="laptop:w-[35%]"${_scopeId}><p class="text-subtitle font-bold text-primary"${_scopeId}>Th\xF4ng tin li\xEAn h\u1EC7</p>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 50 }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-col gap-[30px] text-body font-normal"${_scopeId}><p${_scopeId}> Ban qu\u1EA3n l\xFD Chuy\xEAn trang th\xF4ng tin \u0111i\u1EC7n t\u1EED c\u1ED3ng chi\xEAng t\u1EC9nh L\xE2m \u0110\u1ED3ng </p><div class="flex items-center gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(LocationIcon), { class: "h-[25px] w-6 laptop:w-8 laptop:h-[35px] fill-primary" }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}> Ph\xF2ng v\u0103n h\xF3a x\xE3 h\u1ED9i x\xE3 L\u1EA1c D\u01B0\u01A1ng </p></div><div class="flex items-center gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhoneIcon), { class: "h-6 w-6 laptop:w-8 laptop:h-8" }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>0969 856 159</p></div><div class="flex items-center gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(MailIcon), { class: "h-6 w-6 laptop:w-8 laptop:h-8 fill-primary" }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>haint2.lacduong@lamdong.gov.vn</p></div></div></div><div class="laptop:w-[65%]"${_scopeId}><p class="text-subtitle font-bold text-primary"${_scopeId}>G\u1EEDi y\xEAu c\u1EA7u li\xEAn h\u1EC7</p>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 50 }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_x_form, {
              submitText: "L\u01B0u",
              "handle-error": false,
              "show-button": false,
              onSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-5 tablet:gap-10"${_scopeId2}><div class="flex flex-col tablet:flex-row gap-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_x_form_input, {
                    modelValue: unref(formData).name,
                    "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                    label: "H\u1ECD v\xE0 t\xEAn",
                    name: "name",
                    rules: "required",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_x_form_input, {
                    modelValue: unref(formData).phone,
                    "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                    label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
                    name: "phone",
                    rules: "required",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_x_form_input, {
                    modelValue: unref(formData).email,
                    "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                    label: "Email",
                    name: "email",
                    rules: "required",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_x_form_text_area, {
                    modelValue: unref(formData).description,
                    "onUpdate:modelValue": ($event) => unref(formData).description = $event,
                    label: "N\u1ED9i dung",
                    name: "description",
                    rules: "required",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_x_space, { height: 60 }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_x_button, {
                    theme: "primary",
                    type: "submit",
                    uppercase: false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`G\u1EEDi y\xEAu c\u1EA7u`);
                      } else {
                        return [
                          createTextVNode("G\u1EEDi y\xEAu c\u1EA7u")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-5 tablet:gap-10" }, [
                      createVNode("div", { class: "flex flex-col tablet:flex-row gap-5" }, [
                        createVNode(_component_x_form_input, {
                          modelValue: unref(formData).name,
                          "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                          label: "H\u1ECD v\xE0 t\xEAn",
                          name: "name",
                          rules: "required",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_x_form_input, {
                          modelValue: unref(formData).phone,
                          "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                          label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
                          name: "phone",
                          rules: "required",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode(_component_x_form_input, {
                        modelValue: unref(formData).email,
                        "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                        label: "Email",
                        name: "email",
                        rules: "required",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_x_form_text_area, {
                        modelValue: unref(formData).description,
                        "onUpdate:modelValue": ($event) => unref(formData).description = $event,
                        label: "N\u1ED9i dung",
                        name: "description",
                        rules: "required",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode(_component_x_space, { height: 60 }),
                    createVNode("div", { class: "flex justify-end" }, [
                      createVNode(_component_x_button, {
                        theme: "primary",
                        type: "submit",
                        uppercase: false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("G\u1EEDi y\xEAu c\u1EA7u")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 80 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_x_space, { height: 40 }),
              createVNode(_component_x_title, {
                title: "LI\xCAN H\u1EC6",
                variant: "bottom",
                "class-name": "font-bold text-14"
              }),
              createVNode(_component_x_space, { height: 40 }),
              createVNode("div", { class: "flex flex-col laptop:flex-row gap-[40px]" }, [
                createVNode("div", { class: "laptop:w-[35%]" }, [
                  createVNode("p", { class: "text-subtitle font-bold text-primary" }, "Th\xF4ng tin li\xEAn h\u1EC7"),
                  createVNode(_component_x_space, { height: 50 }),
                  createVNode("div", { class: "flex flex-col gap-[30px] text-body font-normal" }, [
                    createVNode("p", null, " Ban qu\u1EA3n l\xFD Chuy\xEAn trang th\xF4ng tin \u0111i\u1EC7n t\u1EED c\u1ED3ng chi\xEAng t\u1EC9nh L\xE2m \u0110\u1ED3ng "),
                    createVNode("div", { class: "flex items-center gap-5" }, [
                      createVNode(unref(LocationIcon), { class: "h-[25px] w-6 laptop:w-8 laptop:h-[35px] fill-primary" }),
                      createVNode("p", null, " Ph\xF2ng v\u0103n h\xF3a x\xE3 h\u1ED9i x\xE3 L\u1EA1c D\u01B0\u01A1ng ")
                    ]),
                    createVNode("div", { class: "flex items-center gap-5" }, [
                      createVNode(unref(PhoneIcon), { class: "h-6 w-6 laptop:w-8 laptop:h-8" }),
                      createVNode("p", null, "0969 856 159")
                    ]),
                    createVNode("div", { class: "flex items-center gap-5" }, [
                      createVNode(unref(MailIcon), { class: "h-6 w-6 laptop:w-8 laptop:h-8 fill-primary" }),
                      createVNode("p", null, "haint2.lacduong@lamdong.gov.vn")
                    ])
                  ])
                ]),
                createVNode("div", { class: "laptop:w-[65%]" }, [
                  createVNode("p", { class: "text-subtitle font-bold text-primary" }, "G\u1EEDi y\xEAu c\u1EA7u li\xEAn h\u1EC7"),
                  createVNode(_component_x_space, { height: 50 }),
                  createVNode("div", null, [
                    createVNode(_component_x_form, {
                      submitText: "L\u01B0u",
                      "handle-error": false,
                      "show-button": false,
                      onSubmit
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-col gap-5 tablet:gap-10" }, [
                          createVNode("div", { class: "flex flex-col tablet:flex-row gap-5" }, [
                            createVNode(_component_x_form_input, {
                              modelValue: unref(formData).name,
                              "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                              label: "H\u1ECD v\xE0 t\xEAn",
                              name: "name",
                              rules: "required",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_x_form_input, {
                              modelValue: unref(formData).phone,
                              "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                              label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
                              name: "phone",
                              rules: "required",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode(_component_x_form_input, {
                            modelValue: unref(formData).email,
                            "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                            label: "Email",
                            name: "email",
                            rules: "required",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_x_form_text_area, {
                            modelValue: unref(formData).description,
                            "onUpdate:modelValue": ($event) => unref(formData).description = $event,
                            label: "N\u1ED9i dung",
                            name: "description",
                            rules: "required",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode(_component_x_space, { height: 60 }),
                        createVNode("div", { class: "flex justify-end" }, [
                          createVNode(_component_x_button, {
                            theme: "primary",
                            type: "submit",
                            uppercase: false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("G\u1EEDi y\xEAu c\u1EA7u")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              createVNode(_component_x_space, { height: 80 })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lien-he/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Aigg6I6D.mjs.map
