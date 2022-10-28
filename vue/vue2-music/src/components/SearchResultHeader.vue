<template>
  <section
    class="searchresult-head"
    v-if="
      optimalsearch?.artist || optimalsearch?.playlist || optimalsearch?.album
    "
  >
    <h3>最优匹配</h3>
    <ul class="searchresult-list">
      <li
        class="search-optimal-result"
        v-if="optimalsearch.artist"
        @click="
          hander(optimalsearch),
            $router.push({
              path: '/artist',
              query: { id: optimalsearch.artist[0].id },
            })
        "
      >
        <a href="javaScript:;">
          <div class="artistname">
            <img :src="optimalsearch.artist[0].img1v1Url" alt="" />
            <h4>
              {{ optimalsearch.artist[0].occupation }}:
              {{ optimalsearch.artist[0].name }}
              <span v-if="optimalsearch.artist[0].alias[0]">
                ({{ optimalsearch.artist[0].alias[0] }})
              </span>
            </h4>
            <i></i>
          </div>
        </a>
      </li>
      <li
        class="search-playlist-result"
        v-if="optimalsearch.playlist"
        @click="
          hander(optimalsearch.playlist[0].playCount),
            $router.push({
              path: '/playlist',
              query: {
                id: optimalsearch.playlist[0].id,
                count: optimalsearch.playlist[0].playCount,
              },
            })
        "
      >
        <a href="javaScript:;">
          <div class="playlistname">
            <img :src="optimalsearch.playlist[0].coverImgUrl" alt="" />
            <div class="playlist-wrap">
              <h4>歌单:{{ optimalsearch.playlist[0].name }}</h4>
              <p>by {{ optimalsearch.playlist[0].creator.nickname }}</p>
            </div>
            <i></i>
          </div>
        </a>
      </li>
      <li class="search-playlist-result" v-if="optimalsearch.album">
        <a href="javaScript:;">
          <div class="playlistname">
            <div class="pic-wrap">
              <img
                :src="optimalsearch.album[0].picUrl"
                alt=""
                style="border-radius: 5rem"
              />
            </div>
            <div class="playlist-wrap">
              <h4>
                {{ optimalsearch.album[0].type }}:{{
                  optimalsearch.album[0].name
                }}
              </h4>
              <p>{{ optimalsearch.album[0].artist.name }}</p>
            </div>
            <i></i>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    optimalsearch: Object,
  },
  created() {
    // console.log(this.optimalsearch);
    // console.log(this.optimalsearch.artist[0].name);
    // console.log(this.optimalsearch.playlist[0].name);
    // console.log(this.optimalsearch.artist[0].alias[0]);
  },
  methods: {
    hander(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="less" scoped>
section.searchresult-head {
  padding: 8rem 0 4rem;
  h3 {
    margin-left: 10rem;
    font-size: 12rem;
    line-height: 16rem;
    color: #666;
    margin-bottom: 15rem;
  }
  ul.searchresult-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    li {
      background-color: #222327;
      width: 90%;
      padding: 12rem;
      border-radius: 12rem;
      margin-bottom: 10rem;
      a {
        color: #333333;
        text-decoration: none;
        &:visited {
          color: #333;
        }
        .artistname,
        .playlistname {
          display: flex;
          align-items: center;
          height: 66rem;
          margin-left: 10rem;
          padding: 8rem 10rem 8rem 0;
          img {
            border-radius: 50%;
            position: relative;
            width: 50rem;
            height: 50rem;
            line-height: 0;
            margin-right: 15rem;
          }
          .pic-wrap {
            position: relative;
            &::after {
              content: "";
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              right: 5rem;
              width: 10rem;
              height: 40rem;
              background-repeat: no-repeat;
              background-size: cover;
              background-image: url("../assets/img_album_record.png");
              background-position: center;
            }
          }
          h4 {
            width: 200rem;
            font-size: 17rem;
            line-height: 30rem;
            color: #fcfffd;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: normal;
          }
          i {
            margin-right: 8rem;
            margin-left: 10rem;
            display: inline-block;
            width: 8rem;
            height: 13rem;
            background-image: url("../assets/下载 (6).svg");
            background-position: 0 0;
            background-size: contain;
            background-repeat: no-repeat;
          }
        }
        .playlistname {
          .playlist-wrap {
            width: 200rem;
            display: inline-block;
            p {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-break: normal;
              font-size: 12rem;
              line-height: 15rem;
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>