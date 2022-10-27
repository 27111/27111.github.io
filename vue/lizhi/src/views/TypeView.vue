<template>
  <div class="type">
    <div class="typehead">
      <span
        v-for="kind in filterTypes"
        :key="kind.type"
        @click="(filtertype = kind.type), savetype(filtertype)"
        :style="filtertype == kind.type ? 'color:#fe5353;' : ''"
        >{{ kind.text }}</span
      >
    </div>
    <!-- @load="onLoad($route.query.kindName, filtertype)" -->
    <ul class="typelist">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :immediate-check="false"
        @load="onLoad($route.query.kindName, filtertype)"
      >
        <TypeList
          v-for="(typedata, index) in typedatas"
          :key="index"
          :typedata="typedata"
          @click.native="
            see(typedata);
            getPlayList(typedatas);
            getPlayVoice(typedata);
            toggleplaying();
          "
        ></TypeList>
      </van-list>
    </ul>
  </div>
</template>

<script>
import TypeList from "@/components/TypeList.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    TypeList,
  },
  data() {
    return {
      // filterTypes: ["smart", "playCount", "uploadTime"],
      filterTypes: [
        { type: "smart", text: "智能排序" },
        { type: "playCount", text: "最多收听" },
        { type: "uploadTime", text: "最新上传" },
      ],
      filtertype: JSON.parse(localStorage.getItem("filtertype")) || "smart",
      typedatas: [],
      page: 0,
      loading: false,
      finished: false,
      error: false,
      totle: 0,
    };
  },
  methods: {
    ...mapMutations(["getPlayList", "getPlayVoice", "toggleplaying"]),
    see(x) {
      console.log(x);
    },
    savetype(type) {
      // console.log(type);
      localStorage.setItem("filtertype", JSON.stringify(type));
    },
    getType(text, type) {
      this.page = 1;
      this.totle = 20;
      this.finished = false;
      this.axios
        .get("m5/program", {
          params: {
            label: text,
            sort: type,
            page: 0,
            count: 30,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          this.typedatas = res.data.data;
        });
    },
    onLoad(text, type) {
      // if (this.typedatas.length == this.totle) {
      //   this.finished = true;
      // }
      this.page++;
      this.axios
        .get("m5/program", {
          params: {
            label: text,
            sort: type,
            page: this.page,
            count: 30,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          this.totle += res.data.data.length;
          this.typedatas = [...this.typedatas, ...res.data.data];
          // if (this.typedatas.length > this.totle) {
          //   this.finished = true;
          // }
          // console.log();
          if (!res.data.data.length) {
            this.finished = true;
          }
          this.loading = false;
        })
        .catch(() => {
          this.error = true;
        });
      // this.axios
      //   .post("playSheetRecommend/recommend")
      //   .then((res) => {
      //     // console.log(res.data.data);
      //     this.list = [...this.list, ...res.data.data.cardPlayBeanList];
      //     if (this.list.length > this.totle) {
      //       this.finished = true;
      //     }
      //     this.loading = false;
      //   })
      //   .catch(() => {
      //     this.error = true;
      //   });
    },
  },
  created() {
    // console.log(this.$route.query.kindName);
    // this.getType(this.$route.query.kindName, this.filtertype);
    this.onLoad(this.$route.query.kindName, this.filtertype);
  },
  beforeRouteUpdate(to, from, next) {
    // ...
    // console.log("beforeRouteUpdate", to);
    // console.log("f:" + from.query.kindName);
    // console.log("t:" + to.query.kindName);
    this.getType(to.query.kindName, this.filtertype);
    // this.onLoad(to.query.kindName, this.filtertype);
    next();
  },
  watch: {
    filtertype(filtertype) {
      this.getType(this.$route.query.kindName, filtertype);
      // this.onLoad(this.$route.query.kindName, filtertype);
    },
  },
};
</script>

<style lang="less" scoped>
.type {
  .typehead {
    height: 44rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      font-size: 12rem;
      width: 80rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(0, 0, 0, 0.3);
      &:nth-of-type(2) {
        border-left: 1px solid #e1e1e1;
        border-right: 1px solid #e1e1e1;
      }
    }
  }
  // .typelist {
  // }
}
</style>