<template>
  <x-modal-action
    ref="modalAction"
    v-model:visible="isVisible"
    title="Xoá Tin tức - sự kiện"
    :loading="isLoading"
    @submit="handleSubmit"
  >
    <div class="flex gap-2" >
      <div class="w-full flex flex-col gap-4">
        <p>Xác nhận xoá tin tức - sự kiện <strong>{{ formData.title }}</strong></p>
        <p>Tin tức - sự kiện bị xoá và không thể khôi phục</p>
      </div>
    </div>
  </x-modal-action>
</template>
<script setup>
const initData = {
  _id: '',
  title: ''
}
const emits = defineEmits(['refresh'])
const isVisible = ref(false)
const isLoading = ref(false)
const modalAction = ref(null)

const formData = ref($lodash.cloneDeep(initData))

const open = (taiKhoan) => {
  if(taiKhoan){
    formData.value = {
      ...$lodash.cloneDeep(taiKhoan), 
      password: ''
    }
  }
  isVisible.value = true
}

const close = () => {
  isVisible.value = false
}

const reset = () => {
  formData.value = $lodash.cloneDeep(initData)
}

const handleSubmit = async (values) => {
  isLoading.value = true
  try {
    const response = await $api($url.admin.news.delete, {
      body: formData.value
    })

    const { success } = response?.data?.value || { data: null, success: false }
    if(success) {
    $toast().success('Xoá tài khoản thành công')
    reset()
    emits('refresh')
    close()
    }
  } catch (error) {
  } finally {
    isLoading.value = false
  }
}

defineExpose({
  open
})

</script>