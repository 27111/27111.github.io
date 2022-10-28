<template>
  <li
    class="home-card"
    @click="
      $router.push({
        path: '/playlist',
        query: { id: item.id, count: item.playCount },
      })
    "
  >
    <div class="music-pic">
      <img
        :src="`${item.picUrl}?imageView=1&type=webp&thumbnail=370x0`"
        alt=""
      />
      <span>{{
        item.playCount > 10000
          ? item.playCount > 100000000
            ? (item.playCount / 100000000).toFixed(1) + "亿"
            : (item.playCount / 10000).toFixed(1) + "万"
          : item.playCount
      }}</span>
    </div>
    <p>{{ item.name }}</p>
  </li>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="less" scoped>
li.home-card {
  margin-bottom: 10rem;
  width: 45%;
  border-radius: 10rem;
  overflow: hidden;
  color: #fff;
  // flex-grow: 1;
  position: relative;
  .music-pic {
    font-size: 0;
    position: relative;
    img {
      border-radius: 10rem;
    }
    span {
      position: absolute;
      font-size: 12rem;
      left: 5rem;
      bottom: 2rem;
      z-index: 3;
      padding-left: 20rem;
      color: #fff;
      background-image: url("../assets/icon_ranking_play.png");
      background-position: 0;
      background-repeat: no-repeat;
      background-size: 11rem 10rem;
    }
  }
  // &:nth-child(3n + 2) {
  //   margin: 0 3rem;
  // }
  &::after {
    content: " ";
    position: absolute;
    left: 0;
    top: 72%;
    width: 100%;
    height: 20px;
    z-index: 2;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    );
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding: 6rem 2rem 0 6rem;
    min-height: 30rem;
    line-height: 1.2;
    font-size: 13rem;
  }
}
</style>
