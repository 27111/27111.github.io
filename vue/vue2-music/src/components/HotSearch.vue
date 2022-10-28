<template>
  <li class="hotsearch-name">
    <i>{{ index + 1 }}</i>
    <a
      href="javaScript:;"
      @click="
        clickhander(hot.first),
          $emit('addHistoryMusics-SearchView-HotSearch', hot.first),
          $emit('changeVal-SearchView-HotSearch', hot.first)
      "
      >{{ hot.first }}</a
    >
  </li>
</template>

<script>
export default {
  props: {
    hot: Object,
    index: Number,
  },
  methods: {
    clickhander(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="less" scoped>
li.hotsearch-name {
  position: relative;
  display: inline-block;
  padding: 0 14rem;
  width: 50%;
  // margin: 0 8rem 8rem 0;
  height: 32rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: normal;
  margin: 5rem 0;
  i {
    position: absolute;
    left: 0;
    width: 20%;
    line-height: 32rem;
    color: #d1d2d6;
    font-size: 16rem;
    font-style: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    // font-weight: bold;
  }
  &:nth-of-type(-n + 3) i {
    color: aqua;
  }
  a {
    position: absolute;
    right: 0;
    display: inline-block;
    width: 80%;
    line-height: 32rem;
    color: #d1d2d6;
    font-size: 14rem;
    text-decoration: none;
  }
  // &::after {
  //   position: absolute;
  //   z-index: 2;
  //   content: "";
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   pointer-events: none;
  //   border-color: #d3d4da;
  //   border-radius: 32rem;
  //   border: 1rem solid rgba(0, 0, 0, 0.1);
  // }
}
</style>