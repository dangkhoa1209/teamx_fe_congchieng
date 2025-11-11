<template>
    <div>
        <Header />
        <router-view />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from './admin/header/index.vue'

// Lấy store (tuỳ framework — Vuex, Pinia, hay custom)
const { auth } = $store()

// Cấu hình metadata
useHead({
  title: 'Quản trị hệ thống',
  meta: [
    { name: 'description', content: 'Website của Khoa - ví dụ SEO tốt hơn' }
  ]
})
</script>
