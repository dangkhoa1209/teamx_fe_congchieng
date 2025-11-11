<template>
    <button
      type="button"
      class="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
      @click="emits('click')"
    >
      <Icon :name="icon" class="h-5 w-5" />
      {{ title }}
    </button>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Thêm'
    },
    icon: {
        type: String,
        default: 'mdi:plus'
    }
})
const emits = defineEmits(['click'])
</script>