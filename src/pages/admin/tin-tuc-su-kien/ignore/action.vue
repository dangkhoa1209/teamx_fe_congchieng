<template>
  <x-modal-action
    v-model:visible="isVisible"
    title="Tin tức - sự kiện"
    :loading="isLoading"
    @submit="handleSubmit"
  >
    <div class="flex gap-2">
      <div class="w-full flex flex-col gap-4">
        <x-form-select
          v-model="formData.location"
          :options="$newScope().list"
          label="Trực thuộc"
          name="location"
          :filterable="false"
          :clearable="false"
          placeholder="Tin tức - sự kiện trực thuộc cơ sở nào"
        />

        <x-form-select
          v-model="formData.status"
          :options="[
            { label: 'Hoạt động', value: 'active' },
            { label: 'Dừng hoạt động', value: 'unactive' },
          ]"
          label="Trạng thái"
          name="status"
          :filterable="false"
          :clearable="false"
          placeholder="Chọn trạng thái"
        />

        <x-form-input
          v-model="formData.author"
          label="Tác giả"
          name="author"
          placeholder="Tên tác giả"
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

        <draggable
          v-model="formData.contents"
          handle=".drag-handle"
          item-key="id"
          class="space-y-4"
        >
          <template #item="{ element: item, index }">
            <div class="border rounded-lg p-3 relative bg-white shadow-sm flex flex-col gap-2">
              <!-- Drag handle & Delete button -->
              <div class="flex justify-end gap-2 top-2 right-2">
                <span class="drag-handle cursor-move">
                  <Icon name="heroicons-solid:bars-4" class="text-black w-5 h-5 opacity-70" />
                </span>
                <span class="drag-handle cursor-move">
                  <Icon
                    name="heroicons-solid:x-mark"
                    class="text-primary w-5 h-5"
                    @click="removeItem(index)"
                  />
                </span>
              </div>

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

              <div v-if="item.type === 'image'" class="rounded-2xl border px-4 py-2 border-primary">
                <div v-if="item.url">
                  <p>Hình ảnh</p>
                  <x-image :url="`${config.apiURLFile}${item.url}`" />
                  <div class="flex gap-2 pt-2">
                    <x-form-button @click="clearImage(index)">Chọn ảnh mới</x-form-button>
                  </div>
                  <x-form-input
                    v-model="item.imageTitle"
                    label="Tiêu đề cho ảnh"
                    name="titleforimage"
                    placeholder="Nhập tiêu đề ảnh"
                    :name="'title-image-' + item.id"
                    class="pt-2"
                  />
                </div>
                <div v-else>
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
            </div>
          </template>
        </draggable>
      </div>

      <div class="border border-1 p-2 box-border flex flex-col gap-4 w-[200px]">
        <p>Thêm vào bài viết</p>
        <x-form-button
          class="w-full"
          theme="primary"
          icon="heroicons-outline:bars-3"
          @click="addContent"
        >
          Nội dung
        </x-form-button>
        <x-form-button
          class="w-full"
          theme="primary"
          icon="heroicons-outline:photo"
          outline
          @click="addImage"
        >
          Hình ảnh
        </x-form-button>
      </div>
    </div>
  </x-modal-action>
</template>

<script setup>
  import draggable from 'vuedraggable';
  import $lodash from '../../../../composables/$lodash';
  import { v4 as uuidv4 } from 'uuid';
  const config = useRuntimeConfig().public;

  const emits = defineEmits(['refresh']);
  const isVisible = ref(false);
  const isLoading = ref(false);

  const init = {
    location: '',
    author: '',
    title: '',
    subtitle: '',
    status: 'active',
    contents: [],
  };

  const formData = ref($lodash.cloneDeep(init));

  const addContent = () => {
    formData.value.contents.push({
      id: uuidv4(),
      type: 'content',
      data: '',
    });
  };

  const addImage = () => {
    formData.value.contents.push({
      id: uuidv4(),
      type: 'image',
      image: null,
      imageTitle: '',
    });
  };

  const removeItem = (index) => {
    formData.value.contents.splice(index, 1);
  };

  const open = (news) => {
    if (news) {
      formData.value = $lodash.cloneDeep(news);
    } else {
      formData.value = $lodash.cloneDeep(init);
    }
    isVisible.value = true;
  };

  const close = () => {
    isVisible.value = false;
  };

  const reset = () => {
    formData.value = $lodash.cloneDeep(init);
  };

  const buildFormData = async (data) => {
    const fd = new FormData();

    fd.append('title', data.title);
    fd.append('subtitle', data.subtitle);
    fd.append('status', data.status);
    fd.append('location', data.location);
    fd.append('author', data.author);

    fd.append(
      'contents',
      JSON.stringify(
        data.contents.map((c) => {
          const copy = { ...c };
          if (c.type === 'image') delete copy.image;
          return copy;
        })
      )
    );

    for (const item of data.contents) {
      if (item.type === 'image' && item.image) {
        let file = item.image;
        let fileName = `image-${item.id}`;

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

        fd.append(`image_${item.id}`, file, fileName);
      }
    }

    return fd;
  };

  const clearImage = (index) => {
    formData.value.contents[index] = {
      image: '',
      type: 'image',
      imageTitle: formData.value.contents[index].imageTitle,
      id: formData.value.contents[index].id,
    };
  };

  // Submit
  const handleSubmit = async () => {
    isLoading.value = true;
    try {
      if (!formData.value._id) {
        const fd = await buildFormData(formData.value);
        const response = await $api($url.admin.news.create, { body: fd });
        const { data, success } = response?.data?.value || {
          data: null,
          success: false,
        };
        if (success) {
          $toast().success('Thêm tin tức - sự kiện thành công.');
          reset();
          emits('refresh');
          close();
        }
      } else {
        const fd = await buildFormData(formData.value);
        const response = await $api($url.admin.news.update, {
          body: fd,
          uriParams: {
            ':id': formData.value._id,
          },
        });
        const { data, success } = response?.data?.value || {
          data: null,
          success: false,
        };
        if (success) {
          $toast().success('Cập nhật tin tức - sự kiện thành công.');
          reset();
          emits('refresh');
          close();
        }
      }
    } catch (error) {
      console.error('Failed to create news', error);
    } finally {
      isLoading.value = false;
    }
  };

  defineExpose({ open });
</script>
