<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
      <h1 class="text-2xl font-semibold text-center text-primary mb-6">
        Đăng nhập quản trị
      </h1>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1">Tên đăng nhập</label>
          <input
            v-model="username"
            type="text"
            required
            class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Mật khẩu</label>
          <input
            v-model="password"
            type="password"
            required
            class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center space-x-2">
            <input v-model="remember" type="checkbox" class="rounded border-gray-300">
            <span>Ghi nhớ đăng nhập</span>
          </label>
        </div>

        <button
          type="submit"
          class="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useCookie } from '#app'

const username = ref('')
const password = ref('')
const remember = ref(false)

const handleLogin = () => {
  // Giả lập đăng nhập (bạn có thể gọi API thật ở đây)
  if (username.value === 'admin' && password.value === '123456') {
    const token = useCookie('token', { maxAge: remember.value ? 60 * 60 * 24 * 7 : undefined }) // 7 ngày nếu remember
    token.value = 'mock-token'

    // lưu user vào state (tuỳ chọn)
    const user = useState('user', () => null)
    user.value = { username: username.value }

    navigateTo('/admin')
  } else {
    alert('Sai tài khoản hoặc mật khẩu!')
  }
}
</script>
