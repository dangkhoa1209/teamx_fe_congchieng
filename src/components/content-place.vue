<template>
  <div class="w-full">
    <div class="mx-auto w-full max-w-[1440px]" :class="[paddingClass, className]">
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

  /**
   * Padding responsive cực đẹp & chuẩn thực tế
   *  mobile     → px-4     (16px)
   *  tablet     → px-6     (24px)
   *  laptop     → px-10    (40px)
   *  wide (1440+) → px-[120px]
   */
  const paddingClass = computed(() => {
    return 'px-4 tablet:px-6 laptop:px-10 wide:px-[120px]';
  });
</script>
