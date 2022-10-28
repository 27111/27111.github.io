<template>
  <li>
    <template v-if="hv.voiceInfo">
      <div class="item">
        <div class="cover">
          <img
            :src="
              playing &&
              playvoice?.voiceInfo?.voiceId === hv?.voiceInfo?.voiceId
                ? pic2
                : pic1
            "
            alt=""
          />
          <img :src="hv.voiceInfo.imageUrl" alt="" />
        </div>
        <div class="desc">
          <h6>{{ hv.voiceInfo.name }}</h6>
          <div class="tag">
            <span
              >{{
                Math.floor(hv.voiceInfo.duration / 60) > 0
                  ? Math.floor(hv.voiceInfo.duration / 60) > 9
                    ? Math.floor(hv.voiceInfo.duration / 60)
                    : "0" + Math.floor(hv.voiceInfo.duration / 60)
                  : "00"
              }}'{{
                hv.voiceInfo.duration % 60 > 9
                  ? hv.voiceInfo.duration % 60
                  : "0" + (hv.voiceInfo.duration % 60)
              }}"</span
            >
            <span>{{ numchuli(hv.voiceExProperty.replayCount) }} 播放</span>
            <span>{{ numchuli(hv.voiceExProperty.commentCount) }} 评论</span>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="item">
        <div class="cover">
          <img src="../assets/play.png" alt="" />
          <img :src="`${imgstr}${hv.cover}`" alt="" />
        </div>
        <div class="desc">
          <h6>{{ hv.name }}</h6>
          <div class="tag">
            <span
              >{{
                Math.floor(hv.duration / 60) > 0
                  ? Math.floor(hv.duration / 60) > 9
                    ? Math.floor(hv.duration / 60)
                    : "0" + Math.floor(hv.duration / 60)
                  : "00"
              }}'{{
                hv.duration % 60 > 9
                  ? hv.duration % 60
                  : "0" + (hv.duration % 60)
              }}"</span
            >
            <span>{{ numchuli(hv.stats.play) }} 播放</span>
            <span>{{ numchuli(hv.stats.commentCount) }} 评论</span>
          </div>
        </div>
      </div>
    </template>
  </li>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    hv: Object,
    imgstr: String,
  },
  data() {
    return {
      pic1: require("../assets/play.png"),
      pic2: require("../assets/paused.png"),
    };
  },
  computed: {
    ...mapState(["playing", "playvoice"]),
  },
  methods: {
    numchuli(num) {
      return num > 10000
        ? num > 100000000
          ? (num / 100000000).toFixed(1) + "亿"
          : (num / 10000).toFixed(1) + "万"
        : num;
    },
  },
};
</script>

<style lang="less" scoped>
li {
  display: block;
  width: 100%;
  padding: 0 16rem;
  .item {
    height: 90rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .cover {
      position: relative;
      width: 60rem;
      height: 60rem;
      border-radius: 0.6rem;
      overflow: hidden;
      box-shadow: 3rem 3rem 10rem rgb(0 0 0 / 5%);
      img {
        &:nth-of-type(1) {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: block;
          width: 32rem;
          height: 32rem;
        }
        &:nth-of-type(2) {
          display: block;
          width: 60rem;
          height: 60rem;
          border-radius: 6rem;
        }
      }
    }
    .desc {
      flex: 1;
      padding-left: 10rem;
      text-align: left;
      h6 {
        font-size: 15rem;
        padding-bottom: 9rem;
        color: #333;
      }
      .tag {
        color: #000;
        opacity: 0.3;
        span {
          display: inline-block;
          height: 20rem;
          margin-right: 10rem;
        }
      }
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1rem;
      z-index: 998;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
      background: #dbdbdb;
    }
  }
}
</style>