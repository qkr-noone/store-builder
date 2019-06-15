<template>
  <div id="chanpinfenlei_n">
    <div class="pro_cate">
      <div class="pro_cate_header">
        <h3 class="pro_cate_title">产品分类</h3>
      </div>
      <div class="pro_cate_con">
        <div class="pro_cate_menu">
          <ul>
            <li class="pro_cate_item" v-for="item in menuCate" :key="item.id">
              <router-link :to="{path: '/shops/category', query:{homeShops: storeId, cateId: item.id}}" class="pro_item_link">{{item.name}}</router-link>
              <i class="el-icon-arrow-right" v-if="item.children.length"></i>
              <shopsNav v-if="item.children.length" :list="item.children" :storeId="storeId"></shopsNav>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shopsNav from '@/components/goods/shopsNav'
export default {
  name: 'chanpinfenlei_n',
  props: {
    menuCate: {
      types: Array
    },
    storeId: {
      type: [Number, String],
      default: 0
    }
  },
  data () {
    return {}
  },
  components: { shopsNav }
}
</script>

<style lang="scss" scoped>
/* #141414 样式*/
  #chanpinfenlei_n {
    width: 220px;
    border: 1px solid #dbe3ef;
    border-top: 2px solid;
    background: #fff;
    border-top-color: #141414;
    .pro_cate {
      .pro_cate_header {
        line-height: 30px;
        padding: 12px 20px;
        border-bottom: 1px solid #dbe3ef;
        display: flex;
        justify-content: space-between;
        background: 50% no-repeat;
        background-size: cover;
        .pro_cate_title {
          font-weight: 400;
          color: #141414;
          font-size: 18px;
        }
      }
      .pro_cate_con {
        .pro_cate_menu {
          line-height: 40px;
          padding: 12px 0;
          min-width: 100px;
          background: #fff;
          .pro_cate_item {
            padding: 0 20px;
            position: relative;
            cursor: pointer;
            white-space: nowrap;
            transition: background .2s ease;
            &:hover {
              color: #333;
              background: #f2f3f7;
              .menu-two-box {
                display: block;
              }
            }
            .pro_item_link {
              display: block;
              padding-right: 15px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              color: #333333;
              text-align: left;
              &:hover {
                color: #ef7026;
                text-decoration: underline;
              }
            }
            .el-icon-arrow-right {
              font-size: 14px;
              line-height: 32px;
              position: absolute;
              right: 10px;
              top: 0;
              color: #666;
              transition: all .3s ease;
            }
          }
        }
     }
    }
  }
</style>
