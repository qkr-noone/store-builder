<template>
  <div class="menu-two-box menu-two-right Flex-bet">
    <div class="visible"></div>
    <ul class="menu-two">
      <li class="menu-item menu-two-li" v-for="item in list" :key="item.menuname">
        <a class="menu-a menu-two-a" href="javascript:;"><span>{{item.menuname}}</span><i class="el-icon-arrow-right menu-more" v-if="item.sonMenunameList.length"></i></a>
        <shopsNav v-if="item.sonMenunameList.length" :list="item.sonMenunameList"></shopsNav>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  // 递归菜单组件
  name: 'shopsNav',
  data () {
    return {}
  },
  props: {
    list: {
      type: Array
    }
  },
  mounted () {}
}
</script>
<style scoped>
/* 菜单>>  */
  .Flex-bet {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
  .menu-item {
    position: relative;
  }
  .menu-item-li {
    height: 40px;
    line-height: 40px;
  }
  .menu-a {
    height: 40px;
    line-height: 40px;
    padding: 0 16px 0 24px;
    color: #000;
    font-size: 14px;
    border-radius: 4px;
  }
  .menu-more {
    padding-left: 5px;
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
    padding: 0 12px 0 20px;
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
  .menu-two-right {
    position: absolute;
    top: 0;
    display: none;
    left: 100%;
    z-index: 21;
  }
  .menu-two-li>.menu-two-a:hover {
    background-color: #ededef;
  }
  .menu-box>.menu-item:hover {
    background-color: rgb(132, 166, 186);
  }
  .menu-item:hover>.menu-two-box {
    display: block;
  }
  .menu-item:hover>.menu-two-right {
    display: flex;
  }
</style>
