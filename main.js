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
import APIG from './utils/apiG'
import VueCropper from 'vue-cropper'

Vue.prototype.API = API
Vue.prototype.APIG = APIG
Vue.config.productionTip = false
Vue.prototype.WEBSITE = process.env.BASE_FRONT

Vue.use(ElementUI)
Vue.use(VueCookies)
Vue.use(VueCropper)
// 上传文件 或者需要在页面中拿到全部的接口  也可以放到页面js中
// console.log(process.env.BASE_API)
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
