<template>
  <div class="flex flex-col items-center justify-end gap-3 text-sm text-gray-600 sm:flex-row">
    <div class="flex items-center gap-2">
      <span>Hiển thị</span>
      <select
        :value="pageSize"
        class="rounded-lg border border-gray-300 px-2 py-1 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/60"
        @change="onPageSizeChange"
      >
        <option v-for="sizeOption in pageSizeOptions" :key="sizeOption" :value="sizeOption">
          {{ sizeOption }}
        </option>
      </select>
    </div>

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
</template>

<script setup>
const props = defineProps({
  page: {
    type: Number,
    default: 1
  },
  pageSize: {
    type: Number,
    default: 10
  },
  pageSizeOptions: {
    type: Array,
    default: () => [5, 10, 20, 50]
  },
  pageCount: {
    type: Number,
    default: 1
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:page', 'update:pageSize'])

const disablePrev = computed(() => props.loading || props.page <= 1)
const disableNext = computed(() => props.loading || props.page >= props.pageCount)

const updatePage = (newPage) => {
  if (newPage < 1 || newPage > props.pageCount) return
  emit('update:page', newPage)
}

const onPageSizeChange = (event) => {
  const newSize = Number(event.target.value)
  emit('update:pageSize', newSize)
}
</script>

