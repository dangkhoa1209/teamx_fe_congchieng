<template>
  <div class="flex flex-col w-full">
    <!-- Label -->
    <label v-if="label" :for="name" class="mb-1 text-body font-medium font-robo">
      {{ label }}<span v-if="required" class="ml-"> *</span>
    </label>

    <!-- Textarea Field -->
    <Field
      :name="name"
      :rules="rules"
      :label="label"
      v-slot="{ field, errors }"
    >
      <textarea
        v-bind="field"
        :id="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :rows="rows"
        class="w-full rounded-2xl border px-4 py-2 transition-colors duration-200 outline-none
               bg-main border-primary hover:border-primary focus:ring-2 focus:ring-primary
               disabled:bg-gray-100 disabled:cursor-not-allowed resize-none h-[150px] text-body font-medium font-robo"
      ></textarea>
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
  modelValue: String,
  name: { type: String, required: true },
  label: String,
  placeholder: String,
  description: String,
  rules: [String, Object, Function],
  required: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  rows: { type: Number, default: 4 }
})

const emits = defineEmits(['update:modelValue', 'change'])

const updateValue = (field: any) => {
  emits('update:modelValue', field.value)
  emits('change', field.value)
}
</script>
