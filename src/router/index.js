import Vue from 'vue'
import Router from 'vue-router'
import AccessRoot from '@/components/AccessRoot'
import Directive from '@/components/Directive'
import HelloWorld from '@/components/HelloWorld'
import SlotScope from '@/components/SlotScope'
import Transition from '@/components/Transition'
import VTouch from '@/components/VTouch'

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
      path: '/transition',
      name: 'Transition',
      component: Transition
    },
    {
      path: '/v-touch',
      name: 'VTouch',
      component: VTouch
    }
  ]
})
