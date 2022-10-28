<template>
  <section class="playpage">
    <template v-if="song.song">
      <header class="playpage-head">
        <span @click="$emit('close-playpage')"></span>
        <div class="songinfo">
          <div class="songname active">{{ song.name }}</div>
          <div class="singer active">{{ song.song.artists[0].name }}</div>
        </div>
      </header>
      <template>
        <PlayDisc
          v-if="showOne"
          :song="song"
          :playing="playing"
          @click.native="$emit('changeshowOne')"
        />
        <PlayLyric
          v-if="!showOne"
          @click.native="$emit('changeshowOne')"
          :song="song"
          :currentTime="currentTime"
          :showOne="showOne"
          :duration="duration"
          :playing="playing"
        />
      </template>
      <footer class="playpage-foot">
        <div class="footer-wrap">
          <!-- <div class="playbar">
            <span>{{ playtime }}</span>
            <span>{{ finishtime }}</span> -->
          <!-- <label class="bar">
              <input
                type="range"
                class="barcorl"
                min="0"
                :max="duration"
                :value="changeTime"
                @input="
                  (draping = true), updateBar($event.target.value, duration)
                "
                @change="
                  (draping = false), $emit('update-time', $event.target.value)
                "
              />
              <div class="barcontrol" ref="barcontrol"></div>
            </label> -->
          <PlaySongBar
            :duration="duration"
            :currentTime="currentTime"
            @update-time="$emit('update-time', $event)"
          />
          <!-- </div> -->
          <div class="control">
            <!-- models: ["顺序", "随机", "单曲循环"], -->
            <span
              :class="
                model == '顺序'
                  ? 'playmode'
                  : model == '随机'
                  ? 'playmode-suiji'
                  : 'playmode-xunhuan'
              "
              @click="$emit('changeMode')"
            ></span>
            <span class="prev" @click="$emit('music-change', 'prev')"></span>
            <span
              :class="
                playing === true
                  ? 'playbtn playbtn-play'
                  : 'playbtn playbtn-pause'
              "
              @click.stop="$emit('play-song'), $emit('playcontrol-music')"
            ></span>
            <span class="next" @click="$emit('music-change', 'next')"></span>
            <div
              class="playlist"
              @click.stop="$emit('change-showPlaySongList')"
            >
              <span></span>
            </div>
          </div>
        </div>
      </footer>
    </template>
    <template v-else>
      <header class="playpage-head">
        <span @click="$emit('close-playpage')"></span>
        <div class="songinfo">
          <div class="songname active">{{ song.name }}</div>
          <div class="singer active">{{ song.ar[0].name }}</div>
        </div>
      </header>
      <template>
        <PlayDisc
          v-if="showOne"
          :song="song"
          :playing="playing"
          @click.native="$emit('changeshowOne')"
        />
        <PlayLyric
          v-if="!showOne"
          @click.native="$emit('changeshowOne')"
          :song="song"
          :currentTime="currentTime"
          :showOne="showOne"
          :duration="duration"
          :playing="playing"
        />
      </template>
      <footer class="playpage-foot">
        <div class="footer-wrap">
          <!-- <div class="playbar">
            <span>{{ playtime }}</span>
            <span>{{ finishtime }}</span> -->
          <!-- <label class="bar">
              <input
                type="range"
                class="barcorl"
                min="0"
                :max="duration"
                :value="changeTime"
                @input="
                  (draping = true), updateBar($event.target.value, duration)
                "
                @change="
                  (draping = false), $emit('update-time', $event.target.value)
                "
              />
              <div class="barcontrol" ref="barcontrol"></div>
            </label> -->
          <PlaySongBar
            :duration="duration"
            :currentTime="currentTime"
            @update-time="$emit('update-time', $event)"
          />
          <!-- </div> -->
          <div class="control">
            <!-- models: ["顺序", "随机", "单曲循环"], -->
            <span
              :class="
                model == '顺序'
                  ? 'playmode'
                  : model == '随机'
                  ? 'playmode-suiji'
                  : 'playmode-xunhuan'
              "
              @click="$emit('changeMode')"
            ></span>
            <span class="prev" @click="$emit('music-change', 'prev')"></span>
            <span
              :class="
                playing === true
                  ? 'playbtn playbtn-play'
                  : 'playbtn playbtn-pause'
              "
              @click.stop="$emit('play-song'), $emit('playcontrol-music')"
            ></span>
            <span class="next" @click="$emit('music-change', 'next')"></span>
            <div
              class="playlist"
              @click.stop="$emit('change-showPlaySongList')"
            >
              <span></span>
            </div>
          </div>
        </div>
      </footer>
    </template>
  </section>
</template>

<script>
import PlayDisc from "@/components/playview/PlayDisc.vue";
import PlayLyric from "@/components/playview/PlayLyric.vue";
import PlaySongBar from "@/components/playview/PlaySongBar.vue";

export default {
  components: {
    PlayDisc,
    PlayLyric,
    PlaySongBar,
  },
  props: {
    song: Object,
    duration: Number,
    currentTime: Number,
    playing: Boolean,
    showOne: Boolean,
    model: String,
  },
  data() {
    return {
      // changeTime: this.currentTime,
      // draping: false,
    };
  },
  // computed: {
  //   playtime() {
  //     let m = Math.floor(this.currentTime / 60);
  //     let s = Math.floor(this.currentTime % 60);
  //     if (m < 10) {
  //       m = "0" + m;
  //     }
  //     if (s < 10) {
  //       s = "0" + s;
  //     }
  //     return m + ":" + s;
  //   },
  //   finishtime() {
  //     let m = Math.floor(this.duration / 60);
  //     let s = Math.floor(this.duration % 60);
  //     if (m < 10) {
  //       m = "0" + m;
  //     }
  //     if (s < 10) {
  //       s = "0" + s;
  //     }
  //     return m + ":" + s;
  //   },
  // },
  methods: {
    // 拖动更新进度条
    // updateBar({ timing, timed }) {
    //   console.log("timing====" + timing);
    //   console.log("timed====" + timed);
    //   let barlength = Math.ceil((timing / timed) * 100) + "%";
    //   this.$refs.barcontrol.style.width = barlength;
    // },
    onhander(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="less" scoped>
.playpage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  overflow: hidden;
  // background-color: black;
  .playpage-head {
    position: relative;
    height: 40rem;
    margin-top: 5rem;
    // background-color: aquamarine;
    span {
      display: inline-block;
      width: 40rem;
      height: 30rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 5rem;
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20rem;
        height: 20rem;
        border-right: 2rem solid #fefefe;
        border-bottom: 2rem solid #fefefe;
        transform: translate(-50%, -75%) rotate(45deg);
      }
    }
    .songinfo {
      display: inline-block;
      width: 240rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 14rem;
      text-align: center;
      // letter-spacing: 2rem;
      .active {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: normal;
      }
      .songname {
        color: #fefefe;
      }
      .singer {
        font-size: 12rem;
        color: hsla(0, 0%, 100%, 0.6);
      }
    }
  }
  .playpage-foot {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80rem;
    // padding-top: 20rem;
    // background-color: dimgray;
    .footer-wrap {
      width: 100%;
      height: 100%;
      .control {
        width: 100%;
        padding: 0 10rem;
        height: 40rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10rem 0;
        .playmode {
          display: inline-block;
          width: 30rem;
          height: 30rem;
          background: url("../../assets/audio.png") no-repeat;
          background-size: 120rem 60rem;
          background-position: -60rem -30rem;
        }
        .playmode-suiji {
          display: inline-block;
          width: 30rem;
          height: 30rem;
          background: url("../../assets/随机.svg") no-repeat;
          background-size: 22rem;
          background-position: center;
        }
        .playmode-xunhuan {
          display: inline-block;
          width: 30rem;
          height: 30rem;
          background: url("../../assets/audio.png") no-repeat;
          background-size: 120rem 60rem;
          background-position: -60rem 0rem;
        }
        .prev {
          display: inline-block;
          width: 30rem;
          height: 30rem;
          background: url("../../assets/bg_page_play_d9d4a05.png") no-repeat;
          background-size: 30rem;
        }
        .next {
          display: inline-block;
          width: 30rem;
          height: 30rem;
          background: url("../../assets/bg_page_play_d9d4a05.png") no-repeat;
          background-size: 30rem;
          background-position-y: -36.66rem;
        }
        .playbtn {
          display: inline-block;
          width: 40rem;
          height: 40rem;
          border-radius: 50%;
          background: url("../../assets/sprite_page_play.png") no-repeat;
          background-size: 44rem;
          // background-position: 0 -33rem;
          &.playbtn-pause {
            background-position: 0 0;
          }
          &.playbtn-play {
            background-position: 0 -44rem;
          }
        }
        .playlist {
          width: 30rem;
          height: 30rem;
          position: relative;
          display: flex;
          justify-content: center;
          span {
            position: absolute;
            display: block;
            border-radius: 2rem;
            height: 2rem;
            top: 50%;
            transform: translateY(-50%);
            width: 80%;
            margin: 0 auto;
            background: #efefef;
            display: block;
            box-shadow: 0 10rem 0rem 0rem #efefef, 0 -10rem 0rem 0rem #efefef;
          }
        }
      }
    }
  }
}
</style>