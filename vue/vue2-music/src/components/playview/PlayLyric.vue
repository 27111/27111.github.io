<template>
  <div class="playlyric">
    <template v-if="song.song">
      <div
        class="playdisc-bg"
        :style="{
          backgroundImage: 'url(' + song.picUrl + ')',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }"
      ></div>
      <div class="lyricdomain">
        <ul
          class="lyriclist"
          ref="ul"
          :style="{ transform: `translateY(-${changeHeight}rem)` }"
        >
          <!-- :style="{ transform: `translateY(${changeHeight})` }" -->
          <li ref="li" v-for="(lyric, index) in lyricObj" :key="index">
            <!-- { color: '#22d7c8' } : { color: 'white' } -->
            <span
              :style="
                index + 1 === liIndex
                  ? `animation: jian ${wenziToggle(lyricObj, index)} linear;`
                  : ''
              "
              :text="lyric.text"
              :class="playing == true ? '' : 'attc'"
              >{{ lyric.text === "" ? "......" : lyric.text }}</span
            >
          </li>
        </ul>
      </div>
    </template>
    <template v-else>
      <div
        class="playdisc-bg"
        :style="{
          backgroundImage: 'url(' + song.al.picUrl + ')',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }"
      ></div>
      <div class="lyricdomain">
        <ul
          class="lyriclist"
          ref="ul"
          :style="{ transform: `translateY(-${changeHeight}rem)` }"
        >
          <!-- :style="{ transform: `translateY(${changeHeight})` }" -->
          <li ref="li" v-for="(lyric, index) in lyricObj" :key="index">
            <span
              :style="
                index + 1 === liIndex
                  ? `animation: jian ${wenziToggle(lyricObj, index)} linear;`
                  : ''
              "
              :text="lyric.text"
              @click.stop="wenziToggle(lyricObj, index)"
              :class="playing == true ? '' : 'attc'"
              >{{ lyric.text === "" ? "......" : lyric.text }}</span
            >
            <!-- :style="
                index + 1 === liIndex
                  ? `background-image: linear-gradient(to right, #22d7c8 0,#22d7c8 ${jianbian}, #00bfff 0 , #00bfff 100%);`
                  : `background-image: linear-gradient(to right, white, white);`
              " -->
          </li>
        </ul>
      </div>
    </template>
    <!-- <span class="yi">译</span> -->
  </div>
</template>

<script>
export default {
  props: {
    song: Object,
    currentTime: Number,
    showOne: Boolean,
    duration: Number,
    playing: Boolean,
    // changeTime: Number,
  },
  data() {
    return {
      lyricArr: null,
      lyricObj: null,
      liHeight: [],
      liIndex: 0,
      newarr: [],
      changeHeight: 0,
      jianbian: "0",
      timeNum: 0,
    };
  },
  methods: {
    // wenzichange(t, arr) {
    //   // console.log(arr);
    //   var i = arr.findIndex((e) => e.time > t);
    //   // console.log(i);
    //   // console.log(arr[i - 1]);
    //   if (i === -1) {
    //     i = this.lyricArr.length - 1;
    //   }
    //   if (arr[i]) {
    //     // console.log(t * 100 - arr[i - 1].time * 100);
    //     // console.log(arr[i].time * 100 - arr[i - 1].time * 100);
    //     // console.log(
    //     //   (
    //     //     (t * 100 - arr[i - 1].time * 100) /
    //     //     (arr[i].time * 100 - arr[i - 1].time * 100)
    //     //   ).toFixed(2) *
    //     //     100 +
    //     //     "%"
    //     // );
    //     this.jianbian =
    //       (
    //         (t * 100 - arr[i - 1].time * 100) /
    //         (arr[i].time * 100 - arr[i - 1].time * 100)
    //       ).toFixed(2) *
    //         100 +
    //       "%";
    //     // console.log(this.jianbian);
    //     return this.jianbian;
    //   } else if (i === this.lyricArr.length - 1) {
    //     this.jianbian =
    //       (
    //         (t * 100 - arr[i - 1].time * 100) /
    //         (this.duration * 100 - arr[i - 1].time * 100)
    //       ).toFixed(2) *
    //         100 +
    //       "%";
    //     return this.jianbian;
    //   }
    // },
    wenziToggle(arr, i) {
      // console.log(i);
      if (arr[i + 1]) {
        // console.log((arr[i + 1].time - arr[i].time).toFixed(2));
        return (arr[i + 1].time - arr[i].time).toFixed(2) + "s";
      } else {
        // console.log((this.duration - arr[i].time).toFixed(2));
        return (this.duration - arr[i].time).toFixed(2) + "s";
      }
    },
    getLyrci(id) {
      this.axios
        .get("https://apis.netstart.cn/music/lyric", {
          params: { id },
        })
        .then((res) => {
          // console.log(res.data.lrc.lyric);
          this.lyricArr = res.data.lrc.lyric.split("\n");
          // console.log(this.lyricArr);
        });
    },
    updateLry(time) {
      // 更新歌词位置
      // console.log(this.liHeight.length === 0);
      // console.log(this.$refs.li);
      // console.log(this.$refs.li[0].offsetHeight);
      // console.log(this.liHeight);
      this.liHeight = [];
      if (this.liHeight.length === 0 && !this.showOne && this.$refs.li) {
        this.$refs.li.forEach((e) => {
          this.liHeight.push(e.offsetHeight);
        });
      }
      if (this.lyricObj) {
        // console.log(this.lyricObj.findIndex((e) => e.time > time));
        this.liIndex = this.lyricObj.findIndex((e) => e.time > time);
        // console.log(this.$refs.ul);
        // console.log(this.newarr);
        // console.log(time);
        // console.log(this.liIndex);
        // console.log(this.newarr);
        if (this.liIndex === -1) {
          this.liIndex = this.lyricArr.length - 1;
        }
        this.newarr = this.getchangeHeight.filter((e, i) => i < this.liIndex);
        // console.log(this.liIndex);
        if (this.newarr.length > 0) {
          // console.log(this.newarr.reduce((a, b) => a + b));
          // console.log(this.liIndex);
          this.changeHeight = this.newarr.reduce((a, b) => a + b);
        }
      }
    },
  },
  computed: {
    getchangeHeight() {
      return this.liHeight;
    },
  },
  created() {
    // console.log(this.song.id);
    this.getLyrci(this.song.id);
    // console.log(this.lyricArr);
  },
  watch: {
    song(song) {
      this.getLyrci(song.id);
    },
    //  还没搞懂该方法
    lyricArr(lyricArr) {
      this.lyricObj = lyricArr
        .filter((e) => e)
        .map((e) => {
          var { groups } = e.match(
            /\[(?<mm>\d{2}):(?<ss>\d{2}\.\d{2,3})\](?<text>.*)/
          );
          return {
            time: groups.mm * 60 + groups.ss * 1,
            text: groups.text.trim(),
          };
        });
    },
    currentTime(time) {
      // console.log(time);
      this.updateLry(time);
      // console.log(this.lyricObj);
      // this.wenzichange(time, this.lyricObj);
      // console.log(this.wenzichange(time, this.lyricObj));
    },
  },
  // mounted() {
  //   // 更新歌词位置
  //   console.log(this.$refs.ul);
  //   console.log(this.$refs.li);
  //   if (this.liHeight.length === 0 && !this.showOne && this.$refs.li) {
  //     this.$refs.li.forEach((e) => {
  //       this.liHeight.push(e.offsetHeight);
  //     });
  //   }
  //   if (this.lyricObj) {
  //     this.liIndex = this.lyricObj.findIndex((e) => e.time > this.currentTime);
  //     if (this.liIndex === -1) {
  //       this.liIndex = this.lyricArr.length - 1;
  //     }
  //     this.newarr = this.getchangeHeight.filter((e, i) => i < this.liIndex);
  //     if (this.newarr.length > 0) {
  //       this.changeHeight = this.newarr.reduce((a, b) => a + b);
  //     }
  //   }
  // },
};
</script>


<style lang="less">
.playlyric {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 40rem 0 80rem 0;
  z-index: -1;
  .playdisc-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    // margin: auto;
    z-index: -1;
    transform: scale(1.5);
    transform-origin: center center;
    filter: blur(30px);
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .lyricdomain {
    width: 100%;
    height: calc(100vh - 200rem);
    overflow: hidden;
    // overflow: auto;
    // padding: 20rem 0 0;
    margin: 40rem 0 0rem 0;
    .lyriclist {
      width: 100%;
      margin-top: calc(50vh - 90rem);
      text-align: center;
      transform: translateY(0rem);
      // overflow: hidden;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      transition: all 0.5s;
      li {
        width: 200rem;
        font-size: 16rem;
        padding: 12rem 0;
        text-align: center;
        // position: relative;
        // background-image: linear-gradient(to right, orange, purple);
        // -webkit-background-clip: text;
        // color: transparent;
        span {
          // transition: inherit;
          // display: inline-block;
          -webkit-background-clip: text;
          // color: #fff;
          color: transparent;
          // transition: all 0.5s;
          // background-image: linear-gradient(to right, #22d7c8 0, #22d7c8 0);
          background-image: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.5) 0,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 1) 100%
          );
          // background-repeat: no-repeat;
          background-size: 200% 100%;
          background-position: 0 0;
          &.spanactive {
            background-image: linear-gradient(
              to right,
              #22d7c8 0,
              #22d7c8 100%
            );
          }
          &.attc {
            animation-play-state: paused !important;
          }
        }
        // &::before {
        //   content: attr(text);
        //   position: absolute;
        //   z-index: 10;
        //   color: orange;
        //   -webkit-mask: linear-gradient(to right, orange, 0%, transparent);
        // }
      }
    }
  }
  .yi {
    position: absolute;
    right: 0;
    width: 20rem;
    height: 20rem;
    font-size: 14rem;
    text-align: center;
    // display: inline-block;
    margin: 5rem 10rem;
    color: #4f4f4f;
    border: 1rem solid #4f4f4f;
    &.active {
      color: #fff;
      border: 1rem solid #fff;
    }
  }
}
</style>
<style>
@keyframes jian {
  from {
    background-image: linear-gradient(
      to right,
      rgba(215, 34, 49, 1) 0,
      rgba(215, 34, 49, 1) 50%,
      rgba(34, 215, 200, 1) 0%,
      rgba(34, 215, 200, 1) 100%
    );
    background-position: 0 0;
  }
  to {
    background-image: linear-gradient(
      to right,
      rgba(215, 34, 49, 1) 0,
      rgba(215, 34, 49, 1) 50%,
      rgba(34, 215, 200, 1) 0%,
      rgba(34, 215, 200, 1) 100%
    );
    background-position: -100% 0;
  }
}
</style>