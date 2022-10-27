<template>
  <div class="homeitem" v-if="item.voiceDataList.length">
    <h3>
      <span>{{ item.playSheetInfo.name }}</span>
      <i
        @click="
          $router.push({
            path: '/item',
            query: { id: item.playSheetInfo.id },
          })
        "
      ></i>
    </h3>
    <ul class="piclist">
      <li
        v-for="(vdlist, index) in item.voiceDataList"
        :key="index"
        @click="
          getPlayList(item.voiceDataList);
          getPlayVoice(vdlist);
          toggleplaying();
        "
      >
        <img :src="vdlist.cover" alt="" />
        <div class="mask">
          <div
            class="mask-icon"
            :style="
              playing && playvoice.voiceId === vdlist.voiceId
                ? `background-image:url('${pic}')`
                : ''
            "
          ></div>
          <div class="play-icon">
            <i></i>
            <span>{{
              vdlist.playCount > 10000
                ? vdlist.playCount > 100000000
                  ? (vdlist.playCount / 100000000).toFixed(1) + "亿"
                  : (vdlist.playCount / 10000).toFixed(1) + "万"
                : vdlist.playCount
            }}</span>
          </div>
        </div>
        <a href="javascript:;">{{ vdlist.name }}</a>
      </li>
      <div
        class="checkall"
        @click="
          $router.push({
            path: '/item',
            query: { id: item.playSheetInfo.id },
          })
        "
      >
        <div class="music-icon">
          <i></i>
          <span>{{ item.playSheetInfo.voiceNum }}</span>
        </div>
        <div class="check-text">
          <span>查看全部</span>
          <i></i>
        </div>
      </div>
    </ul>
    <!-- <img :src="item.playSheetInfo.cover" alt="" /> -->
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    item: Object,
  },
  data() {
    return {
      pic: require("../assets/paused.png"),
    };
  },
  computed: {
    ...mapState(["playing", "playvoice"]),
  },
  methods: {
    ...mapMutations([
      "getPlayList",
      "getPlayVoice",
      "toggleplaying",
      "playcontrol",
    ]),
    hhh() {
      console.log(this.item.playSheetInfo.id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.homeitem {
  // height: 100vh;
  // overflow-y: hidden;
  h3 {
    font-size: 18rem;
    font-weight: bold;
    display: flex;
    padding: 24rem 6rem 16rem 16rem;
    align-items: center;
    justify-content: space-between;
    // span {
    // }
    i {
      display: block;
      width: 19rem;
      height: 19rem;
      background: url("../assets/right.png") no-repeat;
      background-size: 10rem;
      background-position: center;
    }
  }
  ul.piclist {
    display: flex;
    height: 155rem;
    width: auto;
    padding-left: 16rem;
    // overflow-x: scroll;
    // user-select: none;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      flex-shrink: 0;
      width: 96rem;
      height: 140rem;
      margin-right: 16rem;
      position: relative;
      border-radius: 4rem;
      // background-color: aquamarine;
      img {
        width: 96rem;
        height: 96rem;
        display: block;
        border-radius: 4rem;
      }
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 96rem;
        height: 96rem;
        border-radius: 4rem;
        .mask-icon {
          position: absolute;
          width: 8.5vw;
          height: 8.5vw;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-image: url("../assets/play.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .play-icon {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 20rem;
          border-radius: 0 0 4rem 4rem;
          background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5));
          overflow: hidden;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 3rem;
          font-size: 12rem;
          i {
            display: block;
            width: 12rem;
            height: 12rem;
            background-image: url("../assets/play circle.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 12rem;
            margin-right: 2rem;
          }
        }
      }
      a {
        width: 91rem;
        height: 40rem;
        line-height: 20rem;
        font-size: 14rem;
        text-decoration: none;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        position: relative;
        top: 8rem;
        color: #333;
      }
    }
    .checkall {
      flex-shrink: 0;
      width: 96rem;
      height: 96rem;
      margin-right: 16rem;
      position: relative;
      border-radius: 4rem;
      // background-color: aqua;
      padding-left: 10rem;
      padding-top: 20rem;
      background-image: url("../assets/more_bg.9b1d8e8.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      .music-icon {
        height: 40rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
        font-size: 16rem;
        color: #fff;
        i {
          display: block;
          width: 25rem;
          height: 25rem;
          margin-right: 2.5rem;
          background: url("../assets/list.png") no-repeat;
          background-size: 18rem;
          background-position: center;
        }
        span {
          font-weight: bold;
        }
      }
      .check-text {
        margin-top: 6.5rem;
        display: flex;
        align-items: center;
        font-size: 14rem;
        color: #fff;
        // span {
        // }
        i {
          display: block;
          width: 18.5rem;
          height: 18.5rem;
          background: url("../assets/right_arrow.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 10rem;
        }
      }
    }
  }
  img {
    width: 150rem;
  }
}
</style>
