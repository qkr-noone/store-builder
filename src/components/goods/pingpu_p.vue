<template>
  <div id="pingpu_p">
    <div class="product_item" :class="{'has_bottom': list.length>4}" v-for="item in list" :key="item.id">
      <div class="product_cart">
        <router-link :to="{path:'/detail', query: {goodsId: item.id }}" :data-title="item.goodsName" class="product_img" target="_blank">
          <div class="product_img_box">
            <img class="product_img_con" :src="item.smallPic">
          </div>
        </router-link>
        <div class="product_info">
          <div class="product_title">
            <a class="product_word" href=""><span>{{item.goodsName}}</span></a>
          </div>
          <div class="product_price">{{item.priceShow}}元</div>
          <!-- <del class="product_price">{{list.price+5}}元</del> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pingpu_p',
  props: {
    list: {
      type: Array
    }
  }
}

</script>
<style lang="scss" scoped>
  #pingpu_p {
    display: flex;
    flex-wrap: wrap;
    width: 1226px;
    border: 1px solid #dbe3ef;
  }
  .product_item {
    width: 25%;
    border-right: 1px solid #dbe3ef;
    padding: 18px 15px;
    text-align: center;
    overflow: hidden;
    &:nth-child(-n+4).has_bottom {
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
  }
</style>
