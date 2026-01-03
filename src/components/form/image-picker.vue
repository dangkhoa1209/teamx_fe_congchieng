<template>
  <div class="flex flex-col w-full">
    <!-- Label -->
    <label v-if="label" :for="name" class="mb-1 text-body font-medium font-robo">
      {{ label }}
      <span v-if="required" class="text-red-500 ml-0.5">*</span>
    </label>

    <Field v-slot="{ field, errors, handleChange }" :name="name" :label="label" s :rules="rules">
      <div
        class="flex flex-col gap-3 items-start w-full"
        @dragover.prevent="isDragging = true"
        @dragleave.prevent="isDragging = false"
        @drop.prevent="onDrop($event, handleChange)"
      >
        <!-- Upload -->
        <label
          v-if="!imageSrc && !croppedData"
          class="flex flex-col items-center justify-center w-full border-2 border-dashed rounded-lg p-3 text-sm text-gray-500 cursor-pointer hover:bg-gray-50 transition"
          :class="{
            'border-red-400': errors.length > 0,
            'border-gray-300': errors.length === 0,
            'bg-gray-100': isDragging,
          }"
        >
          <ImagePlusOutline class="w-6 h-6 mb-1 text-gray-400" />

          <span v-if="!isDragging">Chọn ảnh hoặc kéo thả vào đây</span>
          <span v-else class="text-primary font-semibold">Thả ảnh vào đây</span>
          <input
            type="file"
            accept="image/*"
            class="hidden"
            @change="(e) => onFileChange(e, handleChange)"
          />
        </label>

        <!-- Cropper -->
        <div
          v-if="imageSrc && !croppedData"
          class="relative w-full overflow-hidden rounded-lg border border-gray-200"
        >
          <img
            ref="cropperImage"
            :src="imageSrc"
            alt="Ảnh cắt"
            class="block w-full object-contain"
          />
        </div>

        <!-- Action buttons -->
        <div v-if="imageSrc && !croppedData" class="flex justify-end gap-2 pt-2 w-full">
          <x-form-button theme="primary" outline @click="clearImage">Huỷ</x-form-button>
          <x-form-button theme="primary" @click="cropImage(handleChange)">
            {{ labelConfirm }}
          </x-form-button>
        </div>

        <!-- Preview + Edit -->
        <div v-if="croppedData" class="flex flex-col items-start w-full gap-2">
          <img
            :src="croppedDataPreview"
            alt="Cropped Preview"
            class="w-full rounded-md border border-gray-200"
          />
          <div class="flex gap-2">
            <!-- <x-form-button @click="editImage(handleChange)">Chỉnh sửa</x-form-button> -->
            <x-form-button @click="clearImage">Chọn ảnh mới</x-form-button>
          </div>
        </div>

        <!-- Error -->
        <p v-if="errors.length" class="mt-1 text-sm text-red-500">
          {{ errors[0] }}
        </p>
      </div>
    </Field>
  </div>
</template>

<script setup>
  import { ref, nextTick, watch, computed, toRefs } from 'vue';
  import { Field } from 'vee-validate';
  import Cropper from 'cropperjs';
  import 'cropperjs/dist/cropper.css';
  import ImagePlusOutline from '~/public/assets/icon/he-thong/image-plus-outline.svg';

  const emit = defineEmits(['update:modelValue', 'change']);

  const props = defineProps({
    modelValue: [File, String, null],
    name: { type: String, required: true },
    label: String,
    rules: [String, Object, Function],
    required: Boolean,
    width: {
      type: Number,
      width: 900,
    },
    height: {
      type: Number,
      width: 600,
    },
    labelConfirm: {
      type: String,
      default: 'Chọn',
    },
  });

  const { width, height, labelConfirm } = toRefs(props);

  const isDragging = ref(false);
  const imageSrc = ref(null);
  const croppedData = ref(props.modelValue || null);
  const cropperImage = ref(null);
  let cropper = null;

  // computed để preview
  const croppedDataPreview = computed(() => {
    if (!croppedData.value) return null;
    return croppedData.value instanceof File
      ? URL.createObjectURL(croppedData.value)
      : croppedData.value;
  });

  watch(
    () => props.modelValue,
    (val) => (croppedData.value = val)
  );

  const onFileChange = (e, handleChange) => {
    const file = e.target.files[0];
    if (!file) return;
    loadFile(file);
  };

  const onDrop = (e, handleChange) => {
    isDragging.value = false;
    const file = e.dataTransfer.files[0];
    if (!file) return;
    loadFile(file);
  };

  const loadFile = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      imageSrc.value = event.target.result;
      nextTick(() => {
        cropper?.destroy();
        cropper = new Cropper(cropperImage.value, {
          aspectRatio: width.value / height.value,
          viewMode: 1,
          autoCropArea: 1,
        });
      });
    };
    reader.readAsDataURL(file);
  };

  const cropImage = (handleChange) => {
    if (!cropper) return;

    const targetWidth = 1920;
    const targetHeight = Math.round((height.value / width.value) * targetWidth);

    const canvas = cropper.getCroppedCanvas({
      width: targetWidth,
      height: targetHeight,
      imageSmoothingEnabled: true,
      imageSmoothingQuality: 'high',
    });

    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const fileName = `image-${props.name || Date.now()}.jpg`;
        const file = new File([blob], fileName, { type: 'image/jpeg' });

        croppedData.value = file;
        imageSrc.value = null;
        cropper?.destroy();
        cropper = null;

        emit('update:modelValue', file);
        emit('change', file);
        handleChange(file);
      },
      'image/jpeg',
      0.9
    );
  };

  const editImage = (handleChange) => {
    if (!croppedData.value) return;

    const file = croppedData.value instanceof File ? croppedData.value : null;
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      imageSrc.value = e.target.result;
      nextTick(() => {
        cropper?.destroy();
        cropper = new Cropper(cropperImage.value, {
          aspectRatio: width.value / height.value,
          viewMode: 1,
          autoCropArea: 1,
        });
      });
    };
    reader.readAsDataURL(file);

    // giữ croppedData cũ cho đến khi crop xong
    croppedData.value = null;
  };

  const clearImage = () => {
    cropper?.destroy();
    cropper = null;
    imageSrc.value = null;
    croppedData.value = null;
    emit('update:modelValue', null);
    emit('change', null);
  };
</script>
