<template>
  <x-modal-action
    ref="modalAction"
    v-model:visible="isVisible"
    title="Cập nhật quyền"
    :loading="isLoading"
    @submit="handleSubmit"
  >
    <div class="flex gap-2" >
      <div class="w-full flex flex-col gap-4">
          <x-form-select
            v-model="formData.permissions"
            :options="permissions"
            label="Quyền"
            name="permissions"
            multiple
            placeholder="Chọn quyền"
            class="h-[500px]"
          />
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
    formData.value = $lodash.cloneDeep(taiKhoan)
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
    const response = await $api($url.admin.account.update_permission, {
      body: formData.value
    })

    const { data, success } = response?.data?.value || { data: null, success: false }
    if(success) {
    $toast().success('Cập nhật quyền thành công.')
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