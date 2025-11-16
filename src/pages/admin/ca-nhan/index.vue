<template>
  <x-content-place>
    <div class="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md space-y-6">

      <!-- Thông tin người dùng -->
      <div>
        <h2 class="text-xl font-semibold mb-4">Thông tin tài khoản</h2>
        <p><strong>Tài khoản:</strong> {{ auth.user?.username || 'Chưa cập nhật' }}</p>
      </div>

      <!-- Form đổi mật khẩu -->
      <div class="mt-4">
        <x-form-button @click="handleChangePassword" theme="primary" outline  :disabled="disabled">Đổi mật khẩu</x-form-button>
      </div>


      <!-- Đăng xuất -->
      <div class="mt-4">
        <x-form-button @click="handleLogout" theme="primary" :disabled="disabled">Đăng xuất</x-form-button>
      </div>

    </div>

    <ModelChangePassWord ref="modelChangePassWord"></ModelChangePassWord>
  </x-content-place>
</template>

<script setup>
const { auth } = $store()
const router = useRouter()

import ModelChangePassWord from './ignore/change-password.vue'

const modelChangePassWord = ref()
const disabled = ref(false)
const handleChangePassword = () => {
  modelChangePassWord.value && modelChangePassWord.value.open(auth.user)
}

const handleLogout = $lodash.debounce(async () => {
  try {
    disabled.value = true

    // Gọi API logout
    await $api($url.admin.profile.logout, { method: 'POST' })

  } catch (e) {
    // Nếu token hết hạn → vẫn xoá local + chuyển login
    console.warn('Logout error:', e)
  } finally {
    // Luôn xoá local
    auth.clear()

    // Điều hướng
    router.push({ name: 'admin-auth-login' })
  }
}, 200)
</script>
