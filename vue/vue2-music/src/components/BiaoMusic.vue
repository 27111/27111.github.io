<template>
  <li class="hot-song">
    <p class="hot-num">
      {{ index + 1 > 9 ? index + 1 : "0" + (index + 1) }}
    </p>
    <!-- :style="`background: url('${hotmusic.al.picUrl}')`" -->
    <img
      :src="`${hotmusic.al.picUrl}?imageView=1&type=webp&thumbnail=30x0`"
      alt=""
    />
    <div class="hot-wrap">
      <div class="hotmusic-name hot-active">{{ hotmusic.name }}</div>
      <div class="hot-singer hot-active">
        <i class="hot-icon" v-show="showIcon(hotmusic.sq)"></i>
        {{ hotmusic.ar[0].name }} - {{ hotmusic.al.name }}
      </div>
      <span class="hot-btn"></span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    hotmusic: Object,
    index: Number,
  },
  // created() {
  //   console.log(this.hotmusic);
  // },
  methods: {
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
li.hot-song {
  position: relative;
  padding: 8.5rem 0;
  color: #fff;
  // margin-left: 10rem;
  display: flex;
  p.hot-num {
    font-size: 17rem;
    width: 40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
  }
  &:nth-of-type(1) p.hot-num {
    font-size: 0;
    color: #df3436;
    background: url("../assets/icon_up_1.png");
    background-size: 22rem;
    background-repeat: no-repeat;
    background-position: center;
  }
  &:nth-of-type(2) p.hot-num {
    font-size: 0;
    color: #df3436;
    background: url("../assets/icon_up_2.png");
    background-size: 22rem;
    background-repeat: no-repeat;
    background-position: center;
  }
  &:nth-of-type(3) p.hot-num {
    font-size: 0;
    color: #df3436;
    background: url("../assets/icon_up_3.png");
    background-size: 22rem;
    background-repeat: no-repeat;
    background-position: center;
  }
  img {
    width: 36rem;
    height: 36rem;
    margin-right: 10rem;
    border-radius: 5rem;
  }
  .hot-wrap {
    position: relative;
    width: calc(100% - 85rem);
    .hot-active {
      width: calc(100% - 32rem);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: normal;
    }
    .hotmusic-name {
      font-size: 17rem;
    }
    .hot-singer {
      font-size: 12rem;
      color: #888;
      i.hot-icon {
        display: inline-block;
        width: 12rem;
        height: 8rem;
        margin-right: 4rem;
        background: url("../assets/index_icon_2x.png") no-repeat;
        background-size: 166rem 97rem;
      }
    }
    span.hot-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      display: inline-block;
      width: 22rem;
      height: 22rem;
      background: url("../assets/icon_confession_res_play.png") no-repeat;
      background-size: 22rem;
      background-position: 0rem 0;
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
