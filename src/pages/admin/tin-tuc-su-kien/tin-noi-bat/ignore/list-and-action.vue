<template>
  <x-content-place>
    <x-space :height="40" />
    <div class="mb-8">
      <h1 class="text-subtitle font-bold text-primary">{{ title }}</h1>
    </div>

    <div class="grid grid-cols-1 laptop:grid-cols-2 gap-[40px]">
      <div v-for="slot in featuredSlots" :key="slot.position" class="relative group">
        <!-- Card -->
        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all cursor-pointer"
          :class="[
            slot.news
              ? 'border-transparent hover:border-primary'
              : 'border-dashed border-gray-300 hover:border-primary',
          ]"
          @click="openUpdate(slot.position)"
        >
          <div v-if="slot.news" class="p-[25px]">
            <p class="text-lg font-medium mb-5">Vị trí {{ slot.position }}</p>
            <x-page-news-thumb-ver :news="slot.news" />
          </div>

          <div v-else class="h-64 flex flex-col items-center justify-center text-gray-400">
            <i class="fas fa-plus text-5xl mb-4 opacity-30" />
            <p class="text-lg font-medium">Vị trí {{ slot.position }}</p>
            <p class="text-sm mt-1">Click để chọn bài</p>
          </div>
        </div>
      </div>
    </div>

    <x-space :height="80" />

    <!-- Modal chọn bài -->
    <x-modal-action
      v-model:visible="openModal"
      title="Chọn bài viết nổi bật"
      width="900px"
      @close="openModal = false"
      @submit="handleSave"
    >
      <div class="w-full">
        <inpit-filter v-model="filter.search" class="w-full h-11" placeholder="Nhập từ khoá" />
      </div>
      <div class="grid grid-cols-1 laptop:grid-cols-3 gap-x-[40px] gap-y-[50px] mt-[40px]">
        <div
          v-for="item in lists.data"
          :key="item._id"
          class="cursor-pointer"
          :class="{
            'news-item-active bg-slate-200 rounded-xl p-2': newsIdSelected === item._id,
          }"
          @click="newsIdSelected = item._id"
        >
          <x-page-news-thumb-ver :news="item" />
        </div>
      </div>
    </x-modal-action>
  </x-content-place>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: 'Tin nổi bật',
    },
    type: {
      type: String,
      default: 'tin-tuc-su-kien',
    },
  });
  import { nextTick } from 'vue';
  import InpitFilter from '../../ignore/input-fliter.vue';

  import { useToast } from 'vue-toastification';
  const toast = useToast();
  const filter = ref({
    search: '',
    location: props.type == 'tin-tuc-su-kien' ? '' : props.type,
    time: '',
  });

  const lists = ref({
    data: [],
    page: 1,
    perPage: 24,
    total: 0,
  });

  const newsIdSelected = ref('');
  const positionSelected = ref(1);
  const openModal = ref(false);
  const featuredSlots = ref([]);

  const load = $lodash.debounce(async () => {
    await nextTick();
    const response = await $api($url.news.find, {
      body: {
        filter: filter.value,
        page: lists.value.page,
        perPage: lists.value.perPage,
      },
    });

    const { data, success } = response?.data?.value || {
      data: null,
      success: false,
    };

    if (success) {
      data.data.map((item) => {
        item.slugify = null;
        return item;
      });
      lists.value = data;
    }
  }, 300);

  const openUpdate = (val) => {
    positionSelected.value = val;
    newsIdSelected.value = '';
    openModal.value = true;
  };

  const handleSave = async () => {
    if (!newsIdSelected.value) {
      toast.error('Vui lòng chọn tin tức - sự kiện');
    }

    const response = await $api($url.admin.featuredNews.update, {
      body: {
        type: props.type,
        position: positionSelected.value,
        newsId: newsIdSelected.value,
      },
    });

    console.log('response?.data?.value', response?.data?.value);

    const { data, success } = response?.data?.value || {
      data: null,
      success: false,
    };

    console.log('success', success);

    if (success) {
      toast.success('Cập nhật tin nổi bật thành công');
      reset();
      close();
      fetchFeatured();
    }
  };

  const fetchFeatured = async () => {
    try {
      await nextTick();
      const response = await $api($url.admin.featuredNews.get, {
        body: {
          type: props.type,
        },
      });

      const { data, success } = response?.data?.value || {
        data: null,
        success: false,
      };

      if (success) {
        featuredSlots.value = Array.from({ length: 4 }, (_, i) => {
          const pos = i + 1;
          const existed = data.find((x) => x.position === pos);
          if (existed) {
            delete existed.news.slugify;
          }

          return existed
            ? {
                position: pos,
                news: existed.news || existed.backup || null,
              }
            : {
                position: pos,
                news: null,
              };
        });
      }
    } catch (err) {
      featuredSlots.value = Array.from({ length: 4 }, (_, i) => ({ position: i + 1, news: null }));
    }
  };

  const close = () => {
    openModal.value = false;
  };

  const reset = () => {
    positionSelected.value = 1;
    newsIdSelected.value = '';
  };

  watch(
    () => filter.value,
    () => {
      lists.value.page = 1;
      load();
    },
    { deep: true, immediate: true }
  );

  onMounted(async () => {
    await fetchFeatured();
  });
</script>
