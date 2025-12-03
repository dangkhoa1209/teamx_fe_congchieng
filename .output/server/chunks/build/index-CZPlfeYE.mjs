import { _ as _sfc_main$1 } from './content-place-geFh5xeL.mjs';
import { _ as _sfc_main$2 } from './button-Cryksw8w.mjs';
import { ref, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import _sfc_main$3 from './change-password-BqCa3hNl.mjs';
import { $ as $store } from './_store-Ndlczi3l.mjs';
import { u as useRouter } from './server.mjs';
import { $ as $lodash } from './index-CtS2E8qT.mjs';
import { $ as $api, a as $url } from './_url-44uO088s.mjs';
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
import './modal-action-DB0Lu23_.mjs';
import './index-Cy0o-wGa.mjs';
import 'vee-validate';
import './input-DMLzQp1t.mjs';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';
import 'vue-toastification';
import '@vee-validate/rules';
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
import '@vue/shared';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { auth } = $store();
    const router = useRouter();
    const modelChangePassWord = ref();
    const disabled = ref(false);
    const handleChangePassword = () => {
      modelChangePassWord.value && modelChangePassWord.value.open(auth.user);
    };
    const handleLogout = $lodash.debounce(async () => {
      try {
        disabled.value = true;
        await $api($url.admin.profile.logout, { method: "POST" });
      } catch (e) {
        console.warn("Logout error:", e);
      } finally {
        auth.clear();
        router.push({ name: "admin-auth-login" });
      }
    }, 200);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_content_place = _sfc_main$1;
      const _component_x_form_button = _sfc_main$2;
      _push(ssrRenderComponent(_component_x_content_place, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md space-y-6"${_scopeId}><div${_scopeId}><h2 class="text-xl font-semibold mb-4"${_scopeId}>Th\xF4ng tin t\xE0i kho\u1EA3n</h2><p${_scopeId}><strong${_scopeId}>T\xE0i kho\u1EA3n:</strong> ${ssrInterpolate(((_a = unref(auth).user) == null ? void 0 : _a.username) || "Ch\u01B0a c\u1EADp nh\u1EADt")}</p></div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_x_form_button, {
              theme: "primary",
              outline: "",
              disabled: unref(disabled),
              onClick: handleChangePassword
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0110\u1ED5i m\u1EADt kh\u1EA9u `);
                } else {
                  return [
                    createTextVNode(" \u0110\u1ED5i m\u1EADt kh\u1EA9u ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_x_form_button, {
              theme: "primary",
              disabled: unref(disabled),
              onClick: unref(handleLogout)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0110\u0103ng xu\u1EA5t `);
                } else {
                  return [
                    createTextVNode(" \u0110\u0103ng xu\u1EA5t ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              ref_key: "modelChangePassWord",
              ref: modelChangePassWord
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md space-y-6" }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "text-xl font-semibold mb-4" }, "Th\xF4ng tin t\xE0i kho\u1EA3n"),
                  createVNode("p", null, [
                    createVNode("strong", null, "T\xE0i kho\u1EA3n:"),
                    createTextVNode(" " + toDisplayString(((_b = unref(auth).user) == null ? void 0 : _b.username) || "Ch\u01B0a c\u1EADp nh\u1EADt"), 1)
                  ])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_x_form_button, {
                    theme: "primary",
                    outline: "",
                    disabled: unref(disabled),
                    onClick: handleChangePassword
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0110\u1ED5i m\u1EADt kh\u1EA9u ")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_x_form_button, {
                    theme: "primary",
                    disabled: unref(disabled),
                    onClick: unref(handleLogout)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0110\u0103ng xu\u1EA5t ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ])
              ]),
              createVNode(_sfc_main$3, {
                ref_key: "modelChangePassWord",
                ref: modelChangePassWord
              }, null, 512)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/ca-nhan/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CZPlfeYE.mjs.map
