<template>
  <div>
    liveview
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';


let count = ref(0);
let imgs = [
  require('@/assets/nav_icon/live_00.png'),
  require('@/assets/nav_icon/live_01.png'),
  require('@/assets/nav_icon/live_02.png'),
  require('@/assets/nav_icon/live_03.png'),
  require('@/assets/nav_icon/live_04.png'),
  require('@/assets/nav_icon/live_05.png'),
  require('@/assets/nav_icon/live_06.png'),
  require('@/assets/nav_icon/live_07.png'),
  require('@/assets/nav_icon/live_08.png'),
  require('@/assets/nav_icon/live_09.png'),
  require('@/assets/nav_icon/live_10.png'),
  require('@/assets/nav_icon/live_11.png'),
  require('@/assets/nav_icon/live_12.png'),
  require('@/assets/nav_icon/live_13.png'),
  require('@/assets/nav_icon/live_14.png'),
  require('@/assets/nav_icon/live_15.png'),
  require('@/assets/nav_icon/live_16.png'),
  require('@/assets/nav_icon/live_17.png'),
  require('@/assets/nav_icon/live_18.png'),
  require('@/assets/nav_icon/live_19.png'),
  require('@/assets/nav_icon/live_20.png'),
  require('@/assets/nav_icon/live_21.png'),
  require('@/assets/nav_icon/live_22.png'),
  require('@/assets/nav_icon/live_23.png'),
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