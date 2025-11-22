<template>
  <x-content-place class="font-robo">
    <x-space :height="40"></x-space>
     <h2 class="font-bold text-body text-primary">
      <div class="flex items-center gap-2">
        VĂN HOÁ CỒNG CHIÊNG 
        <Icon name="heroicons:chevron-double-right" class="w-4 h-4" />
        Văn hóa cồng chiêng tại các xã 
        <Icon name="heroicons:chevron-double-right" class="w-4 h-4" />
        Xã Bảo Lâm 3
      </div>
    </h2>
    <x-space :height="40"></x-space>

    <section class="flex flex-col gap-5">
      <h2 class="font-bold text-body text-primary text-subtitle">VĂN HÓA CỒNG CHIÊNG TẠI XÃ BẢO LÂM 3</h2>
      <p>
        Xã Bảo Lâm 3 được xem là một trong những “điểm sáng” của công tác bảo tồn và phát huy Không gian văn hóa cồng chiêng Tây Nguyên tại Lâm Đồng. Nơi đây, đồng bào K’Ho và Châu Mạ giữ vai trò chủ thể di sản, với niềm tin rằng cồng chiêng là “tiếng nói của thần linh”, là sợi dây kết nối các thế hệ – từ người già đến con trẻ.
      </p>
      <p>Hiện Bảo Lâm có hơn 25 Câu lạc bộ (CLB) cồng chiêng đang hoạt động, tập trung tại các vùng Lộc Tân, Lộc Bắc, Lộc Bảo và B’Lá. Các CLB này quy tụ hàng trăm nghệ nhân từ nhiều thế hệ – những người không chỉ diễn chiêng trong lễ hội mà còn trực tiếp truyền dạy cho thế hệ trẻ, duy trì hơi thở văn hóa trong đời sống hàng ngày.</p>
      <p>Đặc biệt, mô hình sinh hoạt văn hóa cồng chiêng gắn với phát triển du lịch tại vùng Lộc Tân đang trở thành mô hình mẫu của Lâm Đồng. Du khách đến đây có thể tham gia trải nghiệm văn hóa thực tế: cùng nghệ nhân chỉnh chiêng, múa xoang, nấu rượu cần, nghe kể sử thi và xem lễ cúng Yàng. Mỗi trải nghiệm là một hành trình khám phá tâm linh - văn hóa - nghệ thuật đậm chất đại ngàn.</p>
      <p>Chính quyền và cộng đồng xã Bảo Lâm 3 đang từng bước đưa văn hóa cồng chiêng trở thành sản phẩm du lịch đặc trưng, vừa bảo tồn bản sắc, vừa tạo sinh kế bền vững cho người dân – đúng với tinh thần “bảo tồn trong phát triển, phát triển nhờ bảo tồn.”</p>
    
    </section>
    <x-space :height="50"></x-space>
    <section>
      <h2 class="font-bold text-body text-primary text-subtitle">TIN TỨC - SỰ KIỆN XÃ BẢO LÂM 3</h2>
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