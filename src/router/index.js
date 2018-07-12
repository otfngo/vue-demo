import Vue from 'vue'
import Router from 'vue-router'
import AccessRoot from '@/components/AccessRoot'
import Directive from '@/components/Directive'
import SlotScope from '@/components/SlotScope'
// import Transition from '@/components/Transition'
import demo from '@/components/demo'
import provider from '@/components/provider'
import Transition from '@/components/transition/transition'
import TransitionChild from '@/components/transition/transition-child'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: demo,
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
    name: 'transition',
    component: Transition,
    children: [
      {
        path: 'child',
        component: TransitionChild
      }
    ]
  },
  {
    path: '/provider',
    name: 'provider',
    component: provider
  }
  ]
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
