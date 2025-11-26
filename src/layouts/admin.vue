<template>
  <Header />
  <NuxtPage />
</template>

<script setup>
  import Header from './admin/header/index.vue';

  useHead({
    title: 'Admin',
  });
</script>
