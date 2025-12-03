import { _ as _sfc_main$1 } from './ver-CdpQh6no.mjs';
import { computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    exclude: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    const props = __props;
    const data = [
      {
        title: "PH\xC1T TRI\u1EC2N V\u0102N H\xD3A - NGH\u1EC6 THU\u1EACT",
        subtitle: "Kh\xF4ng gian c\u1ED3ng chi\xEAng T\xE2y Nguy\xEAn l\xE0 ngu\u1ED3n c\u1EA3m h\u1EE9ng l\u1EDBn, \u0111\xF3ng g\xF3p v\xE0o n\u1EC1n v\u0103n h\xF3a, ngh\u1EC7 thu\u1EADt n\u01B0\u1EDBc nh\xE0 nh\u1EEFng thanh \xE2m \u0111\u1ED9c b\u1EA3n v\xE0 phong ph\xFA",
        slugify: "tiem-nang-phat-trien/van-hoa-nghe-thuat",
        type: "van-hoa-nghe-thuat",
        url: "/assets/page/phat-trien/nghe-thuat/1.jpg"
      },
      {
        title: "PH\xC1T TRI\u1EC2N DU L\u1ECACH V\u0102N H\xD3A - C\u1ED8NG \u0110\u1ED2NG",
        subtitle: "G\u1EAFn li\u1EC1n kh\xF4ng gian v\u0103n h\xF3a c\u1ED3ng chi\xEAng T\xE2y Nguy\xEAn v\u1EDBi vi\u1EC7c ph\xE1t tri\u1EC3n du l\u1ECBch v\u0103n h\xF3a - c\u1ED9ng \u0111\u1ED3ng l\xE0 kim ch\u1EC9 nam cho ng\xE0nh v\u0103n h\xF3a, du l\u1ECBch c\u1EE7a v\xF9ng",
        slugify: "tiem-nang-phat-trien/du-lich-van-hoa-cong-dong",
        type: "du-lich-van-hoa-cong-dong",
        url: "/assets/page/phat-trien/cong-dong/1.jpg"
      },
      {
        title: "PH\xC1T TRI\u1EC2N DU L\u1ECACH T\u1EA0I \u0110\u1ECAA PH\u01AF\u01A0NG",
        subtitle: "Gi\u1EEF g\xECn v\xE0 lan t\u1ECFa kh\xF4ng gian v\u0103n h\xF3a c\u1ED3ng chi\xEAng t\u1EA1i c\xE1c v\xF9ng, x\xE3, \u0111\u1ECBa ph\u01B0\u01A1ng kh\xF4ng ch\u1EC9 l\xE0 ph\u01B0\u01A1ng th\u1EE9c h\u1EEFu hi\u1EC7u \u0111\u1EC3 ph\xE1t tri\u1EC3n du l\u1ECBch m\xE0 c\xF2n g\xF3p ph\u1EA7n b\u1EA3o t\u1ED3n v\xE0 gi\u1EEF g\xECn di s\u1EA3n v\u0103n h\xF3a phi v\u1EADt th\u1EC3 nh\xE2n lo\u1EA1i",
        slugify: "tiem-nang-phat-trien/du-lich-tai-dia-phuong",
        type: "du-lich-tai-dia-phuong",
        url: "/assets/page/phat-trien/dia-phuong/3.jpg"
      }
    ];
    const dinamicData = computed(() => {
      if (!props.exclude) {
        return data;
      }
      return data.filter((item) => {
        return !props.exclude.includes(item.type);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_x_page_news_thumb_ver = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-[40px] grid-cols-1 laptop:grid-cols-3" }, _attrs))}><!--[-->`);
      ssrRenderList(dinamicData.value, (item) => {
        _push(ssrRenderComponent(_component_x_page_news_thumb_ver, {
          key: item,
          news: item
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/page/van-hoa-nghe-thuat/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=index-DZvhndt2.mjs.map
