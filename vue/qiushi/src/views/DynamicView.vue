<template>
  <div>
    dynamicview
  </div>
</template>

<script setup>;
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';


let count = ref(0);
let imgs = [
  require('@/assets/nav_icon/qyq_00.png'),
  require('@/assets/nav_icon/qyq_01.png'),
  require('@/assets/nav_icon/qyq_02.png'),
  require('@/assets/nav_icon/qyq_03.png'),
  require('@/assets/nav_icon/qyq_04.png'),
  require('@/assets/nav_icon/qyq_05.png'),
  require('@/assets/nav_icon/qyq_06.png'),
  require('@/assets/nav_icon/qyq_07.png'),
  require('@/assets/nav_icon/qyq_08.png'),
  require('@/assets/nav_icon/qyq_09.png'),
  require('@/assets/nav_icon/qyq_10.png'),
  require('@/assets/nav_icon/qyq_11.png'),
  require('@/assets/nav_icon/qyq_12.png'),
  require('@/assets/nav_icon/qyq_13.png'),
  require('@/assets/nav_icon/qyq_14.png'),
  require('@/assets/nav_icon/qyq_15.png'),
  require('@/assets/nav_icon/qyq_16.png'),
  require('@/assets/nav_icon/qyq_17.png'),
  require('@/assets/nav_icon/qyq_18.png'),
  require('@/assets/nav_icon/qyq_19.png'),
  require('@/assets/nav_icon/qyq_20.png'),
  require('@/assets/nav_icon/qyq_21.png'),
  require('@/assets/nav_icon/qyq_22.png'),
  require('@/assets/nav_icon/qyq_23.png'),
];
for (let img of imgs) {
  let image = new Image();
  image.onload = () => {
    count.value++;
  };
  image.src = img;
}
</script>

<style lang="less" scoped>
div{
  height: 500vh;
}
</style>