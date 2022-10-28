<template>
  <section class="video">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        <van-skeleton title avatar :row="3" :loading="!videoDatas.length"
          v-for="videoData in (videoDatas.length ? videoDatas:5)">
          <div class="videoItem" v-if="videoData.user">
            <div class="hot_huo" v-if="videoData.type =='hot'">
              <img src="../assets/souye/ic_rss_hot.png" alt="">
              <span>热门</span>
            </div>
            <div class="hot_huo" v-if="videoData.type =='promote'">
              <img src="../assets/souye/ic_tag_originality.png" alt="">
              <span>神原创</span>
            </div>
            <div class="video_head">
              <div class="user_info">
                <div class="user_pic" @click.stop="$router.push({path:'/user',query:{id:videoData.user.uid}})">
                  <img :src="videoData.user.thumb" alt="">
                  <div class="xiangkuang" :style="`background-image:url('${videoData.user.box_url}')`"
                    v-if="videoData.user.box_url"></div>
                  <div class="tou_icon" v-if="videoData.user.talents"></div>
                </div>
                <div class="user_name" @click.stop="$router.push({path:'/user',query:{id:videoData.user.uid}})">
                  <div class="name">
                    <span>{{videoData.user.login}}</span>
                    <img :src="videoData.user.titles[0].icon" alt="" v-if="videoData.user.titles">
                  </div>
                  <div class="royao" v-if="videoData.user.talents">
                    <p>{{videoData.user.talents[0].cmd_desc}}</p>
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
              <div class="topic" v-if="videoData.topic">
                <div class="top_wrap">
                  <img src="../assets/souye/ic_topic_prefix.9.png" alt="">
                  <span>{{videoData.topic.content}}</span>
                </div>
              </div>{{videoData.content}}</p>
            </div>
            <div :class="videoData.pic_size[0] / videoData.pic_size[1] <= 1 ? 'video_wrap1':'video_wrap2'"
              v-if="videoData.pic_size">
              <img :src="videoData.pic_url" alt="">
              <div class="mask" :style="`background-image:url('${videoData.pic_url}')`"></div>
              <div class="play_btn"></div>
              <span>{{playtime(videoData.pic_size[2])}}</span>
            </div>
            <div class="hot_com" v-if="videoData.hot_comment">
              <div class="head_com">
                <div class="head_wrap">
                  <img :src="videoData.hot_comment?.user.thumb" alt="">
                  <span>{{videoData.hot_comment?.user.login}}：</span>
                </div>
                <div class="head_zan">
                  <span>{{videoData.hot_comment?.like_count}} 赞</span>
                </div>
              </div>
              <div class="hot_content">
                <p>{{videoData.hot_comment?.content}}</p>
              </div>
            </div>
            <div class="video_foot">
              <div class="left">
                <div class="like"></div>
                <span>{{videoData.votes.up + videoData.votes.down}}</span>
                <div class="unlike"></div>
              </div>
              <div class="right">
                <div class="comment_icon"></div>
                <span>{{videoData.comments_count}}</span>
                <div class="share_icon"></div>
                <span>{{videoData.share_count}}</span>
              </div>
            </div>
          </div>
        </van-skeleton>
      </van-list>
    </van-pull-refresh>
  </section>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

let videoDatas = ref([]);

const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
let page = ref(0);
const onLoad = () => {
  // console.log(page.value);
  page.value++;
  axios.get("https://apis.netstart.cn/qiushi/article/list/video", {
    params: {
      page: page.value,
      count: 12,
    }
  }).then(res => {
    console.log(res);
    console.log(res.data.items);
    // console.log(videoDatas.value);
    // videoDatas.value = [];
    if (refreshing.value) {
      videoDatas.value = [];
      refreshing.value = false;
    }
    videoDatas.value = [...videoDatas.value, ...res.data.items];
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

const playtime = (time) => {
  let m = Math.floor(time / 60);
  let s = Math.floor(time % 60);
  if (s < 10) {
    s = "0" + s;
  }
  return m + ":" + s;
};

</script>

<style lang="less" scoped>
.video {
  // height: 500vh;

  .videoItem {
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
      justify-content: center;
      overflow: hidden;
      border-radius: 5rem;
      position: relative;

      img {
        display: block;
        width: 192rem;
      }

      .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        transform: scale(1.2);
        z-index: -1;
        filter: blur(15px);
      }

      .play_btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 36rem;
        height: 36rem;
        background-image: url("../assets/souye/video_play.png");
        background-repeat: no-repeat;
        background-size: 36rem;
        background-position: center;
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

      .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        transform: scale(1.2);
        z-index: -1;
        filter: blur(15px);
      }

      .play_btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 36rem;
        height: 36rem;
        background-image: url("../assets/souye/video_play.png");
        background-repeat: no-repeat;
        background-size: 36rem;
        background-position: center;
      }
    }

    .video_wrap1,
    .video_wrap2 {
      span {
        display: block;
        position: absolute;
        padding: 5rem 8rem;
        font-size: 12rem;
        transform: scale(.8);
        border-radius: 15rem;
        right: 8rem;
        bottom: 8rem;
        background-color: rgba(0, 0, 0, 0.5);
        color: rgb(203, 199, 199);
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
}
</style>