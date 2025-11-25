<template>
  <div class="user-select-none">
    <!-- Banner -->
    <!-- TODO: gán x-content-place -->
    <div class="max-w-[1440px] mx-auto">
      <section class="relative">
        <!-- Ảnh -->
        <x-image :url="$image().url" :height="600" class="w-full h-full object-cover" :radius="0" />

        <!-- Nội dung overlay giữa ảnh -->
        <main
          class="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-main text-center gap-1"
        >
          <h1 class="font-robo font-bold text-hero">ÂM THANH CỒNG CHIÊNG</h1>

          <h2 class="font-robo font-bold text-hero">HƠI THỞ VĂN HOÁ TÂY NGUYÊN</h2>

          <x-button class="mt-5">KHÁM PHÁ NGAY</x-button>
        </main>
      </section>
    </div>

    <x-space />
    <!-- BẢO TỒN VÀ LAN TỎA  -->
    <section class="">
      <x-content-place>
        <div class="flex gap-[50px]">
          <div class="flex flex-col justify-between">
            <div>
              <h3 class="font-robo font-medium text-subtitle text-primary">BẢO TỒN VÀ LAN TỎA</h3>
              <x-space :height="10" />
              <h2 class="font-robo font-bold text-title text-primary">
                VĂN HOÁ CỒNG CHIÊNG TÂY NGUYÊN
              </h2>
              <x-space :height="30" />
              <p class="font-robo font-normal text-body text-justify">
                Chuyên trang thông tin điện tử “Văn hoá Cồng Chiêng Lâm Đồng” được xây dựng theo kế
                hoạch của Sở Văn hoá, Thể thao và Du lịch tỉnh Lâm Đồng năm 2025, nhằm mục tiêu giới
                thiệu, quảng bá và bảo tồn giá trị văn hoá truyền thống của các dân tộc thiểu số gắn
                liền với phát triển du lịch cộng đồng bền vững.
              </p>
              <x-space :height="20" />
              <p class="font-robo font-normal text-body text-justify">
                Trang thông tin đóng vai trò là cầu nối giữa văn hoá – công nghệ – du lịch, giúp
                người dân, du khách và doanh nghiệp cùng tiếp cận, tìm hiểu, trải nghiệm và chung
                tay gìn giữ di sản văn hoá phi vật thể đặc trưng của Tây Nguyên – Không gian văn hoá
                Cồng Chiêng.
              </p>
            </div>
            <div class="my-[40px] block laptop:hidden">
              <x-image :url="$image().url" :height="650" />
            </div>
            <div class="flex">
              <x-button :uppercase="false" theme="primary">Tìm hiểu thêm</x-button>
            </div>
          </div>
          <div class="min-w-[47%] hidden laptop:block">
            <x-image :url="$image().url" :height="650" />
          </div>
        </div>
      </x-content-place>
    </section>

    <x-space />

    <!-- TIỀM NĂNG PHÁT TRIỂN -->
    <section class="">
      <x-content-place>
        <x-title
          class-name="font-robo font-bold text-title"
          title="TIỀM NĂNG PHÁT TRIỂN"
          variant="bottom"
        />
        <x-space :height="50" />
        <div class="flex gap-[40px] flex-col laptop:flex-row">
          <x-page-news-thumb-ver />
          <x-page-news-thumb-ver />
          <x-page-news-thumb-ver />
        </div>
      </x-content-place>
    </section>

    <x-space />
    <section class="">
      <x-content-place>
        <x-title
          class-name="font-robo font-bold text-title"
          title="TIN TỨC - SỰ KIỆN"
          variant="bottom"
        />
        <x-space :height="50" />
        <x-page-news />
      </x-content-place>
    </section>

    <x-space />
    <section>
      <x-content-place>
        <x-title
          class-name="font-robo font-bold text-title"
          title="VĂN HÓA CỒNG CHIÊNG TẠI CÁC XÃ"
          variant="bottom"
        />
        <x-space :height="50" />

        <SlideXa />
      </x-content-place>
    </section>

    <x-space :height="85" />
    <section>
      <x-content-place>
        <x-line class-name="my-0" />
        <x-space :height="35" />
        <h2 class="font-robo font-bold text-title text-primary text-center">ĐƠN VỊ HỢP TÁC</h2>
        <x-space :height="65" />
        <!-- <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <x-image :url="$image().url" />
          <x-image :url="$image().url" />
          <x-image :url="$image().url" />
          <x-image :url="$image().url" />
          <x-image :url="$image().url" />
          <x-image :url="$image().url" />
        </div> -->
        <SlideDonViHopTac />
      </x-content-place>
    </section>
    <x-space />
  </div>
</template>

<script setup>
  import SlideXa from './ignore/xa.vue';
  import SlideDonViHopTac from './ignore/don-vi-hop-tac.vue';
  useHead({
    title: 'Trang chủ',
    // meta: [{ name: 'description', content: 'Website của Khoa - ví dụ SEO tốt hơn' }],
  });
</script>
