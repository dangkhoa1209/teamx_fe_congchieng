<template>
  <div class="flex gap-[40px] flex-col laptop:flex-row">
    <x-page-news-thumb-ver class="flex-1" :news="data[0]" />
    <x-page-news-thumb-ver class="flex-1" :news="data[1]" />
    <x-page-news-thumb-ver class="flex-1" :news="data[2]" />
  </div>
</template>

<script setup>
  const data = [
    {
      title: 'PHÁT TRIỂN VĂN HÓA - NGHỆ THUẬT',
      subtitle:
        'Không gian cồng chiêng Tây Nguyên là nguồn cảm hứng lớn, đóng góp vào nền văn hóa, nghệ thuật nước nhà những thanh âm độc bản và phong phú',
    },
    {
      title: 'PHÁT TRIỂN DU LỊCH VĂN HÓA - CỘNG ĐỒNG',
      subtitle:
        'Gắn liền không gian văn hóa cồng chiêng Tây Nguyên với việc phát triển du lịch văn hóa - cộng đồng là kim chỉ nam cho ngành văn hóa, du lịch của vùng',
    },
    {
      title: 'PHÁT TRIỂN DU LỊCH TẠI ĐỊA PHƯƠNG',
      subtitle:
        'Giữ gìn và lan tỏa không gian văn hóa cồng chiêng tại các vùng, xã, địa phương không chỉ là phương thức hữu hiệu để phát triển du lịch mà còn góp phần bảo tồn và giữ gìn di sản văn hóa phi vật thể nhân loại',
    },
  ];
</script>
