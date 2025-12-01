import { _ as _sfc_main$1 } from './link-CWCUPPCN.mjs';
import { _ as _sfc_main$2 } from './line-Cl7qy73P.mjs';
import { ref, computed, watch, nextTick, resolveComponent, unref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
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
  emits: ["update:path", "mouseleave"],
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
            !__props.isRoot && !isActive.value ? "hover:bg-main hover:text-primary" : ""
          ], "block whitespace-nowrap cursor-default transition-all duration-300"])}">${ssrInterpolate(__props.item.label)}</span>`);
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
                onMouseleave: ($event) => _ctx.$emit("mouseleave")
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
//# sourceMappingURL=MenuDropdownItem-y3dyZ3WC.mjs.map
