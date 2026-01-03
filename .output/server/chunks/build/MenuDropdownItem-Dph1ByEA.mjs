import { _ as _sfc_main$1 } from './link-CWCUPPCN.mjs';
import { _ as _sfc_main$2 } from './line-ByzM3RBl.mjs';
import { ref, computed, watch, nextTick, resolveComponent, unref, mergeProps, withCtx, createVNode, toDisplayString, createElementBlock, openBlock, createElementVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderTeleport, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { c as checkPermission } from './permission-check-YYJosWmV.mjs';
import './nuxt-link-Bf9L1Upn.mjs';
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
import './_store-Ndlczi3l.mjs';

const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  class: "size-6",
  viewBox: "0 0 24 24"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25"
    }, null, -1)
  ])]);
}
const LockOpenIcon = { render: render$2 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  class: "size-6",
  viewBox: "0 0 24 24"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
    }, null, -1)
  ])]);
}
const LogoutIcon = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  class: "size-6",
  viewBox: "0 0 24 24"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m19.5 8.25-7.5 7.5-7.5-7.5"
    }, null, -1)
  ])]);
}
const ChevronDown = { render };
const _sfc_main = {
  __name: "MenuDropdownItem",
  __ssrInlineRender: true,
  props: {
    item: Object,
    activePath: Array,
    currentPath: String,
    parentPath: { type: Array, default: () => [] },
    line: Boolean,
    isRoot: { type: Boolean, default: true }
  },
  emits: ["update:path", "mouseleave", "action"],
  setup(__props, { emit: __emit }) {
    useRoute();
    const props = __props;
    const itemRef = ref(null);
    const dropdownStyle = ref({});
    const currentPathArray = computed(
      () => props.item.id ? [...props.parentPath, props.item.id] : props.parentPath
    );
    const isOpen = computed(() => {
      if (!props.item.id) return false;
      return props.activePath.length >= currentPathArray.value.length && currentPathArray.value.every((id, i) => props.activePath[i] === id);
    });
    const isActive = computed(() => {
      if (!props.item.page && !props.item.childrens) return false;
      const current = props.currentPath;
      if (props.item.page) {
        const itemPath = props.item.page.replace(/\/$/, "");
        if (itemPath === current) return true;
        if (current.startsWith(itemPath + "/")) return true;
      }
      if (props.item.childrens) {
        const checkChildren = (items) => {
          for (const child of items) {
            if (child.page) {
              const childPath = child.page.replace(/\/$/, "");
              if (childPath === current || current.startsWith(childPath + "/")) {
                return true;
              }
            }
            if (child.childrens && checkChildren(child.childrens)) {
              return true;
            }
          }
          return false;
        };
        return checkChildren(props.item.childrens);
      }
      return false;
    });
    const updateDropdownPosition = () => {
      if (!itemRef.value || !isOpen.value) return;
      const rect = itemRef.value.getBoundingClientRect();
      if (props.isRoot) {
        dropdownStyle.value = {
          top: `${rect.bottom + (void 0).scrollY}px`,
          left: `${rect.left + (void 0).scrollX}px`,
          minWidth: `${rect.width}px`
        };
      } else {
        dropdownStyle.value = {
          top: `${rect.top + (void 0).scrollY}px`,
          left: `${rect.right + (void 0).scrollX}px`,
          minWidth: "240px"
        };
      }
    };
    watch(isOpen, (open) => open && nextTick(updateDropdownPosition), { flush: "post" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_link = _sfc_main$1;
      const _component_x_line = _sfc_main$2;
      const _component_MenuDropdownItem = resolveComponent("MenuDropdownItem", true);
      if (unref(checkPermission)(__props.item.permissions, true)) {
        _push(`<li${ssrRenderAttrs(mergeProps({
          ref_key: "itemRef",
          ref: itemRef,
          class: ["relative", {
            "h-[75px]": __props.isRoot,
            "h-[40px]": !__props.isRoot
          }]
        }, _attrs))}>`);
        if (__props.isRoot && isActive.value) {
          _push(`<div class="absolute bottom-[0px] left-0 right-0 h-[2px] bg-primary"></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.item.page) {
          _push(ssrRenderComponent(_component_x_link, {
            to: __props.item.page
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="${ssrRenderClass([[
                  // Kích thước chữ
                  __props.isRoot ? "leading-[75px] uppercase text-[16px] font-robo font-medium" : "leading-[40px] text-14 font-robo font-medium px-[15px]",
                  // MÀU CHỮ + NỀN KHI ACTIVE (cấp con) → giống hệt hover
                  !__props.isRoot && isActive.value ? "bg-main text-primary" : "text-main",
                  // HOVER CHO CẤP CON (chỉ khi không active)
                  !__props.isRoot && !isActive.value ? "hover:bg-main hover:text-primary" : "",
                  // ROOT: chữ luôn xanh, chỉ đậm hơn khi active
                  __props.isRoot ? "text-primary" : "",
                  __props.isRoot && isActive.value ? "font-bold" : ""
                ], "block whitespace-nowrap transition-all duration-300"])}"${_scopeId}>${ssrInterpolate(__props.item.label)}</span>`);
              } else {
                return [
                  createVNode("span", {
                    class: ["block whitespace-nowrap transition-all duration-300", [
                      // Kích thước chữ
                      __props.isRoot ? "leading-[75px] uppercase text-[16px] font-robo font-medium" : "leading-[40px] text-14 font-robo font-medium px-[15px]",
                      // MÀU CHỮ + NỀN KHI ACTIVE (cấp con) → giống hệt hover
                      !__props.isRoot && isActive.value ? "bg-main text-primary" : "text-main",
                      // HOVER CHO CẤP CON (chỉ khi không active)
                      !__props.isRoot && !isActive.value ? "hover:bg-main hover:text-primary" : "",
                      // ROOT: chữ luôn xanh, chỉ đậm hơn khi active
                      __props.isRoot ? "text-primary" : "",
                      __props.isRoot && isActive.value ? "font-bold" : ""
                    ]]
                  }, toDisplayString(__props.item.label), 3)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<span class="${ssrRenderClass([[
            __props.isRoot ? "leading-[75px] uppercase text-[16px] font-robo font-medium text-primary" : "leading-[40px] text-14 font-robo font-medium text-main px-[15px]",
            !__props.isRoot && isActive.value ? "bg-main text-primary" : " text-main",
            !__props.isRoot && !isActive.value ? "hover:bg-main hover:text-primary" : "",
            __props.item.isAction ? "cursor-pointer" : ""
          ], "flex items-center gap-2 whitespace-nowrap cursor-default transition-all duration-300 group"])}">`);
          if (__props.item.itemIconName == "heroicons:lock-open") {
            _push(ssrRenderComponent(unref(LockOpenIcon), { class: "w-[16px] h-[16px] text-main group-hover:text-primary" }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (__props.item.itemIconName == "heroicons:arrow-right-start-on-rectangle") {
            _push(ssrRenderComponent(unref(LogoutIcon), { class: "w-[16px] h-[16px] text-main group-hover:text-primary" }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(` ${ssrInterpolate(__props.item.label)} `);
          if (__props.item.iconName == "heroicons:chevron-down") {
            _push(ssrRenderComponent(unref(ChevronDown), { class: "w-[16px] h-[16px] text-primary" }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        }
        if (!__props.isRoot && __props.line) {
          _push(ssrRenderComponent(_component_x_line, {
            classColor: "bg-main opacity-30",
            className: "mx-[15px]"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (__props.item.childrens && isOpen.value) {
          ssrRenderTeleport(_push, (_push2) => {
            _push2(`<div class="absolute bg-primary z-[9999] shadow-2xl" style="${ssrRenderStyle(dropdownStyle.value)}"><ul><!--[-->`);
            ssrRenderList(__props.item.childrens, (child, i) => {
              _push2(ssrRenderComponent(_component_MenuDropdownItem, {
                key: child.id || child.label,
                item: child,
                "active-path": __props.activePath,
                "current-path": __props.currentPath,
                "parent-path": currentPathArray.value,
                line: i < __props.item.childrens.length - 1,
                "is-root": false,
                "onUpdate:path": ($event) => _ctx.$emit("update:path", $event),
                onMouseleave: ($event) => _ctx.$emit("mouseleave"),
                onAction: ($event) => _ctx.$emit("action", $event)
              }, null, _parent));
            });
            _push2(`<!--]--></ul></div>`);
          }, "body", false, _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin/header/menu/MenuDropdownItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=MenuDropdownItem-Dph1ByEA.mjs.map
