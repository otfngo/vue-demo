<template>
  <div>
    this is from parent data {{ foo }} {{ bar }}
  </div>
</template>

<script>
export default {
  inject: {
    foo: {
      default: 'default'
    },
    bar: {
      default: 'default bar value'
    }
  }
}
</script>
