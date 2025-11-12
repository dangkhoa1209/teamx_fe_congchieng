<template>
  <Transition name="fade">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      tabindex="-1"
      @keydown.esc.prevent="handleClose"
    >
      <div
        class="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
      >
        <div class="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div>
            <h2 class="text-xl font-semibold text-gray-900">
              {{ headerTitle }}
            </h2>
            <p class="text-sm text-gray-500">
              {{ headerDescription }}
            </p>
          </div>
          <button
            type="button"
            class="rounded-full p-2 text-gray-500 hover:bg-gray-100 focus:outline-none"
            @click="handleClose"
          >
            <Icon name="mdi:close" class="h-5 w-5" />
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-5 px-6 py-6">
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">
              Tiêu đề <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.title"
              type="text"
              required
              class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/60"
              placeholder="Nhập tiêu đề bài viết"
            />
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">
              Mô tả ngắn
            </label>
            <textarea
              v-model="form.subtitle"
              rows="3"
              class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/60"
              placeholder="Nhập mô tả ngắn"
            ></textarea>
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">
              Nội dung chi tiết <span class="text-red-500">*</span>
            </label>
            <textarea
              v-model="form.content"
              rows="6"
              required
              class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/60"
              placeholder="Nhập nội dung bài viết"
            ></textarea>
          </div>

          <div class="flex items-center justify-end gap-3 border-t border-gray-100 pt-5">
            <button
              type="button"
              class="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              @click="handleClose"
              :disabled="loading"
            >
              Huỷ
            </button>
            <button
              type="submit"
              class="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
              :disabled="loading"
            >
              <Icon
                v-if="loading"
                name="svg-spinners:180-ring-with-bg"
                class="h-4 w-4"
              />
              <span>{{ submitLabel }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed, reactive, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  mode: {
    type: String,
    default: 'create' // create | edit
  },
  initialData: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue', 'submit'])

const form = reactive({
  title: '',
  subtitle: '',
  content: ''
})

const headerTitle = computed(() =>
  props.mode === 'edit' ? 'Cập nhật bài viết' : 'Thêm bài viết mới'
)

const headerDescription = computed(() =>
  props.mode === 'edit'
    ? 'Điều chỉnh nội dung và thông tin bài viết.'
    : 'Nhập thông tin để tạo mới tin tức/sự kiện.'
)

const submitLabel = computed(() =>
  props.mode === 'edit' ? 'Lưu thay đổi' : 'Thêm mới'
)

const syncForm = (data = {}) => {
  form.title = data?.title || ''
  form.subtitle = data?.subtitle || ''
  form.content = data?.content || ''
}

const resetForm = () => {
  syncForm()
}

const handleClose = () => {
  emit('update:modelValue', false)
}

const validateForm = () => {
  if (!form.title?.trim()) {
    $toast().error('Vui lòng nhập tiêu đề bài viết.')
    return false
  }
  if (!form.content?.trim()) {
    $toast().error('Vui lòng nhập nội dung bài viết.')
    return false
  }
  return true
}

const handleSubmit = () => {
  if (!validateForm()) return
  emit('submit', {
    title: form.title.trim(),
    subtitle: form.subtitle?.trim() || '',
    content: form.content.trim()
  })
}

watch(
  () => props.modelValue,
  (visible) => {
    if (visible) {
      syncForm(props.initialData)
    } else {
      resetForm()
    }
  }
)

watch(
  () => props.initialData,
  (data) => {
    if (props.modelValue) {
      syncForm(data)
    }
  },
  { deep: true }
)
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

