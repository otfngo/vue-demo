<template>
  <base-input :label="label" :value="value"></base-input>
</template>

<script>
import BaseInput from '@/base/baseInput/BaseInput'

export default {
  components: {
    BaseInput
  },
  data() {
    return {
      label: 'labelTest',
      value: 'valueTest'
    }
  }
}
</script>
