<template>
  <div>
    <h1>passive</h1>
    <div ref="noPassive" class="no-passive">
      <ul>
        <li v-for="i in 100" :key="i">{{ i }}</li>
      </ul>
    </div>
    <div ref="passive" class="passive">
      <ul>
        <li v-for="i in 100" :key="i">{{ i }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(function() {
      const noPassive = this.$refs.noPassive
      const passive = this.$refs.passive

      const list = []
      for (let i = 0; i < 2000000; i++) {
        const n = this.getRandomIntInclusive(0, i)
        list.push(n)
      }

      noPassive.addEventListener('touchmove', event => {
        console.time('noPassive')
        const copy = [...list]
        copy.sort()
        console.timeEnd('noPassive')
      }, {
        passive: false
      })

      passive.addEventListener('touchmove', () => {
        console.time('passive')
        const copy = [...list]
        copy.sort()
        console.timeEnd('passive')
      }, {
        passive: true
      })
    })
  },
  methods: {
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
</script>
