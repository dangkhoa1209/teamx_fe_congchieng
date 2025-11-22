<template>
  <div v-if="totalPages" class="flex items-center gap-[25px]">
    <!-- Previous -->
    <button
      class="w-[38px] h-[38px] rounded-full border border-primary flex items-center justify-center text-primary transition-all"
      :class="{ 'opacity-30 cursor-not-allowed': currentPage === 1 }"
      @click="prevPage"
      :disabled="currentPage === 1"
    >
      <span class="rotate-180">›</span>
    </button>

    <!-- 5 số trang liên tiếp - chỉ thay đổi 1 phần tử khi prev/next -->
    <button
      v-for="n in displayedPages"
      :key="n"
      class="w-[38px] h-[38px] rounded-full border border-primary flex items-center justify-center font-semibold transition-all"
      :class="{
        'bg-primary text-white border-primary': n === currentPage,
        'text-primary hover:bg-primary/10': n !== currentPage
      }"
      @click="selectPage(n)"
    >
      {{ n }}
    </button>

    <!-- Next -->
    <button
      class="w-[38px] h-[38px] rounded-full border border-primary flex items-center justify-center text-primary transition-all"
      :class="{ 'opacity-30 cursor-not-allowed': currentPage === totalPages }"
      @click="nextPage"
      :disabled="currentPage === totalPages"
    >
      ›
    </button>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps({
  modelValue: { type: Number, default: 1 },
  total: { type: Number, default: 0 },
  perPage: { type: Number, default: 10 }
})

const emit = defineEmits(['update:modelValue', 'change'])

const currentPage = computed(() => props.modelValue)
const totalPages = computed(() =>  Math.ceil(props.total / props.perPage) )

// Dãy 5 số đang hiển thị
const displayedPages = ref([])

// Hàm khởi tạo dãy 5 số ban đầu
const initDisplayedPages = () => {
  const count = Math.min(5, totalPages.value)
  let start = Math.max(1, currentPage.value - Math.floor(count / 2))
  const end = Math.min(totalPages.value, start + count - 1)
  if (end - start + 1 < count) start = end - count + 1

  console.log('count', count);
  
  displayedPages.value = Array.from({ length: count }, (_, i) => start + i)
}

onMounted(() => {
  initDisplayedPages()
})

// Đồng bộ khi cha thay đổi modelValue
watch(() => props.modelValue, (val) => {
  if (val >= 1 && val <= totalPages.value && val !== currentPage.value) {
    initDisplayedPages() // hoặc dùng slideToPage(val) nếu muốn mượt hơn
  }
})

watch(() => props.total, (val) => {
   initDisplayedPages() 
})

watch(() => props.perPage, (val) => {
   initDisplayedPages() 
})


watch(() => props.modelValue, (val) => {
  if (val >= 1 && val <= totalPages.value && val !== currentPage.value) {
    initDisplayedPages() // hoặc dùng slideToPage(val) nếu muốn mượt hơn
  }
})

// Click vào số trang
const selectPage = (n) => {
  if (n === currentPage.value) return // sửa lỗi ở đây

  // currentPage.value = n
  emit('update:modelValue', n)
  emit('change', n)

  // Nếu số được click nằm ngoài dãy hiện tại (hiếm, chỉ xảy ra nếu cha set page từ ngoài)
  if (!displayedPages.value.includes(n)) {
    slideToPage(n)
  }
}

// Di chuyển mượt đến trang đích (chỉ dùng khi cần nhảy xa)
const slideToPage = (target) => {
  const count = 5
  let start = target - Math.floor(count / 2)
  if (start < 1) start = 1
  let end = start + count - 1
  if (end > totalPages.value) {
    end = totalPages.value
    start = Math.max(1, end - count + 1)
  }
  displayedPages.value = Array.from({ length: Math.min(count, totalPages.value) }, (_, i) => start + i)
}

const nextPage = () => {
  if (currentPage.value >= totalPages.value) return

  const next = currentPage.value + 1
  emit('update:modelValue', next)
  emit('change', next)

  // Nếu trang tiếp theo đã có trong dãy → không cần thay đổi gì
  if (displayedPages.value.includes(next)) return

  // Nếu chưa có → trượt: bỏ số đầu, thêm số mới ở cuối
  const newLast = displayedPages.value[displayedPages.value.length - 1] + 1
  if (newLast <= totalPages.value) {
    displayedPages.value = [...displayedPages.value.slice(1), newLast]
  }
}

const prevPage = () => {
  if (currentPage.value <= 1) return

  const prev = currentPage.value - 1
  currentPage.value = prev
  emit('update:modelValue', prev)
  emit('change', prev)

  // Nếu trang trước đã có trong dãy → không thay đổi
  if (displayedPages.value.includes(prev)) return

  // Nếu chưa có → trượt: thêm số mới ở đầu, bỏ số cuối
  const newFirst = displayedPages.value[0] - 1
  if (newFirst >= 1) {
    displayedPages.value = [newFirst, ...displayedPages.value.slice(0, -1)]
  }
}
</script>

<style scoped>
button {
  font-size: 18px;
}
</style>