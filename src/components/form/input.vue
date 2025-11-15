<template>
  <div class="flex flex-col w-full">
    <!-- Label -->
    <label v-if="label" :for="name" class="mb-1 text-body font-medium font-robo">
      {{ label }}<span v-if="required" class="ml-0.5 text-red-500"> *</span>
    </label>

    <Field
      :name="name"
      :label="label"
      :rules="rules"
      v-slot="{ field, errors }"
    >
      <div class="relative w-full">
        <input
          v-bind="field"
          :id="name"
          :type="inputType"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :min="min"
          :max="max"
          class="w-full rounded-2xl border px-4 py-2 transition-colors duration-200 outline-none
                 bg-main border-primary hover:border-primary focus:ring-2 focus:ring-primary
                 disabled:bg-gray-100 disabled:cursor-not-allowed h-[60px] text-body font-medium font-robo"
          @input="handleInput($event, field)"
        />

        <!-- Show/Hide Password Button -->
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

      <!-- Vee-validate Error -->
      <p v-if="errors[0]" class="mt-1 text-sm text-red-500">{{ errors[0] }}</p>
    </Field>

    <!-- Custom Description -->
    <p v-if="description" class="mt-1 text-sm text-gray-500">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'
import { defineProps, defineEmits, ref, computed } from 'vue'

const props = defineProps({
  modelValue: [String, Number],
  name: { type: String, required: true },
  label: String,
  placeholder: String,
  description: String,
  rules: [String, Object, Function],
  type: { type: String, default: 'text' },
  required: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  min: Number,
  max: Number,
  numberInteger: { type: Boolean, default: false }
})

const emits = defineEmits(['update:modelValue', 'change'])

const showPassword = ref(false)

// Tính type hiển thị (text/password toggle)
const isPasswordType = computed(() => props.type === 'password')
const inputType = computed(() =>
  isPasswordType.value ? (showPassword.value ? 'text' : 'password') : props.type
)

// Toggle hiển thị mật khẩu
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

// Xử lý input chung
const handleInput = (event: Event, field: any) => {
  const target = event.target as HTMLInputElement
  const value = target.value

  if (props.type === 'number') {
    // === XỬ LÝ SỐ ===
    if (value === '' || value === null) {
      field.value = ''
      emits('update:modelValue', '')
      emits('change', '')
      return
    }

    let num: number
    if (props.numberInteger) {
      num = parseInt(value, 10)
    } else {
      num = parseFloat(value)
    }

    // Nếu không phải số → giữ min hoặc 0
    if (isNaN(num)) {
      num = props.min ?? 0
    }

    // Giới hạn min/max
    if (props.min !== undefined && num < props.min) num = props.min
    if (props.max !== undefined && num > props.max) num = props.max

    // Cập nhật field + emit
    field.value = num
    emits('update:modelValue', num)
    emits('change', num)
  } else {
    // === XỬ LÝ TEXT / PASSWORD / EMAIL... ===
    // Không can thiệp → để vee-validate tự xử lý
    // Chỉ emit để hỗ trợ v-model
    emits('update:modelValue', value)
    emits('change', value)
  }
}
</script>