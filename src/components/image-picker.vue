<template>
  <div class="flex flex-col gap-4">
    <!-- Input chọn ảnh -->
    <input type="file" accept="image/*" @change="onFileChange" />

    <!-- Cropper preview -->
    <div v-if="imageSrc" class="w-full max-w-lg mx-auto">
      <img
        ref="cropperImage"
        :src="imageSrc"
        alt="Preview"
        class="w-full max-h-[400px] object-contain"
      />
    </div>

    <!-- Controls -->
    <div v-if="imageSrc" class="flex gap-2">
      <button class="px-4 py-2 bg-primary text-white rounded" @click="cropImage">
        Crop & Compress
      </button>
      <button class="px-4 py-2 bg-gray-300 rounded" @click="clearImage">
        Cancel
      </button>
    </div>

    <!-- Preview cropped -->
    <div v-if="croppedData" class="mt-4">
      <p>Preview:</p>
      <img :src="croppedData" alt="Cropped Image" class="w-full max-w-lg rounded" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

const imageSrc = ref(null)
const croppedData = ref(null)
const cropperImage = ref(null)
let cropper = null

const onFileChange = (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (event) => {
    imageSrc.value = event.target.result
    nextTick(() => {
      if (cropper) cropper.destroy()
      cropper = new Cropper(cropperImage.value, {
        aspectRatio: 565 / 386,
        viewMode: 1,
        autoCropArea: 1,
      })
    })
  }
  reader.readAsDataURL(file)
}

const cropImage = () => {
  if (!cropper) return
  const canvas = cropper.getCroppedCanvas({
    width: 565, // output width
    height: 386, // output height
    imageSmoothingQuality: 'high'
  })

  // Compress ảnh xuống ~80% chất lượng
  canvas.toBlob(
    (blob) => {
      const url = URL.createObjectURL(blob)
      croppedData.value = url

      // Nếu muốn submit form: return blob hoặc file
      // formData.append('file', blob, 'image.png')
    },
    'image/jpeg',
    0.8
  )
}

const clearImage = () => {
  imageSrc.value = null
  croppedData.value = null
  cropper?.destroy()
  cropper = null
}
</script>

<style scoped>
/* Tuỳ chỉnh cropper */
.cropper-container {
  max-height: 400px;
}
</style>
