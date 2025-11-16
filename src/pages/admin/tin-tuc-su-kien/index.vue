<template>
  <x-content-place>
    <div>
      <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
        <div>
          <h1 class="text-2xl font-semibold text-gray-900">
            Quản lý tin tức - sự kiện
          </h1>
        </div>
        <x-form-button icon="mdi:plus" theme="primary" @click="handleCreate" >Thêm bài viết</x-form-button>
      </div>

      <div class="rounded-xl border border-gray-200 bg-white shadow-sm">
        <x-data-table
          :columns="columns"
          :rows="tableList.data"
          :loading="isLoading"
          empty-text="Chưa có tin tức - sự kiện"
          show-index
          sticky-header
          @onAction="handleRowAction"
        >
          <template #cell-title="{ row }">
            <p class="font-medium text-gray-900">
              {{ row.title || '—' }}
            </p>
          </template>

          <template #cell-subtitle="{ row }">
            <p class="truncate text-gray-600" :title="row.subtitle">
              {{ row.subtitle || '—' }}
            </p>
          </template>

          <template #cell-content="{ row }">
            <p class="truncate text-gray-600" :title="row.content">
              {{ row.content || '—' }}
            </p>
          </template>

          <template #cell-status="{ row }">
            <Status :status="row.status" />
          </template>
        </x-data-table>
        <x-data-table-pagination
          :page="tableList.currentPage"
          :page-size="tableList.size"
          :total-items="tableList.totalItems"
          :loading="isLoading"
          @update:page="tableList.currentPage = $event"
          @update:page-size="tableList.size = $event"
          @refresh="fetchList"
        />
      </div>

      <ModalAction ref="modalAction"></ModalAction>
    </div>
  </x-content-place>
  
</template>

<script setup>
import Status from '~/components/admin/common/Status.vue'

import ModalAction from './ignore/action.vue'

const modalAction = ref()

definePageMeta({
  layout: 'admin'
})

const tableList = ref({
  data: [],
  currentPage: 1,
  size: 10,
  totalItems: 0
})

const columns = [
  {
    key: 'title',
    label: 'Tiêu đề',
    headerClass: 'min-w-[220px]'
  },
  {
    key: 'subtitle',
    label: 'Mô tả ngắn',
    headerClass: 'min-w-[200px]'
  },
  {
    key: 'content',
    label: 'Nội dung',
    headerClass: 'min-w-[240px]'
  },
  {
    key: 'status',
    label: 'Trạng thái',
    headerClass: 'w-40',
    align: 'center',
    bodyClass: 'text-center'
  },
  {
    key: 'actions',
    label: 'Thao tác',
    headerClass: 'w-24 text-right',
    align: 'right'
  }
]

// const formatStatus = (item) => {
//   return item.status === 'active' ? 'Đang hiển thị' : 'Tạm ẩn'
// }

// const formatStatusAction = (item) => {
//   return item.status === 'active' ? 'Ẩn bài viết' : 'Hiển thị bài viết'
// }

// const getStatusClasses = (item) => {
//   if (item.status === 'active') {
//     return 'bg-green-100 text-green-700'
//   }
//   return 'bg-gray-100 text-gray-600'
// }

// const getRowActions = (item) => {
//   return [
//     {
//       label: 'Chỉnh sửa',
//       value: 'edit',
//       icon: 'mdi:pencil'
//     },
//     {
//       label: formatStatusAction(item),
//       value: 'toggle-status',
//       icon: item.status === 'active' ? 'mdi:eye-off-outline' : 'mdi:eye-outline',
//       variant: item.status === 'active' ? 'warning' : 'success'
//     },
//     {
//       label: 'Xoá',
//       value: 'delete',
//       icon: 'mdi:trash-can-outline',
//       variant: 'danger'
//     }
//   ]
// }




const isLoading = ref(false)
const fetchList = $lodash.debounce(async() => {
  isLoading.value = true
  const response = await $api($url.admin.news.list, {
    body: {
      page: tableList.value.currentPage,
      per_page: tableList.value.size
    }
  })
  const { data, success } = response?.data?.value || { data: null, success: false }
  if(success) {
    tableList.value = data
  }
  isLoading.value = false
}, 50)


const handleCreate = () => {  
  modalAction.value?.open()
}

const handleRowAction = (data) => {
  const {action, row} = data  
  switch (action.value) {
    case 'update-permission':
      // modelUpdatePermission.value && modelUpdatePermission.value.open(row)
      break  
    case 'update-password':
      // modelUpdatePassword.value && modelUpdatePassword.value.open(row)
      break
    case 'delete':
      // modelDelete.value && modelDelete.value.open(row)
      break
    default:
      break
  }
}


onMounted(() => {
  fetchList()
})
</script>

