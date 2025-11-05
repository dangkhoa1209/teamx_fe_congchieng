<template>
  <div>
    <!-- Banner -->
    <section class="bg-[url('https://picsum.photos/1800/900')] bg-cover bg-center h-screen" >
      <!-- Nội dung trên ảnh -->
      <main class="flex gap-1 flex-col items-center justify-center h-full text-white text-center bg-black/40">
        <h1 class="font-robo font-bold text-[40px]">
          ÂM THANH CỒNG CHIÊNG
        </h1>
        <h2 class="font-robo font-bold text-[40px]">
          HƠI THỞ VĂN HOÁ TÂY NGUYÊN
        </h2>
        <x-button class="mt-5">KHÁM PHÁ NGAY</x-button>
      </main>
    </section>

    <x-space></x-space>
    <!-- BẢO TỒN VÀ LAN TỎA  -->
    <section class="">
      <x-content-place>
       <div class="flex gap-10">
         <div class="flex flex-col gap-5">
          <h3 class="font-robo font-medium text-[18px] text-primary">BẢO TỒN VÀ LAN TỎA</h3>
          <h2 class="font-robo font-bold text-[30px] text-primary">VĂN HOÁ CỒNG CHIÊNG TÂY NGUYÊN</h2>
          <p class="font-robo font-regular text-[16px]">Chuyên trang thông tin điện tử “Văn hoá Cồng Chiêng Lâm Đồng” được xây dựng theo kế hoạch của Sở Văn hoá, Thể thao và Du lịch tỉnh Lâm Đồng năm 2025, nhằm mục tiêu giới thiệu, quảng bá và bảo tồn giá trị văn hoá truyền thống của các dân tộc thiểu số gắn liền với phát triển du lịch cộng đồng bền vững.</p>
          <p class="font-robo font-regular text-[16px]">Trang thông tin đóng vai trò là cầu nối giữa văn hoá – công nghệ – du lịch, giúp người dân, du khách và doanh nghiệp cùng tiếp cận, tìm hiểu, trải nghiệm và chung tay gìn giữ di sản văn hoá phi vật thể đặc trưng của Tây Nguyên – Không gian văn hoá Cồng Chiêng.</p>
          <div class="flex"><x-button :uppercase="false" theme="primary">Tìm hiểu thêm</x-button></div>
        </div>
       <div class="min-w-[47%]">
         <x-image :url="$image().url"></x-image>
       </div>
       </div>
      </x-content-place>
    </section>

    <x-space></x-space>

    <!-- TIỀM NĂNG PHÁT TRIỂN -->
    <section class="">
      <x-content-place>
        <h2 class="font-robo font-bold text-[30px] text-primary">TIỀM NĂNG PHÁT TRIỂN</h2>
        <x-space :height="50"></x-space>
        <div class="flex gap-10">
          <div class="flex flex-col gap-5 w-full">
            <x-image :url="$image().url"></x-image>
            <p class="uppercase font-robo font-medium text-[18px] text-primary">PHÁT TRIỂN VĂN HÓA - NGHỆ THUẬT</p>
            <p class="font-robo font-medium text-[16px]">Tổ chức các lớp truyền dạy Cồng chiêng định kỳ tại trường học, trung tâm văn hoá xã và nhà dài truyền thống.</p>
          </div>

          <div class="flex flex-col gap-5 w-full">
            <x-image :url="$image().url"></x-image>
            <p class="uppercase font-robo font-medium text-[18px] text-primary">PHÁT TRIỂN DU LỊCH VĂN HÓA - CỘNG ĐỒNG</p>
            <p class="font-robo font-medium text-[16px]">Xây dựng điểm check-in văn hoá như cổng làng truyền thống, tượng nghệ nhân, vườn nhạc cụ. Kết hợp nghệ thuật trình diễn ánh sáng & âm thanh Cồng chiêng cho du lịch đêm</p>
          </div>

           <div class="flex flex-col gap-5 w-full">
            <x-image :url="$image().url"></x-image>
            <p class="uppercase font-robo font-medium text-[18px] text-primary">PHÁT TRIỂN DU LỊCH TẠI ĐỊA PHƯƠNG</p>
            <p class="font-robo font-medium text-[16px]">Hợp tác với các doanh nghiệp lữ hành, resort, khu sinh thái để đưa trải nghiệm cồng chiêng vào hương trình tour.</p>
          </div>
        </div>
      </x-content-place>
       
    </section>
    
    <x-space></x-space>
    <section class="">
      <x-content-place>
        <h2 class="font-robo font-bold text-[30px] text-primary">TIN TỨC - SỰ KIỆN</h2>
        <x-space :height="50"></x-space>
          <div class="flex gap-[40px]">
            <div class="flex flex-col gap-5 w-[56.6%]">
              <x-image :url="$image().url"></x-image>
              <p class="uppercase font-robo font-medium text-[18px] text-primary">Lâm Đồng gấp rút chuẩn bị “Hòa âm Cồng chiêng Đông Nam Á 2025”</p>
              <p class="font-robo font-medium text-[16px]">Tỉnh Lâm Đồng đang khẩn trương hoàn tất công tác chuẩn bị cho Chương trình “Hòa âm Cồng chiêng Đông Nam Á 2025”, diễn ra từ 19-21/12/2025 tại Quảng trường Lâm Viên – Đà Lạt.</p>
            </div>
            <div class="w-[43.4%] flex flex-col gap-4">
              <div class="flex gap-4">
                <div class="w-[40%] min-w-[40%]">
                  <x-image :url="$image().url"></x-image>
                </div>
                <p class="font-robo font-medium text-[16px] w-[60%]">Giữ gìn bản sắc văn hoá qua du lịch cồng chiêng ở Lâm Đồng</p>
              </div>
              <div class="flex gap-4">
                 <div class="w-[40%] min-w-[40%]">
                  <x-image :url="$image().url"></x-image>
                </div>
                <p class="font-robo font-medium text-[16px] w-[60%]">Lâm Đồng khai trương mô hình văn hóa cồng chiêng gắn với phát triển du lịch</p>
              </div>
              <div class="flex gap-4">
                 <div class="w-[40%] min-w-[40%]">
                  <x-image :url="$image().url"></x-image>
                </div>
                <p class="font-robo font-medium text-[16px] w-[60%]">KHÔNG GIAN VĂN HÓA CỒNG CHIÊNG TÂY NGUYÊN: “Nguồn lực nội sinh” phát triển du lịch</p>
              </div>
            </div>
          </div>
      </x-content-place>
    </section>

     <x-space></x-space>
      <section class="">
      <x-content-place>
        <h2 class="font-robo font-bold text-[30px] text-primary">VĂN HÓA CỒNG CHIÊNG TẠI CÁC XÃ</h2>
        <x-space :height="50"></x-space>
         <div class="flex gap-5">
            <div class="rounded-[15px] w-full bg-extra">
              <x-image :url="$image().url"></x-image>
              <div class="p-5 flex flex-col justify-between">
                <div>
                  <p class="font-robo font-medium text-[18px] text-primary">Xã Lạc Dương</p>
                  <hr class="border-0 h-px bg-primary my-3" />
                  <p class="font-robo font-regular text-[16px] text-justify">Lạc Dương là trái tim của văn hoá Cồng Chiêng Lâm Đồng, nơi hội tụ của cộng đồng dân tộc K’Ho với truyền thống lâu đời trong nghệ thuật diễn tấu và lễ hội.</p>
                </div>
                <div>
                  <x-button class="mt-5" theme="primary" outline :uppercase="false">Tìm hiểu thêm</x-button>
                </div>
              </div>
            </div>
            <div class="rounded-[15px] w-full bg-extra">
               <x-image :url="$image().url"></x-image>
                <div class="p-5 flex flex-col justify-between">
                  <div>
                    <p class="font-robo font-medium text-[18px] text-primary">Xã Đạ Tẻh</p>
                    <hr class="border-0 h-px bg-primary my-3" />
                    <p class="font-robo font-regular text-[16px] text-justify">Đạ Tẻh là vùng đất còn lưu giữ nhiều nghệ nhân cồng chiêng lớn tuổi, nơi các giá trị truyền thống được truyền dạy qua nhiều thế hệ.</p>
                  </div>
                  <div>
                    <x-button class="mt-5" theme="primary" outline :uppercase="false">Tìm hiểu thêm</x-button>
                  </div>
                </div>
            </div>
            <div class="rounded-[15px] w-full bg-extra">
               <x-image :url="$image().url"></x-image>
                <div class="p-5">
                  <p class="font-robo font-medium text-[18px] text-primary">Xã Bảo Lâm 3</p>
                  <hr class="border-0 h-px bg-primary my-3" />
                  <p class="font-robo font-regular text-[16px] text-justify"> Bảo Lâm 3 là vùng đất giao thoa giữa văn hoá bản địa và hiện đại, nơi tiếng cồng chiêng vẫn vang lên trong đời sống thường nhật của người Mạ, K’Ho và Chu Ru.</p>
                  <x-button class="mt-5" theme="primary" outline :uppercase="false">Tìm hiểu thêm</x-button>
                </div>
            </div>
         </div>
      </x-content-place>
    </section>

    <!-- Nội dung tiếp theo -->
    <div class="h-[2000px]"></div>
  </div>
</template>

<script setup>
const imgBanner = 'https://picsum.photos/1800/900'
</script>
