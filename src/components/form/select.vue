<template>
  <div class="flex flex-col w-full" >
    <!-- Label -->
    <label v-if="label" :for="name" class="mb-1 text-body font-medium font-robo">
      {{ label }}<span v-if="required" class="ml-0.5"> *</span>
    </label>

    <!-- Field -->
    <Field
      :name="name"
      :label="label"
      :rules="rules"
      v-slot="{ field, errors, meta }"
      as="div"
    >
      <div class="relative w-full" ref="wrapperRef">
        <!-- Input / Selected display -->
        <div
          class="w-full rounded-2xl border px-4 py-2 transition-colors duration-200 outline-none
                 bg-main border-primary hover:border-primary focus:ring-2 focus:ring-primary
                 disabled:bg-gray-100 disabled:cursor-not-allowed h-[60px] text-body font-medium font-robo
                 flex items-center justify-between cursor-pointer"
          :class="{ 'border-red-500': errors.length && meta.touched }"
          @click="toggleDropdown"
        >
          <div class="flex flex-wrap gap-1 flex-1">
            <!-- Multiple: show tags -->
            <template v-if="multiple && modelArray.length">
              <span
                v-for="(val, idx) in modelArray"
                :key="val"
                class="inline-flex items-center gap-1 bg-primary text-white text-xs px-2 py-1 rounded-xl"
              >
                {{ getLabel(val) }}
                <button
                  @click.stop="removeItem(val)"
                  class="hover:bg-white hover:text-primary rounded-full w-4 h-4 flex items-center justify-center text-xs"
                >
                  ×
                </button>
              </span>
            </template>

            <!-- Single: show selected label -->
            <span v-else-if="!multiple && modelArray.length">
              {{ getLabel(modelArray[0]) }}
            </span>

            <!-- Placeholder -->
            <span v-else class="text-gray-400">{{ placeholder }}</span>
          </div>

          <!-- Icons: clear + dropdown -->
          <div class="flex items-center gap-2 ml-2">
            <button
              v-if="clearable && modelArray.length && !disabled"
              @click.stop="clearAll"
              class="text-gray-400 hover:text-gray-600"
              title="Xóa tất cả"
            >
              ✕
            </button>
            <span class="text-gray-500 transition-transform" :class="{ 'rotate-180': showDropdown }">
              ▾
            </span>
          </div>
        </div>

        <!-- Dropdown -->
        <div
          v-if="showDropdown"
          class="absolute z-50 w-full mt-1 bg-white border border-primary rounded-2xl shadow-lg max-h-Ronald
                 overflow-auto"
        >
          <!-- Search -->
          <div v-if="filterable" class="p-2 border-b border-gray-200">
            <input
              type="text"
              v-model="search"
              placeholder="Tìm kiếm..."
              class="w-full rounded-2xl border px-4 py-2 transition-colors duration-200 outline-none
                     bg-main border-primary hover:border-primary focus:ring-2 focus:ring-primary
                     h-[40px] text-body font-medium font-robo"
              @click.stop
              ref="searchInput"
              autofocus
            />
          </div>

          <!-- Select All (Multiple only) -->
          <div v-if="multiple && filteredOptions.length" class="px-3 py-1.5 border-b border-gray-200">
            <button
              type="button"
              class="text-sm text-primary hover:text-blue-800 font-medium"
              @click.stop="selectAll"
            >
              Chọn tất cả ({{ filteredOptions.length }})
            </button>
          </div>

          <!-- Options -->
          <ul class="max-h-[300px] overflow-auto">
            <li
              v-for="item in filteredOptions"
              :key="item[keyValue]"
              class="px-3 py-2 cursor-pointer hover:bg-gray-50 flex items-center gap-2 text-body font-medium font-robo"
              :class="{ 'bg-blue-50': isSelected(item[keyValue]) }"
              @click.stop="toggleItem(item[keyValue])"
            >
              <!-- <input
                v-if="multiple"
                type="checkbox"
                :checked="isSelected(item[keyValue])"
                class="w-4 h-4 text-primary rounded"
                @click.stop
              /> -->
              <span>{{ item[keyLabel] }}</span>
            </li>
            <li v-if="!filteredOptions.length" class="px-3 py-2 text-gray-400 text-sm font-robo">
              Không có kết quả
            </li>
          </ul>
        </div>
      </div>
    </Field>

    <!-- Error -->
    <ErrorMessage :name="name" v-slot="{ message }">
      <p class="mt-1 text-sm text-red-500 font-robo">{{ message }}</p>
    </ErrorMessage>

    <!-- Description -->
    <p v-if="description" class="mt-1 text-sm text-gray-500 font-robo">{{ description }}</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick, toRefs } from 'vue'
import { Field, ErrorMessage } from 'vee-validate'
const { $searchObjects } = useNuxtApp()

const props = defineProps({
  modelValue: [String, Number, Array],
  name: { type: String, required: true },
  label: String,
  placeholder: { type: String, default: '-- Chọn một mục --' },
  description: String,
  rules: [String, Object, Function],
  options: { type: [Array, Function], default: () => [] },
  multiple: { type: Boolean, default: false },
  filterable: { type: Boolean, default: true },
  clearable: { type: Boolean, default: true },
  keyLabel: { type: String, default: 'label' },
  keyValue: { type: String, default: 'value' },
  disabled: Boolean,
  required: Boolean,
})

const emit = defineEmits(['update:modelValue'])
const {keyLabel, keyValue} = toRefs(props)

const wrapperRef = ref(null)
const showDropdown = ref(false)
const search = ref('')
const optionList = ref([])
const searchInput = ref(null)

// Reactive model array
const modelArray = computed({
  get: () => {
    if (!props.modelValue) return []
    return props.multiple
      ? Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue]
      : [props.modelValue]
  },
  set: (val) => {
    const newVal = props.multiple ? val : (val[0] ?? null)
    emit('update:modelValue', newVal)
  }
})

// Load options (static or async)
const loadOptions = async () => {
  try {
    const data = typeof props.options === 'function' ? await props.options() : props.options
    optionList.value = Array.isArray(data) ? data : []
  } catch (err) {
    console.error('Load options error:', err)
    optionList.value = []
  }
}

// Filtered options
const filteredOptions = computed(() => {
  if (!props.filterable || !search.value.trim()) return optionList.value
  const query = search.value.toLowerCase().trim()

  return $searchObjects(optionList.value, keyLabel.value, search.value || '', { i: true, limit: 9999 })
})

// Helpers
const isSelected = (value) => modelArray.value.includes(value)

const getLabel = (value) => {
  const item = optionList.value.find(o => o[props.keyValue] == value)
  return item ? item[props.keyLabel] : value
}

const toggleItem = (value) => {
  if (props.disabled) return

  let newArr = [...modelArray.value]
  const idx = newArr.indexOf(value)

  if (idx >= 0) {
    newArr.splice(idx, 1)
  } else {
    if (!props.multiple) newArr = []
    newArr.push(value)
  }

  modelArray.value = newArr

  if (!props.multiple) {
    showDropdown.value = false
    search.value = ''
  }
}

const removeItem = (value) => {
  modelArray.value = modelArray.value.filter(v => v !== value)
}

const selectAll = () => {
  const allValues = filteredOptions.value.map(item => item[props.keyValue])
  modelArray.value = [...new Set([...modelArray.value, ...allValues])]
}

const clearAll = () => {
  modelArray.value = []
  search.value = ''
  if (showDropdown.value) {
    nextTick(() => searchInput.value?.focus())
  }
}

const toggleDropdown = () => {
  if (props.disabled) return
  showDropdown.value = !showDropdown.value
  if (showDropdown.value) {
    search.value = ''
    nextTick(() => searchInput.value?.focus())
  }
}

// Click outside
const handleClickOutside = (e) => {
  if (wrapperRef.value && !wrapperRef.value.contains(e.target)) {
    showDropdown.value = false
  }
}

// Lifecycle
onMounted(() => {
  loadOptions()
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

watch(() => props.options, loadOptions, { deep: true })
watch(showDropdown, (val) => {
  if (!val) search.value = ''
})
</script>
