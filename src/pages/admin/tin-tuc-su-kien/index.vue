<template>
  <div class="p-6">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900">
          Quản lý tin tức - sự kiện
        </h1>
      </div>
      <x-form-button icon="mdi:plus" theme="primary" @click="handleCreate" >Thêm bài viết</x-form-button>
    </div>

    <div class="rounded-xl border border-gray-200 bg-white shadow-sm">
      <DataTable
        :columns="columns"
        :rows="rows"
        :loading="isLoading"
        empty-text="Chưa có bài viết nào."
        show-index
        :index-offset="rowIndexOffset"
        sticky-header
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

        <template #cell-actions="{ row }">
          <ActionDropdown
            :actions="getRowActions(row)"
            @select="(action) => handleRowAction(action, row)"
          />
        </template>
      </DataTable>

      <div class="border-t border-gray-100 px-6 py-4" v-if="rows.length">
        <PaginationControls
          :page="tableList.currentPage"
          :page-size="tableList.size"
          :page-count="totalPages"
          :loading="isLoading"
          @update:page="updateCurrentPage"
          @update:pageSize="updatePageSize"
        />
      </div>
    </div>

    <NewsFormModal
      :model-value="isFormModalOpen"
      :loading="isSaving"
      :mode="formMode"
      :initial-data="editingItem"
      @update:model-value="isFormModalOpen = $event"
      @submit="handleSubmitForm"
    />

    <ConfirmModal
      :visible="isDeleteModalOpen"
      title="Xoá bài viết"
      confirm-text="Xoá"
      confirm-variant="danger"
      :loading="isDeleting"
      @cancel="closeDeleteModal"
      @confirm="confirmDelete"
    >
      Bạn có chắc muốn xoá bài viết
      <b>{{ deleteTarget?.title }}</b>
      ? Thao tác này không thể hoàn tác.
    </ConfirmModal>

    <ConfirmModal
      :visible="isStatusModalOpen"
      :title="statusModalTitle"
      :confirm-text="statusModalConfirmText"
      confirm-variant="warning"
      :loading="isUpdatingStatus"
      @cancel="closeStatusModal"
      @confirm="confirmChangeStatus"
    >
      Bạn có chắc muốn {{ statusModalConfirmText.toLowerCase() }}
      bài viết <b>{{ statusTarget?.title }}</b>?
    </ConfirmModal>

    ok: {{ ok }}
    <x-modal v-model="ok">
      <div class="h-[1500px] bg-primary"></div>
    </x-modal>
  </div>
</template>

<script setup>
import ActionDropdown from '~/components/admin/common/ActionDropdown.vue'
import ConfirmModal from '~/components/admin/common/ConfirmModal.vue'
import DataTable from '~/components/admin/common/DataTable.vue'
import PaginationControls from '~/components/admin/common/PaginationControls.vue'
import NewsFormModal from '~/components/admin/tin-tuc-su-kien/NewsFormModal.vue'
import Status from '~/components/admin/common/Status.vue'

definePageMeta({
  layout: 'admin'
})

const ok = ref(true)

// const { $api, $lodash, $toast, $url } = useNuxtApp()

const tableList = ref({
  data: [],
  currentPage: 1,
  size: 10,
  totalItems: 0
})

const isLoading = ref(false)

const isFormModalOpen = ref(false)
const formMode = ref('create')
const editingItem = ref(null)
const isSaving = ref(false)

const isDeleteModalOpen = ref(false)
const deleteTarget = ref(null)
const isDeleting = ref(false)

const isStatusModalOpen = ref(false)
const statusTarget = ref(null)
const isUpdatingStatus = ref(false)

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

const mockRecords = [
  { id: 1, title: 'Tin tức 1', subtitle: 'Mô tả ngắn 1', content: 'Nội dung 1', status: 'active' },
  { id: 2, title: 'Tin tức 2', subtitle: 'Mô tả ngắn 2', content: 'Nội dung 2', status: 'inactive' },
  { id: 3, title: 'Tin tức 3', subtitle: 'Mô tả ngắn 3', content: 'Nội dung 3', status: 'active' },
  { id: 4, title: 'Tin tức 4', subtitle: 'Mô tả ngắn 4', content: 'Nội dung 4', status: 'inactive' },
  { id: 5, title: 'Tin tức 5', subtitle: 'Mô tả ngắn 5', content: 'Nội dung 5', status: 'active' },
  { id: 6, title: 'Tin tức 6', subtitle: 'Mô tả ngắn 6', content: 'Nội dung 6', status: 'inactive' },
  { id: 7, title: 'Tin tức 7', subtitle: 'Mô tả ngắn 7', content: 'Nội dung 7', status: 'active' },
  { id: 8, title: 'Tin tức 8', subtitle: 'Mô tả ngắn 8', content: 'Nội dung 8', status: 'inactive' },
  { id: 9, title: 'Tin tức 9', subtitle: 'Mô tả ngắn 9', content: 'Nội dung 9', status: 'active' },
  { id: 10, title: 'Tin tức 10', subtitle: 'Mô tả ngắn 10', content: 'Nội dung 10', status: 'inactive' },
  { id: 11, title: 'Tin tức 11', subtitle: 'Mô tả ngắn 11', content: 'Nội dung 11', status: 'active' },
  { id: 12, title: 'Tin tức 12', subtitle: 'Mô tả ngắn 12', content: 'Nội dung 12', status: 'inactive' }
]

const rows = computed(() => tableList.value.data ?? [])

const totalPages = computed(() => {
  const size = Number(tableList.value.size) || 1
  return Math.max(1, Math.ceil((tableList.value.totalItems || 0) / size))
})

const rowIndexOffset = computed(() => {
  const currentPage = Number(tableList.value.currentPage) || 1
  const size = Number(tableList.value.size) || 0
  return (currentPage - 1) * size
})

const statusModalTitle = computed(() => {
  if (!statusTarget.value) return 'Thay đổi trạng thái'
  return formatStatusAction(statusTarget.value)
})

const statusModalConfirmText = computed(() => {
  if (!statusTarget.value) return 'Xác nhận'
  return formatStatusAction(statusTarget.value)
})

const updateCurrentPage = (newPage) => {
  if (newPage === tableList.value.currentPage) return
  tableList.value = {
    ...tableList.value,
    currentPage: newPage
  }
}

const updatePageSize = (newSize) => {
  if (newSize === tableList.value.size) return
  tableList.value = {
    ...tableList.value,
    size: newSize,
    currentPage: 1
  }
}


const formatStatus = (item) => {
  return item.status === 'active' ? 'Đang hiển thị' : 'Tạm ẩn'
}

const formatStatusAction = (item) => {
  return item.status === 'active' ? 'Ẩn bài viết' : 'Hiển thị bài viết'
}

const getStatusClasses = (item) => {
  if (item.status === 'active') {
    return 'bg-green-100 text-green-700'
  }
  return 'bg-gray-100 text-gray-600'
}

const getRowActions = (item) => {
  return [
    {
      label: 'Chỉnh sửa',
      value: 'edit',
      icon: 'mdi:pencil'
    },
    {
      label: formatStatusAction(item),
      value: 'toggle-status',
      icon: item.status === 'active' ? 'mdi:eye-off-outline' : 'mdi:eye-outline',
      variant: item.status === 'active' ? 'warning' : 'success'
    },
    {
      label: 'Xoá',
      value: 'delete',
      icon: 'mdi:trash-can-outline',
      variant: 'danger'
    }
  ]
}

const handleRowAction = (action, item) => {
  switch (action.value) {
    case 'edit':
      handleEdit(item)
      break
    case 'toggle-status':
      handleChangeStatus(item)
      break
    case 'delete':
      handleDelete(item)
      break
    default:
      break
  }
}

const fetchList = async () => {
  isLoading.value = true
  try {
    a = 'b'
    const response = await $api($url.news.list, {
      query: {
        page: tableList.value.currentPage,
        per_page: tableList.value.size
      }
    })

    const payload = response?.data?.value || {}
    const dataSource =
      $lodash.get(payload, 'data.data') ??
      $lodash.get(payload, 'data.items') ??
      $lodash.get(payload, 'data') ??
      $lodash.get(payload, 'items') ??
      []

    const normalizedItems = Array.isArray(dataSource) ? dataSource : $lodash.get(dataSource, 'data', [])
    const safeItems = Array.isArray(normalizedItems) ? normalizedItems : []

    const meta =
      $lodash.get(payload, 'data.meta') ??
      $lodash.get(payload, 'meta') ??
      $lodash.get(payload, 'pagination') ??
      {}

    const resolvedTotal =
      $lodash.get(meta, 'total') ??
      $lodash.get(payload, 'total') ??
      safeItems.length

    const resolvedPageSize =
      Number(
        $lodash.get(meta, 'per_page') ??
          $lodash.get(meta, 'perPage') ??
          $lodash.get(payload, 'per_page') ??
          tableList.value.size
      ) || tableList.value.size

    const resolvedCurrentPage =
      Number(
        $lodash.get(meta, 'current_page') ??
          $lodash.get(meta, 'currentPage') ??
          $lodash.get(payload, 'current_page') ??
          tableList.value.currentPage
      ) || tableList.value.currentPage

    tableList.value = {
      ...tableList.value,
      data: safeItems,
      totalItems: resolvedTotal,
      size: resolvedPageSize,
      currentPage: resolvedCurrentPage
    }
  } catch (error) {
    console.log('sdfsdf');
    
    console.error('Failed to fetch news list', error)
    $toast().error('Không thể tải danh sách bài viết. Đang hiển thị dữ liệu mẫu.')

    const start = (tableList.value.currentPage - 1) * tableList.value.size
    const pagedRecords = mockRecords.slice(start, start + tableList.value.size)
    tableList.value = {
      ...tableList.value,
      data: pagedRecords,
      totalItems: mockRecords.length
    }
  } finally {
    isLoading.value = false
  }
}

const handleCreate = () => {
  editingItem.value = null
  formMode.value = 'create'
  isFormModalOpen.value = true
}

const handleEdit = (item) => {
  editingItem.value = { ...item }
  formMode.value = 'edit'
  isFormModalOpen.value = true
}

const handleSubmitForm = async (payload) => {
  isSaving.value = true
  try {
    if (formMode.value === 'edit' && editingItem.value?.id) {
      const response = await $api($url.news.update, {
        body: payload,
        uriParams: {
          ':id': editingItem.value.id
        }
      })
      if (response) {
        $toast().success('Cập nhật bài viết thành công.')
      }
      
    } else {
      const response = await $api($url.news.create, {
        body: payload
      })
      if (response) {
        $toast().success('Thêm bài viết mới thành công.')
      }
    }
    isFormModalOpen.value = false
    await fetchList()
  } catch (error) {
    console.error('Failed to submit form', error)
  } finally {
    isSaving.value = false
  }
}

const handleDelete = (item) => {
  deleteTarget.value = item
  isDeleteModalOpen.value = true
}

const closeDeleteModal = () => {
  isDeleteModalOpen.value = false
  deleteTarget.value = null
}

const confirmDelete = async () => {
  if (!deleteTarget.value?.id) return
  isDeleting.value = true
  try {
    const res = await $api($url.news.delete, {
      uriParams: {
        ':id': deleteTarget.value.id
      }
    })
    if(res) {
      $toast().success('Đã xoá bài viết.')
      closeDeleteModal()
      if (rows.value.length === 1 && tableList.value.currentPage > 1) {
        updateCurrentPage(tableList.value.currentPage - 1)
      } else {
        await fetchList()
      }
    }
   
  } catch (error) {
    console.error('Failed to delete item', error)
  } finally {
    isDeleting.value = false
  }
}

const handleChangeStatus = (item) => {
  statusTarget.value = item
  isStatusModalOpen.value = true
}

const closeStatusModal = () => {
  isStatusModalOpen.value = false
  statusTarget.value = null
}

const confirmChangeStatus = async () => {
  if (!statusTarget.value?.id) return
  isUpdatingStatus.value = true
  try {
    const nextStatus = statusTarget.value.status === 'active' ? 'inactive' : 'active'
    const res = await $api($url.news.changeStatus, {
      body: {
        status: nextStatus
      },
      uriParams: {
        ':id': statusTarget.value.id
      }
    })

    if(res) {
      $toast().success('Đã cập nhật trạng thái bài viết.')
      closeStatusModal()
      await fetchList()
    }
   
  } catch (error) {
    console.error('Failed to change status', error)
  } finally {
    isUpdatingStatus.value = false
  }
}

watch(
  [() => tableList.value.currentPage, () => tableList.value.size],
  ([newPage, newSize], [oldPage, oldSize]) => {
    if (newPage === oldPage && newSize === oldSize) return
    fetchList()
  }
)

onMounted(() => {
  fetchList()
})
</script>

