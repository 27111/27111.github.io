<template>
  <div class="hotMusic">
    <i class="hotMusic-icon" @click="$emit('backroute')"></i>
    <div class="hot-top">
      <div class="hot-top-wrap">
        <div class="hot-musicbang">新歌榜</div>
        <div class="hot-time">更新日期：</div>
      </div>
    </div>
    <ul class="hot-list">
      <h6>
        <div
          class="all-wrap"
          @click="
            $emit('playing-music', hotmusics[0]),
              $emit('playing-list', hotmusics)
          "
        >
          <div class="all-btn"></div>
          <span>播放全部</span>
        </div>
        <i></i>
      </h6>
      <XinMusic
        v-for="(hotmusic, index) in hotmusics"
        :key="hotmusic.id"
        :hotmusic="hotmusic"
        :index="index"
        @click.native="
          $emit('playing-music', hotmusic), $emit('playing-list', hotmusics)
        "
        :songId="songId"
        :playing="playing"
      />
      <div class="hot-allmusic">
        <span class="hot-all-bang">查看完整榜单</span>
      </div>
    </ul>
  </div>
</template>

<script>
import XinMusic from "@/components/XinMusic.vue";

export default {
  components: {
    XinMusic,
  },
  props: {
    songId: Number,
    playing: Boolean,
  },
  data() {
    return {
      hotmusics: [],
    };
  },
  created() {
    this.axios
      .get("https://apis.netstart.cn/music/playlist/track/all?id=3779629", {
        params: { limit: 20 },
      })
      .then((res) => {
        // console.log(res.data.songs[0].ar[0].name);
        // console.log(res.data.songs[0].al.name);
        // console.log(res.data.playlist.tracks[0]);
        // console.log(res.data.songs[0]);
        this.hotmusics = res.data.songs;
        // console.log(this.hotmusics);
      });
  },
};
</script>

<style lang="less" scoped>
.hotMusic {
  position: relative;
  // padding-top: 40rem;
  .hotMusic-icon {
    position: absolute;
    top: 20rem;
    left: 20rem;
    width: 30rem;
    height: 30rem;
    background-color: rgb(18, 19, 23);
    background: url("../assets/icon_login_return.png") no-repeat;
    background-size: 30rem;
    z-index: 3;
  }
  .hot-top {
    position: relative;
    padding-top: 60%;
    // overflow: hidden;
    &::after {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 300rem;
      // background-color: #000;
      z-index: -1;
      background: url("../assets/img_new_bk.png") no-repeat;
      background-position: bottom;
      background-size: cover;
    }
    .hot-top-wrap {
      display: flex;
      justify-content: center;
      position: absolute;
      flex-direction: column;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 2;
      padding-left: 20px;
      box-sizing: border-box;
      .hot-musicbang {
        width: 100%;
        height: 50rem;
        font-size: 40rem;
        font-weight: bold;
        color: #ffffff;
        letter-spacing: 2rem;
      }
      .hot-time {
        margin-top: 10rem;
        color: hsla(0, 0%, 100%, 0.8);
        font-size: 12rem;
        transform: scale(0.91);
        transform-origin: left top;
      }
    }
  }
  .hot-list {
    background: linear-gradient(180deg, #240c56, rgb(18, 19, 23) 30%);
    border-radius: 20rem 20rem 0 0;
    overflow: hidden;
    h6 {
      width: 100%;
      height: 55rem;
      display: flex;
      // justify-content: center;
      align-items: center;
      justify-content: space-between;
      padding-left: 10rem;
      .all-wrap {
        width: 160rem;
        height: 35rem;
        background-color: #5f46a4;
        border-radius: 40rem;
        padding: 5rem 5rem;
        font-size: 0;
        display: flex;
        align-items: center;
        .all-btn {
          display: inline-block;
          width: 25rem;
          height: 25rem;
          background: url("../assets/icon_play.png") no-repeat;
          background-size: 25rem;
        }
        span {
          display: inline-block;
          font-size: 16rem;
          margin-left: 10rem;
          font-weight: bold;
          color: #fff;
        }
      }
      i {
        display: block;
        margin-right: 5rem;
        width: 35rem;
        height: 35rem;
        background: url("../assets/icon_listc.png") no-repeat;
        background-size: 35rem;
      }
    }
    .hot-allmusic {
      height: 55rem;
      line-height: 55rem;
      text-align: center;
      span.hot-all-bang {
        display: inline-block;
        font-size: 14rem;
        color: #999;
        padding-right: 14rem;
        background: url("../assets/下载 (1).svg") 100% no-repeat;
        background-size: 7rem 12rem;
      }
    }
  }
}
</style>
