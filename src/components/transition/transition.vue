<template>
  <div class="transition">
    <button @click="show = !show">toggle</button>
    <transition name="fade">
      <p v-show="show">hello</p>
    </transition>
    <button @click="handleGoToChildClick">前往</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    handleGoToChildClick() {
      this.$router.push('/transition/child')
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.transition {
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
}
</style>
