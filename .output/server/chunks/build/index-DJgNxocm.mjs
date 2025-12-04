import { shallowRef, computed, hasInjectionContext, nextTick, toValue, watchEffect, getCurrentInstance, getCurrentScope, inject, watch, onScopeDispose, unref } from 'vue';

function tryOnScopeDispose(fn, failSilently) {
  if (getCurrentScope()) {
    onScopeDispose(fn, failSilently);
    return true;
  }
  return false;
}
const localProvidedStateMap = /* @__PURE__ */ new WeakMap();
const injectLocal = /* @__NO_SIDE_EFFECTS__ */ (...args) => {
  var _getCurrentInstance;
  const key = args[0];
  const instance = (_getCurrentInstance = getCurrentInstance()) === null || _getCurrentInstance === void 0 ? void 0 : _getCurrentInstance.proxy;
  const owner = instance !== null && instance !== void 0 ? instance : getCurrentScope();
  if (owner == null && !hasInjectionContext()) throw new Error("injectLocal must be called in setup");
  if (owner && localProvidedStateMap.has(owner) && key in localProvidedStateMap.get(owner)) return localProvidedStateMap.get(owner)[key];
  return inject(...args);
};
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
function increaseWithUnit(target, delta) {
  var _target$match;
  if (typeof target === "number") return target + delta;
  const value = ((_target$match = target.match(/^-?\d+\.?\d*/)) === null || _target$match === void 0 ? void 0 : _target$match[0]) || "";
  const unit = target.slice(value.length);
  const result = Number.parseFloat(value) + delta;
  if (Number.isNaN(result)) return target;
  return result + unit;
}
function pxValue(px) {
  return px.endsWith("rem") ? Number.parseFloat(px) * 16 : Number.parseFloat(px);
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
function tryOnMounted(fn, sync = true, target) {
  if (getLifeCycleTarget()) ;
  else if (sync) fn();
  else nextTick(fn);
}
function watchImmediate(source, cb, options) {
  return watch(source, cb, {
    ...options,
    immediate: true
  });
}
const defaultWindow = void 0;
function unrefElement(elRef) {
  var _$el;
  const plain = toValue(elRef);
  return (_$el = plain === null || plain === void 0 ? void 0 : plain.$el) !== null && _$el !== void 0 ? _$el : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e) => e != null);
    return test.every((e) => typeof e !== "string") ? test : void 0;
  });
  const stopWatch = watchImmediate(() => {
    var _firstParamTargets$va, _firstParamTargets$va2;
    return [
      (_firstParamTargets$va = (_firstParamTargets$va2 = firstParamTargets.value) === null || _firstParamTargets$va2 === void 0 ? void 0 : _firstParamTargets$va2.map((e) => unrefElement(e))) !== null && _firstParamTargets$va !== void 0 ? _firstParamTargets$va : [defaultWindow].filter((e) => e != null),
      toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
      toArray(unref(firstParamTargets.value ? args[2] : args[1])),
      toValue(firstParamTargets.value ? args[3] : args[2])
    ];
  }, ([raw_targets, raw_events, raw_listeners, raw_options]) => {
    cleanup();
    if (!(raw_targets === null || raw_targets === void 0 ? void 0 : raw_targets.length) || !(raw_events === null || raw_events === void 0 ? void 0 : raw_events.length) || !(raw_listeners === null || raw_listeners === void 0 ? void 0 : raw_listeners.length)) return;
    const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
    cleanups.push(...raw_targets.flatMap((el) => raw_events.flatMap((event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone)))));
  }, { flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window$1 = defaultWindow, ignore = [], capture = true, detectIframe = false, controls = false } = options;
  if (!window$1) return controls ? {
    stop: noop,
    cancel: noop,
    trigger: noop
  } : noop;
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return toValue(ignore).some((target$1) => {
      if (typeof target$1 === "string") return Array.from(window$1.document.querySelectorAll(target$1)).some((el) => el === event.target || event.composedPath().includes(el));
      else {
        const el = unrefElement(target$1);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  function hasMultipleRoots(target$1) {
    const vm = toValue(target$1);
    return vm && vm.$.subTree.shapeFlag === 16;
  }
  function checkMultipleRoots(target$1, event) {
    const vm = toValue(target$1);
    const children = vm.$.subTree && vm.$.subTree.children;
    if (children == null || !Array.isArray(children)) return false;
    return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
  }
  const listener = (event) => {
    const el = unrefElement(target);
    if (event.target == null) return;
    if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event)) return;
    if (!el || el === event.target || event.composedPath().includes(el)) return;
    if ("detail" in event && event.detail === 0) shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  let isProcessingClick = false;
  const cleanup = [
    useEventListener(window$1, "click", (event) => {
      if (!isProcessingClick) {
        isProcessingClick = true;
        setTimeout(() => {
          isProcessingClick = false;
        }, 0);
        listener(event);
      }
    }, {
      passive: true,
      capture
    }),
    useEventListener(window$1, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window$1, "blur", (event) => {
      setTimeout(() => {
        var _window$document$acti;
        const el = unrefElement(target);
        if (((_window$document$acti = window$1.document.activeElement) === null || _window$document$acti === void 0 ? void 0 : _window$document$acti.tagName) === "IFRAME" && !(el === null || el === void 0 ? void 0 : el.contains(window$1.document.activeElement))) handler(event);
      }, 0);
    }, { passive: true })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  if (controls) return {
    stop,
    cancel: () => {
      shouldListen = false;
    },
    trigger: (event) => {
      shouldListen = true;
      listener(event);
      shouldListen = false;
    }
  };
  return stop;
}
// @__NO_SIDE_EFFECTS__
function useMounted() {
  const isMounted = shallowRef(false);
  getCurrentInstance();
  return isMounted;
}
// @__NO_SIDE_EFFECTS__
function useSupported(callback) {
  const isMounted = /* @__PURE__ */ useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
const ssrWidthSymbol = Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function useSSRWidth() {
  const ssrWidth = hasInjectionContext() ? /* @__PURE__ */ injectLocal(ssrWidthSymbol, null) : null;
  return typeof ssrWidth === "number" ? ssrWidth : void 0;
}
function useMediaQuery(query, options = {}) {
  const { window: window$1 = defaultWindow, ssrWidth = /* @__PURE__ */ useSSRWidth() } = options;
  const isSupported = /* @__PURE__ */ useSupported(() => window$1 && "matchMedia" in window$1 && typeof window$1.matchMedia === "function");
  const ssrSupport = shallowRef(typeof ssrWidth === "number");
  const mediaQuery = shallowRef();
  const matches = shallowRef(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  watchEffect(() => {
    if (ssrSupport.value) {
      ssrSupport.value = !isSupported.value;
      matches.value = toValue(query).split(",").some((queryString) => {
        const not = queryString.includes("not all");
        const minWidth = queryString.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        const maxWidth = queryString.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let res = Boolean(minWidth || maxWidth);
        if (minWidth && res) res = ssrWidth >= pxValue(minWidth[1]);
        if (maxWidth && res) res = ssrWidth <= pxValue(maxWidth[1]);
        return not ? !res : res;
      });
      return;
    }
    if (!isSupported.value) return;
    mediaQuery.value = window$1.matchMedia(toValue(query));
    matches.value = mediaQuery.value.matches;
  });
  useEventListener(mediaQuery, "change", handler, { passive: true });
  return computed(() => matches.value);
}
// @__NO_SIDE_EFFECTS__
function useBreakpoints(breakpoints, options = {}) {
  function getValue$1(k, delta) {
    let v = toValue(breakpoints[toValue(k)]);
    if (delta != null) v = increaseWithUnit(v, delta);
    if (typeof v === "number") v = `${v}px`;
    return v;
  }
  const { window: window$1 = defaultWindow, strategy = "min-width", ssrWidth = /* @__PURE__ */ useSSRWidth() } = options;
  const ssrSupport = typeof ssrWidth === "number";
  const mounted = ssrSupport ? shallowRef(false) : { value: true };
  if (ssrSupport) tryOnMounted(() => mounted.value = !!window$1);
  function match(query, size) {
    if (!mounted.value && ssrSupport) return query === "min" ? ssrWidth >= pxValue(size) : ssrWidth <= pxValue(size);
    if (!window$1) return false;
    return window$1.matchMedia(`(${query}-width: ${size})`).matches;
  }
  const greaterOrEqual = (k) => {
    return useMediaQuery(() => `(min-width: ${getValue$1(k)})`, options);
  };
  const smallerOrEqual = (k) => {
    return useMediaQuery(() => `(max-width: ${getValue$1(k)})`, options);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => strategy === "min-width" ? greaterOrEqual(k) : smallerOrEqual(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  function current() {
    const points = Object.keys(breakpoints).map((k) => [
      k,
      shortcutMethods[k],
      pxValue(getValue$1(k))
    ]).sort((a, b) => a[2] - b[2]);
    return computed(() => points.filter(([, v]) => v.value).map(([k]) => k));
  }
  return Object.assign(shortcutMethods, {
    greaterOrEqual,
    smallerOrEqual,
    greater(k) {
      return useMediaQuery(() => `(min-width: ${getValue$1(k, 0.1)})`, options);
    },
    smaller(k) {
      return useMediaQuery(() => `(max-width: ${getValue$1(k, -0.1)})`, options);
    },
    between(a, b) {
      return useMediaQuery(() => `(min-width: ${getValue$1(a)}) and (max-width: ${getValue$1(b, -0.1)})`, options);
    },
    isGreater(k) {
      return match("min", getValue$1(k, 0.1));
    },
    isGreaterOrEqual(k) {
      return match("min", getValue$1(k));
    },
    isSmaller(k) {
      return match("max", getValue$1(k, -0.1));
    },
    isSmallerOrEqual(k) {
      return match("max", getValue$1(k));
    },
    isInBetween(a, b) {
      return match("min", getValue$1(a)) && match("max", getValue$1(b, -0.1));
    },
    current,
    active() {
      const bps = current();
      return computed(() => bps.value.length === 0 ? "" : bps.value.at(strategy === "min-width" ? -1 : 0));
    }
  });
}

export { onClickOutside as o, useBreakpoints as u };
//# sourceMappingURL=index-DJgNxocm.mjs.map
