<template>
  <hr class="h-[1px] border-0 opacity-100" :class="[className, classColor]" />
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
