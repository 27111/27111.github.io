<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h3
      @click="showwhich = true"
      :style="{ color: showwhich == true ? '#22d7c8' : '' }"
    >
      推荐歌单
    </h3>
    <h3
      @click="showwhich = false"
      :style="{ color: showwhich == false ? '#22d7c8' : '' }"
    >
      推荐音乐
    </h3>
    <ul class="card-list" v-if="showwhich">
      <HomeCard v-for="item in personalizeds" :key="item.id" :item="item" />
    </ul>
    <ul class="song-list" v-if="!showwhich">
      <HomeItemSong
        v-for="music in newsongs"
        :key="music.id"
        :music="music"
        @click.native="
          $emit('playing-music', music), $emit('playing-list', newsongs)
        "
        :songId="songId"
        :playing="playing"
      />
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeCard from "@/components/HomeCard.vue";
import HomeItemSong from "@/components/HomeItemSong.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
    HomeCard,
    HomeItemSong,
  },
  props: {
    songId: Number,
    playing: Boolean,
  },
  data: function () {
    return {
      personalizeds: [],
      newsongs: [],
      showwhich: true,
    };
  },
  methods: {
    hander() {
      console.log(this.songId);
    },
  },
  created() {
    Promise.all([
      this.axios.get("https://apis.netstart.cn/music/personalized", {
        params: { limit: 6 },
      }),
      this.axios.get("https://apis.netstart.cn/music/personalized/newsong"),
    ]).then(([result1, result2]) => {
      this.personalizeds = result1.data.result;
      this.newsongs = result2.data.result;
      // console.log(this.newsongs);
    });
  },
};
</script>
<style lang="less">
.home {
  // padding-top: 285rem;
  padding-top: 280rem;
  // background: url("../assets/login_pre_bkg.png") no-repeat;
  // background-position: center;
  // background-size: cover;
  background-color: rgb(18, 19, 23);
  h3 {
    display: inline-block;
    // border-left: 3rem solid #d33a31;
    position: relative;
    padding-left: 9rem;
    margin-bottom: 14rem;
    font-size: 17rem;
    height: 20rem;
    color: #fff;
    font-weight: bold;
    line-height: 20rem;
    &:nth-of-type(2) {
      margin-top: 14rem;
    }
  }
  ul.card-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>
