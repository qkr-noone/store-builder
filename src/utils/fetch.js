import axios from 'axios'
import qs from 'qs'
import VueCookies from 'vue-cookies'
import {Message} from 'element-ui' // Loading

const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 10000, // 请求超时
  responseType: 'json',
  withCredentials: false, // 是否允许带cookie这些  指示是否跨站点访问控制请求  前台和商家后台不一样
  headers: {
    'Content-Type': 'application/json;charset=utf-8' // 'application/x-www-form-urlencoded;charset=utf-8  application/octet-stream'
  }
})

// 添加请求拦截器
service.interceptors.request.use(request => {
  // 若有做鉴权token，需要请求头自动加上token
  if (VueCookies.get('token')) {
    request.headers.Authorization = VueCookies.get('token')
  }
  if (request.data && (request.headers['Content-Type'].indexOf('application/x-www-form-urlencoded') !== -1)) {
    request.data = qs.stringify(request.data)
  }
  return request
}, error => {
  Message({
    showClose: true,
    center: true,
    message: error,
    type: 'error'
  })
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(res => {
  const result = res.data
  if (result.code !== 2000) {
    // 显示接口报错信息
    let msg = result.msg || '服务器出错了'
    Message({
      showClose: true,
      center: true,
      message: msg,
      type: 'error'
    })
    if (result.code === 4001) {
      // token 失效返回到登录页面中 清除数据
      localStorage.removeItem('token')
      localStorage.removeItem('build_tree')
      // 需修改
      window.location.href = `http://192.168.1.100:9002/#/login?redirect=`
    }
    return Promise.reject(msg)
  }
  return result
}, error => {
  console.log(error, 'error')
  // 返回 response 里的错误信息
  return Promise.reject(error)
})

export default service
