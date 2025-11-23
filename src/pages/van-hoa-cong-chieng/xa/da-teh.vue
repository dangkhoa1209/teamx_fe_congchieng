<template>
  <x-content-place class="font-robo">
    <x-space :height="40" />
    <h2 class="font-bold text-body text-primary">
      <div class="flex items-center gap-2">
        VĂN HOÁ CỒNG CHIÊNG
        <Icon name="heroicons:chevron-double-right" class="w-4 h-4" />
        Văn hóa cồng chiêng tại các xã
        <Icon name="heroicons:chevron-double-right" class="w-4 h-4" />
        Xã Đạ Tẻh
      </div>
    </h2>
    <x-space :height="40" />

    <section class="flex flex-col gap-5">
      <h2 class="font-bold text-body text-primary text-subtitle">
        VĂN HÓA CỒNG CHIÊNG TẠI XÃ ĐẠ TẺH
      </h2>
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
    <section>
      <h2 class="font-bold text-body text-primary text-subtitle">TIN TỨC - SỰ KIỆN XÃ ĐẠ TẺH</h2>
      <x-page-news />
    </section>

    <x-line />

    <section>
      <div class="grid grid-cols-3 gap-5">
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
      </div>

      <div class="flex justify-center">
        <x-button theme="primary" outline :uppercase="false">Xem thêm</x-button>
      </div>
    </section>
  </x-content-place>
</template>
