<template>
  <form @submit.prevent="submitForm">
    <slot />

    <button v-if="showButton" type="submit" class="mt-4 px-4 py-2 bg-primary text-white rounded-lg ">
      {{ submitText }}
    </button>
  </form>
</template>

<script setup>
import { useForm } from 'vee-validate'
import { defineProps } from 'vue'

const props = defineProps({
  submitText: { type: String, default: 'Gửi' },
  handleError: {
    type: Boolean,
    default: true
  },
  showButton: {
    type: Boolean,
    default: true
  }
})

const { validate } = useForm()

const submitForm = async () => {
  const { valid, errors, values } = await validate()

  if (!valid) {
    // show toast cho tất cả lỗi
    console.log('Object.values(errors)', Object.values(errors));
    
    Object.values(errors).forEach((msg) => {
      $toast().error(msg)
    })
    return
  }

  // submit data
  console.log('Form valid:', values)
  $toast().success('Gửi form thành công!')
}
</script>
