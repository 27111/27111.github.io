<script setup>
import ExclusiveItem from '@/components/ExclusiveItem.vue';
import choicenessItem from '@/components/choicenessItem.vue';
import FollowItem from '@/components/FollowItem.vue';
import SheBaoItem from '@/components/SheBaoItem.vue';
import TuItem from '@/components/TuItem.vue';
import VideoItem from '@/components/VideoItem.vue';
import WenItem from '@/components/WenItem.vue';
import { RouterLink, RouterView, onBeforeRouteLeave, useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import axios from "axios";

let active = ref(2);
// let navdatas = ref([
//   { text: "关注", path: "/home/guanzhu" },
//   { text: "专享", path: "/home/zhuanxiang" },
//   { text: "视频", path: "/home/video" },
//   { text: "纯文", path: "/home/chunwen" },
//   { text: "纯图", path: "/home/chuntu" },
//   { text: "精选", path: "/home/jingxuan" },
//   { text: "爆社", path: "/home/baoshe" },
// ]);
let navdatas = ref([
  { text: "关注", path: "/home/guanzhu" },
  { text: "专享", path: "/home/zhuanxiang" },
  { text: "视频", path: "/home/video" },
  { text: "纯文", path: "/home/chunwen" },
  { text: "纯图", path: "/home/chuntu" },
  { text: "精选", path: "/home/jingxuan" },
  { text: "爆社", path: "/home/baoshe" },
]);

const router = useRouter();

// router.push('/home/video');

// watch(active, (newval) => {
//   active.value = newval;
// });

// watch(active, (newval) => {
//   // console.log(newval);
//   switch (newval) {
//     case 0:
//       router.push('/home/guanzhu');
//       break;
//     case 1:
//       router.push('/home/zhuanxiang');
//       break;
//     case 2:
//       router.push('/home/video');
//       break;
//     case 3:
//       router.push('/home/chunwen');
//       break;
//     case 4:
//       router.push('/home/chuntu');
//       break;
//     case 5:
//       router.push('/home/jingxuan');
//       break;
//     case 6:
//       router.push('/home/baoshe');
//       break;
//   }
// });

</script>

<template>
  <header class="head_nav">
    <div class="search">
      <div class="qiandao">
        <!-- <img src="../assets/qiandao/ic_mission_coin.png" alt=""> -->
        <div class="qian_pic"></div>
        <span>签到</span>
      </div>
      <RouterLink to="/search">
        <div class="input_wrap">
          <i class="search_icon"></i>
          <input type="text" placeholder="搜索糗事">
        </div>
      </RouterLink>
      <div class="message">
        <img src="../assets/souye/ic_qiushi_create_article.png" alt="">
      </div>
    </div>
    <van-tabs v-model:active="active" swipeable>
      <!-- <van-tab v-for="(navdata,index) in navdatas" :title="navdata.text" :key="index">
        <RouterView v-if="active===index" />
      </van-tab> -->
      <van-tab :title="navdatas[0].text">
        <FollowItem :active="active" />
      </van-tab>
      <van-tab :title="navdatas[1].text">
        <ExclusiveItem :active="active" />
      </van-tab>
      <van-tab :title="navdatas[2].text">
        <VideoItem :active="active" />
      </van-tab>
      <van-tab :title="navdatas[3].text">
        <WenItem :active="active" />
      </van-tab>
      <van-tab :title="navdatas[4].text">
        <TuItem :active="active" />
      </van-tab>
      <van-tab :title="navdatas[5].text">
        <choicenessItem :active="active" />
      </van-tab>
      <van-tab :title="navdatas[6].text">
        <SheBaoItem :active="active" />
      </van-tab>
    </van-tabs>
  </header>
</template>

<style lang="less" scoped>
.head_nav {
  padding-top: 70rem;
  // height: 500vh;
  --van-tab-font-size: 16rem;
  --van-font-weight-bold: 600;
  --van-tabs-bottom-bar-color: #ffde33;
  --van-tab-line-height: 30rem;
  --van-tabs-line-height: 30rem;
  --van-tabs-bottom-bar-width: 30rem;
  // --van-tab-disabled-text-color: #999999;

  /deep/.van-tabs__wrap {
    // margin-bottom: 15rem;
    background-color: #fff;
    font-weight: 400;
    color: #999999;
    position: sticky;
    top: 70rem;
    z-index: 999;

    .van-tabs__nav {
      padding: 0;

      .van-tab--grow {
        width: 62rem;
        padding: 0;

        .van-tab__text {
          z-index: 1;
        }
      }
    }

    .van-tabs__line {
      bottom: 8rem;
      z-index: 0;
    }
  }

  // /deep/.van-tabs__content {
  //   // height: 500vh;
  // }

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20rem 0 15rem 0;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #fff;
    z-index: 999;

    .qiandao {
      position: absolute;
      width: 55rem;
      height: 26rem;
      left: 12rem;
      background-color: #f5f5f5;
      border-radius: 20rem;

      .qian_pic {
        display: block;
        width: 55rem;
        height: 26rem;
        position: absolute;
        top: 0;
        left: 0;
        // top: 50%;
        // left: 2rem;
        // transform: translate(0, -50%);
        background-image: url("../assets/qiandao/qb_sign_gold_coin_2.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        animation: qian 1.2s linear infinite;
        // animation-iteration-count: 2;
      }

      span {
        display: block;
        position: absolute;
        right: 6rem;
        font-weight: 600;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .input_wrap {
      position: relative;

      .search_icon {
        display: block;
        position: absolute;
        top: 50%;
        left: 22%;
        transform: translateY(-50%);
        width: 20rem;
        height: 20rem;
        background-image: url("../assets/souye/group_search_night.png");
        background-size: 12rem;
        background-repeat: no-repeat;
        background-position: center 2rem;
      }

      input {
        width: 200rem;
        height: 35rem;
        padding: 0;
        border: 0;
        background-color: #f7f7f7;
        border-radius: 5rem;

        &::-webkit-input-placeholder {
          color: #c8c8c8;
          font-size: 16rem;
          text-align: center;
        }
      }
    }

    .message {
      position: absolute;
      right: 12rem;

      img {
        width: 65rem;
        height: 35rem;
      }
    }

  }
}
</style>
<style lang="less">
@keyframes qian {
  0% {
    background-image: url("../assets/qiandao/qb_sign_gold_coin_2.png");
  }

  7% {
    background-image: url("../assets/qiandao/qb_sign_gold_coin_3.png");
  }

  14% {
    background-image: url("../assets/qiandao/qb_sign_gold_coin_4.png");
  }

  21% {
    background-image: url("../assets/qiandao/qb_sign_gold_coin_5.png");
  }

  28% {
    background-image: url("../assets/qiandao/qb_sign_gold_coin_6.png");
  }

  35% {
    background-image: url("../assets/qiandao/qb_sign_gold_coin_7.png");
  }

  42% {
    background-image: url("../assets/qiandao/qb_sign_gold_coin_8.png");
  }

  49% {
    background-image: url("../assets/qiandao/qb_sign_gold_coin_9.png");
  }

  56% {
    background-image: url("../assets/qiandao/qb_sign_gold_coin_10.png");
  }

  63% {
    background-image: url("../assets/qiandao/qb_sign_gold_coin_11.png");
  }

  70% {
    background-image: url("../assets/qiandao/qb_sign_gold_coin_12.png");
  }

  77% {
    background-image: url("../assets/qiandao/qb_sign_gold_coin_13.png");
  }

  84% {
    background-image: url("../assets/qiandao/qb_sign_gold_coin_14.png");
  }

  91% {
    background-image: url("../assets/qiandao/qb_sign_gold_coin_15.png");
  }

  100% {
    background-image: url("../assets/qiandao/qb_sign_gold_coin_16.png");
  }

}
</style>
