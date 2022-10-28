<template>
  <div class="home">
    <ul class="navlist" v-if="navdataslice">
      <h3>听世界</h3>
      <li
        v-for="(navdata, index) in navdataslice"
        :key="navdata.channelId"
        v-show="index <= showli"
        @click="
          $router.push({
            path: '/channel',
            query: { id: navdata.channelId },
          });
          getkinddatas({
            id: navdata.channelId,
            text: navdata.channelName,
            type: navdata.sceneCode,
          });
        "
      >
        <img
          :src="`${navdata.channelUrl}?imageView=1&type=webp&thumbnail=55x0`"
          alt=""
        />
        <span>{{ navdata.channelName }}</span>
      </li>
      <div
        class="more"
        @click="showli == 8 ? (showli = navdataslice.length - 1) : (showli = 8)"
      >
        <img :src="showli == 8 ? moreimg : retractimg" alt="" />
        <span>{{ showli == 8 ? "更多" : "收起" }}</span>
      </div>
    </ul>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <HomeItem v-for="(item, index) in list" :key="index" :item="item" />
    </van-list>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapMutations } from "vuex";
import { mapMutations, mapGetters } from "vuex";
import HomeItem from "@/components/HomeItem.vue";

export default {
  name: "HomeView",
  components: {
    HomeItem,
  },
  data() {
    return {
      // navdataslice: null,
      showli: 8,
      moreimg: require("../assets/arrowbottom.png"),
      retractimg: require("../assets/arrowtop.png"),
      list: [],
      loading: false,
      finished: false,
      error: false,
      totle: 0,
    };
  },
  methods: {
    ...mapMutations(["getnavdatas", "getkinddatas"]),
    onLoad() {
      this.totle += 6;
      this.axios
        .post("playSheetRecommend/recommend")
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
    XXX(n) {
      console.log(n);
    },
  },
  created() {
    this.axios.get("m5/channel").then((res) => {
      // console.log(res.data.data);
      // this.navdataslice = res.data.data.slice(1);
      this.getnavdatas(res.data.data);
      // console.log(this.navdataslice);
    });
    // this.axios.post("playSheetRecommend/recommend").then((res) => {
    //   console.log(res);
    // });
    // this.axios
    //   .get("m5/channelTags", {
    //     params: {
    //       channelId: 24229794402533424,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
  },
  computed: {
    ...mapGetters(["navdataslice"]),
  },
};
</script>
<style lang="less" scoped>
.home {
  padding-top: 58rem;
  // height: 100vh;
  .navlist {
    display: flex;
    flex-wrap: wrap;
    h3 {
      width: 100%;
      height: 56rem;
      padding: 14rem 16rem 0;
      font-size: 21rem;
      font-weight: bold;
      display: flex;
      align-items: center;
    }
    li {
      width: 74.5rem;
      height: 74.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 55rem;
      }
      &:last-of-type {
        img {
          width: 30rem;
        }
      }
    }
    .more {
      width: 74.5rem;
      height: 74.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 30rem;
      }
    }
  }
}
</style>
