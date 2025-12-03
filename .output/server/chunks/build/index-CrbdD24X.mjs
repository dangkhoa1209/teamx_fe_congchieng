import { _ as _sfc_main$1 } from './content-place-geFh5xeL.mjs';
import { _ as _sfc_main$2 } from './space-R3NPDNyo.mjs';
import { _ as _sfc_main$3 } from './line-ByzM3RBl.mjs';
import { _ as _sfc_main$4 } from './image-BZ3fmoRC.mjs';
import { a as _sfc_main$5, _ as _sfc_main$1$1 } from './core-ttnb-D3Qxv5Jh.mjs';
import { _ as _sfc_main$6 } from './core-ttk-CumegeIo.mjs';
import { _ as _sfc_main$7 } from './ver-CdpQh6no.mjs';
import { _ as __unimport_$formatter } from './_formatter-Dlp1HBct.mjs';
import { computed, ref, watch, nextTick, resolveComponent, mergeProps, withCtx, unref, createBlock, createCommentVNode, openBlock, createVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { F as FBIcon, Y as YTIcon, I as IGIcon } from './ig-GAvdv2Sn.mjs';
import { b as useRoute, k as useRequestEvent } from './server.mjs';
import { J as getRequestURL } from '../nitro/nitro.mjs';
import { a as useSeoMeta } from './v3-CjX-H-q3.mjs';
import { $ as $api, a as $url } from './_url-Dpuck_OO.mjs';
import 'pinia';
import 'vue-router';
import '@iconify/vue';
import 'deep-pick-omit';
import 'vue-toastification';
import 'vee-validate';
import '@vee-validate/rules';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './_store-BUh4dPf_.mjs';
import '@vue/shared';
import './asyncData-BGFq45PL.mjs';
import 'perfect-debounce';

function useRequestURL(opts) {
  {
    return getRequestURL(useRequestEvent(), opts);
  }
}
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const slugify = computed(() => useRoute().params.slugify);
    const newsData = ref(null);
    const route = useRoute();
    const url = useRequestURL();
    const domain = url.origin;
    useSeoMeta({
      title: () => {
        var _a;
        return (_a = newsData.value) == null ? void 0 : _a.title;
      },
      description: () => {
        var _a;
        return (_a = newsData.value) == null ? void 0 : _a.subtitle;
      },
      ogUrl: () => domain + route.fullPath,
      ogImage: () => {
        var _a;
        return domain + (((_a = newsData.value) == null ? void 0 : _a.thumbnail) || "/default.jpg");
      }
    });
    const load = async () => {
      var _a;
      const response = await $api($url.news.detail, {
        body: {
          slugify: slugify.value
        }
      });
      const { data, success } = ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.value) || {
        data: null,
        success: false
      };
      newsData.value = success ? data : null;
    };
    watch(
      () => slugify.value,
      async (val) => {
        if (!val) return;
        await nextTick();
        load();
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_content_place = _sfc_main$1;
      const _component_x_space = _sfc_main$2;
      const _component_x_line = _sfc_main$3;
      const _component_divs = resolveComponent("divs");
      const _component_x_image = _sfc_main$4;
      const _component_x_core_ttnb = _sfc_main$5;
      const _component_x_page_news_thumb_hor = _sfc_main$1$1;
      const _component_x_core_ttk = _sfc_main$6;
      const _component_x_page_news_thumb_ver = _sfc_main$7;
      _push(ssrRenderComponent(_component_x_content_place, mergeProps({ class: "font-robo text-body" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><h2 class="font-bold text-14 text-primary"${_scopeId}>TIN T\u1EE8C - S\u1EF0 KI\u1EC6N</h2>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 10 }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_x_line, { className: "w-[60px] h-[2px]" }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
            if (unref(newsData)) {
              _push2(`<div class="flex gap-[40px]"${_scopeId}><div${_scopeId}><h2 class="font-bold text-title-news text-primary"${_scopeId}>${ssrInterpolate(unref(newsData).title)}</h2></div><div class="tablet:min-w-[400px] hidden laptop:block"${_scopeId}></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(newsData)) {
              _push2(`<div class="flex gap-[40px]"${_scopeId}><section${_scopeId}><div class="flex justify-between align-middle mt-5"${_scopeId}><div${_scopeId}><span class="text-[10px]"${_scopeId}>${ssrInterpolate(("$formatter" in _ctx ? _ctx.$formatter : unref(__unimport_$formatter))().formatVNTime(unref(newsData).createdAt))}</span></div><div class="flex gap-4"${_scopeId}><div class="border border-primary hover:border-primary hover:bg-primary hover:text-main p-[5px] rounded-full box-border cursor-pointer group"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(FBIcon), { class: "h-3 w-3 laptop:w-4 laptop:h-4 fill-current text-primary group-hover:text-main" }, null, _parent2, _scopeId));
              _push2(`</div><div class="border border-primary hover:border-primary hover:bg-primary hover:text-main p-[5px] rounded-full box-border cursor-pointer group"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(YTIcon), { class: "h-3 w-3 laptop:w-4 laptop:h-4 fill-current text-primary group-hover:text-main" }, null, _parent2, _scopeId));
              _push2(`</div><div class="border border-primary hover:border-primary hover:bg-primary hover:text-main p-[5px] rounded-full box-border cursor-pointer group"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(IGIcon), { class: "h-3 w-3 laptop:w-4 laptop:h-4 fill-current text-primary group-hover:text-main" }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
              _push2(ssrRenderComponent(_component_x_space, {
                height: 15,
                class: "mb-[1px]"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_x_line, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
              _push2(`<h3 class="font-bold text-body text-justify"${_scopeId}>${ssrInterpolate(unref(newsData).subtitle)}</h3>`);
              _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
              _push2(`<!--[-->`);
              ssrRenderList(unref(newsData).contents, (content, index) => {
                _push2(ssrRenderComponent(_component_divs, { key: content }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h;
                    if (_push3) {
                      if (content.type == "content-in-dam") {
                        _push3(`<div${_scopeId2}><pre class="font-bold whitespace-pre-line font-robo text-body text-justify"${_scopeId2}>${ssrInterpolate(content.data)}</pre>`);
                        if (((_b = (_a = unref(newsData).contents) == null ? void 0 : _a[index + 1]) == null ? void 0 : _b.type) != "image") {
                          _push3(ssrRenderComponent(_component_x_space, { height: 25 }, null, _parent3, _scopeId2));
                        } else {
                          _push3(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent3, _scopeId2));
                        }
                        _push3(`</div>`);
                      } else if (content.type == "content") {
                        _push3(`<div${_scopeId2}><pre class="font-normal whitespace-pre-line font-robo text-body text-justify"${_scopeId2}>${ssrInterpolate(content.data)}</pre>`);
                        if (((_d = (_c = unref(newsData).contents) == null ? void 0 : _c[index + 1]) == null ? void 0 : _d.type) != "image") {
                          _push3(ssrRenderComponent(_component_x_space, { height: 25 }, null, _parent3, _scopeId2));
                        } else {
                          _push3(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent3, _scopeId2));
                        }
                        _push3(`</div>`);
                      } else if (content.type == "image") {
                        _push3(`<div${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_x_image, {
                          path: content.url,
                          title: content.imageTitle,
                          radius: 0
                        }, null, _parent3, _scopeId2));
                        _push3(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        content.type == "content-in-dam" ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("pre", { class: "font-bold whitespace-pre-line font-robo text-body text-justify" }, toDisplayString(content.data), 1),
                          ((_f = (_e = unref(newsData).contents) == null ? void 0 : _e[index + 1]) == null ? void 0 : _f.type) != "image" ? (openBlock(), createBlock(_component_x_space, {
                            key: 0,
                            height: 25
                          })) : (openBlock(), createBlock(_component_x_space, {
                            key: 1,
                            height: 40
                          }))
                        ])) : content.type == "content" ? (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode("pre", { class: "font-normal whitespace-pre-line font-robo text-body text-justify" }, toDisplayString(content.data), 1),
                          ((_h = (_g = unref(newsData).contents) == null ? void 0 : _g[index + 1]) == null ? void 0 : _h.type) != "image" ? (openBlock(), createBlock(_component_x_space, {
                            key: 0,
                            height: 25
                          })) : (openBlock(), createBlock(_component_x_space, {
                            key: 1,
                            height: 40
                          }))
                        ])) : content.type == "image" ? (openBlock(), createBlock("div", { key: 2 }, [
                          createVNode(_component_x_image, {
                            path: content.url,
                            title: content.imageTitle,
                            radius: 0
                          }, null, 8, ["path", "title"]),
                          createVNode(_component_x_space, { height: 40 })
                        ])) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
              if (unref(newsData).author) {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_x_space, { height: 50 }, null, _parent2, _scopeId));
                _push2(`<p class="text-right font-bold text-body"${_scopeId}>${ssrInterpolate(unref(newsData).author)}</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_x_space, { height: 80 }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_x_line, { className: "" }, null, _parent2, _scopeId));
              _push2(`<section class="w-full block laptop:hidden"${_scopeId}><div${_scopeId}><h2 class="font-bold text-subtitle text-primary mt-5 leading-[40px]"${_scopeId}> TIN T\u1EE8C N\u1ED4I B\u1EACT </h2>`);
              _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_x_core_ttnb, {
                exclude: [unref(newsData)._id]
              }, {
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
              _push2(`</div></section><h2 class="font-bold text-subtitle text-primary mt-5 leading-[40px]"${_scopeId}>TIN T\u1EE8C KH\xC1C</h2>`);
              _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_x_core_ttk, {
                exclude: [unref(newsData)._id]
              }, {
                default: withCtx(({ items }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="grid grid-cols-2 gap-[25px]"${_scopeId2}><!--[-->`);
                    ssrRenderList(items, (item, index) => {
                      _push3(ssrRenderComponent(_component_x_page_news_thumb_ver, {
                        key: index,
                        news: item
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "grid grid-cols-2 gap-[25px]" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                          return openBlock(), createBlock(_component_x_page_news_thumb_ver, {
                            key: index,
                            news: item
                          }, null, 8, ["news"]);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_x_space, { height: 80 }, null, _parent2, _scopeId));
              _push2(`</section><section class="w-full min-w-[400px] hidden laptop:block"${_scopeId}><div${_scopeId}><h2 class="font-bold text-subtitle text-primary mt-5"${_scopeId}>TIN T\u1EE8C N\u1ED4I B\u1EACT</h2>`);
              _push2(ssrRenderComponent(_component_x_space, { height: 15 }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_x_line, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_x_space, { height: 40 }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_x_core_ttnb, {
                exclude: [unref(newsData)._id]
              }, {
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
              _push2(`</div></section></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_x_space, { height: 40 }),
              createVNode("div", null, [
                createVNode("h2", { class: "font-bold text-14 text-primary" }, "TIN T\u1EE8C - S\u1EF0 KI\u1EC6N"),
                createVNode(_component_x_space, { height: 10 }),
                createVNode(_component_x_line, { className: "w-[60px] h-[2px]" })
              ]),
              createVNode(_component_x_space, { height: 40 }),
              unref(newsData) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex gap-[40px]"
              }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "font-bold text-title-news text-primary" }, toDisplayString(unref(newsData).title), 1)
                ]),
                createVNode("div", { class: "tablet:min-w-[400px] hidden laptop:block" })
              ])) : createCommentVNode("", true),
              unref(newsData) ? (openBlock(), createBlock("div", {
                key: 1,
                class: "flex gap-[40px]"
              }, [
                createVNode("section", null, [
                  createVNode("div", { class: "flex justify-between align-middle mt-5" }, [
                    createVNode("div", null, [
                      createVNode("span", { class: "text-[10px]" }, toDisplayString(("$formatter" in _ctx ? _ctx.$formatter : unref(__unimport_$formatter))().formatVNTime(unref(newsData).createdAt)), 1)
                    ]),
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode("div", { class: "border border-primary hover:border-primary hover:bg-primary hover:text-main p-[5px] rounded-full box-border cursor-pointer group" }, [
                        createVNode(unref(FBIcon), { class: "h-3 w-3 laptop:w-4 laptop:h-4 fill-current text-primary group-hover:text-main" })
                      ]),
                      createVNode("div", { class: "border border-primary hover:border-primary hover:bg-primary hover:text-main p-[5px] rounded-full box-border cursor-pointer group" }, [
                        createVNode(unref(YTIcon), { class: "h-3 w-3 laptop:w-4 laptop:h-4 fill-current text-primary group-hover:text-main" })
                      ]),
                      createVNode("div", { class: "border border-primary hover:border-primary hover:bg-primary hover:text-main p-[5px] rounded-full box-border cursor-pointer group" }, [
                        createVNode(unref(IGIcon), { class: "h-3 w-3 laptop:w-4 laptop:h-4 fill-current text-primary group-hover:text-main" })
                      ])
                    ])
                  ]),
                  createVNode(_component_x_space, {
                    height: 15,
                    class: "mb-[1px]"
                  }),
                  createVNode(_component_x_line),
                  createVNode(_component_x_space, { height: 40 }),
                  createVNode("h3", { class: "font-bold text-body text-justify" }, toDisplayString(unref(newsData).subtitle), 1),
                  createVNode(_component_x_space, { height: 40 }),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(newsData).contents, (content, index) => {
                    return openBlock(), createBlock(_component_divs, { key: content }, {
                      default: withCtx(() => {
                        var _a, _b, _c, _d;
                        return [
                          content.type == "content-in-dam" ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("pre", { class: "font-bold whitespace-pre-line font-robo text-body text-justify" }, toDisplayString(content.data), 1),
                            ((_b = (_a = unref(newsData).contents) == null ? void 0 : _a[index + 1]) == null ? void 0 : _b.type) != "image" ? (openBlock(), createBlock(_component_x_space, {
                              key: 0,
                              height: 25
                            })) : (openBlock(), createBlock(_component_x_space, {
                              key: 1,
                              height: 40
                            }))
                          ])) : content.type == "content" ? (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode("pre", { class: "font-normal whitespace-pre-line font-robo text-body text-justify" }, toDisplayString(content.data), 1),
                            ((_d = (_c = unref(newsData).contents) == null ? void 0 : _c[index + 1]) == null ? void 0 : _d.type) != "image" ? (openBlock(), createBlock(_component_x_space, {
                              key: 0,
                              height: 25
                            })) : (openBlock(), createBlock(_component_x_space, {
                              key: 1,
                              height: 40
                            }))
                          ])) : content.type == "image" ? (openBlock(), createBlock("div", { key: 2 }, [
                            createVNode(_component_x_image, {
                              path: content.url,
                              title: content.imageTitle,
                              radius: 0
                            }, null, 8, ["path", "title"]),
                            createVNode(_component_x_space, { height: 40 })
                          ])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1024);
                  }), 128)),
                  unref(newsData).author ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(_component_x_space, { height: 50 }),
                    createVNode("p", { class: "text-right font-bold text-body" }, toDisplayString(unref(newsData).author), 1)
                  ])) : createCommentVNode("", true),
                  createVNode(_component_x_space, { height: 80 }),
                  createVNode(_component_x_line, { className: "" }),
                  createVNode("section", { class: "w-full block laptop:hidden" }, [
                    createVNode("div", null, [
                      createVNode("h2", { class: "font-bold text-subtitle text-primary mt-5 leading-[40px]" }, " TIN T\u1EE8C N\u1ED4I B\u1EACT "),
                      createVNode(_component_x_space, { height: 40 }),
                      createVNode(_component_x_core_ttnb, {
                        exclude: [unref(newsData)._id]
                      }, {
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
                      }, 8, ["exclude"])
                    ])
                  ]),
                  createVNode("h2", { class: "font-bold text-subtitle text-primary mt-5 leading-[40px]" }, "TIN T\u1EE8C KH\xC1C"),
                  createVNode(_component_x_space, { height: 40 }),
                  createVNode(_component_x_core_ttk, {
                    exclude: [unref(newsData)._id]
                  }, {
                    default: withCtx(({ items }) => [
                      createVNode("div", { class: "grid grid-cols-2 gap-[25px]" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                          return openBlock(), createBlock(_component_x_page_news_thumb_ver, {
                            key: index,
                            news: item
                          }, null, 8, ["news"]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  }, 8, ["exclude"]),
                  createVNode(_component_x_space, { height: 80 })
                ]),
                createVNode("section", { class: "w-full min-w-[400px] hidden laptop:block" }, [
                  createVNode("div", null, [
                    createVNode("h2", { class: "font-bold text-subtitle text-primary mt-5" }, "TIN T\u1EE8C N\u1ED4I B\u1EACT"),
                    createVNode(_component_x_space, { height: 15 }),
                    createVNode(_component_x_line),
                    createVNode(_component_x_space, { height: 40 }),
                    createVNode(_component_x_core_ttnb, {
                      exclude: [unref(newsData)._id]
                    }, {
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
                    }, 8, ["exclude"])
                  ])
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slugify]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CrbdD24X.mjs.map
