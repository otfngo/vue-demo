import Vue from 'vue'
import Router from 'vue-router'
import AccessRoot from '@/components/AccessRoot'
import Directive from '@/components/Directive'
import HelloWorld from '@/components/HelloWorld'
import SlotScope from '@/components/SlotScope'
import XTouch from '@/components/Touch'
import Transition from '@/components/Transition'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/access-root',
      name: 'AccessRoot',
      component: AccessRoot
    },
    {
      path: '/directive',
      name: 'Directive',
      component: Directive
    },
    {
      path: '/slot-scope',
      name: 'SlotScope',
      component: SlotScope
    },
    {
      path: '/x-touch',
      name: 'XTouch',
      component: XTouch
    },
    {
      path: '/transition',
      name: 'Transition',
      component: Transition
    }
  ]
})
