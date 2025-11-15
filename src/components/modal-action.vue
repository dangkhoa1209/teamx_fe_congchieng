<template>
  <x-modal
    v-model="isVisible"
    :title="props.title"
    :loading="props.loading"
    @submit="handleSubmit"
  >
    <x-form ref="form" @submit="onFormSubmit">
      <slot></slot>
    </x-form>
  </x-modal>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Cập nhật'
  },
  loading: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['update:visible', 'submit'])

const isVisible = computed({
  get: () => props.visible,
  set: (value) => emits('update:visible', value)
})
const form = ref()

const handleSubmit = async () => {
  if (!form.value) return
  await form.value.submit()
}

const onFormSubmit = $lodash.debounce((values) => {
  emits('submit', values)
}, 200)

defineExpose({
  form
})

</script>