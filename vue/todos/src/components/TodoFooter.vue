<template>
  <footer>
    <p>{{ daiban }} 待办</p>
    <a
      v-for="(btn, index) in btns"
      :key="btn.judge"
      @click="changeCondit(btn.judge), (btnIndex = index)"
      :class="btnIndex == index ? 'active' : ''"
    >
      {{ btn.name }}
    </a>
    <span v-show="clearShow" @click="$emit('clear-accomplish-footer')"
      >clear accomplish</span
    >
  </footer>
</template>

<script>
export default {
  props: {
    btns: Array,
    daiban: Number,
    allShowTodos: Array,
    notDoneTodos: Array,
    accomplishTodos: Array,
    condition: String,
    clearShow: Boolean,
  },
  data: function () {
    return { btnIndex: localStorage.getItem("btnIndex") || 0 };
  },
  methods: {
    changeCondit(judge) {
      // console.log(judge);
      this.$emit("changeCondition-footer", judge);
    },
  },
  watch: {
    btnIndex: function (newVal) {
      // console.log(newVal);
      localStorage.setItem("btnIndex", newVal);
    },
  },
};
</script>

<style>
footer {
  padding: 15px 0;
  position: relative;
  background-color: #fff;
  margin-bottom: 50px;
}
footer .active {
  /* background-color: blue; */
  border-color: rgba(175, 47, 47, 0.2);
}
footer p {
  margin: 0 25px 0 20px;
  display: inline-block;
}
footer a {
  display: inline-block;
  /* margin: 0 15px; */
  cursor: pointer;
  margin: 0 15px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  color: #4d4d4d;
}
footer span {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}
footer span:hover {
  color: red;
  cursor: pointer;
}
footer::before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgb(0 0 0 / 20%);
  pointer-events: none;
}
</style>