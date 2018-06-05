import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SlotScope from '@/components/SlotScope'
import AccessRoot from '@/components/AccessRoot'
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
      path: '/slot-scope',
      name: 'SlotScope',
      component: SlotScope
    },
    {
      path: '/access-root',
      name: 'AccessRoot',
      component: AccessRoot
    },
    {
      path: '/transition',
      name: 'Transition',
      component: Transition
    }
  ]
})
