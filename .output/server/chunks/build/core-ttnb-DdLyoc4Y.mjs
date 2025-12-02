import { _ as _sfc_main$2 } from './image-DeCRukUU.mjs';
import { mergeProps, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { u as useRouter } from './server.mjs';

const _sfc_main$1 = {
  __name: "hor",
  __ssrInlineRender: true,
  props: {
    news: {
      type: Object,
      default: {}
    },
    exclude: {
      type: Array,
      default: []
    },
    imageClass: {
      type: String,
      default: ""
    },
    contentClass: {
      type: String,
      default: ""
    },
    titleClass: {
      type: String,
      default: ""
    },
    subTitleClas: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_x_image = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-4" }, _attrs))}><div class="w-[40%] min-w-[40%]">`);
      _push(ssrRenderComponent(_component_x_image, {
        path: (_a = __props.news) == null ? void 0 : _a.thumbnail,
        url: (_b = __props.news) == null ? void 0 : _b.url,
        "click-to": (_c = __props.news) == null ? void 0 : _c.slugify
      }, null, _parent));
      _push(`</div><div class="w-[60%] flex flex-col gap-[25px]">`);
      if (!__props.exclude.includes("title")) {
        _push(`<p class="font-robo font-medium text-subtitle text-primary hover:opacity-[79%] cursor-pointer">${ssrInterpolate((_d = __props.news) == null ? void 0 : _d.title)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!__props.exclude.includes("subTitle")) {
        _push(`<p class="font-robo font-normal text-body text-justify">${ssrInterpolate((_e = __props.news) == null ? void 0 : _e.subTitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/news/thumb/hor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "core-ttnb",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "tin-tuc-su-kien"
    }
  },
  setup(__props) {
    const featuredSlots = ref([]);
    const show = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (!unref(featuredSlots).length && unref(show)) {
        _push(`<div><p class="text-body text-center">Ch\u01B0a c\xF3 tin t\u1EE9c s\u1EF1 ki\u1EC7n n\u1ED5i b\u1EADt</p></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", { items: unref(featuredSlots) }, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core-ttnb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=core-ttnb-DdLyoc4Y.mjs.map
