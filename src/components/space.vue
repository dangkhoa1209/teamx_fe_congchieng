<template>
  <div :style="{ height: height + 'px', minHeight: height + 'px' }">
  </div>
</template>

<script setup>
const props = defineProps({
  height: {
    type: Number,
    default: 100
  }
})
</script>
