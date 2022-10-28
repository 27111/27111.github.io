<template>
  <div class="artistInfo" v-if="artistInfo">
    <ArtisInfo :artistInfo="artistInfo" :fanData="fanData" />
    <h2>歌手简介</h2>
    <div class="artist-describe">
      <p class="ar-info" v-if="!showFull">{{ artistInfo?.briefDesc }}</p>
      <p class="full-info" v-if="showFull">{{ artistInfo?.briefDesc }}</p>
      <div class="ar-full" v-if="!showFull" @click="showFull = !showFull">
        完整歌手介绍
        <i class="ar-icon"></i>
      </div>
      <div class="ar-full" v-if="showFull" @click="showFull = !showFull">
        收起
        <i class="re-icon"></i>
      </div>
    </div>
    <section class="hot-singlesongs">
      <h2>热门单曲</h2>
      <ul class="hot-singlesongs-list"></ul>
      <HotSingleSongs
        v-for="(singlesong, index) in artistHotMusic"
        :key="singlesong.id"
        :singlesong="singlesong"
        :index="index"
        @click.native="
          $emit('playing-music', singlesong),
            $emit('playing-list', artistHotMusic)
        "
        :songId="songId"
        :playing="playing"
      />
      <!-- HotSingleSongs -->
    </section>
  </div>
</template>

<script>
import ArtisInfo from "@/components/artistView/ArtisInfo.vue";
import HotSingleSongs from "@/components/artistView/HotSingleSongs.vue";

export default {
  components: {
    ArtisInfo,
    HotSingleSongs,
  },
  props: {
    songId: Number,
    playing: Boolean,
  },
  data() {
    return {
      artistInfo: null,
      artistHotMusic: null,
      fanData: null,
      // artistRank: null,
      showFull: false,
    };
  },
  methods: {
    getArtist: function (id) {
      // this.axios
      //   .get("https://apis.netstart.cn/music/artists", {
      //     params: { id },
      //   })
      //   .then((res) => {
      //     this.artistInfo = res.data.artist;
      //     this.artistHotMusic = res.data.hotSongs;
      //   });
      // this.axios
      //   .get("https://apis.netstart.cn/music/artist/follow/count", {
      //     params: { id },
      //   })
      //   .then((res) => {
      //     console.log(res);
      //     this.fanNum = res.data.fansCnt;
      //   });
      // this.axios
      //   .get("https://apis.netstart.cn/music/toplist/artist", {
      //     params: { type: 4 },
      //   })
      //   .then((res) => {
      //     console.log(res);
      //   });
      Promise.all([
        this.axios.get("https://apis.netstart.cn/music/artist/top/song", {
          params: { id },
        }),
        this.axios.get("https://apis.netstart.cn/music/artist/follow/count", {
          params: { id },
        }),
        this.axios.get("https://apis.netstart.cn/music/artist/detail", {
          params: { id },
        }),
      ]).then(([res1, res2, res3]) => {
        // console.log(res1.data.songs);
        // console.log(res2);
        // console.log(res3.data.data.artist);
        this.artistInfo = res3.data.data.artist;
        this.artistHotMusic = res1.data.songs;
        this.fanData = res2.data.data;
      });
    },
  },
  created() {
    this.getArtist(this.$route.query.id);
  },
  // beforeRouteEnter(to, from, next) {
  //   next((vm) => {
  //     vm.getArtist(to.query.id);
  //   });
  // },
};
</script>

<style lang="less" scoped>
.artistInfo {
  background-color: #fff;
  h2 {
    position: relative;
    font-size: 18rem;
    z-index: 2;
    margin-top: -5rem;
    padding: 15rem;
    background: #fff;
    font-weight: 700;
  }
  .artist-describe {
    background: #fff;
    padding: 0 16rem 18rem;
    p.ar-info {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      color: #666;
      font-size: 14rem;
    }
    p.full-info {
      color: #666;
      font-size: 14rem;
    }
    .ar-full {
      font-size: 14rem;
      color: #666;
      text-align: center;
      margin-top: 25rem;
      i {
        font-size: 14rem;
      }
      i.ar-icon {
        font-style: normal;
        display: inline-block;
        position: relative;
        width: 9rem;
        height: 9rem;
        background: url("../assets/下三角标.png");
        background-size: contain;
        background-repeat: no-repeat;
        left: 4rem;
        top: 0;
      }
      i.re-icon {
        font-style: normal;
        display: inline-block;
        position: relative;
        background: url("../assets/下三角标.png");
        background-size: contain;
        background-repeat: no-repeat;
        top: 0;
        transform: rotate(180deg);
        width: 12rem;
        height: 12rem;
      }
    }
  }
  .hot-singlesongs {
    h2 {
      margin-top: 8rem;
    }
  }
}
</style>