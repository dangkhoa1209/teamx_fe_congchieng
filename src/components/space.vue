<template>
  <!-- CHeight: {{ CHeight }}, width: {{ width }}, height: {{ props.height }} -->
  <div :style="{ height: CHeight + 'px', minHeight: CHeight + 'px' }" />
</template>

<script setup>
  const props = defineProps({
    height: {
      type: Number,
      default: 100,
    },
  });

  // reactive width
  const width = ref(window?.innerWidth);

  const handleResize = () => {
    width.value = window?.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
  });

  // computed height
  const CHeight = computed(() => {
    if (width.value <= 640) {
      return props.height * 0.3; // -50%
    } else if (width.value <= 1024) {
      return props.height * 0.9; // -10%
    }
    return props.height;
  });
</script>
