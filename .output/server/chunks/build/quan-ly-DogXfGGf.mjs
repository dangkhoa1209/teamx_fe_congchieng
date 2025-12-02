import { _ as _sfc_main$2 } from './content-place-geFh5xeL.mjs';
import { _ as _sfc_main$3 } from './space-R3NPDNyo.mjs';
import { _ as _sfc_main$4 } from './button-Cryksw8w.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$5 } from './data-table-pagination-DXfbN3vt.mjs';
import { ref, withCtx, createTextVNode, unref, toDisplayString, createVNode, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as __unimport_$newScope, a as _sfc_main$6 } from './action-BIqE5bVS.mjs';
import { _ as __unimport_$formatter } from './_formatter-Dlp1HBct.mjs';
import _sfc_main$7 from './delete-D6qRuxXD.mjs';
import { $ as $lodash } from './index-CtS2E8qT.mjs';
import { $ as $api, a as $url } from './_url-DaGy059R.mjs';
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
import './index-NNW9FpDB.mjs';
import './modal-action-Q10xIrEA.mjs';
import './index-CWxPCGrc.mjs';
import './_toast-BJY97RpO.mjs';
import './select-CrPyhvG3.mjs';
import './input-DMLzQp1t.mjs';
import './text-area-DmygkBmh.mjs';
import './image-DeCRukUU.mjs';
import 'cropperjs';
import './permission-check-YYJosWmV.mjs';
import './_store-Ndlczi3l.mjs';
import 'vuedraggable';
import 'uuid';
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

const _sfc_main$1 = {
  __name: "status",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String,
      default: "inactive"
    }
  },
  setup(__props) {
    const props = __props;
    const cClass = computed(() => {
      if (props.status === "active") {
        return "bg-green-100 text-green-700";
      }
      return "bg-gray-100 text-gray-600";
    });
    const cFormatStatus = computed(() => {
      if (props.status === "active") {
        return "Ho\u1EA1t \u0111\u1ED9ng";
      }
      return "D\u1EEBng ho\u1EA1t \u0111\u1ED9ng";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold", unref(cClass)]
      }, _attrs))}>${ssrInterpolate(unref(cFormatStatus))}</span>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/status.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "quan-ly",
  __ssrInlineRender: true,
  setup(__props) {
    const modalAction = ref();
    const modelDelete = ref();
    const tableList = ref({
      data: [],
      currentPage: 1,
      size: 10,
      totalItems: 0
    });
    const columns = [
      {
        key: "location",
        label: "Tr\u1EF1c thu\u1ED9c",
        headerClass: "min-w-[200px]"
      },
      {
        key: "title",
        label: "Ti\xEAu \u0111\u1EC1",
        headerClass: "min-w-[200px]"
      },
      {
        key: "subtitle",
        label: "Ti\xEAu \u0111\u1EC1 ph\u1EE5",
        headerClass: "min-w-[200px]"
      },
      {
        key: "status",
        label: "Tr\u1EA1ng th\xE1i",
        headerClass: "w-40"
      },
      {
        key: "createdAt",
        label: "Ng\xE0y t\u1EA1o",
        headerClass: "w-52"
      },
      {
        key: "actions",
        label: "Thao t\xE1c",
        headerClass: "w-24 text-right",
        align: "right",
        actions: [
          {
            label: "Xem",
            value: "view"
          },
          {
            label: "Ch\u1EC9nh s\u1EEDa",
            value: "update"
          },
          {
            label: "Xo\xE1",
            value: "delete",
            variant: "danger"
          }
        ]
      }
    ];
    const isLoading = ref(false);
    const fetchList = $lodash.debounce(async () => {
      var _a;
      isLoading.value = true;
      const response = await $api($url.admin.news.list, {
        body: {
          page: tableList.value.currentPage,
          per_page: tableList.value.size,
          query: {
            location: __unimport_$newScope().key
          }
        }
      });
      const { data, success } = ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.value) || {
        data: null,
        success: false
      };
      if (success) {
        tableList.value = data;
      }
      isLoading.value = false;
    }, 50);
    const handleCreate = () => {
      var _a;
      (_a = modalAction.value) == null ? void 0 : _a.open();
    };
    const handleRowAction = (data) => {
      var _a;
      const { action, row } = data;
      switch (action.value) {
        case "view":
          const { slugify } = row;
          (void 0).open(`/${slugify}`, "_blank");
          break;
        case "update":
          (_a = modalAction.value) == null ? void 0 : _a.open(row);
          break;
        case "delete":
          modelDelete.value && modelDelete.value.open(row);
          break;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_content_place = _sfc_main$2;
      const _component_x_space = _sfc_main$3;
      const _component_x_form_button = _sfc_main$4;
      const _component_x_data_table = _sfc_main$1$1;
      const _component_x_status = _sfc_main$1;
      const _component_x_data_table_pagination = _sfc_main$5;
      _push(ssrRenderComponent(_component_x_content_place, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 30 }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-wrap items-center justify-between gap-3 mb-2"${_scopeId}><div${_scopeId}><h1 class="text-2xl font-semibold text-gray-900"${_scopeId}>Qu\u1EA3n l\xFD tin t\u1EE9c - s\u1EF1 ki\u1EC7n</h1></div>`);
            _push2(ssrRenderComponent(_component_x_form_button, {
              icon: "mdi:plus",
              theme: "primary",
              onClick: handleCreate
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Th\xEAm tin t\u1EE9c - s\u1EF1 ki\u1EC7n `);
                } else {
                  return [
                    createTextVNode(" Th\xEAm tin t\u1EE9c - s\u1EF1 ki\u1EC7n ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 30 }, null, _parent2, _scopeId));
            _push2(`<div class="rounded-xl border border-gray-200 bg-main shadow-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_x_data_table, {
              columns,
              rows: unref(tableList).data,
              loading: unref(isLoading),
              "empty-text": "Ch\u01B0a c\xF3 tin t\u1EE9c - s\u1EF1 ki\u1EC7n",
              "show-index": "",
              "sticky-header": "",
              onOnAction: handleRowAction
            }, {
              "cell-location": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="font-medium text-gray-900"${_scopeId2}>${ssrInterpolate(("$newScope" in _ctx ? _ctx.$newScope : unref(__unimport_$newScope))().getLabel(row.location))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "font-medium text-gray-900" }, toDisplayString(("$newScope" in _ctx ? _ctx.$newScope : unref(__unimport_$newScope))().getLabel(row.location)), 1)
                  ];
                }
              }),
              "cell-title": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="font-medium text-gray-900"${_scopeId2}>${ssrInterpolate(row.title || "\u2014")}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "font-medium text-gray-900" }, toDisplayString(row.title || "\u2014"), 1)
                  ];
                }
              }),
              "cell-subtitle": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class=""${ssrRenderAttr("title", row.subtitle)}${_scopeId2}>${ssrInterpolate(row.subtitle || "\u2014")}</p>`);
                } else {
                  return [
                    createVNode("p", {
                      class: "",
                      title: row.subtitle
                    }, toDisplayString(row.subtitle || "\u2014"), 9, ["title"])
                  ];
                }
              }),
              "cell-content": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="truncate text-gray-600"${ssrRenderAttr("title", row.content)}${_scopeId2}>${ssrInterpolate(row.content || "\u2014")}</p>`);
                } else {
                  return [
                    createVNode("p", {
                      class: "truncate text-gray-600",
                      title: row.content
                    }, toDisplayString(row.content || "\u2014"), 9, ["title"])
                  ];
                }
              }),
              "cell-status": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_x_status, {
                    status: row.status
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_x_status, {
                      status: row.status
                    }, null, 8, ["status"])
                  ];
                }
              }),
              "cell-createdAt": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("$formatter" in _ctx ? _ctx.$formatter : unref(__unimport_$formatter))().date(row.createdAt))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("$formatter" in _ctx ? _ctx.$formatter : unref(__unimport_$formatter))().date(row.createdAt)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_data_table_pagination, {
              page: unref(tableList).currentPage,
              "page-size": unref(tableList).size,
              "total-items": unref(tableList).totalItems,
              loading: unref(isLoading),
              "onUpdate:page": ($event) => unref(tableList).currentPage = $event,
              "onUpdate:pageSize": ($event) => unref(tableList).size = $event,
              onRefresh: unref(fetchList)
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              ref_key: "modalAction",
              ref: modalAction,
              onRefresh: unref(fetchList)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              ref_key: "modelDelete",
              ref: modelDelete,
              onRefresh: unref(fetchList)
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_x_space, { height: 30 }),
                createVNode("div", { class: "flex flex-wrap items-center justify-between gap-3 mb-2" }, [
                  createVNode("div", null, [
                    createVNode("h1", { class: "text-2xl font-semibold text-gray-900" }, "Qu\u1EA3n l\xFD tin t\u1EE9c - s\u1EF1 ki\u1EC7n")
                  ]),
                  createVNode(_component_x_form_button, {
                    icon: "mdi:plus",
                    theme: "primary",
                    onClick: handleCreate
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Th\xEAm tin t\u1EE9c - s\u1EF1 ki\u1EC7n ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_x_space, { height: 30 }),
                createVNode("div", { class: "rounded-xl border border-gray-200 bg-main shadow-sm" }, [
                  createVNode(_component_x_data_table, {
                    columns,
                    rows: unref(tableList).data,
                    loading: unref(isLoading),
                    "empty-text": "Ch\u01B0a c\xF3 tin t\u1EE9c - s\u1EF1 ki\u1EC7n",
                    "show-index": "",
                    "sticky-header": "",
                    onOnAction: handleRowAction
                  }, {
                    "cell-location": withCtx(({ row }) => [
                      createVNode("p", { class: "font-medium text-gray-900" }, toDisplayString(("$newScope" in _ctx ? _ctx.$newScope : unref(__unimport_$newScope))().getLabel(row.location)), 1)
                    ]),
                    "cell-title": withCtx(({ row }) => [
                      createVNode("p", { class: "font-medium text-gray-900" }, toDisplayString(row.title || "\u2014"), 1)
                    ]),
                    "cell-subtitle": withCtx(({ row }) => [
                      createVNode("p", {
                        class: "",
                        title: row.subtitle
                      }, toDisplayString(row.subtitle || "\u2014"), 9, ["title"])
                    ]),
                    "cell-content": withCtx(({ row }) => [
                      createVNode("p", {
                        class: "truncate text-gray-600",
                        title: row.content
                      }, toDisplayString(row.content || "\u2014"), 9, ["title"])
                    ]),
                    "cell-status": withCtx(({ row }) => [
                      createVNode(_component_x_status, {
                        status: row.status
                      }, null, 8, ["status"])
                    ]),
                    "cell-createdAt": withCtx(({ row }) => [
                      createTextVNode(toDisplayString(("$formatter" in _ctx ? _ctx.$formatter : unref(__unimport_$formatter))().date(row.createdAt)), 1)
                    ]),
                    _: 1
                  }, 8, ["rows", "loading"]),
                  createVNode(_component_x_data_table_pagination, {
                    page: unref(tableList).currentPage,
                    "page-size": unref(tableList).size,
                    "total-items": unref(tableList).totalItems,
                    loading: unref(isLoading),
                    "onUpdate:page": ($event) => unref(tableList).currentPage = $event,
                    "onUpdate:pageSize": ($event) => unref(tableList).size = $event,
                    onRefresh: unref(fetchList)
                  }, null, 8, ["page", "page-size", "total-items", "loading", "onUpdate:page", "onUpdate:pageSize", "onRefresh"])
                ]),
                createVNode(_sfc_main$6, {
                  ref_key: "modalAction",
                  ref: modalAction,
                  onRefresh: unref(fetchList)
                }, null, 8, ["onRefresh"]),
                createVNode(_sfc_main$7, {
                  ref_key: "modelDelete",
                  ref: modelDelete,
                  onRefresh: unref(fetchList)
                }, null, 8, ["onRefresh"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/tin-tuc-su-kien/quan-ly.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=quan-ly-DogXfGGf.mjs.map
