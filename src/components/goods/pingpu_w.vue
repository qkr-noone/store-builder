<template>
  <div id="pingpu_w">
    <div class="product_item" v-for="item in list" :key="item.id">
      <div class="product_cart">
        <router-link :to="{path: '/detail' , query: {goodsId: item.id}}" class="product_img" target="_blank">
          <div class="product_img_box">
            <img class="product_img_con" :src="item.smallPic">
          </div>
        </router-link>
        <div class="product_info">
          <div class="product_title">
            <router-link :to="{path: '/detail' , query: {goodsId: item.id}}" class="product_word"><span>{{item.goodsName}}</span></router-link>
          </div>
          <div class="product_price">{{item.priceShow}}元</div>
          <!-- <del class="product_price">{{item.price+5}}元</del> -->
        </div>
      </div>
      <router-link
        :to="{path: '/3D/3Dshow',query:{ id: item.threeId,homeShops: storeId,goodsId: item.id}}"
        v-if="item.threeId"
        target="_blank"
        class="t3D_play"
        title="商品支持3D展示">
        <img src="static/img/detail_play_3D.png">
      </router-link>
    </div>
    <div class="shadow_line"></div>
  </div>
</template>
<script>
export default {
  name: 'pingpu_w',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    storeId: {
      type: String
    }
  },
  data () {
    return {}
  }
}

</script>
<style lang="scss" scoped>
  #pingpu_w {
    display: flex;
    flex-wrap: wrap;
    /* 修改这里可以公用一个组件 */
    width: 986px;
    border: 1px solid #dbe3ef;
  }
  .product_item {
    width: 25%;
    border-right: 1px solid #dbe3ef;
    padding: 18px 15px;
    text-align: center;
    position: relative;
    overflow: hidden;
    &:nth-child(n) {
      border-bottom: 1px solid #dbe3ef;
    }
    &:nth-child(4n) {
      border-right: 1px solid transparent;
    }
    .product_cart {
      width: 160px;
      display: inline-block;
      vertical-align: top;
      font-size: 14px;
      line-height: 16px;
      text-align: left;
      .product_img {
        margin-bottom: 13px;
        display: block;
        .product_img_box {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
          .product_img_con {
            display: block;
            max-width: 100%;
            max-height: 100%;
          }
        }
      }
      .product_info {
        color: #666;
        overflow: hidden;
        width: 100%;
        .product_title {
          width: 100%;
          max-height: 38px;
          white-space: normal;
          line-height: 20px;
          word-break: break-all;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          .product_word {
            color: #333;
            word-break: break-all;
            &:hover {
              color: #ef7026;
              text-decoration:underline;
            }
          }
        }
        .product_price {
          color: #333;
          font-weight: 700;
          margin-top: 5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
        }
      }
    }
    .t3D_play {
      position: absolute;
      bottom: 8px;
      z-index: 100;
      font-size: 36px;
      color: #404040;
      border-radius: 50%;
      line-height: 35px;
      width: 45px;
      height: 45px;
      left: initial;
      right: 6px;
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
.shadow_line {
  position: absolute;
  bottom: 1px;
  height: 1px;
  background: #fff;
  width: 100%;
}

</style>
