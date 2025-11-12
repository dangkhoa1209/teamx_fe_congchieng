<template>
  <div class="flex flex-col w-full">
    <!-- Label -->
    <label v-if="label" :for="name" class="mb-1 text-body font-medium font-robo">
      {{ label }}<span v-if="required" class="ml-0.5"> *</span>
    </label>

    <!-- Input Field -->
    <Field
      :name="name"
      :label="label"
      :rules="rules"
      v-slot="{ field, errors }"
    >
      <input
        v-bind="field"
        :id="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :min="min"
        :max="max"
        :type="type"
        class="w-full rounded-2xl border px-4 py-2 transition-colors duration-200 outline-none
               bg-main border-primary hover:border-primary focus:ring-2 focus:ring-primary
               disabled:bg-gray-100 disabled:cursor-not-allowed h-[60px] text-body font-medium font-robo"
        @input="onInputNumber(field)"
      />
    </Field>

    <!-- Error -->
    <ErrorMessage :name="name" v-slot="{ message }">
      <p class="mt-1 text-sm text-red-500">{{ message }}</p>
    </ErrorMessage>

    <!-- Description -->
    <p v-if="description" class="mt-1 text-sm text-gray-500">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'
import { defineProps, defineEmits } from 'vue'

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

const onInputNumber = (field: any) => {
  if (props.type === 'number') {
    let val = field.value
    if (props.numberInteger) val = parseInt(val)
    else val = parseFloat(val)
    if (props.min !== undefined && val < props.min) val = props.min
    if (props.max !== undefined && val > props.max) val = props.max
    field.value = val
    emits('update:modelValue', val)
    emits('change', val)
  } else {
    emits('update:modelValue', field.value)
    emits('change', field.value)
  }
}
</script>
