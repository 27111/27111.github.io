<template>
  <li class="comment_item">
    <img :src="commentdata.photo" alt="" />
    <div class="desc">
      <div class="name">{{ commentdata.name }}</div>
      <div class="content">{{ commentdata.content }}</div>
      <div class="time">{{ format(commentdata.createTime) }}</div>
    </div>
    <div class="zan">
      <div class="good">
        <i></i>
        <span>{{ commentdata.laudCnt }}</span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    commentdata: Object,
  },
  created() {
    // console.log(this.commentdata);
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
  },
};
</script>

<style lang="less" scoped>
.comment_item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1rem solid #ddd;
  padding: 16rem 0;
  img {
    display: block;
    width: 35rem;
    height: 35rem;
    border-radius: 50%;
    margin-right: 10rem;
  }
  .desc {
    flex: 1;
    text-align: left;
    .name {
      font-size: 15rem;
      color: #b2b2b2;
      padding-bottom: 8rem;
    }
    .content {
      width: 250rem;
      font-size: 15rem;
      color: #4c4c4c;
      margin: 0;
      padding: 0 0 10rem;
      word-break: break-all;
    }
    .time {
      font-size: 12rem;
      color: #b2b2b2;
    }
  }
  .zan {
    .good {
      font-size: 0.24rem;
      color: #b2b2b2;
      display: flex;
      align-items: center;
      i {
        display: block;
        width: 16rem;
        height: 16rem;
        background-image: url("../assets/点赞.png");
        background-size: 16rem;
        background-repeat: no-repeat;
        background-position: center;
      }
      span {
        margin-left: 2.5rem;
        font-size: 14rem;
      }
    }
  }
}
</style>