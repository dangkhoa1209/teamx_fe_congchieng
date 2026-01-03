import { _ as __nuxt_component_1 } from './input-Y7qHVD3Y.mjs';
import { _ as _sfc_main$1 } from './button-BdQnFGJN.mjs';
import { ref, computed, mergeProps, unref, isRef, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-Hyo1k0ua.mjs';
import { $ as $store } from './_store-Ndlczi3l.mjs';
import { u as useRouter, b as useRoute } from './server.mjs';
import { u as useHead } from './v3-CjX-H-q3.mjs';
import 'vee-validate';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    $store();
    useRouter();
    const route = useRoute();
    useHead({
      title: "\u0110\u0103ng nh\u1EADp"
      // meta: [
      //   { name: 'description', content: 'Website của Khoa - ví dụ SEO tốt hơn' }
      // ]
    });
    const username = ref("");
    const password = ref("");
    computed(() => String(route.query.backUrl) || null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_form_input = __nuxt_component_1;
      const _component_x_button = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col items-center justify-center bg-primary" }, _attrs))}><div><div class="flex items-center justify-between py-2 tablet:py-6 laptop:py-8"><div class="flex items-center gap-4 laptop:gap-10"><div class="h-8 w-8 tablet:h-18 tablet:w-18 laptop:h-20 laptop:w-20"><img${ssrRenderAttr("src", _imports_0)} class="w-full h-full object-contain"></div><div class="text-main"><p class="font-mont font-semibold text-[12px] tablet:text-[16px] laptop:text-[20px] leading-tight"> UBND T\u1EC8NH L\xC2M \u0110\u1ED2NG </p><p class="font-mont font-semibold text-[12px] tablet:text-[22px] laptop:text-[28px] leading-tight"> CHUY\xCAN TRANG \u0110I\u1EC6N T\u1EEC C\u1ED2NG CHI\xCANG </p></div></div></div></div><div class="bg-main shadow-lg rounded-2xl p-8 w-full max-w-md"><h1 class="text-2xl font-semibold text-center text-primary mb-6">\u0110\u0102NG NH\u1EACP TRANG QU\u1EA2N TR\u1ECA</h1><form class="space-y-6">`);
      _push(ssrRenderComponent(_component_x_form_input, {
        modelValue: unref(username),
        "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null,
        label: "T\xE0i kho\u1EA3n",
        name: "username",
        placeholder: "Nh\u1EADp t\xE0i kho\u1EA3n"
      }, null, _parent));
      _push(ssrRenderComponent(_component_x_form_input, {
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
        label: "M\u1EADt kh\u1EA9u",
        name: "create_password",
        type: "password",
        placeholder: "Nh\u1EADp m\u1EADt kh\u1EA9u"
      }, null, _parent));
      _push(ssrRenderComponent(_component_x_button, {
        class: "w-full",
        type: "submit",
        theme: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0110\u0103ng nh\u1EADp`);
          } else {
            return [
              createTextVNode("\u0110\u0103ng nh\u1EADp")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-CN4b4oIj.mjs.map
