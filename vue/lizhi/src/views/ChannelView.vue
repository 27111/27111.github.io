<template>
  <div class="channel">
    <header class="channel-head">
      <i @click="backroot">
        <img src="../assets/home.png" alt="" />
      </i>
      <h1>{{ kinddatasID[1] }}</h1>
    </header>
    <div class="nav-tab">
      <router-link
        :to="{ path: '/channel', query: { id: kinddatasID[0] } }"
        ref="channelClick"
        @click="showchannel = true"
        >推荐</router-link
      >
      <router-link
        v-for="kind in kindDatas"
        :to="{ path: '/channel/types', query: { kindName: kind.channelName } }"
        :key="kind.channelId"
        @click="showchannel = false"
        >{{ kind.channelName }}
      </router-link>
    </div>
    <router-view />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      v-show="$route.meta.showHomeItem"
    >
      <HomeItem v-for="(item, index) in list" :key="index" :item="item" />
    </van-list>
  </div>
</template>
<script>
// import { mapMutations } from "vuex";
import qs from "qs";
import { mapState } from "vuex";
import HomeItem from "@/components/HomeItem.vue";

export default {
  components: {
    HomeItem,
  },
  data() {
    return {
      // titlename: localStorage.getItem("titlename"),
      showchannel: true,
      kindDatas: null,
      list: [],
      loading: false,
      finished: false,
      error: false,
      totle: 0,
    };
  },
  computed: {
    ...mapState(["kinddatasID"]),
  },
  methods: {
    backroot() {
      this.$router.replace("/");
    },
    // ...mapMutations(["getkinddatas"]),
    onLoad() {
      // this.loading = true;
      this.totle += 6;
      this.axios
        .post(
          "m5/recommend",
          qs.stringify({
            token: "null",
            performanceId: "null",
            deviceId: "h5-4565da47-aa38-728d-dc31-4bb9922a139f",
            sceneCode: this.kinddatasID[2],
            bizCode: "playlist",
            refresh: 1,
            channelId: this.kinddatasID[0],
          })
        )
        .then((res) => {
          // console.log(res.data.data);
          this.list = [...this.list, ...res.data.data.cardPlayBeanList];
          if (this.list.length > this.totle) {
            this.finished = true;
          }
          this.loading = false;
        })
        .catch(() => {
          this.error = true;
        });
    },
  },
  beforeRouteUpdate(to, from, next) {
    // ...
    // console.log("beforeRouteUpdate", to);
    // console.log("f:" + from.query.kindName);
    // console.log("t:" + to.query.kindName);
    if (!this.list.length) {
      this.onLoad();
    }
    next();
  },
  created() {
    // console.log(this.$route.query.id);
    this.axios
      .get("m5/channelTags", {
        params: {
          channelId: this.kinddatasID[0],
        },
      })
      .then((res) => {
        // console.log(res);
        this.kindDatas = res.data.data;
        // this.getkinddatas(res.data.data);
      });
  },
};
</script>
<style lang="less" scoped>
.channel {
  padding-top: 58rem;
  .channel-head {
    height: 48rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    i {
      display: block;
      height: 38rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 40rem;
      img {
        display: block;
        width: 25rem;
      }
    }
    h1 {
      flex: 1;
      font-size: 16rem;
      text-align: left;
      font-weight: bold;
      padding-left: 120rem;
    }
  }
  .nav-tab {
    width: auto;
    height: 40rem;
    display: block;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    position: sticky;
    top: 58rem;
    z-index: 999;
    border-bottom: 1rem solid #eee;
    background: #fff;
    &::-webkit-scrollbar {
      display: none;
    }
    a {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.3);
      padding: 13.5rem;
      height: 40rem;
      display: inline-flex;
      justify-self: center;
      align-items: center;
      font-size: 14rem;
      &.router-link-exact-active {
        color: #000;
        position: relative;
        &::after {
          content: "";
          display: block;
          z-index: 1000;
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: -6rem;
          width: 12rem;
          height: 3rem;
          border-radius: 1.5rem;
          background: #fe5353;
        }
      }
    }
  }
}
</style>