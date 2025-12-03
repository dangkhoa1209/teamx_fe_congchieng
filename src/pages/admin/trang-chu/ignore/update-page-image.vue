<template>
  <x-content-place>
    <x-space :height="40" />
    <div class="mb-8">
      <h1 class="text-subtitle font-bold text-primary">{{ title }}</h1>
      <x-space :height="40" />
      <div class="laptop:w-1/2">
        <div v-if="item.url">
          <p>Hình ảnh</p>
          <x-image :url="`${config.apiURLFile}${item.url}`" :height="height" :width="width" />
          <div class="flex gap-2 pt-2">
            <x-form-button @click="clearImage()">Chọn ảnh mới</x-form-button>
          </div>
        </div>
        <div v-else>
          <x-form-image-picker
            v-model="item.image"
            :name="'content-' + item.id"
            label="Hình ảnh"
            rules="required"
            required
            :height="height"
            :width="width"
            labelConfirm="Lưu ảnh"
            @change="handleSave"
          />
        </div>
      </div>
    </div>
  </x-content-place>
</template>
<script setup>
  import { v4 as uuidv4 } from 'uuid';
  import { onMounted } from 'vue';
  const config = useRuntimeConfig().public;
  const item = ref({
    id: uuidv4(),
    image: null,
  });

  const props = defineProps({
    title: { type: String },
    type: { type: String },
    width: {
      type: Number,
      width: 900,
    },
    height: {
      type: Number,
      width: 600,
    },
  });

  const clearImage = () => {
    item.value = {
      id: uuidv4(),
      image: null,
    };
  };

  const handleSave = async () => {
    const fd = new FormData();
    fd.append('type', props.type);

    let file = item.value.image;
    let fileName = `iimage-page`;

    if (file instanceof File) {
      fileName = file.name;
    } else if (typeof file === 'string' && file.startsWith('blob:')) {
      const res = await fetch(file);
      const arrayBuffer = await res.arrayBuffer();
      const contentType = res.headers.get('Content-Type') || 'image/jpeg';

      let ext = contentType.split('/')[1] || 'jpeg';
      ext = ext.includes('jpeg') ? 'jpg' : ext;
      fileName = `${fileName}.${ext}`;

      file = new File([arrayBuffer], fileName, { type: contentType });
    }

    fd.append(`image`, file, fileName);

    const response = await $api($url.admin.image_page.update, { body: fd });

    const { data, success } = response?.data?.value || {
      data: null,
      success: false,
    };
    if (success) {
      process.client && $toast().success('Cập nhật ảnh thành công');
      loadData();
    }
  };

  const loadData = $lodash.debounce(async () => {
    const response = await $api($url.admin.image_page.get, { body: { type: props.type } });
    const { data, success } = response?.data?.value || {
      data: null,
      success: false,
    };

    if (success) {
      item.value.url = data.url;
    }
  }, 300);

  onMounted(() => {
    loadData();
  });
</script>
