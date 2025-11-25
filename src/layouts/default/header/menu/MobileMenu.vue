<template>
  <ul class="divide-y divide-gray-200">
    <MobileMenuItem
      v-for="item in menus"
      :key="item.id || item.label"
      :item="item"
      :depth="0"
      @close="$emit('close')"
    />
  </ul>
</template>

<script setup>
  import MobileMenuItem from './MobileMenuItem.vue';

  defineProps({ menus: Array });
  defineEmits(['close']);
</script>
