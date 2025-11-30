import { _ as _sfc_main$1 } from './image-DeCRukUU.mjs';
import { _ as __unimport_$image } from './_image-CatW-12k.mjs';
import { unref, useSSRContext } from 'vue';
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
      var _a, _b, _c, _d;
      const _component_x_image = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_x_image, {
        path: (_a = __props.news) == null ? void 0 : _a.thumbnail,
        url: ("$image" in _ctx ? _ctx.$image : unref(__unimport_$image))().url,
        "click-to": (_b = __props.news) == null ? void 0 : _b.slugify
      }, null, _parent));
      _push(`<div class="pt-[25px] flex flex-col gap-[25px]"><p class="font-robo font-medium text-subtitle text-primary hover:opacity-[79%] cursor-pointer">${ssrInterpolate(((_c = __props.news) == null ? void 0 : _c.title) || "PH\xC1T TRI\u1EC2N V\u0102N H\xD3A - NGH\u1EC6 THU\u1EACT")}</p><p class="font-robo font-normal text-body text-justify">${ssrInterpolate(((_d = __props.news) == null ? void 0 : _d.subtitle) || "X\xE2y d\u1EF1ng \u0111i\u1EC3m check-in v\u0103n ho\xE1 nh\u01B0 c\u1ED5ng l\xE0ng truy\u1EC1n th\u1ED1ng, t\u01B0\u1EE3ng ngh\u1EC7 nh\xE2n, v\u01B0\u1EDDn nh\u1EA1c c\u1EE5. K\u1EBFt h\u1EE3p ngh\u1EC7 thu\u1EADt tr\xECnh di\u1EC5n \xE1nh s\xE1ng & \xE2m thanh C\u1ED3ng chi\xEAng cho du l\u1ECBch \u0111\xEAm")}</p></div></div>`);
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
//# sourceMappingURL=ver-BHFqHk9E.mjs.map
