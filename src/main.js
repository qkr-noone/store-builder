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

import i18n from './lang' // Internationalization

Vue.prototype.API = API
Vue.prototype.APIG = APIG
Vue.config.productionTip = false
Vue.prototype.WEBSITE = process.env.BASE_FRONT

Vue.use(VueCookies)
Vue.use(VueCropper)

Vue.use(ElementUI, {
  size: VueCookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

let vueDom = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
Vue.use({
  vueDom
})
