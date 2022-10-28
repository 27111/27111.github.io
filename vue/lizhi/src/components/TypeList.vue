<template>
  <li>
    <template v-if="typedata.btnTitle">
      <img :src="typedata.voiceInfo.imageUrl" alt="" />
      <div class="info-desc">
        <h3 class="dots">{{ typedata.voiceInfo.name }}</h3>
        <p class="dots">{{ typedata.userInfo.name }}</p>
        <p class="opt">
          <span
            ><i></i
            >{{
              Math.floor(typedata.voiceInfo.duration / 60) > 0
                ? Math.floor(typedata.voiceInfo.duration / 60) > 9
                  ? Math.floor(typedata.voiceInfo.duration / 60)
                  : "0" + Math.floor(typedata.voiceInfo.duration / 60)
                : "00"
            }}'{{
              typedata.voiceInfo.duration % 60 > 9
                ? typedata.voiceInfo.duration % 60
                : "0" + (typedata.voiceInfo.duration % 60)
            }}"</span
          >
          <span
            ><i></i
            >{{
              typedata.voiceExProperty.replayCount > 10000
                ? (typedata.voiceExProperty.replayCount / 10000).toFixed(1) +
                  "万"
                : typedata.voiceExProperty.replayCount
            }}</span
          >
          <span><i></i>{{ typedata.voiceExProperty.commentCount }}</span>
        </p>
      </div>
    </template>
    <template v-else>
      <div class="pic_wrap">
        <img :src="typedata.cover" alt="" />
        <div
          class="pic_play"
          :style="
            playing && playvoice.voiceId === typedata.voiceId
              ? `background-image:url('${pic}')`
              : ''
          "
        ></div>
      </div>
      <div class="info-desc">
        <h3 class="dots" style="margin: 14rem 0">{{ typedata.name }}</h3>
        <!-- <p class="dots">{{ typedata.userInfo.name }}</p> -->
        <p class="opt">
          <span
            ><i></i
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
            ><i></i
            >{{
              typedata.playCount > 10000
                ? (typedata.playCount / 10000).toFixed(1) + "万"
                : typedata.playCount
            }}</span
          >
          <span><i></i>{{ typedata.commentCount }}</span>
        </p>
      </div>
      <div class="download">
        <img src="../assets/download.bd43346.png" alt="" />
      </div>
    </template>
  </li>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    typedata: Object,
  },
  data() {
    return {
      pic: require("../assets/paused.png"),
    };
  },
  computed: {
    ...mapState(["playing", "playvoice"]),
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
  img {
    flex-shrink: 0;
    width: 60rem;
    height: 60rem;
    border-radius: 8rem;
    margin-right: 16rem;
  }
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
      span {
        margin-right: 12rem;
        display: flex;
        justify-content: flex-start;
        align-items: end;
        i {
          display: block;
          width: 16rem;
          height: 16rem;
          position: relative;
          top: 1rem;
          margin-right: 3rem;
          background-repeat: no-repeat;
          background-position: center;
          background-size: 11rem;
        }
        &:nth-of-type(1) {
          i {
            background-image: url("../assets/lishi.png");
          }
        }
        &:nth-of-type(2) {
          i {
            background-image: url("../assets/play_num.png");
          }
        }
        &:nth-of-type(3) {
          i {
            background-image: url("../assets/ping.png");
          }
        }
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