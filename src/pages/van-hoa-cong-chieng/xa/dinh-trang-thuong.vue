<template>
  <x-content-place class="font-robo">
    <!-- ===== BREADCRUMB TITLE ===== -->
    <x-space :height="40" />

    <x-title variant="bottom">
      <div class="flex flex-wrap items-center gap-2 font-bold text-14 text-primary m-0 leading-[1]">
        <span class="whitespace-normal">VĂN HOÁ CỒNG CHIÊNG</span>

        <Icon name="heroicons:chevron-double-right" class="w-[0.9em] h-[0.9em]" />

        <span class="whitespace-normal">Văn hóa cồng chiêng tại các xã</span>

        <Icon name="heroicons:chevron-double-right" class="w-[0.9em] h-[0.9em]" />

        <span class="whitespace-normal">Xã Đinh Trang Thượng</span>
      </div>
    </x-title>

    <x-space :height="50" />

    <!-- ===== CONTENT BODY ===== -->
    <section class="flex flex-col gap-[25px] text-justify leading-relaxed text-body">
      <h2 class="font-bold text-primary text-subtitle">
        VĂN HÓA CỒNG CHIÊNG TẠI XÃ ĐINH TRANG THƯỢNG
      </h2>

      <p>
        Nằm ở cửa ngõ phía Đông Nam của vùng Di Linh, xã Đinh Trang Thượng là nơi hội tụ nhiều cộng
        đồng dân tộc cùng sinh sống, trong đó người K’Ho và Mạ giữ vai trò quan trọng trong việc gìn
        giữ những giá trị văn hóa nguyên sơ của đại ngàn. Giữa nhịp sống ngày càng hiện đại, âm
        thanh cồng chiêng tại Đinh Trang Thượng vẫn vang lên đầy tự hào như tiếng gọi của núi rừng,
        như nhịp đập gắn kết cộng đồng qua bao thế hệ.
      </p>

      <p>
        Từ những ngày đầu lập buôn, tiếng cồng chiêng đã hiện diện trong mọi sinh hoạt tinh thần của
        cư dân nơi đây: lễ mừng lúa mới, lễ cúng Yàng, lễ đâm trâu,... Mỗi bộ chiêng được xem như
        vật linh thiêng, gắn liền với niềm tin về thần linh bảo hộ, mùa màng no đủ và sự trường tồn
        của cộng đồng.
      </p>

      <p>
        Ngày nay, xã Đinh Trang Thượng vẫn duy trì nhiều đội cồng chiêng của người K’Ho và các câu
        lạc bộ sinh hoạt văn hóa truyền thống, quy tụ cả nghệ nhân lớn tuổi lẫn lớp trẻ kế cận.
        Những nghệ nhân am hiểu nhạc chiêng trở thành “người giữ hồn làng”, kiên trì truyền dạy cách
        đánh chiêng, múa xoang và hiểu về ý nghĩa nghi lễ đằng sau mỗi âm hình.
      </p>

      <p>
        Song song đó, xã đang tích cực tham gia vào các hoạt động bảo tồn và phát huy di sản gắn với
        phát triển du lịch cộng đồng. Những đêm diễn cồng chiêng theo nghi thức truyền thống, không
        gian buôn làng nguyên bản được mở cửa đón du khách… đã trở thành điểm nhấn văn hóa đặc sắc.
      </p>

      <p>
        Cồng chiêng xã Đinh Trang Thượng vì thế không chỉ là âm vang quá khứ mà còn là nguồn lực văn
        hóa – du lịch quan trọng, góp phần làm phong phú bản đồ di sản của tỉnh Lâm Đồng.
      </p>
    </section>

    <x-space :height="50" />

    <!-- ===== NEWS SECTION ===== -->
    <section>
      <x-title
        title="TIN TỨC - SỰ KIỆN XÃ ĐINH TRANG THƯỢNG"
        variant="left"
        class-name="font-bold text-body"
      />

      <x-space :height="40" />

      <x-page-news type="xa-dinh-trang-thuong" />
    </section>

    <x-space :height="40" />

    <x-line />

    <x-space :height="40" />

    <x-core-ttk :limit="18" type="xa-dinh-trang-thuong">
      <template #default="{ items, loadMore, hasMore }">
        <div class="grid grid-cols-2 laptop:grid-cols-3 gap-x-[40px] gap-y-[50px]">
          <x-page-news-thumb-ver v-for="(item, index) in items" :key="index" :news="item" />
        </div>

        <div v-if="hasMore">
          <x-space :height="50" />
          <div class="flex justify-center">
            <x-button theme="primary" outline :uppercase="false" @click="loadMore">
              Xem thêm
            </x-button>
          </div>
        </div>
      </template>
    </x-core-ttk>

    <x-space :height="80" />
  </x-content-place>
</template>
