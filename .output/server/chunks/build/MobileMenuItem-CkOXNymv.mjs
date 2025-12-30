import { _ as __nuxt_component_0 } from './nuxt-link-Bf9L1Upn.mjs';
import __nuxt_component_1 from './index-CyZG15Sy.mjs';
import { ref, computed, resolveComponent, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
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
import './server.mjs';
import 'pinia';
import '@iconify/vue';
import 'deep-pick-omit';
import 'vue-toastification';
import 'vee-validate';
import '@vee-validate/rules';
import '@iconify/utils/lib/css/icon';
import './v3-CjX-H-q3.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './asyncData-BGFq45PL.mjs';
import 'perfect-debounce';

const _sfc_main = {
  __name: "MobileMenuItem",
  __ssrInlineRender: true,
  props: {
    item: Object,
    depth: Number
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const route = useRoute();
    const open = ref(false);
    const isActive = computed(() => {
      if (!props.item.page) return false;
      const path = props.item.page.replace(/\/$/, "");
      return route.path === path || route.path.startsWith(path + "/");
    });
    const handleClick = () => {
      if (props.item.page) emit("close");
      if (props.item.childrens) open.value = !open.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_MobileMenuItem = resolveComponent("MobileMenuItem", true);
      _push(`<li${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: __props.item.page || "#",
        class: ["flex items-center justify-between px-6 py-4 text-lg font-medium transition", [
          __props.depth === 0 ? "text-primary" : "text-gray-800 pl-10",
          isActive.value ? "bg-main/10 font-bold text-primary" : "hover:bg-gray-100"
        ]],
        onClick: handleClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(__props.item.label)}</span>`);
            if (__props.item.childrens) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "heroicons:chevron-right",
                class: ["w-5 h-5 transition-transform", open.value ? "rotate-90" : ""]
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("span", null, toDisplayString(__props.item.label), 1),
              __props.item.childrens ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                name: "heroicons:chevron-right",
                class: ["w-5 h-5 transition-transform", open.value ? "rotate-90" : ""]
              }, null, 8, ["class"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.item.childrens && open.value) {
        _push(`<ul class="bg-main"><!--[-->`);
        ssrRenderList(__props.item.childrens, (child) => {
          _push(ssrRenderComponent(_component_MobileMenuItem, {
            key: child.id || child.label,
            item: child,
            depth: __props.depth + 1,
            onClose: ($event) => _ctx.$emit("close")
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default/header/menu/MobileMenuItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=MobileMenuItem-CkOXNymv.mjs.map
