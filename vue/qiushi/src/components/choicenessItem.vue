<template>
  <div>
    <van-skeleton title avatar :row="3" :loading="!jingDatas.length" v-for="jingData in 5">
      <div>实际内容</div>
    </van-skeleton>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";

const jingDatas = ref([]);
let showloading = ref(true);
onMounted(() => {
  showloading.value = false;
  axios.get("https://apis.netstart.cn/qiushi/article/list/day", {
    params: {
      page: 1,
      count: 12,
    }
  }).then(res => {
    // console.log(res);
    // console.log(res.data);
    // console.log(tuDatas.value);
    jingDatas.value = res.data.items;
  });
});
</script>

<style lang="scss" scoped>

</style>