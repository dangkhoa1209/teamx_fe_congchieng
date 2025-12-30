import { _ as _sfc_main$1 } from './modal-action-B5hCZoQe.mjs';
import { ref, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { $ as $lodash } from './index-CtS2E8qT.mjs';
import { $ as $api, a as $url } from './_url-Bg2mcYq_.mjs';
import './index-CyZG15Sy.mjs';
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
import './asyncData-BGFq45PL.mjs';
import 'perfect-debounce';
import './button-Cp5cbQ9b.mjs';
import './index-Cy0o-wGa.mjs';
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
import './_store-Ndlczi3l.mjs';
import '@vue/shared';

const _sfc_main = {
  __name: "delete",
  __ssrInlineRender: true,
  emits: ["refresh"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const initData = {
      _id: "",
      username: "",
      password: "",
      permissions: []
    };
    const emits = __emit;
    const isVisible = ref(false);
    const isLoading = ref(false);
    const modalAction = ref(null);
    const formData = ref($lodash.cloneDeep(initData));
    const open = (taiKhoan) => {
      if (taiKhoan) {
        formData.value = {
          ...$lodash.cloneDeep(taiKhoan),
          password: ""
        };
      }
      isVisible.value = true;
    };
    const close = () => {
      isVisible.value = false;
    };
    const reset = () => {
      formData.value = $lodash.cloneDeep(initData);
    };
    const handleSubmit = async (values) => {
      var _a;
      isLoading.value = true;
      try {
        const response = await $api(
          $url.admin.account.delete,
          {
            body: formData.value
          },
          true
        );
        const { success } = ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.value) || {
          data: null,
          success: false
        };
        if (success) {
          reset();
          emits("refresh");
          close();
        }
      } catch (error) {
      } finally {
        isLoading.value = false;
      }
    };
    __expose({
      open
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_modal_action = _sfc_main$1;
      _push(ssrRenderComponent(_component_x_modal_action, mergeProps({
        ref_key: "modalAction",
        ref: modalAction,
        visible: unref(isVisible),
        "onUpdate:visible": ($event) => isRef(isVisible) ? isVisible.value = $event : null,
        title: "Xo\xE1 t\xE0i kho\u1EA3n",
        loading: unref(isLoading),
        onSubmit: handleSubmit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-2"${_scopeId}><div class="w-full flex flex-col gap-4"${_scopeId}><p${_scopeId}> X\xE1c nh\u1EADn xo\xE1 t\xE0i kho\u1EA3n <strong${_scopeId}>${ssrInterpolate(unref(formData).username)}</strong></p><p${_scopeId}>T\xE0i kho\u1EA3n s\u1EBD b\u1ECB xo\xE1 v\xE0 kh\xF4ng th\u1EC3 kh\xF4i ph\u1EE5c</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-2" }, [
                createVNode("div", { class: "w-full flex flex-col gap-4" }, [
                  createVNode("p", null, [
                    createTextVNode(" X\xE1c nh\u1EADn xo\xE1 t\xE0i kho\u1EA3n "),
                    createVNode("strong", null, toDisplayString(unref(formData).username), 1)
                  ]),
                  createVNode("p", null, "T\xE0i kho\u1EA3n s\u1EBD b\u1ECB xo\xE1 v\xE0 kh\xF4ng th\u1EC3 kh\xF4i ph\u1EE5c")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/tai-khoan/ignore/delete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=delete-C0v6Isj6.mjs.map
