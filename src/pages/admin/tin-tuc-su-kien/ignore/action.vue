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

            item.image: {{ item.image }}
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

const emit = defineEmits(['success'])

const modalRef = ref(null)
const isVisible = ref(false)
const isLoading = ref(false)

const formData = ref({
  title: '',
  subtitle: '',
  contents: [],

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

const buildFormData = async (data) => {
  const fd = new FormData()

  fd.append('title', data.title)
  fd.append('subtitle', data.subtitle)

  for (let i = 0; i < data.contents.length; i++) {
    const item = data.contents[i]
    fd.append(`contents[${i}][type]`, item.type)

    if (item.type === 'content') {
      fd.append(`contents[${i}][data]`, item.data)
    } else if (item.type === 'image' && item.image) {
      let blob = item.image

      // Nếu là URL blob -> convert sang Blob thật
      if (typeof blob === 'string' && blob.startsWith('blob:')) {
        const res = await fetch(blob)
        blob = await res.blob()
      }

      fd.append(`contents[${i}][image]`, blob, item.imageName || `image-${i}.jpg`)
    }
  }

  return fd
}


const handleSubmit = async (values) => {
  isLoading.value = true
  try {
    const fd = await buildFormData(formData.value)

    const response = await $api($url.admin.news.create, {
      body: fd
    })
    
    // if (response) {
    //   $toast().success('Thêm bài viết mới thành công.')
    //   close()
    //   emit('success')
    // }
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
