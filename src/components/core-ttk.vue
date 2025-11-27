<template>
  <slot :items="news" :loadMore="loadMore" :hasMore="hasMore" />
</template>

<script setup>
  import { ref, onMounted, nextTick, defineExpose } from 'vue';

  const props = defineProps({
    type: { type: String, default: '' },
    exclude: { type: Array, default: () => [] },
    limit: { type: Number, default: 10 },
  });

  const news = ref([]);
  const newsLastId = ref('');
  const hasMore = ref(true);

  // Hàm fetch news
  const fetchNews = async () => {
    if (!hasMore.value) return [];

    try {
      await nextTick();
      const response = await $api($url.news.other, {
        body: {
          location: props.type,
          exclude: props.exclude || [],
          limit: props.limit,
          newsLastId: newsLastId.value,
        },
      });

      const { data, success } = response?.data?.value || {
        data: null,
        success: false,
      };

      if (success && data?.length > 0) {
        news.value.push(...data); // add thêm vào list
        newsLastId.value = data[data.length - 1]._id; // lấy _id cuối cùng
        if (data.length < props.limit) {
          hasMore.value = false; // hết bài
          emit('load-end');
        }
      } else {
        hasMore.value = false;
        emit('load-end');
      }
    } catch (err) {
      hasMore.value = false;
      emit('load-end');
    }
  };

  // Hàm load more public
  const loadMore = async () => {
    await fetchNews();
  };

  // Load lần đầu
  onMounted(async () => {
    await fetchNews();
  });

  // Expose function ra bên ngoài
  defineExpose({ loadMore });

  const emit = defineEmits(['load-end']);
</script>
