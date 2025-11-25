<template>
  <div class="inline-flex flex-col">
    <!-- CASE 1: Gạch đứng bên trái -->
    <div v-if="variant === 'left'" class="flex items-stretch gap-[10px]">
      <span class="w-[2px] bg-primary leading-[1]" />
      <p class="m-0 leading-[1] text-primary p-0" :class="className">{{ title }}</p>
    </div>

    <!-- CASE 2: Gạch nằm ngang dưới text -->
    <div v-else class="flex flex-col">
      <p class="m-0 leading-[1] text-primary p-0" :class="className">{{ title }}</p>
      <span class="block mt-[15px] w-[60px] h-[2px] bg-primary" />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: { type: String, required: true },
    variant: { type: String, default: 'left' }, // left | bottom
    className: { type: String },
  });
</script>
