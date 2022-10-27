<template>
  <div>
    scrip
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';


let count = ref(0);
let imgs = [
  require('@/assets/nav_icon/msg_00.png'),
  require('@/assets/nav_icon/msg_01.png'),
  require('@/assets/nav_icon/msg_02.png'),
  require('@/assets/nav_icon/msg_03.png'),
  require('@/assets/nav_icon/msg_04.png'),
  require('@/assets/nav_icon/msg_05.png'),
  require('@/assets/nav_icon/msg_06.png'),
  require('@/assets/nav_icon/msg_07.png'),
  require('@/assets/nav_icon/msg_08.png'),
  require('@/assets/nav_icon/msg_09.png'),
  require('@/assets/nav_icon/msg_10.png'),
  require('@/assets/nav_icon/msg_11.png'),
  require('@/assets/nav_icon/msg_12.png'),
  require('@/assets/nav_icon/msg_13.png'),
  require('@/assets/nav_icon/msg_14.png'),
  require('@/assets/nav_icon/msg_15.png'),
  require('@/assets/nav_icon/msg_16.png'),
  require('@/assets/nav_icon/msg_17.png'),
  require('@/assets/nav_icon/msg_18.png'),
  require('@/assets/nav_icon/msg_19.png'),
  require('@/assets/nav_icon/msg_20.png'),
  require('@/assets/nav_icon/msg_21.png'),
  require('@/assets/nav_icon/msg_22.png'),
  require('@/assets/nav_icon/msg_23.png'),
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

</style>