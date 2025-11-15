<template>
  <div class="p-6">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900">
          Quản lý tài khoản
        </h1>
      </div>
      <x-form-button icon="mdi:plus" theme="primary" @click="handleCreate" >Thêm tài khoản</x-form-button>
    </div>
    <ModelAction ref="modalAction"></ModelAction>
  </div>
</template>
<script setup>

import ModelAction from './ignore/action.vue'
const modalAction = ref()
const handleCreate = () => { 
  console.log('modalAction.value?', modalAction.value);
   
  modalAction.value?.open()
}

</script>