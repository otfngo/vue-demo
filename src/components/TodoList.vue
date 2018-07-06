<template>
  <ul>
    <!-- <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
    </li> -->

    <li v-for="todo in todos" :key="todo.id">
      <slot :todo="todo">
        {{ todo.text }}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
