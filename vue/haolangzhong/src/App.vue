<template>
  <div id="app">
    <nav v-if="$route.meta.showNav">
      <router-link to="/home">
        <div class="active">
          <div class="pic"></div>
        </div>
      </router-link>
      <router-link to="/shop">
        <div class="active">
          <div class="pic"></div>
        </div>
      </router-link>
      <router-link to="/playing">
        <div class="active">
          <div class="pic"></div>
        </div>
      </router-link>
      <router-link to="/news">
        <div class="active">
          <div class="pic"></div>
        </div>
      </router-link>
      <router-link to="/my">
        <div class="active">
          <div class="pic"></div>
        </div>
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  height: 500vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  // padding: 30px;
  width: 100%;
  height: 54rem;
  background-color: #fafafa;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    border-top: 1rem solid #f2f2f2;
    pointer-events: none;
    z-index: -1;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    .active {
      width: 30rem;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .pic {
        width: 24rem;
        height: 100%;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
      }
    }
    &:nth-of-type(1) {
      .pic {
        background-image: url("./assets/icon_btn_home_2.png");
      }
    }
    &:nth-of-type(2) {
      .pic {
        background-image: url("./assets/icon_btn_shop_2.png");
      }
    }
    &:nth-of-type(4) {
      .pic {
        background-image: url("./assets/icon_btn_smg_2.png");
      }
    }
    &:nth-of-type(5) {
      .pic {
        background-image: url("./assets/icon_btn_admin_2.png");
      }
    }

    &.router-link-exact-active {
      &:nth-of-type(1) {
        .pic {
          animation: toggle 0.6s linear;
          background-image: url("./assets/icon_btn_home_5.png");
        }
      }
      &:nth-of-type(2) {
        .pic {
          animation: toggle 0.6s linear;
          background-image: url("./assets/icon_btn_shop_1.png");
        }
      }
      &:nth-of-type(4) {
        .pic {
          animation: toggle 0.6s linear;
          background-image: url("./assets/icon_btn_smg_1.png");
        }
      }
      &:nth-of-type(5) {
        animation: toggle 0.6s linear;
        .pic {
          background-image: url("./assets/icon_btn_admin_1.png");
        }
      }
    }
    &:nth-of-type(3) {
      position: relative;
      top: -12rem;
      width: 60rem;
      height: 60rem;
      &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: "";
        width: calc(100% + 10rem);
        height: calc(100% + 10rem);
        // background-color: #2c3e50;
        background-image: url("./assets/icon_row_m2.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        z-index: -1;
      }
      .active {
        width: 100%;
        height: 100%;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        background-color: #de7937;
        border-radius: 50%;
        .pic {
          width: 50rem;
          height: 50rem;
          background-image: url("./assets/ll.png");
          background-repeat: no-repeat;
          background-size: 100%;
          background-position: center;
          animation: imgrotate 8s infinite linear;
          border-radius: 50%;
        }
        @keyframes imgrotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
}
</style>
<style>
@keyframes toggle {
  0% {
    transform: scale(0.6);
  }
  46.66% {
    transform: scale(1);
  }
  66.66% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}
</style>
