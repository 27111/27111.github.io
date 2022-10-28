<template>
  <li class="sr-songs">
    <div class="sr-songName sr-active">{{ resultsong.name }}</div>
    <div class="sr-singer sr-active">
      <i class="sr-icon" v-show="showIcon(resultsong.sq)"></i>
      {{ resultsong.ar[0].name }}-{{ resultsong.al.name }}
    </div>
    <span class="sr-btn"></span>
  </li>
</template>

<script>
export default {
  props: {
    resultsong: Object,
  },
  methods: {
    showIcon(icon) {
      if (icon) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
li.sr-songs {
  position: relative;
  padding: 8.5rem 0;
  margin: 0 5%;
  .sr-active {
    width: calc(100% - 52rem);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
  }
  .sr-songName {
    color: #fcfffd;
    font-size: 17rem;
  }
  .sr-singer {
    font-size: 12rem;
    color: #888;
    i.sr-icon {
      display: inline-block;
      width: 12rem;
      height: 8rem;
      margin-right: 4rem;
      background: url("../assets/index_icon_2x.png") no-repeat;
      background-size: 166rem 97rem;
    }
  }
  .sr-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    display: inline-block;
    width: 22rem;
    height: 22rem;
    background: url("../assets/icon_list_next_play.png") no-repeat;
    background-size: 22rem;
    background-position: 0;
    margin-right: 25rem;
    &::after {
      position: absolute;
      top: 0;
      content: "";
      left: calc(100% + 7rem);
      width: 100%;
      height: 100%;
      background: url("../assets/icon_play_more.png");
      background-size: cover;
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
</style>