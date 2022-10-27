<template>
  <div>
    <header>
      <div class="title">
        <i @click="$router.back()"></i>
        <h3>全部爆社</h3>
      </div>
    </header>
    <div class="allbs">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <BaoSheList :btDatas="bsListDates" />
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script setup>
import BaoSheList from '@/components/BaoSheList.vue';
import { ref, onMounted } from "vue";
import axios from "axios";

const bsListDates = ref([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
let page = ref(0);
const onLoad = () => {
  // console.log(page.value);
  page.value++;
  axios.get("https://apis.netstart.cn/qiushi/topic/all/list", {
    params: {
      page: page.value,
      count: 30,
    }
  }).then(res => {
    if (refreshing.value) {
      bsListDates.value = [];
      refreshing.value = false;
    }
    bsListDates.value = [...bsListDates.value, ...res.data.data];
    if (!res.data.data.length) {
      finished.value = true;
    }
    loading.value = false;
  });
};

const onRefresh = () => {
  page.value = 0;
  finished.value = false;
  loading.value = true;
  onLoad();
};
</script>

<style lang="less" scoped>
header {
  width: 100%;
  padding-top: 25rem;
  padding-bottom: 15rem;
  position: fixed;
  background-color: #fff;
  z-index: 999;

  .title {
    position: relative;
    width: 100%;
    padding: 0 15rem;

    i {
      display: block;
      width: 20rem;
      height: 20rem;
      background-image: url("../assets/souye/ttdownloader_icon_back_arrow.png");
      background-repeat: no-repeat;
      background-size: 26rem;
      background-position: left center;
      position: absolute;
    }

    h3 {
      text-align: center;
      width: 100%;
      font-size: 17rem;
      font-weight: bold;
    }
  }

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    bottom: 0rem;
    background-color: #9c9c9c;
    transform: scaleY(.2);
  }
}

.allbs {
  padding: 66rem 15rem 0 15rem;
}
</style>