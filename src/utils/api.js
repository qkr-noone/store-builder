import fetch from './fetch'

const http = {
  get: (path, data) => fetch.get(path, {
    params: data
  }),
  post: (path, data, config) => fetch.post(path, data, config)
}
export default {
  // 获取模板菜单列表
  homeNav: () => http.get('/shop/decoration/findAllModule'),
  // 根据id 获取模板
  getTemplate: data => http.get('/shop/decoration/findTemplateItemByTemplateId', data)
}
