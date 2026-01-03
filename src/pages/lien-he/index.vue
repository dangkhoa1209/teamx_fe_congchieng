<template>
  <x-content-place class="font-robo text-primary">
    <x-space :height="40" />
    <x-title title="LIÊN HỆ" variant="bottom" class-name="font-bold text-14" />

    <x-space :height="40" />

    <div class="flex flex-col laptop:flex-row gap-[40px]">
      <div class="laptop:w-[35%]">
        <p class="text-subtitle font-bold text-primary">Thông tin liên hệ</p>
        <x-space :height="50" />
        <div class="flex flex-col gap-[30px] text-body font-normal">
          <p>
            Ban quản lý Chuyên trang thông tin điện tử cồng chiêng tỉnh Lâm Đồng
            <!-- Ban Biên tập Chuyên Trang thông tin điện tử -
            <br />
            Văn hóa, Thể thao và Du lịch tỉnh Lâm Đồng -->
          </p>
          <div class="flex items-center gap-5">
            <LocationIcon class="h-[25px] w-6 laptop:w-8 laptop:h-[35px] fill-primary" />
            <p>
              Phòng văn hóa xã hội xã Lạc Dương
              <!-- Tầng 6 khu 9 tầng, số 36 Trần Phú,
              <br />
              phường Xuân Hương - Đà Lạt, tỉnh Lâm Đồng -->
            </p>
          </div>
          <div class="flex items-center gap-5">
            <PhoneIcon class="h-6 w-6 laptop:w-8 laptop:h-8" />
            <p>0969 856 159</p>
          </div>
          <!-- <div class="flex items-center gap-5">
            <FaxIcon class="h-6 w-6 laptop:w-8 laptop:h-8" />
            <p>(0263) 3833086</p>
          </div> -->
          <div class="flex items-center gap-5">
            <MailIcon class="h-6 w-6 laptop:w-8 laptop:h-8 fill-primary" />
            <p>haint2.lacduong@lamdong.gov.vn</p>
          </div>
        </div>
      </div>

      <div class="laptop:w-[65%]">
        <p class="text-subtitle font-bold text-primary">Gửi yêu cầu liên hệ</p>
        <x-space :height="50" />
        <div>
          <x-form submitText="Lưu" :handle-error="false" :show-button="false" @submit="onSubmit">
            <div class="flex flex-col gap-5 tablet:gap-10">
              <div class="flex flex-col tablet:flex-row gap-5">
                <x-form-input
                  v-model="formData.name"
                  label="Họ và tên"
                  name="name"
                  rules="required"
                  required
                />
                <x-form-input
                  v-model="formData.phone"
                  label="Số điện thoại"
                  name="phone"
                  rules="required"
                  required
                />
              </div>
              <x-form-input
                v-model="formData.email"
                label="Email"
                name="email"
                rules="required"
                required
              />
              <x-form-text-area
                v-model="formData.description"
                label="Nội dung"
                name="description"
                rules="required"
                required
              />
            </div>
            <x-space :height="60" />
            <div class="flex justify-end">
              <x-button theme="primary" type="submit" :uppercase="false">Gửi yêu cầu</x-button>
            </div>
          </x-form>
        </div>
      </div>
    </div>
    <x-space :height="80" />
  </x-content-place>
</template>
<script setup>
  import LocationIcon from '~/public/assets/icon/location2.svg';
  import PhoneIcon from '~/public/assets/icon/phone.svg';
  import FaxIcon from '~/public/assets/icon/fax.svg';
  import MailIcon from '~/public/assets/icon/mail.svg';
  const formData = ref({
    name: '',
    phone: '',
    email: '',
    description: '',
  });

  const isSubmit = ref(false);

  const onSubmit = async () => {
    if (isSubmit.value) {
      return;
    }

    isSubmit.value = true;
    process.client && $toast().info('Đang gửi yêu cầu liên hệ');
    const response = await $api($url.contact.request, {
      body: formData.value,
    });
    const { data, success } = response?.data?.value || {
      data: null,
      success: false,
    };
    if (success) {
      process.client && $toast().success('Gửi yêu cầu liên hệ thành công');
      formData.value = {
        name: '',
        phone: '',
        email: '',
        description: '',
      };
    }

    isSubmit.value = false;
  };
</script>
