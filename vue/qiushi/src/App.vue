<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { ref, onMounted, watch } from 'vue';

const keepAliveComponentNames = ref(
  ['HomeView',
    "DynamicView",
    "LiveView",
    "ScripView",
    'MyView',
    'AllBSView',
  ]
);

let count = ref(0);
let imgs = [
  require('@/assets/qiandao/qb_sign_gold_coin_2.png'),
  require('@/assets/qiandao/qb_sign_gold_coin_3.png'),
  require('@/assets/qiandao/qb_sign_gold_coin_4.png'),
  require('@/assets/qiandao/qb_sign_gold_coin_5.png'),
  require('@/assets/qiandao/qb_sign_gold_coin_6.png'),
  require('@/assets/qiandao/qb_sign_gold_coin_7.png'),
  require('@/assets/qiandao/qb_sign_gold_coin_8.png'),
  require('@/assets/qiandao/qb_sign_gold_coin_9.png'),
  require('@/assets/qiandao/qb_sign_gold_coin_10.png'),
  require('@/assets/qiandao/qb_sign_gold_coin_11.png'),
  require('@/assets/qiandao/qb_sign_gold_coin_12.png'),
  require('@/assets/qiandao/qb_sign_gold_coin_13.png'),
  require('@/assets/qiandao/qb_sign_gold_coin_14.png'),
  require('@/assets/qiandao/qb_sign_gold_coin_15.png'),
  require('@/assets/qiandao/qb_sign_gold_coin_16.png'),
  require('@/assets/nav_icon/shit_00.png'),
  require('@/assets/nav_icon/shit_01.png'),
  require('@/assets/nav_icon/shit_02.png'),
  require('@/assets/nav_icon/shit_03.png'),
  require('@/assets/nav_icon/shit_04.png'),
  require('@/assets/nav_icon/shit_05.png'),
  require('@/assets/nav_icon/shit_06.png'),
  require('@/assets/nav_icon/shit_07.png'),
  require('@/assets/nav_icon/shit_08.png'),
  require('@/assets/nav_icon/shit_09.png'),
  require('@/assets/nav_icon/shit_10.png'),
  require('@/assets/nav_icon/shit_11.png'),
  require('@/assets/nav_icon/shit_12.png'),
  require('@/assets/nav_icon/shit_13.png'),
  require('@/assets/nav_icon/shit_14.png'),
  require('@/assets/nav_icon/shit_15.png'),
  require('@/assets/nav_icon/shit_16.png'),
  require('@/assets/nav_icon/shit_17.png'),
  require('@/assets/nav_icon/shit_18.png'),
  require('@/assets/nav_icon/shit_19.png'),
  require('@/assets/nav_icon/shit_20.png'),
  require('@/assets/nav_icon/shit_21.png'),
  require('@/assets/nav_icon/shit_22.png'),
  require('@/assets/nav_icon/shit_23.png'),
];
for (let img of imgs) {
  let image = new Image();
  image.onload = () => {
    count.value++;
  };
  image.src = img;
}

// let router = useRouter();
// // 监听当前路由变化
// watch(
//   () => router.currentRoute.value,
//   (to, from) => {
//     console.log(to);
//   }
// );
</script>

<template>
  <div class="wrapper">
    <nav v-if="$route.meta.showNav">
      <!-- <keep-alive> -->
      <!-- <router-view v-if="$route.meta.keepAlive"> -->
      <RouterLink to="/home">
        <div class="nav_icon"></div>
        <span>糗事</span>
      </RouterLink>
      <!-- </router-view> -->
      <!-- </keep-alive> -->
      <RouterLink to="/dynamic">
        <div class="nav_icon"></div>
        <span>动态</span>
      </RouterLink>
      <RouterLink to="/live">
        <div class="nav_icon"></div>
        <span>直播</span>
      </RouterLink>
      <RouterLink to="/scrip">
        <div class="nav_icon"></div>
        <span>小纸条</span>
      </RouterLink>
      <RouterLink to="/my">
        <div class="nav_icon"></div>
        <span>我</span>
      </RouterLink>
    </nav>
    <router-view v-slot="{ Component }">
      <keep-alive :include="keepAliveComponentNames">
        <component :is="Component" :key="$route.path" />
      </keep-alive>
    </router-view>
    <!-- <Transition name="scale" mode="out-in" v-if="$route.meta.animating">
      <router-view></router-view>
    </Transition> -->
  </div>
</template>
<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 5s ease;
  transform: scale(1);
}


.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  // height: 500vh;
  position: relative;
  margin-bottom: 45rem;
}

nav {
  width: 100%;
  height: 45rem;
  font-size: 12rem;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 999;
  background-color: #fff;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 1rem;
    border-top: 1rem solid #c5c2c2;
    transform: scaleY(.3);
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 40rem;
    height: 100%;
    color: #a6a6a6;
    -webkit-tap-highlight-color: transparent;

    .nav_icon {
      width: 25rem;
      height: 25rem;
      background-size: 25rem;
      background-position: center 3rem;
      background-repeat: no-repeat;
    }

    span {
      display: block;
      font-size: 12rem;
      transform: scale(.75);
      margin-bottom: 3rem;
    }
  }

  a {
    &:nth-of-type(1) .nav_icon {
      background-image: url("./assets/nav_icon/ic_qiushi_normal.png");
    }

    &:nth-of-type(2) .nav_icon {
      background-image: url("./assets/nav_icon/ic_qiuyoucircle_normal.png");
    }

    &:nth-of-type(3) .nav_icon {
      background-image: url("./assets/nav_icon/ic_live_normal.png");
    }

    &:nth-of-type(4) .nav_icon {
      background-image: url("./assets/nav_icon/ic_message_normal.png");
    }

    &:nth-of-type(5) .nav_icon {
      background-image: url("./assets/nav_icon/ic_mine_normal.png");
    }
  }

  a.router-link-active {
    color: #424242;

    &:nth-of-type(1) .nav_icon {
      animation: nav1 1.2s linear forwards;
    }

    &:nth-of-type(2) .nav_icon {
      animation: nav2 1.2s linear forwards;
    }

    &:nth-of-type(3) .nav_icon {
      animation: nav3 1.2s linear forwards;
    }

    &:nth-of-type(4) .nav_icon {
      animation: nav4 1.2s linear forwards;
    }

    &:nth-of-type(5) .nav_icon {
      animation: nav5 1.2s linear forwards;
    }
  }
}
</style>
<style>
@keyframes nav1 {
  0% {
    background-image: url("./assets/nav_icon/shit_00.png");
  }

  4% {
    background-image: url("./assets/nav_icon/shit_01.png");
  }

  8% {
    background-image: url("./assets/nav_icon/shit_02.png");
  }

  12% {
    background-image: url("./assets/nav_icon/shit_03.png");
  }

  16% {
    background-image: url("./assets/nav_icon/shit_04.png");
  }

  20% {
    background-image: url("./assets/nav_icon/shit_05.png");
  }

  24% {
    background-image: url("./assets/nav_icon/shit_06.png");
  }

  28% {
    background-image: url("./assets/nav_icon/shit_07.png");
  }

  32% {
    background-image: url("./assets/nav_icon/shit_08.png");
  }

  36% {
    background-image: url("./assets/nav_icon/shit_09.png");
  }

  40% {
    background-image: url("./assets/nav_icon/shit_10.png");
  }

  44% {
    background-image: url("./assets/nav_icon/shit_11.png");
  }

  48% {
    background-image: url("./assets/nav_icon/shit_12.png");
  }

  52% {
    background-image: url("./assets/nav_icon/shit_13.png");
  }

  56% {
    background-image: url("./assets/nav_icon/shit_14.png");
  }

  60% {
    background-image: url("./assets/nav_icon/shit_15.png");
  }

  64% {
    background-image: url("./assets/nav_icon/shit_16.png");
  }

  68% {
    background-image: url("./assets/nav_icon/shit_17.png");
  }

  72% {
    background-image: url("./assets/nav_icon/shit_18.png");
  }

  76% {
    background-image: url("./assets/nav_icon/shit_19.png");
  }

  80% {
    background-image: url("./assets/nav_icon/shit_20.png");
  }

  84% {
    background-image: url("./assets/nav_icon/shit_21.png");
  }

  88% {
    background-image: url("./assets/nav_icon/shit_22.png");
  }

  100% {
    background-image: url("./assets/nav_icon/shit_23.png");
  }
}

@keyframes nav2 {
  0% {
    background-image: url("./assets/nav_icon/qyq_00.png");
  }

  4% {
    background-image: url("./assets/nav_icon/qyq_01.png");
  }

  8% {
    background-image: url("./assets/nav_icon/qyq_02.png");
  }

  12% {
    background-image: url("./assets/nav_icon/qyq_03.png");
  }

  16% {
    background-image: url("./assets/nav_icon/qyq_04.png");
  }

  20% {
    background-image: url("./assets/nav_icon/qyq_05.png");
  }

  24% {
    background-image: url("./assets/nav_icon/qyq_06.png");
  }

  28% {
    background-image: url("./assets/nav_icon/qyq_07.png");
  }

  32% {
    background-image: url("./assets/nav_icon/qyq_08.png");
  }

  36% {
    background-image: url("./assets/nav_icon/qyq_09.png");
  }

  40% {
    background-image: url("./assets/nav_icon/qyq_10.png");
  }

  44% {
    background-image: url("./assets/nav_icon/qyq_11.png");
  }

  48% {
    background-image: url("./assets/nav_icon/qyq_12.png");
  }

  52% {
    background-image: url("./assets/nav_icon/qyq_13.png");
  }

  56% {
    background-image: url("./assets/nav_icon/qyq_14.png");
  }

  60% {
    background-image: url("./assets/nav_icon/qyq_15.png");
  }

  64% {
    background-image: url("./assets/nav_icon/qyq_16.png");
  }

  68% {
    background-image: url("./assets/nav_icon/qyq_17.png");
  }

  72% {
    background-image: url("./assets/nav_icon/qyq_18.png");
  }

  76% {
    background-image: url("./assets/nav_icon/qyq_19.png");
  }

  80% {
    background-image: url("./assets/nav_icon/qyq_20.png");
  }

  84% {
    background-image: url("./assets/nav_icon/qyq_21.png");
  }

  88% {
    background-image: url("./assets/nav_icon/qyq_22.png");
  }

  100% {
    background-image: url("./assets/nav_icon/qyq_23.png");
  }
}

@keyframes nav3 {
  0% {
    background-image: url("./assets/nav_icon/live_00.png");
  }

  4% {
    background-image: url("./assets/nav_icon/live_01.png");
  }

  8% {
    background-image: url("./assets/nav_icon/live_02.png");
  }

  12% {
    background-image: url("./assets/nav_icon/live_03.png");
  }

  16% {
    background-image: url("./assets/nav_icon/live_04.png");
  }

  20% {
    background-image: url("./assets/nav_icon/live_05.png");
  }

  24% {
    background-image: url("./assets/nav_icon/live_06.png");
  }

  28% {
    background-image: url("./assets/nav_icon/live_07.png");
  }

  32% {
    background-image: url("./assets/nav_icon/live_08.png");
  }

  36% {
    background-image: url("./assets/nav_icon/live_09.png");
  }

  40% {
    background-image: url("./assets/nav_icon/live_10.png");
  }

  44% {
    background-image: url("./assets/nav_icon/live_11.png");
  }

  48% {
    background-image: url("./assets/nav_icon/live_12.png");
  }

  52% {
    background-image: url("./assets/nav_icon/live_13.png");
  }

  56% {
    background-image: url("./assets/nav_icon/live_14.png");
  }

  60% {
    background-image: url("./assets/nav_icon/live_15.png");
  }

  64% {
    background-image: url("./assets/nav_icon/live_16.png");
  }

  68% {
    background-image: url("./assets/nav_icon/live_17.png");
  }

  72% {
    background-image: url("./assets/nav_icon/live_18.png");
  }

  76% {
    background-image: url("./assets/nav_icon/live_19.png");
  }

  80% {
    background-image: url("./assets/nav_icon/live_20.png");
  }

  84% {
    background-image: url("./assets/nav_icon/live_21.png");
  }

  88% {
    background-image: url("./assets/nav_icon/live_22.png");
  }

  100% {
    background-image: url("./assets/nav_icon/live_23.png");
  }
}

@keyframes nav4 {
  0% {
    background-image: url("./assets/nav_icon/msg_00.png");
  }

  4% {
    background-image: url("./assets/nav_icon/msg_01.png");
  }

  8% {
    background-image: url("./assets/nav_icon/msg_02.png");
  }

  12% {
    background-image: url("./assets/nav_icon/msg_03.png");
  }

  16% {
    background-image: url("./assets/nav_icon/msg_04.png");
  }

  20% {
    background-image: url("./assets/nav_icon/msg_05.png");
  }

  24% {
    background-image: url("./assets/nav_icon/msg_06.png");
  }

  28% {
    background-image: url("./assets/nav_icon/msg_07.png");
  }

  32% {
    background-image: url("./assets/nav_icon/msg_08.png");
  }

  36% {
    background-image: url("./assets/nav_icon/msg_09.png");
  }

  40% {
    background-image: url("./assets/nav_icon/msg_10.png");
  }

  44% {
    background-image: url("./assets/nav_icon/msg_11.png");
  }

  48% {
    background-image: url("./assets/nav_icon/msg_12.png");
  }

  52% {
    background-image: url("./assets/nav_icon/msg_13.png");
  }

  56% {
    background-image: url("./assets/nav_icon/msg_14.png");
  }

  60% {
    background-image: url("./assets/nav_icon/msg_15.png");
  }

  64% {
    background-image: url("./assets/nav_icon/msg_16.png");
  }

  68% {
    background-image: url("./assets/nav_icon/msg_17.png");
  }

  72% {
    background-image: url("./assets/nav_icon/msg_18.png");
  }

  76% {
    background-image: url("./assets/nav_icon/msg_19.png");
  }

  80% {
    background-image: url("./assets/nav_icon/msg_20.png");
  }

  84% {
    background-image: url("./assets/nav_icon/msg_21.png");
  }

  88% {
    background-image: url("./assets/nav_icon/msg_22.png");
  }

  100% {
    background-image: url("./assets/nav_icon/msg_23.png");
  }
}

@keyframes nav5 {
  0% {
    background-image: url("./assets/nav_icon/mine_00.png");
  }

  4% {
    background-image: url("./assets/nav_icon/mine_01.png");
  }

  8% {
    background-image: url("./assets/nav_icon/mine_02.png");
  }

  12% {
    background-image: url("./assets/nav_icon/mine_03.png");
  }

  16% {
    background-image: url("./assets/nav_icon/mine_04.png");
  }

  20% {
    background-image: url("./assets/nav_icon/mine_05.png");
  }

  24% {
    background-image: url("./assets/nav_icon/mine_06.png");
  }

  28% {
    background-image: url("./assets/nav_icon/mine_07.png");
  }

  32% {
    background-image: url("./assets/nav_icon/mine_08.png");
  }

  36% {
    background-image: url("./assets/nav_icon/mine_09.png");
  }

  40% {
    background-image: url("./assets/nav_icon/mine_10.png");
  }

  44% {
    background-image: url("./assets/nav_icon/mine_11.png");
  }

  48% {
    background-image: url("./assets/nav_icon/mine_12.png");
  }

  52% {
    background-image: url("./assets/nav_icon/mine_13.png");
  }

  56% {
    background-image: url("./assets/nav_icon/mine_14.png");
  }

  60% {
    background-image: url("./assets/nav_icon/mine_15.png");
  }

  64% {
    background-image: url("./assets/nav_icon/mine_16.png");
  }

  68% {
    background-image: url("./assets/nav_icon/mine_17.png");
  }

  72% {
    background-image: url("./assets/nav_icon/mine_18.png");
  }

  76% {
    background-image: url("./assets/nav_icon/mine_19.png");
  }

  80% {
    background-image: url("./assets/nav_icon/mine_20.png");
  }

  84% {
    background-image: url("./assets/nav_icon/mine_21.png");
  }

  88% {
    background-image: url("./assets/nav_icon/mine_22.png");
  }

  100% {
    background-image: url("./assets/nav_icon/mine_23.png");
  }
}
</style>
