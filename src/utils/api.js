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

// let data = {
//   name: 'goods_pingpu',
//   data: `<div style="display: flex; margin-left: 40px; margin-right: 35px; margin-bottom: 50px; padding-top: 8px;">
//                             <div style="width:30px; height:30px; display: flex; justify-content: center; align-items: center; flex-shrink: 0; margin-top: -8px;"> <img style="width: 100%;" src="static/img/mk_search_service.png"> </div>
//                             <div class="con-box-item" style="margin-left: 4px; display: flex; flex-direction: column; justify-content: center;">
//                               <h4 class="con-box-tit" style="text-align: left; color:rgba(255,70,6,1); font-size: 14px;">厂家服务</h4>
//                               <p style="font-size: 12px; color: #878787; line-height: 20px; margin-top: 8px;">本产品全国联保，享受三包服务，质保期为：十五天质保</p>
//                             </div>
//                           </div>
//                           <div style="display: flex; margin-left: 40px; margin-right: 35px; margin-bottom: 50px; padding-top: 8px;">
//                             <div style="width:30px; height:30px; display: flex; justify-content: center; align-items: center; flex-shrink: 0; margin-top: -8px;"> <img style="width: 100%;" src="static/img/mk_search_service.png"> </div>
//                             <div class="con-box-item" style="margin-left: 4px; display: flex; flex-direction: column; justify-content: center;">
//                               <h4 class="con-box-tit" style="text-align: left; color:rgba(255,70,6,1); font-size: 14px;">正品行货</h4>
//                               <p style="font-size: 12px; color: #878787; line-height: 20px; margin-top: 8px;">本商城向您保证所售商品均为正品行货，商城自营商品开具机打发票或电子发票。</p>
//                             </div>
//                           </div>
//                           <div style="display: flex; margin-left: 40px; margin-right: 35px; margin-bottom: 50px; padding-top: 8px;">
//                             <div style="width:30px; height:30px; display: flex; justify-content: center; align-items: center; flex-shrink: 0; margin-top: -8px;"> <img style="width: 100%;" src="static/img/mk_search_protect.png"> </div>
//                             <div class="con-box-item" style="margin-left: 4px; display: flex; flex-direction: column; justify-content: center;">
//                               <h4 class="con-box-tit" style="text-align: left; color:rgba(255,70,6,1); font-size: 14px;">全国联保</h4>
//                               <p style="font-size: 12px; color: #878787; line-height: 20px; margin-top: 8px;">凭质保证书及京东商城发票，可享受全国联保服务（奢侈品、钟表除外；奢侈品、钟表由京东联系保修，享受法定三包售后服务），与您亲临商场选购的商品享受相同的质量保证。本商城还为您提供具有竞争力的商品价格和运费政策，请您放心购买！<br /><span style="margin-top: 20px;">注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！</span></p>
//                             </div>
//                           </div>
//                           <div style="display: flex; margin-left: 40px; margin-right: 35px; margin-bottom: 50px; padding-top: 8px;">
//                             <div style="width:30px; height:30px; display: flex; justify-content: center; align-items: center; flex-shrink: 0; margin-top: -8px;"> <img style="width: 100%;" src="static/img/mk_search_service.png"> </div>
//                             <div class="con-box-item" style="margin-left: 4px; display: flex; flex-direction: column; justify-content: center;">
//                               <h4 class="con-box-tit" style="text-align: left; color:rgba(255,70,6,1); font-size: 14px;">无忧退货</h4>
//                               <p style="font-size: 12px; color: #878787; line-height: 20px; margin-top: 8px;">客户购买商城自营商品7日内（含7日，自客户收到商品之日起计算），在保证商品完好的前提下，可无理由退货。（部分商品除外，详情请见各商品细则）权利声明</p>
//                             </div>
//                           </div>
//                           <div style="display: flex; margin-left: 40px; margin-right: 35px; margin-bottom: 50px; padding-top: 8px;">
//                             <div class="con-box-item" style="margin-left: 4px; display: flex; flex-direction: column; justify-content: center;">
//                               <h4 class="con-box-tit" style="text-align: left; color:rgba(255,70,6,1); font-size: 14px;">权利声明</h4>
//                               <p style="font-size: 12px; color: #878787; line-height: 20px; margin-top: 8px;">本网站的所有商品信息、客户评价、商品咨询、网友讨论等内容，是本站重要的经营资源，未经许可，禁止非法转载使用。<br />注：本站商品信息均来自于合作方，其真实性、准确性和合法性由信息拥有者（合作方）负责。本站不提供任何保证，并不承担任何法律责任.</p>
//                             </div>
//                           </div>
//                           <div style="display: flex; margin-left: 40px; margin-right: 35px; margin-bottom: 50px; padding-top: 8px;">
//                             <div class="con-box-item" style="margin-left: 4px; display: flex; flex-direction: column; justify-content: center;">
//                               <h4 class="con-box-tit" style="text-align: left; color:rgba(255,70,6,1); font-size: 14px;">价格说明</h4>
//                               <p style="font-size: 12px; color: #878787; line-height: 20px; margin-top: 8px;">本站价：本站价为商品的销售价，是您最终决定是否购买商品的依据。<br /><span style="margin-top: 20px;">划线价：商品展示的划横线价格为参考价，并非原价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在猴尾巴平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</span><br /><span style="margin-top: 20px;">折扣：如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。</span><br /><span style="margin-top: 20px;">异常问题：商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。</span></p>
//                             </div>
//                           </div>`
// }
