<template>
  <div>
    <div>{{ foo }}</div>
    <div>{{ bar }}</div>
    <div>{{ baz() }}</div>
    <div>
      <button @click="handlePlusClick">++</button>
      foo
      <button @click="handleMinusClick">--</button>
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
    handlePlusClick() {
      this.$root.foo++
    },
    handleMinusClick() {
      this.$root.foo--
    }
  }
}
</script>
