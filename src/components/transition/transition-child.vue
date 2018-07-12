<template>
  <transition name="slide">
    <div class="transition-child">
      <button @click="handleBackClick">返回</button>
      <div>transition-child demo</div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    handleBackClick() {
      this.$router.push('/transition')
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s;
}
.slide-enter, .slide-leave-to {
  transform: translate3d(100%, 0, 0)
}

.transition-child {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;
}
</style>
