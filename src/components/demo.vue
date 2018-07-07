<template>
  <div>
    {{ test() }} {{ foo + 1 }}
    <br>
    {{ reversedMessage }} {{ reverseMessage() }}
    <br>
    <button @click="handlePlusClick">++</button>
    <button @click="handleMinusClick">--</button>
    <button @click="handleClick">click</button>
    <button @click="goToAnotherPage">go to another page</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foo: 1,
      message: 'hello world'
    }
  },
  computed: {
    reversedMessage() {
      return this.message
        .split('')
        .reverse()
        .join('')
    }
  },
  beforeRouteEnter(to, from, next) {
    debugger
    next()
  },
  beforeRouteUpdate(to, from, next) {
    next()
  },
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  },
  beforeRouteEnter (to, from, next) {
    // ...
  },
  methods: {
    test() {
      return this.foo + 1
    },
    reverseMessage() {
      return this.message
        .split('')
        .reverse()
        .join('')
    },
    handlePlusClick() {
      console.log('handlePlusClick')
      this.foo++
    },
    handleMinusClick() {
      console.log('handleMinusClick')
      this.foo--
    },
    handleClick(evt) {
      console.log('handleClick', evt)
    },
    goToAnotherPage() {
      this.$router.push('/slot-scope')
    }
  }
}
</script>
