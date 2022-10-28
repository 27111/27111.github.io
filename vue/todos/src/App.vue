<template>
  <div id="app">
    <TodoHeader
      @add-todo="addTodo"
      :changeAll="changeAll"
      @changeAll-todo-vue-header="changeAllTodos"
    />
    <TodoList
      :todos="todos"
      @change-todo-app-list="changeTodo"
      @dele-todo-app-list="deleteTodo"
      :condition="condition"
      :allShowTodos="allShowTodos"
      :notDoneTodos="notDoneTodos"
      :accomplishTodos="accomplishTodos"
      @revise-todo-app-list="reviseTodo"
    />
    <TodoFooter
      :daiban="daiban"
      :btns="btns"
      :allShowTodos="allShowTodos"
      :notDoneTodos="notDoneTodos"
      :accomplishTodos="accomplishTodos"
      :condition="condition"
      @changeCondition-footer="changeCondition"
      :clearShow="clearShow"
      @clear-accomplish-footer="clearaccomplish"
    />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
// import TodoItem from "./components/TodoItem.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  data: function () {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      btns: [
        {
          name: "全部",
          judge: "all",
        },
        {
          name: "未完成",
          judge: "not",
        },
        {
          name: "完成",
          judge: "done",
        },
      ],
      condition: localStorage.getItem("condition") || "all",
    };
  },
  computed: {
    changeAll() {
      return this.todos.every((e) => e.finish);
    },
    daiban() {
      return this.todos.filter((e) => e.finish == false).length;
    },
    allShowTodos() {
      return this.todos;
    },
    notDoneTodos() {
      return this.todos.filter((e) => !e.finish);
    },
    accomplishTodos() {
      return this.todos.filter((e) => e.finish);
    },
    clearShow() {
      return this.todos.some((e) => e.finish);
    },
  },
  methods: {
    addTodo(newTodo) {
      // console.log(newTodo);
      this.todos = [
        ...this.todos,
        {
          id: this.todos.length
            ? Math.max(...this.todos.map((e) => e.id)) + 1
            : 1,
          text: newTodo,
          finish: false,
        },
      ];
    },
    changeTodo({ id, finish }) {
      // console.log(id, finish);
      this.todos = this.todos.map((e) => {
        return e.id === id ? { ...e, finish: finish } : e;
      });
    },
    changeAllTodos() {
      this.todos = this.todos.map((e) => ({
        ...e,
        finish: event.target.checked,
      }));
    },
    deleteTodo(id) {
      // console.log(id);
      this.todos = this.todos.filter((e) => e.id !== id);
    },
    changeCondition(judge) {
      // console.log(judge);
      this.condition = judge;
    },
    reviseTodo({ val, id }) {
      // console.log(val, id);
      // console.log(Boolean(val.trim()));
      // console.log(val.trim());
      this.todos = this.todos.map((e) => {
        return e.id === id
          ? { ...e, text: Boolean(val.trim()) == true ? val.trim() : e.text }
          : e;
      });
    },
    clearaccomplish() {
      this.todos = this.todos.filter((e) => !e.finish);
    },
  },
  watch: {
    todos: function (newVal) {
      localStorage.setItem("todos", JSON.stringify(newVal));
    },
    condition: function (newVal) {
      // console.log(newVal);
      localStorage.setItem("condition", newVal);
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  color: #4d4d4d;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  background: #f5f5f5;
  font-weight: 300;
}
#app {
  /* width: 500px; */
  margin: 0 auto;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
}
</style>
