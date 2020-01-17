'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://api.inner.mktail.cn"', // 接口： http://192.168.1.37:8888 https://back.seller.inner.mktail.cn  https://api.inner.mktail.cn
  BASE_AFTER: '"http://192.168.1.39:8082"', // 后台系统
  BASE_FRONT: '"https://inner.mktail.cn"' // 用户前台
})
