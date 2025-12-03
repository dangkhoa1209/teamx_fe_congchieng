<template>
  <Header />
  <NuxtPage />
  <Footer />
</template>

<script setup>
  import Header from './default/header/index.vue';
  import Footer from './default/footer/index.vue';

  useHead({
    title: 'Văn hoá cồng chiêng',
  });
</script>
