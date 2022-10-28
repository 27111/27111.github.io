<template>
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-skeleton title avatar :row="3" :loading="!tuDatas.length" v-for="tuData in (tuDatas.length ? tuDatas : 5)">
          <div class="tuItem" v-if="tuData.user">
            <div class="hot_huo" v-if="tuData.type =='hot'">
              <img src="../assets/souye/ic_rss_hot.png" alt="">
              <span>热门</span>
            </div>
            <div class="hot_huo" v-if="tuData.type =='promote'">
              <img src="../assets/souye/ic_tag_originality.png" alt="">
              <span>神原创</span>
            </div>
            <div class="video_head">
              <div class="user_info">
                <div class="user_pic" @click="$router.push({path:'/user'})">
                  <img :src="tuData.user.thumb" alt="">
                  <div class="xiangkuang" :style="`background-image:url('${tuData.user.box_url}')`"
                    v-if="tuData.user.box_url"></div>
                  <div class="tou_icon" v-if="tuData.user.talents"></div>
                </div>
                <div class="user_name" @click="$router.push({path:'/user'})">
                  <div class="name">
                    <span>{{tuData.user.login}}</span>
                    <img :src="tuData.user.titles[0].icon" alt="" v-if="tuData.user.titles">
                  </div>
                  <div class="royao" v-if="tuData.user.talents">
                    <p>{{tuData.user.talents[0].cmd_desc}}</p>
                  </div>
                </div>
              </div>
              <div class="video_icon">
                <i class="guan"></i>
                <i class="dele"></i>
              </div>
            </div>
            <div class="context">
              <p>
              <div class="topic" v-if="tuData.topic">
                <div class="top_wrap">
                  <img src="../assets/souye/ic_topic_prefix.9.png" alt="">
                  <span>{{tuData.topic.content}}</span>
                </div>
              </div>
              {{tuData.content}}
              </p>
            </div>
            <div :class="tuData.image_size.m[0] / tuData.image_size.m[1] < 1 ? 'video_wrap1':'video_wrap2'"
              v-if="tuData.image_size">
              <img :src="tuData.low_url" alt="">
              <div class="changtu" v-if="tuData.image_size.m[1] / tuData.image_size.m[0] > 3"><span>长图</span></div>
            </div>
            <div class="picture_wrap" v-if="tuData.attachments">
              <van-grid square :gutter="5" :border="false" :column-num="3">
                <van-grid-item v-for="attachment in tuData.attachments">
                  <!-- <img :src="attachment.origin_url" /> -->
                  <div class="pic" :style="`background-image:url('${attachment.origin_url}')`"
                    v-lazy:background-image="attachment.origin_url">
                    <div class="gif_icon" v-if="attachment.format == 'gif'"><span>动图</span></div>
                  </div>
                </van-grid-item>
              </van-grid>
            </div>
            <div class="hot_com" v-if="tuData.hot_comment">
              <div class="head_com">
                <div class="head_wrap">
                  <img :src="tuData.hot_comment?.user.thumb" alt="">
                  <span>{{tuData.hot_comment?.user.login}}：</span>
                </div>
                <div class="head_zan">
                  <span>{{tuData.hot_comment?.like_count}} 赞</span>
                </div>
              </div>
              <div class="hot_content">
                <p>{{tuData.hot_comment?.content}}</p>
              </div>
            </div>
            <div class="video_foot">
              <div class="left">
                <div class="like"></div>
                <span>{{tuData.votes.up + tuData.votes.down}}</span>
                <div class="unlike"></div>
              </div>
              <div class="right">
                <div class="comment_icon"></div>
                <span>{{tuData.comments_count}}</span>
                <div class="share_icon"></div>
                <span>{{tuData.share_count}}</span>
              </div>
            </div>
          </div>
        </van-skeleton>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";

const tuDatas = ref([]);

const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
let page = ref(0);
const onLoad = () => {
  // console.log(page.value);
  page.value++;
  axios.get("https://apis.netstart.cn/qiushi/article/list/imgrank", {
    params: {
      page: page.value,
      count: 12,
    }
  }).then(res => {
    // console.log(res);
    // console.log(res.data.items);
    // console.log(tuDatas.value);
    // tuDatas.value = [];
    if (refreshing.value) {
      tuDatas.value = [];
      refreshing.value = false;
    }
    tuDatas.value = [...tuDatas.value, ...res.data.items];
    if (!res.data.items.length) {
      finished.value = true;
    }
    loading.value = false;
  });
};

const onRefresh = () => {
  page.value = 0;
  finished.value = false;
  loading.value = true;
  onLoad();
};
// onMounted(() => {
//   axios.get("https://apis.netstart.cn/qiushi/article/list/imgrank", {
//     query: {
//       page: 1,
//       count: 12,
//     }
//   }).then(res => {
//     console.log(res.data.items);
//     tuDatas.value = res.data.items;
//   });
// });
</script>

<style lang="less" scoped>
.tuItem {
  padding: 20rem 15rem 10rem 15rem;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: calc(100% - 30rem);
    height: 1px;
    bottom: 0;
    left: 50%;
    background-color: #9c9c9c;
    transform: translateX(-50%) scaleY(.2);
  }

  .hot_huo {
    display: flex;
    align-items: center;
    margin-bottom: 20rem;

    img {
      display: block;
      width: 12rem;
      margin-right: 3rem;
    }

    span {
      display: block;
      font-size: 13rem;
      color: #cfcfcf;
    }
  }

  .video_head {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    .user_info {
      display: flex;
      align-items: center;

      .user_pic {
        position: relative;

        img {
          display: block;
          width: 30rem;
          height: 30rem;
          border-radius: 50%;
          // margin-right: 12rem;
        }

        .xiangkuang {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 48rem;
          height: 48rem;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .tou_icon {
          position: absolute;
          right: -1rem;
          bottom: -1rem;
          width: 11rem;
          height: 11rem;
          background-image: url("../assets/souye/icon_head_v.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
      }

      .user_name {
        margin-left: 12rem;

        .name {
          display: flex;
          align-items: center;

          img {
            display: block;
            width: 14rem;
            height: 14rem;
            margin-left: 6rem;
          }

          span {
            display: block;
            font-size: 16rem;
            color: #9c9c9c;
          }
        }

        .royao {
          p {
            position: relative;
            left: -5rem;
            font-size: 12rem;
            color: #d2d2d2;
            transform: scale(.9);
          }
        }

      }
    }

    .video_icon {
      display: flex;
      align-items: center;

      i.guan {
        display: block;
        width: 40rem;
        height: 22rem;
        background-image: url("../assets/souye/operation_follow.png");
        background-size: 40rem;
        background-repeat: no-repeat;
        margin-right: 20rem;
      }

      i.dele {
        display: block;
        width: 18rem;
        height: 18rem;
        background-image: url("../assets/souye/ic_nav_close_night.png");
        background-size: cover;
      }
    }

  }

  .context {
    display: flex;
    align-items: center;
    margin-top: 8rem;
    margin-bottom: 5rem;



    p {
      font-size: 16rem;
      line-height: 1.6;
      white-space: pre-wrap;

      .topic {
        display: inline-block;
        background-color: #ffed59;
        margin-right: 3rem;
        padding: 0 5rem;
        border-radius: 5rem;

        .top_wrap {
          display: flex;
          align-items: center;

          img {
            display: block;
            width: 12rem;
          }

          span {
            display: block;
            font-size: 15rem;
            font-weight: bold;
          }
        }

      }
    }
  }

  .video_wrap1 {
    width: 100%;
    display: flex;
    // justify-content: center;
    overflow: hidden;
    border-radius: 5rem;
    position: relative;

    img {
      display: block;
      width: 270rem;
      border-radius: 5rem;
    }

    .changtu {
      position: absolute;
      top: 5rem;
      left: 5rem;
      width: 25rem;
      height: 15rem;
      background-color: #666666;
      border-radius: 3rem;
      display: flex;
      align-items: center;

      span {
        display: block;
        transform: scale(.8);
        color: #fff;
        font-weight: 100;
        line-height: 1;
      }
    }

  }

  .video_wrap2 {
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: 5rem;
    position: relative;

    img {
      display: block;
      width: 100%;
    }
  }

  .picture_wrap {
    border-radius: 5rem;
    overflow: hidden;

    /deep/.van-grid {
      position: relative;

      .van-grid-item__content {
        padding: 0;
      }

      .pic {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        position: relative;

        .gif_icon {
          position: absolute;
          top: 5rem;
          left: 5rem;
          width: 25rem;
          height: 15rem;
          background-color: #666666;
          border-radius: 3rem;
          display: flex;
          align-items: center;

          span {
            display: block;
            transform: scale(.8);
            color: #fff;
            font-weight: 100;
            line-height: 1;
          }
        }
      }
    }

  }

  .hot_com {
    width: 100%;
    // height: 75rem;
    background-color: #f7f7f7;
    border-radius: 5rem;
    margin-top: 15rem;
    padding: 10rem;

    .head_com {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .head_wrap {
        display: flex;
        align-items: center;

        img {
          display: block;
          width: 26rem;
          height: 26rem;
          border-radius: 50%;
          margin-right: 8rem;
        }

        span {
          display: block;
          font-size: 14rem;
          color: #9c9c9c;
        }
      }

      .head_zan {
        span {
          font-size: 13rem;
          color: #c7c7c7;
        }
      }
    }

    .hot_content {
      margin-top: 8rem;

      p {
        font-weight: 400;
        font-size: 13rem;
      }
    }
  }

  .video_foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10rem;

    .left {
      display: flex;
      align-items: center;

      .like {
        width: 36rem;
        height: 36rem;
        background-image: url("../assets/souye/operation_support.png");
        background-size: cover;
      }

      span {
        display: block;
        font-weight: 600;
        font-size: 13rem;
      }

      .unlike {
        width: 36rem;
        height: 36rem;
        background-image: url("../assets/souye/operation_unsupport.png");
        background-size: cover;
      }
    }


    .right {
      display: flex;
      align-items: center;

      .comment_icon {
        width: 36rem;
        height: 36rem;
        background-image: url("../assets/souye/qiushi_comment.png");
        background-size: cover;
      }

      .share_icon {
        width: 36rem;
        height: 36rem;
        background-image: url("../assets/souye/qiushi_share.png");
        background-size: cover;
      }

      span {
        display: block;
        font-weight: 600;
      }
    }

  }
}
</style>