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

const { auth } = $store()
const router = useRouter()
const route = useRoute()


const username = ref('')
const password = ref('')

const backUrl = computed(() => String(route.query.backUrl) || null)
const handleLogin = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
//   const urlencoded = new URLSearchParams();
// urlencoded.append("username", "admin");
// urlencoded.append("password", "123456");
// urlencoded.append("client_id", "690668de91f84f7501279470");
// urlencoded.append("client_secret", "demosecret");
// urlencoded.append("grant_type", "password");
  const config = useRuntimeConfig().publicl

  console.log('config', config);
  


  const dataForm = {
    username: username.value,
    password: password.value,
    client_id: config?.client_id,
    client_secret: config?.client_secret,
    grant_type: config?.grant_type
  }


  const res = await $api($url.auth.login, {
    body: new URLSearchParams(dataForm),
    headers: myHeaders,
  })

  const { data, success } = res?.data?.value || { data: null, success: false }


  if (success) {

    console.log('data', data);
    
      const token = $lodash.get(data, 'accessToken', '')
      const expiresIn = $lodash.get(data, 'accessTokenExpiresAt', '')
      const refreshToken = $lodash.get(data, 'refreshToken', '')
      const isAdmin = $lodash.get(data, 'isAdmin')


      auth.setAccessToken(token)
      auth.setRefreshToken(refreshToken)
      auth.setExpires(expiresIn)

      if (backUrl.value && backUrl.value !== 'undefined') {
        window.location.href = backUrl.value
        return
      }    

      return router.push({
        name: 'admin',
      })
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
