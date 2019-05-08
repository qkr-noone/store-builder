import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router
router = new Router({
  routes: [
    {
      path: '/',
      name: 'decorate',
      component: resolve => require(['@/views/decorate/decorate'], resolve)
    }
  ]
})

export default router
