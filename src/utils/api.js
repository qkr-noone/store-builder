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

  // 获取商家信息
  getSeller: data => http.get('/shop/seller/info', data),

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

  // 获取文件下的资源 1（相册） 2（3d文件） 3（视频) --- 未使用
  getResources: (data, params) => http.post('/shop/data/search?page=' + params.page + '&rows=' + params.rows, data),

  // 获取商家视频列表
  getVideoList: params => http.post('/shop/data/video/search?page=' + params.page + '&rows=' + params.rows + '&title=' + params.title),

  // 3D 商品全部列表
  get3DList: data => http.get('/shop/goods/findThreeDGoodsByName', data),

  // 发布店铺装修
  onlineVersion: data => http.get('/shop/decoration/online/releaseDecoration', data),

  /* --- App 装修 --- */

  // 获取店招
  getAppSign: () => http.get('/shop/decoration/app/trick/findBySellerId'),
  // 保持店招
  saveAppSign: data => http.post('/shop/decoration/app/trick/save', data),
  // 获取Banner
  getAppBanner: () => http.get('/shop/decoration/app/banner/findBySellerId'),
  // 保存Banner
  saveAppBanner: (data, params) => http.post('/shop/decoration/app/banner/save?deleteIds=' + params, data),
  // 获取橱窗产品
  getAppWindow: () => http.get('/shop/decoration/app/window/findBySellerId'),
  // 保存橱窗产品
  saveAppWindow: data => http.post('/shop/decoration/app/window/save', data),
  // 获取推荐产品
  getAppProduct: () => http.get('/shop/decoration/app/product/findBySellerId'),
  // 保存产品产品
  saveAppProduct: data => http.post('/shop/decoration/app/product/save', data),
  // 发布店铺装修app端
  appOnlineVersion: () => http.get('/shop/decoration/app/online/releaseDecoration'),
  // 获取 app 工厂视频
  getAppVideo: () => http.get('/shop/decoration/app/video/findBySellerId'),
  // 保存 app 工厂视频
  saveAppVideo: data => http.post('/shop/decoration/app/video/save', data)
}
