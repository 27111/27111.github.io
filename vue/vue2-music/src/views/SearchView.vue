<template>
  <div class="search-wrap">
    <div class="search-input">
      <span @click="$emit('backroute')"></span>
      <h2
        @click="
          inputVal ? (addHistoryMusics(inputVal), getSearchData(inputVal)) : ''
        "
      >
        搜索
      </h2>
      <i class="search-icon"></i>
      <div class="search-cover">
        <input
          ref="input"
          class="search-text"
          type="text"
          placeholder="搜索你想听的歌曲"
          v-model="inputVal"
          @keyup.esc="(inputVal = ''), (searchsongs = null)"
          @keyup.enter="addHistoryMusics(inputVal), getSearchData(inputVal)"
          @focus="searchsongs = null"
        />
      </div>
      <p
        class="search-x"
        v-show="changBoolean(inputVal)"
        @click="(inputVal = ''), (searchsongs = null)"
      ></p>
    </div>
    <template v-if="!changBoolean(inputVal)">
      <ul class="history-search">
        <h3 v-if="historyMusics.length">
          历史记录
          <span @click="deleAll"></span>
        </h3>
        <HistorySearch
          v-for="historymusic in historyMusics"
          :key="historymusic.name"
          :historymusic="historymusic"
          @delehistoryMusics-SearchView-HistorySearch="delehistoryMusics"
          @changeVal-SearchView-HistorySearch="changeVal"
          @addHistoryMusics-SearchView-HistorySearch="addHistoryMusics"
        />
      </ul>
      <ul class="hotmusic-search">
        <h3 class="hot-HotSearch">
          <div class="pic"></div>
        </h3>
        <HotSearch
          v-for="(hot, index) in hotsearch"
          :key="hot.first"
          :hot="hot"
          :index="index"
          @addHistoryMusics-SearchView-HotSearch="addHistoryMusics"
          @changeVal-SearchView-HotSearch="changeVal"
        />
      </ul>
    </template>
    <template v-else-if="changBoolean(inputVal) && !searchsongs && !loading">
      <ul class="hotmusic-searchSongs">
        <h3 class="hot-HeaderSearch">搜索“{{ inputVal }}”</h3>
        <HeaderSearch
          v-for="music in searchmusic"
          :key="music.id"
          :music="music"
          @addHistoryMusics-SearchView-HeaderSearch="addHistoryMusics"
          @changeVal-SearchView-HeaderSearch="changeVal"
        />
      </ul>
    </template>
    <template v-else-if="searchsongs">
      <SearchResultHeader :optimalsearch="optimalsearch" />
      <ul class="searchResult-songs">
        <h6>
          单曲
          <div class="rs-icon">
            <i></i>
            <span>播放全部</span>
          </div>
        </h6>
        <SearchResult
          v-for="resultsong in searchsongs"
          :key="resultsong.id"
          :resultsong="resultsong"
          @click.native="
            $emit('playing-music', resultsong),
              $emit('playing-list', searchsongs)
          "
          :songId="songId"
          :playing="playing"
        />
      </ul>
    </template>
    <div class="loading" v-show="loading">
      <img src="../assets/loading.gif" alt="" />
    </div>
  </div>
</template>

<script>
import HeaderSearch from "@/components/HeaderSearch.vue";
import HotSearch from "@/components/HotSearch.vue";
import HistorySearch from "@/components/HistorySearch.vue";
import SearchResult from "@/components/SearchResult.vue";
import SearchResultHeader from "@/components/SearchResultHeader.vue";
import _ from "lodash";

export default {
  components: {
    HeaderSearch,
    HotSearch,
    HistorySearch,
    SearchResult,
    SearchResultHeader,
  },
  props: {
    songId: Number,
    playing: Boolean,
  },
  data() {
    return {
      searchmusic: [],
      hotsearch: [],
      inputVal: "",
      historyMusics: JSON.parse(localStorage.getItem("historyMusics")) || [],
      searchsongs: null,
      optimalsearch: null,
      loading: "",
    };
  },
  created() {
    this.axios.get("https://apis.netstart.cn/music/search/hot").then((res) => {
      // console.log(res);
      this.hotsearch = res.data.result.hots;
    });
    this.debouncedGetsearchmusic = _.debounce(this.gainData, 800);
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.input.focus();
    });
  },
  methods: {
    changeVal(val) {
      // console.log(val);
      this.getSearchData(val);
      this.inputVal = val;
    },
    getSearchData(value) {
      // https://apis.netstart.cn/music/cloudsearch/suggest?keywords=知足
      // https://apis.netstart.cn/music/search/multimatch?keywords=知足&type=mobile
      this.loading = true;
      this.axios
        .get("https://apis.netstart.cn/music/search/multimatch", {
          params: {
            keywords: value,
            type: "mobile",
            // limit: 6,
          },
        })
        .then((res) => {
          this.loading = false;
          console.log(res.data.result);
          this.optimalsearch = res.data.result;
        });
      this.axios
        .get("https://apis.netstart.cn/music/cloudsearch", {
          params: {
            keywords: value,
            limit: 20,
          },
        })
        .then((res) => {
          this.loading = false;
          console.log(res.data.result.songs);
          this.searchsongs = res.data.result.songs;
        });
    },
    gainData(value) {
      // console.log(value);
      this.loading = true;
      this.axios
        .get("https://apis.netstart.cn/music/search/suggest", {
          params: {
            keywords: value,
            type: "mobile",
            // limit: 6,
          },
        })
        .then((res) => {
          // console.log(res);
          // console.log(res.data.result.allMatch);
          this.loading = false;
          this.searchmusic = res.data.result.allMatch;
        });
    },
    changBoolean(val) {
      // console.log(val);
      if (val && Boolean(val.trim())) {
        return true;
      } else {
        return false;
      }
    },
    addHistoryMusics(val) {
      // console.log(this.historyMusics.length);
      // console.log(val);
      // console.log(this.historyMusics.indexOf(val));
      // console.log(this.historyMusics.findIndex((e) => e.name === val));
      if (
        val &&
        Boolean(val.trim()) &&
        // this.historyMusics.indexOf(val) === -1
        this.historyMusics.findIndex((e) => e.name === val) === -1
      ) {
        // this.historyMusics = [
        //   ...this.historyMusics,
        //   {
        //     id: this.historyMusics.length
        //       ? Math.max(...this.historyMusics.map((e) => e.id)) + 1
        //       : 1,
        //     name: val,
        //   },
        // ];
        //  在数组前面插入数据
        this.historyMusics.splice(0, 0, {
          id: this.historyMusics.length
            ? Math.max(...this.historyMusics.map((e) => e.id)) + 1
            : 1,
          name: val,
        });
        //  判断数组长度是否超过10,超过10时删除最后一个
        if (this.historyMusics.length > 10) {
          this.historyMusics.splice(
            this.historyMusics.length - 1,
            this.historyMusics.length
          );
        }
      } else {
        // console.log(this.historyMusics.findIndex((e) => e.name === val));
        // return this.historyMusics;
        //  数组元素置顶
        return this.historyMusics.unshift(
          this.historyMusics.splice(
            this.historyMusics.findIndex((e) => e.name === val),
            1
          )[0]
        );
      }
    },
    //  删除历史记录
    delehistoryMusics(id) {
      // console.log(id);
      this.historyMusics = this.historyMusics.filter((e) => e.id !== id);
    },
    deleAll() {
      return (this.historyMusics = []);
    },
  },
  watch: {
    inputVal(val) {
      // console.log("change");
      if (val && Boolean(val.trim())) {
        this.debouncedGetsearchmusic(val);
      } else {
        this.searchmusic = [];
      }
    },
    historyMusics(newVal) {
      // console.log(newVal);
      localStorage.setItem("historyMusics", JSON.stringify(newVal));
    },
  },
};
</script>

<style lang="less" scoped>
.search-wrap {
  // padding-top: 40rem;
  background-color: rgb(18, 19, 23);
  position: relative;
  .search-input {
    padding: 15rem 10rem;
    position: relative;
    text-align: center;
    span {
      display: block;
      position: absolute;
      width: 30rem;
      height: 30rem;
      background: url("../assets/icon_login_return.png") no-repeat;
      background-size: 30rem;
    }
    h2 {
      position: absolute;
      font-size: 16rem;
      text-align: center;
      line-height: 30rem;
      width: 60rem;
      height: 30rem;
      right: 0;
      color: #76e4d9;
      font-weight: bold;
    }
    &::after {
      position: absolute;
      z-index: 2;
      content: "";
      top: 0;
      left: 0;
      pointer-events: none;
      width: 100%;
      height: 100%;
      border-bottom: 1rem solid rgba(0, 0, 0, 0.1);
    }
    i {
      display: inline-block;
      position: absolute;
      margin: 0 6rem;
      top: 50%;
      transform: translateY(-50%);
      width: 18rem;
      height: 18rem;
      background-image: url("../assets/icon_home_search.png");
      background-repeat: no-repeat;
      background-position: 0 0;
      background-size: 18rem;
      z-index: 1;
    }
    .search-cover {
      position: relative;
      padding: 0 30rem;
      display: inline-block;
      width: 70%;
      height: 30rem;
      line-height: 18px;
      font-size: 14rem;
      background-color: #ffffff3b;
      border-radius: 30rem;
      .search-text {
        width: 100%;
        height: 30rem;
        line-height: 18rem;
        background: rgba(0, 0, 0, 0);
        font-size: 14rem;
        color: #fff;
        outline: 0;
        border: none;
        padding: 0;
        caret-color: #22d7c8;
        &::-webkit-input-placeholder {
          color: rgb(200, 200, 200);
        }
      }
    }
    .search-x {
      position: absolute;
      right: 70rem;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
      vertical-align: middle;
      width: 20rem;
      height: 20rem;
      background-image: url("../assets/icon_clear.png");
      background-size: 20rem;
    }
  }
  ul.hotmusic-search {
    position: relative;
    left: 5%;
    width: 90%;
    padding: 15rem 0rem 30rem 0rem;
    margin-top: 15rem;
    margin-bottom: 7rem;
    display: flex;
    flex-wrap: wrap;
    // background-color: brown;
    border-radius: 20rem;
    // background: url("../assets/medallist_head_bg.png");
    background: linear-gradient(180deg, #233237, #202125);
    h3.hot-HotSearch {
      position: relative;
      width: 100%;
      margin-bottom: 10rem;
      height: 32rem;

      .pic {
        position: absolute;
        left: 10rem;
        height: 100%;
        width: 50%;
        background: url("../assets/icon_hot_search_title.png") no-repeat;
        background-size: 100%;
      }
    }
  }
  .history-search {
    display: flex;
    flex-wrap: wrap;
    padding: 0 15rem;
    h3 {
      width: 100%;
      font-size: 18rem;
      padding: 5rem 0 15rem 5rem;
      color: #d1d2d6;
      position: relative;
      span {
        position: absolute;
        right: 0;
        width: 25rem;
        height: 25rem;
        background: url("../assets/icon_download_tab_del.png");
        background-size: 25rem;
      }
    }
  }
  ul.hotmusic-searchSongs {
    h3.hot-HeaderSearch {
      height: 50rem;
      margin-left: 10rem;
      padding-right: 10rem;
      font-size: 15rem;
      line-height: 50rem;
      color: #507daf;
      position: relative;
      &::after {
        position: absolute;
        z-index: 2;
        content: "";
        top: 0;
        left: 0;
        pointer-events: none;
        width: 100%;
        height: 100%;
        border-bottom: 1rem solid rgba(0, 0, 0, 0.1);
      }
    }
  }
  ul.searchResult-songs {
    h6 {
      width: 100%;
      // height: 45rem;
      color: #fcfffd;
      padding: 8.5rem 5%;
      font-size: 22rem;
      // line-height: 30rem;
      height: 50rem;
      display: flex;
      align-items: center;
      .rs-icon {
        // display: inline-block;
        display: flex;
        align-items: center;
        height: 70%;
        padding: 0 12rem;
        background-color: #22373a;
        border-radius: 30rem;
        margin-left: 15rem;
        i {
          // display: inline-block;
          width: 10rem;
          height: 100%;
          // background-color: #507daf;
          background: url("../assets/icon_ranking_play.png") no-repeat;
          background-size: 10rem;
          background-position: center;
          margin-right: 2rem;
        }
        span {
          // display: inline-block;
          font-size: 12rem;
          vertical-align: middle;
        }
      }
    }
  }
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    img {
      width: 30rem;
      height: 30rem;
    }
  }
}
</style>
