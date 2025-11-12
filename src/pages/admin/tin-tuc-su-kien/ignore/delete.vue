<template>
  <x-model-confirm
    v-model:visible="isVisible"
    title="Xoá bài viết"
    confirm-text="Xoá"
    confirm-variant="danger"
    :loading="isLoading"
    @confirm="handleConfirm"
    @cancel="handleCancel"
  >
    Bạn có chắc muốn xoá bài viết
    <b>{{ targetItem?.title }}</b>
    ? Thao tác này không thể hoàn tác.
  </x-model-confirm>
</template>

<script setup>
import ConfirmModal from '~/components/admin/common/ConfirmModal.vue'

const { $api, $toast, $url } = useNuxtApp()

const emit = defineEmits(['success'])

const isVisible = ref(false)
const isLoading = ref(false)
const targetItem = ref(null)

const open = (item) => {
  if (!item) return
  targetItem.value = item
  isVisible.value = true
}

const close = () => {
  isVisible.value = false
  targetItem.value = null
}

const handleCancel = () => {
  close()
}

const handleConfirm = async () => {
  if (!targetItem.value?.id) return
  
  isLoading.value = true
  try {
    const response = await $api($url.news.delete, {
      uriParams: {
        ':id': targetItem.value.id
      }
    })
    
    if (response) {
      $toast().success('Đã xoá bài viết.')
      close()
      emit('success', targetItem.value)
    }
  } catch (error) {
    console.error('Failed to delete news', error)
  } finally {
    isLoading.value = false
  }
}

// Expose open function để có thể gọi từ bên ngoài
defineExpose({
  open
})
</script>

