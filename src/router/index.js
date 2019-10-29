import Vue from 'vue'
import Router from 'vue-router'
import AccessRoot from '@/components/AccessRoot'
import Directive from '@/components/Directive'
import SlotScope from '@/components/SlotScope'
import Home from '@/components/home'
import demo from '@/components/demo'
import provider from '@/components/provider'
import Transition from '@/components/transition/transition'
import TransitionChild from '@/components/transition/transition-child'
import Passive from '@/components/passive/passive'
import Checkbox from '@/components/checkbox/checkbox'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/demo',
    name: 'demo',
    component: demo
  },
  {
    path: '/passive',
    name: 'Passive',
    component: Passive
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: Checkbox
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
    component: Transition,
    children: [{
      path: 'child',
      component: TransitionChild
    }]
  },
  {
    path: '/provider',
    name: 'provider',
    component: provider
  }]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    // next({
    //   path: '/slot-scope',
    //   query: {
    //     redirect: to.fullPath
    //   }
    // })
    next()
  } else {
    next()
  }
})

export default router
