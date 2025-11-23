<template>
  <div>checkPermission: {{ checkPermission('khoa') }}</div>
  <!-- <RouterView></RouterView> -->
</template>
<script setup>
  import { checkPermission } from '@/utils/permission-check.js';
  // definePageMeta({
  //   middleware: 'auth'
  // })
  // const a = ref('admin')
</script>
