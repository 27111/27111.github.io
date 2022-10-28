<template>
  <div class="artistInfo-head" v-if="artistInfo">
    <img :src="artistInfo.cover" alt="" />
    <div class="artist-info">
      <p class="ar-name">{{ artistInfo.name }}</p>
      <p class="ar-rank" v-if="artistInfo.rank">
        歌手榜{{ showArea(artistInfo.rank.type) }}地区 No.
        {{ artistInfo.rank.rank }}
      </p>
      <div class="ar-simple">
        <p class="ar-follow">
          <span>粉丝</span>
          <span>{{
            fanData?.fansCnt > 10000
              ? fanData?.fansCnt > 100000000
                ? (fanData?.fansCnt / 100000000).toFixed(1) + "亿"
                : (fanData?.fansCnt / 10000).toFixed(1) + "万"
              : fanData?.fansCnt
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    artistInfo: Object,
    fanData: Object,
  },
  methods: {
    showArea(num) {
      if (num) {
        switch (num) {
          case 1:
            return "华语";
          // break;
          case 2:
            return "欧美";
          // break;
          case 3:
            return "韩语";
          // break;
          case 4:
            return "日语";
          // break;
        }
      }
    },
  },
  created() {
    // console.log(this.fanNum);
    // console.log(this.artistInfo?.rank?.type);
  },
};
</script>

<style lang="less" scoped>
.artistInfo-head {
  position: relative;
  padding-top: 82.9%;
  &::after {
    position: absolute;
    top: 0;
    content: "";
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    left: 0;
  }
  img {
    width: 100%;
    position: absolute;
    top: 0;
    overflow: hidden;
  }
  .artist-info {
    position: absolute;
    left: 16rem;
    bottom: 30rem;
    color: #fff;
    z-index: 2;
    .ar-name {
      font-size: 20rem;
      line-height: 20rem;
    }
    .ar-rank {
      margin-top: 15rem;
      font-size: 15rem;
    }
    .ar-simple {
      margin-top: 15rem;
      opacity: 0.8;
      font-size: 12rem;
      line-height: 12rem;
      .ar-follow {
        font-size: 13rem;
        height: 12rem;
        margin-top: 10rem;
        span:nth-of-type(2) {
          margin-left: 4rem;
        }
      }
    }
  }
}
</style>