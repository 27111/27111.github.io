<template>
  <li class="playlist-song">
    <p class="playlist-num">
      {{ index + 1 }}
    </p>
    <div class="playlist-wrap">
      <div class="playlist-name playlist-active">
        {{ playlistsong.name }}
        <span v-if="playlistsong.alia[0]">({{ playlistsong.alia[0] }})</span>
      </div>
      <div class="playlist-singer playlist-active">
        <!-- <i class="playlist-icon" v-show="showIcon(playlistsong.sq)"></i> -->
        {{ playlistsong.ar[0].name }} - {{ playlistsong.al.name }}
      </div>
      <span class="playlist-btn"></span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    playlistsong: Object,
    index: Number,
  },
  created() {
    // console.log(this.playlistsong);
  },
  // methods: {
  //   showIcon(icon) {
  //     if (icon) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
};
</script>

<style lang="less" scoped>
li.playlist-song {
  position: relative;
  padding: 8.5rem 0;
  // margin-left: 10rem;
  display: flex;
  p.playlist-num {
    font-size: 17rem;
    width: 40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
  }
  // &:nth-of-type(-n + 3) p.playlist-num {
  //   color: #df3436;
  // }

  .playlist-wrap {
    position: relative;
    width: calc(100% - 40rem);
    .playlist-active {
      width: calc(100% - 32rem);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: normal;
    }
    .playlist-name {
      font-size: 17rem;
      span {
        color: #888;
        margin-left: 4rem;
      }
    }
    .playlist-singer {
      font-size: 12rem;
      color: #888;
      // i.playlist-icon {
      //   display: inline-block;
      //   width: 12rem;
      //   height: 8rem;
      //   margin-right: 4rem;
      //   background: url("../assets/index_icon_2x.png") no-repeat;
      //   background-size: 166rem 97rem;
      // }
    }
    span.playlist-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      display: inline-block;
      width: 22rem;
      height: 22rem;
      background: url("../assets/index_icon_2x.png") no-repeat;
      background-size: 166rem 97rem;
      background-position: -24rem 0;
      margin-right: 10rem;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: -8.5rem;
      left: 0;
      width: 100%;
      height: 100%;
      border-bottom: 1rem solid rgba(0, 0, 0, 0.1);
      z-index: -1;
    }
  }
}
</style>