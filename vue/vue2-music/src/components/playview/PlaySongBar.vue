<template>
  <div class="playbar">
    <span>{{
      draping === false ? playtime(this.changeTime) : playtime(updatetime)
    }}</span>
    <!-- draping === false ? playtime : updatetime -->
    <span>{{ playtime(this.duration) }}</span>
    <label class="bar">
      <input
        type="range"
        class="barcorl"
        min="0"
        :max="duration"
        :value="changeTime"
        @input="
          (draping = true),
            updateBar($event.target.value, duration),
            (updatetime = $event.target.value)
        "
        @change="(draping = false), $emit('update-time', $event.target.value)"
      />
      <div class="barcontrol" ref="barcontrol"></div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    currentTime: Number,
    duration: Number,
  },
  data() {
    return {
      changeTime: this.currentTime,
      draping: false,
      updatetime: 0,
    };
  },
  methods: {
    playtime(time) {
      let m = Math.floor(time / 60);
      let s = Math.floor(time % 60);
      if (m < 10) {
        m = "0" + m;
      }
      if (s < 10) {
        s = "0" + s;
      }
      return m + ":" + s;
    },
    updateBar(timing, timed) {
      let barlength = Math.ceil((timing / timed) * 100) + "%";
      this.$refs.barcontrol.style.width = barlength;
    },
  },
  mounted() {
    let barlength = Math.ceil((this.currentTime / this.duration) * 100) + "%";
    this.$refs.barcontrol.style.width = barlength;
    // console.log(this.song);
    // console.log(this.duration);
    // console.log(this.currentTime);
  },
  watch: {
    currentTime(val) {
      // console.log(Math.ceil((val / this.duration) * 100) + "%");
      // console.log(this.$refs.barcontrol);
      // console.log(this.changeTime);
      // console.log(this.draping);
      if (!this.draping) {
        this.changeTime = val;
        //   Math.ceil((this.changeTime / this.duration) * 100) + "%";
        // this.$refs.barcontrol.style.width = barlength;
        this.updateBar(this.changeTime, this.duration);
      }
    },
    updatetime(updatetime) {
      // console.log(updatetime);
      // console.log(this.playtime);
      // console.log(this.changeTime);
      this.changeTime = updatetime;
    },
  },
};
</script>

<style lang="less" scoped>
.playbar {
  width: 100%;
  height: 20rem;
  // background-color: black;
  padding: 0 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  span {
    font-size: 12rem;
    color: #efefef;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &:nth-of-type(1) {
      left: 5rem;
    }
    &:nth-of-type(2) {
      right: 5rem;
    }
  }
  .bar {
    width: 100%;
    height: 2rem;
    border-radius: 5rem;
    background-color: #efefef;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: relative;
    .barcorl {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2rem;
      opacity: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .barcontrol {
      // width: 100%;
      width: 0;
      height: 100%;
      border-radius: 5rem;
      background-color: #efefef;
      position: relative;
      pointer-events: none;
      &::after {
        position: absolute;
        content: "";
        right: -2rem;
        top: -2rem;
        width: 6rem;
        height: 6rem;
        background-color: #efefef;
        border-radius: 50%;
        pointer-events: none;
      }
    }
  }
}
</style>