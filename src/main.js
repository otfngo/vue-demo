import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import '@/directive/vue-directive.js'
import NC from 'number-calc'

Vue.use(ElementUI)

Vue.prototype.$NC = NC

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
