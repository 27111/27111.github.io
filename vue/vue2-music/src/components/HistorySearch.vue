<template>
  <li
    class="history-music-name"
    @click="
      $emit('addHistoryMusics-SearchView-HistorySearch', historymusic.name),
        $emit('changeVal-SearchView-HistorySearch', historymusic.name)
    "
  >
    <!-- <i class="history-icon"></i> -->
    <div class="history-wrap">
      <span class="historymusic-name" @click="randomNum">{{
        historymusic.name
      }}</span>
      <div class="history-x-wrap">
        <i
          class="history-x"
          @click="
            $emit('delehistoryMusics-SearchView-HistorySearch', historymusic.id)
          "
        ></i>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    historymusic: Object,
  },
  methods: {
    randomNum() {
      console.log(Math.ceil(Math.random() * 10000000 + 10000000));
    },
  },
};
</script>

<style lang="less" scoped>
li.history-music-name {
  display: flex;
  background-color: rgb(34, 35, 39);
  align-items: center;
  height: 40rem;
  margin: 5rem 5rem;
  border-radius: 45rem;
  padding: 0 15rem;
  // i.history-icon {
  //   display: inline-block;
  //   margin: 0 10rem;
  //   width: 15rem;
  //   height: 15rem;
  //   background-image: url("../assets/下载 (4).svg");
  //   background-position: 0 0;
  //   background-size: contain;
  //   background-repeat: no-repeat;
  // }
  .history-wrap {
    display: flex;
    align-items: center;
    flex-grow: 1;
    height: 100%;
    position: relative;
    span.historymusic-name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: normal;
      flex-grow: 1;
      display: flex;
      align-items: center;
      margin-right: 10rem;
      font-size: 14rem;
      color: #d1d2d6;
    }
    .history-x-wrap {
      width: 12rem;
      height: 32rem;
      display: flex;
      align-items: center;
      i.history-x {
        display: inline-block;
        margin-left: 2rem;
        width: 12rem;
        height: 12rem;
        background-image: url("../assets/下载 (5).svg");
        background-position: 0 0;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
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