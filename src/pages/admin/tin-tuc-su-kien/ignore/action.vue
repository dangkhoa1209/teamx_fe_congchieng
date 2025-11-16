<template>
  <x-modal-action
    ref="modalRef"
    v-model:visible="isVisible"
    title="Thêm bài viết mới"
    :loading="isLoading"
    @submit="handleSubmit"
  >
    <div class="flex gap-2">
      <div class="w-full flex flex-col gap-4">
        <x-form-select
          v-model="formData.status"
          :options="[
            {label: 'Hoạt động', value: 'active'},
            {label: 'Dừng hoạt động', value: 'unactive'},
          ]"
          label="Trạng thái"
          name="status"
          :filterable="false"
          :clearable="false"
          placeholder="Chọn trạng thái"
        />

        <x-form-input
          v-model="formData.title"
          label="Tiêu đề"
          name="title"
          rules="required"
          required
          placeholder="Nhập tiêu đề bài viết"
        />

        <x-form-input
          v-model="formData.subtitle"
          label="Tiêu đề phụ"
          name="subtitle"
          rules="required"
          required
          placeholder="Nhập tiêu đề phụ"
        />

       

        <!-- Draggable list -->
        <draggable v-model="formData.contents" handle=".drag-handle" item-key="id" class="space-y-4">
          <template #item="{ element: item, index }">
            <div class="border rounded-lg p-3 relative bg-white shadow-sm flex flex-col gap-2">
              <!-- Drag handle & Delete button -->
              <div class="flex justify-end gap-2 top-2 right-2">
                <span class="drag-handle cursor-move ">
                  <Icon name="heroicons-solid:bars-4" class="text-black w-5 h-5 opacity-70" />
                </span>
                <span class="drag-handle cursor-move ">
                  <Icon name="heroicons-solid:x-mark" class="text-primary w-5 h-5" @click="removeItem(index)" />
                </span>
              </div>

              <!-- Text content -->
              <x-form-text-area
                v-if="item.type === 'content'"
                v-model="item.data"
                label="Nội dung chi tiết"
                :name="'content-' + item.id"
                rules="required"
                required
                placeholder="Nhập nội dung bài viết"
                :rows="6"
              />
              <!-- Image content -->
              <div v-if="item.type === 'image'" class="rounded-2xl border px-4 py-2 border-primary">
                <x-form-image-picker
                  v-model="item.image"
                  :name="'content-' + item.id"
                  label="Hình ảnh"
                  rules="required"
                  required
                />

                <x-form-input
                  v-model="item.imageTitle"
                  label="Tiêu đề cho ảnh"
                  name="titleforimage"
                  placeholder="Nhập tiêu đề ảnh"
                  :name="'title-image-' + item.id"
                />
              </div>
            </div>
          </template>
        </draggable>

      </div>

      <div class="border border-1 p-2 box-border flex flex-col gap-4 w-[200px]">
        <p>Thêm vào bài viết</p>
        <x-form-button class="w-full" theme="primary" icon="heroicons-outline:bars-3" @click="addContent">
          Nội dung
        </x-form-button>
        <x-form-button class="w-full" theme="primary" icon="heroicons-outline:photo" outline @click="addImage">
          Hình ảnh
        </x-form-button>
      </div>
    </div>
  </x-modal-action>
</template>

<script setup>
import draggable from 'vuedraggable'
import $lodash from '../../../../composables/$lodash'
import { filter } from 'lodash-es'

const emits = defineEmits(['refresh'])
const modalRef = ref(null)
const isVisible = ref(false)
const isLoading = ref(false)

const formData = ref({
  title: '',
  subtitle: '',
  status: 'active',
  contents: []
})

const addContent = () => {
  formData.value.contents.push({
    id: $lodash.uniqueId(),
    type: 'content',
    data: ''
  })
}

const addImage = () => {
  formData.value.contents.push({
    id:  $lodash.uniqueId(),
    type: 'image',
    image: null,
    imageTitle: ''
  })
}

const removeItem = (index) => {
  formData.value.contents.splice(index, 1)
}

const resetForm = () => {
  formData.value.title = ''
  formData.value.subtitle = ''
  formData.value.contents = []
  if (modalRef.value?.form) modalRef.value.form.reset()
}

const open = () => {
  // resetForm()
  isVisible.value = true
}

const close = () => { 
  isVisible.value = false 
}

const reset = () => {}

// Xây dựng FormData để gửi
const buildFormData = async (data) => {
  const fd = new FormData()

  // Thêm thông tin chung
  fd.append('title', data.title)
  fd.append('subtitle', data.subtitle)
  fd.append('status', data.status)

  // Chuyển contents (text + info image) thành JSON
  fd.append('contents', JSON.stringify(data.contents.map(c => {
    // Loại bỏ file Blob/File thực tế, chỉ giữ id, type, data
    const copy = { ...c }
    if (c.type === 'image') delete copy.image
    return copy
  })))

  // Xử lý từng image để append FormData
  for (const item of data.contents) {
    if (item.type === 'image' && item.image) {
      let file = item.image
      let fileName = `image-${item.id}`

      if (file instanceof File) {
        // File object → giữ tên gốc
        fileName = file.name
      } else if (typeof file === 'string' && file.startsWith('blob:')) {
        // Blob URL → fetch + tạo File
        const res = await fetch(file)
        const arrayBuffer = await res.arrayBuffer()
        const contentType = res.headers.get('Content-Type') || 'image/jpeg'

        // Lấy extension từ content-type
        let ext = contentType.split('/')[1] || 'jpeg'
        ext = ext.includes('jpeg') ? 'jpg' : ext
        fileName = `${fileName}.${ext}`

        file = new File([arrayBuffer], fileName, { type: contentType })
      }

      fd.append(`image_${item.id}`, file, fileName)
    }
  }

  return fd
}




// Submit
const handleSubmit = async () => {
  isLoading.value = true
  try {
    const fd = await buildFormData(formData.value)
    const response = await $api($url.admin.news.create, { body: fd })
const { data, success } = response?.data?.value || { data: null, success: false } 
    if(success) {
      $toast().success('Thêm tin tức - sự kiên thành công.')
      reset()
      emits('refresh')
      close()
    }
  } catch (error) {
    console.error('Failed to create news', error)
  } finally {
    isLoading.value = false
  }
}

defineExpose({ open })
</script>
