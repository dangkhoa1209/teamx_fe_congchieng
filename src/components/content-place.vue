<template>
  <div class="w-full">
    <div class="max-w-[1440px] mx-auto" :class="[CClass, className]">
      <slot />
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    className: {
      type: String,
      default: '',
    },
  });

  const CClass = computed(() => {
    return 'px-[120px]'; // luôn giữ 120px, không mất khi >1440px
  });
</script>
