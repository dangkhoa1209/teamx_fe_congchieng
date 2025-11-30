<!-- tin tức thumbnail content dọc -->
<!-- x-page-news-thumb-ver -->
<template>
  <div>
    <x-image :path="news?.thumbnail" :url="$image().url" :click-to="news?.slugify" />
    <div class="pt-[25px] flex flex-col gap-[25px]">
      <p
        class="font-robo font-medium text-subtitle text-primary hover:opacity-[79%] cursor-pointer"
        @click="handleClick"
      >
        {{ news?.title || 'PHÁT TRIỂN VĂN HÓA - NGHỆ THUẬT' }}
      </p>
      <p class="font-robo font-normal text-body text-justify">
        {{
          news?.subtitle ||
          'Xây dựng điểm check-in văn hoá như cổng làng truyền thống, tượng nghệ nhân, vườn nhạc cụ. Kết hợp nghệ thuật trình diễn ánh sáng & âm thanh Cồng chiêng cho du lịch đêm'
        }}
      </p>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
    news: Object,
    exclude: {
      type: Array,
      default: [],
    },
    imageClass: {
      type: String,
      default: '',
    },
    contentClass: {
      type: String,
      default: '',
    },
    titleClass: {
      type: String,
      default: '',
    },
    subTitleClas: {
      type: String,
      default: '',
    },
  });
  const router = useRouter();
  const handleClick = () => {
    if (props.news?.slugify) {
      router.push({ path: `/${props.news.slugify}` });
    }
  };
</script>
