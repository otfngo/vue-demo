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
    <button @click="handleTransitionClick">transition page</button>

    <pre><code>0.1</code> + <code>0.2</code> = <code>{{ value }}</code></pre>
    <pre><code>1.0</code> - <code>0.9</code> = <code>{{ $NC.subtract(1.0, 0.9) }}</code></pre>

    <div id="mount-point"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foo: 1,
      message: 'hello world',
      value: 0
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
  created() {
    this.value = this.$NC.add(0.1, 0.2)
  },
  beforeRouteEnter(to, from, next) {
    next()
  },
  beforeRouteUpdate(to, from, next) {
    next()
  },
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm(
      'Do you really want to leave? you have unsaved changes!'
    )
    if (answer) {
      next()
    } else {
      next(false)
    }
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
    },
    handleTransitionClick() {
      this.$router.push('/transition')
    }
  }
}
</script>
