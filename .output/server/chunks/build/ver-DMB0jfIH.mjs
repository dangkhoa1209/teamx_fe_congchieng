import { _ as _sfc_main$1 } from './image-DeCRukUU.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useRouter } from './server.mjs';

const _sfc_main = {
  __name: "ver",
  __ssrInlineRender: true,
  props: {
    news: Object,
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
      const _component_x_image = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_x_image, {
        path: (_a = __props.news) == null ? void 0 : _a.thumbnail,
        url: (_b = __props.news) == null ? void 0 : _b.url,
        "click-to": (_c = __props.news) == null ? void 0 : _c.slugify
      }, null, _parent));
      _push(`<div class="pt-[15px] tablet:pt-[25px] flex flex-col gap-[10px] tablet:gap-[25px]"><p class="font-robo font-medium text-subtitle text-primary hover:opacity-[79%] cursor-pointer">${ssrInterpolate((_d = __props.news) == null ? void 0 : _d.title)}</p><p class="font-robo font-normal text-body text-justify">${ssrInterpolate((_e = __props.news) == null ? void 0 : _e.subtitle)}</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/news/thumb/ver.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ver-DMB0jfIH.mjs.map
