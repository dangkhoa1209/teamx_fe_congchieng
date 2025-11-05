<template>
    <div>
        <Header></Header>

        <router-view />
    </div>
</template>

<script setup>
import Header from './header/index.vue'
const { auth } = $store()

useHead({
  title: 'khoa'
})

onMounted(() => {
    auth.setAccessToken('nef m')

    console.log('khoa')
})
// const config = useRuntimeConfig().public
// useHead({
//   title: config.appName
// })
</script>
