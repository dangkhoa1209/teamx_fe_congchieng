<template>
  <div class="flex justify-center">
    <x-form-button @click="handleLogout" theme="primary">Đăng xuất</x-form-button>
  </div>
</template>
<script setup>
const { auth } = $store()
const router = useRouter()
const disabled = ref(false)
const handleLogout = $lodash.debounce(async () => {
  try {
    disabled.value = true

    // Gọi API logout
    await $api($url.auth.logout, { method: 'POST' })

  } catch (e) {
    // Nếu token hết hạn → vẫn xoá local + chuyển login
    console.warn('Logout error:', e)
  } finally {
    // Luôn xoá local
    auth.clear()

    // Điều hướng
    router.push({ name: 'admin-auth-login' })

    disabled.value = false
  }
}, 200)

</script>