import { _ as _sfc_main$1 } from './image-DeCRukUU.mjs';
import { _ as _sfc_main$2 } from './button-BdQnFGJN.mjs';
import { _ as _sfc_main$3 } from './content-place-geFh5xeL.mjs';
import { _ as _sfc_main$4 } from './space-R3NPDNyo.mjs';
import { _ as _sfc_main$5 } from './title-Li4mZZSg.mjs';
import { _ as _sfc_main$6 } from './index-DMachZOw.mjs';
import { _ as _sfc_main$7 } from './index-Da2oNOR2.mjs';
import { _ as _sfc_main$9 } from './line-DKbs4uri.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$8 from './xa-DeH63lpq.mjs';
import _sfc_main$a from './don-vi-hop-tac-C7RwtH0t.mjs';
import { u as useRouter } from './server.mjs';
import { u as useHead } from './v3-CjX-H-q3.mjs';
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
import './ver-DMB0jfIH.mjs';
import './core-ttnb-DdLyoc4Y.mjs';
import './slide-ClAOf8PI.mjs';
import 'swiper/vue';
import 'swiper/modules';
import 'pinia';
import 'vue-router';
import '@iconify/vue';
import 'deep-pick-omit';
import 'vue-toastification';
import 'vee-validate';
import '@vee-validate/rules';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    useHead({
      title: "Trang ch\u1EE7"
      // meta: [{ name: 'description', content: 'Website của Khoa - ví dụ SEO tốt hơn' }],
    });
    const clickTo = (slugify) => {
      if (!slugify) return;
      router.push({ path: `/${slugify}` });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_image = _sfc_main$1;
      const _component_x_button = _sfc_main$2;
      const _component_x_content_place = _sfc_main$3;
      const _component_x_space = _sfc_main$4;
      const _component_x_title = _sfc_main$5;
      const _component_x_page_van_hoa_nghe_thuat = _sfc_main$6;
      const _component_x_page_news = _sfc_main$7;
      const _component_x_line = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "user-select-none" }, _attrs))}><div class="max-w-[1440px] mx-auto"><section class="relative">`);
      _push(ssrRenderComponent(_component_x_image, {
        url: "/assets/page/trang-chu/1.jpg",
        height: 685,
        width: 1440,
        class: "w-full h-full object-cover",
        radius: 0
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-primary/40"></div><main class="absolute inset-0 flex flex-col items-center justify-center text-main text-center gap-1"><h1 class="font-robo font-bold text-hero">\xC2M THANH C\u1ED2NG CHI\xCANG</h1><h2 class="font-robo font-bold text-hero">H\u01A0I TH\u1EDE V\u0102N HO\xC1 T\xC2Y NGUY\xCAN</h2>`);
      _push(ssrRenderComponent(_component_x_button, {
        class: "mt-5",
        onClick: ($event) => clickTo("van-hoa-cong-chieng/tong-quan")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` KH\xC1M PH\xC1 NGAY `);
          } else {
            return [
              createTextVNode(" KH\xC1M PH\xC1 NGAY ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main></section></div><section class="pt-[40px] tablet:pt-[80px]">`);
      _push(ssrRenderComponent(_component_x_content_place, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-[50px]"${_scopeId}><div class="flex flex-col justify-between"${_scopeId}><div${_scopeId}><h3 class="font-robo font-medium text-subtitle text-primary"${_scopeId}>B\u1EA2O T\u1ED2N V\xC0 LAN T\u1ECEA</h3>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 10 }, null, _parent2, _scopeId));
            _push2(`<h2 class="font-robo font-bold text-title text-primary"${_scopeId}> V\u0102N HO\xC1 C\u1ED2NG CHI\xCANG T\xC2Y NGUY\xCAN </h2>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 30 }, null, _parent2, _scopeId));
            _push2(`<p class="font-robo font-normal text-body text-justify"${_scopeId}> T\u1EEB thu\u1EDF h\u1ED3ng hoang, khi con ng\u01B0\u1EDDi bi\u1EBFt khai th\xE1c kim lo\u1EA1i t\u1EEB l\xF2ng \u0111\u1EA5t \u0111\u1EC3 t\u1EA1o ra nh\u1EEFng t\u1EA5m \u0111\u1ED3ng \u0111\u1EA7u ti\xEAn - Ti\u1EBFng chi\xEAng \u0111\xE3 ra \u0111\u1EDDi, nh\u01B0 ti\u1EBFng g\u1ECDi nguy\xEAn s\u01A1 c\u1EE7a s\u1EF1 s\u1ED1ng. H\xE0ng ng\xE0n n\u0103m tr\xF4i qua, c\u1ED3ng chi\xEAng tr\u1EDF th\xE0nh h\u01A1i th\u1EDF c\u1EE7a n\xFAi r\u1EEBng, l\xE0 linh h\u1ED3n c\u1EE7a con ng\u01B0\u1EDDi n\u01A1i \u0111\u1EA1i ng\xE0n, \u0111\u1ED3ng th\u1EDDi l\xE0 bi\u1EC3u t\u01B0\u1EE3ng c\u1EE7a s\u1EE9c s\u1ED1ng, ni\u1EC1m tin v\xE0 kh\xE1t v\u1ECDng. B\xEAn \xE1nh l\u1EEDa b\u1EADp b\xF9ng gi\u1EEFa r\u1EEBng s\xE2u, con ng\u01B0\u1EDDi \u0111\xE3 t\u1EE5 h\u1ED9i quanh ti\u1EBFng chi\xEAng \u0111\u1EC3 k\u1EC3 nh\u1EEFng c\xE2u chuy\u1EC7n c\u1EE7a bu\xF4n l\xE0ng. Nh\u1EDD ti\u1EBFng chi\xEAng, con ng\u01B0\u1EDDi bi\u1EBFt h\u01B0\u1EDBng v\u1EC1 c\u1ED9i ngu\u1ED3n - nh\u1EDB \u0111\u1EA5t, nh\u1EDB tr\u1EDDi, nh\u1EDB t\u1ED5 ti\xEAn v\xE0 nh\u1EEFng \u0111i\u1EC1u thi\xEAng li\xEAng \u1EA9n s\xE2u trong t\xE2m h\u1ED3n. Ti\u1EBFng chi\xEAng c\u1EA5t l\xEAn t\u1EEB s\u1EF1 s\u1ED1ng v\xE0 c\u0169ng m\u1EDF ra m\u1ED9t cu\u1ED9c s\u1ED1ng tr\xE0n \u0111\u1EA7y m\xE0u s\u1EAFc v\xE0 sinh kh\xED... </p></div><div class="my-[40px] block laptop:hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_x_image, {
              url: "/assets/page/trang-chu/2.jpg",
              height: 650
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_x_button, {
              uppercase: false,
              theme: "primary",
              onClick: ($event) => clickTo("gioi-thieu")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` T\xECm hi\u1EC3u th\xEAm `);
                } else {
                  return [
                    createTextVNode(" T\xECm hi\u1EC3u th\xEAm ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="min-w-[47%] hidden laptop:block"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_x_image, {
              url: "/assets/page/trang-chu/2.jpg",
              height: 650
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-[50px]" }, [
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", null, [
                    createVNode("h3", { class: "font-robo font-medium text-subtitle text-primary" }, "B\u1EA2O T\u1ED2N V\xC0 LAN T\u1ECEA"),
                    createVNode(_component_x_space, { height: 10 }),
                    createVNode("h2", { class: "font-robo font-bold text-title text-primary" }, " V\u0102N HO\xC1 C\u1ED2NG CHI\xCANG T\xC2Y NGUY\xCAN "),
                    createVNode(_component_x_space, { height: 30 }),
                    createVNode("p", { class: "font-robo font-normal text-body text-justify" }, " T\u1EEB thu\u1EDF h\u1ED3ng hoang, khi con ng\u01B0\u1EDDi bi\u1EBFt khai th\xE1c kim lo\u1EA1i t\u1EEB l\xF2ng \u0111\u1EA5t \u0111\u1EC3 t\u1EA1o ra nh\u1EEFng t\u1EA5m \u0111\u1ED3ng \u0111\u1EA7u ti\xEAn - Ti\u1EBFng chi\xEAng \u0111\xE3 ra \u0111\u1EDDi, nh\u01B0 ti\u1EBFng g\u1ECDi nguy\xEAn s\u01A1 c\u1EE7a s\u1EF1 s\u1ED1ng. H\xE0ng ng\xE0n n\u0103m tr\xF4i qua, c\u1ED3ng chi\xEAng tr\u1EDF th\xE0nh h\u01A1i th\u1EDF c\u1EE7a n\xFAi r\u1EEBng, l\xE0 linh h\u1ED3n c\u1EE7a con ng\u01B0\u1EDDi n\u01A1i \u0111\u1EA1i ng\xE0n, \u0111\u1ED3ng th\u1EDDi l\xE0 bi\u1EC3u t\u01B0\u1EE3ng c\u1EE7a s\u1EE9c s\u1ED1ng, ni\u1EC1m tin v\xE0 kh\xE1t v\u1ECDng. B\xEAn \xE1nh l\u1EEDa b\u1EADp b\xF9ng gi\u1EEFa r\u1EEBng s\xE2u, con ng\u01B0\u1EDDi \u0111\xE3 t\u1EE5 h\u1ED9i quanh ti\u1EBFng chi\xEAng \u0111\u1EC3 k\u1EC3 nh\u1EEFng c\xE2u chuy\u1EC7n c\u1EE7a bu\xF4n l\xE0ng. Nh\u1EDD ti\u1EBFng chi\xEAng, con ng\u01B0\u1EDDi bi\u1EBFt h\u01B0\u1EDBng v\u1EC1 c\u1ED9i ngu\u1ED3n - nh\u1EDB \u0111\u1EA5t, nh\u1EDB tr\u1EDDi, nh\u1EDB t\u1ED5 ti\xEAn v\xE0 nh\u1EEFng \u0111i\u1EC1u thi\xEAng li\xEAng \u1EA9n s\xE2u trong t\xE2m h\u1ED3n. Ti\u1EBFng chi\xEAng c\u1EA5t l\xEAn t\u1EEB s\u1EF1 s\u1ED1ng v\xE0 c\u0169ng m\u1EDF ra m\u1ED9t cu\u1ED9c s\u1ED1ng tr\xE0n \u0111\u1EA7y m\xE0u s\u1EAFc v\xE0 sinh kh\xED... ")
                  ]),
                  createVNode("div", { class: "my-[40px] block laptop:hidden" }, [
                    createVNode(_component_x_image, {
                      url: "/assets/page/trang-chu/2.jpg",
                      height: 650
                    })
                  ]),
                  createVNode("div", { class: "flex" }, [
                    createVNode(_component_x_button, {
                      uppercase: false,
                      theme: "primary",
                      onClick: ($event) => clickTo("gioi-thieu")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" T\xECm hi\u1EC3u th\xEAm ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "min-w-[47%] hidden laptop:block" }, [
                  createVNode(_component_x_image, {
                    url: "/assets/page/trang-chu/2.jpg",
                    height: 650
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_x_space, null, null, _parent));
      _push(`<section class="">`);
      _push(ssrRenderComponent(_component_x_content_place, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_x_title, {
              "class-name": "font-robo font-bold text-title",
              title: "TI\u1EC0M N\u0102NG PH\xC1T TRI\u1EC2N",
              variant: "bottom"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_space, { height: 50 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_page_van_hoa_nghe_thuat, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_x_title, {
                "class-name": "font-robo font-bold text-title",
                title: "TI\u1EC0M N\u0102NG PH\xC1T TRI\u1EC2N",
                variant: "bottom"
              }),
              createVNode(_component_x_space, { height: 50 }),
              createVNode(_component_x_page_van_hoa_nghe_thuat)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_x_space, null, null, _parent));
      _push(`<section class="">`);
      _push(ssrRenderComponent(_component_x_content_place, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_x_title, {
              "class-name": "font-robo font-bold text-title",
              title: "TIN T\u1EE8C - S\u1EF0 KI\u1EC6N",
              variant: "bottom"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_space, { height: 50 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_page_news, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_x_title, {
                "class-name": "font-robo font-bold text-title",
                title: "TIN T\u1EE8C - S\u1EF0 KI\u1EC6N",
                variant: "bottom"
              }),
              createVNode(_component_x_space, { height: 50 }),
              createVNode(_component_x_page_news)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_x_space, null, null, _parent));
      _push(`<section>`);
      _push(ssrRenderComponent(_component_x_content_place, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_x_title, {
              "class-name": "font-robo font-bold text-title",
              title: "V\u0102N H\xD3A C\u1ED2NG CHI\xCANG T\u1EA0I C\xC1C X\xC3",
              variant: "bottom"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_space, { height: 50 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_x_title, {
                "class-name": "font-robo font-bold text-title",
                title: "V\u0102N H\xD3A C\u1ED2NG CHI\xCANG T\u1EA0I C\xC1C X\xC3",
                variant: "bottom"
              }),
              createVNode(_component_x_space, { height: 50 }),
              createVNode(_sfc_main$8)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_x_space, { height: 85 }, null, _parent));
      _push(`<section>`);
      _push(ssrRenderComponent(_component_x_content_place, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_x_line, { "class-name": "my-0" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_space, { height: 35 }, null, _parent2, _scopeId));
            _push2(`<h2 class="font-robo font-bold text-title text-primary text-center"${_scopeId}>\u0110\u01A0N V\u1ECA H\u1EE2P T\xC1C</h2>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 65 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$a, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_x_line, { "class-name": "my-0" }),
              createVNode(_component_x_space, { height: 35 }),
              createVNode("h2", { class: "font-robo font-bold text-title text-primary text-center" }, "\u0110\u01A0N V\u1ECA H\u1EE2P T\xC1C"),
              createVNode(_component_x_space, { height: 65 }),
              createVNode(_sfc_main$a)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_x_space, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/trang-chu/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Ysj15hyW.mjs.map
