<template>
    <div>
        <h1>Layout default</h1>
        <router-view />
    </div>
</template>

<script setup>
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
