<template>
    <div>
        <h1>Layout default</h1>
        <router-view />
    </div>
</template>

<script setup>
const { auth } = $store()

onMounted(() => {
    auth.setAccessToken('nef m')
})
// const config = useRuntimeConfig().public
// useHead({
//   title: config.appName
// })
</script>
