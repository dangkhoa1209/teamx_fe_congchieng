<!-- tin tức thumbnail content ngang -->
<!-- x-page-news-thumb-hor :exclude="['subTitle']" -->

<template>
  <div class="flex gap-4">
    <div class="w-[40%] min-w-[40%]">
      <x-image :url="$image().url" />
    </div>
    <div class="w-[60%] flex flex-col gap-[25px]">
      <p
        v-if="!exclude.includes('title')"
        class="font-robo font-medium text-subtitle text-primary text-justify"
      >
        {{ news.title || 'Giữ gìn bản sắc văn hoá qua du lịch cồng chiêng ở Lâm Đồng' }}
      </p>
      <p v-if="!exclude.includes('subTitle')" class="font-robo font-normal text-body text-justify">
        {{
          news.subTitle ||
          'Xây dựng điểm check-in văn hoá như cổng làng truyền thống, tượng nghệ nhân, vườn nhạc cụ. Kết hợp nghệ thuật trình diễn ánh sáng & âm thanh Cồng chiêng cho du lịch đêm'
        }}
      </p>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
    news: {
      type: Object,
      default: '',
    },
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
</script>
