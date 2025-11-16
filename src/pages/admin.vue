<template>
    <NuxtPage />
</template>
<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})
</script>
