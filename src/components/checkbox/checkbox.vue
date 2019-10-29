<template>
  <div>
    <h1>base checkbox</h1>
    <base-checkbox v-model="lovingVue"></base-checkbox>
  </div>
</template>

<script>
import BaseCheckbox from '@/base/baseCheckbox/baseCheckbox'

export default {
  components: {
    BaseCheckbox
  },
  data() {
    return {
      lovingVue: false
    }
  }
}
</script>
