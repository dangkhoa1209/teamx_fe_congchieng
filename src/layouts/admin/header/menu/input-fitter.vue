<template>
  <input
    v-model="value"
    type="text"
    class="w-full rounded-full h-[40px] bg-primary text-main px-5 py-2 border border-primary transition-colors duration-200 hover:border-primary focus:outline-none focus:ring-0 disabled:bg-gray-100 disabled:cursor-not-allowed text-body font-thin italic font-robo"
    @keydown.enter.prevent="handleEnter"
  />
</template>
<script setup>
  import { ref } from 'vue';
  const value = ref('');
  const emit = defineEmits(['enter']);
  const handleEnter = () => {
    emit('enter', value.value);
  };
</script>
