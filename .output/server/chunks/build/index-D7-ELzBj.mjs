import { _ as _sfc_main$1 } from './content-place-geFh5xeL.mjs';
import { _ as _sfc_main$2 } from './space-R3NPDNyo.mjs';
import { _ as _sfc_main$4 } from './line-DKbs4uri.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$5 } from './core-ttnb-7uJ4D1s5.mjs';
import { computed, ref, watch, mergeProps, withCtx, unref, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import _sfc_main$3 from './input-fliter-DSMrDiAb.mjs';
import DropdownFilter from './dropdown-filter-BIeTadZ1.mjs';
import Pagination from './pagination-DA6UlCzT.mjs';
import { locationTypes, timeOptions } from './data-LOguDaID.mjs';
import { b as useRoute } from './server.mjs';
import { $ as $lodash } from './index-CtS2E8qT.mjs';
import { $ as $api, a as $url } from './_url-hED94hO_.mjs';
import './image-DeCRukUU.mjs';
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
import './v3-CjX-H-q3.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './index-CyZG15Sy.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-BGFq45PL.mjs';
import 'perfect-debounce';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';
import 'vue-toastification';
import 'vee-validate';
import '@vee-validate/rules';
import './index-NNW9FpDB.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const querySearch = computed(() => route.query.q);
    const filter = ref({
      search: "",
      location: "",
      time: ""
    });
    const lists = ref({
      data: [],
      page: 1,
      perPage: 10,
      total: 0
    });
    const load = $lodash.debounce(async () => {
      var _a;
      const response = await $api($url.news.find, {
        body: {
          filter: filter.value,
          page: lists.value.page,
          perPage: lists.value.perPage
        }
      });
      const { data, success } = ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.value) || {
        data: null,
        success: false
      };
      if (success) {
        lists.value = data;
      }
    }, 300);
    watch(
      () => querySearch.value,
      () => {
        filter.value.search = querySearch.value;
      },
      { immediate: true }
    );
    watch(
      () => filter.value,
      () => {
        lists.value.page = 1;
        load();
      },
      { deep: true, immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_content_place = _sfc_main$1;
      const _component_x_space = _sfc_main$2;
      const _component_x_line = _sfc_main$4;
      const _component_x_page_news_thumb_hor = _sfc_main$1$1;
      const _component_x_core_ttnb = _sfc_main$5;
      _push(ssrRenderComponent(_component_x_content_place, mergeProps({ class: "font-robo text-body" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
            _push2(`<h2 class="font-bold text-14 text-primary"${_scopeId}>K\u1EBET QU\u1EA2 T\xCCM KI\u1EBEM</h2>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
            _push2(`<div class="flex gap-[40px] flex-col laptop:flex-row"${_scopeId}><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(filter).search,
              "onUpdate:modelValue": ($event) => unref(filter).search = $event,
              class: "w-full",
              placeholder: "Nh\u1EADp t\u1EEB kho\xE1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_space, { height: 15 }, null, _parent2, _scopeId));
            _push2(`<div class="w-full user-select-none"${_scopeId}><div class="flex justify-start gap-40px"${_scopeId}><div class="flex laptop:items-center gap-3 laptop:gap-2"${_scopeId}><label class="font-robo font-medium leading-[40px] whitespace-nowrap min-w-[100px]"${_scopeId}> T\xECm ki\u1EBFm: </label><div class="w-full laptop:w-[200px]"${_scopeId}>`);
            _push2(ssrRenderComponent(DropdownFilter, {
              modelValue: unref(filter).location,
              "onUpdate:modelValue": ($event) => unref(filter).location = $event,
              actions: unref(locationTypes)
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex laptop:items-center gap-3 laptop:gap-2 mt-4 laptop:mt-0"${_scopeId}><label class="font-robo font-medium leading-[40px] whitespace-nowrapmin-w-[100px]"${_scopeId}> Th\u1EDDi gian: </label><div class="w-full laptop:w-[200px]"${_scopeId}>`);
            _push2(ssrRenderComponent(DropdownFilter, {
              modelValue: unref(filter).time,
              "onUpdate:modelValue": ($event) => unref(filter).time = $event,
              actions: unref(timeOptions)
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 15 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_line, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-col gap-[40px]"${_scopeId}><!--[-->`);
            ssrRenderList(unref(lists).data, (item) => {
              _push2(ssrRenderComponent(_component_x_page_news_thumb_hor, { news: item }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 60 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Pagination, {
              modelValue: unref(lists).page,
              "onUpdate:modelValue": ($event) => unref(lists).page = $event,
              perPage: unref(lists).perPage,
              total: unref(lists).total,
              onChange: unref(load)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_space, { height: 80 }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full laptop:max-w-[400px]"${_scopeId}><h2 class="font-bold text-subtitle text-primary leading-[40px]"${_scopeId}>TIN T\u1EE8C N\u1ED4I B\u1EACT</h2>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 1 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_line, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_core_ttnb, null, {
              default: withCtx(({ items }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-[25px]"${_scopeId2}><!--[-->`);
                  ssrRenderList(items, (item, index) => {
                    _push3(ssrRenderComponent(_component_x_page_news_thumb_hor, {
                      key: index,
                      exclude: ["subTitle"],
                      news: item.news
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-[25px]" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                        return openBlock(), createBlock(_component_x_page_news_thumb_hor, {
                          key: index,
                          exclude: ["subTitle"],
                          news: item.news
                        }, null, 8, ["news"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 80 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_x_space, { height: 40 }),
              createVNode("h2", { class: "font-bold text-14 text-primary" }, "K\u1EBET QU\u1EA2 T\xCCM KI\u1EBEM"),
              createVNode(_component_x_space, { height: 40 }),
              createVNode("div", { class: "flex gap-[40px] flex-col laptop:flex-row" }, [
                createVNode("div", { class: "w-full" }, [
                  createVNode(_sfc_main$3, {
                    modelValue: unref(filter).search,
                    "onUpdate:modelValue": ($event) => unref(filter).search = $event,
                    class: "w-full",
                    placeholder: "Nh\u1EADp t\u1EEB kho\xE1"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_x_space, { height: 15 }),
                  createVNode("div", { class: "w-full user-select-none" }, [
                    createVNode("div", { class: "flex justify-start gap-40px" }, [
                      createVNode("div", { class: "flex laptop:items-center gap-3 laptop:gap-2" }, [
                        createVNode("label", { class: "font-robo font-medium leading-[40px] whitespace-nowrap min-w-[100px]" }, " T\xECm ki\u1EBFm: "),
                        createVNode("div", { class: "w-full laptop:w-[200px]" }, [
                          createVNode(DropdownFilter, {
                            modelValue: unref(filter).location,
                            "onUpdate:modelValue": ($event) => unref(filter).location = $event,
                            actions: unref(locationTypes)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "actions"])
                        ])
                      ]),
                      createVNode("div", { class: "flex laptop:items-center gap-3 laptop:gap-2 mt-4 laptop:mt-0" }, [
                        createVNode("label", { class: "font-robo font-medium leading-[40px] whitespace-nowrapmin-w-[100px]" }, " Th\u1EDDi gian: "),
                        createVNode("div", { class: "w-full laptop:w-[200px]" }, [
                          createVNode(DropdownFilter, {
                            modelValue: unref(filter).time,
                            "onUpdate:modelValue": ($event) => unref(filter).time = $event,
                            actions: unref(timeOptions)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "actions"])
                        ])
                      ])
                    ])
                  ]),
                  createVNode(_component_x_space, { height: 15 }),
                  createVNode(_component_x_line),
                  createVNode(_component_x_space, { height: 40 }),
                  createVNode("div", { class: "flex flex-col gap-[40px]" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(lists).data, (item) => {
                      return openBlock(), createBlock(_component_x_page_news_thumb_hor, {
                        key: item,
                        news: item
                      }, null, 8, ["news"]);
                    }), 128))
                  ]),
                  createVNode(_component_x_space, { height: 60 }),
                  createVNode(Pagination, {
                    modelValue: unref(lists).page,
                    "onUpdate:modelValue": ($event) => unref(lists).page = $event,
                    perPage: unref(lists).perPage,
                    total: unref(lists).total,
                    onChange: unref(load)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "perPage", "total", "onChange"]),
                  createVNode(_component_x_space, { height: 80 })
                ]),
                createVNode("div", { class: "w-full laptop:max-w-[400px]" }, [
                  createVNode("h2", { class: "font-bold text-subtitle text-primary leading-[40px]" }, "TIN T\u1EE8C N\u1ED4I B\u1EACT"),
                  createVNode(_component_x_space, { height: 1 }),
                  createVNode(_component_x_line),
                  createVNode(_component_x_space, { height: 40 }),
                  createVNode(_component_x_core_ttnb, null, {
                    default: withCtx(({ items }) => [
                      createVNode("div", { class: "flex flex-col gap-[25px]" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                          return openBlock(), createBlock(_component_x_page_news_thumb_hor, {
                            key: index,
                            exclude: ["subTitle"],
                            news: item.news
                          }, null, 8, ["news"]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode(_component_x_space, { height: 80 })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tim-kiem/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D7-ELzBj.mjs.map
