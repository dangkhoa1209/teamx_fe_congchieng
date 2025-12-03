import { ref, toRaw, isReactive, isRef, computed, toValue, reactive, watch } from 'vue';
import { d as useNuxtApp, c as useRuntimeConfig, u as useRouter, i as fetchDefaults, j as useRequestFetch } from './server.mjs';
import { $ as $store } from './_store-Ndlczi3l.mjs';
import { E as hash } from '../nitro/nitro.mjs';
import { isPlainObject } from '@vue/shared';
import { u as useAsyncData } from './asyncData-BGFq45PL.mjs';

function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  if (!immediate) {
    let setImmediate = function() {
      _asyncDataOptions.immediate = true;
    };
    watch(key, setImmediate, { flush: "sync", once: true });
    watch([...watchSources || [], _fetchOptions], setImmediate, { flush: "sync", once: true });
  }
  const asyncData = useAsyncData(watchSources === false ? key.value : key, (_, { signal }) => {
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const obj = {};
      for (const entry of value.entries()) {
        const [key, val] = entry;
        obj[key] = val instanceof File ? val.name : val;
      }
      segments.push(hash(obj));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
const reformatUrl = (url, options = {}) => {
  const uriParams = options.uriParams || options.params || {};
  const queryParams = options.query || {};
  if (uriParams) {
    if (url.startsWith("/")) {
      url = url.substring(1);
    }
    Object.keys(uriParams).forEach((key) => {
      const value = encodeURIComponent(uriParams[key]);
      url = url.replace(key, value);
    });
  }
  if (Object.keys(queryParams).length > 0) {
    const queryString = new URLSearchParams(queryParams).toString();
    url += (url.includes("?") ? "&" : "?") + queryString;
  }
  return url;
};
const setCacheOptions = (options = {}, value) => {
  options.initialCache = value;
};
const errorProcess = (app, error) => {
};
const disableReactive = (data) => {
  if (data instanceof FormData) return data;
  if (Array.isArray(data)) return data.map((d) => disableReactive(d));
  if (typeof data === "object" && data !== null) {
    data = { ...toRaw(data) };
    Object.keys(data).forEach((key) => {
      if (!(data[key] instanceof URLSearchParams || data[key] instanceof FormData)) {
        const raw = toRaw(data[key]);
        if (Array.isArray(raw)) {
          data[key] = raw.map((o) => disableReactive(o));
        } else if (raw !== null && typeof raw === "object") {
          data[key] = { ...disableReactive(raw) };
        } else {
          data[key] = raw;
        }
      }
    });
    return data;
  }
  if (isReactive(data) || isRef(data)) {
    return toRaw(data);
  }
  return data;
};
async function $api(source, options = {}, showError = true) {
  var _a, _b, _c, _d, _e, _f, _g;
  const app = useNuxtApp();
  const config = useRuntimeConfig().public;
  const { auth: auth2 } = $store();
  const router = useRouter();
  const refreshTokenFn = async () => {
    var _a2, _b2, _c2;
    try {
      const body = new URLSearchParams({
        refresh_token: auth2.refreshToken,
        grant_type: config == null ? void 0 : config.grantTypeRefresh,
        client_id: config == null ? void 0 : config.clientId,
        client_secret: config == null ? void 0 : config.clientSecret
      });
      const res = await useFetch("/auth/refresh", {
        baseURL: config.apiURL,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body
      }, "$pQJ8E_XQl5");
      const tokenData = (_a2 = res.data) == null ? void 0 : _a2.value;
      if (!tokenData.data.accessToken) {
        (_b2 = auth2 == null ? void 0 : auth2.clear) == null ? void 0 : _b2.call(auth2);
        router.push({ name: "admin-auth-login" });
      }
      if (tokenData) {
        auth2.setAccessToken(tokenData.data.accessToken);
        auth2.setRefreshToken(tokenData.data.refreshToken);
        return tokenData.data.accessToken;
      }
      return false;
    } catch (err) {
      (_c2 = auth2 == null ? void 0 : auth2.clear) == null ? void 0 : _c2.call(auth2);
      router.push({ name: "admin-auth-login" });
    }
  };
  const accessToken = auth2 == null ? void 0 : auth2.accessToken;
  const requestHeaders = {
    ...accessToken && { Authorization: "Bearer " + accessToken },
    "Accept-Language": "vi",
    ...options.headers
  };
  setCacheOptions(options, false);
  options.key = null;
  options.watch = [];
  options = disableReactive({ ...options });
  options.cache = false;
  try {
    const { method, url, headers } = source;
    const opts = {
      onResponse({ response: response2 }) {
        response2._data.headers = response2.headers;
        return response2._data;
      },
      baseURL: config.apiURL,
      headers: {
        ...headers,
        ...requestHeaders
      },
      ...options,
      method
    };
    const response = await useFetch(reformatUrl(url, options), opts, "$8gTrt-ByVe");
    const errorResponse = response.error && response.error.value || {};
    const errorStatus = errorResponse.statusCode || 500;
    if (errorStatus === 401) {
      const token = await refreshTokenFn();
      if (!token) {
        (_a = auth2 == null ? void 0 : auth2.clear) == null ? void 0 : _a.call(auth2);
        router.push({ name: "admin-auth-login" });
      }
      opts.headers.Authorization = `Bearer ${token}`;
      const response2 = await useFetch(reformatUrl(url, options), opts, "$uBdp49tiAz");
      const errorResponse2 = response2.error && response2.error.value || {};
      const errorStatus2 = errorResponse2.statusCode || 500;
      if (errorStatus2 === 403) {
        (_b = auth2 == null ? void 0 : auth2.clear) == null ? void 0 : _b.call(auth2);
        router.push({ name: "admin-auth-login" });
        return;
      }
      if (response2.status.value === "error") {
        showError && errorProcess(app, response2.error);
        Object.assign(response2, {
          data: ref((_d = (_c = response2 == null ? void 0 : response2.error) == null ? void 0 : _c.value) == null ? void 0 : _d.data)
        });
        return null;
      }
      return response2;
    }
    if (errorStatus === 403) {
      (_e = auth2 == null ? void 0 : auth2.clear) == null ? void 0 : _e.call(auth2);
      router.push({ name: "admin-auth-login" });
      return;
    }
    if (response.status.value === "error") {
      showError && errorProcess(app, response.error);
      Object.assign(response, {
        data: ref((_g = (_f = response == null ? void 0 : response.error) == null ? void 0 : _f.value) == null ? void 0 : _g.data)
      });
      return null;
    }
    console.log("response1: ", response);
    return response;
  } catch (e) {
    console.log("e", e);
    throw e;
  }
}
const auth = {
  login: {
    method: "post",
    url: "/auth/token"
  },
  logout: {
    method: "post",
    url: "/admin/logout"
  }
  // register: {
  //   method: 'post',
  //   url: '/auth/register',
  //   headers: {
  //     tokenInvite: ''
  //   }
  // },
  // forgotPassword: {
  //   method: 'post',
  //   url: '/auth/forgot-password'
  // },
  // resetPassword: {
  //   method: 'post',
  //   url: '/auth/reset-password'
  // },
  // resetPasswordConfirm: {
  //   method: 'post',
  //   url: '/auth/reset-password-confirm'
  // },
  // changePassword: {
  //   method: 'put',
  //   url: 'auth/user/change-password'
  // },
  // acceptInvitation: {
  //   method: 'post',
  //   url: 'auth/invite/accept'
  // }
};
const newsAdmin = {
  list: {
    method: "post",
    url: "/admin/news/list"
  },
  detail: {
    method: "get",
    url: "/admin/news/:id"
  },
  create: {
    method: "post",
    url: "/admin/news"
  },
  update: {
    method: "put",
    url: "/admin/news/:id"
  },
  delete: {
    method: "delete",
    url: "/admin/news"
  },
  changeStatus: {
    method: "patch",
    url: "/admin/news/:id/status"
  }
};
const accountAdmin = {
  save: {
    method: "post",
    url: "/admin/account/save"
  },
  list: {
    method: "post",
    url: "/admin/account/list"
  },
  update_permission: {
    method: "post",
    url: "/admin/account/update-permission"
  },
  update_password: {
    method: "post",
    url: "/admin/account/update-password"
  },
  delete: {
    method: "post",
    url: "/admin/account/delete"
  }
};
const profileAdmin = {
  logout: {
    method: "post",
    url: "/admin/profile/logout"
  },
  change_password: {
    method: "post",
    url: "/admin/profile/change-password"
  }
};
const featuredNewsAdmin = {
  update: {
    method: "post",
    url: "/admin/featured-news"
  },
  get: {
    method: "post",
    url: "/admin/featured-news/get"
  }
};
const imagePageAdmin = {
  update: {
    method: "post",
    url: "/admin/page-image"
  },
  get: {
    method: "post",
    url: "/admin/page-image/get"
  }
};
const news = {
  detail: {
    method: "post",
    url: "/news"
  },
  find: {
    method: "post",
    url: "/news/find"
  },
  other: {
    method: "post",
    url: "/news/other"
  }
};
const featuredNews = {
  get: {
    method: "post",
    url: "/featured-news/get"
  }
};
const imagePage = {
  get: {
    method: "post",
    url: "/page-image/get"
  }
};
const $url = {
  auth,
  news,
  featuredNews,
  image_page: imagePage,
  admin: {
    news: newsAdmin,
    account: accountAdmin,
    profile: profileAdmin,
    featuredNews: featuredNewsAdmin,
    image_page: imagePageAdmin
  }
};

export { $api as $, $url as a };
//# sourceMappingURL=_url-44uO088s.mjs.map
