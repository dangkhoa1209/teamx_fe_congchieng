<template>
  <x-modal-action
    ref="modalAction"
    v-model:visible="isVisible"
    title="Cập nhật mật khẩu"
    :loading="isLoading"
    @submit="handleSubmit"
  >
    <div class="flex gap-2" >
      <div class="w-full flex flex-col gap-4">
           <x-form-input
            v-model="formData.password"
            label="Mật khẩu"
            name="create_password"
            rules="required"
            required
            type="password"
            placeholder="Nhập mật khẩu"
          />

           <x-form-input
            v-model="formData.newPassword"
            label="Mật khẩu mới"
            name="new_create_password"
            rules="required"
            required
            type="newpassword"
            placeholder="Nhập mật khẩu mới"
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
  newPassword: '',
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
      password: '',
      newPassword: '',
      _id: taiKhoan.id
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
    const response = await $api($url.admin.profile.change_password, {
      body: formData.value
    })

    const { data, success } = response?.data?.value || { data: null, success: false }
    if(success) {
    $toast().success('Cập nhật mật khẩu thành công')
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