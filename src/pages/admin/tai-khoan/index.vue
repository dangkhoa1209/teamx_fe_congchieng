<template>
  <div class="p-6">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900">
          Quản lý tài khoản
        </h1>
      </div>
      <x-form-button  icon="mdi:plus" theme="primary" @click="handleCreate" >Thêm tài khoản</x-form-button>
    </div>

    <x-data-table
      :columns="columns"
      :rows="tableList.data"
      :loading="isLoading"
      empty-text="Chưa có tài khoản."
      show-index
      sticky-header
    >
      <template #cell-permissions="{ row }">
        <div v-if="row.permissions || row.permissions.length">
          <p v-for="(permission, index) in (row.permissions || [])" :key="permission">
            {{ permissionsObj[permission] }}
          </p>
        </div>
       
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

    <ModelAction ref="modalAction" @refresh="fetchList"></ModelAction>
  </div>
</template>
<script setup>

import { onMounted } from 'vue'
import ModelAction from './ignore/action.vue'
import permissions from '~/data/permissions/list/index.json'
const permissionsObj = Object.fromEntries(permissions.map(item => [item.value, item.label]))

const modalAction = ref()
const handleCreate = () => {    
  modalAction.value?.open()
}

const columns = [
  {
    key: 'username',
    label: 'Tài khoản',
    headerClass: 'min-w-[220px]'
  },
  {
     key: 'permissions',
    label: 'Phân quyền',
    headerClass: 'min-w-[200px]'
  }
]

const tableList = ref({
  data: [],
  currentPage: 1,
  size: 10,
  totalItems: 0
})

const isLoading = ref(false)

const fetchList = $lodash.debounce(async() => {
  const response = await $api($url.admin.account.list, {
    body: {
      page: tableList.value.currentPage,
      per_page: tableList.value.size
    }
  })
  const { data, success } = response?.data?.value || { data: null, success: false }
  if(success) {
    tableList.value = data
  }
}, 50)

onMounted(async() => {
  await fetchList()
})

</script>