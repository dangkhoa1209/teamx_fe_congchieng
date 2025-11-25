<template>
  <div class="inline-flex flex-col">
    <!-- CASE 1: Gạch đứng bên trái -->
    <div v-if="variant === 'left'" class="flex items-stretch gap-[10px]">
      <span class="w-[2px] bg-primary leading-[1]" />

      <slot>
        <p class="m-0 leading-[1] text-primary p-0" :class="className">{{ title }}</p>
      </slot>
    </div>

    <!-- CASE 2: Gạch nằm ngang dưới text -->
    <div v-else class="flex flex-col">
      <slot>
        <p class="m-0 leading-[1] text-primary p-0" :class="className">{{ title }}</p>
      </slot>
      <span class="block mt-[15px] w-[60px] h-[2px] bg-primary" />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: { type: String },
    variant: { type: String, default: 'left' }, // left | bottom
    className: { type: String },
  });
</script>
