<template>
  <div>
    <todo-list :todos="todos"></todo-list>

    <todo-list :todos="todos">
      <template slot-scope="scope">
        {{ scope.todo.text }} / {{ scope.todo.isComplete }}
      </template>
    </todo-list>

    <todo-list :todos="todos">
      <template slot-scope="scope">
        <span v-if="scope.todo.isComplete">
          {{ scope.todo.text }}
        </span>
        <span v-else>
          false
        </span>
      </template>
    </todo-list>

    <!-- 在 vue 2.5.0+ -->
    <todo-list :todos="todos">
      <span slot-scope="scope">
        {{ scope.todo.text }}
      </span>
    </todo-list>

    <!-- 解构 slot-scope -->
    <todo-list :todos="todos">
      <span slot-scope="{ todo }">
        {{ todo.text }}
      </span>
    </todo-list>
  </div>
</template>

<script>
import TodoList from './TodoList'

export default {
  components: {
    TodoList
  },
  data() {
    return {
      todos: [
        { id: 1, text: 'text1', isComplete: true },
        { id: 2, text: 'text2', isComplete: false },
        { id: 3, text: 'text3', isComplete: true },
        { id: 4, text: 'text4', isComplete: false },
        { id: 5, text: 'text5', isComplete: true }
      ]
    }
  }
}
</script>
