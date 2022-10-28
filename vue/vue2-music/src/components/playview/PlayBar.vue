<template>
  <div class="playbar">
    <template v-if="song.song">
      <div class="playbarpic" ref="playbarpic">
        <img
          :class="playing === true ? 'imgrotate-play' : ''"
          :src="`${song.picUrl}?imageView=1&type=webp&thumbnail=35x0`"
          alt=""
        />
        <canvas ref="canvas"></canvas>
      </div>
      <p class="playsong-name">
        {{ song.name }}- <span>{{ song.song.artists[0].name }}</span>
      </p>
      <div
        :class="
          playing === true ? 'playbtn playbtn-play' : 'playbtn playbtn-pause'
        "
        @click.stop="$emit('play-song'), $emit('playcontrol-music')"
      >
        <!-- style="border: 3rem solid #d3d3d3" -->
      </div>
      <div class="playlist" @click.stop="$emit('change-showPlaySongList')">
        <span></span>
      </div>
    </template>
    <template v-else>
      <div class="playbarpic" ref="playbarpic">
        <img
          :class="playing === true ? 'imgrotate-play' : ''"
          :src="`${song.al.picUrl}?imageView=1&type=webp&thumbnail=35x0`"
          alt=""
        />
        <canvas ref="canvas"></canvas>
      </div>
      <p class="playsong-name">
        {{ song.name }}- <span>{{ song.ar[0].name }}</span>
      </p>
      <div
        :class="
          playing === true ? 'playbtn playbtn-play' : 'playbtn playbtn-pause'
        "
        @click.stop="$emit('play-song'), $emit('playcontrol-music')"
        ref="playbtn"
      >
        <!-- style="border: 3rem solid #d3d3d3" -->
      </div>
      <div class="playlist" @click.stop="$emit('change-showPlaySongList')">
        <span></span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    song: Object,
    playing: Boolean,
    duration: Number,
    currentTime: Number,
  },
  data() {
    return {
      barcontrol: 0,
    };
  },
  methods: {
    //  val 进度条参数  size  设置画布大小
    initCancas(val, size) {
      let canvas = this.$refs.canvas;
      // let w = this.$refs.playbarpic.offsetWidth;
      // let h = this.$refs.playbarpic.offsetHeight;
      //  初始画布宽高(小数位忽略)
      canvas.width = size;
      canvas.height = size;
      let bar = canvas.getContext("2d");
      //  画布线条颜色
      bar.strokeStyle = "#22d7c8";
      //  线宽  保持和边框大小一样
      bar.lineWidth = size / 20;
      bar.beginPath();
      //  arc(x,y,半径,初始位置[0为3点钟位置],结束位置[0-2π],[false 顺时针,true 逆时针])
      bar.arc(size / 2, size / 2, size / 2 - size / 20, 0, val * Math.PI);
      // bar.lineCap = "round";
      bar.stroke();
      bar.closePath();
    },
  },
  mounted() {
    // console.log(this.currentTime);
    // console.log(this.duration);
    let size = window
      .getComputedStyle(this.$refs.playbarpic)
      .width.replace("px", "");
    this.barcontrol = (this.currentTime / this.duration).toFixed(2) * 2;
    this.initCancas(this.barcontrol, size);
  },
  watch: {
    currentTime() {
      //  获取play按钮大小,包含小数位
      let size = window
        .getComputedStyle(this.$refs.playbarpic)
        .width.replace("px", "");
      // console.log((this.currentTime / this.duration).toFixed(2) * 2);
      this.barcontrol = (this.currentTime / this.duration).toFixed(2) * 2;
      this.initCancas(this.barcontrol, size);
      // console.log(this.$refs.playbarpic.offsetWidth);
      // console.log(size);
      // console.log(this.song.song.artists[0].name);
    },
  },
};
</script>

<style lang="less" scoped>
@keyframes imgrotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.playbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 62rem;
  background-color: #4f4f4f;
  padding: 0 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  // &::after {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   content: "";
  //   border-top: 1rem solid #d3d3d3;
  //   pointer-events: none;
  // }
  .playbarpic {
    position: relative;
    width: 50rem;
    height: 50rem;
    // top: -20rem;
    // background-color: #fff;
    border-radius: 50%;
    z-index: 3;
    img {
      width: 36rem;
      height: 36rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      animation: imgrotate 8s infinite linear;
      animation-play-state: paused;
      &.imgrotate-play {
        animation-play-state: running;
      }
    }
    canvas {
      transform: rotate(-90deg);
    }
  }
  .playsong-name {
    font-size: 14rem;
    width: 180rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
    padding: 0 15rem;
    color: #efefef;
    span {
      font-size: 12rem;
      color: #eeeeee;
    }
  }
  .playbtn {
    display: block;
    width: 30rem;
    height: 30rem;
    // background: url("../../assets/sprite_page_play.png") no-repeat center;
    position: relative;
    z-index: -1;
    background-size: 30rem;
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 50%;
      border: 3rem solid #d3d3d3;
      z-index: -1;
    }
  }
  .playbtn-pause {
    // background-size: 40rem 160rem;
    // background-position: 1rem 1.5rem;
    background-image: url("../../assets/icon_play.png");
  }
  .playbtn-play {
    // background-size: 40rem 160rem;
    // background-position: 1rem -38.5rem;
    background-image: url("../../assets/icon_pause.png");
  }
  // canvas {
  //   // border-radius: 50%;
  //   // width: 40rem;
  //   transform: rotate(-90deg);
  // }
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
</style>