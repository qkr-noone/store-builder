import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router
router = new Router({
  routes: [
    {
      path: '/decorate',
      name: 'decorate',
      component: resolve => require(['@/views/decorate/decorate'], resolve)
    },
    {
      path: '/',
      redirect: '/decorate',
      component: resolve => require(['@/views/decorate/decorate'], resolve)
    },
    {
      path: '/preview_pc',
      name: 'preview_pc',
      component: resolve => require(['@/views/preview/preview_pc'], resolve)
    },
    {
      path: '/preview_mobile',
      name: 'previewMobile',
      component: resolve => require(['@/views/preview/preview_mobile'], resolve)
    },
    {
      path: '/page',
      name: 'page',
      component: resolve => require(['@/views/home/page'], resolve)
    }
  ]
})

export default router
