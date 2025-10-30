<template>
  <div>
    khoa c: {{ $test().khoa }} {{ a }}
  </div>
</template>
<script setup>
import { computed } from 'vue'


const { auth } = $store()
const a = computed(() => {
  return auth.getAccessToken
})


</script>