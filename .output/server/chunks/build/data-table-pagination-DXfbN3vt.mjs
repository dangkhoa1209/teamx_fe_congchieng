import __nuxt_component_1 from './index-CyZG15Sy.mjs';
import { mergeProps, computed, watch, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { o as onClickOutside } from './index-NNW9FpDB.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$2 = {
  __name: "dropdown",
  __ssrInlineRender: true,
  props: {
    actions: {
      type: Array,
      default: () => []
    }
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const triggerRef = ref(null);
    const open = ref(false);
    const close = () => {
      open.value = false;
    };
    const actionButtonClasses = computed(() => {
      return (action) => {
        if (action.variant === "danger") {
          return "text-red-600 hover:bg-red-50";
        }
        if (action.variant === "warning") {
          return "text-amber-600 hover:bg-amber-50";
        }
        if (action.variant === "success") {
          return "text-emerald-600 hover:bg-emerald-50";
        }
        return "hover:bg-gray-100";
      };
    });
    onClickOutside(triggerRef, () => {
      close();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "triggerRef",
        ref: triggerRef,
        class: "relative inline-flex text-left bg-main"
      }, _attrs))} data-v-05d37662><button type="button" class="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/40" data-v-05d37662>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:dots-vertical",
        class: "h-4 w-4"
      }, null, _parent));
      _push(`<p class="whitespace-nowrap" data-v-05d37662>Thao t\xE1c</p></button>`);
      if (unref(open)) {
        _push(`<div class="absolute left-0 translate-x-[-105%] w-44 origin-top-right rounded-xl border border-gray-100 bg-main shadow-lg ring-1 ring-black/5 focus:outline-none" data-v-05d37662><ul class="py-2 text-sm text-gray-700" data-v-05d37662><!--[-->`);
        ssrRenderList(__props.actions, (action) => {
          _push(`<li data-v-05d37662><button type="button" class="${ssrRenderClass([unref(actionButtonClasses)(action), "flex w-full items-center gap-2 px-4 py-2 text-left transition-colors"])}" data-v-05d37662>`);
          if (action.icon) {
            _push(ssrRenderComponent(_component_Icon, {
              name: action.icon,
              class: "h-4 w-4"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<span data-v-05d37662>${ssrInterpolate(action.label)}</span></button></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dropdown.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-05d37662"]]);
const _sfc_main$1 = {
  __name: "data-table",
  __ssrInlineRender: true,
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"
    },
    showIndex: {
      type: Boolean,
      default: false
    },
    indexOffset: {
      type: Number,
      default: 0
    },
    rowKey: {
      type: [String, Function],
      default: "id"
    }
    // stickyHeader: {
    //   type: Boolean,
    //   default: false
    // }
  },
  emits: ["onAction"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_x_dropdown = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-xl border border-main bg-main shadow-sm" }, _attrs))}><div class="overflow-x-auto min-h-[50vh]"><table class="min-w-full divide-main"><thead class="${ssrRenderClass(["text-left text-sm font-semibold text-gray-600"])}"><tr>`);
      if (__props.showIndex) {
        _push(`<th scope="col" class="px-6 py-3">STT</th>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.columns, (column) => {
        _push(`<th scope="col" class="${ssrRenderClass([
          "px-6 py-3",
          column.align === "right" ? "text-right" : column.align === "center" ? "text-center" : "",
          column.headerClass
        ])}">${ssrInterpolate(column.label)}</th>`);
      });
      _push(`<!--]--></tr></thead><tbody class="divide-y divide-main text-sm text-gray-700">`);
      if (__props.loading) {
        _push(`<tr><td${ssrRenderAttr("colspan", __props.columns.length + (__props.showIndex ? 1 : 0))} class="px-6 py-10 text-center text-gray-500">`);
        ssrRenderSlot(_ctx.$slots, "loading", {}, () => {
          _push(`\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...`);
        }, _push, _parent);
        _push(`</td></tr>`);
      } else if (!((_a = __props.rows) == null ? void 0 : _a.length)) {
        _push(`<tr><td${ssrRenderAttr("colspan", __props.columns.length + (__props.showIndex ? 1 : 0))} class="px-6 py-10 text-center text-gray-500">`);
        ssrRenderSlot(_ctx.$slots, "empty", {}, () => {
          _push(`${ssrInterpolate(__props.emptyText)}`);
        }, _push, _parent);
        _push(`</td></tr>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(__props.rows, (row, rowIndex) => {
          _push(`<tr class="hover:bg-gray-50">`);
          if (__props.showIndex) {
            _push(`<td class="px-6 py-4 text-gray-600">${ssrInterpolate(__props.indexOffset + rowIndex + 1)}</td>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(__props.columns, (column) => {
            _push(`<td class="${ssrRenderClass([
              "px-6 py-4",
              column.align === "right" ? "text-right" : column.align === "center" ? "text-center" : "",
              column.bodyClass
            ])}">`);
            ssrRenderSlot(_ctx.$slots, `cell-${column.key}`, {
              row,
              column,
              index: rowIndex
            }, () => {
              if (row == null ? void 0 : row[column.key]) {
                _push(`<span class="block truncate">${ssrInterpolate(row == null ? void 0 : row[column.key])}</span>`);
              } else {
                _push(`<!---->`);
              }
              if (column.actions) {
                _push(ssrRenderComponent(_component_x_dropdown, {
                  actions: column.actions,
                  onSelect: (action) => emits("onAction", { action, row })
                }, null, _parent));
              } else {
                _push(`<!---->`);
              }
            }, _push, _parent);
            _push(`</td>`);
          });
          _push(`<!--]--></tr>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</tbody></table></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/data-table.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "data-table-pagination",
  __ssrInlineRender: true,
  props: {
    page: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    totalItems: {
      type: Number,
      default: 0,
      required: true
      // Bắt buộc truyền totalItems
    },
    pageSizeOptions: {
      type: Array,
      default: () => [5, 10, 20, 50]
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:page", "update:pageSize", "refresh"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const pageCount = computed(() => {
      if (props.totalItems === 0) return 1;
      return Math.ceil(props.totalItems / props.pageSize);
    });
    const disablePrev = computed(() => props.loading || props.page <= 1);
    const disableNext = computed(() => props.loading || props.page >= pageCount.value);
    watch([() => props.pageSize, pageCount], () => {
      if (props.page > pageCount.value) {
        emit("update:page", 1);
        emit("refresh");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-t border-gray-100 px-6 py-4" }, _attrs))}><div class="flex flex-col items-center justify-end gap-3 text-sm text-gray-600 sm:flex-row"><div class="flex items-center gap-2"><span>Hi\u1EC3n th\u1ECB</span><select${ssrRenderAttr("value", __props.pageSize)} class="rounded-lg border border-gray-300 px-2 py-1 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/60"${ssrIncludeBooleanAttr(__props.loading) ? " disabled" : ""}><!--[-->`);
      ssrRenderList(__props.pageSizeOptions, (sizeOption) => {
        _push(`<option${ssrRenderAttr("value", sizeOption)}>${ssrInterpolate(sizeOption)}</option>`);
      });
      _push(`<!--]--></select><span>m\u1EE5c</span></div><div class="flex items-center gap-2"><button type="button" class="rounded-lg border border-gray-200 px-3 py-1.5 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"${ssrIncludeBooleanAttr(disablePrev.value) ? " disabled" : ""}> Tr\u01B0\u1EDBc </button><span>Trang ${ssrInterpolate(Math.min(__props.page, pageCount.value))} / ${ssrInterpolate(Math.max(pageCount.value, 1))}</span><button type="button" class="rounded-lg border border-gray-200 px-3 py-1.5 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"${ssrIncludeBooleanAttr(disableNext.value) ? " disabled" : ""}> Sau </button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/data-table-pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=data-table-pagination-DXfbN3vt.mjs.map
