<template>
  <section class="playlist-head" v-if="playlist">
    <div class="playlist-bg"></div>
    <div
      class="playlist-bg"
      :style="{
        backgroundImage: 'url(' + playlist.coverImgUrl + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        backgroundSize: 'cover',
      }"
    ></div>
    <div class="playlist-wrap">
      <div class="playlist-left">
        <img :src="playlist.coverImgUrl" alt="" />
        <span>歌单</span>
        <i>{{
          playcount > 10000
            ? playcount > 100000000
              ? (playcount / 100000000).toFixed(1) + "亿"
              : (playcount / 10000).toFixed(1) + "万"
            : playcount
        }}</i>
      </div>
      <div class="playlist-right">
        <h2>{{ playlist.name }}</h2>
        <div class="pl-auth">
          <a href="javascript:;">
            <img :src="playlist.creator.avatarUrl" alt="" />
            <span>{{ playlist.creator.nickname }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    playlist: Object,
    playcount: String,
  },
  // created() {
  //   console.log(this.playlist);
  // },
};
</script>

<style lang="less" scoped>
.playlist-head {
  background-color: aquamarine;
  position: relative;
  padding: 30px 10px 30px 15px;
  overflow: hidden;
  .playlist-bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    // background-image: url("../assets/playlist-bg.jpg");
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: 50%;
    filter: blur(20px);
    transform: scale(1.5);
    &::after {
      content: " ";
      background-color: rgba(0, 0, 0, 0.25);
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }
  }
  .playlist-wrap {
    display: flex;
    position: relative;
    z-index: 2;
    .playlist-left {
      position: relative;
      width: 126px;
      height: 126px;
      img {
        width: 100%;
        vertical-align: middle;
      }
      span {
        position: absolute;
        z-index: 3;
        top: 10px;
        left: 0;
        padding: 0 8px;
        height: 17px;
        color: #fff;
        font-size: 9px;
        text-align: center;
        line-height: 17px;
        background-color: rgba(217, 48, 48, 0.8);
        border-top-right-radius: 17px;
        border-bottom-right-radius: 17px;
      }
      i {
        position: absolute;
        right: 2px;
        top: 0;
        z-index: 3;
        padding-left: 15px;
        color: #fff;
        font-size: 12px;
        background-position: 0;
        background-repeat: no-repeat;
        background-size: 11px 10px;
        text-shadow: 1px 0 0 rgba(0, 0, 0, 0.15);
        font-style: normal;
        background: url("../assets/下载.svg") no-repeat;
        background-position: 0;
        background-size: 11rem 10rem;
      }
      &::after {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 18px;
        z-index: 2;
        background-image: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.2)
        );
      }
    }
    .playlist-right {
      -webkit-box-flex: 1;
      flex: 1 1 auto;
      width: 1%;
      margin-left: 16px;
      padding-top: 3px;
      h2 {
        padding-top: 1px;
        font-size: 17px;
        line-height: 1.3;
        color: #fefefe;
        height: 44px;
        display: -webkit-box;
        -webkit-box-pack: center;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .pl-auth {
        a {
          display: inline-block;
          color: hsla(0, 0%, 100%, 0.7);
          text-decoration: none;
          font-size: 14rem;
          img {
            display: inline-block;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 5px;
          }
          span {
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>