<template>
  <div class="home">
    <div
      class="home-search"
      :style="`background-color: rgba(230, 230, 230, ${op});`"
    >
      <router-link to="/search" class="search-input">
        <i></i>
        <input class="search" placeholder="搜索" />
      </router-link>
      <div class="ser-icon">
        <p :style="headToggle ? `background-image: url('${imgUrl}')` : ''"></p>
        <span :style="headToggle ? 'color: #a6a6a6' : ''">足迹</span>
      </div>
    </div>
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
      <van-swipe-item
        @click="$router.push({ path: '/healtharticle' })"
        :style="`background-image: url('${bannerImg1}');`"
      ></van-swipe-item>
      <van-swipe-item
        @click="$router.push({ path: '/healtharticle' })"
        :style="`background-image: url('${bannerImg2}');`"
      ></van-swipe-item>
      <van-swipe-item
        @click="$router.push({ path: '/healtharticle' })"
        :style="`background-image: url('${bannerImg3}');`"
      ></van-swipe-item>
    </van-swipe>
    <router-view />
  </div>
</template>

<script>
import qs from "qs";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      headToggle: false,
      imgUrl: require("../assets/icon_ls2.png"),
      bannerImg1: require("../assets/bg_zyzs_1.png"),
      bannerImg2: require("../assets/bg_zyzs_2.png"),
      bannerImg3: require("../assets/bg_zyzs_3.png"),
      op: 0,
      homeObj: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
    this.axios
      .post("/app-server/homePage/mobile/v315/homePageOne")
      .then((res) => {
        // console.log(res);
        this.homeObj = res.data.data;
        // console.log(this.homeObj);
      });
    this.axios
      .post(
        "/app-server/course/mobile/getCourseById",
        qs.stringify({
          cid: "1YfYGejp1664065886583",
          uid: "ace42c2d54404867b879f46affc4592a",
          os: 1,
          terminal: 0,
          type: 2,
          typeId: "5eyG6K5E",
        })
      )
      .then((res) => {
        console.log(res);
      });
  },
  methods: {
    // 获取页面滚动距离
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(Math.floor(scrollTop));
      // console.log((Math.floor(scrollTop) / 120).toFixed(2));
      if (scrollTop > 120) {
        this.headToggle = true;
      } else {
        this.headToggle = false;
      }
      return (this.op = (Math.floor(scrollTop) / 120).toFixed(2));
    },
  },
};
</script>

<style lang="less" scoped>
.home-search {
  position: fixed;
  width: 100%;
  height: 65rem;
  background-color: rgba(230, 230, 230, 0);
  top: 0;
  left: 0;
  z-index: 1;
  // transition: all 0.5s;
  .search-input {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 10rem;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    i {
      display: block;
      position: absolute;
      width: 30rem;
      height: 30rem;
      left: calc(10% / 2 - 5rem);
      background: url("../assets/icon_detail_serch.png") no-repeat;
      background-size: 16rem;
      background-position: center;
    }
    .search {
      position: relative;
      left: -15rem;
      width: 85%;
      height: 30rem;
      line-height: 18rem;
      background: #fdfdfdb0;
      font-size: 14rem;
      color: #333;
      outline: 0;
      border: none;
      padding: 0;
      border-radius: 30rem;
      padding-left: 30rem;
      &::-webkit-input-placeholder {
        color: #747373;
      }
    }
  }
  .ser-icon {
    position: absolute;
    right: 0;
    margin-right: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    bottom: 10rem;
    p {
      width: 14rem;
      height: 14rem;
      background-image: url("../assets/icon_ls1.png");
      background-repeat: no-repeat;
      background-size: 14rem;
      background-position: center;
    }
    span {
      display: block;
      font-size: 12rem;
      transform: scale(0.8);
      color: #f4f4f4;
      // color: #a6a6a6;
    }
  }
}
</style>
<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20rem;
  height: 240rem;
  text-align: center;
  background-color: #39a9ed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.my-swipe .van-swipe__indicators .van-swipe__indicator {
  width: 10rem;
  height: 3rem;
  border-radius: 3rem;
}
</style>
