<template>
  <div>
    <p v-tap="tap"
      v-swipeleft="swipeleft"
      v-swiperight="swiperight"
      v-press="press">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'touch example'
    }
  },
  methods: {
    tap(el, binding) {
      console.log('tap', el, binding)
    },
    swipeleft(el, binding) {
      console.log('swipeleft', el, binding)
      console.log(`向左滑动：x偏移量[${el.deltaX}],y偏移量[${el.deltaY}]`)
    },
    swiperight(el, binding) {
      console.log('swiperight', el, binding)
      console.log(`向右滑动：x偏移量[${el.deltaX}],y偏移量[${el.deltaY}]`)
    },
    press(el, binding) {
      console.log('press', el, binding)
    }
  }
}
</script>
