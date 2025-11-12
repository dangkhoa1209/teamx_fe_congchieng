<template>
  <x-modal-action
    ref="modalRef"
    v-model:visible="isVisible"
    title="Thêm bài viết mới"
    :loading="isLoading"
    @submit="handleSubmit"
  >
    <div class="flex gap-2" >
      <div class="w-full flex flex-col gap-4">
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


        <div v-for="(item, index) in formData.contents">
          <x-form-text-area
            v-if="item.type == 'content'"
            v-model="item.data"
            label="Nội dung chi tiết"
            :name="'content' + index"
            rules="required"
            required
            placeholder="Nhập nội dung bài viết"
            :rows="6"
          />

          <div v-if="item.type == 'image'" class="rounded-2xl border px-4 py-2 border-primary">
            <x-form-image-picker
              :name="'content' + index"
              label="Hình ảnh"
              rules="required"
              required
              v-model="item.image"
            />
            <x-form-input
              v-model="formData.imageName"
              label="Tiêu đề cho ảnh"
              name="titleforimage"
              placeholder="Nhập tiêu đề ảnh"
            />
          </div>
          
        </div>
      </div>
      <div class="border border-1 p-2 box-border flex flex-col gap-4 w-[200px]">
        <p>Thêm vào bài viết</p>
        <x-form-button class="w-full" theme="primary" icon="heroicons-outline:bars-3" @click="addContent">Nội dung</x-form-button>
        <x-form-button class="w-full" theme="primary" icon="heroicons-outline:photo" outline @click="addImage">Hình ảnh</x-form-button>
      </div>
    </div>
  </x-modal-action>
</template>

<script setup>
import { template } from 'lodash-es'

const { $api, $toast, $url } = useNuxtApp()

const emit = defineEmits(['success'])

const modalRef = ref(null)
const isVisible = ref(false)
const isLoading = ref(false)

const formData = ref({
  title: '',
  subtitle: '',
  contents: [

  ],

})

const addContent = () => {
  formData.value.contents.push({
    type: 'content',
    data: ''
  })
}

const addImage = () => {
  formData.value.contents.push({
    type: 'image',
    image: null,
    imageName: ''
  })
}

const resetForm = () => {
  formData.title = ''
  formData.subtitle = ''
  formData.content = ''
  if (modalRef.value?.form) {
    modalRef.value.form.reset()
  }
}

const open = () => {
  resetForm()
  isVisible.value = true
}

watch(isVisible, (visible) => {
  if (visible) {
    resetForm()
  }
})

const close = () => {
  isVisible.value = false
}

const handleSubmit = async (values) => {
  isLoading.value = true
  try {
    const response = await $api($url.news.create, {
      body: values
    })
    
    if (response) {
      $toast().success('Thêm bài viết mới thành công.')
      close()
      emit('success')
    }
  } catch (error) {
    console.error('Failed to create news', error)
  } finally {
    isLoading.value = false
  }
}

// Expose open function để có thể gọi từ bên ngoài
defineExpose({
  open
})
</script>
