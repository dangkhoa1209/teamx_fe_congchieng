<template>
  <div class="user-select-none">
    <!-- Banner -->
    <!-- TODO: gán x-content-place -->
    <div class="max-w-[1440px] mx-auto">
      <section class="relative">
        <!-- Ảnh -->
        <x-image
          url="/assets/page/trang-chu/1.jpg"
          :height="685"
          :width="1440"
          class="w-full h-full object-cover"
          :radius="0"
        />

        <div class="absolute inset-0 bg-primary/40" />

        <main
          class="absolute inset-0 flex flex-col items-center justify-center text-main text-center gap-1"
        >
          <h1 class="font-robo font-bold text-hero">ÂM THANH CỒNG CHIÊNG</h1>
          <h2 class="font-robo font-bold text-hero">HƠI THỞ VĂN HOÁ TÂY NGUYÊN</h2>
          <x-button class="mt-5" @click="clickTo('gioi-thieu')">KHÁM PHÁ NGAY</x-button>
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
                Từ thuở hồng hoang, khi con người biết khai thác kim loại từ lòng đất để tạo ra
                những tấm đồng đầu tiên - Tiếng chiêng đã ra đời, như tiếng gọi nguyên sơ của sự
                sống. Hàng ngàn năm trôi qua, cồng chiêng trở thành hơi thở của núi rừng, là linh
                hồn của con người nơi đại ngàn, đồng thời là biểu tượng của sức sống, niềm tin và
                khát vọng. Bên ánh lửa bập bùng giữa rừng sâu, con người đã tụ hội quanh tiếng
                chiêng để kể những câu chuyện của buôn làng. Nhờ tiếng chiêng, con người biết hướng
                về cội nguồn - nhớ đất, nhớ trời, nhớ tổ tiên và những điều thiêng liêng ẩn sâu
                trong tâm hồn. Tiếng chiêng cất lên từ sự sống và cũng mở ra một cuộc sống tràn đầy
                màu sắc và sinh khí...
              </p>
            </div>
            <div class="my-[40px] block laptop:hidden">
              <x-image url="/assets/page/trang-chu/2.jpg" :height="650" />
            </div>
            <div class="flex">
              <x-button
                :uppercase="false"
                theme="primary"
                @click="clickTo('van-hoa-cong-chieng/tong-quan')"
              >
                Tìm hiểu thêm
              </x-button>
            </div>
          </div>
          <div class="min-w-[47%] hidden laptop:block">
            <x-image url="/assets/page/trang-chu/2.jpg" :height="650" />
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
        <x-page-van-hoa-nghe-thuat />
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
  const router = useRouter();

  useHead({
    title: 'Trang chủ',
    // meta: [{ name: 'description', content: 'Website của Khoa - ví dụ SEO tốt hơn' }],
  });

  const clickTo = (slugify) => {
    if (!slugify) return;
    router.push({ path: `/${slugify}` });
  };
</script>
