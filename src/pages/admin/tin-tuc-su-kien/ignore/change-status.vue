<template>
  <x-model-confirm
    v-model:visible="isVisible"
    :title="modalTitle"
    :confirm-text="confirmText"
    confirm-variant="warning"
    :loading="isLoading"
    @confirm="handleConfirm"
    @cancel="handleCancel"
  >
    Bạn có chắc muốn {{ confirmText.toLowerCase() }}
    bài viết <b>{{ targetItem?.title }}</b>?
  </x-model-confirm>
</template>

<script setup>
import { computed } from 'vue'
import ConfirmModal from '~/components/admin/common/ConfirmModal.vue'

const { $api, $toast, $url } = useNuxtApp()

const emit = defineEmits(['success'])

const isVisible = ref(false)
const isLoading = ref(false)
const targetItem = ref(null)

const getNormalizedStatus = (item) => {
  if (!item) return 'inactive'
  if (typeof item.status === 'string') return item.status
  if (typeof item.isActive === 'boolean') {
    return item.isActive ? 'active' : 'inactive'
  }
  if (typeof item.active === 'boolean') {
    return item.active ? 'active' : 'inactive'
  }
  if (typeof item.enabled === 'boolean') {
    return item.enabled ? 'active' : 'inactive'
  }
  return 'inactive'
}

const formatStatusAction = (item) => {
  const status = getNormalizedStatus(item)
  return status === 'active' ? 'Ẩn bài viết' : 'Hiển thị bài viết'
}

const modalTitle = computed(() => {
  if (!targetItem.value) return 'Thay đổi trạng thái'
  return formatStatusAction(targetItem.value)
})

const confirmText = computed(() => {
  if (!targetItem.value) return 'Xác nhận'
  return formatStatusAction(targetItem.value)
})

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
    const currentStatus = getNormalizedStatus(targetItem.value)
    const nextStatus = currentStatus === 'active' ? 'inactive' : 'active'
    
    const response = await $api($url.news.changeStatus, {
      body: {
        status: nextStatus
      },
      uriParams: {
        ':id': targetItem.value.id
      }
    })
    
    if (response) {
      $toast().success('Đã cập nhật trạng thái bài viết.')
      close()
      emit('success', { ...targetItem.value, status: nextStatus })
    }
  } catch (error) {
    console.error('Failed to change status', error)
  } finally {
    isLoading.value = false
  }
}

// Expose open function để có thể gọi từ bên ngoài
defineExpose({
  open
})
</script>

