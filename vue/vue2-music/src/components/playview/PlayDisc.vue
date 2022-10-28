<template>
  <div class="playdisc">
    <template v-if="song.song">
      <div
        class="playdisc-bg"
        :style="{
          backgroundImage: 'url(' + song.picUrl + ')',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }"
      ></div>
      <div
        :class="
          playing === true ? 'song-disc-wrap disc-wrap-play' : 'song-disc-wrap'
        "
      >
        <div
          class="song-disc"
          :class="
            playing === true ? 'song-disc song-disc-control' : 'song-disc'
          "
        >
          <div class="song-pic">
            <img :src="song.picUrl" alt="" />
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div
        class="playdisc-bg"
        :style="{
          backgroundImage: 'url(' + song.al.picUrl + ')',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }"
      ></div>
      <div
        :class="
          playing === true ? 'song-disc-wrap disc-wrap-play' : 'song-disc-wrap'
        "
      >
        <div
          class="song-disc"
          :class="
            playing === true ? 'song-disc song-disc-control' : 'song-disc'
          "
        >
          <div class="song-pic">
            <img :src="song.al.picUrl" alt="" />
          </div>
        </div>
      </div>
    </template>

    <!-- :class="playing === true ? 'song-disc-wrap disc-wrap-play' : 'song-disc-wrap'" -->
  </div>
</template>

<script>
export default {
  props: {
    song: Object,
    playing: Boolean,
  },
  created() {
    // console.log(this.playing);
  },
};
</script>

<style lang="less" scoped>
.playdisc {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: -1;
  padding: 40rem 0 80rem 0;
  .playdisc-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    // margin: auto;
    z-index: -1;
    transform: scale(1.5);
    transform-origin: center center;
    filter: blur(30px);
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .song-disc-wrap {
    position: relative;
    width: 248rem;
    height: 248rem;
    margin: 65rem auto 0 auto;
    .song-disc {
      position: relative;
      width: 100%;
      height: 100%;
      animation: discrotate 20s linear infinite;
      animation-play-state: paused;
      &.song-disc-control {
        animation-play-state: running;
      }
      @keyframes discrotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 100%;
        background: url("../../assets/disc.png") no-repeat;
        background-size: 248rem;
        z-index: 1;
      }
      .song-pic {
        position: absolute;
        width: 184rem;
        height: 184rem;
        // background-color: black;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 0;
        overflow: hidden;
      }
    }
    &::after {
      position: absolute;
      content: "";
      top: -60rem;
      left: 50%;
      width: 73rem;
      height: 118rem;
      // background-color: black;
      z-index: 1;
      background-image: url("../../assets/needle-ab.png");
      background-size: 73rem;
      background-repeat: no-repeat;
      transform-origin: 10rem 10rem;
      transform: rotate(-30deg);
      transition: all 0.3s;
    }
    &.disc-wrap-play::after {
      transform: rotate(0);
    }
  }
}
</style>