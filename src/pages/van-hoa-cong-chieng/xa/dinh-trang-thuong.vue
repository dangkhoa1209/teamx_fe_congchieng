<template>
  <x-content-place class="font-robo">
    <x-space :height="40"></x-space>
     <h2 class="font-bold text-body text-primary">
      <div class="flex items-center gap-2">
        VĂN HOÁ CỒNG CHIÊNG 
        <Icon name="heroicons:chevron-double-right" class="w-4 h-4" />
        Văn hóa cồng chiêng tại các xã 
        <Icon name="heroicons:chevron-double-right" class="w-4 h-4" />
        Xã Đinh Trang Thượng
      </div>
    </h2>
    <x-space :height="40"></x-space>

    <section class="flex flex-col gap-5">
      <h2 class="font-bold text-body text-primary text-subtitle">VĂN HÓA CỒNG CHIÊNG TẠI XÃ ĐINH TRANG THƯỢNG</h2>
      <p>
        Nằm ở cửa ngõ phía Đông Nam của vùng Di Linh, xã Đinh Trang Thượng là nơi hội tụ nhiều cộng đồng dân tộc cùng sinh sống, trong đó người K’Ho và Mạ giữ vai trò quan trọng trong việc gìn giữ những giá trị văn hóa nguyên sơ của đại ngàn. Giữa nhịp sống ngày càng hiện đại, âm thanh cồng chiêng tại Đinh Trang Thượng vẫn vang lên đầy tự hào như tiếng gọi của núi rừng, như nhịp đập gắn kết cộng đồng qua bao thế hệ.
      </p>
      <p>
        Từ những ngày đầu lập buôn, tiếng cồng chiêng đã hiện diện trong mọi sinh hoạt tinh thần của cư dân nơi đây: lễ mừng lúa mới, lễ cúng Yàng, lễ mừng lúa mới,... Mỗi bộ chiêng được xem như một vật linh thiêng, gắn liền với niềm tin về thần linh bảo hộ, mùa màng no đủ và sự trường tồn của cộng đồng. Không chỉ là nhạc cụ, cồng chiêng tại xã Đinh Trang Thượng còn là ký ức tập thể, là “tiếng nói” truyền tải câu chuyện về nguồn gốc, phong tục và mối quan hệ hài hòa giữa con người, thiên nhiên.
      </p>
      <p>
        Ngày nay, xã Đinh Trang Thượng vẫn duy trì nhiều đội cồng chiêng của người K’Ho và các câu lạc bộ sinh hoạt văn hóa truyền thống, quy tụ cả nghệ nhân lớn tuổi lẫn lớp trẻ kế cận. Những nghệ nhân am hiểu nhạc chiêng trở thành “người giữ hồn làng”, kiên trì truyền dạy cho con cháu cách đánh chiêng, múa xoang và hiểu về ý nghĩa nghi lễ đằng sau mỗi âm hình. Chính sự tiếp nối ấy đã góp phần giữ cho cồng chiêng nơi đây không chỉ tồn tại mà ngày càng giàu sức sống.
      </p>
      <p>
        Bên cạnh đó, xã Đinh Trang Thượng đang tích cực tham gia vào các hoạt động bảo tồn, phát huy di sản gắn với phát triển du lịch cộng đồng. Những đêm diễn cồng chiêng phục dựng theo đúng nghi thức truyền thống, những không gian buôn làng nguyên bản được mở cửa đón du khách, đã trở thành điểm nhấn văn hóa đặc sắc, mang đến trải nghiệm chân thật về đời sống tinh thần của người K’Ho. Đây cũng là hướng đi bền vững giúp cộng đồng vừa gìn giữ bản sắc, vừa tạo sinh kế mới từ chính vốn văn hóa của mình.
      </p>
      <p>
        Cồng chiêng xã Đinh Trang Thượng vì thế không chỉ là âm vang quá khứ, mà còn là nguồn lực văn hóa, du lịch quan trọng, góp phần làm phong phú bản đồ di sản của tỉnh Lâm Đồng. Mỗi nhịp chiêng vang lên là một lời khẳng định: Di sản này vẫn đang sống, đang lan tỏa, và đang viết tiếp câu chuyện mới trong thời kỳ hội nhập.
      </p>
    </section>
    <x-space :height="50"></x-space>
    <section>
      <h2 class="font-bold text-body text-primary text-subtitle">TIN TỨC - SỰ KIỆN XÃ ĐINH TRANG THƯỢNG</h2>
      <x-page-news></x-page-news>
    </section>

    <x-line></x-line>

     <section >
      <div class="grid grid-cols-3 gap-5">
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
      </div>

        <div class="flex justify-center">
       <x-button theme="primary" outline :uppercase="false">
          Xem thêm
        </x-button>
    </div>
    </section>
  </x-content-place>
</template>