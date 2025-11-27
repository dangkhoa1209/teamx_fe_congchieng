import { _ as _sfc_main$1 } from './image-CfPwRy5O.mjs';
import { _ as __unimport_$image } from './_image-CatW-12k.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
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
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_x_image = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-4" }, _attrs))}><div class="w-[40%] min-w-[40%]">`);
      _push(ssrRenderComponent(_component_x_image, {
        path: (_a = __props.news) == null ? void 0 : _a.thumbnail,
        url: ("$image" in _ctx ? _ctx.$image : unref(__unimport_$image))().url
      }, null, _parent));
      _push(`</div><div class="w-[60%] flex flex-col gap-[25px]">`);
      if (!__props.exclude.includes("title")) {
        _push(`<p class="font-robo font-medium text-subtitle text-primary text-justify">${ssrInterpolate(((_b = __props.news) == null ? void 0 : _b.title) || "Gi\u1EEF g\xECn b\u1EA3n s\u1EAFc v\u0103n ho\xE1 qua du l\u1ECBch c\u1ED3ng chi\xEAng \u1EDF L\xE2m \u0110\u1ED3ng")}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!__props.exclude.includes("subTitle")) {
        _push(`<p class="font-robo font-normal text-body text-justify">${ssrInterpolate(((_c = __props.news) == null ? void 0 : _c.subTitle) || "X\xE2y d\u1EF1ng \u0111i\u1EC3m check-in v\u0103n ho\xE1 nh\u01B0 c\u1ED5ng l\xE0ng truy\u1EC1n th\u1ED1ng, t\u01B0\u1EE3ng ngh\u1EC7 nh\xE2n, v\u01B0\u1EDDn nh\u1EA1c c\u1EE5. K\u1EBFt h\u1EE3p ngh\u1EC7 thu\u1EADt tr\xECnh di\u1EC5n \xE1nh s\xE1ng & \xE2m thanh C\u1ED3ng chi\xEAng cho du l\u1ECBch \u0111\xEAm")}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/news/thumb/hor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=hor-D3kLr8D8.mjs.map
