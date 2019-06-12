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

  // 获取店招数据
  getStoreSign: () => http.get('/shop/decoration/trick/findBySellerId'),

  // 保存店招
  saveStoreSign: data => http.post('/shop/decoration/trick/save', data),

  // 店铺首页导航栏
  storeNavBar: data => http.get('/shop/decoration/navigation/getOnlineNavigationBar', data),

  // 店铺首页的导航栏 类别下拉菜单
  storeMenu: () => http.get('/shop/goods/findProductTypeComboList'),

  // 根据店铺页面id(导航栏子项id)，获取店铺组件数据
  getStorePageModule: data => http.get('/shop/decoration/component/findByNavigationItemId', data),

  // TODO 临时 获取店铺组件数据
  getTemStorePageModule: () => http.get('/shop/decoration/component/initializeHome'),

  // 拖入保存店铺装修模块
  saveTemplateGetData: data => http.post('/shop/decoration/component/saveComponent', data),

  // 修改店铺页面模块顺序
  moveComponent: data => http.get('/shop/decoration/component/moveToTarget', data),

  // 删除店铺页面模块
  deleteComponent: data => http.get('/shop/decoration/component/delete', data),

  // 删除模板
  deleteTemplate: data => http.get('/shop/decoration/module/delete', data),

  // 获取商品列表
  getGoodsList: data => http.get('/shop/decoration/findProductGoods', data),

  // 保存模板（数据）
  saveTemplate: data => http.post('/shop/decoration/module/save', data),

  // 保存banner图片集合
  saveBannerImg: (data, params) => http.post('/shop/decoration/image/save?deleteIds=' + params, data),

  // 根据组件id获取组件数据
  getComponent: data => http.get('/shop/decoration/component/getOneById', data),

  // 获取文件下的资源 1（相册） 2（3d文件） 3（视频)
  getResources: (data, params) => http.post('/shop/data/search?page=' + params.page + '&rows=' + params.rows, data),

  // 发布店铺装修
  onlineVersion: data => http.get('/shop/decoration/online/releaseDecoration', data)
}
