<template>
  <x-modal
    v-model="visible"
    :title="title"
    :loading="loading"
    @submit="handleSubmit"
  >
    div
  </x-modal>
</template>
<script setup>
import { toRefs } from 'vue';


const props = defineProps({
  title: 'Cập nhật'
})

const {title} = toRefs(props)

const visible = ref(false) 
const loading = ref(false)

const handleSubmit = () => {
  console.log('ok');
  
}
</script>