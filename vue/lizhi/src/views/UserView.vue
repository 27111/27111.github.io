<template>
  <div class="userview" v-if="userInfo">
    <div class="user_info">
      <div class="cover">
        <img :src="`${userInfo.cdnPortrait}${userInfo.user.portrait}`" alt="" />
      </div>
      <div class="username">
        <h3>{{ userInfo.user.name }}</h3>
        <div class="tag">
          <img :src="userInfo.user.gender == 1 ? pic1 : pic2" alt="" />
        </div>
        <div class="guanzhu">
          <span>
            <i></i>
            关注
          </span>
        </div>
      </div>
      <div class="desc">
        <span>FM {{ userInfo.user.band }}</span>
        <span>{{ numchuli(userInfo.user.fansCount) }} 粉丝</span>
        <span>{{ numchuli(userInfo.radio.play_cnt) }}播放</span>
      </div>
      <div class="detail">
        <div class="context">
          <p :class="isAll ? 'actv' : ''">{{ userInfo.user.signature }}</p>
          <span @click="isAll = !isAll" :class="isAll ? 'actived' : ''"></span>
        </div>
      </div>
    </div>
    <section class="voice_list">
      <ul class="v_list">
        <div class="choose">
          <span
            @click="showOne = true"
            :style="showOne ? 'font-weight: 700;color: #333;' : ''"
            >热门声音</span
          >
          <span
            @click="showOne = false"
            :style="!showOne ? 'font-weight: 700;color: #333;' : ''"
            >播单({{ voicelist?.length }})</span
          >
        </div>
        <template v-if="showOne && hotVoice?.length">
          <div
            class="list_title"
            @click="
              getPlayList(hotVoice);
              getPlayVoice(hotVoice[0]);
            "
          >
            <h3>
              <i></i>
              <span>全部播放</span>
            </h3>
          </div>
          <AllVoicelist
            v-for="(hv, index) in hotVoice"
            :key="index"
            :hv="hv"
            @click.native="
              getPlayList(hotVoice);
              getPlayVoice(hv);
              toggleplaying();
            "
          />
          <div class="down_btn">打开APP收听更多热门声音</div>
        </template>
        <template v-if="showOne && !hotVoice?.length">
          <div class="finished">该主播尚未发布声音内容</div>
        </template>
        <template v-if="!showOne && voicelist?.length">
          <VoiceList
            v-for="(hv, index) in voicelist"
            :key="index"
            :hv="hv"
            @click.native="
              $router.push({
                path: '/item',
                query: { id: hv?.id },
              })
            "
          />
        </template>
        <template v-if="!showOne && !voicelist?.length">
          <div class="finished">该主播尚未发布播单内容</div>
        </template>
      </ul>
      <ul class="all_voice" v-if="showOne && allVoice?.length">
        <h3 class="title">全部声音({{ allVoice?.total }})</h3>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="别拉了，到底啦o(╥﹏╥)o"
          @load="onLoad($route.query.userId)"
        >
          <AllVoicelist
            v-for="(hv, index) in list"
            :key="index"
            :hv="hv"
            :imgstr="userInfo.cdnAudioCover"
          />
        </van-list>
      </ul>
    </section>
    <div class="to_top" v-show="showtop" @click="backTop">
      <i></i>
    </div>
  </div>
</template>

<script>
import AllVoicelist from "@/components/AllVoicelist.vue";
import VoiceList from "@/components/VoiceList.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    AllVoicelist,
    VoiceList,
  },
  data() {
    return {
      isAll: false,
      pic1: require("../assets/malesex.png"),
      pic2: require("../assets/man.png"),
      showtop: false,
      userInfo: null,
      hotVoice: null,
      voicelist: null,
      allVoice: null,
      showOne: true,
      list: [],
      loading: false,
      finished: false,
      error: false,
      totle: 0,
      page: 0,
    };
  },
  methods: {
    ...mapMutations(["getPlayList", "getPlayVoice", "toggleplaying"]),
    scrollToTop() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(document.documentElement);
      // console.log("距离顶部的距离:" + scrollTop);
      if (scrollTop > 180) {
        this.showtop = true;
      } else {
        this.showtop = false;
      }
    },
    backTop() {
      var timer = setInterval(function () {
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let speed = Math.floor(-scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          scrollTop + speed;
        if (scrollTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    },
    onLoad(id) {
      if (this.allVoice) {
        this.totle += this.allVoice?.size;
        this.page += 1;
        this.axios
          .get(`https://m.lizhi.fm/api/user/audios/${id}/${this.page}`)
          .then((res) => {
            // console.log(res.data.data);
            this.list = [...this.list, ...res.data.audios];
            if (this.list.length < this.totle) {
              this.finished = true;
            }
            this.loading = false;
          })
          .catch(() => {
            this.error = true;
          });
      }
    },
    getUserIfon(id) {
      this.axios.get(`https://m.lizhi.fm/api/user/info/${id}`).then((res) => {
        // console.log(res);
        this.userInfo = res.data;
      });
    },
    getHotVoice(id) {
      this.axios.get(`voice/hot/${id}`).then((res) => {
        // console.log(res);
        this.hotVoice = res.data.data;
      });
    },
    getList(id) {
      this.axios
        .get("playsheet/listdata", {
          params: {
            userId: id,
          },
        })
        .then((res) => {
          // console.log(res);
          this.voicelist = res.data.data;
        });
    },
    getAllVoice(id) {
      this.axios
        .get(`https://m.lizhi.fm/api/user/audios/${id}/1`)
        .then((res) => {
          // console.log(res);
          this.allVoice = res.data;
        });
    },
    numchuli(num) {
      return num > 10000
        ? num > 100000000
          ? (num / 100000000).toFixed(1) + "亿"
          : (num / 10000).toFixed(1) + "万"
        : num;
    },
  },
  created() {
    // console.log(this.$route.query.userId);
    this.getUserIfon(this.$route.query.userId);
    this.getHotVoice(this.$route.query.userId);
    this.getList(this.$route.query.userId);
    this.getAllVoice(this.$route.query.userId);
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
};
</script>

<style lang="less" scoped>
.userview {
  padding-top: 58rem;
  background-color: #f2f2f2;
  .user_info {
    background-color: #fff;
    padding-top: 15rem;
    .cover {
      margin-top: 16rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 16rem;
      img {
        display: block;
        width: 108rem;
        height: 108rem;
        border-radius: 50%;
      }
    }
    .username {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16rem;
      height: 25rem;
      h3 {
        font-size: 18rem;
        font-weight: 700;
        padding-right: 6rem;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
      }
      .tag {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 25rem;
        img {
          width: 20rem;
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
    .desc {
      padding: 8rem 16rem;
      color: rgba(0, 0, 0, 0.5);
      font-size: 13rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      line-height: 1;
      span {
        margin-right: 5rem;
      }
    }
    .detail {
      padding: 0 16rem 8rem;
      .context {
        display: block;
        width: 100%;
        position: relative;
        margin: 14rem 0;
        p {
          font-size: 0.26rem;
          color: #999;
          line-height: 1.8;
          padding-right: 20rem;
          margin: 0;
          word-wrap: break-word;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &.actv {
            white-space: pre-wrap;
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
  .voice_list {
    .v_list {
      display: block;
      width: 100%;
      margin-top: 8rem;
      padding-bottom: 8rem;
      padding-top: 16rem;
      background: #fff;
      .choose {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 16rem;
        font-size: 14rem;
        span {
          display: block;
          width: 70rem;
          display: flex;
          justify-content: flex-start;
          color: #999;
        }
      }
      .list_title {
        height: 50rem;
        display: block;
        align-items: center;
        display: flex;
        justify-content: flex-start;
        padding-top: 10rem;
        color: #b2b2b2;
        font-size: 14rem;
        position: relative;
        width: 345rem;
        margin: 0 auto;
        h3 {
          height: 20rem;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #000;
          font-weight: 400;
          font-size: 16rem;
          i {
            display: block;
            width: 26rem;
            height: 26rem;
            margin-right: 3rem;
            background-image: url("../assets/play_black.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 22rem;
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
      .finished {
        width: 350rem;
        height: 150rem;
        background: #fff;
        color: #999;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 16rem auto;
        font-size: 14rem;
        border-radius: 6rem;
      }
    }
    .all_voice {
      display: block;
      width: 100%;
      margin-top: 8rem;
      padding-top: 16rem;
      background: #fff;
      h3.title {
        padding-left: 16rem;
        font-size: 14rem;
        color: #333;
      }
      .tip {
        font-size: 20rem;
        padding: 15rem;
        text-align: center;
      }
    }
  }
  .to_top {
    position: fixed;
    bottom: 15rem;
    right: 15rem;
    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      display: block;
      width: 28rem;
      height: 28rem;
      background-image: url("../assets/top-filling.png");
      background-size: 25rem;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}
</style>