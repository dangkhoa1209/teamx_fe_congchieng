<template>
  <footer class="bg-primary text-main">
    <x-content-place>
      <x-space :height="58" />
      <div class="flex gap-16 flex-col laptop:flex-row">
        <div class="flex flex-col justify-between gap-8 w-[100%] laptop:w-[43%]">
          <div class="flex flex-col gap-8">
            <div class="flex gap-6 items-center">
              <div class="flex items-center justify-center">
                <div class="h-14 w-14">
                  <img src="/assets/icon/qh.svg" class="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <p class="font-mont font-semibold text-main text-mini">UBND TỈNH LÂM ĐỒNG</p>
                <p class="font-mont font-semibold text-main text-subtitle">
                  CHUYÊN TRANG ĐIỆN TỬ CỒNG CHIÊNG
                </p>
              </div>
            </div>
            <p class="font-normal text-body">
              Chuyên trang thông tin điện tử giới thiệu, quảng bá mô hình văn hoá cồng chiêng gắn
              với phát triển du lịch tỉnh Lâm Đồng
            </p>
          </div>
          <div class="flex gap-4">
            <div
              class="border border-main hover:border-primary hover:bg-main p-2 rounded-full box-border cursor-pointer group"
            >
              <FBIcon
                class="h-4 w-4 laptop:w-5 laptop:h-5 fill-current text-main group-hover:text-primary"
              />
            </div>

            <div
              class="border border-main hover:border-primary hover:bg-main p-2 rounded-full box-border cursor-pointer group"
            >
              <YTIcon
                class="h-4 w-4 laptop:w-5 laptop:h-5 fill-current text-main group-hover:text-primary"
              />
            </div>

            <div
              class="border border-main hover:border-primary hover:bg-main p-2 rounded-full box-border cursor-pointer group"
            >
              <IGIcon
                class="h-4 w-4 laptop:w-5 laptop:h-5 fill-current text-main group-hover:text-primary"
              />
            </div>
          </div>
        </div>
        <div class="w-[100%] laptop:w-[22%] flex flex-col gap-3 tablet:gap-6">
          <p class="font-medium text-subtitle">DANH MỤC</p>
          <p class="font-normal text-body cursor-pointer" @click="clickTo('gioi-thieu')">
            Giới thiệu về chuyên trang
          </p>
          <p
            class="font-normal text-body cursor-pointer"
            @click="clickTo('tiem-nang-phat-trien/van-hoa-nghe-thuat')"
          >
            Tiềm năng phát triển
          </p>
          <p
            class="font-normal text-body cursor-pointer"
            @click="clickTo('van-hoa-cong-chieng/tong-quan')"
          >
            Văn hóa cồng chiêng
          </p>
          <p class="font-normal text-body cursor-pointer" @click="clickTo('tin-tuc-su-kien')">
            Tin tức - Sự kiện
          </p>
          <p class="font-normal text-body cursor-pointer" @click="clickTo('hop-tac')">Hợp tác</p>
        </div>
        <div class="w-[100%] laptop:w-[30%] flex flex-col gap-3 tablet:gap-6">
          <p class="font-medium text-subtitle">LIÊN HỆ</p>
          <p class="font-normal text-body">
            Ban quản lý Chuyên trang thông tin điện tử cồng chiêng tỉnh Lâm Đồng
          </p>
          <p class="font-normal text-body">Địa chỉ: Phòng văn hóa xã hội xã Lạc Dương</p>
          <p class="font-normal text-body">Số điện thoại: 0969 856 159</p>
          <p class="font-normal text-body">Email: haint2.lacduong@lamdong.gov.vn</p>
        </div>
      </div>
      <x-space :height="58" />
      <x-line class-color="bg-main" />

      <div class="py-8 flex justify-center">
        <p class="font-medium text-center inline-flex items-center justify-center gap-1">
          <span class="text-title leading-none">©</span>
          <span class="text-copy-right">
            Bản quyền thuộc Sở Văn Hoá, Thể thao & Du lịch tỉnh Lâm Đồng
          </span>
        </p>
      </div>
    </x-content-place>
  </footer>
</template>
<script setup>
  import FBIcon from '~/public/assets/icon/fb.svg';
  import YTIcon from '~/public/assets/icon/youtube.svg';
  import IGIcon from '~/public/assets/icon/ig.svg';

  const router = useRouter();
  const clickTo = (slugify) => {
    if (!slugify) return;
    router.push({ path: `/${slugify}` });
  };
</script>
