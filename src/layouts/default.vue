<template>
    <Header />
    <NuxtPage />
    <Footer />
</template>

<script setup>
import Header from './default/header/index.vue'
import Footer from './default/footer/index.vue'

useHead({
  title: 'Khoa',
  meta: [
    { name: 'description', content: 'Website của Khoa - ví dụ SEO tốt hơn' }
  ]
})

</script>
