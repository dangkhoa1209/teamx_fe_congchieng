<template>
  <x-content-place class="font-robo">
    <!-- Breadcrumb -->
    <x-space :height="40" />
    <x-title variant="bottom">
      <div class="flex flex-wrap items-center gap-2 font-bold text-14 text-primary m-0 leading-[1]">
        <span class="whitespace-normal">VĂN HOÁ CỒNG CHIÊNG</span>

        <ChevronDoubleRightIcon name="heroicons:chevron-double-right" class="w-[0.9em] h-[0.9em]" />

        <span class="whitespace-normal">Văn hóa cồng chiêng tại các xã</span>

        <ChevronDoubleRightIcon name="heroicons:chevron-double-right" class="w-[0.9em] h-[0.9em]" />

        <span class="whitespace-normal">Xã Đam Rông 4</span>
      </div>
    </x-title>

    <x-space :height="50" />

    <!-- Main Content -->
    <section class="flex flex-col gap-[25px] text-justify">
      <h2 class="font-bold text-body text-primary text-subtitle">
        VĂN HÓA CỒNG CHIÊNG TẠI XÃ ĐAM RÔNG 4
      </h2>

      <p>
        Nằm ở vùng Tây Bắc của tỉnh Lâm Đồng, xã Đam Rông 4 là một trong những không gian cư trú đặc
        trưng của các dân tộc Mạ và K’Ho - hai chủ thể quan trọng trong Không gian văn hóa Cồng
        chiêng Tây Nguyên được UNESCO ghi danh. Trải qua bao thế hệ, tiếng chiêng tại Đam Rông 4 vẫn
        vang lên như một nhịp sống nối liền quá khứ, hiện tại, là linh hồn đại ngàn và cũng là điểm
        tựa tinh thần của cộng đồng nơi đây.
      </p>

      <p>
        Với người Mạ và K’Ho tại xã Đam Rông 4, cồng chiêng là báu vật thiêng, mang trong mình hồn
        vía của buôn làng. Mỗi bộ chiêng gắn với một dòng họ, một câu chuyện, một vị thần bảo hộ.
        Trong các nghi lễ quan trọng như lễ mừng lúa mới, lễ cúng bến nước, lễ cầu mưa, lễ mừng sức
        khỏe, tiếng chiêng được xem như lời khẩn cầu gửi đến Yàng và tổ tiên, đồng thời là tiếng gọi
        cộng đồng trở về bên ánh lửa chung, nơi mọi người hòa vào vòng xoang đoàn kết.
      </p>

      <p>
        Những năm gần đây, xã Đam Rông 4 tích cực triển khai các chương trình bảo tồn, truyền dạy
        cồng chiêng cho thế hệ trẻ. Nhiều đội cồng chiêng thanh thiếu niên được thành lập, do chính
        các nghệ nhân cao tuổi hướng dẫn. Tại đây, các em không chỉ học cách đánh chiêng, giữ nhịp
        xoang, mà còn được truyền lại những tri thức văn hóa về luật tục, các điệu chiêng, cách phân
        vai trong dàn chiêng - những giá trị mà chỉ có nghệ nhân bản địa mới có thể trao truyền.
      </p>

      <p>
        Cồng chiêng tại xã Đam Rông 4 ngày nay đang trở thành nguồn lực phát triển du lịch cộng
        đồng. Một số thôn buôn đã xây dựng mô hình trải nghiệm văn hóa bản địa: trình diễn cồng
        chiêng quanh bếp lửa, giới thiệu ẩm thực truyền thống, nghề dệt thổ cẩm, kể sử thi - tất cả
        giúp du khách hiểu hơn về đời sống tinh thần của người Mạ, K’Ho. Những hoạt động này không
        chỉ bảo tồn di sản mà còn tạo kế sinh nhai bền vững, tăng thu nhập cho đồng bào.
      </p>

      <p>
        Giữa nhịp sống hiện đại, xã Đam Rông 4 vẫn giữ được tiếng chiêng nguyên sơ, trầm hùng và đầy
        bản sắc, như một tuyên ngôn văn hóa của vùng Tây Bắc Lâm Đồng. Mỗi thanh âm vang lên là lời
        nhắc về cội nguồn, là niềm tự hào của đồng bào, và cũng là lời chào mời thân ái gửi tới du
        khách muốn tìm đến vẻ đẹp chân thật của di sản cồng chiêng Tây Nguyên.
      </p>
    </section>

    <x-space :height="50" />

    <!-- News Section -->
    <section>
      <x-title
        title="TIN TỨC - SỰ KIỆN XÃ ĐAM RÔNG 4"
        variant="left"
        class-name="font-bold text-body"
      />
      <x-space :height="40" />
      <x-page-news type="xa-dam-dong-4" />
    </section>

    <x-space :height="40" />
    <x-line />
    <x-space :height="40" />

    <!-- Grid Items -->
    <x-core-ttk :limit="18" type="xa-dam-dong-4">
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
<script setup>
  import ChevronDoubleRightIcon from '~/public/assets/icon/he-thong/chevron-double-right.svg';
</script>
