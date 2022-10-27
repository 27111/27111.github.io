<template>
  <div id="app">
    <header class="header">
      <img src="./assets/logo.png" alt="" class="head-logo" />
      <div class="text-wrap">
        <img src="./assets/lizhi.png" alt="" class="text-pic" />
        <p>超两亿年轻用户都在玩的声音APP</p>
      </div>
      <div class="head-btn">下载APP</div>
    </header>
    <nav>
      <!-- <router-link to="/about">About</router-link> -->
    </nav>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <router-link to="/"></router-link>
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
    <audio
      :src="playvoice?.voiceTrack || playvoice?.voicePlayProperty?.trackUrl || playvoice?.userVoice.voicePlayProperty.trackUrl"
      autoplay ref="audio" @durationchange="getduration($event.target.duration)"
      @timeupdate="getcurrentTime($event.target.currentTime)" @play="playtrue" @pause="playfalse"
      @ended="changeVoice('next')"></audio>
    <!-- @pause="playfalse" -->
    <!-- // @durationchange="duration = $event.target.duration"
    //   @timeupdate="currentTime = $event.target.currentTime" -->
    <div class="play_global" v-if="playvoice && $route.meta.showbar" @click="
      $router.push({
        path: '/playing',
        query:{id:playvoice?.voiceId || playvoice?.voiceInfo.voiceId},
      })
    ">
      <img :src="playvoice.cover || playvoice.voiceInfo.imageUrl" alt="" :class="playing ? 'imgrotate-play' : ''" />
    </div>
  </div>
</template>
<script>
// import qs from "qs";
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["playvoice", "playing", "duration", "currentTime"]),
  },
  methods: {
    ...mapMutations([
      "getduration",
      "getcurrentTime",
      "playcontrol",
      "playtrue",
      "playfalse",
      "changeVoice",
    ]),
    playcontrol(playing) {
      // this.$refs.audio.load();
      var playobj = this.$refs.audio.play();
      if (playing && playobj) {
        playobj
          .then(() => {
            this.$refs.audio.play();
          })
          .catch(() => {
            console.log("等待加载!!!");
          });
      } else {
        this.$refs.audio.pause();
      }
    },
  },
  watch: {
    playing(playing) {
      // console.log(playing);
      if (this.currentTime !== this.duration) {
        this.playcontrol(playing);
      }
    },
  },
  created() {
    // this.axios
    //   .get("m5/program", {
    //     params: {
    //       page: 1,
    //       label: "恋爱故事",
    //       count: 30,
    //       sort: "smart",
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
  },
  mounted() {
    this.$refs.audio.currentTime = this.currentTime;
  },
};
</script>


<style lang="less" scoped>
html,
body {
  max-width: 100%;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;

  // height: 500vh;
  .header {
    width: 100%;
    height: 58rem;
    padding: 6rem 16rem;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 999;
    background: #fff;

    .head-logo {
      display: block;
      width: 40rem;
      height: 40rem;
    }

    .text-wrap {
      text-align: left;
      flex: 1;
      margin-left: 10rem;

      .text-pic {
        padding-top: 5rem;
        width: 38rem;
        height: 20rem;
      }

      p {
        font-size: 13rem;
        color: rgba(0, 0, 0, 0.4);
        padding-top: 5rem;
        line-height: 1.38;
      }
    }

    .head-btn {
      width: 71rem;
      height: 34rem;
      font-size: 11rem;
      box-shadow: 0 2rem 4rem 0 rgb(255 98 98 / 30%);
      background: #fe5353;
      color: #fff;
      border-radius: 17rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      animation: btnrotate 2s infinite both;

      @keyframes btnrotate {
        0% {
          transform: rotate(0);
        }

        10%,
        20% {
          transform: rotate(-3deg);
        }

        30%,
        50%,
        70%,
        90% {
          transform: rotate(3deg);
        }

        40%,
        60%,
        80% {
          transform: rotate(-3deg);
        }

        100% {
          transform: rotate(0);
        }
      }
    }

    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: 0 2rem 4rem 0 rgba(0, 0, 0, 0.05);
      pointer-events: none;
    }
  }

  .play_global {
    position: fixed;
    bottom: 10rem;
    left: 10rem;
    width: 61.5rem;
    height: 61.5rem;
    z-index: 999;
    background: #fff;
    border-radius: 50%;
    box-shadow: 2rem 2rem 10rem 0 rgba(0, 0, 0, 0.3);

    img {
      position: absolute;
      top: 3%;
      left: 3%;
      width: 94%;
      height: 94%;
      border-radius: 50%;
      overflow: hidden;
      animation: imgrotate 8s infinite linear;
      animation-play-state: paused;

      &.imgrotate-play {
        animation-play-state: running;
      }
    }
  }
}

// nav {
//   padding-top: 58rem;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
<style>
@keyframes imgrotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
