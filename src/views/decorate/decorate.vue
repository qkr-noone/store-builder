<template>
  <div id="decorate" name="data-reactroot">
    <div class="container">
      <header class="header"></header>
      <section class="content">
        <aside>
          <section class="manager-sidebar" ref="nav">
            <div class="switchEditor">
              <span class="PC active">PC</span>
              <span class="mobile">无线</span>
            </div>
            <div class="manager-wrap" :class="{'panel-active': switchNav==='bg'}" @click="switchNav='bg'">
              <a class="manager-link">
                <i>页面背景</i>
              </a>
              <div class="panel">
                <el-tabs @tab-click="handleClick('页面色')">
                  <el-tab-pane label="页面主题色">
                    <div class="bg_tabcontent">
                      <div class="bg_color_wrap">
                        <p class="tab_item_title">选色器</p>
                        <div class="bg_color_content">
                          <div class="intl-pui-react-color"><div class="photoshop-picker " style="width: 240px;"><div class="flexbox-fix" style="display: flex;"><div style="width: 130px; height: 130px; position: relative; border-width: 1px; border-style: solid; border-color: rgb(179, 179, 179) rgb(179, 179, 179) rgb(240, 240, 240); border-image: initial; overflow: hidden;"><div style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; background: rgb(0, 76, 255);"><div class="saturation-white" style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;"><div class="saturation-black" style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;"></div><div style="position: absolute; top: 26.6667%; left: 66.3102%; cursor: default;"><div style="width: 12px; height: 12px; border-radius: 6px; box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px inset; transform: translate(-6px, -6px);"></div></div></div></div></div><div style="position: relative; height: 130px; width: 10px; margin-left: 5px; border-width: 1px; border-style: solid; border-color: rgb(179, 179, 179) rgb(179, 179, 179) rgb(240, 240, 240); border-image: initial;"><div style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;"><div class="hue-vertical" style="padding: 0px 2px; position: relative; height: 100%;" data-spm-anchor-id="a2700.siteadmin.0.i36.4b05ac40bPRZ1r"><div style="position: absolute; left: 0px; top: 38.3065%;"><div><div style="transform: translate(-13px, -4px);"><div style="transform: translate(-8px, -5px);"></div></div><div style="transform: translate(20px, -14px) rotate(180deg);"><div style="transform: translate(-8px, -5px);"></div></div></div></div></div></div></div><div style="width: 80px; margin-left: 10px;"><div class="flexbox-fix" style="display: flex;"><div style="width: 65px;"><div><div style="font-size: 14px; color: rgb(0, 0, 0); text-align: center;">Initial</div><div style="border-width: 1px; border-style: solid; border-color: rgb(179, 179, 179) rgb(179, 179, 179) rgb(240, 240, 240); border-image: initial; margin-bottom: 2px; margin-top: 1px;"><div style="height: 28px; background: rgb(187, 63, 163); box-shadow: rgb(0, 0, 0) 1px 0px 0px inset, rgb(0, 0, 0) -1px 0px 0px inset, rgb(0, 0, 0) 0px 1px 0px inset;"></div><div style="height: 28px; background: rgb(63, 100, 187); box-shadow: rgb(0, 0, 0) 1px 0px 0px inset, rgb(0, 0, 0) -1px 0px 0px inset, rgb(0, 0, 0) 0px -1px 0px inset;"></div></div><div style="font-size: 14px; color: rgb(0, 0, 0); text-align: center;">Current</div></div><div><span>#</span><span class="next-input next-input-single next-input-small" style="width: 55px; margin-top: 8px;"><input type="text" value="3f64bb" height="100%" style="width: 55px; border: 1px solid #999;"></span></div></div></div></div></div></div></div>
                        </div>
                        <el-color-picker v-model="themeColor"></el-color-picker>
                      </div>
                      <div class="bg_dec_p">
                        <p>页面主题色，控制导航颜色和组件上的强调色，同时会影响页面背景色（页面背景色会是主题色深一度的颜色）</p>
                      </div>
                      <div class="bg_tool_contact">
                        <div>设置旺铺右侧工具条</div>
                        <button>设置工具条联系人</button>
                        <p>您可在此设置旺铺右侧工具条中，除默认联系人外的其他联系人。<a href="" class="more_link" target="_blank">如何设置？</a></p>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="页面背景色">
                    <div class="bg_tabcontent">
                      <div class="bg_color_wrap">
                        <p class="tab_item_title">选色器</p>
                        <div class="bg_color_content">
                          <div class="intl-pui-react-color"><div class="photoshop-picker " style="width: 240px;"><div class="flexbox-fix" style="display: flex;"><div style="width: 130px; height: 130px; position: relative; border-width: 1px; border-style: solid; border-color: rgb(179, 179, 179) rgb(179, 179, 179) rgb(240, 240, 240); border-image: initial; overflow: hidden;"><div style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; background: rgb(0, 76, 255);"><div class="saturation-white" style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;"><div class="saturation-black" style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;"></div><div style="position: absolute; top: 26.6667%; left: 66.3102%; cursor: default;"><div style="width: 12px; height: 12px; border-radius: 6px; box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px inset; transform: translate(-6px, -6px);"></div></div></div></div></div><div style="position: relative; height: 130px; width: 10px; margin-left: 5px; border-width: 1px; border-style: solid; border-color: rgb(179, 179, 179) rgb(179, 179, 179) rgb(240, 240, 240); border-image: initial;"><div style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;"><div class="hue-vertical" style="padding: 0px 2px; position: relative; height: 100%;" data-spm-anchor-id="a2700.siteadmin.0.i36.4b05ac40bPRZ1r"><div style="position: absolute; left: 0px; top: 38.3065%;"><div><div style="transform: translate(-13px, -4px);"><div style="transform: translate(-8px, -5px);"></div></div><div style="transform: translate(20px, -14px) rotate(180deg);"><div style="transform: translate(-8px, -5px);"></div></div></div></div></div></div></div><div style="width: 80px; margin-left: 10px;"><div class="flexbox-fix" style="display: flex;"><div style="width: 65px;"><div><div style="font-size: 14px; color: rgb(0, 0, 0); text-align: center;">Initial</div><div style="border-width: 1px; border-style: solid; border-color: rgb(179, 179, 179) rgb(179, 179, 179) rgb(240, 240, 240); border-image: initial; margin-bottom: 2px; margin-top: 1px;"><div style="height: 28px; background: rgb(187, 63, 163); box-shadow: rgb(0, 0, 0) 1px 0px 0px inset, rgb(0, 0, 0) -1px 0px 0px inset, rgb(0, 0, 0) 0px 1px 0px inset;"></div><div style="height: 28px; background: rgb(63, 100, 187); box-shadow: rgb(0, 0, 0) 1px 0px 0px inset, rgb(0, 0, 0) -1px 0px 0px inset, rgb(0, 0, 0) 0px -1px 0px inset;"></div></div><div style="font-size: 14px; color: rgb(0, 0, 0); text-align: center;">Current</div></div><div><span>#</span><span class="next-input next-input-single next-input-small" style="width: 55px; margin-top: 8px;"><input type="text" value="3f64bb" height="100%" style="width: 55px; border: 1px solid #999;"></span></div></div></div></div></div></div></div>
                        </div>
                        <el-color-picker v-model="themeColor"></el-color-picker>
                      </div>
                      <div class="bg_dec_p">
                        <p>设置页面背景色后，除了背景图以外的空白背景为背景色</p>
                      </div>
                      <hr class="bg_tab_line">
                      <div>
                        <p class="tab_item_title">背景图片</p>
                      </div>
                      <div class="radio_group">
                        <label>
                          <span class="next_radio" :class="{'check':bgShowStatus ==='显示'}">
                            <span class="radio_error" for="bgShow"></span>
                            <input type="radio" name="" id='bgShow' value="显示" v-model="bgShowStatus">
                          </span>
                          <span class="next_radio_lable">显示</span>
                        </label>
                        <label>
                          <span class="next_radio" :class="{'check':bgShowStatus ==='隐藏'}">
                            <span class="radio_error" for="bgHidden"></span>
                            <input type="radio" name="" id='bgHidden' value="隐藏" v-model="bgShowStatus">
                          </span>
                          <span class="next_radio_lable">隐藏</span>
                        </label>
                      </div>
                      <div class="bg_preview_box">
                        <img class="bg_preview_img" src="static/img/tem.jpeg" alt="img">
                        <span class="bg_preview_shadow"><i class="el-icon-edit"></i></span>
                      </div>
                      <div class="bg_dec_p">
                        <p>建议尺寸为2000*3000像素以内，JPG，PNG图片格式，2M以内</p>
                      </div>
                      <hr class="bg_tab_line">
                      <div>
                        <p class="tab_item_title">图片填充方式</p>
                      </div>
                      <div class="radio_group">
                        <label>
                          <span class="next_radio" :class="{'check':bgLayStatus ==='平铺'}">
                            <span class="radio_error" for="bgLay"></span>
                            <input type="radio" name="" id='bgLay' value="平铺" v-model="bgLayStatus">
                          </span>
                          <span class="next_radio_lable">平铺</span>
                        </label>
                        <label>
                          <span class="next_radio" :class="{'check':bgLayStatus ==='不平铺'}">
                            <span class="radio_error" for="bgNotLay"></span>
                            <input type="radio" name="" id='bgNotLay' value="不平铺" v-model="bgLayStatus">
                          </span>
                          <span class="next_radio_lable">不平铺</span>
                        </label>
                      </div>
                      <div>
                        <p class="tab_item_title">对齐方式</p>
                      </div>
                      <div class="radio_group">
                        <label>
                          <span class="next_radio" :class="{'check':bgAlignStatus ==='向左对齐'}">
                            <span class="radio_error" for="bgAlign"></span>
                            <input type="radio" name="" id='bgAlign' value="向左对齐" v-model="bgAlignStatus">
                          </span>
                          <span class="next_radio_lable">向左对齐</span>
                        </label>
                        <label>
                          <span class="next_radio" :class="{'check':bgAlignStatus ==='居中'}">
                            <span class="radio_error" for="bgNotAlign"></span>
                            <input type="radio" name="" id='bgNotAlign' value="居中" v-model="bgAlignStatus">
                          </span>
                          <span class="next_radio_lable">居中</span>
                        </label>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
            <div class="manager-wrap" :class="{'panel-active': switchNav==='goods'}" @click="switchNav='goods'">
              <a class="manager-link">
                <i class="el-icon-goods next-icon"></i>
                <i>产品</i>
              </a>
              <div class="panel">
                <div class="m-detail-title">
                  <span>添加产品</span>
                  <el-tooltip effect="dark" placement="bottom">
                    <div slot="content" style="width: 230px;">Bottom Center提示文字1111111111111111111111提示文字1111111111111111111111</div>
                    <el-button size="mini"><i class="el-icon-info"></i></el-button></el-tooltip>
                  <el-select v-model="panlSelect" size="mini" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="m-detail-con">
                  <div class="m-item game_over">
                    <div class="m-item-outside">
                      <div class="m-item-shadow"></div>
                      <div class="item-icon"><i class="el-icon-s-grid"></i></div>
                      <div><span>2</span><span>/10</span></div>
                      <div>平铺</div>
                    </div>
                  </div>
                  <div class="m-item">
                    <div class="m-item-outside">
                      <div class="m-item-shadow"></div>
                      <div class="item-icon"><i class="el-icon-c-scale-to-original"></i></div>
                      <div><span>0</span><span>/1</span></div>
                      <div>橱窗产品</div>
                    </div>
                  </div>
                  <div class="m-item"></div>
                </div>
              </div>
            </div>
            <div class="manager-wrap" :class="{'panel-active': switchNav==='picWord'}" @click="switchNav='picWord'">
              <a class="manager-link">
                <i class="el-icon-picture-outline next-icon"></i>
                <i>图文</i>
              </a>
              <div class="panel">
                <div class="m-detail-title"></div>
                <div class="m-detail-con">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div class="manager-wrap" :class="{'panel-active': switchNav==='video'}" @click="switchNav='video'">
              <a class="manager-link">
                <i class="el-icon-video-play next-icon"></i>
                <i>视频</i>
              </a>
              <div class="panel">
                <div class="m-detail-title"></div>
                <div class="m-detail-con">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div class="manager-wrap" :class="{'panel-active': switchNav==='sell'}" @click="switchNav='sell'">
              <a class="manager-link">
                <i class="el-icon-data-analysis next-icon"></i>
                <i>营销</i>
              </a>
              <div class="panel">
                <div class="m-detail-title"></div>
                <div class="m-detail-con">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div class="manager-wrap" :class="{'panel-active': switchNav==='office'}" @click="switchNav='office'">
              <a class="manager-link">
                <i class="el-icon-office-building next-icon"></i>
                <i>公司</i>
              </a>
              <div class="panel">
                <div class="m-detail-title"></div>
                <div class="m-detail-con">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </section>
        </aside>
        <section class="manager_right">
          <div class="previewer_wrap">
            <div class="previewer_bg"></div>
            <div class="previewer_limit">
              <div class="root_page">
                <div class="layout_page" data-id="hc"></div>
                <div class="layout_page" data-id="hd"></div>
                <div class="layout_page" data-id="page-main">
                  <div class="layout_m">
                    <div class="pre_item_wrap">
                      <div class="pre_item_mask">
                        <div class="handle_wrap" data-attr="上下移动">
                          <div class="handle_com">
                            <div><i class="el-icon-caret-top"></i></div>
                            <div><i class="el-icon-caret-bottom"></i></div>
                            <div><i class="el-icon-delete-solid"></i></div>
                          </div>
                        </div>
                        <div class="pre_item_overlay">
                          <div class="previewer_title">自定义内容区</div>
                        </div>
                      </div>
                      <div class="pre_module">
                        <div class="pre_module_con"><div style="display: flex; margin-left: 40px; margin-right: 35px; margin-bottom: 50px; padding-top: 8px;"> <div style="width:30px; height:30px; display: flex; justify-content: center; align-items: center; flex-shrink: 0; margin-top: -8px;"> <img style="width: 100%;" src="static/img/mk_search_service.png"> </div> <div class="con-box-item" style="margin-left: 4px; display: flex; flex-direction: column; justify-content: center;"> <h4 class="con-box-tit" style="text-align: left; color:rgba(255,70,6,1); font-size: 14px;">厂家服务</h4> <p style="font-size: 12px; color: #878787; line-height: 20px; margin-top: 8px;">本产品全国联保，享受三包服务，质保期为：十五天质保</p> </div> </div> <div style="display: flex; margin-left: 40px; margin-right: 35px; margin-bottom: 50px; padding-top: 8px;"> <div style="width:30px; height:30px; display: flex; justify-content: center; align-items: center; flex-shrink: 0; margin-top: -8px;"> <img style="width: 100%;" src="static/img/mk_search_service.png"> </div> <div class="con-box-item" style="margin-left: 4px; display: flex; flex-direction: column; justify-content: center;"> <h4 class="con-box-tit" style="text-align: left; color:rgba(255,70,6,1); font-size: 14px;">正品行货</h4> <p style="font-size: 12px; color: #878787; line-height: 20px; margin-top: 8px;">本商城向您保证所售商品均为正品行货，商城自营商品开具机打发票或电子发票。</p> </div> </div> <div style="display: flex; margin-left: 40px; margin-right: 35px; margin-bottom: 50px; padding-top: 8px;"> <div style="width:30px; height:30px; display: flex; justify-content: center; align-items: center; flex-shrink: 0; margin-top: -8px;"> <img style="width: 100%;" src="static/img/mk_search_protect.png"> </div> <div class="con-box-item" style="margin-left: 4px; display: flex; flex-direction: column; justify-content: center;"> <h4 class="con-box-tit" style="text-align: left; color:rgba(255,70,6,1); font-size: 14px;">全国联保</h4> <p style="font-size: 12px; color: #878787; line-height: 20px; margin-top: 8px;">凭质保证书及京东商城发票，可享受全国联保服务（奢侈品、钟表除外；奢侈品、钟表由京东联系保修，享受法定三包售后服务），与您亲临商场选购的商品享受相同的质量保证。本商城还为您提供具有竞争力的商品价格和运费政策，请您放心购买！<br/><span style="margin-top: 20px;">注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！</span></p> </div> </div> <div style="display: flex; margin-left: 40px; margin-right: 35px; margin-bottom: 50px; padding-top: 8px;"> <div style="width:30px; height:30px; display: flex; justify-content: center; align-items: center; flex-shrink: 0; margin-top: -8px;"> <img style="width: 100%;" src="static/img/mk_search_service.png"> </div> <div class="con-box-item" style="margin-left: 4px; display: flex; flex-direction: column; justify-content: center;"> <h4 class="con-box-tit" style="text-align: left; color:rgba(255,70,6,1); font-size: 14px;">无忧退货</h4> <p style="font-size: 12px; color: #878787; line-height: 20px; margin-top: 8px;">客户购买商城自营商品7日内（含7日，自客户收到商品之日起计算），在保证商品完好的前提下，可无理由退货。（部分商品除外，详情请见各商品细则）权利声明</p> </div> </div> <div style="display: flex; margin-left: 40px; margin-right: 35px; margin-bottom: 50px; padding-top: 8px;"> <div class="con-box-item" style="margin-left: 4px; display: flex; flex-direction: column; justify-content: center;"> <h4 class="con-box-tit" style="text-align: left; color:rgba(255,70,6,1); font-size: 14px;">权利声明</h4> <p style="font-size: 12px; color: #878787; line-height: 20px; margin-top: 8px;">本网站的所有商品信息、客户评价、商品咨询、网友讨论等内容，是本站重要的经营资源，未经许可，禁止非法转载使用。<br/>注：本站商品信息均来自于合作方，其真实性、准确性和合法性由信息拥有者（合作方）负责。本站不提供任何保证，并不承担任何法律责任.</p> </div> </div> <div style="display: flex; margin-left: 40px; margin-right: 35px; margin-bottom: 50px; padding-top: 8px;"> <div class="con-box-item" style="margin-left: 4px; display: flex; flex-direction: column; justify-content: center;"> <h4 class="con-box-tit" style="text-align: left; color:rgba(255,70,6,1); font-size: 14px;">价格说明</h4> <p style="font-size: 12px; color: #878787; line-height: 20px; margin-top: 8px;">本站价：本站价为商品的销售价，是您最终决定是否购买商品的依据。<br/><span style="margin-top: 20px;">划线价：商品展示的划横线价格为参考价，并非原价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在猴尾巴平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</span><br/><span style="margin-top: 20px;">折扣：如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。</span><br/><span style="margin-top: 20px;">异常问题：商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。</span></p> </div> </div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="layout_page" data-id="ft"></div>
                <div class="layout_page" data-id="fc"></div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <footer class="footer"></footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'decorate',
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      switchNav: '',
      panlSelect: '',
      themeColor: '#dddddd',
      bgShowStatus: '隐藏', // 页面背景图片显示状态
      bgLayStatus: '平铺', // 页面背景平铺状态
      bgAlignStatus: '平铺' // 页面背景对齐状态
    }
  },
  mounted () {
    document.addEventListener('click', this.handlePackUp)
  },
  destroyed () {
    document.removeEventListener('click', this.handlePackUp)
  },
  methods: {
    handleClick (val) {
      console.log(val)
    },
    // 收起菜单
    handlePackUp (e) {
      if (this.switchNav) {
        let navDom = this.$refs.nav
        if (!navDom.contains(e.target)) {
          this.switchNav = ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $aside-theme-color: #ef7026;
  .container{
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: 100%;
    position: fixed;
    header{
      width: 100%;
      height: 100px;
      background-color: #ddd;
    }
    .content{
      overflow: hidden;
      display: flex;
      flex: 1;
      position: relative;
      .manager-sidebar{
        width: 118px;
        height: 100%;
        min-height: 200px;
        border-right: 1px solid #dcdee3;
        box-shadow: 2px 2px 2px rgba(0,0,0,.05);
        background: #f7f8fa;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1 0 auto;
        overflow-x: hidden;
        overflow-y:auto;
        .switchEditor{
          width: 80%;
          background-color: #333;
          margin: 12px auto;
          padding: 1px 2px;
          border-radius: 15px;
          height: 26px;
          display: flex;
          span{
            color: #fff;
            line-height: 24px;
            margin: 1px 0;
            display: block;
            width: 49%;
            text-align: center;
            cursor: pointer;
            &.active{
              border-radius: 15px;
              background-color: $aside-theme-color;
              cursor: text;
            }
          }
        }
        .manager-wrap{
          width: 100%;
          &.panel-active {
            .panel{
              opacity: 1;
              transform: translate(0);
            }
          }
          .manager-link{
            background-color: #fff;
            display: block;
            padding: 14px 0;
            text-align: center;
            cursor: pointer;
            font-size: 14px;
            max-height: 120px;
            position: relative;
            i{
              display: block;
              &.next-icon{
                margin-bottom: 10px;
                color: #777;
                font-size: 26px;
              }
            }
            &:after, &:before{
              display: block;
              position: absolute;
              content: " ";
              width: 200%;
              height: 1px;
              right: 0;
            }
            &:before{
              top: -1px;
            }
            &:after{
              bottom: 0;
              background-color: #dcdee3;
            }
            &:hover{
              border-color: $aside-theme-color;
              background-color: #fff;
              color: $aside-theme-color;
              i.next-icon{
                color: $aside-theme-color;
              }
            }
            &:hover:before, &:hover:after{
              background-color: $aside-theme-color;
            }
          }
          .panel{
            position: absolute;
            width: 315px;
            min-height: 100px;
            height: 100%;
            overflow: auto;
            border-left: 1px solid $aside-theme-color;
            padding: 0 32px;
            background: #fff;
            border-radius: 0 4px 4px 0;
            color: #8d8d8d;
            left: 117px;
            top: 0;
            transform: translate(-500px);
            transition: all .3s;
            opacity: 0;
            z-index: 5;
            box-shadow: 1px 0 3px 0 #e4e7ed;
            display: flex;
            flex-direction: column;
            .page_bg_tabs {
              width: 100%;
              overflow: visible;
              position: relative;
              .bg_tablist{
                border-bottom: 1px solid #dcdee3;
              }
            }
            .m-detail-title {
              font-size: 18px;
              color: #333;
              margin: 16px 0;
              display: flex;
              justify-content: space-around;
              .el-button{
                font-size: 20px;
                padding: 0;
                border: none;
              }
              .el-select {
                width: 120px;
              }
            }
            .m-detail-con {
              display: flex;
              flex-wrap: wrap;
              overflow-y: auto;
              .m-item{
                width: 120px;
                height: 120px;
                overflow: hidden;
                background: #f7f8fa;
                position: relative;
                margin-bottom: 10px;
                font-size: 12px;
                line-height: 16px;
                &:nth-child(2n -1) {
                  margin-right: 10px;
                }
                &.game_over{
                  background-color: #f7f8fa;
                  color: #ccc;
                }
                .m-item-outside {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                  align-items: center;
                  position: relative;
                  width: 100%;
                  height: 100%;
                  padding: 20px 8px;
                  .item-icon{
                    font-size: 22px;
                  }
                  .m-item-shadow {
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 0;
                    cursor: move;
                    border: 1px solid $aside-theme-color;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(239,112,38,.1);
                  }
                }
              }
            }
          }
        }
      }
      .manager_right {
        position: relative;
        min-width: 960px;
        height: auto;
        width: 100%;
        .previewer_wrap{
          width: 100%;
          height: 100%;
          min-height: 100%;
          margin: 0 auto;
          overflow: auto;
          position: relative;
          .previewer_bg{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            min-height: 100%;
            z-index: 1;
            background-color: rgb(253, 253, 253);
            background-image: url(//sc01.alicdn.com/kf/HTB1z.roUOLaK1RjSZFxq6ymPFXaW.jpg);
            background-repeat: no-repeat;
            background-position: center top;
            zoom: 0.783034; /* ==> 960 */
          }
          .previewer_limit{
            margin: 0 auto;
            position: relative;
            width: 100%;
          }
        }
      }
    }
  }
  .bg_tabcontent{
    min-height: 20px;
    padding-bottom: 16px;
    height: 100%;
    overflow: visible;
    p.tab_item_title{
      margin: 10px 0;
      color: #333;
    }
    .bg_tab_line {
      border-color: #f5f7fa75;
      margin: 10px 0;
    }
    .bg_color_wrap{
      overflow: visible;
      margin-bottom: 8px;
      .bg_color_content {
        width: 240px;
        min-height: 100px;
      }
    }
    .bg_dec_p{
      color: #999;
      margin-top: 20px;
      font-size: 14px;
    }
    .bg_tool_contact{
      margin-top: 26px;
      div {
        margin-bottom: 10px;
        color: #333;
      }
      button{
        height: 28px;
        padding: 0 16px;
        font-size: 14px;
        line-height: 26px;
        border: 1px solid #ddd;
        background-color: #fff;
        cursor: pointer;
      }
      p{
        color: #999;
        margin-top: 20px;
      }
      .more_link {
        color: $aside-theme-color;
      }
    }
    .radio_group {
      width: 100%;
      display: flex;
      label:nth-child(odd) {
        width: 60%;
      }
      label{
        margin-bottom: 6px;
        display: flex;
        align-items: center;
        .next_radio{
          overflow: hidden;
          position: relative;
          width: 16px;
          height: 16px;
          line-height: 16px;
          vertical-align: middle;
          display: block;
          &.check .radio_error{
            border-color:$aside-theme-color;
            background: #fff;
            &:after{
              width: 8px;
              height: 8px;
              font-weight: 700;
              background: $aside-theme-color;
              transform: scale(1);
            }
          }
          span.radio_error{
            display: block;
            width:100%;
            height: 100%;
            background: #fff;
            border-radius: 50%;
            border: 1px solid #c4c6cf;
            transition: all .3s ease 0s;
            &:after{
              content: '';
              transform: scale(0);
              position: absolute;
              border-radius: 50%;
              top: 50%;
              margin-top: -4px;
              left: 50%;
              margin-left: -4px;
              background: #fff;
              transition: all .3s ease 0s;
            }
          }
          input[type=radio]{
            position: absolute;
            opacity: 0;
            top: 0;
            left: 0;
            width: 16px;
            height: 16px;
            margin: 0;
          }
        }
        .next_radio_lable{
          color: #333;
          margin: 0 5px;
          font-size: 14px;
        }
      }
    }
    .bg_preview_box{
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 65px;
      background-color: #f2f3f7;
      cursor: pointer;
      &:hover .bg_preview_shadow{
        opacity: 1;
      }
      .bg_preview_img{
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        display: block;
      }
      .bg_preview_shadow{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 1s;
        opacity: 0;
        background-color: rgba(0,0,0,.7);
        color: #fff;
        i{
          font-size: 16px;
        }
      }
    }
  }
  .root_page{
    .layout_page{
      width: 100%;
      .layout_m{
        width: 960px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        margin-bottom: 0px;
        .pre_item_wrap{
          position: relative;
          width: 100%;
          margin-top: 0;
          margin-bottom: 20px;
          min-height: 50px;
          .pre_item_mask{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            cursor: pointer;
            z-index: 2;
            border: 1px solid transparent;
            &:hover{
              background-color: rgba(239,112,38,.1);
              border-color: $aside-theme-color;
              .handle_wrap {
                display: block;
              }
            }
            .handle_wrap {
              display: none;
              width: 43px;
              position: absolute;
              right: -44px;
              top: -2px;
              .handle_com{
                width: 33px;
                margin-left: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
                font-size: 24px;
                min-height: 100px;
                div{
                  padding: 7px 5px;
                  background-color: #fff;
                  color: #999;
                  cursor: pointer;
                  text-align: center;
                }
                &>div:last-child{
                  border-top: 1px solid #e6e6e6;
                }
              }
            }
            .pre_item_overlay{
              width: 100%;
              height: 100%;
              .previewer_title{
                left: 8px;
                top: 8px;
                background-color: rgba(0,0,0,.5);
                padding: 2px 5px;
                color: #fff;
                display: block;
                position: absolute;
              }
            }
          }
          .pre_module{
            height: auto;
            background-color: rgba(0,0,0,.5);
            z-index: 1;
            position: relative;
            .pre_module_con {
              zoom: 0.783034;
            }
          }
        }
      }
    }
  }
</style>
<style lang="scss">
  $aside-theme-color: #ef7026;
  .el-tabs__active-bar {
    background-color: $aside-theme-color;
    height: 1px;
  }
  .el-tabs__item.is-active {
    color: $aside-theme-color;
  }
  .el-tabs__item:hover {
    color: $aside-theme-color;
    cursor: pointer;
  }
  .el-tabs__nav-wrap::after {
    height: 1px;
  }
</style>
<style>
  .el-color-picker__panel {
    left: 118px !important;
    /*display: block !important;
    top: 364px !important;
    box-shadow: none !important;
    border: none !important;*/
  }
  .saturation-white {
    background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));
    background: linear-gradient(to right, #fff, rgba(255,255,255,0));
  }
  .saturation-black {
    background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));
    background: linear-gradient(to top, #000, rgba(0,0,0,0));
  }
  .hue-horizontal {
    background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
    background: -webkit-linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
  }
  .hue-vertical {background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
    background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
  }
</style>
