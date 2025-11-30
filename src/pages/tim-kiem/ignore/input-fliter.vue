<template>
  <input
    v-model="cValue"
    type="text"
    :placeholder="placeholder"
    class="w-full rounded border-[0.1rem] px-4 py-2 transition-colors duration-200 outline-none bg-main border-primary placeholder-black disabled:bg-gray-100 disabled:cursor-not-allowed h-[40px] text-body font-medium font-robo"
  />
</template>

<script setup>
  import { computed, ref, toRefs } from 'vue';
  const value = ref('');
  const emits = defineEmits(['update:modelValue', 'change']);

  const props = defineProps({
    modelValue: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
    },
  });

  const { modelValue } = toRefs(props);

  const cValue = computed({
    get() {
      return modelValue.value;
    },
    set(value) {
      emits('update:modelValue', value);
      emits('change', value);
    },
  });
</script>
