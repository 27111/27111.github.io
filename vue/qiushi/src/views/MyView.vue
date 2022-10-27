<template>
  <header>
    <h3>我</h3>
    <div class="myhead_icon">
      <div class="sun"></div>
      <div class="set"></div>
    </div>
  </header>
  <section class="myview">
    <div class="content">
      <div class="title">
        <h3>登录糗百,体验更多功能</h3>
      </div>
      <div class="app_icon">
        <img src="../assets/myicon/ic_login_phone.png" alt="">
        <img src="../assets/myicon/ic_login_weixin.png" alt="">
        <img src="../assets/myicon/ic_login_qq.png" alt="">
        <img src="../assets/myicon/ic_login_weibo.png" alt="">
      </div>
      <div class="go_login">账号密码登录 ></div>
      <div class="text_wrap">
        <div class="text_content">
          <span>0</span>
          <p>糗事</p>
        </div>
        <div class="text_content">
          <span>0</span>
          <p>动态</p>
        </div>
        <div class="text_content">
          <span>0</span>
          <p>关注</p>
        </div>
        <div class="text_content">
          <span>0</span>
          <p>粉丝</p>
        </div>
      </div>
      <div class="function_wrap">
        <div class="function_icon">
          <img src="../assets/myicon/ic_profile_comment.png" alt="">
          <span>评论</span>
        </div>
        <div class="function_icon">
          <img src="../assets/myicon/ic_profile_collection.png" alt="">
          <span>收藏</span>
        </div>
        <div class="function_icon">
          <img src="../assets/myicon/ic_profile_shop.png" alt="">
          <span>商城</span>
        </div>
        <div class="function_icon">
          <img src="../assets/myicon/ic_profile_mission.png" alt="">
          <span>任务</span>
        </div>
        <div class="function_icon">
          <img src="../assets/myicon/ic_profile_history.png" alt="">
          <span>浏览历史</span>
        </div>
      </div>
      <footer>
        <ul class="func_icon">
          <li>
            <div class="icon_wrap">
              <img src="../assets/myicon/ic_profile_black_house.png" alt="">
              <p>糗百好物</p>
            </div>
            <div class="arrow_wrap">
              <i></i>
            </div>
          </li>
          <li>
            <div class="icon_wrap">
              <img src="../assets/myicon/ic_profile_expert.png" alt="">
              <p>每周达人</p>
            </div>
            <div class="arrow_wrap">
              <i></i>
            </div>
          </li>
          <li>
            <div class="icon_wrap">
              <img src="../assets/myicon/ic_profile_authentication.png" alt="">
              <p>糗百认证</p>
            </div>
            <div class="arrow_wrap">
              <i></i>
            </div>
          </li>
          <li>
            <div class="icon_wrap">
              <img src="../assets/myicon/ic_profile_audit.png" alt="">
              <p>审核糗事</p>
            </div>
            <div class="arrow_wrap">
              <i></i>
            </div>
          </li>
          <li>
            <div class="icon_wrap">
              <img src="../assets/myicon/ic_profile_adolescent.png" alt="">
              <p>青少年模式</p>
            </div>
            <div class="arrow_wrap">
              <span>未开启</span>
              <i></i>
            </div>
          </li>
          <li>
            <div class="icon_wrap">
              <img src="../assets/myicon/ic_profile_feedback.png" alt="">
              <p>联系客服</p>
            </div>
            <div class="arrow_wrap">
              <i></i>
            </div>
          </li>
        </ul>
      </footer>
    </div>
  </section>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';
let count = ref(0);
let imgs = [
  require('@/assets/nav_icon/mine_00.png'),
  require('@/assets/nav_icon/mine_01.png'),
  require('@/assets/nav_icon/mine_02.png'),
  require('@/assets/nav_icon/mine_03.png'),
  require('@/assets/nav_icon/mine_04.png'),
  require('@/assets/nav_icon/mine_05.png'),
  require('@/assets/nav_icon/mine_06.png'),
  require('@/assets/nav_icon/mine_07.png'),
  require('@/assets/nav_icon/mine_08.png'),
  require('@/assets/nav_icon/mine_09.png'),
  require('@/assets/nav_icon/mine_10.png'),
  require('@/assets/nav_icon/mine_11.png'),
  require('@/assets/nav_icon/mine_12.png'),
  require('@/assets/nav_icon/mine_13.png'),
  require('@/assets/nav_icon/mine_14.png'),
  require('@/assets/nav_icon/mine_15.png'),
  require('@/assets/nav_icon/mine_16.png'),
  require('@/assets/nav_icon/mine_17.png'),
  require('@/assets/nav_icon/mine_18.png'),
  require('@/assets/nav_icon/mine_19.png'),
  require('@/assets/nav_icon/mine_20.png'),
  require('@/assets/nav_icon/mine_21.png'),
  require('@/assets/nav_icon/mine_22.png'),
  require('@/assets/nav_icon/mine_23.png'),
];
for (let img of imgs) {
  let image = new Image();
  image.onload = () => {
    count.value++;
  };
  image.src = img;
};
</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: 55rem;
  position: relative;
  // background-color: aquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  z-index: 999;

  h3 {
    font-size: 16rem;
    font-weight: bold;
  }

  .myhead_icon {
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;

    .sun {
      width: 28rem;
      height: 28rem;
      background-image: url("../assets/myicon/ic_profile_toggle.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      margin-right: 15rem;
    }

    .set {
      width: 28rem;
      height: 28rem;
      background-image: url("../assets/myicon/ic_profile_setting.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      margin-right: 8rem;
    }
  }


  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #e9dddd;
    transform: scaleY(.9);
  }
}

.myview {
  padding: 0 15rem;
  margin-top: 10rem;

  .content {
    width: 100%;

    .title {
      margin-bottom: 8rem;

      h3 {
        text-align: center;
        font-size: 13rem;
        line-height: 1.6;
      }
    }

    .app_icon {
      display: flex;
      justify-content: space-around;

      img {
        display: block;
        width: 36rem;
      }
    }

    .go_login {
      font-size: 12rem;
      transform: scale(0.9);
      text-align: center;
      margin: 10rem 0;
    }

    .text_wrap {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-top: 16rem;
      margin-bottom: 16rem;

      .text_content {
        width: 36rem;
        height: 36rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        span {
          display: block;
          font-size: 14.5rem;
          margin-bottom: 2rem;
        }

        p {
          font-size: 12rem;
          color: #a6a6a6;
          transform: scale(.9);
        }
      }
    }

    .function_wrap {
      // border-radius: 16rem;
      padding: 14rem 12rem;
      display: flex;
      justify-content: space-between;
      box-shadow: 0rem 2rem 20rem -5rem rgb(0 0 0 / .15);

      .function_icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          display: block;
          width: 34rem;
        }

        span {
          display: block;
          text-align: center;
          margin-top: 3rem;
        }
      }
    }

    footer {
      width: 100%;

      .func_icon {
        width: 100%;
        margin-top: 15rem;

        li {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 14rem 0;
          position: relative;
          line-height: 1.5;

          .icon_wrap {
            display: flex;
            align-items: center;

            img {
              display: block;
              width: 16rem;
              height: 16rem;
              margin-right: 8rem;
            }

            p {
              font-size: 14rem;
            }
          }

          .arrow_wrap {
            display: flex;
            align-items: center;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);

            span {
              display: block;
              font-size: 12rem;
              color: #a1a1a1;
            }

            i {
              display: block;
              width: 16rem;
              height: 16rem;
              background-image: url("../assets/myicon/ic_right_arrow.png");
              background-repeat: no-repeat;
              background-position: right center;
              background-size: 6rem;
            }
          }

          &:nth-of-type(1)::after,
          &:nth-of-type(3)::after {
            position: absolute;
            content: "";
            bottom: 0;
            width: 100%;
            height: 1px;
            background-color: #e9dddd;
            transform: scaleY(.9);
          }
        }
      }
    }
  }
}
</style>