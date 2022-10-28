<template>
  <div class="playlist-view">
    <PlayListHead :playlist="playlist" :playcount="playcount" />
    <ul class="playmusic-list" v-if="playlistsongs">
      <h3>歌曲列表</h3>
      <PlayListSongs
        v-for="(playlistsong, index) in playlistsongs"
        :key="playlistsong.id"
        :playlistsong="playlistsong"
        :index="index"
        @click.native="
          $emit('playing-music', playlistsong),
            $emit('playing-list', playlistsongs)
        "
        :songId="songId"
        :playing="playing"
      />
    </ul>
    <div class="playlist-collect">
      <div class="playlist-collect-wrap">
        <div class="playlist-collect-btn">
          <a href="javascript:;">收藏歌单</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayListHead from "@/components/PlayListHead.vue";
import PlayListSongs from "@/components/PlayListSongs.vue";

export default {
  components: {
    PlayListHead,
    PlayListSongs,
  },
  props: {
    songId: Number,
    playing: Boolean,
  },
  data() {
    return {
      playlist: null,
      playcount: 0,
      playlistsongs: null,
    };
  },
  methods: {
    getPlayList: function (id) {
      this.axios
        .get("https://apis.netstart.cn/music/playlist/detail", {
          params: { id },
        })
        .then((res) => {
          // console.log(res.data.playlist);
          this.playlist = res.data.playlist;
          // console.log(this.playlist);
          // console.log(res.data.playlist.tracks);
          this.playlistsongs = res.data.playlist.tracks;
          // console.log(this.playlistsongs);
        });
    },
  },
  created() {
    // console.log(this.$route);
    // console.log(this.$route.query.id);
    // console.log(this.$route.query.count);
    this.getPlayList(this.$route.query.id);
    this.playcount = this.$route.query.count;
    // console.log(this.playlist);
    // console.log(this.playlistsongs);
    // console.log(this.songId);
    // console.log(this.playing);
  },
};
</script>

<style lang="less" scoped>
.playlist-view {
  background: #fff;
  .playmusic-list {
    margin-bottom: 60rem;
    h3 {
      height: 23rem;
      line-height: 23rem;
      padding: 0 10rem;
      font-size: 12rem;
      color: #666;
      background-color: #eeeff0;
    }
  }
  .playlist-collect {
    position: fixed;
    background-color: #fff;
    width: 100%;
    bottom: 0;
    left: 0;
    .playlist-collect-wrap {
      padding-left: 30rem;
      padding-right: 30rem;
      padding-top: 11rem;
      padding-bottom: 11rem;
      display: flex;
      margin: 0 auto;
      .playlist-collect-btn {
        flex: 1 1 12rem;
        position: relative;
        a {
          text-decoration: none;
          display: block;
          width: 100%;
          height: 40rem;
          line-height: 40rem;
          border-radius: 40rem;
          font-size: 18rem;
          text-align: center;
          background: rgb(255, 58, 58);
          color: rgb(255, 255, 255);
        }
      }
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      border-top: 1rem solid rgba(0, 0, 0, 0.1);
    }
  }
}
</style>