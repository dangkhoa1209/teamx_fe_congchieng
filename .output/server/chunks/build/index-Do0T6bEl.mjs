import { _ as _sfc_main$1 } from './content-place-geFh5xeL.mjs';
import { _ as _sfc_main$2 } from './space-CZvezhho.mjs';
import { _ as _sfc_main$3 } from './title-Li4mZZSg.mjs';
import __nuxt_component_1 from './index-C08a6tCK.mjs';
import { _ as _sfc_main$4 } from './index-XektXWz7.mjs';
import { _ as __nuxt_component_5 } from './input-BXuQFPXT.mjs';
import { _ as _sfc_main$5 } from './text-area-BfIJ74Ab.mjs';
import { _ as _sfc_main$6 } from './button-Z_YvHZ9u.mjs';
import { ref, mergeProps, withCtx, unref, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
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
import 'deep-pick-omit';
import 'vue-toastification';
import 'vee-validate';
import '@vee-validate/rules';
import './v3-CjX-H-q3.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './asyncData-DmOfOvfO.mjs';
import 'perfect-debounce';
import './_toast-BM3znq4X.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = ref({
      name: "",
      phone: "",
      email: "",
      content: ""
    });
    const onSubmit = () => {
      console.log("sdfsf");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_content_place = _sfc_main$1;
      const _component_x_space = _sfc_main$2;
      const _component_x_title = _sfc_main$3;
      const _component_Icon = __nuxt_component_1;
      const _component_x_form = _sfc_main$4;
      const _component_x_form_input = __nuxt_component_5;
      const _component_x_form_text_area = _sfc_main$5;
      const _component_x_button = _sfc_main$6;
      _push(ssrRenderComponent(_component_x_content_place, mergeProps({ class: "font-robo" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_title, {
              title: "LI\xCAN H\u1EC6",
              variant: "bottom",
              "class-name": "font-bold text-subtitle"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-col laptop:flex-row gap-[40px]"${_scopeId}><div class="laptop:w-[35%]"${_scopeId}><p class="text-subtitle font-bold"${_scopeId}>Th\xF4ng tin li\xEAn h\u1EC7</p>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 50 }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-col gap-[40px] text-body font-normal"${_scopeId}><p${_scopeId}> Ban Bi\xEAn t\u1EADp Chuy\xEAn Trang th\xF4ng tin \u0111i\u1EC7n t\u1EED - <br${_scopeId}> V\u0103n h\xF3a, Th\u1EC3 thao v\xE0 Du l\u1ECBch t\u1EC9nh L\xE2m \u0110\u1ED3ng </p><div class="flex items-center gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "heroicons-solid:map-pin",
              class: "text-primary w-8 h-8"
            }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}> T\u1EA7ng 6 khu 9 t\u1EA7ng, s\u1ED1 36 Tr\u1EA7n Ph\xFA, <br${_scopeId}> ph\u01B0\u1EDDng Xu\xE2n H\u01B0\u01A1ng - \u0110\xE0 L\u1EA1t, t\u1EC9nh L\xE2m \u0110\u1ED3ng </p></div><div class="flex items-center gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "heroicons-solid:phone",
              class: "text-primary w-8 h-8"
            }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>(0263) 3540881</p></div><div class="flex items-center gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "heroicons-solid:phone",
              class: "text-primary w-8 h-8"
            }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>(0263) 3833086</p></div><div class="flex items-center gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "heroicons-solid:envelope",
              class: "text-primary w-8 h-8"
            }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>svhttdl.lamdong.gov.vn</p></div></div></div><div class="laptop:w-[65%]"${_scopeId}><p class="text-subtitle font-bold"${_scopeId}>G\u1EEDi y\xEAu c\u1EA7u li\xEAn h\u1EC7</p>`);
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
                  _push3(`<div class="flex flex-col gap-10"${_scopeId2}><div class="flex gap-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_x_form_input, {
                    modelValue: unref(formData).name,
                    "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                    label: "H\u1ECD v\xE0 t\xEAn",
                    name: "name",
                    rules: "required",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_x_form_input, {
                    modelValue: unref(formData).name,
                    "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                    label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
                    name: "phone",
                    rules: "required",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_x_form_input, {
                    modelValue: unref(formData).name,
                    "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                    label: "Email",
                    name: "email",
                    rules: "required",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_x_form_text_area, {
                    modelValue: unref(formData).des,
                    "onUpdate:modelValue": ($event) => unref(formData).des = $event,
                    label: "N\u1ED9i dung",
                    name: "content",
                    rules: "required",
                    required: ""
                  }, null, _parent3, _scopeId2));
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
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-10" }, [
                      createVNode("div", { class: "flex gap-5" }, [
                        createVNode(_component_x_form_input, {
                          modelValue: unref(formData).name,
                          "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                          label: "H\u1ECD v\xE0 t\xEAn",
                          name: "name",
                          rules: "required",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_x_form_input, {
                          modelValue: unref(formData).name,
                          "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                          label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
                          name: "phone",
                          rules: "required",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode(_component_x_form_input, {
                        modelValue: unref(formData).name,
                        "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                        label: "Email",
                        name: "email",
                        rules: "required",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_x_form_text_area, {
                        modelValue: unref(formData).des,
                        "onUpdate:modelValue": ($event) => unref(formData).des = $event,
                        label: "N\u1ED9i dung",
                        name: "content",
                        rules: "required",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
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
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 60 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_x_space, { height: 40 }),
              createVNode(_component_x_title, {
                title: "LI\xCAN H\u1EC6",
                variant: "bottom",
                "class-name": "font-bold text-subtitle"
              }),
              createVNode(_component_x_space, { height: 40 }),
              createVNode("div", { class: "flex flex-col laptop:flex-row gap-[40px]" }, [
                createVNode("div", { class: "laptop:w-[35%]" }, [
                  createVNode("p", { class: "text-subtitle font-bold" }, "Th\xF4ng tin li\xEAn h\u1EC7"),
                  createVNode(_component_x_space, { height: 50 }),
                  createVNode("div", { class: "flex flex-col gap-[40px] text-body font-normal" }, [
                    createVNode("p", null, [
                      createTextVNode(" Ban Bi\xEAn t\u1EADp Chuy\xEAn Trang th\xF4ng tin \u0111i\u1EC7n t\u1EED - "),
                      createVNode("br"),
                      createTextVNode(" V\u0103n h\xF3a, Th\u1EC3 thao v\xE0 Du l\u1ECBch t\u1EC9nh L\xE2m \u0110\u1ED3ng ")
                    ]),
                    createVNode("div", { class: "flex items-center gap-5" }, [
                      createVNode(_component_Icon, {
                        name: "heroicons-solid:map-pin",
                        class: "text-primary w-8 h-8"
                      }),
                      createVNode("p", null, [
                        createTextVNode(" T\u1EA7ng 6 khu 9 t\u1EA7ng, s\u1ED1 36 Tr\u1EA7n Ph\xFA, "),
                        createVNode("br"),
                        createTextVNode(" ph\u01B0\u1EDDng Xu\xE2n H\u01B0\u01A1ng - \u0110\xE0 L\u1EA1t, t\u1EC9nh L\xE2m \u0110\u1ED3ng ")
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center gap-5" }, [
                      createVNode(_component_Icon, {
                        name: "heroicons-solid:phone",
                        class: "text-primary w-8 h-8"
                      }),
                      createVNode("p", null, "(0263) 3540881")
                    ]),
                    createVNode("div", { class: "flex items-center gap-5" }, [
                      createVNode(_component_Icon, {
                        name: "heroicons-solid:phone",
                        class: "text-primary w-8 h-8"
                      }),
                      createVNode("p", null, "(0263) 3833086")
                    ]),
                    createVNode("div", { class: "flex items-center gap-5" }, [
                      createVNode(_component_Icon, {
                        name: "heroicons-solid:envelope",
                        class: "text-primary w-8 h-8"
                      }),
                      createVNode("p", null, "svhttdl.lamdong.gov.vn")
                    ])
                  ])
                ]),
                createVNode("div", { class: "laptop:w-[65%]" }, [
                  createVNode("p", { class: "text-subtitle font-bold" }, "G\u1EEDi y\xEAu c\u1EA7u li\xEAn h\u1EC7"),
                  createVNode(_component_x_space, { height: 50 }),
                  createVNode("div", null, [
                    createVNode(_component_x_form, {
                      submitText: "L\u01B0u",
                      "handle-error": false,
                      "show-button": false,
                      onSubmit
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-col gap-10" }, [
                          createVNode("div", { class: "flex gap-5" }, [
                            createVNode(_component_x_form_input, {
                              modelValue: unref(formData).name,
                              "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                              label: "H\u1ECD v\xE0 t\xEAn",
                              name: "name",
                              rules: "required",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_x_form_input, {
                              modelValue: unref(formData).name,
                              "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                              label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
                              name: "phone",
                              rules: "required",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode(_component_x_form_input, {
                            modelValue: unref(formData).name,
                            "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                            label: "Email",
                            name: "email",
                            rules: "required",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_x_form_text_area, {
                            modelValue: unref(formData).des,
                            "onUpdate:modelValue": ($event) => unref(formData).des = $event,
                            label: "N\u1ED9i dung",
                            name: "content",
                            rules: "required",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
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
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              createVNode(_component_x_space, { height: 60 })
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
//# sourceMappingURL=index-Do0T6bEl.mjs.map
