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
            <div class="manager-wrap" :class="{'panel-active': switchNav==='goods'}" @click="switchNav='goods'">
              <a class="manager-link">
                <i class="next-icon" :class="goods.icon"></i>
                <i>{{goods.moduleName}}</i>
              </a>
              <div class="panel">
                <div class="m-detail-title">
                  <span>添加产品</span>
                  <el-tooltip effect="dark" placement="bottom">
                    <div slot="content" style="width: 230px;">Bottom Center提示文字1111111111111111111111提示文字1111111111111111111111</div>
                    <el-button size="mini"><i class="el-icon-info"></i></el-button>
                  </el-tooltip>
                  <el-select v-model="panlSelect" size="mini" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="m-detail-con">
                  <div class="m-item" :class="{'game_over': list.usedNum===list.totalNum}" v-for="list in goods.templateList" :key="list.id" :data-moduleId="list.id">
                    <div class="m-item-outside" draggable="true" @dragstart="dragstart($event, list.id)" @dragend="dragend()">
                      <div class="m-item-shadow"></div>
                      <div class="item-icon"><i :class="list.icon"></i></div>
                      <div><span>{{list.usedNum}}</span><span>/{{list.totalNum}}</span></div>
                      <div>{{list.templateName}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="manager-wrap" :class="{'panel-active': switchNav==='picWord'}" @click="switchNav='picWord'">
              <a class="manager-link">
                <i class="next-icon" :class="picWord.icon"></i>
                <i>{{picWord.moduleName}}</i>
              </a>
              <div class="panel">
                <div class="m-detail-title">
                  <span>添加图文</span>
                  <el-tooltip effect="dark" placement="bottom">
                    <div slot="content" style="width: 230px;">Bottom Center提示文字1111111111111111111111提示文字1111111111111111111111</div>
                    <el-button size="mini"><i class="el-icon-info"></i></el-button>
                  </el-tooltip>
                  <el-select v-model="panlSelect" size="mini" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="m-detail-con">
                  <div class="m-item" :class="{'game_over': list.usedNum===list.totalNum}" v-for="list in picWord.templateList" :key="list.id" :data-moduleId="list.id">
                    <div class="m-item-outside">
                      <div class="m-item-shadow" v-show="list.usedNum<list.totalNum" draggable="true" @dragstart="dragstart($event, list.id, list)" @dragend="dragend()"></div>
                      <div class="item-icon"><i :class="list.icon"></i></div>
                      <div><span>{{list.usedNum}}</span><span>/{{list.totalNum}}</span></div>
                      <div>{{list.templateName}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="manager-wrap" :class="{'panel-active': switchNav==='video'}" @click="switchNav='video'">
              <a class="manager-link">
                <i class="next-icon" :class="video.icon"></i>
                <i>{{video.moduleName}}</i>
              </a>
              <div class="panel">
                <div class="m-detail-title">
                  <span>添加视频</span>
                  <el-tooltip effect="dark" placement="bottom">
                    <div slot="content" style="width: 230px;">Bottom Center提示文字1111111111111111111111提示文字1111111111111111111111</div>
                    <el-button size="mini"><i class="el-icon-info"></i></el-button>
                  </el-tooltip>
                  <el-select v-model="panlSelect" size="mini" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="m-detail-con">
                  <div class="m-item" :class="{'game_over': list.usedNum===list.totalNum}" v-for="list in video.templateList" :key="list.id" :data-moduleId="list.id">
                    <div class="m-item-outside" draggable="true" @dragstart="dragstart($event, list.id)" @dragend="dragend()">
                      <div class="m-item-shadow"></div>
                      <div class="item-icon"><i :class="list.icon"></i></div>
                      <div><span>{{list.usedNum}}</span><span>/{{list.totalNum}}</span></div>
                      <div>{{list.templateName}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="manager-wrap" :class="{'panel-active': switchNav==='sell'}" @click="switchNav='sell'">
              <a class="manager-link">
                <i class="next-icon" :class="sell.icon"></i>
                <i>{{sell.moduleName}}</i>
              </a>
              <div class="panel">
                <div class="m-detail-title">
                  <span>添加营销</span>
                  <el-tooltip effect="dark" placement="bottom">
                    <div slot="content" style="width: 230px;">Bottom Center提示文字1111111111111111111111提示文字1111111111111111111111</div>
                    <el-button size="mini"><i class="el-icon-info"></i></el-button>
                  </el-tooltip>
                  <el-select v-model="panlSelect" size="mini" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="m-detail-con">
                  <div class="m-item" :class="{'game_over': list.usedNum===list.totalNum}" v-for="list in sell.templateList" :key="list.id" :data-moduleId="list.id">
                    <div class="m-item-outside" draggable="true" @dragstart="dragstart($event, list.id)" @dragend="dragend()">
                      <div class="m-item-shadow"></div>
                      <div class="item-icon"><i :class="list.icon"></i></div>
                      <div><span>{{list.usedNum}}</span><span>/{{list.totalNum}}</span></div>
                      <div>{{list.templateName}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="manager-wrap" :class="{'panel-active': switchNav==='office'}" @click="switchNav='office'">
              <a class="manager-link">
                <i class="next-icon" :class="office.icon"></i>
                <i>{{office.moduleName}}</i>
              </a>
              <div class="panel">
                <div class="m-detail-title">
                  <span>添加公司</span>
                  <el-tooltip effect="dark" placement="bottom">
                    <div slot="content" style="width: 230px;">Bottom Center提示文字1111111111111111111111提示文字1111111111111111111111</div>
                    <el-button size="mini"><i class="el-icon-info"></i></el-button>
                  </el-tooltip>
                  <el-select v-model="panlSelect" size="mini" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="m-detail-con">
                  <div class="m-item" :class="{'game_over': list.usedNum===list.totalNum}" v-for="list in office.templateList" :key="list.id" :data-moduleId="list.id">
                    <div class="m-item-outside" draggable="true" @dragstart="dragstart($event, list.id)" @dragend="dragend()">
                      <div class="m-item-shadow"></div>
                      <div class="item-icon"><i :class="list.icon"></i></div>
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
            <div class="previewer_bg" :style="'background-color:'+ themeColor"></div>
            <div class="previewer_limit">
              <div class="root_page">
                <div class="layout_page" data-id="hc"></div>
                <div class="layout_page" data-id="hd"></div>
                <div class="layout_page" data-id="page-main">
                  <div class="layout_m" v-show="!isAddDom">
                    <div class="pre_item_wrap drag_wrap">
                      <div class="view_100 Up-Center"  module-type="3"  @dragover.prevent="dragover($event, 100)" @dragleave="dragleave()" @drop="drop($event)" :class="[overView===100 ? 'drop_view' : '']">
                        <i class="el-icon-plus"></i>
                        <a>在此添加</a>
                      </div>
                    </div>
                  </div>
                  <div class="layout_m">
                    <div class="pre_item_wrap drag_wrap" >
                      <div class="view_20 Up-Center" module-type="1" @dragover.prevent="dragover($event,20)" @dragleave="dragleave()" @drop="drop($event)" :class="[overView===20 ? 'drop_view' : '']">
                        <i class="el-icon-plus"></i>
                        <a>在此添加</a>
                      </div>
                      <div class="view_80 Up-Center" module-type="2" @dragover.prevent="dragover($event,80)" @dragleave="dragleave()" @drop="drop($event)" :class="[overView===80 ? 'drop_view' : '']">
                        <i class="el-icon-plus"></i>
                        <a>在此添加</a>
                      </div>
                    </div>
                  </div>
                  <div class="layout_m" v-for="(list, index) in tree" :key="list.id" :data-key="list.id">
                    <div class="pre_item_wrap">
                      <div class="pre_item_mask">
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
                        <div class="pre_item_overlay" @click="isEditPanel=list.id">
                          <div class="previewer_title">自定义内容区</div>
                        </div>
                      </div>
                      <div class="pre_module">
                        <div class="pre_module_con" v-html="list.template">
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
            <div class="editor_panel_con"></div>
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
  </div>
</template>
<script>
import testCom from '@/components/test'
// 随机id
import GUID from '@/utils/guid'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'decorate',
  data () {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      goods: [],
      picWord: [],
      video: [],
      sell: [],
      office: [],
      switchNav: '',
      panlSelect: '',
      themeColor: '#dddddd',
      bgShowStatus: '隐藏', // 页面背景图片显示状态
      bgLayStatus: '平铺', // 页面背景平铺状态
      bgAlignStatus: '平铺', // 页面背景对齐状态
      isAddDom: false,
      overView: 0,
      isEditPanel: '', // 显示编辑面板
      isLoading: false,
      currentComponent: [] // 当前编辑的组件
    }
  },
  components: { testCom },
  computed: {
    ...mapState({
      tree: state => state.tree
    })
  },
  mounted () {
    // 请求得到数据拖拽列表信息
    this.API.homeNav().then(res => {
      let navData = res.data
      this.goods = navData[0]
      this.picWord = navData[1]
      this.video = navData[2]
      this.sell = navData[3]
      this.office = navData[4]
    })
    document.addEventListener('click', this.handlePackUp)
    document.body.ondragover = e => {
      e.dataTransfer.dropEffect = 'move'
      this.switchNav = ''
      e.preventDefault()
    }
  },
  destroyed () {
    document.removeEventListener('click', this.handlePackUp)
  },
  methods: {
    ...mapMutations(['BUILD_TREE']),
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
    },
    dragstart (event, componentId, module) {
      // TODO 图文测试 vuex数据改变  isAddDom
      console.log(event, 1000, module)
      event.dataTransfer.setData('text', componentId)
    },
    dragover (event, ratioNum) {
      this.overView = ratioNum
    },
    dragleave () {
      this.overView = 0
    },
    drop (event) {
      let moduleTypeId = event.target.getAttribute('module-type')
      console.log(moduleTypeId)
      this.isLoading = true
      let componentId = event.dataTransfer.getData('text')
      this.API.getTemplate({ templateId: componentId }).then(res => {
        let component = res.data.find(item => item.type === moduleTypeId)
        delete component.id
        Object.assign(component, { id: GUID() })
        this.tree.splice(0, 0, component)
        this.BUILD_TREE(this.tree)
        this.isLoading = false
        console.log('drop', this.tree)
      }).catch(() => {
        this.isLoading = false
      })
    },
    dragend () {
      event.dataTransfer.clearData()
      this.overView = 0
      console.log('dragend')
    },
    // 组件上移
    componentUp (component, index) {
      this.$set(this.tree, index, this.tree[index - 1])
      this.$set(this.tree, index - 1, component)
      console.log(this.tree, 'move')
    },
    // 组件下移
    componentDowm (component, index) {
      this.$set(this.tree, index, this.tree[index + 1])
      this.$set(this.tree, index + 1, component)
      console.log(this.tree, 'move')
    },
    // 组件删除
    componentDelete (component, index) {
      this.$confirm('', '是否删除该组件?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        center: true
      }).then(async () => {
        this.tree.splice(index, 1)
      }).catch(() => {})
    },
    // 取消编辑
    cancle () {
      this.isEditPanel = ''
    },
    // 保存编辑
    save () {}
  },
  watch: {
    isEditPanel (val) {
      if (val) this.currentComponent = this.tree.find(item => item.id === val)
    }
  }
}

</script>
<style lang="scss" scoped>
$aside-theme-color: #ef7026;
.container {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  position: fixed;

  header {
    width: 100%;
    height: 100px;
    background-color: #ddd;
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

        .previewer_bg {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          min-height: 100%;
          z-index: 1;
          background-color: rgb(253, 253, 253);
          background-image: url(/static/img/tem.jpeg);
          /* background-image: url(//sc01.alicdn.com/kf/HTB1z.roUOLaK1RjSZFxq6ymPFXaW.jpg); */
          background-repeat: no-repeat;
          background-position: center top;
          zoom: 0.783034;
          /* ==> 960 */
        }

        .previewer_limit {
          margin: 0 auto;
          position: relative;
          width: 100%;
          font: 14px/20px "Microsoft Yahei", 'Hiragino Sans GB', arial, '\5B8B\4F53', sans-serif;
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

        .pre_item_mask {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          cursor: pointer;
          z-index: 2;
          border: 1px solid transparent;

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
          background-color: rgba(0, 0, 0, .5);
          z-index: 1;
          position: relative;

          .pre_module_con {
            zoom: 0.783034;
          }
        }
      }
      .drag_wrap{
        width: 100%;
        min-height: 60px;
        display: flex;
        justify-content: space-between;
        div{
          border: 1px solid #999;
          background-color: rgba(0, 0, 0, 0.2);
        }
        .view_20 {
          width: 23%;
          height: 100%;
        }
        .view_80 {
          width: 70%;
          height: 100%;
        }
        .view_100 {
          width: 100%;
          height: 100%;
        }
        .view_20.drop_view, .view_80.drop_view, .view_100.drop_view{
          border-color: yellow;
          color: yellow;
        }
      }
    }
  }
}

.loading_wrap {
  position: fixed;
  left: 50vw;
  top: 50vh;
  margin: auto;
  font-size: 30px;
  color: $aside-theme-color;
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
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
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
