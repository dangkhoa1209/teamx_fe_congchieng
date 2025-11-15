<template>
  <div class="rounded-xl border border-gray-200 bg-white shadow-sm">

    sdf
  <div class="overflow-x-auto">
    dsfsddsfsds
    <table class="min-w-full divide-y divide-gray-200">
      
      <thead :class="['text-left text-sm font-semibold text-gray-600', stickyHeader ? 'sticky top-0 bg-gray-50 z-10' : 'bg-gray-50']">
        <tr>
          <th v-if="showIndex" scope="col" class="px-6 py-3">
            STT
          </th>
          <th
            v-for="column in columns"
            :key="column.key"
            scope="col"
            :class="['px-6 py-3', column.align === 'right' ? 'text-right' : column.align === 'center' ? 'text-center' : '', column.headerClass]"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100 text-sm text-gray-700">
        <tr v-if="loading">
          <td :colspan="columns.length + (showIndex ? 1 : 0)" class="px-6 py-10 text-center text-gray-500">
            <slot name="loading">
              Đang tải dữ liệu...
            </slot>
          </td>
        </tr>
        <tr v-else-if="!rows?.length">
          <td :colspan="columns.length + (showIndex ? 1 : 0)" class="px-6 py-10 text-center text-gray-500">
            <slot name="empty">
              {{ emptyText }}
            </slot>
          </td>
        </tr>
        <template v-else>
          <tr v-for="(row, rowIndex) in rows" :key="resolveRowKey(row, rowIndex)" class="hover:bg-gray-50">
            <td v-if="showIndex" class="px-6 py-4 text-gray-600">
              {{ indexOffset + rowIndex + 1 }}
            </td>
            <td
              v-for="column in columns"
              :key="`${column.key}-${resolveRowKey(row, rowIndex)}`"
              :class="[
                'px-6 py-4',
                column.align === 'right' ? 'text-right' : column.align === 'center' ? 'text-center' : '',
                column.bodyClass
              ]"
            >
              <slot :name="`cell-${column.key}`" :row="row" :column="column" :index="rowIndex">
                <span class="block truncate">
                  {{ row?.[column.key] ?? '—' }}
                </span>
              </slot>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script setup>
const props = defineProps({
  columns: {
    type: Array,
    default: () => []
  },
  rows: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  },
  emptyText: {
    type: String,
    default: 'Không có dữ liệu'
  },
  showIndex: {
    type: Boolean,
    default: false
  },
  indexOffset: {
    type: Number,
    default: 0
  },
  rowKey: {
    type: [String, Function],
    default: 'id'
  },
  stickyHeader: {
    type: Boolean,
    default: false
  }
})

const resolveRowKey = (row, index) => {
  if (typeof props.rowKey === 'function') {
    return props.rowKey(row, index)
  }

  if (props.rowKey && row && row[props.rowKey] !== undefined) {
    return row[props.rowKey]
  }

  return index
}
</script>

