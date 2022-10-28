<template>
  <li class="hotsearch-li">
    <i class="hotsearch-icon"></i>
    <span
      @click="
        $emit('addHistoryMusics-SearchView-HeaderSearch', music.keyword),
          $emit('changeVal-SearchView-HeaderSearch', music.keyword)
      "
      >{{ music.keyword }}</span
    >
  </li>
</template>

<script>
export default {
  props: {
    music: Object,
  },
  methods: {
    clickhander(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="less" scoped>
li.hotsearch-li {
  display: flex;
  height: 45rem;
  padding-left: 10rem;
  align-items: center;
  i.hotsearch-icon {
    display: inline-block;
    width: 15rem;
    height: 15rem;
    margin-right: 7rem;
    background-image: url("../assets/下载 (3).svg");
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
    vertical-align: middle;
  }
  span {
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
    flex: 1;
    padding-right: 10rem;
    font-size: 15rem;
    line-height: 45rem;
    color: #fff;
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-bottom: 1rem solid rgba(0, 0, 0, 0.1);
      z-index: -1;
    }
  }
}
</style>