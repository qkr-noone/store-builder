<template>
  <div id="decorate" name="data-reactroot">
    <div class="container">
      <storeHeader></storeHeader>
      <section class="content">
        <aside>
          <section class="manager-sidebar" ref="nav">
            <!-- PC/无线 -->
            <div class="switchEditor">
              <span class="PC active">PC</span>
              <el-tooltip effect="dark" placement="bottom">
                <div slot="content">尚未支持无线端</div>
                <span class="mobile">无线</span>
              </el-tooltip>
            </div>
            <!-- 页面背景 -->
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
                          <div class="intl-pui-react-color">
                            <div class="photoshop-picker " style="width: 240px;">
                              <div class="flexbox-fix" style="display: flex;">
                                <div style="width: 130px; height: 130px; position: relative; border-width: 1px; border-style: solid; border-color: rgb(179, 179, 179) rgb(179, 179, 179) rgb(240, 240, 240); border-image: initial; overflow: hidden;">
                                  <div style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; background: rgb(0, 76, 255);">
                                    <div class="saturation-white" style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;">
                                      <div class="saturation-black" style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;"></div>
                                      <div style="position: absolute; top: 26.6667%; left: 66.3102%; cursor: default;">
                                        <div style="width: 12px; height: 12px; border-radius: 6px; box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px inset; transform: translate(-6px, -6px);"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div style="position: relative; height: 130px; width: 10px; margin-left: 5px; border-width: 1px; border-style: solid; border-color: rgb(179, 179, 179) rgb(179, 179, 179) rgb(240, 240, 240); border-image: initial;">
                                  <div style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;">
                                    <div class="hue-vertical" style="padding: 0px 2px; position: relative; height: 100%;" data-spm-anchor-id="a2700.siteadmin.0.i36.4b05ac40bPRZ1r">
                                      <div style="position: absolute; left: 0px; top: 38.3065%;">
                                        <div>
                                          <div style="transform: translate(-13px, -4px);">
                                            <div style="transform: translate(-8px, -5px);"></div>
                                          </div>
                                          <div style="transform: translate(20px, -14px) rotate(180deg);">
                                            <div style="transform: translate(-8px, -5px);"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div style="width: 80px; margin-left: 10px;">
                                  <div class="flexbox-fix" style="display: flex;">
                                    <div style="width: 65px;">
                                      <div>
                                        <div style="font-size: 14px; color: rgb(0, 0, 0); text-align: center;">Initial</div>
                                        <div style="border-width: 1px; border-style: solid; border-color: rgb(179, 179, 179) rgb(179, 179, 179) rgb(240, 240, 240); border-image: initial; margin-bottom: 2px; margin-top: 1px;">
                                          <div style="height: 28px; background: rgb(187, 63, 163); box-shadow: rgb(0, 0, 0) 1px 0px 0px inset, rgb(0, 0, 0) -1px 0px 0px inset, rgb(0, 0, 0) 0px 1px 0px inset;"></div>
                                          <div style="height: 28px; background: rgb(63, 100, 187); box-shadow: rgb(0, 0, 0) 1px 0px 0px inset, rgb(0, 0, 0) -1px 0px 0px inset, rgb(0, 0, 0) 0px -1px 0px inset;"></div>
                                        </div>
                                        <div style="font-size: 14px; color: rgb(0, 0, 0); text-align: center;">Current</div>
                                      </div>
                                      <div><span>#</span><span class="next-input next-input-single next-input-small" style="width: 55px; margin-top: 8px;"><input type="text" value="3f64bb" height="100%" style="width: 55px; border: 1px solid #999;"></span></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                          <div class="intl-pui-react-color">
                            <div class="photoshop-picker " style="width: 240px;">
                              <div class="flexbox-fix" style="display: flex;">
                                <div style="width: 130px; height: 130px; position: relative; border-width: 1px; border-style: solid; border-color: rgb(179, 179, 179) rgb(179, 179, 179) rgb(240, 240, 240); border-image: initial; overflow: hidden;">
                                  <div style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; background: rgb(0, 76, 255);">
                                    <div class="saturation-white" style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;">
                                      <div class="saturation-black" style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;"></div>
                                      <div style="position: absolute; top: 26.6667%; left: 66.3102%; cursor: default;">
                                        <div style="width: 12px; height: 12px; border-radius: 6px; box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px inset; transform: translate(-6px, -6px);"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div style="position: relative; height: 130px; width: 10px; margin-left: 5px; border-width: 1px; border-style: solid; border-color: rgb(179, 179, 179) rgb(179, 179, 179) rgb(240, 240, 240); border-image: initial;">
                                  <div style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;">
                                    <div class="hue-vertical" style="padding: 0px 2px; position: relative; height: 100%;" data-spm-anchor-id="a2700.siteadmin.0.i36.4b05ac40bPRZ1r">
                                      <div style="position: absolute; left: 0px; top: 38.3065%;">
                                        <div>
                                          <div style="transform: translate(-13px, -4px);">
                                            <div style="transform: translate(-8px, -5px);"></div>
                                          </div>
                                          <div style="transform: translate(20px, -14px) rotate(180deg);">
                                            <div style="transform: translate(-8px, -5px);"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div style="width: 80px; margin-left: 10px;">
                                  <div class="flexbox-fix" style="display: flex;">
                                    <div style="width: 65px;">
                                      <div>
                                        <div style="font-size: 14px; color: rgb(0, 0, 0); text-align: center;">Initial</div>
                                        <div style="border-width: 1px; border-style: solid; border-color: rgb(179, 179, 179) rgb(179, 179, 179) rgb(240, 240, 240); border-image: initial; margin-bottom: 2px; margin-top: 1px;">
                                          <div style="height: 28px; background: rgb(187, 63, 163); box-shadow: rgb(0, 0, 0) 1px 0px 0px inset, rgb(0, 0, 0) -1px 0px 0px inset, rgb(0, 0, 0) 0px 1px 0px inset;"></div>
                                          <div style="height: 28px; background: rgb(63, 100, 187); box-shadow: rgb(0, 0, 0) 1px 0px 0px inset, rgb(0, 0, 0) -1px 0px 0px inset, rgb(0, 0, 0) 0px -1px 0px inset;"></div>
                                        </div>
                                        <div style="font-size: 14px; color: rgb(0, 0, 0); text-align: center;">Current</div>
                                      </div>
                                      <div><span>#</span><span class="next-input next-input-single next-input-small" style="width: 55px; margin-top: 8px;"><input type="text" value="3f64bb" height="100%" style="width: 55px; border: 1px solid #999;"></span></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
            <!-- 产品 -->
            <div class="manager-wrap" :class="{'panel-active': switchNav==='goods'}" @click="switchNav='goods'">
              <a class="manager-link">
                <i class="next-icon" :class="goods.icon"></i>
                <i>{{goods.moduleName}}</i>
              </a>
              <div class="panel">
                <div class="m-detail-title">
                  <span>添加产品</span>
                  <el-tooltip effect="dark" placement="bottom">
                    <div slot="content" style="max-width: 230px;">包含橱窗产品、带类目产品、重点推荐、智能单品推荐等多种产品推荐样式，用于公司核心产品推荐、自定义营销分类的产品推荐，如“新品推荐”、“库存促销”、“圣诞专供”等。</div>
                    <el-button size="mini"><i class="el-icon-info"></i></el-button>
                  </el-tooltip>
                  <el-select v-model="panlSelect" size="mini" placeholder="请选择" @change="layoutSelect(goods.id, panlSelect)">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="m-detail-con">
                  <div class="m-item" :class="{'game_over': list.usedNum===list.totalNum}" v-for="list in handleLayout(goods.templateList)" :key="list.id" :data-moduleId="list.id">
                    <div class="m-item-outside">
                      <div class="m-item-shadow" v-show="list.usedNum<list.totalNum" draggable="true" @dragstart="dragstart($event, list)" @dragend="dragend()"></div>
                      <div class="item-icon"><i :class="list.icon" class="iconfont"></i></div>
                      <div><span>{{list.usedNum}}</span><span>/{{list.totalNum}}</span></div>
                      <div>{{list.templateName}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 图文 -->
            <div class="manager-wrap" :class="{'panel-active': switchNav==='picWord'}" @click="switchNav='picWord'">
              <a class="manager-link">
                <i class="next-icon" :class="picWord.icon"></i>
                <i>{{picWord.moduleName}}</i>
              </a>
              <div class="panel">
                <div class="m-detail-title">
                  <span>添加图文</span>
                  <el-tooltip effect="dark" placement="bottom">
                    <div slot="content" style="max-width: 230px;">包含图文相关模块</div>
                    <el-button size="mini"><i class="el-icon-info"></i></el-button>
                  </el-tooltip>
                  <el-select v-model="panlSelect" size="mini" placeholder="请选择" @change="layoutSelect(picWord.id, panlSelect)">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="m-detail-con">
                  <div class="m-item" :class="{'game_over': list.usedNum===list.totalNum}" v-for="list in handleLayout(picWord.templateList)" :key="list.id" :data-moduleId="list.id">
                    <div class="m-item-outside">
                      <div class="m-item-shadow" v-show="list.usedNum<list.totalNum" draggable="true" @dragstart="dragstart($event, list)" @dragend="dragend()"></div>
                      <div class="item-icon"><i :class="list.icon" class="iconfont"></i></div>
                      <div><span>{{list.usedNum}}</span><span>/{{list.totalNum}}</span></div>
                      <div>{{list.templateName}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 视频 -->
            <div class="manager-wrap" :class="{'panel-active': switchNav==='video'}" @click="switchNav='video'">
              <a class="manager-link">
                <i class="next-icon" :class="video.icon"></i>
                <i>{{video.moduleName}}</i>
              </a>
              <div class="panel">
                <div class="m-detail-title">
                  <span>添加视频</span>
                  <el-tooltip effect="dark" placement="bottom">
                    <div slot="content" style="max-width: 230px;">包含数字化相关模块</div>
                    <el-button size="mini"><i class="el-icon-info"></i></el-button>
                  </el-tooltip>
                  <el-select v-model="panlSelect" size="mini" placeholder="请选择" @change="layoutSelect(video.id, panlSelect)">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="m-detail-con">
                  <div class="m-item" :class="{'game_over': list.usedNum===list.totalNum}" v-for="list in handleLayout(video.templateList)" :key="list.id" :data-moduleId="list.id">
                    <div class="m-item-outside">
                      <div class="m-item-shadow" v-show="list.usedNum<list.totalNum" draggable="true" @dragstart="dragstart($event, list)" @dragend="dragend()"></div>
                      <div class="item-icon"><i :class="list.icon" class="iconfont"></i></div>
                      <div><span>{{list.usedNum}}</span><span>/{{list.totalNum}}</span></div>
                      <div>{{list.templateName}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 营销 -->
            <div class="manager-wrap" :class="{'panel-active': switchNav==='sell'}" @click="switchNav='sell'">
              <a class="manager-link">
                <i class="next-icon" :class="sell.icon"></i>
                <i>{{sell.moduleName}}</i>
              </a>
              <div class="panel">
                <div class="m-detail-title">
                  <span>添加营销</span>
                  <el-tooltip effect="dark" placement="bottom">
                    <div slot="content" style="max-width: 230px;">包含轮播banner、自定义模块、多语言快链、客服模块等多种营销模块，用于企业形象宣传、产品及活动推广等一系列营销宣传或个性化展示。</div>
                    <el-button size="mini"><i class="el-icon-info"></i></el-button>
                  </el-tooltip>
                  <el-select v-model="panlSelect" size="mini" placeholder="请选择" @change="layoutSelect(sell.id, panlSelect)">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="m-detail-con">
                  <div class="m-item" :class="{'game_over': list.usedNum===list.totalNum}" v-for="list in handleLayout(sell.templateList)" :key="list.id" :data-moduleId="list.id">
                    <div class="m-item-outside">
                      <div class="m-item-shadow" v-show="list.usedNum<list.totalNum" draggable="true" @dragstart="dragstart($event, list)" @dragend="dragend()"></div>
                      <div class="item-icon"><i :class="list.icon" class="iconfont"></i></div>
                      <div><span>{{list.usedNum}}</span><span>/{{list.totalNum}}</span></div>
                      <div>{{list.templateName}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 公司 -->
            <div class="manager-wrap" :class="{'panel-active': switchNav==='office'}" @click="switchNav='office'">
              <a class="manager-link">
                <i class="next-icon" :class="office.icon"></i>
                <i>{{office.moduleName}}</i>
              </a>
              <div class="panel">
                <div class="m-detail-title">
                  <span>添加公司</span>
                  <el-tooltip effect="dark" placement="bottom">
                    <div slot="content" style="max-width: 230px;">包含公司简介、能力描述、公司名片等模块，可以通过图片、文字简介、视频等多种方式向买家直观地展现您公司在制造加工、产品研发、贸易服务等一系列的企业实力。</div>
                    <el-button size="mini"><i class="el-icon-info"></i></el-button>
                  </el-tooltip>
                  <el-select v-model="panlSelect" size="mini" placeholder="请选择" @change="layoutSelect(office.id, panlSelect)">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="m-detail-con">
                  <div class="m-item" :class="{'game_over': list.usedNum===list.totalNum}" v-for="list in handleLayout(office.templateList)" :key="list.id" :data-moduleId="list.id">
                    <div class="m-item-outside">
                      <div class="m-item-shadow" v-show="list.usedNum<list.totalNum" draggable="true" @dragstart="dragstart($event, list)" @dragend="dragend()"></div>
                      <div class="item-icon"><i :class="list.icon" class="iconfont"></i></div>
                      <div><span>{{list.usedNum}}</span><span>/{{list.totalNum}}</span></div>
                      <div>{{list.templateName}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </aside>
        <section class="manager_right">
          <div class="previewer_wrap">
            <div :style="'background-color:'+ themeColor"></div>
            <div class="previewer_limit">
              <div class="root_page" id="root">
                <div class="layout_page" data-id="hc"></div>
                <div class="layout_page" data-id="hd" id="store_header">
                  <div class="store_sign_nav_bg" data-title="店铺招牌导航栏背景"></div>
                  <div class="layout_m" data-title="店铺招牌">
                    <div class="store_signature">
                      <div class="pre_module store_sign_nav_box">
                        <span data-store_sign_top="店铺平台其他信息"></span>
                        <div class="store_sign_con">
                          <div class="store_sign_bg"></div>
                          <h3 class="store_sign_info" @click="pagePreview()">店铺首页</h3>
                        </div>
                      </div>
                      <div class="pre_module store_sign_nav_box shop_nav m-nav-content" ref="storeMenuname">
                        <ul class="menu-box" slot="reference">
                          <li class="menu-item menu-item-li" v-for="list in menuList" :key="list.menuname" @mouseenter="enterNav($event, list.menuname)" @mouseleave="leaveNav()">
                            <a class="menu-a" href="javascript:;"><span>{{list.menuname}}</span><i class="el-icon-arrow-down menu-more" v-if="list.sonMenunameList.length"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="layout_page" data-id="page-main">
                  <div class="content_bg" data-title="内容主体背景"></div>
                  <div class="layout_m" v-show="layoutType.pass==='1'">
                    <div class="pre_item_wrap drag_wrap">
                      <div class="view_100">
                        <div class="Up-Center"  data-module-type="3"  @dragover.prevent="dragover($event, 100)" @dragleave="dragleave()" @drop="drop($event)" :class="[overView===100 ? 'drop_view' : '']">
                          <i class="el-icon-plus"></i>
                          <a>在此添加</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="layout_m" v-show="layoutType.narrow==='1' || layoutType.wide==='1'">
                    <div class="pre_item_wrap drag_wrap" >
                      <div class="view_20">
                        <div class="Up-Center" data-module-type="1" v-show="layoutType.narrow==='1'" @dragover.prevent="dragover($event,20)" @dragleave="dragleave()" @drop="drop($event)" :class="[overView===20 ? 'drop_view' : '']">
                          <i class="el-icon-plus"></i>
                          <a>在此添加</a>
                        </div>
                      </div>
                      <div class="view_80">
                        <div class="Up-Center" data-module-type="2" v-show="layoutType.wide==='1'"  @dragover.prevent="dragover($event,80)" @dragleave="dragleave()" @drop="drop($event)" :class="[overView===80 ? 'drop_view' : '']">
                          <i class="el-icon-plus"></i>
                          <a>在此添加</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="layout_m" v-for="(list, index) in tree" :key="index">
                    <div class="pre_item_wrap">
                      <!-- 组件最外操作层 -->
                      <div class="pre_item_mask" v-if="list.passModuleDataList.length">
                        <div class="handle_wrap" data-attr="上下移动">
                          <div class="handle_com">
                            <div>
                              <i class="el-icon-caret-top" @click="index > 0 && componentUp(list, index)" :class="{'notToday':index<=0}"></i></div>
                            <div>
                              <i class="el-icon-caret-bottom" @click="index < tree.length - 1 && componentDowm(list, index)" :class="{'notToday':index >= tree.length - 1}"></i>
                            </div>
                            <div><i class="el-icon-delete-solid" @click="componentDelete(list, index)"></i></div>
                          </div>
                        </div>
                        <div class="pre_item_overlay" @click="isEditPanel=list.passModuleDataList[0].id">
                          <div class="previewer_title">{{list.passModuleDataList[0].templateName}}</div>
                        </div>
                      </div>
                      <!-- 组件内容...窄栏 -->
                      <div class="pre_module" style="z-index: 2;" v-if="!list.passModuleDataList.length">
                        <!-- 窄栏数据遍历 -->
                        <div class="pre_module_con" v-for="item in list.narrowModuleDataList" :key="item.id" :data-template="item.templateName">
                          <!-- 窄栏项操作层 -->
                          <div class="pre_item_mask">
                            <div class="handle_wrap" data-attr="上下移动">
                              <div class="handle_com">
                                <div><i class="el-icon-news"></i></div>
                                <div><i class="el-icon-delete-solid" @click="componentDelete(item)"></i></div>
                              </div>
                            </div>
                            <div class="pre_item_overlay" @click="isEditPanel=item.id">
                              <div class="previewer_title">{{item.templateName}}</div>
                            </div>
                          </div>
                          <!-- 窄栏项模板>>组件 -->
                          <component :is="item.template" :list="item.dataList"></component>
                        </div>
                        <!-- 窄栏拖放框 -->
                        <div class="width_20" v-show="layoutType.narrow==='1'">
                          <div class="Up-Center" data-module-type="1" @dragover.prevent="dragover($event,20)" @dragleave="dragleave()" @drop="drop($event, list.componentId)" :class="[overView===20 ? 'drop_view' : '']">
                            <i class="el-icon-plus"></i>
                            <a>在此添加</a>
                          </div>
                        </div>
                        <!-- <div class="pre_module_con not_html_data" v-if="!list.dataList.length">
                          <div class="not_html_placeholder">
                            <i class="el-icon-error"></i>
                            <div>还未添加数据, 请点击编辑数据</div>
                          </div>
                        </div> -->
                      </div>
                      <!-- 组件内容...宽栏 -->
                      <div class="pre_module" v-if="!list.passModuleDataList.length">
                        <!-- 宽栏数据遍历 -->
                        <div class="pre_module_con"  v-for="item in list.widthModuleDataList" :key="item.id" :data-template="item.templateName">
                          <!-- 宽栏项操作层 -->
                          <div class="pre_item_mask">
                            <div class="handle_wrap" data-attr="上下移动">
                              <div class="handle_com">
                                <div><i class="el-icon-news"></i></div>
                                <div><i class="el-icon-delete-solid" @click="componentDelete(item)"></i></div>
                              </div>
                            </div>
                            <div class="pre_item_overlay" @click="isEditPanel=item.id">
                              <div class="previewer_title">{{item.templateName}}</div>
                            </div>
                          </div>
                          <!-- 宽栏项模板>>组件 -->
                          <component :is="item.template" :list="item.dataList"></component>
                        </div>
                        <!-- 宽栏拖放框 -->
                        <div class="width_80" v-show="layoutType.wide==='1'">
                          <div class="Up-Center" data-module-type="2"  @dragover.prevent="dragover($event,80)" @dragleave="dragleave()" @drop="drop($event, list.componentId)" :class="[overView===80 ? 'drop_view' : '']">
                            <i class="el-icon-plus"></i>
                            <a>在此添加</a>
                          </div>
                        </div>
                      </div>
                      <!-- 组件内容...通栏 -->
                      <div class="pre_module" style="width: 100%;" v-if="list.passModuleDataList.length">
                        <!-- 通栏数据遍历 -->
                        <div class="pre_module_con" v-for="item in list.passModuleDataList" :key="item.id" :data-template="item.templateName">
                          <!-- 通栏项模板=>>组件 -->
                          <component :is="item.template" :list="item.dataList"></component>
                        </div>
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
      <section class="handle_component_edit" v-show="isEditPanel">
        <section class="edit_panel" :class="{'transform': isEditPanel }">
          <div class="editor_panel_container">
            <div class="editor_panel_title">
              <span class="editor_title">产品推荐name</span>
              <span class="editor_second_title">平铺排列方式</span>
            </div>
            <div class="editor_panel_con">
              <div>
                <!-- 产品推荐 -->
                <div class="rec_goods_box">
                  <div>产品推荐</div>
                  <div class="rec_goods_select_cate">
                    <label class="goods_label">
                      <span class="sub_input_box" :class="{checked: picked==='auto'}">
                        <span class="radio_inner"></span>
                        <input type="radio" name="auto" value="auto" v-model="picked">
                      </span>
                      <span class="goods_label_text">自动选择</span>
                    </label>
                    <label class="goods_label">
                      <span class="sub_input_box" :class="{checked: picked==='manual'}">
                        <span class="radio_inner"></span>
                        <input type="radio" name="manual" value="manual" v-model="picked">
                      </span>
                      <span class="goods_label_text">手动选择</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="editor_panel_booth"></div>
            <div class="editor_panel_btn">
              <button class="editor_btn_button" @click="cancle()">取消</button>
              <button class="editor_btn_button" @click="save()">保存</button>
            </div>
          </div>
        </section>
      </section>
      <footer class="footer"></footer>
    </div>
    <div class="loading_wrap" v-show="isLoading"><i class="el-icon-loading"></i></div>
    <div class="m-nav-content menu_pupper" ref="storeMenuShow">
      <ul class="menu-box">
        <li class="menu-item menu-item-li" v-for="list in menuList" v-if="list.sonMenunameList.length" :key="list.menuname">
          <a class="menu-a" href="javascript:;"><span>{{list.menuname}}</span><i class="el-icon-arrow-down menu-more" v-if="list.sonMenunameList.length"></i></a>
          <div class="menu-two-box" v-if="list.sonMenunameList.length">
            <div class="visible"></div>
            <ul class="menu-two">
              <li class="menu-item menu-two-li" v-for="item in list.sonMenunameList" :key="item.menuname">
                <a class="menu-a menu-two-a" href="javascript:;"><span>{{item.menuname}}</span><i class="el-icon-caret-right menu-more" v-if="item.sonMenunameList.length"></i></a>
                <shopsNav v-if="item.sonMenunameList.length" :list="item.sonMenunameList"></shopsNav>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- <div class="menu-two-box" v-if="list.sonMenunameList.length">
    <div class="visible"></div>
    <ul class="menu-two">
      <li class="menu-item menu-two-li" v-for="item in list.sonMenunameList" :key="item.menuname">
        <a class="menu-a menu-two-a" href="javascript:;"><span>{{item.menuname}}</span><i class="el-icon-caret-right menu-more" v-if="item.sonMenunameList.length"></i></a>
        <shopsNav v-if="item.sonMenunameList.length" :list="item.sonMenunameList"></shopsNav>
      </li>
    </ul>
  </div> -->
</template>
<script>
// 随机id
// import GUID from '@/utils/guid'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'decorate',
  data () {
    return {
      options: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '窄栏'
        },
        {
          value: 2,
          label: '宽栏'
        },
        {
          value: 3,
          label: '通栏'
        }
      ],
      goods: [], // 产品
      picWord: [], // 图文
      video: [], // 视频
      sell: [], // 营销
      office: [], // 公司
      switchNav: '', // 切换当前菜单面板
      panlSelect: 0, // 当前面板的的布局状态
      layoutType: {}, // 布局种类
      // 保存每个菜单面板的布局
      savePanlSelect: [
        {
          id: null,
          status: 0
        },
        {
          id: null,
          status: 0
        },
        {
          id: null,
          status: 0
        },
        {
          id: null,
          status: 0
        },
        {
          id: null,
          status: 0
        }
      ],
      themeColor: '#dddddd',
      bgShowStatus: '隐藏', // 页面背景图片显示状态
      bgLayStatus: '平铺', // 页面背景平铺状态
      bgAlignStatus: '平铺', // 页面背景对齐状态
      overView: 0,
      isEditPanel: '', // 显示编辑面板
      isLoading: false,
      currentComponent: [], // 当前编辑的组件
      menuList: [
        {
          'menuname': '所有商品',
          'sonMenunameList': [
            {
              'menuname': '一级商品1',
              'sonMenunameList': [
                {
                  'menuname': '二级商品1',
                  'sonMenunameList': [
                    {
                      'menuname': '三级商品1',
                      'sonMenunameList': []
                    }
                  ]
                },
                {
                  'menuname': '二级商品2',
                  'sonMenunameList': []
                },
                {
                  'menuname': '二级商品3',
                  'sonMenunameList': []
                },
                {
                  'menuname': '二级商品4',
                  'sonMenunameList': []
                },
                {
                  'menuname': '二级商品5',
                  'sonMenunameList': []
                },
                {
                  'menuname': '二级商品6',
                  'sonMenunameList': []
                },
                {
                  'menuname': '二级商品7',
                  'sonMenunameList': []
                },
                {
                  'menuname': '二级商品8',
                  'sonMenunameList': []
                },
                {
                  'menuname': '二级商品9',
                  'sonMenunameList': []
                }
              ]
            },
            {
              'menuname': '一级商品2',
              'sonMenunameList': [
                {
                  'menuname': '二级商品1',
                  'sonMenunameList': []
                },
                {
                  'menuname': '二级商品2',
                  'sonMenunameList': []
                },
                {
                  'menuname': '二级商品3',
                  'sonMenunameList': []
                },
                {
                  'menuname': '二级商品4',
                  'sonMenunameList': []
                },
                {
                  'menuname': '二级商品5',
                  'sonMenunameList': []
                },
                {
                  'menuname': '二级商品6',
                  'sonMenunameList': []
                },
                {
                  'menuname': '二级商品7',
                  'sonMenunameList': []
                },
                {
                  'menuname': '二级商品8',
                  'sonMenunameList': []
                },
                {
                  'menuname': '二级商品9',
                  'sonMenunameList': []
                }
              ]
            }
          ]
        },
        {
          'menuname': '分类1',
          'sonMenunameList': []
        },
        {
          'menuname': '分类2',
          'sonMenunameList': []
        },
        {
          'menuname': '分类3',
          'sonMenunameList': []
        },
        {
          'menuname': '分类4',
          'sonMenunameList': []
        },
        {
          'menuname': '分类5',
          'sonMenunameList': []
        },
        {
          'menuname': '分类6',
          'sonMenunameList': []
        }
      ],
      // 配置内容 自动/手动选择
      picked: 'auto',
      // 当前页面基本信息
      currentPageInfo: {
        version: this.$route.query.version,
        pageName: this.$route.query.pageName
      },
      cooommm: []
    }
  },
  components: {
    /* 本页面的组件 */
    storeHeader: () => import('@/components/storeHeader'),
    /* 菜单和模板 */
    shopsNav: () => import('@/components/goods/shopsNav'),
    pingpuP: () => import('@/components/goods/pingpu_p'),
    pingpuW: () => import('@/components/goods/pingpu_w'),
    pingpuN: () => import('@/components/goods/pingpu_n'),
    chuchuangP: () => import('@/components/goods/chuchuang_p'),
    chuchuangW: () => import('@/components/goods/chuchuang_w'),
    daileimuP: () => import('@/components/goods/daileimu_p'),
    // 智能产品与重点推荐一样布局
    zhongdiantuijianP: () => import('@/components/goods/zhongdiantuijian_p'),
    danpinP: () => import('@/components/goods/danpin_p'),
    zhuyingleimuP: () => import('@/components/goods/zhuyingleimu_p'),
    smart: () => import('@/components/goods/zhongdiantuijian_p'),
    chanpinfenleiN: () => import('@/components/goods/chanpinfenlei_n'),
    industry: () => import('@/components/picWord/industry'),
    fullScreen: () => import('@/components/picWord/fullScreen'),
    banner: () => import('@/components/picWord/banner'),
    dynamic: () => import('@/components/video/dynamic'),
    live: () => import('@/components/video/live'),
    threeD: () => import('@/components/video/3D'),
    // 客服模块 通栏 宽栏一样布局
    customer: () => import('@/components/office/customer'),
    customerN: () => import('@/components/office/customer_n')
  },
  computed: {
    ...mapState({
      // 组件树
      tree: state => state.tree
    })
  },
  mounted () {
    if (!this.currentPageInfo.version || !this.currentPageInfo.pageName) {
      this.$message.error('数据请求有误！')
    }
    // 请求得到数据拖拽列表信息
    this.API.homeNav().then(res => {
      let navData = res.data
      this.goods = navData[0]
      this.savePanlSelect[0].id = this.goods.id
      this.picWord = navData[1]
      this.savePanlSelect[1].id = this.picWord.id
      this.video = navData[2]
      this.savePanlSelect[2].id = this.video.id
      this.sell = navData[3]
      this.savePanlSelect[3].id = this.sell.id
      this.office = navData[4]
      this.savePanlSelect[4].id = this.office.id
    })
    this.API.getStoreModule({ pagePosition: 'HOME', version: 1 }).then(res => {
      console.log(res.data, 'mounted')
      // let tem = res.data
      // let arr = []
      // for (let i = 0; i < tem.length; i++) {
      //   let obj = {
      //     componentId: tem[i].componentId,
      //     pass: [],
      //     width: [],
      //     narrow: []
      //   }
      //   if (i === 0) {
      //     if (tem[i].type === '1') {
      //       obj.narrow.push(tem[i])
      //     } else if (tem[i].type === '2') {
      //       obj.width.push(tem[i])
      //     } else {
      //       obj.pass.push(tem[i])
      //     }
      //     arr.push(obj)
      //   } else {
      //     if ((tem[i].componentId === tem[ i - 1 ].componentId)) {
      //       for (let j = 0; j < arr.length; j++) {
      //         if (arr[j].componentId === tem[i].componentId) {
      //           if (tem[i].type === '1') {
      //             arr[j].narrow.push(tem[i])
      //           } else if (tem[i].type === '2') {
      //             arr[j].width.push(tem[i])
      //           } else {
      //             arr[j].pass.push(tem[i])
      //           }
      //         }
      //       }
      //     } else {
      //       if (tem[i].type === '1') {
      //         obj.narrow.push(tem[i])
      //       } else if (tem[i].type === '2') {
      //         obj.width.push(tem[i])
      //       } else {
      //         obj.pass.push(tem[i])
      //       }
      //       arr.push(obj)
      //     }
      //   }
      // }
      // console.log(arr)
      // this.cooommm = arr
      this.BUILD_TREE(res.data)
    })
    document.addEventListener('click', this.handlePackUp)
    document.body.ondragover = e => {
      e.dataTransfer.dropEffect = 'move'
      this.switchNav = ''
      e.preventDefault()
    }
    this.$nextTick(() => {
      // 解决头部组件导入时序问题，影响storeMenuShow位置定位
      setTimeout(() => {
        let { left, top } = this.$refs.storeMenuname.getBoundingClientRect()
        this.$refs.storeMenuShow.style.position = 'absolute'
        this.$refs.storeMenuShow.style.left = left + 'px'
        this.$refs.storeMenuShow.style.top = top + 40 + 'px'
        this.$refs.storeMenuShow.style.zoom = 0.783035
      }, 1000)
    })
  },
  destroyed () {
    document.removeEventListener('click', this.handlePackUp)
  },
  methods: {
    ...mapMutations(['BUILD_TREE']),
    handleClick (val) {
    },
    // 收起菜单
    handlePackUp (e) {
      if (this.switchNav) {
        let navDom = this.$refs.nav
        if (!navDom.contains(e.target)) {
          this.switchNav = ''
        }
      }
    },
    // 过滤布局
    handleLayout (data) {
      let tem = []
      tem = data && data.filter(item => {
        if (this.panlSelect === 1) {
          return item.narrow === '1'
        } else if (this.panlSelect === 2) {
          return item.wide === '1'
        } else if (this.panlSelect === 3) {
          return item.pass === '1'
        } else {
          return item
        }
      })
      return tem
    },
    // 布局改变触发事件
    layoutSelect (id, status) {
      for (let item of this.savePanlSelect) {
        if (item.id === id) {
          item.status = status
          break
        }
      }
    },
    dragstart (event, module) {
      this.layoutType = {}
      this.layoutType.narrow = module.narrow
      this.layoutType.wide = module.wide
      this.layoutType.pass = module.pass
      let mode = JSON.stringify({ moduleId: module.id, text: module.templateName })
      event.dataTransfer.setData('text', mode)
    },
    dragover (event, ratioNum) {
      this.overView = ratioNum
    },
    dragleave () {
      this.overView = 0
    },
    drop (event, componentId) {
      let moduleTypeId = event.target.getAttribute('data-module-type') || event.target.parentNode.getAttribute('data-module-type')
      console.log(moduleTypeId, 100)
      this.isLoading = true
      let fox = JSON.parse(event.dataTransfer.getData('text'))
      this.API.getTemplate({ templateId: fox.moduleId }).then(res => {
        let component = res.data.find(item => item.type === moduleTypeId)
        let config = {
          componentId: componentId || null,
          config: '',
          createTime: '',
          data: '',
          dataSources: 1,
          pagePosition: this.currentPageInfo.pageName,
          sellerId: '',
          sort: 1,
          template: component.template,
          templateContext: '',
          templateId: component.templateId,
          templateName: fox.text,
          type: component.type,
          updateTime: '',
          version: this.currentPageInfo.version
        }
        this.API.saveTemplateGetData(config).then(rtn => {
          console.log(rtn.data)
          this.tree.splice(0, 0, rtn.data)
          console.log(this.tree)
          this.BUILD_TREE(this.tree)
          this.isLoading = false
        }).catch(() => {
          this.isLoading = false
        })
      }).catch(() => {
        this.isLoading = false
      })
    },
    dragend () {
      event.dataTransfer.clearData()
      this.overView = 0
      this.layoutType = {}
    },
    // 组件上移
    componentUp (component, index) {
      this.API.setTemplateSort({ id: component.id, target: index }).then(res => {
        if (res.code === 2000) {
          this.$set(this.tree, index, this.tree[index - 1])
          this.$set(this.tree, index - 1, component)
        }
      })
    },
    // 组件下移
    componentDowm (component, index) {
      this.API.setTemplateSort({ id: component.id, target: index + 2 }).then(res => {
        if (res.code === 2000) {
          this.$set(this.tree, index, this.tree[index + 1])
          this.$set(this.tree, index + 1, component)
        }
      })
    },
    // 组件删除
    componentDelete (component, index) {
      this.$confirm('', '是否删除该组件?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        center: true
      }).then(() => {
        this.API.deleteTemplate({ id: component.id }).then(res => {
          if (res.code === 2000) this.tree.splice(index, 1)
        })
      }).catch(() => {})
    },
    // 取消编辑
    cancle () {
      this.isEditPanel = ''
    },
    // 保存编辑
    save () {},
    // 店招导航栏 移入时
    enterNav (event, id) {
      this.$refs.storeMenuShow.style.visibility = 'visible'
    },
    // 店招导航栏 移出时
    leaveNav () {
      this.$refs.storeMenuShow.style.visibility = 'hidden'
    },
    // 预览
    pagePreview () {
    }
  },
  watch: {
    isEditPanel (val) {
      if (val) this.currentComponent = this.tree.find(item => item.id === val)
    },
    switchNav (val) {
      for (let item of this.savePanlSelect) {
        if (val === 'goods' && this.goods.id === item.id) {
          this.panlSelect = item.status
          break
        } else if (val === 'picWord' && this.picWord.id === item.id) {
          this.panlSelect = item.status
          break
        } else if (val === 'video' && this.video.id === item.id) {
          this.panlSelect = item.status
          break
        } else if (val === 'sell' && this.sell.id === item.id) {
          this.panlSelect = item.status
          break
        } else if (val === 'office' && this.office.id === item.id) {
          this.panlSelect = item.status
          break
        }
      }
    }
  }
}

</script>
<style lang="scss" scoped>
$aside-theme-color: #ef7026;
.rec_goods_box {
  padding-bottom: 8px;
  border-bottom: 1px solid rgb(225, 225, 225);
  margin-top: 16px;
  margin: 10px 0;
}
.rec_goods_select_cate {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  overflow: hidden;
  flex-wrap: wrap;
}
.goods_label {
  min-width: 80px;
  margin-bottom: 5px;
  display: flex;
  flex: 1;
  align-items: center;
}
/* 重新设置input---raido UI */
  .sub_input_box {
    overflow: hidden;
    line-height: 1.28571;
    position: relative;
    width: 16px;
    height: 16px;
  }
  .sub_input_box input[type=radio] {
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    margin: 0;
    opacity: 0;
  }
  .radio_inner {
    display: inline-block;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 50%;
    border: 1px solid #c4c6cf;
    transition: all .3s ease 0s
  }
  .checked .radio_inner {
    border-color: $aside-theme-color;
  }
  .radio_inner::after {
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
  .checked .radio_inner::after {
    width: 8px;
    height: 8px;
    font-weight: 700;
    background: $aside-theme-color;
    transform: scale(1);
  }
.goods_label_text {
  font-size: 12px;
  color: #666;
  line-height: 1.28571;
  margin: 0 5px;
}

.container {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  position: fixed;

  .content {
    overflow: hidden;
    display: flex;
    flex: 1;
    position: relative;

    .manager-sidebar {
      width: 118px;
      height: 100%;
      min-height: 200px;
      border-right: 1px solid #dcdee3;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, .05);
      background: #f7f8fa;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1 0 auto;
      overflow-x: hidden;
      overflow-y: auto;

      .switchEditor {
        width: 80%;
        background-color: #333;
        margin: 12px auto;
        padding: 1px 2px;
        border-radius: 15px;
        height: 26px;
        display: flex;

        span {
          color: #fff;
          line-height: 24px;
          margin: 1px 0;
          display: block;
          width: 49%;
          text-align: center;
          cursor: pointer;

          &.active {
            border-radius: 15px;
            background-color: $aside-theme-color;
            cursor: text;
          }
        }
      }

      .manager-wrap {
        width: 100%;

        &.panel-active {
          .panel {
            opacity: 1;
            transform: translate(0);
          }
          .manager-link {
            i {
              color: $aside-theme-color !important;
            }
            &:after,
            &:before {
              background-color: $aside-theme-color;
            }
          }
        }

        .manager-link {
          background-color: #fff;
          display: block;
          padding: 14px 0;
          text-align: center;
          cursor: pointer;
          font-size: 14px;
          max-height: 120px;
          position: relative;

          i {
            display: block;

            &.next-icon {
              margin-bottom: 10px;
              color: #777;
              font-size: 26px;
            }
          }

          &:after,
          &:before {
            display: block;
            position: absolute;
            content: " ";
            width: 200%;
            height: 1px;
            right: 0;
          }

          &:before {
            top: -1px;
          }

          &:after {
            bottom: 0;
            background-color: #dcdee3;
          }

          &:hover {
            border-color: $aside-theme-color;
            background-color: #fff;
            color: $aside-theme-color;

            i.next-icon {
              color: $aside-theme-color;
            }
          }

          &:hover:before,
          &:hover:after {
            background-color: $aside-theme-color;
          }
        }

        .panel {
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

            .bg_tablist {
              border-bottom: 1px solid #dcdee3;
            }
          }

          .m-detail-title {
            font-size: 18px;
            color: #333;
            margin: 16px 0;
            display: flex;
            justify-content: space-around;

            .el-button {
              font-size: 20px;
              padding: 0;
              border: none;
              color: #e6e6e6;
              &:hover {
                background-color: transparent;
              }
            }

            .el-select {
              width: 120px;
            }
          }

          .m-detail-con {
            display: flex;
            flex-wrap: wrap;
            overflow-y: auto;
            &::-webkit-scrollbar { width: 0 !important; }
            -ms-overflow-style: none;
            overflow:-moz-scrollbars-none;
            .m-item {
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

              &.game_over {
                background-color: #f7f8fa;
                .m-item-outside {
                  color: #ddd;
                   &:hover .m-item-shadow {
                    cursor: initial;
                    border-color: transparent;
                    background-color: transparent;
                  }
                }
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
                user-select: none;
                color: #666666;

                .item-icon {
                  font-size: 22px;
                }

                .m-item-shadow {
                  display: block;
                  position: absolute;
                  left: 0;
                  top: 0;
                  border: 1px solid transparent;
                  width: 100%;
                  height: 100%;
                }
                &:hover .m-item-shadow {
                  cursor: move;
                  background-color: rgba(239, 112, 38, .1);
                  border-color: $aside-theme-color;
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

      .previewer_wrap {
        width: 100%;
        height: 100%;
        min-height: 100%;
        margin: 0 auto;
        overflow: auto;
        position: relative;

        .previewer_limit {
          margin: 0 auto;
          position: relative;
          width: 100%;
          font: 14px/1.5 "Microsoft Yahei", 'Hiragino Sans GB', arial, '\5B8B\4F53', sans-serif;
        }
      }
    }
  }

  .handle_component_edit {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.5);
    z-index: 8;
    .edit_panel {
      position: absolute;
      height: 100%;
      width: 300px;
      padding: 20px;
      top: 0;
      right: 0;
      opacity: 0;
      transform: translate(300px);
      transition: all .3s;
      background-color: #fff;
      .editor_panel_container {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        .editor_panel_title {
          flex-shrink: 0;
          order: 1;
          padding-bottom: 16px;
          border-bottom: 1px solid #dcdee3;
          display: flex;
          flex-direction: column;
          .editor_title {
            color: #333;
            font-size: 20px;
          }
          .editor_second_title {
            margin-top: 4px;
            color: #666;
            font-size: 14px;
          }
        }
        .editor_panel_con {
          padding-right: 3px;
          overflow-x: hidden;
          overflow-y: auto;
          order: 2;
        }
        .editor_panel_booth {
          order: 3;
          height: 45px;
          flex-shrink: 0;
        }
        .editor_panel_btn {
          display: flex;
          flex-shrink: 0;
          height: 38px;
          width: 100%;
          background: #fff;
          position: absolute;
          bottom: 0;
          .editor_btn_button {
            flex: 1 1 0%;
            margin: 0px 5px;
            height: 28px;
            padding: 0 16px;
            font-size: 14px;
            line-height: 26px;
            border-width: 1px;
            border: 1px solid rgb(192, 194, 203);
            background-color: $aside-theme-color;
            border-color: transparent;
            color: #fff;
            cursor: pointer;
            &:first-child {
              color: #333;
              background-color: #fff;
              border-color: #c4c6cf;
              &:focus {
                background-color: #f5f7fa;
                border-color: #a0a2ad;
              }
            }
            &:last-child:focus { background-color: saturate($aside-theme-color, 100%); }
          }
        }
      }
    }
    &>.transform { transform: translate(0); opacity: 1; }
  }
}

.bg_tabcontent {
  min-height: 20px;
  padding-bottom: 16px;
  height: 100%;
  overflow: visible;

  p.tab_item_title {
    margin: 10px 0;
    color: #333;
  }

  .bg_tab_line {
    border-color: #f5f7fa75;
    margin: 10px 0;
  }

  .bg_color_wrap {
    overflow: visible;
    margin-bottom: 8px;

    .bg_color_content {
      width: 240px;
      min-height: 100px;
    }
  }

  .bg_dec_p {
    color: #999;
    margin-top: 20px;
    font-size: 14px;
  }

  .bg_tool_contact {
    margin-top: 26px;

    div {
      margin-bottom: 10px;
      color: #333;
    }

    button {
      height: 28px;
      padding: 0 16px;
      font-size: 14px;
      line-height: 26px;
      border: 1px solid #ddd;
      background-color: #fff;
      cursor: pointer;
    }

    p {
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

    label {
      margin-bottom: 6px;
      display: flex;
      align-items: center;

      .next_radio {
        overflow: hidden;
        position: relative;
        width: 16px;
        height: 16px;
        line-height: 16px;
        vertical-align: middle;
        display: block;

        &.check .radio_error {
          border-color: $aside-theme-color;
          background: #fff;

          &:after {
            width: 8px;
            height: 8px;
            font-weight: 700;
            background: $aside-theme-color;
            transform: scale(1);
          }
        }

        span.radio_error {
          display: block;
          width: 100%;
          height: 100%;
          background: #fff;
          border-radius: 50%;
          border: 1px solid #c4c6cf;
          transition: all .3s ease 0s;

          &:after {
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

        input[type=radio] {
          position: absolute;
          opacity: 0;
          top: 0;
          left: 0;
          width: 16px;
          height: 16px;
          margin: 0;
        }
      }

      .next_radio_lable {
        color: #333;
        margin: 0 5px;
        font-size: 14px;
      }
    }
  }

  .bg_preview_box {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 65px;
    background-color: #f2f3f7;
    cursor: pointer;

    &:hover .bg_preview_shadow {
      opacity: 1;
    }

    .bg_preview_img {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      display: block;
    }

    .bg_preview_shadow {
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
      background-color: rgba(0, 0, 0, .7);
      color: #fff;

      i {
        font-size: 16px;
      }
    }
  }
}

.root_page {
  .layout_page {
    width: 100%;
    position: relative;

    .layout_m {
      width: 960px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      margin-bottom: 0px;

      .pre_item_wrap {
        position: relative;
        width: 100%;
        margin-top: 0;
        margin-bottom: 20px;
        min-height: 50px;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        .pre_item_mask {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          cursor: pointer;
          z-index: 2;
          border: 1px solid transparent;
          background: none !important;

          &:hover {
            background-color: rgba(239, 112, 38, .1);
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

            .handle_com {
              width: 33px;
              margin-left: 10px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-around;
              box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
              font-size: 24px;
              min-height: 100px;

              div {
                padding: 7px 5px;
                background-color: #fff;
                color: #999;
                cursor: pointer;
                text-align: center;
                .notToday {
                  color: #e4e7ed;
                  cursor: not-allowed;
                }
              }

              &>div:last-child {
                border-top: 1px solid #e6e6e6;
              }
            }
          }

          .pre_item_overlay {
            width: 100%;
            height: 100%;

            .previewer_title {
              left: 8px;
              top: 8px;
              background-color: rgba(0, 0, 0, .5);
              padding: 2px 5px;
              color: #fff;
              display: block;
              position: absolute;
            }
          }
        }

        .pre_module {
          height: auto;
          z-index: 1;
          position: relative;

          .pre_module_con {
            position: relative;
            zoom: 0.783035;
            &>:nth-child(n) {
              background: #fff;
            }
          }
          .not_html_data {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 120px 38px;
            background: #fff;
            .not_html_placeholder {
              text-align: center;
              i {
                color: #666;
                font-size: 30px;
              }
              div {
                margin-top: 5px;
              }
            }
          }
        }
      }
      .drag_wrap{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;

        .view_20>div, .view_80>div, .view_100>div{
          border: 1px solid #999;
          background-color: rgba(0, 0, 0, 0.2);
          height: 100%;
          &.drop_view {
            border-color: yellow;
            color: yellow;
          }
        }

        .view_20 {
          width: 17.945%;
          height: 100%;
        }
        .view_80 {
          width: calc(100% - 17.945% - 20px);
          height: 100%;
        }
        .view_100 {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
/* 组件显示添加的框 */
.width_20, .width_80, .width_100 {
  width: 100%;
  height: 60px;
  border: 1px solid #999;
  background-color: rgba(0, 0, 0, 0.2);
  &.drop_view {
    border-color: yellow;
    color: yellow;
  }
}

.content_bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  z-index: 1;
  background-color: rgb(253, 253, 253);
  /* background-image: url(//sc01.alicdn.com/kf/HTB1z.roUOLaK1RjSZFxq6ymPFXaW.jpg); */
  background-repeat: no-repeat;
  background-position: center top;
  zoom: 0.783035;
}

/* 店铺招牌 */
  #store_header {
    max-height: 280px;
    margin-bottom: 0px;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }
  .store_sign_nav_bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    background-color: rgb(253, 253, 253);
    background-image: url(/static/img/shop_default_bg.jpg);
    background-repeat: repeat;
    background-position: center top;
    zoom: 0.783035;
  }
  .store_signature {
    width: 100%;
    max-height: 280px;
    overflow: hidden;
    zoom: 0.783035;
  }
  .store_sign_nav_box {
    min-height: 1px;
  }
  .store_sign_bg {
    /* background: url(//gdp.alicdn.com/tps/TB1hYBhJXXXXXciXpXXXXXXXXXX-950-120.png) no-repeat 0 0 !important; */
    height: 240px !important;
  }
  .store_sign_con {
    position: relative;
  }
  .store_sign_info {
    position: absolute;
    left: 20px;
    top: calc(50% - 25px);
    background: rgba(244, 177, 90, 0.1);
    border-radius: 8px;
    line-height: 30px;
    color: #333;
    padding: 10px 40px;
    font-size: 24px;
    font-weight: 400;
  }
/* nav 导航栏菜单 */
  .shop_nav {
    position: relative;
    height: 40px;
    background-color: #aside-theme-color;
  }
 .m-nav-content {
    width: 1226px;
    margin: 0 auto;
  }
  .menu_pupper {
    visibility: hidden;
  }
  .menu-box {
    display: flex;
  }
  .menu-item {
    position: relative;
  }
  .menu-item-li {
    height: 40px;
    line-height: 40px;
  }
  .menu-item-li>a.menu-a {
    height: 40px;
    line-height: 40px;
  }
  .menu-a {
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    color: #000;
    font-size: 14px;
    border-radius: 4px;
  }
  .menu-more {
    padding-left: 5px;
    transition: 0.2s;
  }
  .visible {
    height: 4px;
    width: 4px;
    background: transparent;
  }
  .menu-two {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 1px #eee;
    min-width: 150px;
    padding: 4px 0 10px 0;
  }
  .menu-two-a {
    padding: 0 16px;
  }
  .menu-two-li {
    padding: 0 4px;
  }
  .menu-two-li .menu-a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .menu-two-box {
    position: absolute;
    top: 100%;
    display: none;
    z-index: 20;
  }
  .menu-box>.menu-item:hover>.menu-a>.menu-more{
    transform-origin: 62% 50%;
    transform: rotate(0.5turn);
  }
  .menu-two-li>.menu-two-a:hover {
    background-color: #ededef;
  }
  .menu-box>.menu-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .menu-item:hover>.menu-two-box {
    display: block;
  }

.loading_wrap {
  position: fixed;
  left: 50vw;
  top: 50vh;
  margin: auto;
  font-size: 30px;
  color: $aside-theme-color;
}
/* 修改插件样式 未启用？ */
  /deep/ .el-color-picker__panel.el-color-dropdown {
    left: 118px !important;
  }
  /deep/ .el-tabs__active-bar {
    background-color: $aside-theme-color;
    height: 1px;
  }

  /deep/ .el-tabs__item.is-active {
    color: $aside-theme-color;
  }

  /deep/ .el-tabs__item:hover {
    color: $aside-theme-color;
    cursor: pointer;
  }

  /deep/ .el-tabs__nav-wrap::after {
    height: 1px;
  }
  /deep/ .bg-purple {
    background: #d3dce6;
  }
  /deep/ .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
/* 暂时的页面主题色相关 */
  .saturation-white {
    background: -webkit-linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
    background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
  }
  .saturation-black {
    background: -webkit-linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
  .hue-horizontal {
    background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
    background: -webkit-linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
  }
  .hue-vertical {
    background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
    background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
  }

</style>
