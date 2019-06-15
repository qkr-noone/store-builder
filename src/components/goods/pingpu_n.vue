<template>
  <div id="pingpu_n">
    <div>
      <div class="pro_n_box">
        <div class="pro_n_limit">
          <div class="pro_n_ul" ref="sroll">
            <div class="pro_n_item" v-for="item in list" :key="item.id">
              <router-link :to="{path: '/detail', query: { goodsId: item.id }}" class="pro_n_img" target="_blank"><img class="pro_n_img_con" :src="item.smallPic"></router-link>
              <div class="pro_n_info">
                <router-link :to="{path: '/detail', query: { goodsId: item.id }}" class="pro_n_title"  :title="item.goodsName" target="_blank"><span>{{item.goodsName}}</span></router-link>
                <div class="pro_n_price" :title="item.priceShow"><span>{{item.priceShow}}元</span></div>
                <!-- <div class="pro_n_price pro_n_sale">已售出<span>{{list.sale}}</span>笔</div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pro_n_switch">
        <div class="pro_n_scroll" :class="{'pro_n_disable': (length>4 && isBottom) || length <=4 }" @click="pre()">
          <i class="el-icon-arrow-up"></i>
        </div>
        <div class="pro_n_scroll" :class="{'pro_n_disable': (length>4 && !isBottom) || length<=4 }" @click="next()">
          <i class="el-icon-arrow-down"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pingpu_n',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      length: this.list.length,
      isBottom: this.length > 4 ? 0 : 1
    }
  },
  methods: {
    next () {
      if (this.length <= 4) return
      if (this.isBottom) {
        this.$refs.sroll.style.transform = 'translate3d(0, -400px, 0)'
        this.isBottom = false
      }
    },
    pre () {
      if (this.length <= 4) return
      if (!this.isBottom) {
        this.$refs.sroll.style.transform = 'translate3d(0, 0, 0)'
        this.isBottom = true
      }
    }
  }
}

</script>
<style lang="scss" scoped>
  #pingpu_n {
    width: 220px;
    border: 1px solid #dbe3ef;
    .pro_n_box {
      padding: 8px;
      .pro_n_limit {
        height: 400px;
        position: relative;
        overflow: hidden;
        display: block;
        margin: 0;
        padding: 0;
        transform: translateZ(0);
        .pro_n_ul {
          opacity: 1;
          position: relative;
          top: 0;
          left: 0;
          display: block;
          transform: translateZ(0);
          transition: transform 500ms ease 0s;
          .pro_n_item {
            box-sizing: border-box;
            width: 202px;
            height: 100px;
            padding-bottom: 12px;
            overflow: hidden;
            display: flex;
            flex-wrap: nowrap;
            white-space: nowrap;
            .pro_n_img {
              width: 80px;
              height: 80px;
              flex-shrink: 0;
              overflow: hidden;
              justify-content: center;
              &:hover {
                color: #ef7026;
              }
              .pro_n_img_con {
                max-width: 100%;
                max-height: 100%;
              }
            }
            .pro_n_info {
              margin-left: 8px;
              white-space: normal;
              flex-grow: 1;
              color: #666;
              overflow: hidden;
              text-align: left;
              .pro_n_title {
                line-height: 16px;
                max-height: 32px;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-all;
                color: #333;
                &:hover{
                  color: #ef7026;
                  text-decoration:underline;
                }
              }
              .pro_n_price {
                margin-top: 6px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #c00;
                font-size: 12px;
                font-weight: 700;
                &.pro_n_sale {
                  color: #999;
                  font-weight: initial;
                  span {
                    color: #c97;
                    font-weight: 700;
                  }
                }
              }
            }
          }
        }
      }
    }
    .pro_n_switch {
      border-top: 1px solid #dbe3ef;
      display: flex;
      line-height: 34px;
      color: #333;
      font-size: 24px;
      .pro_n_scroll {
        width: 50%;
        cursor: pointer;
        text-align: center;
        &.pro_n_disable {
         color: #ccc;
        }
      }
    }
  }
</style>
