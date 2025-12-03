<template>
  <Header />
  <NuxtPage />
</template>

<script setup>
  import Header from './admin/header/index.vue';

  useHead({
    title: 'Quản lý văn hoá cồng chiêng',
  });
</script>
