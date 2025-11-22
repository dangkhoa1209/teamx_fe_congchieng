<!-- tin tức thumbnail content dọc -->
 <!-- x-page-news-thumb-ver -->
<template>
   <div>
      <x-image :url="$image().url"></x-image>
      <div class="py-5 flex flex-col gap-5">
        <p class="font-robo font-medium text-subtitle text-primary">
          PHÁT TRIỂN VĂN HÓA - NGHỆ THUẬT
        </p>
        <p class="font-robo font-normal text-body text-justify">
          Xây dựng điểm check-in văn hoá như cổng làng truyền thống, tượng nghệ nhân, vườn nhạc cụ. Kết hợp nghệ thuật trình diễn ánh sáng & âm thanh Cồng chiêng cho du lịch đêm
        </p>
      </div>
    </div>
</template>
<script setup>
const props = defineProps({
  news: Object,
  exclude: {
    type: Array,
    default: []
  },
  imageClass: {
    type: String,
    default: ''
  },
  contentClass: {
    type: String,
    default: ''
  },
  titleClass: {
    type: String,
    default: ''
  },
  subTitleClas: {
    type: String,
    default: ''
  }
})
</script>