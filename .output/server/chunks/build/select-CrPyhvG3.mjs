import { toRefs, ref, computed, watch, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, createTextVNode, toDisplayString, withModifiers, withDirectives, vModelText, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { Field, ErrorMessage } from 'vee-validate';
import { d as useNuxtApp } from './server.mjs';

const _sfc_main = {
  __name: "select",
  __ssrInlineRender: true,
  props: {
    modelValue: [String, Number, Array],
    name: { type: String, required: true },
    label: String,
    placeholder: { type: String, default: "-- Ch\u1ECDn m\u1ED9t m\u1EE5c --" },
    description: String,
    rules: [String, Object, Function],
    options: { type: [Array, Function], default: () => [] },
    multiple: { type: Boolean, default: false },
    filterable: { type: Boolean, default: true },
    clearable: { type: Boolean, default: true },
    keyLabel: { type: String, default: "label" },
    keyValue: { type: String, default: "value" },
    disabled: Boolean,
    required: Boolean
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const { $searchObjects } = useNuxtApp();
    const props = __props;
    const emit = __emit;
    const { keyLabel, keyValue } = toRefs(props);
    const wrapperRef = ref(null);
    const showDropdown = ref(false);
    const search = ref("");
    const optionList = ref([]);
    const searchInput = ref(null);
    const modelArray = computed({
      get: () => {
        if (!props.modelValue) return [];
        return props.multiple ? Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue] : [props.modelValue];
      },
      set: (val) => {
        var _a;
        const newVal = props.multiple ? val : (_a = val[0]) != null ? _a : null;
        emit("update:modelValue", newVal);
      }
    });
    const loadOptions = async () => {
      try {
        const data = typeof props.options === "function" ? await props.options() : props.options;
        optionList.value = Array.isArray(data) ? data : [];
      } catch (err) {
        console.error("Load options error:", err);
        optionList.value = [];
      }
    };
    const filteredOptions = computed(() => {
      if (!props.filterable || !search.value.trim()) return optionList.value;
      search.value.toLowerCase().trim();
      return $searchObjects(optionList.value, keyLabel.value, search.value || "", {
        i: true,
        limit: 9999
      });
    });
    const isSelected = (value) => modelArray.value.includes(value);
    const getLabel = (value) => {
      const item = optionList.value.find((o) => o[props.keyValue] == value);
      return item ? item[props.keyLabel] : value;
    };
    const toggleItem = (value) => {
      if (props.disabled) return;
      let newArr = [...modelArray.value];
      const idx = newArr.indexOf(value);
      if (idx >= 0) {
        newArr.splice(idx, 1);
      } else {
        if (!props.multiple) newArr = [];
        newArr.push(value);
      }
      modelArray.value = newArr;
      if (!props.multiple) {
        showDropdown.value = false;
        search.value = "";
      }
    };
    const removeItem = (value) => {
      modelArray.value = modelArray.value.filter((v) => v !== value);
    };
    const selectAll = () => {
      const allValues = filteredOptions.value.map((item) => item[props.keyValue]);
      modelArray.value = [.../* @__PURE__ */ new Set([...modelArray.value, ...allValues])];
    };
    const clearAll = () => {
      modelArray.value = [];
      search.value = "";
      if (showDropdown.value) {
        nextTick(() => {
          var _a;
          return (_a = searchInput.value) == null ? void 0 : _a.focus();
        });
      }
    };
    const toggleDropdown = () => {
      if (props.disabled) return;
      showDropdown.value = !showDropdown.value;
      if (showDropdown.value) {
        search.value = "";
        nextTick(() => {
          var _a;
          return (_a = searchInput.value) == null ? void 0 : _a.focus();
        });
      }
    };
    watch(() => props.options, loadOptions, { deep: true });
    watch(showDropdown, (val) => {
      if (!val) search.value = "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full" }, _attrs))}>`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", __props.name)} class="mb-1 text-body font-medium font-robo">${ssrInterpolate(__props.label)} `);
        if (__props.required) {
          _push(`<span class="ml-0.5">*</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(Field), {
        name: __props.name,
        label: __props.label,
        rules: __props.rules,
        as: "div"
      }, {
        default: withCtx(({ field, errors, meta }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative w-full"${_scopeId}><div class="${ssrRenderClass([{ "border-red-500": errors.length && meta.touched }, "w-full rounded-2xl border px-4 py-2 transition-colors duration-200 outline-none bg-main border-primary hover:border-primary focus:ring-2 focus:ring-primary disabled:bg-gray-100 disabled:cursor-not-allowed h-[60px] text-body font-medium font-robo flex items-center justify-between cursor-pointer"])}"${_scopeId}><div class="flex flex-wrap gap-1 flex-1"${_scopeId}>`);
            if (__props.multiple && modelArray.value.length) {
              _push2(`<!--[-->`);
              ssrRenderList(modelArray.value, (val, idx) => {
                _push2(`<span class="inline-flex items-center gap-1 bg-primary text-main text-xs px-2 py-1 rounded-xl"${_scopeId}>${ssrInterpolate(getLabel(val))} <button class="hover:bg-main hover:text-primary rounded-full w-4 h-4 flex items-center justify-center text-xs"${_scopeId}> \xD7 </button></span>`);
              });
              _push2(`<!--]-->`);
            } else if (!__props.multiple && modelArray.value.length) {
              _push2(`<span${_scopeId}>${ssrInterpolate(getLabel(modelArray.value[0]))}</span>`);
            } else {
              _push2(`<span class="text-gray-400"${_scopeId}>${ssrInterpolate(__props.placeholder)}</span>`);
            }
            _push2(`</div><div class="flex items-center gap-2 ml-2"${_scopeId}>`);
            if (__props.clearable && modelArray.value.length && !__props.disabled) {
              _push2(`<button class="text-gray-400 hover:text-gray-600" title="X\xF3a t\u1EA5t c\u1EA3"${_scopeId}> \u2715 </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="${ssrRenderClass([{ "rotate-180": showDropdown.value }, "text-gray-500 transition-transform"])}"${_scopeId}> \u25BE </span></div></div>`);
            if (showDropdown.value) {
              _push2(`<div class="absolute z-50 w-full mt-1 bg-main border border-primary rounded-2xl shadow-lg max-h-Ronald overflow-auto"${_scopeId}>`);
              if (__props.filterable) {
                _push2(`<div class="p-2 border-b border-gray-200"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="T\xECm ki\u1EBFm..." class="w-full rounded-2xl border px-4 py-2 transition-colors duration-200 outline-none bg-main border-primary hover:border-primary focus:ring-2 focus:ring-primary h-[40px] text-body font-medium font-robo" autofocus${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.multiple && filteredOptions.value.length) {
                _push2(`<div class="px-3 py-1.5 border-b border-gray-200"${_scopeId}><button type="button" class="text-sm text-primary hover:text-blue-800 font-medium"${_scopeId}> Ch\u1ECDn t\u1EA5t c\u1EA3 (${ssrInterpolate(filteredOptions.value.length)}) </button></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<ul class="max-h-[300px] overflow-auto"${_scopeId}><!--[-->`);
              ssrRenderList(filteredOptions.value, (item) => {
                _push2(`<li class="${ssrRenderClass([{ "bg-blue-50": isSelected(item[unref(keyValue)]) }, "px-3 py-2 cursor-pointer hover:bg-gray-50 flex items-center gap-2 text-body font-medium font-robo"])}"${_scopeId}><span${_scopeId}>${ssrInterpolate(item[unref(keyLabel)])}</span></li>`);
              });
              _push2(`<!--]-->`);
              if (!filteredOptions.value.length) {
                _push2(`<li class="px-3 py-2 text-gray-400 text-sm font-robo"${_scopeId}> Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3 </li>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</ul></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                ref_key: "wrapperRef",
                ref: wrapperRef,
                class: "relative w-full"
              }, [
                createVNode("div", {
                  class: ["w-full rounded-2xl border px-4 py-2 transition-colors duration-200 outline-none bg-main border-primary hover:border-primary focus:ring-2 focus:ring-primary disabled:bg-gray-100 disabled:cursor-not-allowed h-[60px] text-body font-medium font-robo flex items-center justify-between cursor-pointer", { "border-red-500": errors.length && meta.touched }],
                  onClick: toggleDropdown
                }, [
                  createVNode("div", { class: "flex flex-wrap gap-1 flex-1" }, [
                    __props.multiple && modelArray.value.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(modelArray.value, (val, idx) => {
                      return openBlock(), createBlock("span", {
                        key: val,
                        class: "inline-flex items-center gap-1 bg-primary text-main text-xs px-2 py-1 rounded-xl"
                      }, [
                        createTextVNode(toDisplayString(getLabel(val)) + " ", 1),
                        createVNode("button", {
                          class: "hover:bg-main hover:text-primary rounded-full w-4 h-4 flex items-center justify-center text-xs",
                          onClick: withModifiers(($event) => removeItem(val), ["stop"])
                        }, " \xD7 ", 8, ["onClick"])
                      ]);
                    }), 128)) : !__props.multiple && modelArray.value.length ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(getLabel(modelArray.value[0])), 1)) : (openBlock(), createBlock("span", {
                      key: 2,
                      class: "text-gray-400"
                    }, toDisplayString(__props.placeholder), 1))
                  ]),
                  createVNode("div", { class: "flex items-center gap-2 ml-2" }, [
                    __props.clearable && modelArray.value.length && !__props.disabled ? (openBlock(), createBlock("button", {
                      key: 0,
                      class: "text-gray-400 hover:text-gray-600",
                      title: "X\xF3a t\u1EA5t c\u1EA3",
                      onClick: withModifiers(clearAll, ["stop"])
                    }, " \u2715 ")) : createCommentVNode("", true),
                    createVNode("span", {
                      class: ["text-gray-500 transition-transform", { "rotate-180": showDropdown.value }]
                    }, " \u25BE ", 2)
                  ])
                ], 2),
                showDropdown.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "absolute z-50 w-full mt-1 bg-main border border-primary rounded-2xl shadow-lg max-h-Ronald overflow-auto"
                }, [
                  __props.filterable ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "p-2 border-b border-gray-200"
                  }, [
                    withDirectives(createVNode("input", {
                      ref_key: "searchInput",
                      ref: searchInput,
                      "onUpdate:modelValue": ($event) => search.value = $event,
                      type: "text",
                      placeholder: "T\xECm ki\u1EBFm...",
                      class: "w-full rounded-2xl border px-4 py-2 transition-colors duration-200 outline-none bg-main border-primary hover:border-primary focus:ring-2 focus:ring-primary h-[40px] text-body font-medium font-robo",
                      autofocus: "",
                      onClick: withModifiers(() => {
                      }, ["stop"])
                    }, null, 8, ["onUpdate:modelValue", "onClick"]), [
                      [vModelText, search.value]
                    ])
                  ])) : createCommentVNode("", true),
                  __props.multiple && filteredOptions.value.length ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "px-3 py-1.5 border-b border-gray-200"
                  }, [
                    createVNode("button", {
                      type: "button",
                      class: "text-sm text-primary hover:text-blue-800 font-medium",
                      onClick: withModifiers(selectAll, ["stop"])
                    }, " Ch\u1ECDn t\u1EA5t c\u1EA3 (" + toDisplayString(filteredOptions.value.length) + ") ", 1)
                  ])) : createCommentVNode("", true),
                  createVNode("ul", { class: "max-h-[300px] overflow-auto" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredOptions.value, (item) => {
                      return openBlock(), createBlock("li", {
                        key: item[unref(keyValue)],
                        class: ["px-3 py-2 cursor-pointer hover:bg-gray-50 flex items-center gap-2 text-body font-medium font-robo", { "bg-blue-50": isSelected(item[unref(keyValue)]) }],
                        onClick: withModifiers(($event) => toggleItem(item[unref(keyValue)]), ["stop"])
                      }, [
                        createVNode("span", null, toDisplayString(item[unref(keyLabel)]), 1)
                      ], 10, ["onClick"]);
                    }), 128)),
                    !filteredOptions.value.length ? (openBlock(), createBlock("li", {
                      key: 0,
                      class: "px-3 py-2 text-gray-400 text-sm font-robo"
                    }, " Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3 ")) : createCommentVNode("", true)
                  ])
                ])) : createCommentVNode("", true)
              ], 512)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(ErrorMessage), { name: __props.name }, {
        default: withCtx(({ message }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mt-1 text-sm text-red-500 font-robo"${_scopeId}>${ssrInterpolate(message)}</p>`);
          } else {
            return [
              createVNode("p", { class: "mt-1 text-sm text-red-500 font-robo" }, toDisplayString(message), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.description) {
        _push(`<p class="mt-1 text-sm text-gray-500 font-robo">${ssrInterpolate(__props.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=select-CrPyhvG3.mjs.map
