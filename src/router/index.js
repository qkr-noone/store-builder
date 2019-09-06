import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router
router = new Router({
  routes: [
    {
      path: '/decorate',
      name: 'decorate',
      component: resolve => require(['@/views/decorate/decorate'], resolve),
      children: [{
        path: 'mobile',
        name: 'mobile',
        component: resolve => require(['@/views/decorate/mobile'], resolve)
      }]
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
    },
    {
      path: '/test',
      name: 'test',
      redirect: '/test/shop',
      component: resolve => require(['@/views/test/index'], resolve),
      children: [
        {
          path: 'shop',
          name: 'shop',
          component: resolve => require(['@/views/test/children/shop'], resolve)
        },
        {
          path: 'shop_video',
          name: 'shop_video',
          component: resolve => require(['@/views/test/children/shop_video'], resolve)
        }
      ]
    }
  ]
})

export default router
