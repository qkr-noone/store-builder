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
    },
    {
      path: '/preview_pc',
      name: 'preview_pc',
      component: resolve => require(['@/views/preview/preview_pc'], resolve)
    }
  ]
})

export default router
