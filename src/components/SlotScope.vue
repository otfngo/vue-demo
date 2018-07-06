<template>
  <todo-list :todos="todos"></todo-list>
</template>

<script>
import TodoList from './TodoList'

export default {
  comments: {
    TodoList
  },
  data() {
    return {
      todos: [
        { id: 1, text: 'text1' },
        { id: 2, text: 'text2' },
        { id: 3, text: 'text3' },
        { id: 4, text: 'text4' }
      ]
    }
  }
}
</script>
