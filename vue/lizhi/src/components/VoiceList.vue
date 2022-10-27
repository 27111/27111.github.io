<template>
  <li>
    <div class="item">
      <div class="cover">
        <img src="../assets/play.png" alt="" />
        <img :src="hv.cover || hv.ownerCover" alt="" />
      </div>
      <div class="desc">
        <h6>{{ hv.name }}</h6>
        <div class="tag">
          <span>{{ format(hv.createTime) }}</span>
          <span>
            <i></i>
            {{ numchuli(hv.voiceNum) }}
          </span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    hv: Object,
  },
  methods: {
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
        display: flex;
        align-items: center;
        justify-content: flex-start;
        span {
          // display: inline-block;
          height: 20rem;
          margin-right: 10rem;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          i {
            display: block;
            width: 17rem;
            height: 17rem;
            background-image: url("../assets/列表 (2).png");
            background-size: 11rem;
            background-repeat: no-repeat;
            background-position: center;
          }
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