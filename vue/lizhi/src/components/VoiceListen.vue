<template>
  <li v-if="typedata">
    <div class="pic_wrap">
      <img :src="typedata.cover" alt="" />
      <div class="pic_play"></div>
    </div>
    <div class="info-desc">
      <h3 class="dots">{{ typedata.name }}</h3>
      <p class="dots">{{ typedata.userName }}</p>
      <p class="opt">
        <span
          >{{
            Math.floor(typedata.duration / 60) > 0
              ? Math.floor(typedata.duration / 60) > 9
                ? Math.floor(typedata.duration / 60)
                : "0" + Math.floor(typedata.duration / 60)
              : "00"
          }}'{{
            typedata.duration % 60 > 9
              ? typedata.duration % 60
              : "0" + (typedata.duration % 60)
          }}"</span
        >
        <span
          >{{
            typedata.playCount > 10000
              ? (typedata.playCount / 10000).toFixed(1) + "万"
              : typedata.playCount
          }}播放</span
        >
        <span>评论{{ typedata.commnetCount }}</span>
        <i>{{ typedata.label }}</i>
      </p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    typedata: Object,
    index: Number,
  },
};
</script>

<style lang="less" scoped>
li {
  width: 100%;
  padding: 12rem 16rem;
  height: 84rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  .pic_wrap {
    flex-shrink: 0;
    width: 60rem;
    height: 60rem;
    border-radius: 8rem;
    margin-right: 16rem;
    position: relative;
    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 8rem;
    }
    .pic_play {
      width: 32rem;
      height: 32rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: url("../assets/play.png");
      background-size: 30rem;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  .info-desc {
    flex: 1;
    width: 200rem;
    // background-color: rgba(0,0,0,.3);
    .dots {
      display: block;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    h3.dots {
      font-size: 14rem;
      color: rgba(0, 0, 0, 0.8);
    }
    p.dots {
      margin: 4rem 0;
      font-size: 10rem;
      color: rgba(0, 0, 0, 0.5);
    }
    .opt {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 5rem;
      color: rgba(0, 0, 0, 0.3);
      margin: 4rem 0;
      position: relative;
      span {
        margin-right: 12rem;
        display: flex;
        justify-content: flex-start;
        align-items: end;
      }
      i {
        position: absolute;
        right: 0;
        display: block;
        font-style: normal;
        background: #f3f3f3;
        color: #333;
        justify-self: flex-end;
        border-radius: 10rem;
        padding: 0 6rem;
        display: flex;
        font-size: 11.5rem;
        justify-content: center;
        align-items: center;
        height: 20rem;
      }
    }
  }
  .download {
    flex-shrink: 0;
    img {
      margin: 0;
      width: 25rem;
      height: 25rem;
    }
  }
}
</style>