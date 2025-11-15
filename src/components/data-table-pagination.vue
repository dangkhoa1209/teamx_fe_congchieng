<template>
  <div class="border-t border-gray-100 px-6 py-4">
    <div class="flex flex-col items-center justify-end gap-3 text-sm text-gray-600 sm:flex-row">
      <!-- Page Size Selector -->
      <div class="flex items-center gap-2">
        <span>Hiển thị</span>
        <select
          :value="pageSize"
          class="rounded-lg border border-gray-300 px-2 py-1 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/60"
          :disabled="loading"
          @change="onPageSizeChange"
        >
          <option v-for="sizeOption in pageSizeOptions" :key="sizeOption" :value="sizeOption">
            {{ sizeOption }}
          </option>
        </select>
        <span>mục</span>
      </div>

      <!-- Navigation -->
      <div class="flex items-center gap-2">
        <button
          type="button"
          class="rounded-lg border border-gray-200 px-3 py-1.5 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          :disabled="disablePrev"
          @click="updatePage(page - 1)"
        >
          Trước
        </button>
        <span>
          Trang {{ Math.min(page, pageCount) }} / {{ Math.max(pageCount, 1) }}
        </span>
        <button
          type="button"
          class="rounded-lg border border-gray-200 px-3 py-1.5 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          :disabled="disableNext"
          @click="updatePage(page + 1)"
        >
          Sau
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'

const props = defineProps({
  page: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  totalItems: {
    type: Number,
    default: 0,
    required: true, // Bắt buộc truyền totalItems
  },
  pageSizeOptions: {
    type: Array,
    default: () => [5, 10, 20, 50],
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:page', 'update:pageSize', 'refresh'])

// Tính pageCount dựa trên totalItems và pageSize
const pageCount = computed(() => {
  if (props.totalItems === 0) return 1
  return Math.ceil(props.totalItems / props.pageSize)
})

// Kiểm tra disable nút Trước/Sau
const disablePrev = computed(() => props.loading || props.page <= 1)
const disableNext = computed(() => props.loading || props.page >= pageCount.value)

// Cập nhật page
const updatePage = (newPage) => {
  if (newPage < 1 || newPage > pageCount.value || props.loading) return
  emit('update:page', newPage)
  emit('refresh')
}

// Xử lý thay đổi pageSize
const onPageSizeChange = (event) => {
  const newSize = Number(event.target.value)
  emit('update:pageSize', newSize)
  emit('refresh')
}

// Theo dõi pageSize: nếu page hiện tại vượt quá pageCount, reset về trang 1
watch([() => props.pageSize, pageCount], () => {
  if (props.page > pageCount.value) {
    emit('update:page', 1)
    emit('refresh')
  }
})
</script>