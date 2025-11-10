<template>
  <footer class="bg-primary text-white ">
    <x-content-place>
      <div class="py-[58px] flex gap-16">
        <div class="flex flex-col gap-8 w-[50%]">
          <div class="flex gap-6 items-center">
            <div class="flex items-center justify-center">
                <img
                  class="h-14 w-auto"
                  :src="$image().urlSquare"
                  alt="Logo"
                  @error="onLogoError">
            </div>
            <div>
              <p class="font-mont font-semibold text-white text-[13px]">
                UBND TỈNH LÂM ĐỒNG
              </p>
              <p class="font-mont font-semibold text-white text-[18px]">
                SỞ VĂN HOÁ, THỂ THAO VÀ DU LỊCH
              </p>
            </div>
          </div>
          <p class="font-robo font-regular text-[16px] ">Chuyên trang thông tin điện tử giới thiệu, quảng bá mô hình văn hoá cồng chiêng gắn với phát triển du lịch tỉnh Lâm Đồng</p>
          <div class="flex gap-4">
            <div class="border border-white p-2 rounded-full box-border">
              <img :src="$image().urlSquare" class="h-5 w-5 rounded-full" alt="">
            </div>
            <div class="border border-white p-2 rounded-full box-border">
              <img :src="$image().urlSquare" class="h-5 w-5 rounded-full" alt="">
            </div>
            <div class="border border-white p-2 rounded-full box-border">
              <img :src="$image().urlSquare" class="h-5 w-5 rounded-full" alt="">
            </div>
          </div>
        </div>
        <div class="w-[25%]">
          <p class="font-robo font-medium text-[18px]">Danh mục</p>
          <p class="font-robo font-regular text-[16px]">Giới thiệu về chuyên trang</p>
          <p>Văn hóa cồng chiêng</p>
          <p>Tin tức - Sự kiện</p>
          <p>Hợp tác</p>
        </div>
        <div class="w-[35%]">
          <p class="font-robo font-medium text-[18px]"> LIÊN HỆ</p>
          <p class="font-robo font-regular text-[16px]">Địa chỉ: Tầng 2 khu 9 tầng, Số 36 Trần Phú, Phường Xuân Hương Đà Lạt - Tỉnh Lâm Đồng</p>
          <p>Số điện thoại: (0263) 3822141</p>
          <p>Email: svhttdl.lamdong.gov.vn</p>
        </div>
      </div>

      <x-line class-color="bg-main"></x-line>

      <div class="py-8 flex justify-center">
        <p class="font-robo font-medium text-[18px] text-center inline-flex items-center justify-center gap-1">
          <span class="text-[25px] leading-none">©</span>
          Bản quyền thuộc Sở Văn Hoá, Thể thao & Du lịch tỉnh Lâm Đồng
        </p>
      </div>
    </x-content-place>
  </footer>
</template>
<script setup>
</script>
