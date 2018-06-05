import Vue from 'vue'
import App from './App'
import router from './router'
import '@/directive/vue-directive.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  // test $root
  data: {
    foo: 1
  },
  computed: {
    bar() {
      return this.foo
    }
  },
  methods: {
    baz() {
      return this.foo + 1
    }
  }
})
