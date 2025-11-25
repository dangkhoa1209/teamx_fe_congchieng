<template>
  <div v-if="totalPages" class="flex items-center gap-[25px]">
    <button
      class="w-[38px] h-[38px] rounded-full border border-primary flex items-center justify-center text-primary transition-all"
      :class="{ 'opacity-30 cursor-not-allowed': currentPage === 1 }"
      :disabled="currentPage === 1"
      @click="prevPage"
    >
      <span class="rotate-180">›</span>
    </button>

    <button
      v-for="n in displayedPages"
      :key="n"
      class="w-[38px] h-[38px] rounded-full border border-primary flex items-center justify-center font-semibold transition-all"
      :class="{
        'bg-primary text-main border-primary': n === currentPage,
        'text-primary hover:bg-primary/10': n !== currentPage,
      }"
      @click="selectPage(n)"
    >
      {{ n }}
    </button>

    <button
      class="w-[38px] h-[38px] rounded-full border border-primary flex items-center justify-center text-primary transition-all"
      :class="{ 'opacity-30 cursor-not-allowed': currentPage === totalPages }"
      :disabled="currentPage === totalPages"
      @click="nextPage"
    >
      ›
    </button>
  </div>
</template>

<script setup>
  import { computed, onMounted, ref, watch } from 'vue';

  const props = defineProps({
    modelValue: { type: Number, default: 1 },
    total: { type: Number, default: 0 },
    perPage: { type: Number, default: 10 },
  });

  const emit = defineEmits(['update:modelValue', 'change']);

  const currentPage = computed(() => props.modelValue);
  const totalPages = computed(() => Math.ceil(props.total / props.perPage));

  const displayedPages = ref([]);

  // Khởi tạo dãy 5 số
  const initDisplayedPages = () => {
    const count = Math.min(5, totalPages.value);
    let start = Math.max(1, currentPage.value - Math.floor(count / 2));
    let end = Math.min(totalPages.value, start + count - 1);
    if (end - start + 1 < count) start = end - count + 1;

    displayedPages.value = Array.from({ length: count }, (_, i) => start + i);
  };

  onMounted(() => {
    initDisplayedPages();
  });

  // Đồng bộ khi modelValue / total / perPage thay đổi
  watch([() => props.modelValue, () => props.total, () => props.perPage], () => {
    initDisplayedPages();
  });

  // Chọn trang
  const selectPage = (n) => {
    if (n === currentPage.value) return;
    emit('update:modelValue', n);
    emit('change', n);
    if (!displayedPages.value.includes(n)) slideToPage(n);
  };

  // Slide dãy trang
  const slideToPage = (target) => {
    const count = 5;
    let start = target - Math.floor(count / 2);
    if (start < 1) start = 1;
    let end = start + count - 1;
    if (end > totalPages.value) {
      end = totalPages.value;
      start = Math.max(1, end - count + 1);
    }
    displayedPages.value = Array.from(
      { length: Math.min(count, totalPages.value) },
      (_, i) => start + i
    );
  };

  // Prev / Next
  const nextPage = () => {
    if (currentPage.value >= totalPages.value) return;
    const next = currentPage.value + 1;
    emit('update:modelValue', next);
    emit('change', next);
    if (!displayedPages.value.includes(next)) {
      const newLast = displayedPages.value[displayedPages.value.length - 1] + 1;
      if (newLast <= totalPages.value)
        displayedPages.value = [...displayedPages.value.slice(1), newLast];
    }
  };

  const prevPage = () => {
    if (currentPage.value <= 1) return;
    const prev = currentPage.value - 1;
    emit('update:modelValue', prev);
    emit('change', prev);
    if (!displayedPages.value.includes(prev)) {
      const newFirst = displayedPages.value[0] - 1;
      if (newFirst >= 1) displayedPages.value = [newFirst, ...displayedPages.value.slice(0, -1)];
    }
  };
</script>

<style scoped>
  button {
    font-size: 18px;
  }
</style>
