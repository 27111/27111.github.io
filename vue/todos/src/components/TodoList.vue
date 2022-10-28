<template>
  <div class="wrapper">
    <ul>
      <TodoItem
        v-for="todo in condition == 'all'
          ? allShowTodos
          : condition == 'not'
          ? notDoneTodos
          : accomplishTodos"
        :key="todo.id"
        :todo="todo"
        @change-todo-list-item="$emit('change-todo-app-list', $event)"
        @dele-todo-list-item="$emit('dele-todo-app-list', $event)"
        @revise-todo-list-item="$emit('revise-todo-app-list', $event)"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  props: {
    todos: Array, //Array 检测传的值是否为数组类型
    condition: String,
    allShowTodos: Array,
    notDoneTodos: Array,
    accomplishTodos: Array,
  },
};
</script>

<style>
.wrapper ul {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
}
</style>