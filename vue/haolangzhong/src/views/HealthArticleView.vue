<template>
  <div class="health-article">
    <header>
      <i @click="backRoute"></i>
      <span>养生好文</span>
      <i></i>
    </header>
    <div class="health-title">
      <p>{{ healthArticle?.article.articleDescribe }}</p>
      <div class="h-text">
        <span>{{ healthArticle?.article.articleLabel }}</span>
        <span>{{ healthArticle?.article.articleReleaseTime }}</span>
      </div>
    </div>
    <div v-html="healthArticle?.article.articleContent"></div>
    <div v-html="healthArticle?.publicContent"></div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      healthArticle: null,
    };
  },
  mounted() {
    this.axios
      .post(
        "/app-server/article/mobile/getById",
        qs.stringify({
          os: 1,
          terminal: 0,
          userId: "7a002ef806f64bab88797f17e1f4dc28",
          articleId: "FPgsqhQD1643182847887",
        })
      )
      .then((res) => {
        // console.log(res);
        this.healthArticle = res.data.data;
      });
  },
  methods: {
    backRoute() {
      this.$router.back();
    },
  },
};
</script>

<style lang="less" scoped>
.health-article {
  header {
    width: 100%;
    position: fixed;
    top: 0;
    padding: 12rem;
    background-color: #f2f2f2;
    display: flex;
    justify-content: space-between;
    i {
      vertical-align: middle;
      display: inline-block;
      width: 24rem;
      height: 24rem;
      background-repeat: no-repeat;
      background-position: center;
      &:nth-of-type(1) {
        background-image: url("../assets/icon_back_im.png");
        background-size: 10rem;
      }
      &:nth-of-type(2) {
        background-image: url("../assets/icon_shop_shape2.png");
        background-size: 26rem;
      }
    }
    span {
      display: inline-block;
      vertical-align: middle;
      font-size: 18rem;
    }
  }
  .health-title {
    padding-top: 48rem;
    p {
      text-align: left;
      padding: 12rem 15rem 0 15rem;
      font-size: 18rem;
      font-weight: bold;
    }
    .h-text {
      display: flex;
      padding: 12rem 15rem 15rem 15rem;
      justify-content: space-between;
      span {
        color: rgb(169, 169, 169);
        font-size: 14px;
      }
    }
  }
}
</style>
<style>
img {
  vertical-align: top;
}
</style>