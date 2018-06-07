<template>
  <div>
    <v-touch @swipeleft="onSwipeLeft"
      @pan="onPan">
      <span class="touch" ref="touch">
        swipe me
      </span>
    </v-touch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      touch: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.touch = this.$refs.touch
    })
  },
  methods: {
    onSwipeLeft() {
      console.log('onSwipeLeft')
    },
    onPan(event) {
      this.touch.style.transform = `translate3d(${event.deltaX}px, ${event.deltaY}px, 0)`
    }
  }
}
</script>

 <style lang="scss" scoped>
 .touch {
   position: relative;
   display: inline-block;
 }
 </style>
