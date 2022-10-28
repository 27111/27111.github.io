<template>
  <div class="itemview" v-if="itemdatas">
    <div class="itemhead">
      <div
        class="itembg"
        :style="`background-image:url(${itemdatas.playSheetInfo.cover})`"
      ></div>
      <div class="itemcover">
        <div class="itempic">
          <img :src="itemdatas.playSheetInfo.cover" alt="" />
        </div>
        <div class="itemifon">
          <h1>{{ itemdatas.playSheetInfo.name }}</h1>
          <div
            class="userInfo"
            @click="
              $router.push({
                path: '/user',
                query: {
                  userId: itemdatas.playSheetInfo.userId,
                },
              })
            "
          >
            <span>{{ itemdatas.playSheetInfo.owner }}</span>
            <i></i>
          </div>
        </div>
      </div>
    </div>
    <div class="open">打开APP领取声优福利</div>
    <ul class="itemlist">
      <div class="listhead">
        <div
          class="playIcon"
          @click="
            getPlayList(itemdatas.voices);
            getPlayVoice(itemdatas.voices[0]);

          "
        >
          <i></i>
          <span>全部播放</span>
        </div>
        <div class="total">
          (共{{ itemdatas?.playSheetInfo.voiceNum }}个声音)
        </div>
      </div>
      <TypeList
        v-for="(typedata, index) in itemsplice"
        :key="index"
        :typedata="typedata"
        @click.native="
          getPlayList(itemsplice);
          getPlayVoice(typedata);
          toggleplaying();
        "
      ></TypeList>
    </ul>
    <div class="xiala" @click="num += 10" v-show="!panduan">
      <img src="../assets/xiala.png" alt="" />
    </div>
    <div class="finish" v-show="panduan">别拉了，到底啦o(╥﹏╥)o</div>
    <div class="open" v-show="!panduan">打开APP收听更多声音</div>
    <div class="to_top" v-show="showtop" @click="backTop">
      <i></i>
    </div>
    <!-- 打开APP收听更多声音 -->
  </div>
</template>

<script>
import TypeList from "@/components/TypeList.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    TypeList,
  },
  data() {
    return {
      itemdatas: null,
      seleitem: [],
      num: 10,
      page: 1,
      showtop: false,
    };
  },
  computed: {
    itemsplice() {
      return this.seleitem.filter((e, i) => i + 1 <= this.num);
    },
    panduan() {
      // console.log(this.itemsplice.length, this.seleitem.length);
      return this.itemsplice.length == this.seleitem.length;
    },
  },
  methods: {
    ...mapMutations(["getPlayList", "getPlayVoice", "toggleplaying"]),
    getItem(id, page) {
      this.axios
        .get("playsheet/data", {
          params: {
            id,
            page: page,
            count: 30,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (this.page == 1) {
            this.itemdatas = res.data;
          }
          this.seleitem = [...this.seleitem, ...res.data.voices];
        });
    },
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
    // backtop() {
    //   document.documentElement.scrollTop = 0;
    // },
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
  },
  watch: {
    num(num) {
      if (num % 30 === 0) {
        this.page += 1;
        this.getItem(this.$route.query.id, this.page);
      }
    },
  },
  mounted() {
    // console.log(this.$route.query.id);
    this.getItem(this.$route.query.id, this.page);
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
};
</script>

<style lang="less" scoped>
.itemview {
  .itemhead {
    margin-top: 58rem;
    width: 100%;
    height: 148rem;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 16rem;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.71);
    overflow: hidden;
    .itembg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-size: 100%;
      transform: scale(1.2);
      filter: blur(20px);
    }
    .itemcover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-width: 100%;
      z-index: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 15rem;
      background: rgba(0, 0, 0, 0.161);
      .itempic {
        width: 96rem;
        height: 96rem;
        border-radius: 50%;
        margin-right: 28rem;
        box-shadow: 0 0 5px rgb(0 0 0 / 13%);
        position: relative;
        top: 10rem;
        flex-shrink: 0;
        img {
          border-radius: 4rem;
          display: block;
          width: 100%;
          height: 96rem;
        }
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: hsla(0, 0%, 100%, 0.2);
          border-radius: 4rem;
          z-index: -1;
          top: -6rem;
          left: 6rem;
        }
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: hsla(0, 0%, 100%, 0.2);
          border-radius: 4rem;
          z-index: -1;
          top: -12rem;
          left: 12rem;
        }
      }
      .itemifon {
        color: #fff;
        text-shadow: 0 1rem 2rem rgb(0 0 0 / 10%);
        width: 65%;
        // flex: 1;
        h1 {
          font-size: 18rem;
          text-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
          font-weight: 400;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          word-break: break-all;
        }
        .userInfo {
          display: flex;
          align-items: center;
          margin-top: 4rem;
          font-size: 13rem;
          text-shadow: 0 1px 2px rgb(0 0 0 / 10%);
          color: #fff;
          span {
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            word-break: break-all;
          }
          i {
            display: block;
            width: 17rem;
            height: 17rem;
            background-image: url("../assets/right_arrow.png");
            background-repeat: no-repeat;
            background-size: 9rem;
            background-position: center;
          }
        }
      }
    }
  }
  .open {
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
  .itemlist {
    .listhead {
      height: 50rem;
      align-items: center;
      display: flex;
      justify-content: flex-start;
      color: #b2b2b2;
      font-size: 14rem;
      position: relative;
      width: 345rem;
      margin: 0 auto 10rem;
      .playIcon {
        height: 35rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000;
        font-weight: 400;
        font-size: 16rem;
        i {
          display: block;
          width: 25rem;
          height: 25rem;
          margin-right: 3rem;
          background-image: url("../assets/play_black.png");
          background-repeat: no-repeat;
          background-size: 20rem;
          background-position: center;
        }
        span {
          margin-right: 5rem;
        }
      }
      .total {
        height: 35rem;
        display: flex;
        align-items: center;
        font-size: 12rem;
      }
      &::after {
        position: absolute;
        content: "";
        display: block;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        background: #dbdbdb;
        z-index: 100;
        transform: scaleY(0.5);
      }
    }
  }
  .finish {
    height: 100rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #666;
    font-size: 14rem;
  }
  .xiala {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      width: 30rem;
      height: 30rem;
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