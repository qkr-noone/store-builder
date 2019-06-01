<template>
  <header class="header">
    <div class="header_box">
      <div class="header_menu">
        <div class="header_logo">
          <router-link :to="{path: '/decorate'}"><img src="static/img/shop_build_logo.png"></router-link>
        </div>
        <ul class="header_edit">
          <li><router-link :to="{path: '/page'}">我的页面</router-link></li>
          <li><router-link :to="{path: '/decorate'}">编辑器</router-link></li>
        </ul>
        <div class="header_tip">
          <li><a href="javascript:;">新手指导</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: {},
  data () {
    return {}
  },
  mounted () {},
  methods: {}
}
</script>
<style lang="scss" scoped>
$aside-theme-color: #ef7026;
  .header {
    width: 100%;
    min-height: 64px;
    height: auto;
    background-color: #343434;
    .header_box {
      height: 100%;
      width: 100%;
      .header_menu {
        height: 100%;
        width: 1200px;
        margin: 0 auto;
        .header_logo {
          float: left;
          height: 64px;
          display: flex;
          align-items: center;
          margin: 0 20px;
        }
        .header_edit {
          display: inline-block;
          height: 100%;
          li {
            display: inline-block;
            color: #ffffff;
            padding: 0 20px;
            height: 100%;
            line-height: 64px;
            transition: all .4s cubic-bezier(.23,1,.32,1);
            position: relative;
            cursor: pointer;
            white-space: nowrap;
            &::before {
              content: "";
              position: absolute;
              transition: all .4s cubic-bezier(.23,1,.32,1);
              width: 100%;
              left: 0;
              bottom: 0;
              height: 2px;
              background-color: $aside-theme-color;
            }
            &:hover {
              background-color: #000;
              color: #fff;
            }
            a {
              display: block;
              color: #fff;
            }
          }
        }
        .header_tip {
          float: right;
          padding: 15px 0;
          display: flex;
          height: 100%;
          li {
            padding: 0 20px;
            height: 100%;
            text-align: center;
            border-right: 1px solid hsla(0,0%,100%,.2);
            &:last-child {
              border-right: none;
            }
            a {
              color: #fff;
              line-height: 30px;
            }
          }
          a {
            color: #fff;
          }
        }
      }
    }
  }
</style>
