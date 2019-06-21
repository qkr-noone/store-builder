<template>
  <div>
    <div class="root_page" id="root">
      <div class="layout_page" data-id="hc"></div>
      <div class="layout_page" data-id="hd" id="store_header">
        <div class="store_sign_nav_bg" data-title="店铺招牌导航栏背景"></div>
        <div class="layout_m" data-title="店铺招牌">
          <div class="store_signature">
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
        <div class="layout_m" v-for="(list, index) in tree" :key="index" :data-key="list.id">
          <div class="pre_item_wrap">
            <div class="pre_module">
              <div class="pre_module_con" v-if="list.template">
                <component :is="list.template"></component>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="layout_page" data-id="ft"></div>
      <div class="layout_page" data-id="fc"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      home: {},
      menuList: [],
      tree: []
    }
  },
  components: {
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
  },
  mounted () {
    this.API.testShop({ online: 1 }).then(res => {
      this.home = res.data
    })
  },
  methods: {
    enterNav (event, id) {
      console.log(1000)
      // let { left, top } = event.getBoundingClientRect()
      // TODO: event??
      // Popper(this.$refs.storeMenuname, this.$refs.storeMenuShow)
      // console.log(this.$refs.storeMenuname.getBoundingClientRect(), this.$refs.storeMenuname.scrollLeft)
      let { left, top } = this.$refs.storeMenuname.getBoundingClientRect()
      this.$refs.storeMenuShow.style.position = 'absolute'
      // let scrollParent = this.getScrollParent(this.$refs.storeMenuname)
      this.$refs.storeMenuShow.style.left = left + 'px'
      this.$refs.storeMenuShow.style.top = top + 'px'
      this.$refs.storeMenuShow.style.zoom = 1
      // console.log(scrollParent.scrollLeft, scrollParent.scrollTop)
    },
    // 店招导航栏 移出时
    leaveNav () {
      console.log('leave')
    }
  }
}

</script>
<style lang="scss" scoped src="../../styles/common.scss"></style>
<style lang="scss" scoped>

$aside-theme-color: #ef7026;

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

        .pre_module {
          height: auto;
          z-index: 1;
          position: relative;

          .pre_module_con {
            zoom: 1;
            &>:nth-child(n) {
              background: #fff;
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
  zoom: 1;
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
    background-repeat: no-repeat;
    background-position: center top;
    zoom: 1;
  }
  .store_signature {
    width: 100%;
    max-height: 280px;
    overflow: hidden;
    zoom: 1;
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
/* nav 导航栏菜单 样式可修改 */
  .shop_nav {
    position: relative;
    height: 40px;
  }
 .m-nav-content {
    width: 1226px;
    margin: 0 auto;
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

</style>
