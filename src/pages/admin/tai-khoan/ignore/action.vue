<template>
  <x-modal-action
    ref="modalRef"
    v-model:visible="isVisible"
    title="Thêm tài khoản mới"
    :loading="isLoading"
    @submit="handleSubmit"
  >
    <div class="flex gap-2" >
      <div class="w-full flex flex-col gap-4">
          <x-form-input
            v-model="formData.username"
            label="Tài khoản"
            name="username"
            rules="required"
            required
            placeholder="Nhập tài khoản"
          />

           <x-form-input
            v-model="formData.password"
            label="Mật khẩu"
            name="password"
            rules="required"
            required
            type="password"
            placeholder="Nhập mật khẩu"
          />
           <x-form-select
              v-model="formData.permissions"
              :options="permissions"
              label="Quyền"
              name="permissions"
              rules="required"
              required
              multiple
              placeholder="Chọn quyền"
            />
      </div>
    </div>
  </x-modal-action>
</template>
<script setup>
import permissions from '~/data/permissions/list/index.json'
const initData = {
  username: '',
  password: '',
  permissions: []
}
const isVisible = ref(false)
const formData = ref($lodash.cloneDeep(initData))

const open = (taiKhoan) => {
  if(taiKhoan){
    formData.value = $lodash.cloneDeep(taiKhoan)
  }
  isVisible.value = true
}

defineExpose({
  open
})

</script>