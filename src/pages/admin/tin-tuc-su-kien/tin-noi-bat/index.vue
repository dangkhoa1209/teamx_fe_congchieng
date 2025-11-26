<template>
  <x-content-place>
    <x-space :height="40" />
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Tin nổi bật trang chủ</h1>
    </div>

    <!-- 4 ô cố292 định -->
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

          <!-- Trống -->
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
      :loading="pickerLoading"
      width="900px"
      @close="pickerVisible = false"
      @submit="handleSave"
    >
      <div class="w-full">
        <inpit-filter v-model="filter.search" class="w-full h-11" placeholder="Nhập từ khoá" />
      </div>
      newsIdSelected: {{ newsIdSelected }} positionSelected: {{ positionSelected }}
      <div class="grid grid-cols-1 laptop:grid-cols-3 gap-x-[40px] gap-y-[50px] mt-[40px]">
        <div
          v-for="item in lists.data"
          :key="item._id"
          class="cursor-pointer"
          :class="{
            'news-item-active': newsIdSelected === item._id,
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
  import InpitFilter from '../ignore/input-fliter.vue';

  const filter = ref({
    search: '',
    location: '',
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
      $toast().error('Vui lòng chọn tin tức - sự kiện');
    }

    const response = await $api($url.admin.featuredNews.update, {
      body: {
        type: 'tin-tuc-su-kien',
        position: positionSelected.value,
        newsId: newsIdSelected.value,
      },
    });
    const { data, success } = response?.data?.value || {
      data: null,
      success: false,
    };
    if (success) {
      $toast().success('Cập nhật tin nổi bật thành công');
      reset();
      close();
      fetchFeatured();
    }
  };

  const fetchFeatured = async () => {
    console.log('sdfasdfsdfsdf');

    try {
      const response = await $api($url.admin.featuredNews.get, {
        body: {
          type: 'tin-tuc-su-kien',
        },
      });

      const { data, success } = response?.data?.value || {
        data: null,
        success: false,
      };

      if (success) {
        console.log('data', data);

        featuredSlots.value = Array.from({ length: 4 }, (_, i) => {
          const pos = i + 1;
          const existed = data.find((x) => x.position === pos);
          console.log('existed', existed);

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
      console.log('err', err);

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

  onMounted(() => {
    fetchFeatured();
  });

  ///

  // luôn 4 phần tử
  const pickerVisible = ref(false);
  const pickerLoading = ref(false);
  const pickerPosition = ref(1);
  const tempSelectedId = ref('');

  // Mở modal chọn bài
  const openPicker = (position) => {
    pickerPosition.value = position;
    const current = featuredSlots.value.find((s) => s.position === position);
    tempSelectedId.value = current?.news?._id || '';
    pickerVisible.value = true;
  };

  // Chọn bài nhanh từ gợi ý
  const selectQuick = (news) => {
    tempSelectedId.value = news._id;
    handleSubmit();
  };

  // Submit chọn bài
  const handleSubmit = async () => {
    pickerLoading.value = true;
    try {
      await $api($url.admin.featured.update, {
        method: 'PUT',
        body: {
          type: 'homepage',
          position: pickerPosition.value,
          newsId: tempSelectedId.value || null,
        },
      });
      $toast().success('Cập nhật tin nổi bật thành công!');
      await fetchFeatured();
      pickerVisible.value = false;
    } catch (err) {
      $toast().error('Có lỗi xảy ra');
    } finally {
      pickerLoading.value = false;
    }
  };

  // Xóa nhanh
  const removeFeatured = async (position) => {
    if (!confirm('Bỏ ghim bài này khỏi vị trí nổi bật?')) return;
    await $api($url.admin.featured.update, {
      method: 'PUT',
      body: { type: 'homepage', position, newsId: null },
    });
    await fetchFeatured();
  };

  // Kéo thả sắp xếp
  const dragStart = (e, fromPos) => {
    e.dataTransfer.setData('fromPos', fromPos);
  };
  const drop = async (e, toPos) => {
    e.preventDefault();
    const fromPos = e.dataTransfer.getData('fromPos');
    if (!fromPos || fromPos === toPos) return;

    await $api($url.admin.featured.reorder, {
      method: 'PATCH',
      body: { type: 'homepage', from: Number(fromPos), to: Number(toPos) },
    });
    await fetchFeatured();
  };

  // Tìm bài viết (dùng chung với x-form-auto-complete)
  const searchNews = async (keyword = '') => {
    const res = await $api($url.news.find, {
      body: {
        filter: { search: keyword, status: 'active' },
        page: 1,
        perPage: keyword ? 50 : 20,
        sort: '-createdAt',
      },
    });
    return res?.data?.value?.data?.data || [];
  };

  // Gợi ý nhanh (20 bài mới nhất)
  const quickSuggestions = ref([]);
  const loadQuick = async () => {
    quickSuggestions.value = await searchNews('');
  };
  watch(pickerVisible, (v) => v && loadQuick());
</script>
