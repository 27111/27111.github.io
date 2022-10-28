<template>
  <header>
    <h1>todos</h1>
    <input
      id="bangding"
      type="checkbox"
      :checked="changeAll"
      @change="$emit('changeAll-todo-vue-header')"
    />
    <label for="bangding"> </label>
    <input
      type="text"
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="What need to be done?"
    />
  </header>
</template>

<script>
export default {
  data: function () {
    return {
      newTodo: "",
    };
  },
  props: {
    changeAll: Boolean,
  },
  methods: {
    addTodo() {
      // console.log("aaa");
      this.newTodo.trim() && this.$emit("add-todo", this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>

<style>
/* header {
  padding: 10px 0;
  border: 1px solid #e1d9d9;
  position: relative;
  height: 30px;
  display: flex;
  align-items: center;
} */
header {
  position: relative;
  margin-top: 120px;
  height: 62px;
}
header h1 {
  position: absolute;
  top: -140px;
  width: 100%;
  font-size: 100px;
  font-weight: bold;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
}
header input:nth-of-type(1) {
  /* position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px; */
  display: none;
}
header label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border: 1px solid;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  border: 1px solid #999;
}
header label::after {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
header input:nth-of-type(1):checked + label {
  box-shadow: 0 0 6px #24b7e5;
}
header input:nth-of-type(1):checked + label::after {
  background-color: #24b7e5;
  box-shadow: 0 0 6px #24b7e5;
}
header input:nth-of-type(2) {
  width: 100%;
  font-size: 24px;
  padding: 16px 16px 16px 60px;
  border: none;
  outline: 0;
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  background-color: #fff;
  height: 100%;
  font-weight: 100;
}
header input:nth-of-type(2)::-webkit-input-placeholder {
  color: #d7d7d7;
  font-weight: bold;
}
</style>