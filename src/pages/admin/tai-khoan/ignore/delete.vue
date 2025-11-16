<template>
  <x-modal-action
    ref="modalAction"
    v-model:visible="isVisible"
    title="Xoá tài khoản"
    :loading="isLoading"
    @submit="handleSubmit"
  >
    <div class="flex gap-2" >
      <div class="w-full flex flex-col gap-4">
           <p>Xác nhận xoá tài khoản <strong>{{ formData.username }}</strong></p>
           <p>Tài khoản sẽ bị xoá và không thể khôi phục</p>
      </div>
    </div>
  </x-modal-action>
</template>
<script setup>
import permissions from '~/data/permissions/list/index.json'
const initData = {
  _id: '',
  username: '',
  password: '',
  permissions: []
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
    const response = await $api($url.admin.account.delete, {
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