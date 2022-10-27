<template>
  <ul class="tui_list" v-if="btDatas">
    <li v-for="btData in btDatas" @click="$router.push({path:'/btview',query:{id:btData.id}})">
      <div class="left">
        <van-image :src="btData.avatar" width="30" height="30" fit="contain" position="center" lazy-load
          v-lazy="btData.avatar">
          <template v-slot:loading>
            <van-loading type="spinner" size="30" />
          </template>
          <template v-slot:error>加载失败</template>
        </van-image>
      </div>
      <div class="right">
        <div class="text">
          <h3 class="title">{{btData.content}}</h3>
          <div class="num">
            <span>帖子 {{btData.counter.article_count}}</span>
            <span>浏览 {{btData.counter.view_count}}</span>
          </div>
        </div>
        <div class="follow"></div>
      </div>
    </li>
  </ul>
</template>

<script setup>

defineProps({
  btDatas: Array,
});
const getBtId = ((id) => {
  console.log(id);
});
</script>

<style lang="less" scoped>
.tui_list {
  li {
    display: flex;
    align-items: center;
    padding: 10rem 0;

    .left {
      border-radius: 5rem;
      overflow: hidden;
      width: 30rem;
      height: 30rem;
      flex-shrink: 0;
    }

    .right {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      margin-left: 12rem;

      .text {

        .title {
          font-size: 13.5rem;
          font-weight: bold;
          color: #3d3d3d;
        }

        .num {
          display: flex;
          align-items: center;

          span {
            display: block;
            font-size: 12rem;
            transform: scale(.9);
            color: #b1b1b1;
            position: relative;
            left: -1.5rem;

            &:nth-of-type(1) {
              margin-right: 5rem;
            }
          }
        }
      }

      .follow {
        width: 36rem;
        height: 20rem;
        background-image: url("../assets/souye/ic_operation_follow_yellow.png");
        background-size: 36rem;
        background-repeat: no-repeat;
        background-position: center;
      }

      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 1px;
        bottom: -10rem;
        background-color: #9c9c9c;
        transform: scaleY(.2);
      }
    }

    // &:nth-of-type(1),
    // &:nth-of-type(2) {
    //   .right {
    //     &::before {
    //       position: absolute;
    //       content: "";
    //       width: 100%;
    //       height: 1px;
    //       bottom: -10rem;
    //       background-color: #9c9c9c;
    //       transform: scaleY(.2);
    //     }
    //   }
    // }
  }
}
</style>