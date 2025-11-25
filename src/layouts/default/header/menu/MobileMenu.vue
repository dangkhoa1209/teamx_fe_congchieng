<template>
  <ul class="py-4">
    <MobileMenuItem v-for="item in menus" :key="item.id || item.label" :item="item" :depth="0" />
  </ul>
</template>

<script setup>
  import MobileMenuItem from './MobileMenuItem.vue'; // sẽ tạo bên dưới

  defineProps({
    menus: Array,
    depth: { type: Number, default: 0 },
  });
</script>
