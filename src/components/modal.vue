<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-[2000] flex items-center justify-center bg-black/40"
      @click.self="handleBackdropClick"
      @keydown.esc.prevent="handleClose"
      tabindex="-1"
    >
      <div
        class="w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-xl bg-white shadow-lg flex flex-col transition-all duration-150 ease-out scale-100"
        role="dialog"
        aria-modal="true"
      >
        <div class="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 class="text-lg font-semibold text-gray-900 truncate">
            {{ title }}
          </h2>
          <button
            type="button"
            class="rounded-full p-2 text-gray-500 hover:bg-gray-100"
            @click="handleClose"
          >
            <Icon name="mdi:close" class="h-5 w-5" />
          </button>
        </div>

        <div class="flex-1 overflow-y-auto px-6 py-4">
          <slot />
        </div>

        <div class="flex items-center justify-end gap-3 border-t border-gray-200 px-6 py-4">
          <x-form-button
            type="button"
            @click="handleClose"
          >
            {{ cancelLabel }}
          </x-form-button>
          <x-form-button
            type="button"
            theme="primary"
            @click="handleSubmit"
            :disabled="loading"
            :loading="loading"
          >
            <span>{{ submitLabel }}</span>
          </x-form-button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    require: true
  },
  title: { type: String, default: 'Modal' },
  loading: { type: Boolean, default: false},
  submitLabel: { type: String, default: 'Lưu' },
  cancelLabel: { type: String, default: 'Đóng' }
})
const emit = defineEmits(['update:modelValue', 'submit', 'close'])

const handleClose = () => {
  emit('update:modelValue', false)
  emit('close')
}
const handleBackdropClick = () => handleClose()
const handleSubmit = () => emit('submit')
</script>
