<template>
  <div class="page">
    <storeHeader></storeHeader>
    <div class="main_contain">
      <div class="content_right">
        <div class="title">我的页面</div>
        <div class="content">
          <div class="tablist">
            <div class="tab_nav">
              <div class="tab" :class="{'active': tab==='home'}" @click="tab='home'">
                <div class="tab_inner">首页</div>
              </div>
            </div>
            <div class="tab_nav">
              <div class="tab" :class="{'active': tab==='cus'}" @click="tab='cus'">
                <div class="tab_inner">cus</div>
              </div>
            </div>
            <div class="tab_nav">
              <div class="tab" :class="{'active': tab==='other'}" @click="tab='other'">
                <div class="tab_inner">other</div>
              </div>
            </div>
          </div>
          <div class="tab_content">
            <div class="content_item" v-show="tab==='home'">
              <div class="edit_item new_edit_item">
                <i class="el-icon-plus"></i>
                <p>创建新版本</p>
              </div>
              <div class="edit_item">
                <div class="edit_box">
                  <h5>首页</h5>
                  <p class="release_time">当前版本发布于<span>&nbsp; 2018-11-26 01:28:15</span></p>
                </div>
                <div class="edit_handle">
                  <el-tooltip class="item" effect="light" content="编辑" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-edit"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="设置" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-setting"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="删除" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-delete"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="预览" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-view"></i></el-button>
                  </el-tooltip>
                </div>
              </div>
              <div class="edit_item">
                <div class="edit_box">
                  <h5>首页</h5>
                  <p class="release_time">当前版本发布于<span>&nbsp; 2018-11-26 01:28:15</span></p>
                </div>
                <div class="edit_handle">
                  <el-tooltip class="item" effect="light" content="编辑" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-edit"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="设置" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-setting"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="删除" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-delete"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="预览" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-view"></i></el-button>
                  </el-tooltip>
                </div>
              </div>
              <div class="edit_item">
                <div class="edit_box">
                  <h5>首页</h5>
                  <p class="release_time">当前版本发布于<span>&nbsp; 2018-11-26 01:28:15</span></p>
                </div>
                <div class="edit_handle">
                  <el-tooltip class="item" effect="light" content="编辑" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-edit"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="设置" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-setting"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="删除" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-delete"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="预览" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-view"></i></el-button>
                  </el-tooltip>
                </div>
              </div>
              <div class="edit_item">
                <div class="edit_box">
                  <h5>首页</h5>
                  <p class="release_time">当前版本发布于<span>&nbsp; 2018-11-26 01:28:15</span></p>
                </div>
                <div class="edit_handle">
                  <el-tooltip class="item" effect="light" content="编辑" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-edit"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="设置" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-setting"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="删除" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-delete"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="预览" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-view"></i></el-button>
                  </el-tooltip>
                </div>
              </div>
            </div>
            <div class="content_item" v-show="tab==='cus'">
              <div class="edit_item new_edit_item">
                <i class="el-icon-plus"></i>
                <p>创建新版本</p>
              </div>
              <div class="edit_item">
                <div class="edit_box">
                  <h5>cus</h5>
                  <p class="release_time">当前版本发布于<span>&nbsp; 2018-11-26 01:28:15</span></p>
                </div>
                <div class="edit_handle">
                  <el-tooltip class="item" effect="light" content="编辑" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-edit"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="设置" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-setting"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="删除" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-delete"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="预览" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-view"></i></el-button>
                  </el-tooltip>
                </div>
              </div>
              <div class="edit_item">
                <div class="edit_box">
                  <h5>首页</h5>
                  <p class="release_time">当前版本发布于<span>&nbsp; 2018-11-26 01:28:15</span></p>
                </div>
                <div class="edit_handle">
                  <el-tooltip class="item" effect="light" content="编辑" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-edit"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="设置" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-setting"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="删除" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-delete"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="预览" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-view"></i></el-button>
                  </el-tooltip>
                </div>
              </div>
              <div class="edit_item">
                <div class="edit_box">
                  <h5>首页</h5>
                  <p class="release_time">当前版本发布于<span>&nbsp; 2018-11-26 01:28:15</span></p>
                </div>
                <div class="edit_handle">
                  <el-tooltip class="item" effect="light" content="编辑" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-edit"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="设置" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-setting"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="删除" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-delete"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="预览" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-view"></i></el-button>
                  </el-tooltip>
                </div>
              </div>
              <div class="edit_item">
                <div class="edit_box">
                  <h5>首页</h5>
                  <p class="release_time">当前版本发布于<span>&nbsp; 2018-11-26 01:28:15</span></p>
                </div>
                <div class="edit_handle">
                  <el-tooltip class="item" effect="light" content="编辑" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-edit"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="设置" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-setting"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="删除" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-delete"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="预览" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-view"></i></el-button>
                  </el-tooltip>
                </div>
              </div>
            </div>
            <div class="content_item" v-show="tab==='other'">
              <div class="edit_item new_edit_item">
                <i class="el-icon-plus"></i>
                <p>创建新版本</p>
              </div>
              <div class="edit_item">
                <div class="edit_box">
                  <h5>other</h5>
                  <p class="release_time">当前版本发布于<span>&nbsp; 2018-11-26 01:28:15</span></p>
                </div>
                <div class="edit_handle">
                  <el-tooltip class="item" effect="light" content="编辑" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-edit"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="设置" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-setting"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="删除" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-delete"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="预览" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-view"></i></el-button>
                  </el-tooltip>
                </div>
              </div>
              <div class="edit_item">
                <div class="edit_box">
                  <h5>首页</h5>
                  <p class="release_time">当前版本发布于<span>&nbsp; 2018-11-26 01:28:15</span></p>
                </div>
                <div class="edit_handle">
                  <el-tooltip class="item" effect="light" content="编辑" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-edit"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="设置" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-setting"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="删除" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-delete"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="预览" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-view"></i></el-button>
                  </el-tooltip>
                </div>
              </div>
              <div class="edit_item">
                <div class="edit_box">
                  <h5>首页</h5>
                  <p class="release_time">当前版本发布于<span>&nbsp; 2018-11-26 01:28:15</span></p>
                </div>
                <div class="edit_handle">
                  <el-tooltip class="item" effect="light" content="编辑" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-edit"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="设置" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-setting"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="删除" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-delete"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="预览" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-view"></i></el-button>
                  </el-tooltip>
                </div>
              </div>
              <div class="edit_item">
                <div class="edit_box">
                  <h5>首页</h5>
                  <p class="release_time">当前版本发布于<span>&nbsp; 2018-11-26 01:28:15</span></p>
                </div>
                <div class="edit_handle">
                  <el-tooltip class="item" effect="light" content="编辑" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-edit"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="设置" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-setting"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="删除" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-delete"></i></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="light" content="预览" placement="bottom">
                    <el-button class="handle_item"><i class="el-icon-view"></i></el-button>
                  </el-tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tab: 'home'
    }
  },
  components: {
    storeHeader: () => import('@/components/storeHeader')
  },
  mounted () {},
  methods: {}
}
</script>
<style lang="scss" scoped>
  .page {
    min-height: 100vh;
    background: #f2f3f7;
  }
  .main_contain {
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    .content_right {
      width: 1226px;
      height: auto;
      transition: padding 1s linear;
      font-family: PingFangSC-Regular;
      .title {
        width: 100%;
        height: 57px;
        padding-top: 27px;
        font-size: 22px;
        color: #4a4a4a;
      }
      .content {
        overflow: hidden;
        .tablist {
          border-bottom: 1px solid #dcdee3;
          z-index: 1;
          height: 44px;
          .tab_nav {
            margin-bottom: -1px;
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            line-height: 1.5;
            display: inline-block;
            .tab {
              color: #666;
              background-color: transparent;
              display: inline-block;
              position: relative;
              &::before {
                content: "";
                position: absolute;
                height: 1px;
                left: 50%;
                bottom: 0;
                transition: all 0.4s cubic-bezier(0.23, 1, 0.23, 1);
              }
              &.active {
                color: #ef6a00;
                &::before {
                  background-color: #ef6a00;
                  left: 0;
                  width: 100%;
                }
              }
              .tab_inner {
                cursor: pointer;
                height: 44px;
                line-height: 44px;
                padding: 0 24px;
              }
            }
          }
        }
        .tab_content {
          padding: 16px;
          font-size: 14px;
          color: #333;
          .content_item {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: 100%;
            .edit_item {
              height: 210px;
              width: 280px;
              background-color: #fff;
              box-shadow: 0 0 4px 1px #dfdfdf;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 16px 15px;
              border-radius: 8px;
              overflow:hidden;
              &:nth-child(n+2) {
                margin-left: 22px;
                margin-bottom: 20px;
              }
              &:nth-child(5n) {
                margin-left: 0px;
              }
              .edit_box {
                h5 {
                  font-size: 16px;
                  font-weight: 400;
                }
                .release_time {
                  margin-top: 5px;
                  span {
                    color: #bfbfbf;
                  }
                }
              }
              .edit_handle {
                .handle_item {
                  font-size: 24px;
                  padding: 5px 5px;
                  border: 1px solid #dfdfdf;
                  &:hover{
                    color: #fff;
                    cursor: pointer;
                    background-color: #ef6a00;
                  }
                }
              }
            }
            .edit_item.new_edit_item {
              align-items: center;
              justify-content: center;
              i {
                font-size: 24px;
                color: #888;
                margin-bottom: 5px;
              }
            }
          }
        }
      }
    }
  }
</style>
