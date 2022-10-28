<template>
  <li class="home-song" :style="{ color: songId === music.id ? '#00ffc0' : '' }">
    <div class="pic">
      <img
        :src="`${music.picUrl}?imageView=1&type=webp&thumbnail=30x0`"
        alt=""
      />
    </div>
    <div class="home-wrap">
      <div class="f-songName f-active">{{ music.name }}</div>
      <div class="f-singer f-active">
        <i class="f-icon" v-show="showIcon(music.song.sqMusic)"></i>
        <!-- v-show="showIcon(music.song.sqMusic)" -->
        {{ music.song.artists[0].name }} - {{ music.song.album.name }}
      </div>
    </div>
    <span class="f-btn" v-if="songId !== music.id || playing === false"></span>
    <div class="playing-statue" v-if="songId === music.id && playing === true">
      <!-- :class="playing === true ? 'playing-statue playcol' : 'playing-statue'" -->
      <span></span>
      <span></span>
      <span></span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    music: Object,
    songId: Number,
    playing: Boolean,
  },
  // created() {
  //   console.log(this.music);
  // },
  methods: {
    // clickHander() {
    //   // {{ music.artists.artists[0].name }}
    //   // console.log(this.music.song.album.name);
    //   console.log(this.music.song.sqMusic);
    // },
    showIcon(icon) {
      if (icon) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
li.home-song {
  position: relative;
  padding: 8.5rem 0;
  color: #fff;
  margin-left: 10rem;
  .pic {
    position: absolute;
    font-size: 0;
    display: inline-block;
    border-radius: 5rem;
    overflow: hidden;
    top: 50%;
    transform: translateY(-50%);
  }
  .home-wrap {
    display: inline-block;
    width: calc(100% - 72rem);
    margin-left: 40rem;
    .f-active {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: normal;
    }
    .f-songName {
      font-size: 17rem;
    }
    .f-singer {
      font-size: 12rem;
      color: #888;
      i.f-icon {
        display: inline-block;
        width: 12rem;
        height: 8rem;
        margin-right: 4rem;
        background: url("../assets/index_icon_2x.png") no-repeat;
        background-size: 166rem 97rem;
      }
    }
  }

  .f-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    display: inline-block;
    width: 22rem;
    height: 22rem;
    background: url("../assets/icon_confession_res_play.png") no-repeat;
    background-size: 22rem;
    background-position: 0 0;
    margin-right: 10rem;
  }
  .playing-statue {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -5rem;
    width: 30rem;
    margin-right: 10rem;
    height: 30rem;
    justify-content: space-between;
    // &.playcol span {
    //   animation-play-state: running;
    // }

    span {
      position: absolute;
      display: inline-block;
      bottom: 0;
      left: 1rem;
      width: 5rem;
      height: 0;
      background-color: #00ffc0;
      border-radius: 5rem;
      animation: playstatus 0.6s infinite alternate linear;
      // animation-play-state: paused;
      @keyframes playstatus {
        from {
          height: 0;
        }
        to {
          height: 100%;
        }
      }
      &:nth-of-type(2) {
        left: 50%;
        transform: translateX(-50%);
        animation-delay: 0.2s;
      }
      &:nth-of-type(3) {
        left: 100%;
        transform: translateX(-100%);
        animation-delay: 0.4s;
      }
    }
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 1rem solid rgba(0, 0, 0, 0.1);
    z-index: -1;
  }
}
</style>
