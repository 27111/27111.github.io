<template>
  <li>
    <input
      :id="todo.id"
      type="checkbox"
      :checked="todo.finish"
      @change="
        $emit('change-todo-list-item', {
          id: todo.id,
          finish: $event.target.checked,
        })
      "
    />
    <label :for="todo.id"> </label>
    <!-- 在子组件中通过$emit注册事件，将数据作为参数传入，在父组件中通过$event接收 -->
    <!-- 在DOM事件的回调函数中传入参数$event   $event 是在原生事件里面 指向DOM事件对象 -->
    <span
      @dblclick="revise.isChecked = !revise.isChecked"
      :class="{ changeVal: revise.isChecked }"
      >{{ todo.text }}</span
    >
    <input
      type="text"
      v-model="revise.newVal"
      v-if="revise.isChecked"
      @keyup.esc="transferVal(todo.text, todo.id), (revise.isChecked = false)"
      @keyup.enter="
        transferVal(revise.newVal, todo.id),
          (revise.isChecked = !revise.isChecked)
      "
      @blur="transferVal(revise.newVal, todo.id), (revise.isChecked = false)"
      v-foucs="revise.isChecked"
    />
    <!-- @blur="transferVal(revise.newVal, todo.id)" -->
    <a href="javaScript:;" @click="$emit('dele-todo-list-item', todo.id)">x</a>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  data: function () {
    return {
      revise: {
        newVal: this.todo.text,
        isChecked: false,
      },
    };
  },
  methods: {
    transferVal(val, id) {
      // console.log(val);
      // console.log(id);
      this.revise.newVal = val;
      // console.log(this.todo.text);
      if (this.revise.isChecked) {
        this.$emit("revise-todo-list-item", { val: val, id: id });
      }
    },
  },
  // 自定义指令
  directives: {
    foucs: {
      inserted(el, binding) {
        // inserted  钩子函数  只有父节点存在，在插入父节点时调用
        // inserted钩子函数有两个参数（el,binding） el表示使用自定义指令的元素，binding表示自定义指令的信息
        // console.log(binding);
        if (binding.value) {
          el.focus();
        }
      },
    },
  },
};
</script>

<style>
li {
  /* height: 30px;
  padding: 10px 0;
  border: 1px solid #e1d9d9;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative; */
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  /* height: 62px; */
}
li input:nth-of-type(1) {
  /* position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px; */
  display: none;
}
li label {
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
li label::after {
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
li input:nth-of-type(1):checked + label {
  box-shadow: 0 0 6px #24b7e5;
}
li input:nth-of-type(1):checked + label::after {
  background-color: #24b7e5;
  box-shadow: 0 0 6px #24b7e5;
}
li span {
  display: block;
  /* position: absolute; */
  /* left: 50px; */
  width: 100%;
  padding: 15px 15px 15px 60px;
  overflow: hidden;
  word-break: break-all;
  white-space: normal;
}
li input:nth-of-type(2) {
  border: none;
  outline: 0;
  width: 510px;
  height: 62px;
  font-size: 24px;
  padding: 15px 15px 15px 20px;
  margin-left: 40px;
  color: #4d4d4d;
  box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 20%);
  font-weight: 100;
}
li a {
  /* display: block; */
  text-decoration: none;
  color: rgb(190, 112, 112);
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  display: none;
  font-weight: bold;
}
li:hover a {
  display: block;
}
.changeVal {
  display: none;
}
</style>