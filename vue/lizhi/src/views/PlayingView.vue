<template>
  <div class="playingview" v-if="playobj">
    <div class="pl_head">
      <div class="pl_img">
        <img :src="playobj.userVoice.voiceInfo.imageUrl" alt="" />
        <div class="pl_btn">
          <div class="prev act" @click="changeVoice('prev'),tiaozhuan()"></div>
          <div :class="playing ? 'pause act' : 'start act'" @click="toggleplaying()"></div>
          <div class="next act" @click="changeVoice('next'),tiaozhuan()"></div>
        </div>
      </div>
      <h1 class="pl_name">
        {{ playobj.userVoice.voiceInfo.name }}
      </h1>
      <PlayBar />
      <div class="pl_function">
        <div class="pl_list">
          <div class="pl_item" @click="timeprev()">
            <img src="../assets/prev15.png" alt="" />
          </div>
          <div class="pl_item"><img src="../assets/dw.png" alt="" /></div>
          <div class="pl_item"><img src="../assets/bspeed.png" alt="" /></div>
          <div class="pl_item" @click="timenext()">
            <img src="../assets/next15.png" alt="" />
          </div>
        </div>
      </div>
      <div class="down_btn">打开APP收藏下载</div>
    </div>
    <div class="pl_info">
      <div class="title">声音详情</div>
      <div class="desc">
        <div class="wrap">
          <img :src="playobj.userVoice.userInfo.photo" alt="" />
          <div class="userinfo">
            <div class="name">{{ playobj.userVoice.userInfo.name }}</div>
            <div class="detail">
              FM {{ playobj.userVoice.userInfo.band }}
              {{ numchuli(playobj.userVoice.userInfo.fansCnt) }}粉丝
            </div>
          </div>
        </div>
        <div class="guanzhu">
          <span>
            <i></i>
            关注
          </span>
        </div>
      </div>
      <div class="voice_info">
        <h3>{{ playobj.userVoice.voiceInfo.name }}</h3>
        <div class="info">
          {{ format(playobj.userVoice.voiceInfo.createTime) }} 播放
          {{ numchuli(playobj.userVoice.voiceExProperty.replayCount) }}
        </div>
        <strong class="deta" v-if="playobj.userVoice.voiceDetailProperty.text">
          <p>
            <i v-html="
              textChuli(playobj.userVoice.voiceDetailProperty.text, isAll)
            " :class="isAll ? '' : 'actv'"></i>
            <span :class="isAll ? 'actived' : ''" @click="isAll = !isAll"></span>
          </p>
        </strong>
      </div>
    </div>
    <ul class="similarlist">
      <h3 class="title">猜你喜欢听</h3>
      <SimilarItem v-for="(typedata, index) in similardatas" :key="index" :typedata="typedata" :index="index"
        @click.native="
          getPlayList(similardatas);
          getPlayVoice(typedata);
          toggleplaying();
        " />
    </ul>
    <ul class="voicelist">
      <h3 class="title">大家都在听</h3>
      <VoiceListen v-for="(typedata, index) in voicedatas" :key="index" :typedata="typedata" :index="index"
        @click.native="
          getPlayList(voicedatas);
          getPlayVoice(typedata);
          toggleplaying();
        " />
      <div class="down_btn">打开APP 收听更多热播声音</div>
    </ul>
    <ul class="commentlist" v-if="commentdatas?.length">
      <h3 class="title">热门评论</h3>
      <HotComment v-for="(commentdata, index) in commentdatas" :key="index" :commentdata="commentdata" />
      <div class="app_open">
        <div class="go_tip">打开APP查看全部评论&nbsp;&nbsp;></div>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import PlayBar from "@/components/PlayBar.vue";
import SimilarItem from "@/components/SimilarItem.vue";
import VoiceListen from "@/components/VoiceListen.vue";
import HotComment from "@/components/HotComment.vue";

export default {
  components: {
    PlayBar,
    SimilarItem,
    VoiceListen,
    HotComment,
  },
  data() {
    return {
      playobj: null,
      similardatas: null,
      voicedatas: null,
      commentdatas: null,
      isAll: false,
    };
  },
  methods: {
    tiaozhuan() {
      this.$router.replace({
        query: {
          id: this.getID,
        }
      });
    },
    textChuli(text, boolean) {
      // this.playobj.userVoice.voiceDetailProperty.text
      // console.log(text);
      // console.log(boolean);
      if (text) {
        if (boolean) {
          var wenben = text.replace(/\n/g, "<br>");
          // console.log(wenben);
          return wenben;
        } else {
          return text;
        }
      }
    },
    ...mapMutations([
      "getPlayList",
      "getPlayVoice",
      "toggleplaying",
      "timenext",
      "timeprev",
      "changeVoice",
    ]),
    getSimilar(id) {
      this.axios.get(`/voice/similar/${id}`).then((res) => {
        console.log(res.data.data);
        this.similardatas = res.data.data;
      });
    },
    getlisten() {
      this.axios.get("voice/rank/voice").then((res) => {
        console.log(res.data.data);
        this.voicedatas = res.data.data;
      });
    },
    getcomment(id) {
      this.axios.get(`voice/comment/${id}`).then((res) => {
        // console.log(res.data.data);
        this.commentdatas = res.data.data;
      });
    },
    add(m) {
      return m < 10 ? "0" + m : m;
    },
    format(ntime) {
      var time = new Date(ntime * 1000);
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      var day = time.getDate();
      return year + "-" + this.add(month) + "-" + this.add(day);
    },
    numchuli(num) {
      return num > 10000
        ? num > 100000000
          ? (num / 100000000).toFixed(1) + "亿"
          : (num / 10000).toFixed(1) + "万"
        : num;
    },
  },
  computed: {
    ...mapState(["playvoice", "playing"]),
    ...mapGetters(["getID"])
  },
  created() {
    // console.log(this.getID);
    this.axios
      .get(
        `/voice/info/${this.$route.query.id
        }`
      )
      .then((res) => {
        console.log(res.data.data);
        // console.log(res.data.data.userVoice?.voiceDetailProperty?.text);
        this.playobj = res.data.data;
        this.textChuli(res.data.data.userVoice?.voiceDetailProperty?.text);
        if (!this.playvoice) {
          this.getPlayVoice(this.playobj);
        }
      });
    this.getSimilar(
      this.$route.query.id
    );
    this.getlisten();
    this.getcomment(
      this.$route.query.id
    );
  },
  watch: {
    playvoice(playvoice) {
      console.log(playvoice);
      if (playvoice?.voiceId) {
        this.axios
          .get(
            `/voice/info/${playvoice?.voiceId}`
          )
          .then((res) => {
            console.log(res.data.data);
            this.playobj = res.data.data;
          });
        this.getSimilar(playvoice?.voiceId);
        this.getlisten();
        this.getcomment(playvoice?.voiceId);
      }
      else if (playvoice?.voiceInfo?.voiceId) {
        this.axios
          .get(
            `/voice/info/${playvoice?.voiceInfo?.voiceId}`
          )
          .then((res) => {
            console.log(res.data.data);
            this.playobj = res.data.data;
          });
        this.getSimilar(playvoice?.voiceInfo?.voiceId);
        this.getlisten();
        this.getcomment(playvoice?.voiceInfo?.voiceId);
      }
      else {
        this.axios
          .get(
            `/voice/info/${playvoice?.userVoice.voiceInfo.voiceId}`
          )
          .then((res) => {
            console.log(res.data.data);
            this.playobj = res.data.data;
          });
        this.getSimilar(playvoice?.userVoice.voiceInfo.voiceId);
        this.getlisten();
        this.getcomment(playvoice?.userVoice.voiceInfo.voiceId);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.playingview {
  padding-top: 58rem;
  background: #f2f2f2;

  .pl_head {
    padding: 16rem 0 9rem;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    .pl_img {
      width: 226rem;
      height: 226rem;
      border-radius: 7rem;
      overflow: hidden;
      box-shadow: 2rem 2rem 20rem 4rem rgba(0, 0, 0, 0.13);
      position: relative;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }

      .pl_btn {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        color: #fff;

        .act {
          width: 50rem;
          height: 50rem;
          background-repeat: no-repeat;
          background-position: center;
          background-size: 36rem;
        }

        .prev {
          background-image: url("../assets/previous.png");
        }

        .start {
          width: 65rem;
          height: 65rem;
          background-image: url("../assets/play_circle.png");
          background-size: 56rem;
          margin: 0 20rem;
        }

        .pause {
          width: 65rem;
          height: 65rem;
          background-image: url("../assets/pause_circle.png");
          background-size: 56rem;
          margin: 0 20rem;
        }

        .next {
          background-image: url("../assets/previous.png");
          transform: rotate(180deg);
        }
      }
    }

    .pl_name {
      font-size: 17rem;
      font-weight: 700;
      color: #333;
      margin: 25rem auto 15rem;
      line-height: 20rem;
      width: 226rem;
      height: 20rem;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .pl_function {
      display: block;
      width: 100%;

      .pl_list {
        width: 100%;
        margin: 8rem auto;
        display: flex;
        justify-content: center;
        align-items: center;

        .pl_item {
          width: 24rem;
          margin: 0 21rem;

          img {
            display: block;
            width: 100%;
          }
        }
      }
    }

    .down_btn {
      width: 275rem;
      height: 40rem;
      border-radius: 20rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14rem;
      letter-spacing: 2rem;
      color: #fff;
      background: #fe5656;
      font-weight: 500;
      box-shadow: 0 2px 4px 0 rgb(255 98 98 / 30%);
      margin: 15rem auto;
    }
  }

  .pl_info {
    background-color: #fff;
    margin: 10rem 0;
    padding-bottom: 16rem;

    .title {
      height: 40rem;
      display: flex;
      align-items: center;
      padding-left: 20rem;
      font-size: 14rem;
      opacity: 0.3;
      color: #000;
    }

    .desc {
      display: flex;
      padding: 0 20rem;
      justify-content: center;
      height: 56rem;
      align-items: center;

      .wrap {
        flex: 1;
        width: 0;
        display: flex;
        justify-content: center;
        height: 56rem;
        align-items: center;

        img {
          flex: 0 0 40rem;
          width: 40rem;
          height: 40rem;
          border-radius: 50%;
        }

        .userinfo {
          flex: 1;
          width: 0;
          margin-left: 10rem;
          margin-right: 5rem;
          text-align: left;

          .name {
            font-size: 15rem;
            color: #000;
            margin-top: 1rem;
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            word-break: break-all;
          }

          .detail {
            font-size: 13rem;
            color: rgba(0, 0, 0, 0.3);
          }
        }
      }

      .guanzhu {
        flex: 0 0 62rem;
        width: 62rem;
        height: 29rem;
        border-radius: 14.5rem;
        border: 1rem solid #fe5353;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12.5rem;
        background-color: #fe5353;
        color: #fff;
        font-weight: 700;
        box-shadow: 0 2rem 4rem 0 rgb(255 98 98 / 30%);

        span {
          display: flex;
          justify-content: center;
          align-items: center;

          i {
            width: 12.5rem;
            height: 12.5rem;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 9rem;
            background-image: url("../assets/关注.png");
          }
        }
      }
    }

    .voice_info {
      padding: 0 20rem;

      h3 {
        font-size: 15rem;
        opacity: 0.8;
        padding-bottom: 4rem;
        margin-top: 5rem;
        line-height: 1.6;
        font-weight: 700;
        color: #000;
        // overflow: hidden;
        // white-space: nowrap;
        // text-overflow: ellipsis;
      }

      .info {
        font-size: 13rem;
        color: rgba(0, 0, 0, 0.3);
        padding-bottom: 16rem;
        line-height: 1;
      }

      .deta {
        font-weight: 400;
        display: block;

        p {
          display: block;
          width: 100%;
          position: relative;
          margin: 14rem 0;

          i {
            display: block;
            font-style: normal;
            font-size: 13rem;
            color: #999;
            line-height: 1.8;
            padding-right: 20rem;
            margin: 0;

            // white-space: pre-wrap;
            &.actv {
              word-wrap: break-word;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              // padding-right: 15rem;
            }
          }

          span {
            position: absolute;
            display: block;
            top: 0;
            right: 0;
            width: 20rem;
            height: 20rem;
            background-image: url("../assets/top.png");
            background-size: 12rem;
            background-position: center;
            background-repeat: no-repeat;
            transform: rotate(180deg);

            &.actived {
              transform: rotate(0deg);
            }
          }
        }
      }
    }
  }

  .similarlist {
    .title {
      padding-left: 20rem;
      padding-top: 6rem;
      font-size: 14rem;
      color: #000;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 36rem;
      background-color: #fff;
      color: #b3b3b3;
    }
  }

  .voicelist {
    background: #fff;
    margin-top: 16rem;
    padding-bottom: 10rem;

    .title {
      padding-left: 20rem;
      padding-top: 6rem;
      font-size: 14rem;
      color: #000;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 36rem;
      background-color: #fff;
      color: #b3b3b3;
    }

    .down_btn {
      width: 275rem;
      height: 40rem;
      border-radius: 20rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14rem;
      letter-spacing: 2rem;
      color: #fff;
      background: #fe5656;
      font-weight: 500;
      box-shadow: 0 2px 4px 0 rgb(255 98 98 / 30%);
      margin: 15rem auto;
    }
  }

  .commentlist {
    background: #fff;
    margin-top: 10rem;
    padding: 0 20rem;

    .title {
      padding-top: 11rem;
      font-size: 14rem;
      color: #000;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 36rem;
      background-color: #fff;
      color: #b3b3b3;
    }

    .app_open {
      .go_tip {
        border-top: 1rem solid #dbdbdb;
        height: 50rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: #999;
        padding-left: 43rem;
        font-size: 14rem;
      }
    }
  }
}
</style>