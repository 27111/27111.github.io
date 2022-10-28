<template>
  <li class="hotsinglesong-song">
    <p class="hotsinglesong-num">
      {{ index + 1 }}
    </p>
    <div class="hotsinglesong-wrap">
      <div class="hotsinglesong-name hotsinglesong-active">
        {{ singlesong.name }}
        <span v-if="singlesong.alia[0]">({{ singlesong.alia[0] }})</span>
      </div>
      <div class="hotsinglesong-singer hotsinglesong-active">
        <!-- <i class="hotsinglesong-icon" v-show="showIcon(singlesong.sq)"></i> -->
        {{ singlesong.ar[0].name }} - {{ singlesong.al.name }}
      </div>
      <span class="hotsinglesong-btn"></span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    singlesong: Object,
    index: Number,
  },
  created() {
    // console.log(this.singlesong);
  },
};
</script>

<style lang="less" scoped>
li.hotsinglesong-song {
  position: relative;
  padding: 8.5rem 0;
  // margin-left: 10rem;
  display: flex;
  p.hotsinglesong-num {
    font-size: 17rem;
    width: 40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
  }
  // &:nth-of-type(-n + 3) p.hotsinglesong-num {
  //   color: #df3436;
  // }

  .hotsinglesong-wrap {
    position: relative;
    width: calc(100% - 40rem);
    .hotsinglesong-active {
      width: calc(100% - 32rem);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: normal;
    }
    .hotsinglesong-name {
      font-size: 17rem;
      margin-bottom: 7rem;
      span {
        color: #888;
        margin-left: 4rem;
      }
    }
    .hotsinglesong-singer {
      font-size: 12rem;
      color: #888;
      // i.hotsinglesong-icon {
      //   display: inline-block;
      //   width: 12rem;
      //   height: 8rem;
      //   margin-right: 4rem;
      //   background: url("../assets/index_icon_2x.png") no-repeat;
      //   background-size: 166rem 97rem;
      // }
    }
    span.hotsinglesong-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      display: inline-block;
      width: 22rem;
      height: 22rem;
      background: url("../../assets/index_icon_2x.png") no-repeat;
      background-size: 166rem 97rem;
      background-position: -24rem 0;
      margin-right: 10rem;
    }
  }
}
</style>