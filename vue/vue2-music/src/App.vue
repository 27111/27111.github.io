<template>
  <div id="app" :style="song ? 'padding-bottom: 60rem;' : ''">
    <nav v-if="$route.meta.showNav">
      <router-link to="/search">
        <i></i>
        <input class="search" placeholder="搜索你想听的歌曲" />
        <div class="ser-icon"></div>
      </router-link>
      <router-link to="/">
        <span
          v-for="(hlist, index) in headlist"
          :key="index"
          @click="hlHander(hlist)"
          :class="hl == hlist ? 'app-active' : ''"
          >{{ hlist }}</span
        >
        <!-- :class="app-active" -->
        <div class="a-icon"></div>
      </router-link>
    </nav>
    <div class="app-hswrap">
      <div class="hs-bang">
        <router-link to="/hot" v-if="$route.meta.showNav">
          <div class="hh-wrap">
            <i>热歌榜</i>
            <i></i>
            <div
              class="hs-picture"
              :style="
                this.hsmusic
                  ? `background-image: url('${hsmusic[0].al.picUrl}?imageView=1&type=webp&thumbnail=30x0');`
                  : ''
              "
            ></div>
            <ul class="hs-wrap">
              <li v-for="(hsong, index) in hsmusic" :key="index">
                <span>{{ index + 1 }}&nbsp;&nbsp;&nbsp;{{ hsong.name }}</span>
                <span>{{ hsong.ar[0].name }}</span>
              </li>
            </ul>
          </div>
        </router-link>
        <router-link to="/ou" v-if="$route.meta.showNav">
          <div class="hh-wrap">
            <i>欧美热歌榜</i>
            <i></i>
            <div
              class="hs-picture"
              :style="
                this.oumusic
                  ? `background-image: url('${oumusic[0].al.picUrl}?imageView=1&type=webp&thumbnail=30x0');`
                  : ''
              "
            ></div>
            <ul class="hs-wrap">
              <li v-for="(hsong, index) in oumusic" :key="index">
                <span>{{ index + 1 }}&nbsp;&nbsp;&nbsp;{{ hsong.name }}</span>
                <span>{{ hsong.ar[0].name }}</span>
              </li>
            </ul>
          </div>
        </router-link>
        <router-link to="/xin" v-if="$route.meta.showNav">
          <div class="hh-wrap">
            <i>新歌榜</i>
            <i></i>
            <div
              class="hs-picture"
              :style="
                this.xinmusic
                  ? `background-image: url('${xinmusic[0].al.picUrl}?imageView=1&type=webp&thumbnail=30x0');`
                  : ''
              "
            ></div>
            <ul class="hs-wrap">
              <li v-for="(hsong, index) in xinmusic" :key="index">
                <span>{{ index + 1 }}&nbsp;&nbsp;&nbsp;{{ hsong.name }}</span>
                <span>{{ hsong.ar[0].name }}</span>
              </li>
            </ul>
          </div>
        </router-link>
        <router-link to="/biao" v-if="$route.meta.showNav">
          <div class="hh-wrap">
            <i>飙升榜</i>
            <i></i>
            <div
              class="hs-picture"
              :style="
                this.biaomusic
                  ? `background-image: url('${biaomusic[0].al.picUrl}?imageView=1&type=webp&thumbnail=30x0');`
                  : ''
              "
            ></div>
            <ul class="hs-wrap">
              <li v-for="(hsong, index) in biaomusic" :key="index">
                <span>{{ index + 1 }}&nbsp;&nbsp;&nbsp;{{ hsong.name }}</span>
                <span>{{ hsong.ar[0].name }}</span>
              </li>
            </ul>
          </div>
        </router-link>
      </div>
    </div>
    <router-view
      v-if="!showpage"
      @playing-music="song = $event"
      @playing-list="playsonglist = $event"
      :songId="song?.id"
      :playing="playing"
      @backroute="backroute"
    />
    <audio
      :src="songSrc"
      autoplay
      ref="audio"
      @play="playing = true"
      @pause="playing = false"
      @durationchange="duration = $event.target.duration"
      @timeupdate="currentTime = $event.target.currentTime"
      @ended="changeMusic('next')"
    ></audio>
    <PlayBar
      v-if="song"
      :song="song"
      :playing="playing"
      :duration="duration"
      :currentTime="currentTime"
      @play-song="playing = !playing"
      @playcontrol-music="playcontrol"
      @click.native="showpage = true"
      @change-showPlaySongList="showPlaySongList = true"
    />
    <PlayPage
      v-if="showpage"
      :showpage="showpage"
      @close-playpage="showpage = false"
      :song="song"
      :duration="duration"
      :currentTime="currentTime"
      @update-time="$refs.audio.currentTime = $event"
      :playing="playing"
      @play-song="playing = !playing"
      @playcontrol-music="playcontrol"
      @change-showPlaySongList="showPlaySongList = true"
      :showOne="showOne"
      @changeshowOne="showOne = !showOne"
      @music-change="changeMusic"
      @changeMode="changeMode"
      :model="model"
    />
    <PlaySongList
      v-if="showPlaySongList"
      @playing-music="song = $event"
      @click.native="showPlaySongList = false"
      :style="showpage ? 'height: 100vh;' : 'height: 100%;'"
      :playsonglist="playsonglist"
      :songId="song?.id"
      :playing="playing"
    />
  </div>
</template>

<script>
// PlayBar
import PlayBar from "@/components/playview/PlayBar.vue";
import PlayPage from "@/components/playview/PlayPage.vue";
import PlaySongList from "@/components/playview/PlaySongList.vue";

export default {
  components: {
    PlayBar,
    PlayPage,
    PlaySongList,
  },
  data() {
    return {
      song: JSON.parse(localStorage.getItem("song")),
      playing: false,
      duration: Number(localStorage.getItem("duration")) || 0,
      currentTime: Number(localStorage.getItem("currentTime")) || 0,
      showpage: false,
      showPlaySongList: false,
      showOne: true,
      playsonglist: JSON.parse(localStorage.getItem("playsonglist")) || [],
      models: ["顺序", "随机", "单曲循环"],
      //   "列表循环"
      model: localStorage.getItem("model") || "顺序",
      headlist: ["推荐", "歌单", "流行", "网红", "古风"],
      hl: "推荐",
      hsmusic: null,
      oumusic: null,
      xinmusic: null,
      biaomusic: null,
    };
  },
  created() {
    this.axios
      .get("https://apis.netstart.cn/music/playlist/track/all?id=3778678", {
        params: { limit: 3 },
      })
      .then((res) => {
        // console.log(res.data.songs[0].ar[0].name);
        // console.log(res.data.songs[0].al.name);
        // console.log(res.data.playlist.tracks[0]);
        // console.log(res.data.songs[0]);
        this.hsmusic = res.data.songs;
        // console.log(this.hsmusic);
      });
    this.axios
      .get("https://apis.netstart.cn/music/playlist/track/all?id=2809513713", {
        params: { limit: 3 },
      })
      .then((res) => {
        // console.log(res.data.songs[0].ar[0].name);
        // console.log(res.data.songs[0].al.name);
        // console.log(res.data.playlist.tracks[0]);
        // console.log(res.data.songs[0]);
        this.oumusic = res.data.songs;
        // console.log(this.oumusic);
      });
    this.axios
      .get("https://apis.netstart.cn/music/playlist/track/all?id=3779629", {
        params: { limit: 3 },
      })
      .then((res) => {
        // console.log(res.data.songs[0].ar[0].name);
        // console.log(res.data.songs[0].al.name);
        // console.log(res.data.playlist.tracks[0]);
        // console.log(res.data.songs[0]);
        this.xinmusic = res.data.songs;
        console.log(this.xinmusic);
      });
    this.axios
      .get("https://apis.netstart.cn/music/playlist/track/all?id=19723756", {
        params: { limit: 3 },
      })
      .then((res) => {
        // console.log(res.data.songs[0].ar[0].name);
        // console.log(res.data.songs[0].al.name);
        // console.log(res.data.playlist.tracks[0]);
        // console.log(res.data.songs[0]);
        this.biaomusic = res.data.songs;
        // console.log(this.biaomusic);
      });
  },
  computed: {
    songSrc: function () {
      return this.song
        ? `https://music.163.com/song/media/outer/url?id=${this.song.id}.mp3`
        : null;
    },
  },
  methods: {
    hanxx() {
      console.log("xxx");
    },
    hlHander(o) {
      return (this.hl = o);
    },
    playcontrol() {
      // console.log(this.$refs.audio);
      if (this.playing) {
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
      }
    },
    backroute() {
      this.$router.replace("/");
    },
    toroute() {
      this.$router.to("/hot");
    },
    changeMusic(direction) {
      // console.log(direction);
      switch (this.model) {
        case "顺序":
          var playingIndex = this.playsonglist.findIndex(
            (e) => e.id === this.song.id
          );
          if (direction === "next") {
            this.song =
              playingIndex === this.playsonglist.length - 1
                ? this.playsonglist[0]
                : this.playsonglist[playingIndex + 1];
          } else {
            this.song =
              playingIndex === 0
                ? this.playsonglist[this.playsonglist.length - 1]
                : this.playsonglist[playingIndex - 1];
          }
          break;
        case "随机":
          var stochasticList = this.playsonglist.filter(
            (e) => e.id !== this.playsonglist.id
          );
          this.song =
            stochasticList[Math.floor(Math.random() * stochasticList.length)];
          break;
        case "单曲循环":
          this.$refs.audio.currentTime = 0;
          this.$refs.audio.play();
          break;
        // case "列表循环":
        //   break;
      }
    },
    changeMode() {
      var modeIndex = this.models.findIndex((e) => e === this.model);
      this.model =
        modeIndex === this.models.length - 1
          ? this.models[0]
          : this.models[modeIndex + 1];
    },
  },
  mounted() {
    this.$refs.audio.currentTime = this.currentTime;
  },
  watch: {
    song(song) {
      localStorage.setItem("song", JSON.stringify(song));
    },
    playsonglist(playsonglist) {
      localStorage.setItem("playsonglist", JSON.stringify(playsonglist));
    },
    currentTime(currentTime) {
      localStorage.setItem("currentTime", JSON.stringify(currentTime));
    },
    duration(duration) {
      localStorage.setItem("duration", JSON.stringify(duration));
    },
    model(model) {
      localStorage.setItem("model", model);
    },
  },
};
</script>

<style lang="less">
body {
  // overflow: hidden
}
#app {
  // overflow-y: scroll;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  // background: url("./assets/add_outer_friend_bg_.png");
  background-repeat: no-repeat;
  background-size: cover;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(18, 19, 23);
    z-index: -9;
  }
}

nav {
  position: fixed;
  // display: flex;
  width: 100%;
  background: linear-gradient(
    180deg,
    #1c7d89,
    rgb(18, 19, 23) 60%,
    rgb(18, 19, 23) 100%
  );
  background-size: cover;
  z-index: 10;
  // justify-content: space-around;
  // box-shadow: 0 0 2rem 0px rgb(208, 208, 208);
  padding: 15rem 0;
  a {
    // width: 33.33%;
    display: block;
    color: #cdd1d1;
    font-size: 15rem;
    text-decoration: none;
    // height: 40rem;
    // line-height: 40rem;
    padding: 0 15rem;
    text-decoration: none;
    // text-align: center;
    margin-top: 10rem;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    &:nth-of-type(2) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        display: inline-block;
        height: 40rem;
        line-height: 40rem;
        color: #cdd1d1;
      }
      .a-icon {
        width: 30rem;
        height: 30rem;
        background: url("./assets/icon_home_category.png");
        background-size: 30rem;
      }
    }
    &.router-link-exact-active:nth-of-type(2) {
      color: #fff;
      span.app-active {
        color: #fff;
        border-bottom: 3rem solid #22d7c8;
      }
    }
    &:nth-of-type(1) {
      i {
        display: block;
        position: absolute;
        width: 30rem;
        height: 30rem;
        background: url("./assets/icon_home_search.png") no-repeat;
        background-size: 20rem;
        background-position: center;
      }
      .ser-icon {
        position: absolute;
        top: 0;
        right: 0;
        width: 30rem;
        height: 30rem;
        background: url("./assets/icon_know_song_entry.png") no-repeat;
        background-size: 30rem;
        background-position: center;
        margin-right: 15rem;
      }
      .search {
        width: 90%;
        height: 30rem;
        line-height: 18rem;
        background: rgba(0, 0, 0, 0.3);
        font-size: 14rem;
        color: #333;
        outline: 0;
        border: none;
        padding: 0;
        border-radius: 30rem;
        padding-left: 30rem;
        &::-webkit-input-placeholder {
          color: rgb(200, 200, 200);
        }
      }
    }
  }
}
.app-hswrap {
  position: absolute;
  width: 100vw;
  overflow-y: scroll;
  // padding-top: 125rem;
  top: 120rem;
  // position: relative;
  &::-webkit-scrollbar {
    display: none;
  }

  .hs-bang {
    // position: absolute;
    width: 270%;
    display: flex;
    justify-content: space-between;
    padding: 0 9rem;
    // top: 125rem;
    // z-index: 3;
    // display: inline-block;
    // white-space: nowrap;
    // overflow-y: auto;
    // left: 50%;
    // transform: translateX(-50%);
    // float: left;
    a {
      display: block;
      text-decoration: none;
      width: 240rem;
      // float: left;
      // padding-left: 9rem;
      .hh-wrap {
        position: absolute;
        width: 100%;
        height: 160rem;
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        border-radius: 10rem 25rem 10rem 10rem;
        position: relative;
        color: #000403;
        i:nth-of-type(1) {
          display: block;
          font-style: normal;
          position: absolute;
          top: 10rem;
          left: 10rem;
          font-size: 16rem;
          // transform: translateY(-50%);
          font-weight: bold;
        }
        i:nth-of-type(2) {
          display: block;
          width: 20rem;
          height: 20rem;
          background: url("./assets/icon_back_arrow.png") no-repeat;
          background-size: 20rem;
          position: absolute;
          top: 12rem;
          left: 55rem;
          transform: rotate(180deg);
          // transform: translateY(-45%);
        }
        .hs-picture {
          position: absolute;
          right: 10rem;
          width: 50rem;
          height: 50rem;
          // background: url("./assets/image_cover_10.png") no-repeat;
          background-repeat: no-repeat;
          background-size: 50rem;
          top: 10rem;
          border-radius: 50%;
          // transform: translateY(-50%);
          &::after {
            position: absolute;
            width: 100%;
            height: 100%;
            content: "";
            background: url("./assets/icon_confession_res_play.png") no-repeat;
            background-size: cover;
          }
        }
        .hs-wrap {
          font-size: 13rem;
          width: 75%;
          position: absolute;
          left: 10rem;
          top: 32rem;
          li {
            padding: 5rem 0;
            span {
              display: block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-break: normal;
              font-weight: bold;
              color: #060309;
              &:nth-of-type(2) {
                font-size: 10px;
                padding-left: 18rem;
                color: #91855b;
                font-weight: 100;
              }
            }
          }
        }
      }
      &:nth-of-type(1) .hh-wrap {
        background-image: url("./assets/img_ranking_fixed_0.png");
      }
      &:nth-of-type(2n) .hh-wrap {
        background-image: url("./assets/img_ranking_fixed_1.png");
      }
      &:nth-of-type(2) .hh-wrap {
        i:nth-of-type(2) {
          left: 85rem;
        }
      }
      &:nth-of-type(3) .hh-wrap {
        background-image: url("./assets/img_ranking_fixed_2.png");
      }
    }
  }
}
</style>
