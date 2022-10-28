<template>
  <div class="playsonglist">
    <ul v-if="playsonglist">
      <!-- <li v-for="song in playsonglist" :key="song.id">
        {{ song.song.artists[0].name }}
      </li> -->
      <PlaySongListmusic
        v-for="music in playsonglist"
        :key="music.id"
        :music="music"
        @click.native.stop="$emit('playing-music', music)"
        :songId="songId"
        :playing="playing"
      />
    </ul>
  </div>
</template>

<script>
import PlaySongListmusic from "@/components/playview/PlaySongListmusic.vue";

export default {
  components: {
    PlaySongListmusic,
  },
  props: {
    playsonglist: Array,
    songId: Number,
    playing: Boolean,
  },
  created() {
    document.querySelector("body").setAttribute("style", "overflow: hidden;");
  },
  destroyed() {
    document.querySelector("body").setAttribute("style", "");
  },
};
</script>

<style lang="less" scoped>
.playsonglist {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  ul {
    position: fixed;
    width: calc(100% - 30rem);
    height: 400rem;
    bottom: 80rem;
    background-color: white;
    border-radius: 20rem;
    padding: 20rem 10rem;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>