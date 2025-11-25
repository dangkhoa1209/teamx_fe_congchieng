<template>
  <!-- THÊM DIV BỌC + PB ĐỂ CHỪA CHỖ CHO CHẤM TRÒN -->
  <div class="w-full pb-12 laptop:pb-16">
    <Swiper
      :modules="[Autoplay, Pagination]"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :autoplay="{ delay: 10000, disableOnInteraction: false }"
      :pagination="{ clickable: true, dynamicBullets: true, dynamicMainBullets: 6 }"
      :breakpoints="swiperBreakpoints"
      class="society-slide"
    >
      <SwiperSlide v-for="(item, index) in items" :key="index">
        <slot :item="item" :index="index" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, Pagination } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/pagination';

  const props = defineProps({
    items: { type: Array, required: true },
    breakpoints: {
      type: Object,
      default: () => ({
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
        1280: { slidesPerView: 3 },
      }),
    },
  });

  const swiperBreakpoints = props.breakpoints;
</script>

<style scoped>
  /* Giữ nguyên 2 dòng này của bạn */
  :deep(.swiper-slide) {
    height: auto !important;
  }
  :deep(.swiper-slide > div) {
    height: 100%;
  }

  /* ──────── CHỈ THAY TỪ ĐÂY TRỞ XUỐI ──────── */
  .society-slide {
    overflow-y: visible !important; /* QUAN TRỌNG NHẤT – cho phép chấm tròn tràn ra ngoài */
    padding-bottom: 50px !important; /* Tự động chừa chỗ (tốt hơn pb thủ công ở div cha) */
  }

  .society-slide :deep(.swiper-pagination-bullet) {
    background: #4c2014;
  }
  /* Mobile nhỏ hơn chút – giữ nguyên ý bạn */
  @media (max-width: 640px) {
    .society-slide :deep(.swiper-pagination-bullet) {
      width: 9px;
      height: 9px;
    }
    .society-slide :deep(.swiper-pagination-bullet-active) {
      transform: scale(1.5);
    }
  }
</style>
