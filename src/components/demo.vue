<template>
  <div>
    {{ test() }} {{ foo + 1 }}
    <br>
    {{ reversedMessage }} {{ reverseMessage() }}
    <br>
    <button @click="handlePlusClick">++</button>
    <button @click="handleMinusClick">--</button>
    <button @click="handleClick">click</button>
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
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    test() {
      return this.foo + 1
    },
    reverseMessage() {
      return this.message.split('').reverse().join('')
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
    }
  }
}
</script>
