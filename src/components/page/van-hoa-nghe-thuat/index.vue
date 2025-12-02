<template>
  <div class="grid gap-[40px] grid-cols-1 laptop:grid-cols-3">
    <x-page-news-thumb-ver v-for="item in dinamicData" :key="item" :news="item" />
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    exclude: {
      type: Array,
      default: [],
    },
  });
  const data = [
    {
      title: 'PHÁT TRIỂN VĂN HÓA - NGHỆ THUẬT',
      subtitle:
        'Không gian cồng chiêng Tây Nguyên là nguồn cảm hứng lớn, đóng góp vào nền văn hóa, nghệ thuật nước nhà những thanh âm độc bản và phong phú',
      slugify: 'tiem-nang-phat-trien/van-hoa-nghe-thuat',
      type: 'van-hoa-nghe-thuat',
      url: '/assets/page/phat-trien/nghe-thuat/1.jpg',
    },
    {
      title: 'PHÁT TRIỂN DU LỊCH VĂN HÓA - CỘNG ĐỒNG',
      subtitle:
        'Gắn liền không gian văn hóa cồng chiêng Tây Nguyên với việc phát triển du lịch văn hóa - cộng đồng là kim chỉ nam cho ngành văn hóa, du lịch của vùng',
      slugify: 'tiem-nang-phat-trien/du-lich-van-hoa-cong-dong',
      type: 'du-lich-van-hoa-cong-dong',
      url: '/assets/page/phat-trien/cong-dong/1.jpg',
    },
    {
      title: 'PHÁT TRIỂN DU LỊCH TẠI ĐỊA PHƯƠNG',
      subtitle:
        'Giữ gìn và lan tỏa không gian văn hóa cồng chiêng tại các vùng, xã, địa phương không chỉ là phương thức hữu hiệu để phát triển du lịch mà còn góp phần bảo tồn và giữ gìn di sản văn hóa phi vật thể nhân loại',
      slugify: 'tiem-nang-phat-trien/du-lich-tai-dia-phuong',
      type: 'du-lich-tai-dia-phuong',
      url: '/assets/page/phat-trien/dia-phuong/3.jpg',
    },
  ];

  const dinamicData = computed(() => {
    if (!props.exclude) {
      return data;
    }
    return data.filter((item) => {
      return !props.exclude.includes(item.type);
    });
  });
</script>
