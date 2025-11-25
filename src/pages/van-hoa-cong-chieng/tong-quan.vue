<template>
  <x-content-place>
    <x-space :height="40" />
    <section class="">
      <x-title
        title="VĂN HOÁ CỒNG CHIÊNG"
        variant="bottom"
        class-name="font-robo font-bold text-subtitle"
      />

      <x-space :height="40" />
      <h1 class="text-title font-bold font-robo text-primary">
        ÂM THANH CỒNG CHIÊNG HƠI THỞ VĂN HOÁ TÂY NGUYÊN
      </h1>
    </section>
    <x-space :height="40" />
    <div class="flex gap-[40px]">
      <x-image :url="$image().url" />
      <x-image :url="$image().url" />
    </div>

    <x-space :height="50" />
    <x-title
      title="VĂN HÓA CỒNG CHIÊNG TẠI VIỆT NAM"
      variant="left"
      class-name="font-robo text-subtitle font-bold"
    />
    <x-space :height="40" />
    <div class="font-robo text-body flex flex-col font-normal gap-[25px] text-justify">
      <p class="text-subtitle text-primary font-bold">Văn hóa cồng chiêng Tây Bắc</p>
      <p class="italic font-light">
        “Ở Tây Bắc, tiếng chiêng hòa cùng gió núi, mây trời như tiếng vọng của đất trời cổ xưa”
      </p>
      <p>
        Trong các lễ hội như Xên bản, Xên mường, tiếng chiêng hòa cùng tiếng khèn, trống, tiếng hát,
        tiếng chân người nhảy múa bên đống lửa. Với người Thái, Mường, Dao, Tày, Nùng..., chiêng là
        biểu tượng của sự no đủ, lòng biết ơn và mối giao hòa giữa con người với thiên nhiên.
      </p>
      <p>
        Âm sắc của chiêng Tây Bắc trong trẻo, phóng khoáng nhưng uy nghiêm, thể hiện một tâm thế
        sống hào sảng và yêu thương, chan hòa với trời đất. Mỗi hồi chiêng không chỉ để “gọi mùa”,
        mà còn là lời chào, lời tạ, lời tiễn thiêng liêng, cảm xúc.
      </p>
      <x-image :url="$image().url" />
    </div>

    <x-space :height="50" />
    <div class="font-robo text-body flex flex-col font-normal gap-[25px] text-justify">
      <p class="text-subtitle text-primary font-bold">Văn hóa cồng chiêng Tây Nguyên</p>
      <p class="italic font-light">
        “Nếu nhịp chiêng Tây Bắc mang âm hưởng của núi cao thì Tây Nguyên là đại ngàn của âm thanh
        và linh hồn”
      </p>
      <p>
        Năm 2005, Không gian văn hóa Cồng chiêng Tây Nguyên được UNESCO công nhận là Kiệt tác truyền
        khẩu và Di sản phi vật thể của nhân loại - minh chứng cho tầm vócvà chiều sâu của nền văn
        minh âm thanh độc nhất vô nhị này.
      </p>
      <p>
        Tại đây, mỗi dân tộc Ê Đê, M’Nông, Gia Rai, K’Ho... lại thổi vào chiêng một linh hồn riêng,
        tạo nên nhịp điệu văn hóa phong phú và độc đáo. Mỗi bộ chiêng có tên riêng, hồn riêng, được
        cất giữ như báu vật truyền đời. Khi chiêng vang lên, đó là cuộc đối thoại giữa con người và
        thần linh, là lời mời tổ tiên về chứng giám cho mọi nghi lễ trọng đại của buôn làng.
      </p>
      <p>
        Người M’nông coi chiêng là tiếng nói của đất, mang âm vang trầm hùng và đầy nội lực. Trong
        các nghi lễ cầu mùa, mừng lúa mới, cúng bến nước, tiếng chiêng cất lên như tiếng gọi mùa,
        tiếng tạ ơn trời đất, khơi dậy nguồn sinh khí bất tận giữa đại ngàn
      </p>
      <p>
        Người Gia Rai coi chiêng là linh hồn, là máu thịt của buôn làng. Tiếng chiêng Gia Rai vừa dữ
        dội, vừa thiết tha, kể câu chuyện về niềm vui, nỗi đau, sự sinh tồn và khát vọng hòa hợp với
        trời đất.
      </p>
      <p>
        Với Lâm Đồng, nơi giao thoa của nhiều tộc người, là “trái tim chiêng” của vùng Nam Tây
        Nguyên, giữ vai trò trung tâm bảo tồn, lan tỏa và tái sinh không gian cồng chiêng trong đời
        sống đương đại. Tại đây, người K’Ho, M’Nông, Mạ và Churu vẫn giữ được những bộ chiêng cổ
        hàng bao nhiêu thập kỷ, được xem như linh hồn của núi rừng Lang Biang. Trong các lễ hội,
        tiếng chiêng Lâm Đồng vang lên không chỉ để cúng, để múa, mà còn để kể chuyện, để nối liền
        quá khứ - hiện tại - tương lai của người con Tây Nguyên.
      </p>
    </div>
    <x-space :height="50" />
    <x-title
      title="VĂN HÓA CỒNG CHIÊNG TẠI CÁC XÃ THUỘC TỈNH LÂM ĐỒNG"
      variant="left"
      class-name="font-robo text-subtitle font-bold"
    />
    <x-space :height="25" />
    <p class="font-robo text-body text-justify">
      Văn hóa cồng chiêng tỉnh Lâm Đồng là linh hồn của vùng đất, nơi những thanh âm vang vọng giữa
      đại ngàn vẫn còn mãi trong đời sống của bao thế hệ. Mỗi xã, mỗi buôn làng đều có cách gìn giữ
      và “thổi hồn” riêng cho di sản này, tạo nên bức tranh đa sắc của không gian văn hóa cồng
      chiêng Lâm Đồng – một phần không thể tách rời của di sản cồng chiêng Tây chiêng, đã được
      UNESCO công nhận là Kiệt tác di sản truyền khẩu và phi vật thể của nhân loại.
    </p>
    <x-space :height="25" />
    <x-image :url="$image().url" />
    <x-space :height="80" />
  </x-content-place>
</template>
<script setup></script>
