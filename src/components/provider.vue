<template>
  <div>
    <child></child>
  </div>
</template>

<script>
import child from './child'

export default {
  components: {
    child
  },
  provide: {
    foo: 'foo'
  }
}
</script>
