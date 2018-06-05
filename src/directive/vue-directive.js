import Vue from 'vue'
import Hammer from 'hammerjs'

Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})

Vue.directive('tap', {
  bind(el, binding) {
    new Touch(el, 'tap', binding)
  }
})

Vue.directive('swipeleft', {
  bind(el, binding) {
    new Touch(el, 'swipeleft', binding)
  }
})

Vue.directive('swiperight', {
  bind(el, binding) {
    new Touch(el, 'swiperight', binding)
  }
})

Vue.directive('press', {
  bind(el, binding) {
    new Touch(el, 'press', binding)
  }
})

function Touch(el, type, binding) {
  this.el = el
  this.type = type
  this.binding = binding
  let hammer = new Hammer(this.el)
  hammer.on(this.type, this.binding.value)
}
