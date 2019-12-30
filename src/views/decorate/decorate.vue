<template>
  <div id="decorate" name="data-reactroot">
    <div class="container">
      <router-link v-if="!isMobile" :to="{path:'/decorate/mobile'}" class="mobile_switch">装修手机端</router-link>
      <router-link v-else :to="{path:'/decorate'}" class="mobile_switch">装修PC端</router-link>
      <!-- <storeHeader></storeHeader> -->
      <section class="content">
        <!-- <aside>
          <section class="manager-sidebar" ref="nav">
            <div class="switchEditor" data-attr="PC/无线">
              <span class="PC active">PC</span>
              <el-tooltip effect="dark" placement="bottom">
                <div slot="content">尚未支持无线端</div>
                <span class="mobile">无线</span>
              </el-tooltip>
            </div>
            <div class="manager-wrap" data-attr="页面背景" :class="{'panel-active': switchNav==='bg'}" @click="switchNav='bg'">
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
            <div class="manager-wrap" data-attr="产品" :class="{'panel-active': switchNav==='goods'}" @click="switchNav='goods'">
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
            <div class="manager-wrap" data-attr="图文" :class="{'panel-active': switchNav==='picWord'}" @click="switchNav='picWord'">
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
            <div class="manager-wrap" data-attr="视频" :class="{'panel-active': switchNav==='video'}" @click="switchNav='video'">
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
            <div class="manager-wrap" data-attr="营销" :class="{'panel-active': switchNav==='sell'}" @click="switchNav='sell'">
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
            <div class="manager-wrap" data-attr="公司" :class="{'panel-active': switchNav==='office'}" @click="switchNav='office'">
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
        </aside> -->
        <section class="manager_right" v-show="!isMobile">
          <div class="previewer_wrap">
            <div :style="'background-color:'+ themeColor"></div>
            <div class="previewer_limit">
              <div class="root_page" id="root">
                <div class="layout_page" data-id="hc"></div>
                <!-- 店铺头部 -->
                <div class="layout_page" data-id="hd" id="store_header">
                  <div class="store_sign_nav_bg" data-title="店铺招牌导航栏背景" ref="bgStoreSign"></div>
                  <div class="layout_m" data-title="店铺招牌">
                    <div class="store_signature">
                      <!-- 店招 -->
                      <div class="pre_module store_sign_nav_box">
                        <span data-store_sign_top="店铺平台其他信息"></span>
                        <div class="store_sign_con">
                          <div class="store_sign_bg"></div>
                        </div>
                        <div class="handle_wrap handle_store_sign_box" @click="currentComponent=JSON.parse(JSON.stringify(storeSign))" data-attr="上下移动">
                          <div class="handle_com">
                            <div><i class="el-icon-edit-outline"></i></div>
                          </div>
                        </div>
                      </div>
                      <!-- 导航栏 -->
                      <div class="pre_module store_sign_nav_box shop_nav m-nav-content">
                        <ul class="menu-box" slot="reference">
                          <li class="menu-item menu-item-li" v-for="(list, tip) in menuNavBar" :key="list.id" ref="navBar" @mouseenter="tip===1 &&resetMenuPosition()">
                            <router-link :to="{path: list.path, query:{homeShops: list.sellerId }}" class="menu-a"><span>{{list.navigationName}}</span><i class="el-icon-arrow-down menu-more" v-if="tip===1"></i></router-link>
                          </li>
                        </ul>
                        <div class="handle_wrap handle_store_sign_box"></div>
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
                              <i class="el-icon-caret-top" @click="index > 0 && upComponent(list, index)" :class="{'notToday':index<=0}"></i></div>
                            <div>
                              <i class="el-icon-caret-bottom" @click="index < tree.length - 1 && downComponent(list, index)" :class="{'notToday':index >= tree.length - 1}"></i>
                            </div>
                            <!-- <div><i class="el-icon-delete-solid" @click="deleteComponent(list.componentId, index)"></i></div> -->
                          </div>
                        </div>
                        <div class="pre_item_overlay" @click="isEditPanelId=list.passModuleDataList[0].id">
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
                                <!-- <div><i class="el-icon-delete-solid" @click="deleteTemplate(item, index, list)"></i></div> -->
                              </div>
                            </div>
                            <div class="pre_item_overlay" @click="isEditPanelId=item.id">
                              <div class="previewer_title">{{item.templateName}}</div>
                            </div>
                          </div>
                          <!-- 窄栏项模板>>组件 -->
                          <component
                            :is="item.template"
                            :list="item.dataList"
                            :dataUrl="item.data"
                            :menuCate="menuCate"
                            :storeId="storeId">
                          </component>
                        </div>
                        <!-- 窄栏拖放框 -->
                        <div class="width_20" v-show="layoutType.narrow==='1'">
                          <div class="Up-Center" data-module-type="1" @dragover.prevent="dragover($event,20)" @dragleave="dragleave()" @drop="drop($event, list.componentId, list.sort)" :class="[overView===20 ? 'drop_view' : '']">
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
                                <!-- <div><i class="el-icon-delete-solid" @click="deleteTemplate(item, index, list)"></i></div> -->
                              </div>
                            </div>
                            <div class="pre_item_overlay" @click="isEditPanelId=item.id">
                              <div class="previewer_title">{{item.templateName}}</div>
                            </div>
                          </div>
                          <!-- 宽栏项模板>>组件 -->
                          <component
                            :is="item.template"
                            :list="item.dataList"
                            :dataUrl="item.data"
                            :storeId="storeId">
                          </component>
                        </div>
                        <!-- 宽栏拖放框 -->
                        <div class="width_80" v-show="layoutType.wide==='1'">
                          <div class="Up-Center" data-module-type="2"  @dragover.prevent="dragover($event,80)" @dragleave="dragleave()" @drop="drop($event, list.componentId, list.sort)" :class="[overView===80 ? 'drop_view' : '']">
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
                          <component
                            :is="item.template"
                            :list="item.dataList"
                            :dataUrl="item.data"
                            :videoCover="item.config||''"
                            :storeId="storeId">
                          </component>
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
        <transition attr="手机端装修" v-if="isMobile">
          <div class="manager_mobile">
            <router-view
              :menuCate="menuCate">
            </router-view>
          </div>
        </transition>
      </section>
      <section class="handle_component_edit" v-show="isEditPanelId">
        <section class="edit_panel" :class="{'transform': isEditPanelId }">
          <div class="editor_panel_container">
            <div class="editor_panel_title">
              <span class="editor_title">信息配置</span>
              <span class="editor_second_title">{{currentComponent.templateName || ''}}</span>
            </div>
            <div class="editor_panel_con">
              <div>
                <!-- 产品推荐 -->
                <!-- <div class="rec_goods_box bottom">
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
                </div> -->
                <div class="rec_goods_box hidden_border" v-if="currentComponent.isGoods">
                  <button class="editor_btn_button set_button select_goods" @click="cropperGoods=isEditPanelId; goodsData()">选择商品
                  {{!Object.keys(currentComponent).length || currentComponent.dataList.length || 0}}/16</button>
                </div>
                <!-- 隐藏下边距  -->
                <!-- <div class="rec_goods_box hidden_border">
                  <div class="rec_goods_select_cate">
                    <label class="goods_label">
                      <span class="sub_input_box" :class="{checked: picked==='auto'}">
                        <span class="radio_inner"><i class="el-icon-check"></i></span>
                        <input type="checkbox" name="auto" value="auto" v-model="picked">
                      </span>
                      <span class="goods_label_text">隐藏下边距</span>
                    </label>
                  </div>
                </div> -->
                <div class="rec_goods_box hidden_border" v-if="currentComponent.isVideo">
                  <button class="editor_btn_button set_button" @click="cropperVideo=isEditPanelId; getVideoData()">选择视频</button>
                  <p class="set_desc">请上传比例为16:9的高质量视频</p>
                </div>
                <!-- <div class="rec_goods_box bottom">
                  <div>图片高度<sup class="set_sup">*</sup></div>
                  <div class="rec_goods_select_cate">
                    <label class="goods_label">
                      <span class="sub_input_box" :class="{checked: picked==='auto'}">
                        <span class="radio_inner"></span>
                        <input type="radio" name="auto" value="auto" v-model="picked">
                      </span>
                      <span class="goods_label_text">1920*550</span>
                    </label>
                    <label class="goods_label">
                      <span class="sub_input_box" :class="{checked: picked==='manual'}">
                        <span class="radio_inner"></span>
                        <input type="radio" name="manual" value="manual" v-model="picked">
                      </span>
                      <span class="goods_label_text">1920*650</span>
                    </label>
                  </div>
                </div> -->
                <div class="rec_goods_box hidden_border" v-if="currentComponent.isBanner">
                  <div>图片设置<sup class="set_sup">*</sup></div>
                  <button class="editor_btn_button set_button select_goods set_banner" @click="frontBanner()">上传并编辑图片</button>
                  <div class="set_img_show">
                    <img v-for="tip in currentComponent.dataList" :key="tip.id" :src="tip.url">
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
      <!-- 店招配置 -->
      <section class="handle_component_edit" data-title="店招配置" v-show="currentComponent.isSign">
        <section class="edit_panel transform">
          <div class="editor_panel_container">
            <div class="editor_panel_title">
              <span class="editor_title">信息配置</span>
              <span class="editor_second_title">店铺招牌</span>
            </div>
            <div class="editor_panel_con">
              <div>
                <div class="rec_goods_box hidden_border">
                  <p class="set_desc">店招背景高度 210px, 导航栏高度 40px, 店招背景图片高度可以设置为250px, 可覆盖导航栏
                  <br>背景图片建议设置为1920 * 250, 仅支持 jpg/png/jpeg 格式</p>
                </div>
                <div class="rec_goods_box hidden_border">
                  <div>设置背景图片<sup class="set_sup">*</sup></div>
                  <div class="set_con_banner_cell_img_upload">
                    <input type="file" id="uploadBg" ref="uploadBg" accept="image/png, image/jpeg, image/jpg" style="position: absolute; left: -9999px;"  @change="uploadBgFile()" value="">
                    <div v-if="currentComponent.image" class="set_con_banner_cell_img_upload_con">
                      <img :src="currentComponent.image">
                      <label class="set_con_banner_cell_img_upload_reUpload" for="uploadBg">
                        <i class="el-icon-edit"></i>
                      </label>
                    </div>
                    <label v-else class="set_con_banner_cell_img_upload_text" for="uploadBg">
                      <i class="el-icon-plus"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="editor_panel_booth"></div>
            <div class="editor_panel_btn">
              <button class="editor_btn_button" @click="cancleSignConfig()">取消</button>
              <button class="editor_btn_button" @click="saveSignConfig()">保存</button>
            </div>
          </div>
        </section>
      </section>
      <footer class="footer_pre" v-show="!isMobile">
        <div class="footer_pre_box">
          <sub class="footer_pre_tip">提示：未发布不会替换线上店铺，当前装修的店铺自动保存</sub>
          <button class="editor_btn_button" @click="release()" title="上线当前装修店铺">发布版本</button>
        </div>
      </footer>
    </div>
    <!-- 加载loading -->
    <div class="loading_wrap" v-show="isLoading"><i class="el-icon-loading"></i></div>
    <!-- 导航栏菜单下拉 -->
    <div class="m-nav-content menu_pupper" ref="storeMenuShow">
      <ul class="menu-box">
        <ul class="menu-two">
          <li class="menu-item menu-two-li" v-for="item in menuCate" :key="item.id">
            <router-link :to="{path: '/category', query:{homeShops: storeId, cateId: item.id}}" class="menu-a menu-two-a"><span>{{item.name}}</span><i class="el-icon-arrow-right menu-more" v-if="item.children.length"></i></router-link>
            <shopsNav v-if="item.children.length" :list="item.children" :storeId="storeId"></shopsNav>
          </li>
        </ul>
      </ul>
    </div>
    <!-- 弹框banner -->
    <div v-if="cropperBanner">
      <!-- 遮罩层 -->
      <div class="wrapper"></div>
      <div class="set_con_banner">
        <div>
          <div class="set_con_banner_box">
            <i class="el-icon-close" @click="cancleCropperBanner()"></i>
            <div class="set_con_banner_title">上传/编辑图片</div>
            <div class="set_con_banner_info">
              <div class="set_con_banner_row">
                <div class="set_con_banner_cell_img">图片缩略图</div>
                <div class="set_con_banner_cell_url">设置链接</div>
                <div class="set_con_banner_cell_set">操作</div>
              </div>
              <!-- <div class="set_con_banner_row set_con_banner_row_con">
                <div class="set_con_banner_cell_img"></div>
                <div class="set_con_banner_cell_url">
                  <el-popover
                    placement="bottom"
                    title="标题"
                    width="200"
                    trigger="hover"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                    <el-button slot="reference">hover 激活</el-button>
                  </el-popover>
                </div>
                <div class="set_con_banner_cell_set"></div>
              </div> -->
              <input type="file" id="uploadID" ref="uploadID" accept="image/png, image/jpeg, image/jpg" style="position: absolute; left: -9999999px;"  @change="handleFilesUpload()" value="">
              <div class="set_con_banner_row set_con_banner_row_con" v-for="(tip, index) in markList" :key="tip.id">
                <div class="set_con_banner_cell_img">
                  <div>
                    <div class="set_con_banner_cell_img_upload">
                      <div v-if="Object.keys(tip).length" class="set_con_banner_cell_img_upload_con">
                        <img :src="tip.url">
                        <label class="set_con_banner_cell_img_upload_reUpload" for="uploadID" @click="markIndex=index">
                          <i class="el-icon-edit"></i>
                        </label>
                      </div>
                      <label v-else class="set_con_banner_cell_img_upload_text" for="uploadID" @click="markIndex=index">
                        <i class="el-icon-plus"></i>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="set_con_banner_cell_url">
                  <div class="set_con_banner_cell_url_action">
                    <span class="set_con_banner_cell_url_con"><input type="text" :data-title="tip.link" disabled :value="tip.link"></span>
                    <el-popover
                      placement="bottom"
                      title="选择链接页面类型"
                      width="250"
                      trigger="hover"
                      class="set_con_banner_cell_url_popper">
                      <ul>
                        <li>
                          <a class="set_con_banner_cell_url_popper_a" href="javascript:;" @click="cropperBannerGoods(index)">商品详情页</a>
                        </li>
                        <li>
                          <a class="set_con_banner_cell_url_popper_a" href="javascript:;" @click="cropperBannerCate(index)">店内类目商品列表页</a>
                        </li>
                        <li>
                          <a class="set_con_banner_cell_url_popper_a" href="javascript:;" @click="cropperBanner3D(index)">店内3D页面</a>
                        </li>
                        <li>
                          <a class="set_con_banner_cell_url_popper_a" href="javascript:;" @click="cropperBannerLive(index)">店内直播页面</a>
                        </li>
                      </ul>
                      <el-button slot="reference" size="mini"><i class="el-icon-menu"></i></el-button>
                    </el-popover>
                  </div>
                </div>
                <div class="set_con_banner_cell_set">
                  <div class="set_con_banner_cell_set_action">
                    <span class="set_con_banner_cell_set_action_btn action_btn_active" @click="index > 0 && upBannerImg(tip, index)" :class="{'notToday':index<=0}"><i class="el-icon-arrow-up"></i></span>
                    <span class="set_con_banner_cell_set_action_btn action_btn_active" @click="index < markList.length - 1 && downBannerImg(tip, index)" :class="{'notToday':index>=markList.length - 1}"><i class="el-icon-arrow-down"></i></span>
                    <span class="set_con_banner_cell_set_action_btn action_btn_active" @click="markList.length>1 && deleteBannerImg(index)" :class="{'notToday':markList.length<=1}"><i class="el-icon-delete"></i></span>
                  </div>
                </div>
              </div>
              <div class="set_con_banner_add_btn">
                <button class="editor_btn_button" @click="addCropBanner()" :class="{disabled: markList.length===markNum}">新增</button>
                <span class="set_con_banner_upload_tip">{{markList.length}}/{{markNum}}</span>
              </div>
              <span class="set_con_banner_upload_tip">图片建议上传尺寸&nbsp;≧&nbsp;{{markImgSize.width}}X{{markImgSize.height}}像素，仅支持JPG/JPEG/PNG格式。</span>
            </div>
            <div class="set_con_banner_handle">
              <button class="editor_btn_button" @click="cancleCropperBanner()">取消</button>
              <button class="editor_btn_button" @click="btnCropperBanner()">确定</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 上传图片截图 -->
      <div class="set_con_banner set_con_cropper" v-if="cropperImg">
        <div>
          <div class="set_con_banner_box">
            <i class="el-icon-close" @click="cropperImg = ''"></i>
            <div class="set_con_banner_title">上传<span class="set_con_banner_title_tip">拖动选框选择具体图片<sup>*</sup></span></div>
            <div class="set_con_cropper_con">
              <div class="set_con_cropper_box">
                <VueCropper
                  ref="cropper"
                  data-ref="cropper"
                  :img="cropperImg"
                  :canScale="false"
                  :autoCrop="true"
                  :canMove="false"
                  :fixedBox="false"
                  :fixed="true"
                  :fixedNumber="[markImgSize.width, markImgSize.height]"
                  :centerBox="true"
                  :full="true"
                  :infoTrue="true"
                  :info="false">
                </VueCropper>
              </div>
              <label for="uploadID" class="set_con_cropper_reset"><i class="el-icon-plus"></i><span>重新选择</span></label>
            </div>
            <div class="set_con_cropper_btn"><button class="editor_btn_button" @click="saveCropImg()">保存并关闭</button></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹框商品列表 -->
    <div v-if="cropperGoods">
      <!-- 遮罩层 -->
      <div class="wrapper"></div>
      <div class="set_con_banner">
        <div>
          <div class="set_con_banner_box">
            <i class="el-icon-close" @click="closeCropGoods()"></i>
            <div class="set_con_banner_title">选择商品详情页</div>
            <div class="set_con_banner_info set_con_banner_info_two">
              <div class="set_con_banner_row">
                <!-- 后期分页查询操作 -->
                <div class="set_con_banner_cell_img set_con_banner_info_two_filter">
                  <select v-model="currentCate" placehlder="所有分类" class="set_con_banner_info_two_select">
                    <option value="">所有分类</option>
                    <option :value="cate.id" v-for="cate in menuCate" :key="cate.id">{{cate.name}}</option>
                  </select>
                  <div class="set_box_store_search">
                    <input type="search" name="" placeholder="请输入产品名称" v-model="searchGoodsName" @keyup.enter="page=1;goodsResetData()">
                    <span class="set_box_search_btn" @click="page=1;goodsResetData()"><i class="el-icon-search"></i></span>
                  </div>
                </div>
                <div class="set_con_banner_cell_url set_con_banner_info_two_other"></div>
                <div class="set_con_banner_cell_set set_con_banner_info_two_sort">
                  <el-pagination
                    v-if="storeGoods.total"
                    small
                    @current-change="goodsResetData()"
                    :current-page.sync="page"
                    :page-size="rows"
                    layout="prev, pager, next"
                    :total="storeGoods.total">
                  </el-pagination>
                </div>
              </div>
              <div class="pane-box pane_box_title">
                <ul>
                  <li>
                    <span></span>
                    <span>产品图片</span>
                    <span>产品名称</span>
                    <span>产品价格</span>
                    <span>更新时间</span>
                  </li>
                </ul>
              </div>
              <div class="pane-box" style="border-bottom: 1px solid #663399;">
                <ul class="pane_limit_height pane_limit_goods">
                  <li v-for="list in storeGoods.rows" :key="list.id">
                    <span><input type="checkbox" :value="list" v-model="pickList" @change="goodsChange($event)"/></span>
                    <span class="pane_good_img">
                      <img :src="list.smallPic" @click="goPage(WEBSITE,'/detail',{goodsId: list.id})">
                      <a
                        @click="goPage(WEBSITE,'/3D/3Dshow',{ id: list.threeId,homeShops:storeId,goodsId: list.id})"
                        v-if="list.threeId"
                        target="_blank"
                        class="t3D_play"
                        title="商品支持3D展示">
                        <img src="static/img/detail_play_3D.png">
                      </a>
                    </span>
                    <span @click="goPage(WEBSITE,'/detail',{goodsId: list.id})">{{list.goodsName}}</span>
                    <span>
                      <span>{{list.priceShow}}元</span>
                    </span>
                    <span>{{formatDate(list.createTime)}}</span>
                  </li>
                </ul>
                <div v-if="!storeGoods.total" class="set_con_banner_title set_con_banner_upload_tip">暂无商品，请先相关添加商品~</div>
              </div>
              <div class="set_con_banner_add_btn">
                <span class="set_con_banner_upload_tip">拖动产品图片可调整顺序&nbsp;&nbsp;</span>
                <span class="set_con_banner_upload_tip">已选择的产品:</span>
                <span class="set_con_banner_upload_tip">{{pickList.length}}/{{pickNum}}</span>
              </div>
              <span class="set_select_order">
                <ul>
                  <li v-for="item in pickNum" :key="item.id">{{item}}</li>
                  <draggable class="draggable" v-model="pickList">
                    <li v-for="list in pickList" :key="list.id" style="cursor: move">
                      <img :src="list.smallPic">
                      <i class="el-icon-delete" @click="chooseDeleteData(list)"></i>
                    </li>
                  </draggable>
                </ul>
              </span>
            </div>
            <div class="set_con_banner_handle">
              <button class="editor_btn_button" @click="closeCropGoods()">取消</button>
              <button class="editor_btn_button" @click="btnCropGoods()">确定</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹框3D列表 -->
    <div v-if="cropper3D">
      <!-- 遮罩层 -->
      <div class="wrapper"></div>
      <div class="set_con_banner">
        <div>
          <div class="set_con_banner_box">
            <i class="el-icon-close" @click="closeCropp3D()"></i>
            <div class="set_con_banner_title">选择3D展示</div>
            <div class="set_con_banner_info set_con_banner_info_two">
              <div class="set_con_banner_row">
                <!-- 后期分页查询操作 -->
                <div class="set_con_banner_cell_img set_con_banner_info_two_filter">
                  <div class="set_box_store_search">
                    <input type="search" name="" placeholder="请输入产品名称" v-model="threeD.goodsName" @keyup.enter="threeD.page=1;get3DData()">
                    <span class="set_box_search_btn" @click="threeD.page=1;get3DData()"><i class="el-icon-search"></i></span>
                  </div>
                </div>
                <div class="set_con_banner_cell_url set_con_banner_info_two_other"></div>
                <div class="set_con_banner_cell_set set_con_banner_info_two_sort">
                  <el-pagination
                    v-if="storeRes3D.total"
                    small
                    @current-change="get3DData()"
                    :current-page.sync="threeD.page"
                    :page-size="threeD.rows"
                    layout="prev, pager, next"
                    :total="storeRes3D.total">
                  </el-pagination>
                </div>
              </div>
              <div class="pane-box pane_box_title">
              </div>
              <div class="pane-box" style="border-bottom: 1px solid #663399;">
                <ul class="pane_limit_height video_pane_limit_height" v-if="storeRes3D.total">
                  <li class="video_li_pane_limit_height" v-for="list in storeRes3D.rows" :key="list.id">
                    <div class="video_pane_box tD_item_box">
                      <a class="video_pane_box_img_box">
                        <img class="video_pane_box_img" style="display: block; background-color: #000;" :src="list.smallPic">
                      </a>
                    </div>
                    <p class="video_pane_title">{{list.goodsName}}</p>
                    <div><button class="editor_btn_button" @click="select3D(list)">选择</button></div>
                  </li>
                </ul>
                <div v-else class="set_con_banner_title set_con_banner_upload_tip">暂无相关3D商品，请在数字管理先添加3D文件，并且绑定商品~</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹框视频列表 -->
    <div v-if="cropperVideo">
      <!-- 遮罩层 -->
      <div class="wrapper"></div>
      <div class="set_con_banner">
        <div>
          <div class="set_con_banner_box">
            <i class="el-icon-close" @click="closeCroppVideo()"></i>
            <div class="set_con_banner_title">选择视频</div>
            <div class="set_con_banner_info set_con_banner_info_two">
              <div class="set_con_banner_row">
                <!-- 后期分页查询操作 -->
                <!-- <div class="set_con_banner_cell_img"></div> -->
                <div class="set_con_banner_cell_img set_con_banner_info_two_filter">
                  <div class="set_box_store_search">
                    <input type="search" name="" placeholder="请输入视频名称" v-model="videoPick.titleName" @keyup.enter="videoPick.page=1;getVideoData()">
                    <span class="set_box_search_btn" @click="videoPick.page=1;getVideoData()"><i class="el-icon-search"></i></span>
                  </div>
                </div>
                <div class="set_con_banner_cell_url"></div>
                <div class="set_con_banner_cell_set set_con_banner_info_two_sort">
                  <el-pagination
                    v-if="storeResVideo.total"
                    small
                    @current-change="getVideoData()"
                    :current-page.sync="videoPick.page"
                    :page-size="videoPick.rows"
                    layout="prev, pager, next"
                    :total="storeResVideo.total">
                  </el-pagination>
                </div>
              </div>
              <div class="pane-box pane_box_title">
              </div>
              <div class="pane-box" style="border-bottom: 1px solid #663399;">
                <ul class="pane_limit_height video_pane_limit_height" v-if="storeResVideo.total">
                  <li class="video_li_pane_limit_height" v-for="list in storeResVideo.rows" :key="list.id">
                    <div class="video_pane_box">
                      <video preload="metadata" muted width="100%" height="100%" style="display: block; background-color: #000;" :src="list.url" controls></video>
                    </div>
                    <p class="video_pane_title">{{list.title}}</p>
                    <div><button class="editor_btn_button" @click="selectVideo(list)">选用视频</button></div>
                  </li>
                </ul>
                <div v-else class="set_con_banner_title set_con_banner_upload_tip">暂无视频，请在数字管理先添加视频~</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹框类别列表 -->
    <div v-if="cropperCate">
      <!-- 遮罩层 -->
      <div class="wrapper"></div>
      <div class="set_con_banner">
        <div>
          <div class="set_con_banner_box">
            <i class="el-icon-close" @click="cropperCate=''"></i>
            <div class="set_con_banner_title">选择类别商品列表页</div>
            <div class="set_con_banner_info set_con_banner_info_two">
              <div class="" style="border: 1px solid #663399;">
                <div class="m-nav-content">
                  <ul class="menu-box">
                    <ul class="menu-two">
                      <li class="menu-item menu-two-li" v-for="item in menuCate" :key="item.id" @click="cropperCateUrl(item.id)">
                        <a class="menu-a menu-two-a" href="javascript:;"><span>{{item.name}}</span></a>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div v-if="!menuCate.length" class="set_con_banner_title set_con_banner_upload_tip">暂无商品类别，请先添加商品~</div>
              </div>
              <div class="set_con_banner_add_btn">
                <span class="set_con_banner_upload_tip">点击类别实时生成的链接</span>
                <span><input type="text" disabled name="" :value="cropperCateTemUrl"></span>
              </div>
            </div>
            <div class="set_con_banner_handle">
              <button class="editor_btn_button" @click="closeCropCateUrl()">取消</button>
              <button class="editor_btn_button" @click="btnCropCateUrl()">确定</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { guid } from '@/utils/common'
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'
import draggable from 'vuedraggable'
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
      isEditPanelId: '', // 显示编辑面板=>> 组件内模板id
      isLoading: false,
      currentComponent: {}, // 当前编辑的组件
      sellerInfo: {},
      storeSign: {},
      menuNavBar: [],
      menuCate: [],
      // 配置内容 自动/手动选择
      picked: 'manual',
      // 当前页面基本信息
      currentPageInfo: {
        storePageId: this.$route.query.storePageId
      },
      // 弹框产品列表选择的数量
      pickNum: 16,
      pickList: [],
      // 弹框图片列表选择的数量
      markNum: 5,
      markList: [],
      markIndex: null,
      markDeleteImgId: [],
      markImgSize: { width: 1920, height: 650 },
      storeGoods: {},
      storeResVideo: {},
      storeRes3D: {},
      cropperBanner: '',
      cropperGoods: '',
      cropperImg: '',
      cropperVideo: '',
      cropperCate: '',
      cropper3D: '',
      cropperCateTemUrl: '',
      storeId: this.$cookies.get('st_b_user'),
      searchGoodsName: '',
      currentCate: '',
      page: 1,
      rows: 20,
      threeD: {
        goodsName: '',
        rows: 21,
        page: 1
      },
      isMobile: false,
      videoPick: {
        titleName: '',
        rows: 2,
        page: 1
      }
    }
  },
  components: {
    /* 本页面的组件 */
    draggable,
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
  created () {
    // this.$cookies.set('st_token', this.$route.query.t)
    // this.$cookies.set('st_b_user', this.$route.query.s)
    // 本地测试 zou123 zou123456
    this.$cookies.set('st_b_user', 'conghuaxinxing')
    this.$cookies.set('st_token', 'MkTail-eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25naHVheGlueGluZyIsImV4cCI6MTYwMjU1Mzg1MSwiaWF0IjoxNTcxMDE3ODUxfQ.Rp-Dlv88vJ6gXcOe6vUR96SvEBu4Mjeoc2I80HF2Umz8b5uyrO2uEZfAWplJkjw52MGDaJPOhvtT_CifTiAgWA')
  },
  mounted () {
    // if (!this.currentPageInfo.storePageId) this.$message.error('数据请求有误！') // this.$router.go(-1)

    // 装修手机端 判断当前路由
    let curRouter = (this.$route.path).split('/')[2]
    if (curRouter === 'mobile') this.isMobile = true

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

    // TODO 获取组件树
    // this.API.getStorePageModule({ navigationItemId: this.currentPageInfo.storePageId }).then(res => {
    //   this.BUILD_TREE(res.data)
    // })

    // TODO 临时获取组件树
    this.API.getTemStorePageModule().then(res => {
      this.BUILD_TREE(res.data)
    })

    // 店招
    this.API.getStoreSign().then(res => {
      this.storeSign = res.data
      this.$nextTick(() => {
        this.$refs.bgStoreSign.style.backgroundImage = 'url(' + this.storeSign.image + ')'
      })
    })
    // 获取导航栏
    this.API.storeNavBar().then(res => {
      this.menuNavBar = res.data
    })
    // 下拉菜单
    this.API.storeMenu().then(rtn => {
      this.menuCate = rtn.data
    })
    // 商家信息
    this.API.getSeller({ name: this.storeId }).then(res => {
      this.sellerInfo = res.data.seller
    })

    document.addEventListener('click', this.handlePackUp)

    document.addEventListener('mousemove', this.handlePackNavBar)

    document.body.ondragover = e => {
      e.dataTransfer.dropEffect = 'move'
      this.switchNav = ''
      e.preventDefault()
    }
  },
  destroyed () {
    document.removeEventListener('click', this.handlePackUp)
    document.removeEventListener('mousemove', this.handlePackNavBar)
  },
  methods: {
    ...mapMutations(['BUILD_TREE']),
    init () {
      this.isEditPanelId = ''
      this.cropperGoods = ''
      this.cropperBanner = ''
      this.cropperImg = ''
      this.pickList = []
      this.markDeleteImgId = []
      this.markList = []
      this.markImgSize = { width: 1920, height: 650 }
    },
    handleClick (val) {
    },
    // 收起左侧菜单
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
    drop (event, componentId, comPosition = 1) {
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
          sellerId: '',
          sort: comPosition,
          template: component.template,
          templateContext: '',
          templateId: component.templateId,
          templateName: fox.text,
          type: component.type,
          updateTime: '',
          navigationItemId: this.currentPageInfo.storePageId
        }
        this.API.saveTemplateGetData(config).then(rtn => {
          console.log(rtn.data)
          // 存在组件id 则替换该组件模板数据
          if (componentId) this.tree.splice(comPosition - 1, 1, rtn.data)
          // 插入该组件模板数据
          else this.tree.splice(comPosition - 1, 0, rtn.data)
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
    upComponent (component, index) {
      this.API.moveComponent({ componentId: component.componentId, target: index }).then(res => {
        if (res.code === 2000) {
          this.$set(this.tree, index, this.tree[index - 1])
          this.$set(this.tree, index - 1, component)
          let sort = component.sort
          this.$set(this.tree[index - 1], 'sort', this.tree[index].sort)
          this.$set(this.tree[index], 'sort', sort)
          this.BUILD_TREE(this.tree)
        }
      })
    },
    // 组件下移
    downComponent (component, index) {
      this.API.moveComponent({ componentId: component.componentId, target: index + 2 }).then(res => {
        if (res.code === 2000) {
          this.$set(this.tree, index, this.tree[index + 1])
          this.$set(this.tree, index + 1, component)
          let sort = component.sort
          this.$set(this.tree[index + 1], 'sort', this.tree[index].sort)
          this.$set(this.tree[index], 'sort', sort)
          this.BUILD_TREE(this.tree)
        }
      })
    },
    // 组件删除
    deleteComponent (componentId, index) {
      this.$confirm('', '是否删除该组件?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        center: true
      }).then(() => {
        this.API.deleteComponent({ componentId: componentId }).then(res => {
          if (res.code === 2000) {
            this.tree.splice(index, 1)
            this.BUILD_TREE(this.tree)
          }
        })
      }).catch(() => {})
    },
    // 删除组件里的模板
    deleteTemplate (tem, index, list) {
      // 组件只有一个模板 即删除组件
      let moduleNum = list.narrowModuleDataList.length + list.widthModuleDataList.length + list.passModuleDataList.length
      if (moduleNum <= 1) this.deleteComponent(tem.componentId, index)
      else {
        this.$confirm('', '是否删除该模板?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          center: true
        }).then(() => {
          this.API.deleteTemplate({ moduleId: tem.id }).then(res => {
            if (res.code === 2000) {
              this.tree.splice(index, 1, res.data)
              this.BUILD_TREE(this.tree)
            }
          })
        }).catch(() => {})
      }
    },
    // 取消编辑
    cancle () {
      this.isEditPanelId = ''
      this.markImgSize = { width: 1920, height: 650 }
    },
    // 保存编辑
    save () {
      if (this.currentComponent.isBanner) {
        // 保存Banner配置
        console.log(this.currentComponent, this.markDeleteImgId)
        this.API.saveBannerImg(this.currentComponent.dataList, this.markDeleteImgId.join(',')).then(res => {
          if (res.code === 2000) {
            this.API.getComponent({ componentId: this.currentComponent.componentId }).then(rtn => {
              for (let i = 0; i < this.tree.length; i++) {
                if (this.currentComponent.componentId === this.tree[i].componentId) {
                  this.$set(this.tree, i, rtn.data)
                  this.BUILD_TREE(this.tree)
                  break
                }
              }
            })
          }
        })
      } else {
        if (this.currentComponent.isGoods) {
          // 保存产品配置
          if (!this.currentComponent.dataList.length) {
            this.$notify.warning({
              message: '当前选择商品数据为空，请填写完整'
            })
            return false
          }
        }
        this.API.saveTemplate(this.currentComponent).then(res => {
          if (res.code === 2000) {
            for (let i = 0; i < this.tree.length; i++) {
              if (this.currentComponent.componentId === this.tree[i].componentId) {
                this.$set(this.tree, i, res.data)
                this.BUILD_TREE(this.tree)
                break
              }
            }
          }
        })
      }
      this.init()
    },
    // 店招导航栏 移入显示
    handlePackNavBar (e) {
      let navBar = this.$refs.navBar
      if ((navBar && navBar[1].contains(e.target)) || this.$refs.storeMenuShow.contains(e.target)) {
        this.$refs.storeMenuShow.style.display = 'block'
      } else {
        this.$refs.storeMenuShow.style.display = 'none'
      }
    },
    // 移入导航项时，重新定位
    resetMenuPosition () {
      this.$nextTick(() => {
        let { left, top } = this.$refs.navBar[1].getBoundingClientRect()
        let srcollTop = document.documentElement.scrollTop || document.body.scrollTop
        let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft
        this.$refs.storeMenuShow.style.position = 'absolute'
        this.$refs.storeMenuShow.style.left = left + scrollLeft + 'px'
        this.$refs.storeMenuShow.style.top = top + 40 + srcollTop + 'px'
        this.$refs.storeMenuShow.style.zoom = 0.783035
      })
    },
    // 预览
    pagePreview () {
    },
    // 商品列表
    goodsData () {
      this.API.getGoodsList({ goodsName: this.searchGoodsName, page: this.page, rows: this.rows, productTypeId: this.currentCate }).then(res => {
        this.storeGoods = res.data
        if (this.cropperBanner) this.pickList = []
        else this.pickList = JSON.parse(JSON.stringify(this.currentComponent.dataList))
      })
    },
    goodsResetData () {
      this.API.getGoodsList({ goodsName: this.searchGoodsName, page: this.page, rows: this.rows, productTypeId: this.currentCate }).then(res => {
        this.storeGoods = res.data
      })
    },
    // 选取数据产品
    chooseDeleteData (url) {
      if (this.pickList.indexOf(url) >= 0) {
        this.$delete(this.pickList, this.pickList.indexOf(url))
      } else {
        if (this.pickList.length < this.pickNum) this.pickList.push(url)
      }
    },
    // 时间戳转日期
    formatDate (val) {
      let date = new Date(val)
      let y = date.getFullYear()
      let m = date.getMonth()
      let d = date.getDate()
      return y + '-' + m + '-' + d
    },
    // 关闭选择产品
    closeCropGoods () {
      this.pickList = []
      this.initCropGoods()
    },
    // 初始化
    initCropGoods () {
      this.page = 1
      this.rows = 20
      this.searchGoodsName = ''
      this.pickNum = 16
      this.cropperGoods = ''
      this.currentCate = ''
    },
    // 确定选择产品
    btnCropGoods () {
      if (!this.pickList.length) {
        this.$notify.warning({
          message: '当前选择数据为空，请填写完整'
        })
        return false
      }
      let pickIdList = []
      this.pickList.forEach(item => {
        pickIdList.push(item.id)
      })
      // 作用于 产品
      if (!this.cropperBanner && this.cropperGoods) {
        Object.assign(this.currentComponent, { data: pickIdList.join(','), dataSources: 3, dataList: this.pickList })
      }
      // banner 选产品链接
      if (this.cropperBanner && this.cropperGoods) {
        this.markList[this.markIndex].link = this.WEBSITE + '/#/detail?goodsId=' + pickIdList[0]
      }
      this.initCropGoods()
    },
    // 选择商品变化
    goodsChange (event) {
      if (this.pickList.length > this.pickNum) {
        this.pickList.splice(this.pickNum, 1)
        event.target.checked = false
      }
    },
    // 设置图片的前奏
    frontBanner () {
      this.cropperBanner = this.isEditPanelId
      this.markList = JSON.parse(JSON.stringify(this.currentComponent.dataList))
    },
    // banner图片上传前的判断
    handleFilesUpload () {
      let uploadDom = document.getElementById('uploadID')
      let uploadFiles = this.$refs.uploadID.files
      console.log(uploadFiles, 1000)
      let typeList = ['jpg', 'jpeg', 'png']
      if (typeList.length > 0 && typeList.indexOf(uploadFiles[0].type.split('/')[1]) < 0) {
        this.$notify.warning({
          title: '提示',
          message: '只支持jpg、jpeg、png图片格式'
        })
        uploadDom.value = ''
        return
      }
      this.uploadFilterWH(uploadFiles[0], this.markImgSize.width, this.markImgSize.height).then(res => {
        uploadDom.value = ''
        if (!res) {
          this.$notify.warning({
            title: '提示',
            message: '您上传的图片尺寸不符合要求，请重新上传'
          })
          return false
        } else {
          // 得到 base64 展示
          this.cropperImg = res.src
        }
      })
    },
    // 判断图片宽高
    uploadFilterWH (file, WIDTH = 1920, HEIGH = 1920) {
      return new Promise(resolve => {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function (e) {
          // this.result 图片的base64数据
          let img = new Image()
          img.src = this.result
          img.onload = function () { // 事件是异步
            if (this.height < HEIGH || this.width < WIDTH) resolve(false)
            else resolve(this)
          }
        }
      })
    },
    // 保存截图
    saveCropImg () {
      this.isLoading = true
      this.$refs.cropper.getCropBlob(theBlob => {
        let fd = new FormData()
        let substr = guid() + 'bannerCrop.' + theBlob.type.split('/')[1]
        let temFile = new File([theBlob], substr, { type: theBlob.type })
        fd.append('file', temFile)
        axios({
          method: 'post',
          url: process.env.BASE_API + '/shop/commonDataUpload/uploadFile',
          data: fd,
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': this.$cookies.get('st_token')
          }
        }).then(res => {
          if (res.data.code === 2000) {
            this.markList[this.markIndex].url = res.data.data
          } else {
            this.$notify.error({
              title: '提示',
              message: '上传图片失败请重新上传~~'
            })
          }
          this.isLoading = false
          this.cropperImg = ''
        })
      })
    },
    // 新增图片
    addCropBanner () {
      if (this.markList.length < this.markNum) this.markList.push({ link: null, moduleId: this.currentComponent.id, sort: null, url: null })
    },
    // banner图片上移
    upBannerImg (list, index) {
      this.$set(this.markList, index, this.markList[index - 1])
      this.$set(this.markList, index - 1, list)
    },
    // banner图片下移
    downBannerImg (list, index) {
      this.$set(this.markList, index, this.markList[index + 1])
      this.$set(this.markList, index + 1, list)
    },
    // banner图片删除
    deleteBannerImg (index) {
      if (this.markList[index].id) this.markDeleteImgId.push(this.markList[index].id)
      this.$delete(this.markList, index)
    },
    // banner图片商品链接
    cropperBannerGoods (index) {
      this.cropperGoods = this.isEditPanelId
      this.goodsData()
      this.pickNum = 1
      this.markIndex = index
    },
    // 确定上传banner
    btnCropperBanner () {
      for (let val of this.markList) {
        if (!val.url) {
          this.$message.error({
            message: '请上传图片'
          })
          return
        }
      }
      this.currentComponent.dataList = JSON.parse(JSON.stringify(this.markList))
      this.cropperBanner = ''
    },
    // 取消上传banner
    cancleCropperBanner () {
      this.markDeleteImgId = []
      this.cropperBanner = ''
    },
    // 上传店招背景图
    uploadBgFile () {
      let uploadDom = document.getElementById('uploadBg')
      let uploadFiles = this.$refs.uploadBg.files
      let typeList = ['jpg', 'jpeg', 'png']
      if (typeList.length > 0 && typeList.indexOf(uploadFiles[0].type.split('/')[1]) < 0) {
        this.$notify.warning({
          title: '提示',
          message: '只支持jpg、jpeg、png图片格式'
        })
        uploadDom.value = ''
        return
      }
      this.isLoading = true
      let form = new FormData()
      form.append('file', uploadFiles[0])
      axios({
        method: 'post',
        url: process.env.BASE_API + '/shop/commonDataUpload/uploadFile',
        data: form,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': this.$cookies.get('st_token')
        }
      }).then(res => {
        if (res.data.code === 2000) {
          this.currentComponent.image = res.data.data
        } else {
          this.$notify.error({
            title: '提示',
            message: '上传图片失败请重新上传~~'
          })
        }
        this.isLoading = false
      }).catch(() => { this.isLoading = false })
    },
    // 取消店招配置
    cancleSignConfig () {
      this.currentComponent = {}
    },
    // 确定店招配置 TODO
    saveSignConfig () {
      this.API.saveStoreSign(this.currentComponent).then(res => {
        if (res.code === 2000) {
          this.$set(this.storeSign, 'image', JSON.parse(JSON.stringify(this.currentComponent.image)))
          this.$nextTick(() => {
            this.$refs.bgStoreSign.style.backgroundImage = 'url(' + this.storeSign.image + ')'
          })
        }
        this.currentComponent = {}
      })
    },
    // 视频列表 1（相册） 2（3d文件） 3（视频)
    resourcesData (type) { this.API.getResources({ type: type }, { page: 1, rows: 1000 }).then(res => {}) },
    // 获取视频列表
    getVideoData () {
      this.API.getVideoList({ page: this.videoPick.page, rows: this.videoPick.rows, title: this.videoPick.titleName }).then(res => {
        this.storeResVideo = res.data
      })
    },
    // 选中视频
    selectVideo (item) {
      this.$set(this.currentComponent, 'data', item.url)
      this.$set(this.currentComponent, 'config', JSON.stringify({ videoCover: item.cover }))
      this.closeCroppVideo()
    },
    // 关闭视频 列表弹框
    closeCroppVideo () {
      this.videoPick = { titleName: '', rows: 21, page: 1 }
      this.markIndex = null
      this.cropperVideo = ''
    },
    // banner图片类别链接
    cropperBannerCate (index) {
      this.cropperCate = this.isEditPanelId
      this.markIndex = index
    },
    // 选择类别链接
    cropperCateUrl (cateId) {
      this.cropperCateTemUrl = this.WEBSITE + '/#/shops/category?homeShops=' + this.storeId + '&cateId=' + cateId
    },
    // banner图片类别取消
    closeCropCateUrl () {
      this.cropperCate = ''
      this.cropperCateTemUrl = ''
      this.markIndex = null
    },
    // banner图片类别确定
    btnCropCateUrl () {
      this.markList[this.markIndex].link = this.cropperCateTemUrl
      this.cropperCate = ''
      this.markIndex = null
    },
    // 显示3D 列表弹框
    cropperBanner3D (index) {
      this.cropper3D = this.isEditPanelId
      this.markIndex = index
      this.get3DData()
    },
    // 获取3D 商品列表
    get3DData () {
      this.API.get3DList({ page: this.threeD.page, rows: this.threeD.rows, goodsName: this.threeD.goodsName }).then(res => {
        this.storeRes3D = res.data
      })
    },
    // 关闭3D 列表弹框
    closeCropp3D () {
      this.threeD = { goodsName: '', rows: 21, page: 1 }
      this.markIndex = null
      this.cropper3D = ''
    },
    // 选择3D 展示
    select3D (item) {
      this.markList[this.markIndex].link = this.WEBSITE + '/#/3D/3DShow?homeShops=' + this.storeId + '&id=' + item.threeId + '&goodsId=' + item.goodsId + '&skuId=' + item.id
      this.closeCropp3D()
    },
    cropperBannerLive (index) {
      this.markList[index].link = this.WEBSITE + '/#/live/factory?homeShops=' + this.storeId
    },
    // 发布上线店铺
    release () {
      this.$confirm('是否发布当前店铺版本?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if (!this.storeSign.id || !this.menuNavBar[0].navigationItemId) {
          this.$notify.warning({ message: '请求参数格式不正确' })
          return false
        }
        this.API.onlineVersion({ navigationItemId: this.menuNavBar[0].navigationItemId, trickId: this.storeSign.id }).then(res => {
          if (res.code === 2000) {
            this.$notify.success({ title: '成功', message: '发布成功' })
          } else {
            this.$notify.error({ title: '失败', message: res.message || '发布失败' })
          }
        })
      }).catch(() => {})
    },
    goPage (host, path, query) {
      let router = this.$router.resolve({ path: path, query: query })
      window.open(host + router.href, '_blank')
    },
    tabClient () {
      this.isMobile = false
    }
  },
  watch: {
    isEditPanelId (val) {
      if (val) {
        for (let i = 0; i < this.tree.length; i++) {
          this.currentComponent = JSON.parse(JSON.stringify(this.tree[i].narrowModuleDataList.find(item => item.id === val) || {}))
          if (Object.keys(this.currentComponent).length) break
          this.currentComponent = JSON.parse(JSON.stringify(this.tree[i].passModuleDataList.find(item => item.id === val) || {}))
          if (Object.keys(this.currentComponent).length) break
          this.currentComponent = JSON.parse(JSON.stringify(this.tree[i].widthModuleDataList.find(item => item.id === val) || {}))
          if (Object.keys(this.currentComponent).length) break
        }
        if (Object.keys(this.currentComponent).length) {
          if (this.currentComponent.template === 'banner') {
            this.markImgSize = { width: 1226, height: 180 }
          } else if (this.currentComponent.template === 'fullScreen') {
            this.markImgSize = { width: 1920, height: 650 }
          } else if (this.currentComponent.template === 'chanpinfenleiN' || this.currentComponent.template === 'customer') {
            this.$notify.warning({
              message: '该模块不可操作'
            })
            this.isEditPanelId = ''
          }
        }
      }
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
    },
    currentCate (val) {
      this.page = 1
      this.searchGoodsName = ''
      this.goodsResetData()
    },
    '$route' () {
      let curRouter = (this.$route.path).split('/')[2]
      if (curRouter === 'mobile') this.isMobile = true
      else this.isMobile = false
    }
  }
}

</script>
<style lang="scss" scoped>
$aside-theme-color: #ef7026;
.rec_goods_box {
  margin-top: 16px;
  margin: 10px 0;
  margin-bottom: 20px;
}
.rec_goods_box.bottom {
  border-bottom: 1px solid rgb(225, 225, 225);
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
    width: 17px;
    height: 17px;
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
    left: calc(50% - 3.9px);
    top: calc(50% - 3.9px);
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
/* 隐藏下边距 */
 .rec_goods_box.hidden_border {
   padding-bottom: 0;
   .checked .radio_inner {
     border-color: #c4c6cf;
   }
   .radio_inner {
     border-radius: initial;
     &::after {
       content: none;
     }
     .el-icon-check {
       color: $aside-theme-color;
       font-weight: 700;
     }
   }
 }

.editor_btn_button.set_button {
  margin: 0;
  &:last-child:focus {
    background-color: initial
  }
  :hover {
    background-color: #f5f7fa;
    border-color: #a0a2ad;
  }
}
.editor_btn_button.set_button.select_goods {
  width: 100%;
}
.editor_btn_button.set_button.set_banner {
  color: #333;
  background-color: #fff;
  border-color: #c4c6cf;
  margin-top: 10px;
}
.set_sup {
  color: #e91e63;
  margin: 0 5px;
}
.set_img_show {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.set_img_show img {
  width: 115px;
  height: 60px;
  margin-top: 10px;
}
.set_desc {
  color: #999;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 5px;
  word-break: break-all;
}
.wrapper {
  background: #000;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 998;
  transition: opacity .3s;
  opacity: 0.2;
}
.set_con_banner {
  position: absolute;
  width: 900px;
  height: 600px;
  background: #fff;
  z-index: 999;
  left: calc(50vw - 900px/2);
  top: calc(50vh - 600px/2);
}
.set_con_banner_box {
  width: 100%;
  height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 20px;
}
.set_con_banner_box .el-icon-close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
.set_con_banner_title {
  height: 40px;
}
.set_con_banner_info {
  height: 490px;
  overflow-y: auto;
  position: relative;
}
.set_con_banner_handle {
  position: absolute;
  bottom: 15px;
  right: 20px;
}
.set_con_banner_row {
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #333333;
  font-size: 14px;
}
.set_con_banner_row_con {
  align-items: flex-start;
  height: 85px;
  padding: 10px;
  background: #f7f8fa;
  border: 1px solid #dcdee3;
}
.set_con_banner_cell_img {
  width: 300px;
}
.set_con_banner_cell_img_upload {
  width: 230px;
  height: 65px;
  background-color: #F2F3F7;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.set_con_banner_cell_img_upload_con {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.set_con_banner_cell_img_upload_con img {
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
}
.set_con_banner_cell_img_upload_reUpload {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 1s;
  opacity: 1;
  background-color: rgba(0,0,0,0.7);
  color: #ffffff;
  cursor: pointer;
  visibility: hidden;
}
.set_con_banner_cell_img_upload_con:hover .set_con_banner_cell_img_upload_reUpload {
  visibility: visible;
}
.set_con_banner_cell_img_upload_text {
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  line-height: 65px;
}
.set_con_banner_cell_url {
  width: 330px;
}
.set_con_banner_cell_url_action {
  width: 90%;
  display: flex;
  align-items: center;
}
.set_con_banner_cell_url_action i {
  font-size: 20px;
}
.set_con_banner_cell_url_action /deep/ .el-button--mini {
  padding: 2px;
}
.set_con_banner_cell_url_con {
  color: #ccc;
  background-color: #F5F7FA;
  cursor: not-allowed;
  display: inline-table;
  overflow: visible;
  border: 1px solid #DAE2ED;
  transition: border 0.3s ease 0.1s;
  width: 240px;
  border-spacing: 0;
}
.set_con_banner_cell_url_popper {
  display: inline-block;
  cursor: pointer;
}
.set_con_banner_cell_url_popper_a {
  color: #333;
}
.set_con_banner_cell_set {
  flex: 1;
}
input:disabled {
  width: 100%;
  height: 21px;
  color: #ccc;
  border-color: #DAE2ED;
  background-color: #F5F7FA;
  cursor: not-allowed;
  padding: 0 8px;
}
.disabled {
  color: #E3e3e3 !important;
  cursor: not-allowed !important;
}
.set_con_banner_cell_set_action {
  width: 100%;
  height: 35px;
  display: flex;
}
.set_con_banner_cell_set_action_btn {
  width: 28px;
  height: 28px;
  margin-right: 5px;
  background-color: #f7f8fa;
  border: 1px solid #e0e2e7;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #999;
  font-size: 20px;
}
.action_btn_active {
  background-color: #fff;
  border-color: #d5d5d5;
  color: #333;
}
.set_con_banner_add_btn button{
  margin-left: 0px;
}
.set_con_banner_upload_tip {
  font-size: 14px;
  line-height: 17px;
  color: #777;
}
.set_con_banner_info_two {
  overflow-y: initial;
}
.set_con_banner_info_two_filter {
  display: flex;
  width: 360px;
}
.set_con_banner_info_two_other {
  width: 240px;
}
.set_con_banner_info_two_sort {
  display: flex;
  justify-content: flex-end;
  width: 260px;
}
.set_con_banner_info_two_select {
  width: 120px;
  height: 28px;
  border: 1px solid #aaa;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 20px;
}
/* 弹框列表搜索框 */
  .set_box_store_search {
    width: 220px;
    text-align: left;
    display: flex;
    align-items: center;
    input {
      display: block;
      width: 168px;
      height: 28px;
      border-radius: 4px;
      text-decoration: none;
      border: none;
      border: 1px solid #aaa;
      -webkit-appearance: none;
      &:hover {
        outline: none;
      }
      &:focus {
        outline: none;
      }
    }
    input[type="search"]::-webkit-search-cancel-button {
      display: none;
    }
    .set_box_search_btn {
      padding-left: 10px;
      font-size: 20px;
      line-height: 28px;
      color: #333;
      cursor: pointer;
    }
  }
@mixin border($height,$width,$borderColor,$border-radio:0){
  width: $width;
  height:$height;
  text-align: center;
  line-height: $height;
  border: 1px solid $borderColor;
  border-radius:$border-radio ;
}
@mixin flex($flex-direction:row,$justify-content:space-around,$align-items:center){
  display: flex;
  flex-direction:$flex-direction;
  justify-content:$justify-content;
  align-items: $align-items;
}
@mixin redBorder($width,$height){
  width: $width;
  height:$height;
  line-height: $height;
  text-align: center;
  border: 1px solid #E53031;
  cursor: pointer;
}

.pane-box{
  ul{
    display: flex;
    flex-direction: column;
    border:1px solid #D6D6D6;
    border-bottom: none;
    li{
      display: flex;
      align-items: center;
      padding-left: 20px;
      font-size: 14px;
      &>span{
        text-align: center;
        margin-right:30px;
      }
      &>span:nth-child(2){
        width:80px;
        margin-left: -10px;
      }
      &>span:nth-child(3){
        width:400px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      &>span:nth-child(4){
        width:130px;
      }
      &>span:nth-child(5){
        width:110px;
      }
    }
    &>li{
      height:89px;
      border-bottom: 1px solid #D6D6D6;
      flex-shrink: 0;
      &>span:nth-child(2){
        @include border(62px,62px,#E2E2E2);
        @include flex(row,center,center);
        img{
          max-width: 100%;
          max-height: 100%;
        }
      }
      &>span:last-child{
        border-radius: 2px;
      }
    }
  }
}
.pane-box.pane_box_title {
  ul {
    &>li:first-child{
      height:40px;
      border-bottom:1px solid #A2A2A2;
      font-size:14px;
      color:rgba(0,0,0,1);
      &>span:nth-child(2){
        display: initial;
        line-height: 16px;
        height: initial;
        border: none;
        cursor: initial;
      }
    }
  }
}
.pane_limit_height {
  max-height: 318px;
  overflow-y: auto;
  li:hover {
    background-color: rgba(238, 238, 238, 0.68);
  }
  &.pane_limit_goods li > span {
    margin-right: 25px;
  }
  &.pane_limit_goods li > span:last-child {
    margin-right: 0;
  }
  &.pane_limit_goods li > span:nth-child(3):hover {
    cursor: pointer;
    text-decoration: underline;
    color: $aside-theme-color;
  }
  .pane_good_img {
    cursor: pointer;
    position: relative;
    .t3D_play {
      position: absolute;
      top: 1px;
      z-index: 100;
      font-size: 36px;
      color: #404040;
      border-radius: 50%;
      line-height: 20px;
      width: 25px;
      height: 25px;
      left: initial;
      right: 1px;
      border: 1px solid transparent;
      cursor: pointer;
      &:hover {
        border: 1px solid rgba(64, 64, 64, 0.33);
      }
      &>img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}
.video_pane_limit_height {
  flex-direction: initial !important;
  flex-wrap: wrap !important;
  max-height: 470px;
  height: 470px;
  li.video_li_pane_limit_height {
    width: 30%;
    height: 216px;
    display: flex;
    flex-direction: column;
    border: 1px solid transparent;
    margin-top: 15px;
    .video_pane_box {
      max-height: 150px;
      max-width: 200px;
    }
    .tD_item_box {
      height: 150px;
      width: 200px;
      .video_pane_box_img_box {
        width: 100%;
        height: 100%;
        .video_pane_box_img {
          max-width: 100%;
          max-height: 100%;
          margin: 0 auto;
        }
      }
    }
    .video_pane_title {
      width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 10px;
    }
  }
}
.set_select_order {
  display: block;
  width: 700px;
  overflow-x: auto;
  overflow-y: hidden;
  ul{
    position: relative;
    width: 100%;
    display: inline-block;
    white-space: nowrap;
    .draggable {
      position: absolute;
      overflow-x: auto;
      top: 0;
      left: 0;
      display: flex;
    }
    li{
      @include border(66px,66px,#D8D8D8);
      background:rgba(247,247,247,1);
      border:1px dotted rgba(216,216,216,1);
      margin:6px 10px 8px 2px;
      font-size:18px;
      font-weight:500;
      font-style:italic;
      color:rgba(212,212,212,1);
      cursor: initial;
      position: relative;
      display: inline-block;
      img{
        max-height: 64px;
        max-width: 64px;
      }
      i{
        font-size: 16px;
        position: absolute;
        right: 2px;
        bottom: 2px;
        cursor: pointer;
        color: #989898;
        font-weight: bolder;
      }
      i:hover{
        color: #E43031;
      }
    }
  }
}
.set_con_cropper {
  background: rgba(0, 0, 0, 0.2);
  .set_con_banner_box {
    position: absolute;
    background-color: #fff;
    left: calc(50% - 445px/2);
    top: calc(50% - 450px/2);
    width: 445px;
    height: 450px;
    .set_con_banner_title_tip {
      font-size: 12px;
      margin-left: 10px;
      color: red;
    }
    .set_con_cropper_con {
      flex-grow: 1;
      color: #333;
      .set_con_cropper_box {
        background-color: rgba(0, 0, 0, 0.5);
        height: 290px;
        width: 100%;
      }
      .set_con_cropper_reset {
        margin: 5px 0;
        font-size: 12px;
        cursor: pointer;
      }
    }
    .set_con_cropper_btn {
      border-top: 1px solid #E3e3e3;
      padding-top: 10px;
      text-align: center;
      button {
        background-color: #FF6A00;
        color: #fff;
      }
    }
  }
}

.container {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  position: fixed;

  .mobile_switch{
    position: absolute;
    top: 0;
    left: 50px;
    color: $aside-theme-color;
    font-size: 16px;
    z-index: 7;
    background-color: #fff;
    padding: 8px 5px;
    writing-mode:vertical-lr;
    border-bottom-right-radius: 18px;
    border-bottom-left-radius: 18px;
    border: 1px solid rgba(16, 16, 16, 0.2);;
    border-top: none;
  }

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

    .manager_mobile {
      overflow-y: auto;
      width: 100%;
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
        }
      }
    }
    &>.transform { transform: translate(0); opacity: 1; }
  }
}

.editor_btn_button {
  flex: 1 1 0%;
  margin: 0px 5px;
  height: 28px;
  padding: 0 16px;
  font-size: 14px;
  line-height: 23px;
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
.notToday {
  color: #e4e7ed !important;
  cursor: not-allowed !important;
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
            margin-bottom: 20px;
            min-height: 50px;
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
  }
  &>div:last-child {
    border-top: 1px solid #e6e6e6;
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
    max-height: 250px;
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
    background-repeat: no-repeat;
    background-position: center top;
    zoom: 0.783035;
  }
  .store_signature {
    width: 100%;
    max-height: 250px;
    overflow: hidden;
    zoom: 0.783035;
  }
  .store_sign_nav_box {
    position: relative;
    min-height: 1px;
  }
  .handle_store_sign_box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    border: 1px solid transparent;
    .handle_com {
      display: none;
      position: absolute;
      right: 0;
    }
  }
  .handle_store_sign_box:hover{
    border: 1px solid $aside-theme-color;
    .handle_com {
      display: block;
    }
  }
  .store_sign_bg {
    /* background: url(//gdp.alicdn.com/tps/TB1hYBhJXXXXXciXpXXXXXXXXXX-950-120.png) no-repeat 0 0 !important; */
    height: 210px !important;
  }
  .store_sign_con {
    position: relative;
  }
/* nav 导航栏菜单 */
  .shop_nav {
    position: relative;
    height: 40px;
    /* background-color: $aside-theme-color; */
  }
 .m-nav-content {
    width: 1226px;
    margin: 0 auto;
  }
  .menu_pupper {
    display: none;
    z-index: 10;
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
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
    max-width: 200px;
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

.loading_wrap {
  position: fixed;
  left: 50vw;
  top: 50vh;
  margin: auto;
  font-size: 32px;
  color: $aside-theme-color;
  z-index: 10000;
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
.footer_pre {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.72);
  .footer_pre_box {
    margin-right: 20px;
    button {
      width: 100px;
      line-height: 28px;
      border-radius: 4px;
      flex: initial;
      background-color: $aside-theme-color;
      color: #fff;
      border-color: none;
    }
    .footer_pre_tip {
      color: #fff;
      margin-right: 10px;
    }
  }
}
</style>
