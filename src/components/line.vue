<template>
   <hr class="border-0 h-px" :class=[className,classColor] />
</template>
<script setup>
const props = defineProps({
  className: {
    type: String,
    default: 'my-3'
  },
  classColor: {
    type: String,
    default: 'bg-primary'
  }
})
</script>