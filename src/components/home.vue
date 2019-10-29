<template>
  <div>
    <ul>
      <li v-for="(item, index) in routes" :key="index">
        <router-link :to="{ name: item.name }">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import router from '@/router'

export default {
  computed: {
    routes() {
      return router.options.routes
    }
  }
}
</script>
