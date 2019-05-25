// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/common.scss'
// import './assets/font_store_builder/iconfont.js'
// import './assets/font_store_builder/iconfont.css'
import VueCookies from 'vue-cookies'
import API from './utils/api'

Vue.prototype.API = API
Vue.config.productionTip = false

Vue.use(ElementUI, VueCookies)
// 上传文件 或者需要在页面中拿到全部的接口  也可以放到页面中
// console.log(process.env.BASE_API)

// 用户手动刷新页面，vuex 中的信息会重设，需重新新增
let isValue = localStorage.getItem('build_tree')
if (isValue) {
  let tree = JSON.parse(isValue)
  store.commit('BUILD_TREE', tree)
}
// 测试用例
VueCookies.set('token', 'MkTail-eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYWlkdTEyMyIsImV4cCI6MTU4NTAyMDAzMiwiaWF0IjoxNTUzNDg0MDMyfQ.ZFEvTHIWYrCyujdAzOIJElDRm9wK75T3_rzz7KQmQA3Fg4UWXyphBj4ReeSZeRlrk62bc5KF4oxOSKtn3YERgw')

let vueDom = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
Vue.use({
  vueDom
})
