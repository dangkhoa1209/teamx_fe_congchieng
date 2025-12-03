import { _ as _sfc_main$1 } from './content-place-geFh5xeL.mjs';
import { _ as _sfc_main$2 } from './space-R3NPDNyo.mjs';
import { _ as _sfc_main$3 } from './button-Cryksw8w.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$4 } from './data-table-pagination-DXfbN3vt.mjs';
import { ref, withCtx, createTextVNode, unref, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { p as permissions } from './index-DqC2Se_x.mjs';
import _sfc_main$5 from './action-rO0d0pX-.mjs';
import _sfc_main$6 from './update-permission-Bl5JRFUH.mjs';
import _sfc_main$7 from './update-password-DIDcC5RN.mjs';
import _sfc_main$8 from './delete-D6G4DTbX.mjs';
import { $ as $lodash } from './index-CtS2E8qT.mjs';
import { $ as $api, a as $url } from './_url-Dpuck_OO.mjs';
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
import './modal-action-DB0Lu23_.mjs';
import './index-Cy0o-wGa.mjs';
import './input-DMLzQp1t.mjs';
import './select-CrPyhvG3.mjs';
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
import './_store-BUh4dPf_.mjs';
import '@vue/shared';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const modalAction = ref();
    const modelUpdatePermission = ref();
    const modelUpdatePassword = ref();
    const modelDelete = ref();
    const handleCreate = () => {
      var _a;
      (_a = modalAction.value) == null ? void 0 : _a.open();
    };
    const columns = [
      {
        key: "username",
        label: "T\xE0i kho\u1EA3n",
        headerClass: "min-w-[220px]"
      },
      {
        key: "permissions",
        label: "Ph\xE2n quy\u1EC1n",
        headerClass: "min-w-[200px]"
      },
      {
        key: "actions",
        label: "Thao t\xE1c",
        headerClass: "w-24 text-right",
        align: "right",
        actions: [
          {
            label: "C\u1EADp nh\u1EADt quy\u1EC1n",
            value: "update-permission"
            // icon: 'mdi:pencil'
          },
          {
            label: "C\u1EADp nh\u1EADt m\u1EADt kh\u1EA9u",
            value: "update-password"
          },
          {
            label: "Xo\xE1",
            value: "delete",
            // icon: 'mdi:trash-can-outline',
            variant: "danger"
          }
        ]
      }
    ];
    const tableList = ref({
      data: [],
      currentPage: 1,
      size: 10,
      totalItems: 0
    });
    const permissionsObj = Object.fromEntries(permissions.map((item) => [item.value, item.label]));
    const isLoading = ref(false);
    const fetchList = $lodash.debounce(async () => {
      var _a;
      isLoading.value = true;
      const response = await $api($url.admin.account.list, {
        body: {
          page: tableList.value.currentPage,
          per_page: tableList.value.size
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
    const handleRowAction = (data) => {
      const { action, row } = data;
      switch (action.value) {
        case "update-permission":
          modelUpdatePermission.value && modelUpdatePermission.value.open(row);
          break;
        case "update-password":
          modelUpdatePassword.value && modelUpdatePassword.value.open(row);
          break;
        case "delete":
          modelDelete.value && modelDelete.value.open(row);
          break;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_content_place = _sfc_main$1;
      const _component_x_space = _sfc_main$2;
      const _component_x_form_button = _sfc_main$3;
      const _component_x_data_table = _sfc_main$1$1;
      const _component_x_data_table_pagination = _sfc_main$4;
      _push(ssrRenderComponent(_component_x_content_place, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 30 }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-wrap items-center justify-between gap-3 mb-2"${_scopeId}><div${_scopeId}><h1 class="text-2xl font-semibold text-gray-900"${_scopeId}>Qu\u1EA3n l\xFD t\xE0i kho\u1EA3n</h1></div>`);
            _push2(ssrRenderComponent(_component_x_form_button, {
              icon: "mdi:plus",
              theme: "primary",
              onClick: handleCreate
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Th\xEAm t\xE0i kho\u1EA3n `);
                } else {
                  return [
                    createTextVNode(" Th\xEAm t\xE0i kho\u1EA3n ")
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
              "empty-text": "Ch\u01B0a c\xF3 t\xE0i kho\u1EA3n.",
              "show-index": "",
              "sticky-header": "",
              onOnAction: handleRowAction
            }, {
              "cell-permissions": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (row.permissions || row.permissions.length) {
                    _push3(`<div${_scopeId2}><!--[-->`);
                    ssrRenderList(row.permissions || [], (permission, index) => {
                      _push3(`<p${_scopeId2}>${ssrInterpolate(unref(permissionsObj)[permission])}</p>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    row.permissions || row.permissions.length ? (openBlock(), createBlock("div", { key: 0 }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(row.permissions || [], (permission, index) => {
                        return openBlock(), createBlock("p", { key: permission }, toDisplayString(unref(permissionsObj)[permission]), 1);
                      }), 128))
                    ])) : createCommentVNode("", true)
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
            _push2(ssrRenderComponent(_component_x_space, { height: 80 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              ref_key: "modalAction",
              ref: modalAction,
              onRefresh: unref(fetchList)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              ref_key: "modelUpdatePermission",
              ref: modelUpdatePermission,
              onRefresh: unref(fetchList)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              ref_key: "modelUpdatePassword",
              ref: modelUpdatePassword,
              onRefresh: unref(fetchList)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, {
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
                    createVNode("h1", { class: "text-2xl font-semibold text-gray-900" }, "Qu\u1EA3n l\xFD t\xE0i kho\u1EA3n")
                  ]),
                  createVNode(_component_x_form_button, {
                    icon: "mdi:plus",
                    theme: "primary",
                    onClick: handleCreate
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Th\xEAm t\xE0i kho\u1EA3n ")
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
                    "empty-text": "Ch\u01B0a c\xF3 t\xE0i kho\u1EA3n.",
                    "show-index": "",
                    "sticky-header": "",
                    onOnAction: handleRowAction
                  }, {
                    "cell-permissions": withCtx(({ row }) => [
                      row.permissions || row.permissions.length ? (openBlock(), createBlock("div", { key: 0 }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(row.permissions || [], (permission, index) => {
                          return openBlock(), createBlock("p", { key: permission }, toDisplayString(unref(permissionsObj)[permission]), 1);
                        }), 128))
                      ])) : createCommentVNode("", true)
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
                createVNode(_component_x_space, { height: 80 }),
                createVNode(_sfc_main$5, {
                  ref_key: "modalAction",
                  ref: modalAction,
                  onRefresh: unref(fetchList)
                }, null, 8, ["onRefresh"]),
                createVNode(_sfc_main$6, {
                  ref_key: "modelUpdatePermission",
                  ref: modelUpdatePermission,
                  onRefresh: unref(fetchList)
                }, null, 8, ["onRefresh"]),
                createVNode(_sfc_main$7, {
                  ref_key: "modelUpdatePassword",
                  ref: modelUpdatePassword,
                  onRefresh: unref(fetchList)
                }, null, 8, ["onRefresh"]),
                createVNode(_sfc_main$8, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/tai-khoan/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B4zwNQ62.mjs.map
