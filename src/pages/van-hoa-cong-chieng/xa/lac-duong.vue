<template>
  <x-content-place class="font-robo">
    <!-- Breadcrumb -->
    <x-space :height="40" />
    <x-title variant="bottom">
      <div class="flex items-center gap-2 font-bold text-body text-primary m-0 leading-[1]">
        VĂN HOÁ CỒNG CHIÊNG
        <Icon name="heroicons:chevron-double-right" class="w-4 h-4" />
        Văn hóa cồng chiêng tại các xã
        <Icon name="heroicons:chevron-double-right" class="w-4 h-4" />
        Xã Lạc Dương
      </div>
    </x-title>

    <x-space :height="50" />

    <!-- Main Content -->
    <section class="flex flex-col gap-[25px] text-justify">
      <h2 class="font-bold text-body text-primary text-subtitle">
        VĂN HÓA CỒNG CHIÊNG TẠI XÃ LẠC DƯƠNG
      </h2>

      <p>
        Văn hóa cồng chiêng của dân tộc K'Ho, xã Lạc Dương là một bộ phận của Không gian văn hóa
        cồng chiêng Tây Nguyên. Nằm dưới chân núi Langbiang hùng vĩ, xã Lạc Dương được ví như “trái
        tim văn hóa” của người K’Ho tỉnh Lâm Đồng. Tại đây, tiếng chiêng không chỉ vang lên trong lễ
        hội mà còn hòa vào nhịp sống đương đại - nơi di sản trở thành sản phẩm du lịch và du lịch
        trở thành động lực gìn giữ di sản.
      </p>

      <div>
        <p>Hiện toàn xã có 17 câu lạc bộ, đội, nhóm cồng chiêng đang hoạt động thường xuyên.</p>
        <ul class="list-disc pl-6 space-y-1">
          <li>Trong đó: 8 nhóm do các gia đình người K’Ho tự tổ chức.</li>
          <li>4 nhóm trực thuộc các doanh nghiệp du lịch.</li>
          <li>5 nhóm hoạt động độc lập phục vụ du khách và các sự kiện văn hóa.</li>
        </ul>
      </div>

      <p>
        Mỗi năm, các đội chiêng Lạc Dương đón từ 800.000 – 1,2 triệu lượt du khách đến trải nghiệm,
        thưởng thức âm vang đại ngàn giữa không gian núi rừng Langbiang.
      </p>

      <p>
        Nhờ vậy, cồng chiêng không chỉ còn là biểu tượng văn hóa, mà đã trở thành nguồn sinh kế,
        niềm tự hào và sợi dây nối kết du lịch – cộng đồng – di sản. Cồng chiêng Lạc Dương còn đặc
        biệt ở phong cách trình diễn mềm mại, tươi vui, tràn đầy sinh khí, phản ánh tinh thần phóng
        khoáng của người K’Ho.
      </p>

      <p>
        Những đêm hội lửa bên sườn núi, du khách không chỉ nghe chiêng, mà còn được “sống” trong
        chiêng – hòa cùng tiếng trống, điệu xoang và nụ cười nồng hậu của người dân Langbiang.
      </p>
    </section>

    <x-space :height="50" />

    <!-- News Section -->
    <section>
      <x-title
        title="TIN TỨC - SỰ KIỆN XÃ LẠC DƯƠNG"
        variant="left"
        class-name="font-bold text-body"
      />
      <x-space :height="40" />
      <x-page-news />
    </section>

    <x-space :height="40" />

    <x-line />

    <x-space :height="40" />

    <!-- ===== GRID MORE NEWS ===== -->
    <section>
      <div class="grid grid-cols-2 laptop:grid-cols-3 gap-x-[40px] gap-y-[50px]">
        <x-page-news-thumb-ver v-for="i in 15" :key="i" />
      </div>
      <x-space :height="40" />
      <div class="flex justify-center">
        <x-button theme="primary" outline :uppercase="false">Xem thêm</x-button>
      </div>
    </section>

    <x-space :height="80" />
  </x-content-place>
</template>
