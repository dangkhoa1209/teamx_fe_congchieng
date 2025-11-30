<template>
  <hr class="border h-[2px]" :class="[className, classColor]" />
</template>
<script setup>
  const props = defineProps({
    className: {
      type: String,
      default: '',
    },
    classColor: {
      type: String,
      default: 'bg-primary',
    },
  });
</script>
