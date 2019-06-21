'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://47.112.151.84:8082"', // 接口：http://192.168.1.100:8082
  // BASE_AFTER: '"http://seller.mktail.cn"', // 后台系统
  // BASE_FRONT: '"http://portal.mktail.cn"' // 用户前台
  BASE_API: '"http://192.168.1.37:8082"', // 接口： http://192.168.1.37:8082 http://localhost:8085
  BASE_AFTER: '"http://192.168.1.100:9002"', // 后台系统
  BASE_FRONT: '"http://192.168.1.100:9003"' // 用户前台
})
