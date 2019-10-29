<template>
  <input type="checkbox" :checked="checked" @change="handleChange($event)">
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  methods: {
    handleChange($event) {
      this.$emit('change', $event.target.checked)
    }
  }
}
</script>
