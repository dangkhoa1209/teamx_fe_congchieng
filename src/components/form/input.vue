<template>
  <div class="flex flex-col w-full">
    <!-- Label -->
    <label v-if="label" :for="name" class="mb-1 text-body font-medium font-robo">
      {{ label }}<span v-if="required" class="ml-0.5 text-red-500"> *</span>
    </label>

    <!-- VeeValidate Field -->
    <Field :name="name" :rules="rules" v-slot="{ field, errors }">
      <div class="relative w-full">
        <input
          :id="name"
          :type="inputType"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :min="min"
          :max="max"
          :value="field.value"
          @input="handleInput($event, field)"
          class="w-full rounded-2xl border px-4 py-2 transition-colors duration-200 outline-none
                 bg-main border-primary hover:border-primary focus:ring-2 focus:ring-primary
                 disabled:bg-gray-100 disabled:cursor-not-allowed h-[60px] text-body font-medium font-robo"
        />

        <!-- Toggle Password Visibility -->
        <button
          v-if="isPasswordType"
          type="button"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          @click="togglePassword"
        >
          <Icon
            :name="showPassword ? 'heroicons-solid:eye' : 'heroicons-solid:eye-slash'"
            class="h-6 w-6"
          />
        </button>
      </div>

      <!-- Error Message -->
      <p v-if="errors[0]" class="mt-1 text-sm text-red-500">{{ errors[0] }}</p>
    </Field>

    <!-- Description -->
    <p v-if="description" class="mt-1 text-sm text-gray-500">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { Field, useField } from 'vee-validate'
import { defineProps, defineEmits, ref, computed, watch } from 'vue'

// === Props ===
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  label: String,
  placeholder: String,
  description: String,
  rules: [String, Object, Function],
  type: {
    type: String,
    default: 'text'
  },
  required: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  min: Number,
  max: Number,
  numberInteger: {
    type: Boolean,
    default: false
  }
})

// === Emits ===
const emits = defineEmits(['update:modelValue', 'change'])
const { value } = useField(props.name)

// === Password Toggle ===
const showPassword = ref(false)
const isPasswordType = computed(() => props.type === 'password')
const inputType = computed(() =>
  isPasswordType.value && !showPassword.value ? 'password' : 'text'
)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

// === Xử lý Input ===
const handleInput = (event: Event, field: any) => {
  const target = event.target as HTMLInputElement
  let rawValue = target.value

  if (props.type === 'number') {
    // Xử lý số
    if (!rawValue || rawValue === '') {
      updateFieldAndEmit(field, '')
      return
    }

    let num: number = props.numberInteger ? parseInt(rawValue, 10) : parseFloat(rawValue)

    if (isNaN(num)) {
      num = props.min ?? 0
    }

    if (props.min !== undefined && num < props.min) num = props.min
    if (props.max !== undefined && num > props.max) num = props.max

    updateFieldAndEmit(field, num)
  } else {
    // Text, email, password...
    updateFieldAndEmit(field, rawValue)
  }
}

// === Helper: Cập nhật field + emit ===
const updateFieldAndEmit = (field: any, value: string | number) => {
  field.value = value
  emits('update:modelValue', value)
  emits('change', value)
}

// === Đồng bộ modelValue → field khi props thay đổi ===
watch(
  () => props.modelValue,
  (newVal) => {
    value.value = newVal ?? ''
  },
  { immediate: true }
)
</script>

<style scoped>
/* Nếu cần thêm style riêng */
</style>