<template>
  <div id="danpin_p">
    <div>
      <div class="pro_n_box">
        <div class="pro_n_limit">
          <div class="pro_n_ul" ref="sroll">
            <el-carousel :interval="3000" arrow="always" :loop="false" :autoplay="false" height="100%" style="width: 100%;">
              <el-carousel-item v-for="index in length" :key="index" class="pro_n_item">
                <a href="" class="pro_n_img" target="_blank"><img class="pro_n_img_con" :src="list.img"></a>
                <div class="pro_n_info">
                  <a class="pro_n_title" href="" :title="list.title" target="_blank"><span>{{list.title}}</span></a>
                  <div class="pro_n_price" :title="list.price"><span>{{list.price}}元</span></div>
                  <div class="pro_n_price pro_n_sale">已售出<span>{{list.sale}}</span>笔</div>
                  <div class="pro_n_extra_info">
                    <div class="pro_n_extra_action"><a href=""><button class="pro_n_extra_more" type="button">查看更多</button></a></div>
                    <div class="pro_n_extra_sub">
                      <div class="pro_n_extra_item"><div class="pro_n_extra_img_box"><img class="sub_img" src=""></div></div>
                    </div>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'danpin_p',
  data () {
    return {
      list: { img: 'static/img/tem.jpeg', title: 'tilstadsadsdtilstilssasstilstadsadsdsass', price: 12.00, sale: 11222 },
      length: 5,
      isBottom: this.length > 4 ? 0 : 1
    }
  },
  methods: {
    next () {
      if (this.length <= 4) return
      if (this.isBottom) {
        this.$refs.sroll.style.transform = 'translate3d(-100%, 0, 0)'
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
  #danpin_p {
    width: 1226px;
    border: 1px solid #dbe3ef;
    padding: 30px 60px 20px;
    .pro_n_box {
      position: relative;
      .pro_n_limit {
        height: 400px;
        position: relative;
        overflow: hidden;
        display: block;
        margin: 0;
        transform: translateX(0);
        .pro_n_ul {
          height: 100%;
          opacity: 1;
          position: relative;
          top: 0;
          left: 0;
          display: flex;
          flex-wrap: nowrap;
          transform: translateX(0);
          transition: transform 500ms ease 0s;
          .pro_n_item {
            flex-shrink: 0;
            padding: 0 54px 20px;
            width: 100%;
            height: 372px;
            overflow: hidden;
            display: flex;
            flex-wrap: nowrap;
            white-space: nowrap;
            .pro_n_img {
              width: 350px;
              height: 350px;
              flex-shrink: 0;
              overflow: hidden;
              justify-content: center;
              border: 1px solid #c8d2e0;
              box-shadow: 2px 2px 4px 0 rgba(104,123,148,.35);
              &:hover {
                color: #ef7026;
              }
              .pro_n_img_con {
                max-width: 100%;
                max-height: 100%;
              }
            }
            .pro_n_info {
              margin-left: 26px;
              white-space: normal;
              flex-grow: 1;
              color: #666;
              overflow: hidden;
              .pro_n_title {
                font-size: 20px;
                line-height: 24px;
                max-height: 46px;
                margin-bottom: 36px;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                display: -webkit-box;
               -webkit-line-clamp: 2;
                word-break: break-all;
                color: #333;
                &:hover{
                  color: #ef7026;
                  text-decoration:underline;
                }
              }
              .pro_n_price {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #c00;
                font-weight: 700;
                font-size: 32px;
                line-height: 38px;
                margin-bottom: 15px;
                &.pro_n_sale {
                  margin-bottom: 0;
                  margint-top: 5px;
                  color: #999;
                  font-weight: initial;
                  font-size: 24px;
                  line-height: 28px;
                  span {
                    color: #c97;
                    font-weight: 700;
                  }
                }
              }
              .pro_n_extra_info {
                display: inline-block;
                .pro_n_extra_action {
                  margin: 30px 0;
                  .pro_n_extra_more {
                    background-color: transparent;
                    line-height: 40px;
                    padding: 0 20px;
                    border: 1px solid #dbe3ef;
                    &:hover {
                      color: #333;
                      background-color: rgba(0,0,0,.03);
                      cursor: pointer;
                    }
                  }
                }
                .pro_n_extra_sub {
                  .pro_n_extra_item {
                    display: inline-block;
                    vertical-align: top;
                    width: 50px;
                    height: 50px;
                    background: #d8d8d8;
                    cursor: pointer;
                    margin-right: 8px;
                    .pro_n_extra_img_box {
                      width: 100%;
                      height: 100%;
                      justify-content: center;
                      .sub_img {
                        max-height: 100%;
                        max-width: 100%;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
<style>
  .el-carousel__arrow--left, .el-carousel__arrow--right {
    font-size: 30px;
    line-height: 30px;
    background-color: rgba(245, 247, 250, 0.13);
    color: #ef7026;
  }
  .el-carousel__arrow--right:hover, .el-carousel__arrow--left:hover {
    background-color: transparent;
  }
  .el-carousel__indicators--horizontal{
    border-radius: 8px;
  }
  .el-carousel__button {
    background-color: #ef7026;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
</style>
