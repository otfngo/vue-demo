<template>
  <div>
    <div>{{ foo }}</div>
    <div>{{ bar }}</div>
    <div>{{ baz() }}</div>
    <div>
      <button @click="plus">++</button>
      foo
      <button @click="minus">--</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    foo() {
      return this.$root.foo
    },
    bar() {
      return this.$root.bar
    }
  },
  methods: {
    baz() {
      return this.$root.baz()
    },
    plus() {
      this.$root.foo++
    },
    minus() {
      this.$root.foo--
    }
  }
}
</script>
