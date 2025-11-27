import { _ as _sfc_main$1 } from './content-place-geFh5xeL.mjs';
import __nuxt_component_1 from './index-C08a6tCK.mjs';
import { _ as __unimport_$image } from './_image-CatW-12k.mjs';
import { ref, withCtx, unref, createVNode, nextTick, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderTeleport, ssrRenderClass } from 'vue/server-renderer';
import { useRouter, useRoute } from 'vue-router';
import { m as menus, M as Menu } from './index-BPS_N54y.mjs';
import _sfc_main$2 from './MobileMenu-CTSHYo2b.mjs';
import { I as IconHeader } from './header-DFZJfgLv.mjs';
import _sfc_main$3 from './input-fitter-B9Y0PVvt.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import './asyncData-DmOfOvfO.mjs';
import 'perfect-debounce';
import 'pinia';
import 'deep-pick-omit';
import 'vue-toastification';
import 'vee-validate';
import '@vee-validate/rules';
import './MenuDropdownItem-ALO0dNjY.mjs';
import './link-r8bg-CCq.mjs';
import './nuxt-link-BuJvu1Wo.mjs';
import './line-CYB7w7Wn.mjs';
import './MobileMenuItem-D_TPKKxP.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    useRoute();
    const isDrawerOpen = ref(false);
    const searchRef = ref(null);
    const toggleSearch = () => {
      isDrawerOpen.value = true;
      nextTick(() => {
        var _a, _b;
        return (_b = (_a = searchRef.value) == null ? void 0 : _a.$el) == null ? void 0 : _b.focus();
      });
    };
    const handleSearch = (q) => {
      if (!q) return;
      isDrawerOpen.value = false;
      router.push({ path: "/tim-kiem", query: { q } });
    };
    const onLogoError = (e) => e.target.style.display = "none";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_content_place = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<!--[--><header class="relative z-50" data-v-e64a1db4><div class="bg-primary relative" data-v-e64a1db4>`);
      _push(ssrRenderComponent(_component_x_content_place, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between py-5 laptop:py-8" data-v-e64a1db4${_scopeId}><div class="flex items-center gap-4 laptop:gap-10" data-v-e64a1db4${_scopeId}><img class="h-14 w-auto laptop:h-20"${ssrRenderAttr("src", ("$image" in _ctx ? _ctx.$image : unref(__unimport_$image))().urlSquare)} alt="Logo" data-v-e64a1db4${_scopeId}><div class="hidden tablet:block text-main" data-v-e64a1db4${_scopeId}><p class="font-mont font-semibold text-[16px] laptop:text-[20px] leading-tight" data-v-e64a1db4${_scopeId}> UBND T\u1EC8NH L\xC2M \u0110\u1ED2NG </p><p class="font-mont font-semibold text-[22px] laptop:text-[28px] leading-tight" data-v-e64a1db4${_scopeId}> S\u1EDE V\u0102N HO\xC1, TH\u1EC2 THAO V\xC0 DU L\u1ECACH </p></div></div><div class="flex items-center gap-4 laptop:hidden" data-v-e64a1db4${_scopeId}><button class="p-2" data-v-e64a1db4${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "heroicons:magnifying-glass",
              class: "w-7 h-7 text-main"
            }, null, _parent2, _scopeId));
            _push2(`</button><button class="p-2" data-v-e64a1db4${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "heroicons:bars-3",
              class: "w-8 h-8 text-main"
            }, null, _parent2, _scopeId));
            _push2(`</button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between py-5 laptop:py-8" }, [
                createVNode("div", { class: "flex items-center gap-4 laptop:gap-10" }, [
                  createVNode("img", {
                    class: "h-14 w-auto laptop:h-20",
                    src: ("$image" in _ctx ? _ctx.$image : unref(__unimport_$image))().urlSquare,
                    alt: "Logo",
                    onError: onLogoError
                  }, null, 40, ["src"]),
                  createVNode("div", { class: "hidden tablet:block text-main" }, [
                    createVNode("p", { class: "font-mont font-semibold text-[16px] laptop:text-[20px] leading-tight" }, " UBND T\u1EC8NH L\xC2M \u0110\u1ED2NG "),
                    createVNode("p", { class: "font-mont font-semibold text-[22px] laptop:text-[28px] leading-tight" }, " S\u1EDE V\u0102N HO\xC1, TH\u1EC2 THAO V\xC0 DU L\u1ECACH ")
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-4 laptop:hidden" }, [
                  createVNode("button", {
                    class: "p-2",
                    onClick: toggleSearch
                  }, [
                    createVNode(_component_Icon, {
                      name: "heroicons:magnifying-glass",
                      class: "w-7 h-7 text-main"
                    })
                  ]),
                  createVNode("button", {
                    class: "p-2",
                    onClick: ($event) => isDrawerOpen.value = true
                  }, [
                    createVNode(_component_Icon, {
                      name: "heroicons:bars-3",
                      class: "w-8 h-8 text-main"
                    })
                  ], 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="absolute inset-0 pointer-events-none" data-v-e64a1db4><div class="max-w-[1440px] mx-auto h-full flex justify-end" data-v-e64a1db4>`);
      _push(ssrRenderComponent(unref(IconHeader), { class: "h-full text-primary" }, null, _parent));
      _push(`</div></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (isDrawerOpen.value) {
          _push2(`<div class="fixed inset-0 z-[9999]" data-v-e64a1db4><div class="absolute inset-0 bg-black/50" data-v-e64a1db4></div><div class="${ssrRenderClass([isDrawerOpen.value ? "translate-x-0" : "translate-x-full", "absolute inset-y-0 right-0 w-full max-w-md bg-main shadow-2xl flex flex-col pointer-events-auto translate-x-0 transition-transform duration-300 ease-out"])}" data-v-e64a1db4><div class="bg-primary p-5 flex items-center justify-between" data-v-e64a1db4><div class="flex items-center gap-4" data-v-e64a1db4><img class="h-12 w-auto"${ssrRenderAttr("src", ("$image" in _ctx ? _ctx.$image : unref(__unimport_$image))().urlSquare)} alt="Logo" data-v-e64a1db4><div class="text-main" data-v-e64a1db4><p class="font-mont text-xs" data-v-e64a1db4>UBND T\u1EC8NH L\xC2M \u0110\u1ED2NG</p><p class="font-mont text-sm font-bold opacity-90" data-v-e64a1db4> S\u1EDE V\u0102N HO\xC1, TH\u1EC2 THAO V\xC0 DU L\u1ECACH </p></div></div><button class="p-2" data-v-e64a1db4>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "heroicons:x-mark",
            class: "w-8 h-8 text-main"
          }, null, _parent));
          _push2(`</button></div><nav class="flex-1 overflow-y-auto" data-v-e64a1db4>`);
          _push2(ssrRenderComponent(_sfc_main$2, {
            menus: unref(menus),
            onClose: ($event) => isDrawerOpen.value = false
          }, null, _parent));
          _push2(`</nav><div class="p-4 border-t bg-main-50" data-v-e64a1db4>`);
          _push2(ssrRenderComponent(_sfc_main$3, {
            ref_key: "searchRef",
            ref: searchRef,
            placeholder: "Nh\u1EADp t\u1EEB kh\xF3a...",
            class: "w-full",
            onEnter: handleSearch
          }, null, _parent));
          _push2(`</div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</header><div class="sticky top-0 z-40 bg-main laptop:block hidden" data-v-e64a1db4>`);
      _push(ssrRenderComponent(Menu, { menus: unref(menus) }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default/header/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e64a1db4"]]);

export { Header as default };
//# sourceMappingURL=index-D1YPNy8q.mjs.map
