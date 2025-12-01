<template>
  <x-content-place class="font-robo">
    <!-- ===== BREADCRUMB TITLE ===== -->
    <x-space :height="40" />

    <x-title variant="bottom">
      <div class="flex flex-wrap items-center gap-2 font-bold text-body text-primary leading-[1]">
        <span class="whitespace-normal">VĂN HOÁ CỒNG CHIÊNG</span>

        <Icon name="heroicons:chevron-double-right" class="w-4 h-4" />

        <span class="whitespace-normal">Văn hóa cồng chiêng tại các xã</span>

        <Icon name="heroicons:chevron-double-right" class="w-4 h-4" />

        <span class="whitespace-normal">Xã Đạ Tẻh</span>
      </div>
    </x-title>

    <x-space :height="50" />

    <!-- ===== CONTENT BODY ===== -->
    <section class="flex flex-col gap-[25px] text-justify leading-relaxed text-body">
      <h2 class="font-bold text-primary text-subtitle">VĂN HÓA CỒNG CHIÊNG TẠI XÃ ĐẠ TẺH</h2>

      <p>
        Với đồng bào người Mạ và người K’Ho tại xã Đạ Tẻh, tiếng chiêng là ngôn ngữ thiêng liêng của
        Yàng (thần linh), là sợi dây kết nối giữa con người với vũ trụ. Cồng chiêng nơi đây không
        chỉ là âm nhạc mà là lễ vật tinh thần, gắn liền với mọi nghi lễ nông nghiệp và vòng đời con
        người. Trong Lễ hội mừng lúa mới, Ngày hội Văn hóa - Thể thao các dân tộc thiểu số xã Đạ
        Tẻh, tiếng chiêng vang lên cùng hàng trăm nghệ nhân múa xoang quanh ngọn lửa, tạo nên bức
        tranh văn hóa rực rỡ, chan hòa sức sống. Mỗi nhịp chiêng là một lời cầu mùa, mỗi điệu xoang
        là một nhịp đập của đất trời.
      </p>

      <p>
        Chính quyền địa phương đã triển khai chương trình bảo tồn gắn với truyền dạy, hình thành
        nhiều Câu lạc bộ cồng chiêng tại các thôn buôn, đồng thời mở lớp cho thanh niên (15 – 30
        tuổi) học diễn chiêng, múa xoang, và hiểu biết về nghi lễ. Nhờ đó, thế hệ trẻ người Mạ, K’Ho
        không chỉ biết “nghe chiêng”, mà còn biết “thổi hồn vào chiêng”, tiếp nối mạch sống của di
        sản.
      </p>

      <p>
        Ngày nay, xã Đạ Tẻh đang hướng tới phát triển du lịch văn hóa cộng đồng, lấy cồng chiêng làm
        điểm nhấn, kết hợp với không gian nông nghiệp - sinh thái, tạo nên một mô hình “du lịch từ
        di sản” bền vững và đặc sắc.
      </p>
    </section>

    <x-space :height="50" />

    <!-- ===== NEWS SECTION ===== -->
    <section>
      <x-title
        title="TIN TỨC - SỰ KIỆN XÃ ĐẠ TẺH"
        variant="left"
        class-name="font-bold text-body"
      />

      <x-space :height="40" />

      <x-page-news type="xa-da-teh" />
    </section>

    <x-space :height="40" />

    <x-line />

    <x-space :height="40" />

    <!-- ===== GRID MORE NEWS ===== -->
    <x-core-ttk :limit="18" type="xa-da-teh">
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
