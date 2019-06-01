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
  getTemplate: data => http.get('/shop/decoration/findTemplateItemByTemplateId', data),
  // 店铺首页的导航栏菜单信息
  storeMenu: data => http.get('', data),
  // 根据版本获取店铺装修数据
  getStoreModule: data => http.get('/shop/decoration/getHomeComponent', data),
  // 拖入保存店铺装修模块
  saveTemplateGetData: data => http.post('/shop/decoration/saveOfflineHome', data),
  // 获取商品列表
  getGoodsList: data => http.post('/shop/decoration/findTilGoods', data),
  // 获取店铺装修模块的数据
  getTemplateData: data => http.post('/shop/decoration/getDataList', data),
  // 修改店铺页面模块顺序
  setTemplateSort: data => http.get('/shop/decoration/modifySort', data),
  // 删除店铺页面模块
  deleteTemplate: data => http.get('/shop/decoration/deleteOfflineHome', data)
}
