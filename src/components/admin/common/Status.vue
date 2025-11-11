<template>
  <span
    class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
    :class="cClass"
  >
    {{ cFormatStatus }}
  </span>
</template>

<script setup>
const props = defineProps({
  status: {
    type: String,
    default: 'inactive'
  }
})

const cClass = computed(() => {
    if(props.status === 'active') {
       return 'bg-green-100 text-green-700'
    }
    return 'bg-gray-100 text-gray-600'
})

const cFormatStatus = computed(() => {
    if(props.status === 'active') {
       return 'Đang hiển thị'
    }
    return 'Tạm ẩn'
})

</script>