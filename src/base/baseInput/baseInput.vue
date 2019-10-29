<template>
  <label>
    {{ label }}
    <input :="$attrs"
      :value="value"
      @input="inputListeners">
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners() {
      let vm = this
      return Object.assign({}, this.$listeners, {
        input($event) {
          vm.$emit('input', $event.target.value)
        }
      })
    }
  }
}
</script>
