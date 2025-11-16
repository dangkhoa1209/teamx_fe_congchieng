<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
      <h1 class="text-2xl font-semibold text-center text-primary mb-6">
        Đăng nhập quản trị
      </h1>

      <form @submit.prevent="handleLogin" class="space-y-4">

        <x-form-input
          v-model="username"
          label="Tài khoản"
          name="username"
          placeholder="Nhập tài khoản"
        />

        <x-form-input
          v-model="password"
          label="Mật khẩu"
          name="create_password"
          type="password"
          placeholder="Nhập mật khẩu"
        />

        <x-form-button
            type="submit"
            theme="primary"
        >
          Đăng nhập
        </x-form-button>

       
      </form>
    </div>
  </div>
</template>

<script setup>

const { auth } = $store()
const router = useRouter()
const route = useRoute()

definePageMeta({
  layout: 'auth',
  middleware: 'auth'
})

useHead({
  title: 'Đăng nhập',
  // meta: [
  //   { name: 'description', content: 'Website của Khoa - ví dụ SEO tốt hơn' }
  // ]
})


const username = ref('')
const password = ref('')

const backUrl = computed(() => String(route.query.backUrl) || null)
const handleLogin = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const config = useRuntimeConfig().public

  console.log('config', config);
  


  const dataForm = {
    username: username.value,
    password: password.value,
    client_id: config?.clientId,
    client_secret: config?.clientSecret,
    grant_type: config?.grantType
  }


  const res = await $api($url.auth.login, {
    body: new URLSearchParams(dataForm),
    headers: myHeaders,
  })

  const { data, success } = res?.data?.value || { data: null, success: false }


  if (success) {    
      const token = $lodash.get(data, 'accessToken', '')
      const expiresIn = $lodash.get(data, 'accessTokenExpiresAt', '')
      const refreshToken = $lodash.get(data, 'refreshToken', '')
      const user = $lodash.get(data, 'user')
      
      auth.setAccessToken(token)
      auth.setRefreshToken(refreshToken)
      auth.setExpires(expiresIn)
      auth.setUser(user)

      if (backUrl.value && backUrl.value !== 'undefined') {
        window.location.href = backUrl.value
        return
      }    

      router.push('/admin')

    }
  


  // Giả lập đăng nhập (bạn có thể gọi API thật ở đây)
  // if (username.value === 'admin' && password.value === '123456') {
  //   const token = useCookie('token', { maxAge: remember.value ? 60 * 60 * 24 * 7 : undefined }) // 7 ngày nếu remember
  //   token.value = 'mock-token'

  //   // lưu user vào state (tuỳ chọn)
  //   const user = useState('user', () => null)
  //   user.value = { username: username.value }

  //   navigateTo('/admin')
  // } else {
  //   alert('Sai tài khoản hoặc mật khẩu!')
  // }
}
</script>
