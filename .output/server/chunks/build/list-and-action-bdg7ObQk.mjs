import { _ as _sfc_main$1 } from './content-place-geFh5xeL.mjs';
import { _ as _sfc_main$2 } from './space-R3NPDNyo.mjs';
import { _ as _sfc_main$3 } from './ver-CdpQh6no.mjs';
import { _ as _sfc_main$4 } from './modal-action-DB0Lu23_.mjs';
import { ref, nextTick, watch, withCtx, unref, isRef, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import _sfc_main$5 from './input-fliter-BDL6bdP5.mjs';
import { $ as $lodash } from './index-CtS2E8qT.mjs';
import { $ as $api, a as $url } from './_url-DeweAF6B.mjs';
import './image-BZ3fmoRC.mjs';
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
import '@iconify/vue';
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
import './index-CyZG15Sy.mjs';
import '@iconify/utils/lib/css/icon';
import './asyncData-BGFq45PL.mjs';
import 'perfect-debounce';
import './button-Cryksw8w.mjs';
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
import './_store-BUh4dPf_.mjs';
import '@vue/shared';

const _sfc_main = {
  __name: "list-and-action",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Tin n\u1ED5i b\u1EADt chung"
    },
    type: {
      type: String,
      default: "tin-tuc-su-kien"
    }
  },
  setup(__props) {
    const props = __props;
    const filter = ref({
      search: "",
      location: props.type == "tin-tuc-su-kien" ? "" : props.type,
      time: ""
    });
    const lists = ref({
      data: [],
      page: 1,
      perPage: 24,
      total: 0
    });
    const newsIdSelected = ref("");
    const positionSelected = ref(1);
    const openModal = ref(false);
    const featuredSlots = ref([]);
    const load = $lodash.debounce(async () => {
      var _a;
      await nextTick();
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
        data.data.map((item) => {
          item.slugify = null;
          return item;
        });
        lists.value = data;
      }
    }, 300);
    const openUpdate = (val) => {
      positionSelected.value = val;
      newsIdSelected.value = "";
      openModal.value = true;
    };
    const handleSave = async () => {
      var _a;
      if (!newsIdSelected.value) ;
      const response = await $api($url.admin.featuredNews.update, {
        body: {
          type: props.type,
          position: positionSelected.value,
          newsId: newsIdSelected.value
        }
      });
      const { data, success } = ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.value) || {
        data: null,
        success: false
      };
      if (success) {
        reset();
        close();
        fetchFeatured();
      }
    };
    const fetchFeatured = async () => {
      var _a;
      try {
        await nextTick();
        const response = await $api($url.admin.featuredNews.get, {
          body: {
            type: props.type
          }
        });
        const { data, success } = ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.value) || {
          data: null,
          success: false
        };
        if (success) {
          featuredSlots.value = Array.from({ length: 4 }, (_, i) => {
            const pos = i + 1;
            const existed = data.find((x) => x.position === pos);
            if (existed) {
              delete existed.news.slugify;
            }
            return existed ? {
              position: pos,
              news: existed.news || existed.backup || null
            } : {
              position: pos,
              news: null
            };
          });
        }
      } catch (err) {
        featuredSlots.value = Array.from({ length: 4 }, (_, i) => ({ position: i + 1, news: null }));
      }
    };
    const close = () => {
      openModal.value = false;
    };
    const reset = () => {
      positionSelected.value = 1;
      newsIdSelected.value = "";
    };
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
      const _component_x_page_news_thumb_ver = _sfc_main$3;
      const _component_x_modal_action = _sfc_main$4;
      _push(ssrRenderComponent(_component_x_content_place, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
            _push2(`<div class="mb-8"${_scopeId}><h1 class="text-subtitle font-bold text-primary"${_scopeId}>${ssrInterpolate(__props.title)}</h1></div><div class="grid grid-cols-1 laptop:grid-cols-2 gap-[40px]"${_scopeId}><!--[-->`);
            ssrRenderList(unref(featuredSlots), (slot) => {
              _push2(`<div class="relative group"${_scopeId}><div class="${ssrRenderClass([[
                slot.news ? "border-transparent hover:border-primary" : "border-dashed border-gray-300 hover:border-primary"
              ], "bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all cursor-pointer"])}"${_scopeId}>`);
              if (slot.news) {
                _push2(`<div class="p-[25px]"${_scopeId}><p class="text-lg font-medium mb-5"${_scopeId}>V\u1ECB tr\xED ${ssrInterpolate(slot.position)}</p>`);
                _push2(ssrRenderComponent(_component_x_page_news_thumb_ver, {
                  news: slot.news
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<div class="h-64 flex flex-col items-center justify-center text-gray-400"${_scopeId}><i class="fas fa-plus text-5xl mb-4 opacity-30"${_scopeId}></i><p class="text-lg font-medium"${_scopeId}>V\u1ECB tr\xED ${ssrInterpolate(slot.position)}</p><p class="text-sm mt-1"${_scopeId}>Click \u0111\u1EC3 ch\u1ECDn b\xE0i</p></div>`);
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 80 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_modal_action, {
              visible: unref(openModal),
              "onUpdate:visible": ($event) => isRef(openModal) ? openModal.value = $event : null,
              title: "Ch\u1ECDn b\xE0i vi\u1EBFt n\u1ED5i b\u1EADt",
              width: "900px",
              onClose: ($event) => openModal.value = false,
              onSubmit: handleSave
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    modelValue: unref(filter).search,
                    "onUpdate:modelValue": ($event) => unref(filter).search = $event,
                    class: "w-full h-11",
                    placeholder: "Nh\u1EADp t\u1EEB kho\xE1"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-1 laptop:grid-cols-3 gap-x-[40px] gap-y-[50px] mt-[40px]"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(lists).data, (item) => {
                    _push3(`<div class="${ssrRenderClass([{
                      "news-item-active bg-slate-200 rounded-xl p-2": unref(newsIdSelected) === item._id
                    }, "cursor-pointer"])}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_x_page_news_thumb_ver, { news: item }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_sfc_main$5, {
                        modelValue: unref(filter).search,
                        "onUpdate:modelValue": ($event) => unref(filter).search = $event,
                        class: "w-full h-11",
                        placeholder: "Nh\u1EADp t\u1EEB kho\xE1"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 laptop:grid-cols-3 gap-x-[40px] gap-y-[50px] mt-[40px]" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(lists).data, (item) => {
                        return openBlock(), createBlock("div", {
                          key: item._id,
                          class: ["cursor-pointer", {
                            "news-item-active bg-slate-200 rounded-xl p-2": unref(newsIdSelected) === item._id
                          }],
                          onClick: ($event) => newsIdSelected.value = item._id
                        }, [
                          createVNode(_component_x_page_news_thumb_ver, { news: item }, null, 8, ["news"])
                        ], 10, ["onClick"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_x_space, { height: 40 }),
              createVNode("div", { class: "mb-8" }, [
                createVNode("h1", { class: "text-subtitle font-bold text-primary" }, toDisplayString(__props.title), 1)
              ]),
              createVNode("div", { class: "grid grid-cols-1 laptop:grid-cols-2 gap-[40px]" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(featuredSlots), (slot) => {
                  return openBlock(), createBlock("div", {
                    key: slot.position,
                    class: "relative group"
                  }, [
                    createVNode("div", {
                      class: ["bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all cursor-pointer", [
                        slot.news ? "border-transparent hover:border-primary" : "border-dashed border-gray-300 hover:border-primary"
                      ]],
                      onClick: ($event) => openUpdate(slot.position)
                    }, [
                      slot.news ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "p-[25px]"
                      }, [
                        createVNode("p", { class: "text-lg font-medium mb-5" }, "V\u1ECB tr\xED " + toDisplayString(slot.position), 1),
                        createVNode(_component_x_page_news_thumb_ver, {
                          news: slot.news
                        }, null, 8, ["news"])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "h-64 flex flex-col items-center justify-center text-gray-400"
                      }, [
                        createVNode("i", { class: "fas fa-plus text-5xl mb-4 opacity-30" }),
                        createVNode("p", { class: "text-lg font-medium" }, "V\u1ECB tr\xED " + toDisplayString(slot.position), 1),
                        createVNode("p", { class: "text-sm mt-1" }, "Click \u0111\u1EC3 ch\u1ECDn b\xE0i")
                      ]))
                    ], 10, ["onClick"])
                  ]);
                }), 128))
              ]),
              createVNode(_component_x_space, { height: 80 }),
              createVNode(_component_x_modal_action, {
                visible: unref(openModal),
                "onUpdate:visible": ($event) => isRef(openModal) ? openModal.value = $event : null,
                title: "Ch\u1ECDn b\xE0i vi\u1EBFt n\u1ED5i b\u1EADt",
                width: "900px",
                onClose: ($event) => openModal.value = false,
                onSubmit: handleSave
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "w-full" }, [
                    createVNode(_sfc_main$5, {
                      modelValue: unref(filter).search,
                      "onUpdate:modelValue": ($event) => unref(filter).search = $event,
                      class: "w-full h-11",
                      placeholder: "Nh\u1EADp t\u1EEB kho\xE1"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 laptop:grid-cols-3 gap-x-[40px] gap-y-[50px] mt-[40px]" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(lists).data, (item) => {
                      return openBlock(), createBlock("div", {
                        key: item._id,
                        class: ["cursor-pointer", {
                          "news-item-active bg-slate-200 rounded-xl p-2": unref(newsIdSelected) === item._id
                        }],
                        onClick: ($event) => newsIdSelected.value = item._id
                      }, [
                        createVNode(_component_x_page_news_thumb_ver, { news: item }, null, 8, ["news"])
                      ], 10, ["onClick"]);
                    }), 128))
                  ])
                ]),
                _: 1
              }, 8, ["visible", "onUpdate:visible", "onClose"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/tin-tuc-su-kien/tin-noi-bat/ignore/list-and-action.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=list-and-action-bdg7ObQk.mjs.map
