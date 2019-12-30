import fetch from './fetch'

const http = {
  get: (path, data) => fetch.get(path, {
    params: data
  }),
  post: (path, data, config) => fetch.post(path, data, config)
}
export default {
  // 获取商家信息
  getSeller: data => http.get('/shop/seller/info', data),

  // 获取商品列表
  getGoodsList: data => http.post('/seller/gjz/goods/searchPublishGoods', data),

  // 获取自定义类目列表
  getTypeList: () => http.get('/seller/gjz/productType/findAll'),

  // 获取商家视频列表
  getVideoList: params => http.post('/shop/data/video/search?page=' + params.page + '&rows=' + params.rows + '&title=' + params.title),

  // 3D 商品全部列表
  get3DList: data => http.post('/seller/gjz/item/searchThreePage', data),

  // 获取店招
  getAppSign: () => http.get('/shop/gjz/decoration/trick/findBySellerId'),
  // 保持店招
  saveAppSign: data => http.post('/shop/gjz/decoration/trick/save', data),
  // 获取Banner
  getAppBanner: () => http.get('/shop/gjz/decoration/banner/findBySellerId'),
  // 保存Banner
  saveAppBanner: (data, params) => http.post('/shop/gjz/decoration/banner/save?deleteIds=' + params, data),
  // 获取橱窗产品
  getAppWindow: () => http.get('/shop/gjz/decoration/window/findBySellerId'),
  // 保存橱窗产品
  saveAppWindow: data => http.post('/shop/gjz/decoration/window/save', data),
  // 获取推荐产品
  getAppProduct: () => http.get('/shop/gjz/decoration/product/findBySellerId'),
  // 保存推荐产品
  saveAppProduct: data => http.post('/shop/gjz/decoration/product/save', data),
  // 获取 app 工厂视频
  getAppVideo: () => http.get('/shop/gjz/decoration/video/findBySellerId'),
  // 保存 app 工厂视频
  saveAppVideo: data => http.post('/shop/gjz/decoration/video/save', data),
  // 发布店铺装修app端
  appOnlineVersion: () => http.get('/shop/gjz/decoration/online/releaseGjzDecorationApp')
}
