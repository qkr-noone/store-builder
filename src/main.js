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
import VueCropper from 'vue-cropper'

Vue.prototype.API = API
Vue.config.productionTip = false
Vue.prototype.WEBSITE = 'http://192.168.1.100:9003'

Vue.use(ElementUI)
Vue.use(VueCookies)
Vue.use(VueCropper)
// 上传文件 或者需要在页面中拿到全部的接口  也可以放到页面中
// console.log(process.env.BASE_API)

// 测试用例
VueCookies.set('st_token', 'MkTail-eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmZmYiLCJleHAiOjE1OTE4NDE2NDAsImlhdCI6MTU2MDMwNTY0MH0.toJDodfotoiwC65-wyeblPU27EenYSZyPhWdR61rkJ5HgORieHwdB9IWeqiDJW_Wmi872JKhJtzZYobV42tk8A')
VueCookies.set('st_b_user', 'fff')
// MkTail-eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZGQiLCJleHAiOjE1OTE3ODY0NTUsImlhdCI6MTU2MDI1MDQ1NX0.hPgHtX_UdtiIHqeh-R_aFOgx-mTe9q8xI9VCRvHG3JX_wyfz_DJby7zzlDBjVhn8QPKNxO1JrA4KFfdioHVsfw
// MkTail-eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYWlkdTEyMyIsImV4cCI6MTU5MTY4Njg0NywiaWF0IjoxNTYwMTUwODQ3fQ.zHIFvyhdug6zeWi6xO7lt-W28xrjf1GMly5WqXBHJ6r_R9BBK-zzDk5o3XtJ2kTRVXeAfhhlcIZ02TUPgTF4vQ
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
