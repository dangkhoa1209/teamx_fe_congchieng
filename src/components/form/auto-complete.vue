<template>
  <div class="flex flex-col w-full">
    <label v-if="label" :for="name" class="mb-1 text-body font-medium font-robo">
      {{ label }}
      <span v-if="required" class="ml-0.5 text-red-500">*</span>
    </label>

    <Field v-slot="{ errors, meta }" :name="name" :rules="rules" as="div">
      <div ref="wrapperRef" class="relative w-full">
        <!-- Input hiển thị đã chọn -->
        <div
          class="w-full rounded-2xl border px-4 py-2.5 transition-all outline-none bg-main border-primary hover:border-primary focus:ring-2 focus:ring-primary disabled:bg-gray-100 h-[60px] flex items-center justify-between cursor-pointer"
          :class="{ 'border-red-500 ring-2 ring-red-500': errors.length && meta.touched }"
          @click="toggleDropdown"
        >
          <div class="flex flex-wrap gap-2 flex-1 min-w-0">
            <!-- Multiple -->
            <template v-if="multiple && modelArray.length">
              <span
                v-for="val in modelArray"
                :key="val"
                class="inline-flex items-center gap-1.5 bg-primary text-white text-xs px-3 py-1.5 rounded-full font-medium"
              >
                {{ getLabel(val) }}
                <button
                  class="ml-1 hover:bg-white hover:text-primary rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold"
                  @click.stop="removeItem(val)"
                >
                  ×
                </button>
              </span>
            </template>

            <!-- Single -->
            <span v-else-if="!multiple && modelArray.length" class="truncate pr-2">
              {{ getLabel(modelArray[0]) }}
            </span>

            <!-- Placeholder -->
            <span v-else class="text-gray-400">{{ placeholder }}</span>
          </div>

          <div class="flex items-center gap-3 ml-3">
            <button
              v-if="clearable && modelArray.length && !disabled"
              class="text-gray-400 hover:text-gray-700"
              @click.stop="clearAll"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <span
              class="text-gray-500 transition-transform"
              :class="{ 'rotate-180': showDropdown }"
            >
              <Icon name="heroicons:chevron-down" class="w-7 h-7 text-primary" />
            </span>
          </div>
        </div>

        <!-- Dropdown -->
        <div
          v-if="showDropdown"
          class="absolute z-50 w-full mt-2 bg-white border border-primary rounded-2xl shadow-xl max-h-[520px] overflow-hidden flex flex-col"
        >
          <!-- Search -->
          <div class="p-3 border-b border-gray-200">
            <input
              ref="searchInput"
              v-model="search"
              type="text"
              :placeholder="searchPlaceholder"
              class="w-full rounded-2xl border px-4 py-2.5 outline-none bg-main border-primary focus:ring-2 focus:ring-primary h-11 text-body font-medium"
              autofocus
              @click.stop
            />
          </div>

          <!-- Loading -->
          <div v-if="loading" class="p-10 text-center text-gray-500">
            <i class="fas fa-spinner fa-spin mr-2" />
            Đang tải...
          </div>

          <!-- Danh sách -->
          <div v-else class="flex-1 overflow-y-auto">
            <ul>
              <li
                v-for="item in searchResults"
                :key="item[keyValue]"
                class="px-4 py-3.5 cursor-pointer hover:bg-gray-50 flex items-center gap-4 border-b border-gray-100 last:border-0"
                :class="{ 'bg-blue-50': isSelected(item[keyValue]) }"
                @click.stop="toggleItem(item[keyValue], item)"
              >
                <slot name="option" :item="item">
                  <div class="flex-1 min-w-0">
                    <p class="font-semibold text-sm truncate">{{ item.title || item[keyLabel] }}</p>
                    <p class="text-xs text-gray-500 truncate mt-0.5">
                      {{ item.subtitle || item.location || '' }}
                    </p>
                  </div>
                  <i v-if="isSelected(item[keyValue])" class="fas fa-check text-primary" />
                </slot>
              </li>
              <li
                v-if="!loading && searchResults.length === 0"
                class="p-10 text-center text-gray-400 text-sm"
              >
                {{ search ? 'Không tìm thấy' : 'Không có dữ liệu' }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Field>

    <ErrorMessage :name="name">
      <p slot="message" class="mt-1 text-sm text-red-500 font-robo">{{ $event.message }}</p>
    </ErrorMessage>
    <p v-if="description" class="mt-1 text-sm text-gray-500 font-robo">{{ description }}</p>
  </div>
</template>

<script setup>
  import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue';
  import { Field, ErrorMessage } from 'vee-validate';
  import { debounce } from 'lodash-es';

  const props = defineProps({
    modelValue: { type: [String, Number, Array], default: null },
    name: { type: String, required: true },
    label: String,
    placeholder: { type: String, default: '— Chọn một mục —' },
    searchPlaceholder: { type: String, default: 'Tìm kiếm...' },
    description: String,
    rules: [String, Object, Function],
    multiple: { type: Boolean, default: false },
    clearable: { type: Boolean, default: true },
    keyLabel: { type: String, default: 'title' },
    keyValue: { type: String, default: '_id' },
    disabled: Boolean,
    required: Boolean,
    searchFn: { type: Function, required: true }, // BẮT BUỘC
  });

  const emit = defineEmits(['update:modelValue', 'select']);

  const wrapperRef = ref(null);
  const searchInput = ref(null);
  const showDropdown = ref(false);
  const search = ref('');
  const searchResults = ref([]);
  const loading = ref(false);

  // Cache để hiển thị label khi đã chọn
  const selectedCache = ref(new Map());

  const modelArray = computed({
    get: () => {
      if (!props.modelValue) return [];
      return props.multiple
        ? Array.isArray(props.modelValue)
          ? props.modelValue
          : [props.modelValue]
        : [props.modelValue].filter(Boolean);
    },
    set: (val) => {
      const newVal = props.multiple ? val : (val[0] ?? null);
      emit('update:modelValue', newVal);
    },
  });

  // Load danh sách mặc định (khi mở dropdown hoặc xóa hết)
  const loadDefault = async () => {
    loading.value = true;
    try {
      const res = await props.searchFn(''); // truyền rỗng = lấy mặc định
      searchResults.value = Array.isArray(res) ? res : [];
    } catch (err) {
      console.error('Load default failed:', err);
      searchResults.value = [];
    } finally {
      loading.value = false;
    }
  };

  // Tìm kiếm realtime
  const triggerSearch = debounce(async () => {
    if (search.value.trim()) {
      loading.value = true;
      try {
        const res = await props.searchFn(search.value.trim());
        searchResults.value = Array.isArray(res) ? res : [];
      } catch (err) {
        searchResults.value = [];
      } finally {
        loading.value = false;
      }
    } else {
      // Nếu xóa hết từ khóa → load lại mặc định
      await loadDefault();
    }
  }, 300);

  watch(search, triggerSearch);

  // Khi mở dropdown → load mặc định nếu chưa có dữ liệu
  watch(showDropdown, (val) => {
    if (val && searchResults.value.length === 0 && !search.value) {
      loadDefault();
    }
    if (val) {
      nextTick(() => searchInput.value?.focus());
    }
  });

  // Khi xóa hết (clearAll) → load lại danh sách mặc định
  const clearAll = () => {
    modelArray.value = [];
    search.value = '';
    if (showDropdown.value) {
      loadDefault();
    }
  };

  const getLabel = (value) => {
    if (!value) return '';
    if (selectedCache.value.has(value)) {
      const item = selectedCache.value.get(value);
      return item.title || item[props.keyLabel] || value;
    }
    const found = searchResults.value.find((i) => i[props.keyValue] == value);
    if (found) {
      selectedCache.value.set(value, found);
      return found.title || found[props.keyLabel] || value;
    }
    return String(value);
  };

  const isSelected = (value) => modelArray.value.includes(value);

  const toggleItem = (value, item) => {
    if (props.disabled) return;
    selectedCache.value.set(value, item);

    let newArr = [...modelArray.value];
    const idx = newArr.indexOf(value);
    if (idx >= 0) {
      newArr.splice(idx, 1);
    } else {
      if (!props.multiple) newArr = [];
      newArr.push(value);
    }
    modelArray.value = newArr;
    emit('select', item);

    if (!props.multiple) {
      showDropdown.value = false;
      search.value = '';
    }
  };

  const removeItem = (value) => {
    modelArray.value = modelArray.value.filter((v) => v !== value);
  };

  const toggleDropdown = () => {
    if (props.disabled) return;
    showDropdown.value = !showDropdown.value;
  };

  const handleClickOutside = (e) => {
    if (wrapperRef.value && !wrapperRef.value.contains(e.target)) {
      showDropdown.value = false;
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  // Tự động load khi mở lần đầu
  watch(
    showDropdown,
    (val) => {
      if (val && searchResults.value.length === 0) {
        loadDefault();
      }
    },
    { immediate: true }
  );
</script>
