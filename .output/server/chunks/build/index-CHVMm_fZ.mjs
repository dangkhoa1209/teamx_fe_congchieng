import { _ as _sfc_main$1 } from './content-place-geFh5xeL.mjs';
import { _ as _sfc_main$2 } from './space-R3NPDNyo.mjs';
import { _ as _sfc_main$3 } from './line-ByzM3RBl.mjs';
import { mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-Hyo1k0ua.mjs';
import { F as FBIcon, Y as YTIcon, I as IGIcon } from './ig-GAvdv2Sn.mjs';
import { u as useRouter } from './server.mjs';
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
import 'vee-validate';
import '@vee-validate/rules';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const clickTo = (slugify) => {
      if (!slugify) return;
      router.push({ path: `/${slugify}` });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_content_place = _sfc_main$1;
      const _component_x_space = _sfc_main$2;
      const _component_x_line = _sfc_main$3;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-primary text-main" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_x_content_place, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_x_space, { height: 58 }, null, _parent2, _scopeId));
            _push2(`<div class="flex gap-16 flex-col laptop:flex-row"${_scopeId}><div class="flex flex-col justify-between gap-8 w-[100%] laptop:w-[40%]"${_scopeId}><div class="flex flex-col gap-8"${_scopeId}><div class="flex gap-6 items-center"${_scopeId}><div class="flex items-center justify-center"${_scopeId}><div class="h-14 w-14"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="w-full h-full object-contain"${_scopeId}></div></div><div${_scopeId}><p class="font-mont font-semibold text-main text-mini"${_scopeId}>UBND T\u1EC8NH L\xC2M \u0110\u1ED2NG</p><p class="font-mont font-semibold text-main text-subtitle"${_scopeId}> CHUY\xCAN TRANG \u0110I\u1EC6N T\u1EEC C\u1ED2NG CHI\xCANG </p></div></div><p class="font-normal text-body"${_scopeId}> Chuy\xEAn trang th\xF4ng tin \u0111i\u1EC7n t\u1EED gi\u1EDBi thi\u1EC7u, qu\u1EA3ng b\xE1 m\xF4 h\xECnh v\u0103n ho\xE1 c\u1ED3ng chi\xEAng g\u1EAFn v\u1EDBi ph\xE1t tri\u1EC3n du l\u1ECBch t\u1EC9nh L\xE2m \u0110\u1ED3ng </p></div><div class="flex gap-4"${_scopeId}><div class="border border-main hover:border-primary hover:bg-main p-2 rounded-full box-border cursor-pointer group"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FBIcon), { class: "h-4 w-4 laptop:w-5 laptop:h-5 fill-current text-main group-hover:text-primary" }, null, _parent2, _scopeId));
            _push2(`</div><div class="border border-main hover:border-primary hover:bg-main p-2 rounded-full box-border cursor-pointer group"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(YTIcon), { class: "h-4 w-4 laptop:w-5 laptop:h-5 fill-current text-main group-hover:text-primary" }, null, _parent2, _scopeId));
            _push2(`</div><div class="border border-main hover:border-primary hover:bg-main p-2 rounded-full box-border cursor-pointer group"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(IGIcon), { class: "h-4 w-4 laptop:w-5 laptop:h-5 fill-current text-main group-hover:text-primary" }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="w-[100%] laptop:w-[22%] flex flex-col gap-3 tablet:gap-6"${_scopeId}><p class="font-medium text-subtitle"${_scopeId}>DANH M\u1EE4C</p><p class="font-normal text-body cursor-pointer"${_scopeId}> Gi\u1EDBi thi\u1EC7u v\u1EC1 chuy\xEAn trang </p><p class="font-normal text-body cursor-pointer"${_scopeId}> Ti\u1EC1m n\u0103ng ph\xE1t tri\u1EC3n </p><p class="font-normal text-body cursor-pointer"${_scopeId}> V\u0103n h\xF3a c\u1ED3ng chi\xEAng </p><p class="font-normal text-body cursor-pointer"${_scopeId}> Tin t\u1EE9c - S\u1EF1 ki\u1EC7n </p><p class="font-normal text-body cursor-pointer"${_scopeId}>H\u1EE3p t\xE1c</p></div><div class="w-[100%] laptop:w-[33%] flex flex-col gap-3 tablet:gap-6"${_scopeId}><p class="font-medium text-subtitle"${_scopeId}>LI\xCAN H\u1EC6</p><p class="font-normal text-body"${_scopeId}> Ban Bi\xEAn t\u1EADp Chuy\xEAn Trang th\xF4ng tin \u0111i\u1EC7n t\u1EED - S\u1EDF V\u0103n h\xF3a, Th\u1EC3 thao v\xE0 Du l\u1ECBch t\u1EC9nh L\xE2m \u0110\u1ED3ng </p><p class="font-normal text-body"${_scopeId}> \u0110\u1ECBa ch\u1EC9: T\u1EA7ng 2 khu 9 t\u1EA7ng, S\u1ED1 36 Tr\u1EA7n Ph\xFA, Ph\u01B0\u1EDDng Xu\xE2n H\u01B0\u01A1ng \u0110\xE0 L\u1EA1t - T\u1EC9nh L\xE2m \u0110\u1ED3ng </p><p class="font-normal text-body"${_scopeId}>S\u1ED1 \u0111i\u1EC7n tho\u1EA1i: (0263) 3822141</p><p class="font-normal text-body"${_scopeId}>Email: svhttdl.lamdong.gov.vn</p></div></div>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 58 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_line, { "class-color": "bg-main" }, null, _parent2, _scopeId));
            _push2(`<div class="py-8 flex justify-center"${_scopeId}><p class="font-medium text-center inline-flex items-center justify-center gap-1"${_scopeId}><span class="text-title leading-none"${_scopeId}>\xA9</span><span class="text-copy-right"${_scopeId}> B\u1EA3n quy\u1EC1n thu\u1ED9c S\u1EDF V\u0103n Ho\xE1, Th\u1EC3 thao &amp; Du l\u1ECBch t\u1EC9nh L\xE2m \u0110\u1ED3ng </span></p></div>`);
          } else {
            return [
              createVNode(_component_x_space, { height: 58 }),
              createVNode("div", { class: "flex gap-16 flex-col laptop:flex-row" }, [
                createVNode("div", { class: "flex flex-col justify-between gap-8 w-[100%] laptop:w-[40%]" }, [
                  createVNode("div", { class: "flex flex-col gap-8" }, [
                    createVNode("div", { class: "flex gap-6 items-center" }, [
                      createVNode("div", { class: "flex items-center justify-center" }, [
                        createVNode("div", { class: "h-14 w-14" }, [
                          createVNode("img", {
                            src: _imports_0,
                            class: "w-full h-full object-contain"
                          })
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "font-mont font-semibold text-main text-mini" }, "UBND T\u1EC8NH L\xC2M \u0110\u1ED2NG"),
                        createVNode("p", { class: "font-mont font-semibold text-main text-subtitle" }, " CHUY\xCAN TRANG \u0110I\u1EC6N T\u1EEC C\u1ED2NG CHI\xCANG ")
                      ])
                    ]),
                    createVNode("p", { class: "font-normal text-body" }, " Chuy\xEAn trang th\xF4ng tin \u0111i\u1EC7n t\u1EED gi\u1EDBi thi\u1EC7u, qu\u1EA3ng b\xE1 m\xF4 h\xECnh v\u0103n ho\xE1 c\u1ED3ng chi\xEAng g\u1EAFn v\u1EDBi ph\xE1t tri\u1EC3n du l\u1ECBch t\u1EC9nh L\xE2m \u0110\u1ED3ng ")
                  ]),
                  createVNode("div", { class: "flex gap-4" }, [
                    createVNode("div", { class: "border border-main hover:border-primary hover:bg-main p-2 rounded-full box-border cursor-pointer group" }, [
                      createVNode(unref(FBIcon), { class: "h-4 w-4 laptop:w-5 laptop:h-5 fill-current text-main group-hover:text-primary" })
                    ]),
                    createVNode("div", { class: "border border-main hover:border-primary hover:bg-main p-2 rounded-full box-border cursor-pointer group" }, [
                      createVNode(unref(YTIcon), { class: "h-4 w-4 laptop:w-5 laptop:h-5 fill-current text-main group-hover:text-primary" })
                    ]),
                    createVNode("div", { class: "border border-main hover:border-primary hover:bg-main p-2 rounded-full box-border cursor-pointer group" }, [
                      createVNode(unref(IGIcon), { class: "h-4 w-4 laptop:w-5 laptop:h-5 fill-current text-main group-hover:text-primary" })
                    ])
                  ])
                ]),
                createVNode("div", { class: "w-[100%] laptop:w-[22%] flex flex-col gap-3 tablet:gap-6" }, [
                  createVNode("p", { class: "font-medium text-subtitle" }, "DANH M\u1EE4C"),
                  createVNode("p", {
                    class: "font-normal text-body cursor-pointer",
                    onClick: ($event) => clickTo("gioi-thieu")
                  }, " Gi\u1EDBi thi\u1EC7u v\u1EC1 chuy\xEAn trang ", 8, ["onClick"]),
                  createVNode("p", {
                    class: "font-normal text-body cursor-pointer",
                    onClick: ($event) => clickTo("tiem-nang-phat-trien/van-hoa-nghe-thuat")
                  }, " Ti\u1EC1m n\u0103ng ph\xE1t tri\u1EC3n ", 8, ["onClick"]),
                  createVNode("p", {
                    class: "font-normal text-body cursor-pointer",
                    onClick: ($event) => clickTo("van-hoa-cong-chieng/tong-quan")
                  }, " V\u0103n h\xF3a c\u1ED3ng chi\xEAng ", 8, ["onClick"]),
                  createVNode("p", {
                    class: "font-normal text-body cursor-pointer",
                    onClick: ($event) => clickTo("tin-tuc-su-kien")
                  }, " Tin t\u1EE9c - S\u1EF1 ki\u1EC7n ", 8, ["onClick"]),
                  createVNode("p", {
                    class: "font-normal text-body cursor-pointer",
                    onClick: ($event) => clickTo("hop-tac")
                  }, "H\u1EE3p t\xE1c", 8, ["onClick"])
                ]),
                createVNode("div", { class: "w-[100%] laptop:w-[33%] flex flex-col gap-3 tablet:gap-6" }, [
                  createVNode("p", { class: "font-medium text-subtitle" }, "LI\xCAN H\u1EC6"),
                  createVNode("p", { class: "font-normal text-body" }, " Ban Bi\xEAn t\u1EADp Chuy\xEAn Trang th\xF4ng tin \u0111i\u1EC7n t\u1EED - S\u1EDF V\u0103n h\xF3a, Th\u1EC3 thao v\xE0 Du l\u1ECBch t\u1EC9nh L\xE2m \u0110\u1ED3ng "),
                  createVNode("p", { class: "font-normal text-body" }, " \u0110\u1ECBa ch\u1EC9: T\u1EA7ng 2 khu 9 t\u1EA7ng, S\u1ED1 36 Tr\u1EA7n Ph\xFA, Ph\u01B0\u1EDDng Xu\xE2n H\u01B0\u01A1ng \u0110\xE0 L\u1EA1t - T\u1EC9nh L\xE2m \u0110\u1ED3ng "),
                  createVNode("p", { class: "font-normal text-body" }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i: (0263) 3822141"),
                  createVNode("p", { class: "font-normal text-body" }, "Email: svhttdl.lamdong.gov.vn")
                ])
              ]),
              createVNode(_component_x_space, { height: 58 }),
              createVNode(_component_x_line, { "class-color": "bg-main" }),
              createVNode("div", { class: "py-8 flex justify-center" }, [
                createVNode("p", { class: "font-medium text-center inline-flex items-center justify-center gap-1" }, [
                  createVNode("span", { class: "text-title leading-none" }, "\xA9"),
                  createVNode("span", { class: "text-copy-right" }, " B\u1EA3n quy\u1EC1n thu\u1ED9c S\u1EDF V\u0103n Ho\xE1, Th\u1EC3 thao & Du l\u1ECBch t\u1EC9nh L\xE2m \u0110\u1ED3ng ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default/footer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CHVMm_fZ.mjs.map
