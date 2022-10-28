<template>
  <div class="pl_control">
    <span>{{
      draping === false ? playtime(currentTime) : playtime(updatetime)
    }}</span>
    <label class="bar">
      <input
        type="range"
        class="barcorl"
        min="0"
        :max="duration"
        :value="changeTime"
        @input="
          draping = true;
          updateBar($event.target.value, duration);
          updatetime = $event.target.value;
        "
        @change="
          draping = false;
          changecurrentTime($event.target.value);
        "
      />
      <div class="barcontrol" ref="barcontrol"></div>
    </label>
    <span>{{ playtime(duration) }}</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["duration", "currentTime"]),
  },
  data() {
    return {
      changeTime: this.currentTime,
      draping: false,
      updatetime: 0,
    };
  },
  methods: {
    ...mapMutations(["changecurrentTime"]),
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
    this.updateBar(this.currentTime, this.duration);
  },
  watch: {
    currentTime(currentTime) {
      // console.log(this.draping);
      if (!this.draping) {
        this.updateBar(currentTime, this.duration);
      }
    },
    updatetime(updatetime) {
      this.changeTime = updatetime;
    },
  },
};
</script>

<style lang="less" scoped>
.pl_control {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40rem;
  width: 350rem;
  span {
    width: 34rem;
    margin: 0 16rem;
    font-size: 12rem;
    color: rgba(0, 0, 0, 0.5);
  }
  .bar {
    width: 100%;
    height: 3rem;
    border-radius: 5rem;
    background-color: #e5e5e5;
    // background-color: hsla(0, 0%, 100%, 0.2);
    position: relative;
    .barcorl {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 3rem;
      opacity: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .barcontrol {
      width: 0%;
      height: 100%;
      border-radius: 5rem;
      background-color: #fe5353;
      position: relative;
      pointer-events: none;
      &::after {
        position: absolute;
        content: "";
        right: -2.5rem;
        top: -2.5rem;
        width: 8rem;
        height: 8rem;
        background-color: #fff;
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 0 0 0 4rem #fe5353;
      }
    }
  }
}
</style>