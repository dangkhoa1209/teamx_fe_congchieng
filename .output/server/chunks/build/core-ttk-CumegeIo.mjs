import { ssrRenderSlot } from 'vue/server-renderer';
import { ref, nextTick, useSSRContext } from 'vue';
import { $ as $api, a as $url } from './_url-Dpuck_OO.mjs';

const _sfc_main = {
  __name: "core-ttk",
  __ssrInlineRender: true,
  props: {
    type: { type: String, default: "" },
    exclude: { type: Array, default: () => [] },
    limit: { type: Number, default: 10 }
  },
  emits: ["load-end"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const news = ref([]);
    const newsLastId = ref("");
    const hasMore = ref(true);
    const fetchNews = async () => {
      var _a;
      if (!hasMore.value) return [];
      try {
        await nextTick();
        const response = await $api($url.news.other, {
          body: {
            location: props.type,
            exclude: props.exclude || [],
            limit: props.limit,
            newsLastId: newsLastId.value
          }
        });
        const { data, success } = ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.value) || {
          data: null,
          success: false
        };
        if (success && (data == null ? void 0 : data.length) > 0) {
          news.value.push(...data);
          newsLastId.value = data[data.length - 1]._id;
          if (data.length < props.limit) {
            hasMore.value = false;
            emit("load-end");
          }
        } else {
          hasMore.value = false;
          emit("load-end");
        }
      } catch (err) {
        hasMore.value = false;
        emit("load-end");
      }
    };
    const loadMore = async () => {
      await fetchNews();
    };
    __expose({ loadMore });
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlot(_ctx.$slots, "default", {
        items: news.value,
        loadMore,
        hasMore: hasMore.value
      }, null, _push, _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core-ttk.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=core-ttk-CumegeIo.mjs.map
