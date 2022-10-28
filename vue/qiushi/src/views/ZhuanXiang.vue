<template>
  <section class="zhuanxiang">
    zhuanxiangview
  </section>
</template>

<script setup>
import axios from "axios";
import { onMounted } from "vue";

onMounted(() => {
  axios.get("https://apis.netstart.cn/qiushi/article/follow/list").then(res => {
    console.log(res);
  });
});
</script>

<style lang="less" scoped>
.zhuanxiang {
  height: 500vh;
}
</style>