<template>
  <form @submit.prevent="submitForm">
    <slot />
  </form>
</template>

<script setup>
import { useNuxtApp } from '#app'
import { useForm } from 'vee-validate'

const props = defineProps({
  handleError: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['submit', 'invalid'])

const { handleSubmit, resetForm: resetVeeForm } = useForm()

const handleInvalid = (errors) => {

  if(!errors) {
    return
  }
  emit('invalid', errors)
  if (!props.handleError) return
  
  const errorList = Object.values(errors).flatMap((msg) => {
    if (!msg) return []
    return Array.isArray(msg) ? msg : [msg]
  })

  errorList.forEach((message) => {
    if (message) {
      $toast().error(String(message))
    }
  })
}

const submitForm = handleSubmit(
  async (values) => {
    try {
      emit('submit', values)
    } finally {
    }
  },
  (errors) => {
    console.log('errors', errors);
    
    handleInvalid(errors?.errors)
  }
)

const reset = () => {
  resetVeeForm()
}

defineExpose({
  submit: submitForm,
  reset
})
</script>
