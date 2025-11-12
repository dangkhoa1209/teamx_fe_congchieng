<template>
  <Transition name="fade">
    <div
      v-if="isVisible"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
    >
      <div class="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">
        <div class="px-6 py-5">
          <h3 class="text-lg font-semibold text-gray-900">
            {{ title }}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-gray-600">
            <slot />
          </p>
        </div>
        <div class="flex justify-end gap-3 border-t border-gray-100 bg-gray-50 px-6 py-4">
          <button
            type="button"
            class="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            @click="handleCancel"
            :disabled="loading"
          >
            Huỷ
          </button>
          <button
            type="button"
            class="rounded-lg px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
            :class="confirmButtonClasses"
            :disabled="loading"
            @click="$emit('confirm')"
          >
            <span v-if="loading" class="inline-flex items-center gap-2">
              <Icon name="svg-spinners:180-ring-with-bg" class="h-4 w-4" />
              Đang xử lý...
            </span>
            <span v-else>
              {{ confirmText }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Xác nhận'
  },
  confirmText: {
    type: String,
    default: 'Đồng ý'
  },
  confirmVariant: {
    type: String,
    default: 'primary' // primary | warning | danger
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['confirm', 'cancel', 'update:visible'])

const isVisible = computed({
  get: () => props.visible,
  set: (value) => emit('update:visible', value)
})

const handleCancel = () => {
  emit('cancel')
  isVisible.value = false
}

const confirmButtonClasses = computed(() => {
  if (props.confirmVariant === 'danger') {
    return 'bg-red-500 hover:bg-red-600 focus:ring-red-200'
  }
  if (props.confirmVariant === 'warning') {
    return 'bg-amber-500 hover:bg-amber-600 focus:ring-amber-200'
  }
  return 'bg-primary hover:bg-primary/90 focus:ring-primary/20'
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

