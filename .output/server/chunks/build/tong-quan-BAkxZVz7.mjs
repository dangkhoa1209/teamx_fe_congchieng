import { _ as _sfc_main$1 } from './content-place-geFh5xeL.mjs';
import { _ as _sfc_main$2 } from './space-R3NPDNyo.mjs';
import { _ as _sfc_main$3 } from './title-Li4mZZSg.mjs';
import { _ as _sfc_main$4 } from './image-C4ecIkOA.mjs';
import { withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { C as ChevronDoubleRightIcon } from './chevron-double-right-ClLqyh5m.mjs';
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
import 'vee-validate';
import '@vee-validate/rules';
import './v3-CjX-H-q3.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {
  __name: "tong-quan",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_content_place = _sfc_main$1;
      const _component_x_space = _sfc_main$2;
      const _component_x_title = _sfc_main$3;
      const _component_x_image = _sfc_main$4;
      _push(ssrRenderComponent(_component_x_content_place, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
            _push2(`<section class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_component_x_title, { variant: "bottom" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-wrap items-center gap-2 font-bold text-14 text-primary m-0 leading-[1]"${_scopeId2}><span class="whitespace-normal"${_scopeId2}>V\u0102N HO\xC1 C\u1ED2NG CHI\xCANG</span>`);
                  _push3(ssrRenderComponent(unref(ChevronDoubleRightIcon), {
                    name: "heroicons:chevron-double-right",
                    class: "w-[0.9em] h-[0.9em]"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="whitespace-normal"${_scopeId2}>T\u1ED5ng quan v\u0103n ho\xE1 c\u1ED3ng chi\xEAng</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-wrap items-center gap-2 font-bold text-14 text-primary m-0 leading-[1]" }, [
                      createVNode("span", { class: "whitespace-normal" }, "V\u0102N HO\xC1 C\u1ED2NG CHI\xCANG"),
                      createVNode(unref(ChevronDoubleRightIcon), {
                        name: "heroicons:chevron-double-right",
                        class: "w-[0.9em] h-[0.9em]"
                      }),
                      createVNode("span", { class: "whitespace-normal" }, "T\u1ED5ng quan v\u0103n ho\xE1 c\u1ED3ng chi\xEAng")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-col tablet:flex-row gap-[40px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_x_image, { url: "/assets/page/van-hoa-cong-chieng/1.jpg" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_image, { url: "/assets/page/van-hoa-cong-chieng/2.jpg" }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 50 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_title, {
              title: "V\u0102N H\xD3A C\u1ED2NG CHI\xCANG T\u1EA0I VI\u1EC6T NAM",
              variant: "left",
              "class-name": "font-robo text-subtitle font-bold"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
            _push2(`<div class="font-robo text-body font-normal text-justify"${_scopeId}><p class="text-subtitle text-primary font-bold"${_scopeId}>V\u0103n h\xF3a c\u1ED3ng chi\xEAng T\xE2y B\u1EAFc</p>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 25 }, null, _parent2, _scopeId));
            _push2(`<p class="italic font-light"${_scopeId}> \u201C\u1EDE T\xE2y B\u1EAFc, ti\u1EBFng chi\xEAng h\xF2a c\xF9ng gi\xF3 n\xFAi, m\xE2y tr\u1EDDi nh\u01B0 ti\u1EBFng v\u1ECDng c\u1EE7a \u0111\u1EA5t tr\u1EDDi c\u1ED5 x\u01B0a\u201D </p>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 25 }, null, _parent2, _scopeId));
            _push2(`<p class="text-justify"${_scopeId}> Trong c\xE1c l\u1EC5 h\u1ED9i nh\u01B0 X\xEAn b\u1EA3n, X\xEAn m\u01B0\u1EDDng, ti\u1EBFng chi\xEAng h\xF2a c\xF9ng ti\u1EBFng kh\xE8n, tr\u1ED1ng, ti\u1EBFng h\xE1t, ti\u1EBFng ch\xE2n ng\u01B0\u1EDDi nh\u1EA3y m\xFAa b\xEAn \u0111\u1ED1ng l\u1EEDa. V\u1EDBi ng\u01B0\u1EDDi Th\xE1i, M\u01B0\u1EDDng, Dao, T\xE0y, N\xF9ng..., chi\xEAng l\xE0 bi\u1EC3u t\u01B0\u1EE3ng c\u1EE7a s\u1EF1 no \u0111\u1EE7, l\xF2ng bi\u1EBFt \u01A1n v\xE0 m\u1ED1i giao h\xF2a gi\u1EEFa con ng\u01B0\u1EDDi v\u1EDBi thi\xEAn nhi\xEAn. </p>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 25 }, null, _parent2, _scopeId));
            _push2(`<p class="text-justify"${_scopeId}> \xC2m s\u1EAFc c\u1EE7a chi\xEAng T\xE2y B\u1EAFc trong tr\u1EBBo, ph\xF3ng kho\xE1ng nh\u01B0ng uy nghi\xEAm, th\u1EC3 hi\u1EC7n m\u1ED9t t\xE2m th\u1EBF s\u1ED1ng h\xE0o s\u1EA3ng v\xE0 y\xEAu th\u01B0\u01A1ng, chan h\xF2a v\u1EDBi tr\u1EDDi \u0111\u1EA5t. M\u1ED7i h\u1ED3i chi\xEAng kh\xF4ng ch\u1EC9 \u0111\u1EC3 \u201Cg\u1ECDi m\xF9a\u201D, m\xE0 c\xF2n l\xE0 l\u1EDDi ch\xE0o, l\u1EDDi t\u1EA1, l\u1EDDi ti\u1EC5n thi\xEAng li\xEAng, c\u1EA3m x\xFAc. </p>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_image, { url: "/assets/page/van-hoa-cong-chieng/3.jpg" }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 50 }, null, _parent2, _scopeId));
            _push2(`<div class="font-robo text-body flex flex-col font-normal gap-[25px] text-justify"${_scopeId}><p class="text-subtitle text-primary font-bold"${_scopeId}>V\u0103n h\xF3a c\u1ED3ng chi\xEAng T\xE2y Nguy\xEAn</p><p class="italic font-light"${_scopeId}> \u201CN\u1EBFu nh\u1ECBp chi\xEAng T\xE2y B\u1EAFc mang \xE2m h\u01B0\u1EDFng c\u1EE7a n\xFAi cao th\xEC T\xE2y Nguy\xEAn l\xE0 \u0111\u1EA1i ng\xE0n c\u1EE7a \xE2m thanh v\xE0 linh h\u1ED3n\u201D </p><p${_scopeId}> N\u0103m 2005, Kh\xF4ng gian v\u0103n h\xF3a C\u1ED3ng chi\xEAng T\xE2y Nguy\xEAn \u0111\u01B0\u1EE3c UNESCO c\xF4ng nh\u1EADn l\xE0 Ki\u1EC7t t\xE1c truy\u1EC1n kh\u1EA9u v\xE0 Di s\u1EA3n phi v\u1EADt th\u1EC3 c\u1EE7a nh\xE2n lo\u1EA1i - minh ch\u1EE9ng cho t\u1EA7m v\xF3cv\xE0 chi\u1EC1u s\xE2u c\u1EE7a n\u1EC1n v\u0103n minh \xE2m thanh \u0111\u1ED9c nh\u1EA5t v\xF4 nh\u1ECB n\xE0y. </p><p${_scopeId}> T\u1EA1i \u0111\xE2y, m\u1ED7i d\xE2n t\u1ED9c \xCA \u0110\xEA, M\u2019N\xF4ng, Gia Rai, K\u2019Ho... l\u1EA1i th\u1ED5i v\xE0o chi\xEAng m\u1ED9t linh h\u1ED3n ri\xEAng, t\u1EA1o n\xEAn nh\u1ECBp \u0111i\u1EC7u v\u0103n h\xF3a phong ph\xFA v\xE0 \u0111\u1ED9c \u0111\xE1o. M\u1ED7i b\u1ED9 chi\xEAng c\xF3 t\xEAn ri\xEAng, h\u1ED3n ri\xEAng, \u0111\u01B0\u1EE3c c\u1EA5t gi\u1EEF nh\u01B0 b\xE1u v\u1EADt truy\u1EC1n \u0111\u1EDDi. Khi chi\xEAng vang l\xEAn, \u0111\xF3 l\xE0 cu\u1ED9c \u0111\u1ED1i tho\u1EA1i gi\u1EEFa con ng\u01B0\u1EDDi v\xE0 th\u1EA7n linh, l\xE0 l\u1EDDi m\u1EDDi t\u1ED5 ti\xEAn v\u1EC1 ch\u1EE9ng gi\xE1m cho m\u1ECDi nghi l\u1EC5 tr\u1ECDng \u0111\u1EA1i c\u1EE7a bu\xF4n l\xE0ng. </p><p${_scopeId}> Ng\u01B0\u1EDDi M\u2019n\xF4ng coi chi\xEAng l\xE0 ti\u1EBFng n\xF3i c\u1EE7a \u0111\u1EA5t, mang \xE2m vang tr\u1EA7m h\xF9ng v\xE0 \u0111\u1EA7y n\u1ED9i l\u1EF1c. Trong c\xE1c nghi l\u1EC5 c\u1EA7u m\xF9a, m\u1EEBng l\xFAa m\u1EDBi, c\xFAng b\u1EBFn n\u01B0\u1EDBc, ti\u1EBFng chi\xEAng c\u1EA5t l\xEAn nh\u01B0 ti\u1EBFng g\u1ECDi m\xF9a, ti\u1EBFng t\u1EA1 \u01A1n tr\u1EDDi \u0111\u1EA5t, kh\u01A1i d\u1EADy ngu\u1ED3n sinh kh\xED b\u1EA5t t\u1EADn gi\u1EEFa \u0111\u1EA1i ng\xE0n </p><p${_scopeId}> Ng\u01B0\u1EDDi Gia Rai coi chi\xEAng l\xE0 linh h\u1ED3n, l\xE0 m\xE1u th\u1ECBt c\u1EE7a bu\xF4n l\xE0ng. Ti\u1EBFng chi\xEAng Gia Rai v\u1EEBa d\u1EEF d\u1ED9i, v\u1EEBa thi\u1EBFt tha, k\u1EC3 c\xE2u chuy\u1EC7n v\u1EC1 ni\u1EC1m vui, n\u1ED7i \u0111au, s\u1EF1 sinh t\u1ED3n v\xE0 kh\xE1t v\u1ECDng h\xF2a h\u1EE3p v\u1EDBi tr\u1EDDi \u0111\u1EA5t. </p><p${_scopeId}> V\u1EDBi L\xE2m \u0110\u1ED3ng, n\u01A1i giao thoa c\u1EE7a nhi\u1EC1u t\u1ED9c ng\u01B0\u1EDDi, l\xE0 \u201Ctr\xE1i tim chi\xEAng\u201D c\u1EE7a v\xF9ng Nam T\xE2y Nguy\xEAn, gi\u1EEF vai tr\xF2 trung t\xE2m b\u1EA3o t\u1ED3n, lan t\u1ECFa v\xE0 t\xE1i sinh kh\xF4ng gian c\u1ED3ng chi\xEAng trong \u0111\u1EDDi s\u1ED1ng \u0111\u01B0\u01A1ng \u0111\u1EA1i. T\u1EA1i \u0111\xE2y, ng\u01B0\u1EDDi K\u2019Ho, M\u2019N\xF4ng, M\u1EA1 v\xE0 Churu v\u1EABn gi\u1EEF \u0111\u01B0\u1EE3c nh\u1EEFng b\u1ED9 chi\xEAng c\u1ED5 h\xE0ng bao nhi\xEAu th\u1EADp k\u1EF7, \u0111\u01B0\u1EE3c xem nh\u01B0 linh h\u1ED3n c\u1EE7a n\xFAi r\u1EEBng Lang Biang. Trong c\xE1c l\u1EC5 h\u1ED9i, ti\u1EBFng chi\xEAng L\xE2m \u0110\u1ED3ng vang l\xEAn kh\xF4ng ch\u1EC9 \u0111\u1EC3 c\xFAng, \u0111\u1EC3 m\xFAa, m\xE0 c\xF2n \u0111\u1EC3 k\u1EC3 chuy\u1EC7n, \u0111\u1EC3 n\u1ED1i li\u1EC1n qu\xE1 kh\u1EE9 - hi\u1EC7n t\u1EA1i - t\u01B0\u01A1ng lai c\u1EE7a ng\u01B0\u1EDDi con T\xE2y Nguy\xEAn. </p></div>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 50 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_title, {
              title: "V\u0102N H\xD3A C\u1ED2NG CHI\xCANG T\u1EA0I C\xC1C X\xC3 THU\u1ED8C T\u1EC8NH L\xC2M \u0110\u1ED2NG",
              variant: "left",
              "class-name": "font-robo text-subtitle font-bold"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_space, { height: 25 }, null, _parent2, _scopeId));
            _push2(`<p class="font-robo text-body text-justify"${_scopeId}> V\u0103n h\xF3a c\u1ED3ng chi\xEAng t\u1EC9nh L\xE2m \u0110\u1ED3ng l\xE0 linh h\u1ED3n c\u1EE7a v\xF9ng \u0111\u1EA5t, n\u01A1i nh\u1EEFng thanh \xE2m vang v\u1ECDng gi\u1EEFa \u0111\u1EA1i ng\xE0n v\u1EABn c\xF2n m\xE3i trong \u0111\u1EDDi s\u1ED1ng c\u1EE7a bao th\u1EBF h\u1EC7. M\u1ED7i x\xE3, m\u1ED7i bu\xF4n l\xE0ng \u0111\u1EC1u c\xF3 c\xE1ch g\xECn gi\u1EEF v\xE0 \u201Cth\u1ED5i h\u1ED3n\u201D ri\xEAng cho di s\u1EA3n n\xE0y, t\u1EA1o n\xEAn b\u1EE9c tranh \u0111a s\u1EAFc c\u1EE7a kh\xF4ng gian v\u0103n h\xF3a c\u1ED3ng chi\xEAng L\xE2m \u0110\u1ED3ng \u2013 m\u1ED9t ph\u1EA7n kh\xF4ng th\u1EC3 t\xE1ch r\u1EDDi c\u1EE7a di s\u1EA3n c\u1ED3ng chi\xEAng T\xE2y chi\xEAng, \u0111\xE3 \u0111\u01B0\u1EE3c UNESCO c\xF4ng nh\u1EADn l\xE0 Ki\u1EC7t t\xE1c di s\u1EA3n truy\u1EC1n kh\u1EA9u v\xE0 phi v\u1EADt th\u1EC3 c\u1EE7a nh\xE2n lo\u1EA1i. </p>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_image, { url: "/assets/page/van-hoa-cong-chieng/4.jpg" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_space, { height: 80 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_x_space, { height: 40 }),
              createVNode("section", { class: "" }, [
                createVNode(_component_x_title, { variant: "bottom" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-wrap items-center gap-2 font-bold text-14 text-primary m-0 leading-[1]" }, [
                      createVNode("span", { class: "whitespace-normal" }, "V\u0102N HO\xC1 C\u1ED2NG CHI\xCANG"),
                      createVNode(unref(ChevronDoubleRightIcon), {
                        name: "heroicons:chevron-double-right",
                        class: "w-[0.9em] h-[0.9em]"
                      }),
                      createVNode("span", { class: "whitespace-normal" }, "T\u1ED5ng quan v\u0103n ho\xE1 c\u1ED3ng chi\xEAng")
                    ])
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_x_space, { height: 40 }),
              createVNode("div", { class: "flex flex-col tablet:flex-row gap-[40px]" }, [
                createVNode(_component_x_image, { url: "/assets/page/van-hoa-cong-chieng/1.jpg" }),
                createVNode(_component_x_image, { url: "/assets/page/van-hoa-cong-chieng/2.jpg" })
              ]),
              createVNode(_component_x_space, { height: 50 }),
              createVNode(_component_x_title, {
                title: "V\u0102N H\xD3A C\u1ED2NG CHI\xCANG T\u1EA0I VI\u1EC6T NAM",
                variant: "left",
                "class-name": "font-robo text-subtitle font-bold"
              }),
              createVNode(_component_x_space, { height: 40 }),
              createVNode("div", { class: "font-robo text-body font-normal text-justify" }, [
                createVNode("p", { class: "text-subtitle text-primary font-bold" }, "V\u0103n h\xF3a c\u1ED3ng chi\xEAng T\xE2y B\u1EAFc"),
                createVNode(_component_x_space, { height: 25 }),
                createVNode("p", { class: "italic font-light" }, " \u201C\u1EDE T\xE2y B\u1EAFc, ti\u1EBFng chi\xEAng h\xF2a c\xF9ng gi\xF3 n\xFAi, m\xE2y tr\u1EDDi nh\u01B0 ti\u1EBFng v\u1ECDng c\u1EE7a \u0111\u1EA5t tr\u1EDDi c\u1ED5 x\u01B0a\u201D "),
                createVNode(_component_x_space, { height: 25 }),
                createVNode("p", { class: "text-justify" }, " Trong c\xE1c l\u1EC5 h\u1ED9i nh\u01B0 X\xEAn b\u1EA3n, X\xEAn m\u01B0\u1EDDng, ti\u1EBFng chi\xEAng h\xF2a c\xF9ng ti\u1EBFng kh\xE8n, tr\u1ED1ng, ti\u1EBFng h\xE1t, ti\u1EBFng ch\xE2n ng\u01B0\u1EDDi nh\u1EA3y m\xFAa b\xEAn \u0111\u1ED1ng l\u1EEDa. V\u1EDBi ng\u01B0\u1EDDi Th\xE1i, M\u01B0\u1EDDng, Dao, T\xE0y, N\xF9ng..., chi\xEAng l\xE0 bi\u1EC3u t\u01B0\u1EE3ng c\u1EE7a s\u1EF1 no \u0111\u1EE7, l\xF2ng bi\u1EBFt \u01A1n v\xE0 m\u1ED1i giao h\xF2a gi\u1EEFa con ng\u01B0\u1EDDi v\u1EDBi thi\xEAn nhi\xEAn. "),
                createVNode(_component_x_space, { height: 25 }),
                createVNode("p", { class: "text-justify" }, " \xC2m s\u1EAFc c\u1EE7a chi\xEAng T\xE2y B\u1EAFc trong tr\u1EBBo, ph\xF3ng kho\xE1ng nh\u01B0ng uy nghi\xEAm, th\u1EC3 hi\u1EC7n m\u1ED9t t\xE2m th\u1EBF s\u1ED1ng h\xE0o s\u1EA3ng v\xE0 y\xEAu th\u01B0\u01A1ng, chan h\xF2a v\u1EDBi tr\u1EDDi \u0111\u1EA5t. M\u1ED7i h\u1ED3i chi\xEAng kh\xF4ng ch\u1EC9 \u0111\u1EC3 \u201Cg\u1ECDi m\xF9a\u201D, m\xE0 c\xF2n l\xE0 l\u1EDDi ch\xE0o, l\u1EDDi t\u1EA1, l\u1EDDi ti\u1EC5n thi\xEAng li\xEAng, c\u1EA3m x\xFAc. "),
                createVNode(_component_x_space, { height: 40 }),
                createVNode(_component_x_image, { url: "/assets/page/van-hoa-cong-chieng/3.jpg" })
              ]),
              createVNode(_component_x_space, { height: 50 }),
              createVNode("div", { class: "font-robo text-body flex flex-col font-normal gap-[25px] text-justify" }, [
                createVNode("p", { class: "text-subtitle text-primary font-bold" }, "V\u0103n h\xF3a c\u1ED3ng chi\xEAng T\xE2y Nguy\xEAn"),
                createVNode("p", { class: "italic font-light" }, " \u201CN\u1EBFu nh\u1ECBp chi\xEAng T\xE2y B\u1EAFc mang \xE2m h\u01B0\u1EDFng c\u1EE7a n\xFAi cao th\xEC T\xE2y Nguy\xEAn l\xE0 \u0111\u1EA1i ng\xE0n c\u1EE7a \xE2m thanh v\xE0 linh h\u1ED3n\u201D "),
                createVNode("p", null, " N\u0103m 2005, Kh\xF4ng gian v\u0103n h\xF3a C\u1ED3ng chi\xEAng T\xE2y Nguy\xEAn \u0111\u01B0\u1EE3c UNESCO c\xF4ng nh\u1EADn l\xE0 Ki\u1EC7t t\xE1c truy\u1EC1n kh\u1EA9u v\xE0 Di s\u1EA3n phi v\u1EADt th\u1EC3 c\u1EE7a nh\xE2n lo\u1EA1i - minh ch\u1EE9ng cho t\u1EA7m v\xF3cv\xE0 chi\u1EC1u s\xE2u c\u1EE7a n\u1EC1n v\u0103n minh \xE2m thanh \u0111\u1ED9c nh\u1EA5t v\xF4 nh\u1ECB n\xE0y. "),
                createVNode("p", null, " T\u1EA1i \u0111\xE2y, m\u1ED7i d\xE2n t\u1ED9c \xCA \u0110\xEA, M\u2019N\xF4ng, Gia Rai, K\u2019Ho... l\u1EA1i th\u1ED5i v\xE0o chi\xEAng m\u1ED9t linh h\u1ED3n ri\xEAng, t\u1EA1o n\xEAn nh\u1ECBp \u0111i\u1EC7u v\u0103n h\xF3a phong ph\xFA v\xE0 \u0111\u1ED9c \u0111\xE1o. M\u1ED7i b\u1ED9 chi\xEAng c\xF3 t\xEAn ri\xEAng, h\u1ED3n ri\xEAng, \u0111\u01B0\u1EE3c c\u1EA5t gi\u1EEF nh\u01B0 b\xE1u v\u1EADt truy\u1EC1n \u0111\u1EDDi. Khi chi\xEAng vang l\xEAn, \u0111\xF3 l\xE0 cu\u1ED9c \u0111\u1ED1i tho\u1EA1i gi\u1EEFa con ng\u01B0\u1EDDi v\xE0 th\u1EA7n linh, l\xE0 l\u1EDDi m\u1EDDi t\u1ED5 ti\xEAn v\u1EC1 ch\u1EE9ng gi\xE1m cho m\u1ECDi nghi l\u1EC5 tr\u1ECDng \u0111\u1EA1i c\u1EE7a bu\xF4n l\xE0ng. "),
                createVNode("p", null, " Ng\u01B0\u1EDDi M\u2019n\xF4ng coi chi\xEAng l\xE0 ti\u1EBFng n\xF3i c\u1EE7a \u0111\u1EA5t, mang \xE2m vang tr\u1EA7m h\xF9ng v\xE0 \u0111\u1EA7y n\u1ED9i l\u1EF1c. Trong c\xE1c nghi l\u1EC5 c\u1EA7u m\xF9a, m\u1EEBng l\xFAa m\u1EDBi, c\xFAng b\u1EBFn n\u01B0\u1EDBc, ti\u1EBFng chi\xEAng c\u1EA5t l\xEAn nh\u01B0 ti\u1EBFng g\u1ECDi m\xF9a, ti\u1EBFng t\u1EA1 \u01A1n tr\u1EDDi \u0111\u1EA5t, kh\u01A1i d\u1EADy ngu\u1ED3n sinh kh\xED b\u1EA5t t\u1EADn gi\u1EEFa \u0111\u1EA1i ng\xE0n "),
                createVNode("p", null, " Ng\u01B0\u1EDDi Gia Rai coi chi\xEAng l\xE0 linh h\u1ED3n, l\xE0 m\xE1u th\u1ECBt c\u1EE7a bu\xF4n l\xE0ng. Ti\u1EBFng chi\xEAng Gia Rai v\u1EEBa d\u1EEF d\u1ED9i, v\u1EEBa thi\u1EBFt tha, k\u1EC3 c\xE2u chuy\u1EC7n v\u1EC1 ni\u1EC1m vui, n\u1ED7i \u0111au, s\u1EF1 sinh t\u1ED3n v\xE0 kh\xE1t v\u1ECDng h\xF2a h\u1EE3p v\u1EDBi tr\u1EDDi \u0111\u1EA5t. "),
                createVNode("p", null, " V\u1EDBi L\xE2m \u0110\u1ED3ng, n\u01A1i giao thoa c\u1EE7a nhi\u1EC1u t\u1ED9c ng\u01B0\u1EDDi, l\xE0 \u201Ctr\xE1i tim chi\xEAng\u201D c\u1EE7a v\xF9ng Nam T\xE2y Nguy\xEAn, gi\u1EEF vai tr\xF2 trung t\xE2m b\u1EA3o t\u1ED3n, lan t\u1ECFa v\xE0 t\xE1i sinh kh\xF4ng gian c\u1ED3ng chi\xEAng trong \u0111\u1EDDi s\u1ED1ng \u0111\u01B0\u01A1ng \u0111\u1EA1i. T\u1EA1i \u0111\xE2y, ng\u01B0\u1EDDi K\u2019Ho, M\u2019N\xF4ng, M\u1EA1 v\xE0 Churu v\u1EABn gi\u1EEF \u0111\u01B0\u1EE3c nh\u1EEFng b\u1ED9 chi\xEAng c\u1ED5 h\xE0ng bao nhi\xEAu th\u1EADp k\u1EF7, \u0111\u01B0\u1EE3c xem nh\u01B0 linh h\u1ED3n c\u1EE7a n\xFAi r\u1EEBng Lang Biang. Trong c\xE1c l\u1EC5 h\u1ED9i, ti\u1EBFng chi\xEAng L\xE2m \u0110\u1ED3ng vang l\xEAn kh\xF4ng ch\u1EC9 \u0111\u1EC3 c\xFAng, \u0111\u1EC3 m\xFAa, m\xE0 c\xF2n \u0111\u1EC3 k\u1EC3 chuy\u1EC7n, \u0111\u1EC3 n\u1ED1i li\u1EC1n qu\xE1 kh\u1EE9 - hi\u1EC7n t\u1EA1i - t\u01B0\u01A1ng lai c\u1EE7a ng\u01B0\u1EDDi con T\xE2y Nguy\xEAn. ")
              ]),
              createVNode(_component_x_space, { height: 50 }),
              createVNode(_component_x_title, {
                title: "V\u0102N H\xD3A C\u1ED2NG CHI\xCANG T\u1EA0I C\xC1C X\xC3 THU\u1ED8C T\u1EC8NH L\xC2M \u0110\u1ED2NG",
                variant: "left",
                "class-name": "font-robo text-subtitle font-bold"
              }),
              createVNode(_component_x_space, { height: 25 }),
              createVNode("p", { class: "font-robo text-body text-justify" }, " V\u0103n h\xF3a c\u1ED3ng chi\xEAng t\u1EC9nh L\xE2m \u0110\u1ED3ng l\xE0 linh h\u1ED3n c\u1EE7a v\xF9ng \u0111\u1EA5t, n\u01A1i nh\u1EEFng thanh \xE2m vang v\u1ECDng gi\u1EEFa \u0111\u1EA1i ng\xE0n v\u1EABn c\xF2n m\xE3i trong \u0111\u1EDDi s\u1ED1ng c\u1EE7a bao th\u1EBF h\u1EC7. M\u1ED7i x\xE3, m\u1ED7i bu\xF4n l\xE0ng \u0111\u1EC1u c\xF3 c\xE1ch g\xECn gi\u1EEF v\xE0 \u201Cth\u1ED5i h\u1ED3n\u201D ri\xEAng cho di s\u1EA3n n\xE0y, t\u1EA1o n\xEAn b\u1EE9c tranh \u0111a s\u1EAFc c\u1EE7a kh\xF4ng gian v\u0103n h\xF3a c\u1ED3ng chi\xEAng L\xE2m \u0110\u1ED3ng \u2013 m\u1ED9t ph\u1EA7n kh\xF4ng th\u1EC3 t\xE1ch r\u1EDDi c\u1EE7a di s\u1EA3n c\u1ED3ng chi\xEAng T\xE2y chi\xEAng, \u0111\xE3 \u0111\u01B0\u1EE3c UNESCO c\xF4ng nh\u1EADn l\xE0 Ki\u1EC7t t\xE1c di s\u1EA3n truy\u1EC1n kh\u1EA9u v\xE0 phi v\u1EADt th\u1EC3 c\u1EE7a nh\xE2n lo\u1EA1i. "),
              createVNode(_component_x_space, { height: 40 }),
              createVNode(_component_x_image, { url: "/assets/page/van-hoa-cong-chieng/4.jpg" }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/van-hoa-cong-chieng/tong-quan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tong-quan-BAkxZVz7.mjs.map
