<template>
  <x-modal-action
    ref="modalRef"
    v-model:visible="isVisible"
    title="Thêm bài viết mới"
    :loading="isLoading"
    @submit="handleSubmit"
  >
    <x-form-input
      v-model="formData.title"
      label="Tiêu đề"
      name="title"
      rules="required"
      required
      placeholder="Nhập tiêu đề bài viết"
    />
    <x-form-text-area
      v-model="formData.subtitle"
      label="Mô tả ngắn"
      name="subtitle"
      placeholder="Nhập mô tả ngắn"
      :rows="3"
    />
    <x-form-text-area
      v-model="formData.content"
      label="Nội dung chi tiết"
      name="content"
      rules="required"
      required
      placeholder="Nhập nội dung bài viết"
      :rows="6"
    />
  </x-modal-action>
</template>

<script setup>
const { $api, $toast, $url } = useNuxtApp()

const emit = defineEmits(['success'])

const modalRef = ref(null)
const isVisible = ref(false)
const isLoading = ref(false)

const formData = reactive({
  title: '',
  subtitle: '',
  content: ''
})

const resetForm = () => {
  formData.title = ''
  formData.subtitle = ''
  formData.content = ''
  // Reset form validation state
  if (modalRef.value?.form) {
    modalRef.value.form.reset()
  }
}

const open = () => {
  resetForm()
  isVisible.value = true
}

watch(isVisible, (visible) => {
  if (visible) {
    resetForm()
  }
})

const close = () => {
  isVisible.value = false
}

const handleSubmit = async (values) => {
  isLoading.value = true
  try {
    const response = await $api($url.news.create, {
      body: values
    })
    
    if (response) {
      $toast().success('Thêm bài viết mới thành công.')
      close()
      emit('success')
    }
  } catch (error) {
    console.error('Failed to create news', error)
  } finally {
    isLoading.value = false
  }
}

// Expose open function để có thể gọi từ bên ngoài
defineExpose({
  open
})
</script>
