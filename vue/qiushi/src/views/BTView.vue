<template>
  <div v-if="topicdata">
    <header class="btview" v-if="topicdata">
      <div class="top">
        <div class="left" @click="$router.back()"></div>
        <div class="right"></div>
      </div>
      <div class="bt_bg" :style="`background-image:url('${topicdata.background}');`"></div>
      <div class="wrap">
        <h3>{{topicdata.content}}</h3>
        <div class="mge">
          <span>帖子 {{topicdata.counter.article_count}}</span>
          <span>订阅 {{topicdata.counter.sub_count}}</span>
        </div>
        <img src="../assets/souye/ic_operation_follow_yellow.png" alt="">
      </div>
    </header>
    <section :class="topicdata.introduction?'context1':'context2'">
      <h3 v-if="topicdata.introduction">{{topicdata.introduction}}</h3>
      <van-tabs v-model:active="active" swipeable>
        <van-tab :title="sele[0]">
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
              <van-skeleton title avatar :row="3" :loading="!Bdatas.length" v-for="Bdata in (Bdatas.length ? Bdatas:5)">
                <BTMoren :sheData="Bdata" />
              </van-skeleton>
            </van-list>
          </van-pull-refresh>
        </van-tab>
        <van-tab :title="sele[1]">
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
              <van-skeleton title avatar :row="3" :loading="!zuidatas.length"
                v-for="Bdata in (zuidatas.length ? zuidatas:5)">
                <BTMoren :sheData="Bdata" />
              </van-skeleton>
            </van-list>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </section>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, watch } from "vue";
import { useRouter, useRoute } from 'vue-router';
import BTMoren from '@/components/BTMoren.vue';
import BTZuixin from '@/components/BTZuixin.vue';

const route = useRoute();

let active = ref(0);
const sele = ref(["默认", "最新"]);

const topicdata = ref(null);
const Bdatas = ref([]);
const zuidatas = ref([]);

const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
let page1 = ref(0);
let page2 = ref(0);
const onLoad = () => {
  // console.log(page.value);
  if (active.value == 0) {
    page1.value++;
    axios.get(`https://apis.netstart.cn/qiushi/topic/${route.query.id}/all`, {
      params: {
        page: page1.value,
        count: 12,
      }
    }).then(res => {
      // console.log(res);
      // console.log(res.data.data);
      // console.log(Bdatas.value);
      // Bdatas.value = [];
      if (refreshing.value) {
        Bdatas.value = [];
        refreshing.value = false;
      }
      Bdatas.value = [...Bdatas.value, ...res.data.data];
      if (!res.data.data.length) {
        finished.value = true;
      }
      loading.value = false;
    });
  } else {
    page2.value++;
    axios.get(`https://apis.netstart.cn/qiushi/topic/${route.query.id}/info`, {
      params: {
        page: page2.value,
        count: 12,
      }
    }).then(res => {
      // console.log(res);
      // console.log(res.data.data);
      // console.log(Bdatas.value);
      // Bdatas.value = [];
      if (refreshing.value) {
        zuidatas.value = [];
        refreshing.value = false;
      }
      zuidatas.value = [...zuidatas.value, ...res.data.data];
      if (!res.data.data.length) {
        finished.value = true;
      }
      loading.value = false;
    });
  }
};

const onRefresh = () => {
  finished.value = false;
  loading.value = true;
  if (active.value == 0) {
    page1.value = 0;
  } else {
    page2.value = 0;
  }
  onLoad();
};
axios.get(`https://apis.netstart.cn/qiushi/topic/${route.query.id}/all`, {
  params: {
    page: 1,
    count: 12
  }
}).then(res => {
  // console.log(res.data.topic);
  // console.log(res.data.data);
  topicdata.value = res.data.topic;
  // Bdatas.value = res.data.data;
});
watch(active, (val) => {
  console.log(val);
  onRefresh();
});

</script>

<style lang="less" scoped>
.btview {
  width: 100%;
  height: 160rem;
  position: fixed;
  top: 0;
  z-index: 999;

  .top {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20rem;
    padding: 0rem 20rem;

    .left {
      width: 10rem;
      height: 24rem;
      background-image: url("../assets/souye/ttdownloader_icon_back_arrow.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    .right {
      width: 20rem;
      height: 24rem;
      background-image: url("../assets/souye/icon_share.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }

  .bt_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
  }

  .wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    color: #fefdfc;
    padding-bottom: 16rem;

    h3 {
      font-size: 16rem;
      font-weight: bold;
      margin-bottom: 16rem;
    }

    .mge {
      display: flex;
      align-items: center;
      margin-bottom: 8rem;

      span {
        display: block;
        font-size: 12rem;
        margin-right: 5rem;
        transform: scale(.9);
      }
    }

    img {
      display: block;
      width: 36rem;
    }
  }
}

.context1 {
  position: relative;
  top: 236rem;
  --van-tab-font-size: 16rem;
  --van-font-weight-bold: 600;
  --van-tabs-bottom-bar-color: #ffde33;
  --van-tab-line-height: 30rem;
  --van-tabs-line-height: 30rem;
  --van-tabs-bottom-bar-width: 30rem;

  h3 {
    width: 100%;
    padding: 12rem 15rem 15rem 15rem;
    font-size: 14rem;
    color: #a4a4a4;
    background-color: #fff;
    position: fixed;
    top: 160rem;
    z-index: 999;
  }

  /deep/.van-tabs__wrap {
    // margin-bottom: 15rem;
    background-color: #fff;
    font-weight: 400;
    color: #999999;
    position: fixed;
    top: 206rem;
    z-index: 999;
    width: 100%;

    .van-tabs__nav {
      padding: 0;

      .van-tab__text {
        z-index: 1;
      }
    }

    .van-tabs__line {
      bottom: 8rem;
      z-index: 0;
    }
  }
}

.context2 {
  position: relative;
  top: 190rem;
  --van-tab-font-size: 16rem;
  --van-font-weight-bold: 600;
  --van-tabs-bottom-bar-color: #ffde33;
  --van-tab-line-height: 30rem;
  --van-tabs-line-height: 30rem;
  --van-tabs-bottom-bar-width: 30rem;

  /deep/.van-tabs__wrap {
    // margin-bottom: 15rem;
    background-color: #fff;
    font-weight: 400;
    color: #999999;
    position: fixed;
    top: 160rem;
    z-index: 999;
    width: 100%;

    .van-tabs__nav {
      padding: 0;

      .van-tab__text {
        z-index: 1;
      }
    }

    .van-tabs__line {
      bottom: 8rem;
      z-index: 0;
    }
  }
}
</style>