<template>
  <div class="relative w-full">
    <input
      v-model="cValue"
      type="text"
      :placeholder="placeholder"
      class="w-full rounded border-[0.1rem] px-4 pr-12 py-2 transition-colors duration-200 outline-none bg-main border-primary placeholder-black disabled:bg-gray-100 disabled:cursor-not-allowed h-[40px] text-body font-medium font-robo"
    />

    <Icon
      name="heroicons:magnifying-glass"
      class="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-primary hover:opacity-79 cursor-pointer"
      @click="emits('change', value)"
    />
  </div>
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
