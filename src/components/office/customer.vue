<template>
  <div id="customer">
    <div class="customer_box" ref="customerBg">
      <div class="customer_wrap">
        <div class="customer_item">
          <div class="customer_tip"><span>顾客所需</span><span>我们所想</span><span>品牌至上</span><span>商誉是金</span></div>
          <div class="customer_info">
            <p class="customer_name"><img src="static/img/component/1.png">{{list[0].name}}</p>
            <p class="customer_name"><img src="static/img/component/5.png">{{list[0].email}}</p>
            <p class="customer_name"><img src="static/img/component/2.png">{{list[0].position}}</p>
            <p class="customer_name"><img src="static/img/component/6.png">{{list[0].fixedLine}}</p>
            <p class="customer_name"><img src="static/img/component/3.png">{{list[0].mobile}}</p>
            <p class="customer_name"><img src="static/img/component/7.png">{{list[0].fax}}</p>
            <p class="customer_name"><img src="static/img/component/4.png">{{list[0].qq}}</p>
            <!-- <i class="el-icon-service"></i> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // 客服通栏和宽栏 样式相似
  name: 'customer',
  props: {
    dataUrl: {
      type: [String, Number],
      defaul: null
    },
    list: {
      type: [Object, Array]
    }
  },
  data () {
    return {}
  },
  mounted () {
    this.$refs.customerBg.style.backgroundImage = 'url(' + this.dataUrl + ')'
  },
  methods: {
  },
  watch: {
    dataUrl: {
      hanlder (val, old) {
        this.$refs.customerBg.style.backgroundImage = 'url(' + val + ')'
      },
      deep: true
    }
  }
}

</script>
<style lang="" scoped>
  #customer {
    max-width: 1226px;
    width: 100%;
  }
  .customer_box {
    display: flex;
    justify-content: center;
    /*align-items: flex-end;*/
    height: 280px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .customer_wrap {
    flex-grow: 1;
    /*padding: 25px 40px;*/
    /*background: rgba(0,0,0,.5);*/
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .customer_item {
    /*text-align: center;*/
    /*width: 16.66667%;*/
    /*max-width: 16.66667%;*/
    /*flex: 0 0 16.66667%;*/

  }
  .customer_tip {
    font-size: 32px;
    color: #fff;
  }
  .customer_tip span + span{
    margin-left: 30px;
    font-family:SourceHanSansCN-Regular;
  }
  .customer_portrait {
    margin: 0 auto;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
  }
  .customer_portrait img {
    max-height: 100%;
    max-width: 100%;
  }
  .customer_info {
    background-image: url('/static/img/shop/customer_bg_2.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #fff;
    color: red;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    border-radius: 17px;
    width: 734px;
    height: 189px;
    margin-top: 20px;
    padding-top: 20px;
  }
  .customer_name {
    color: #000000;
    line-height: 25px;
    font-size: 12px;
    width: 270px;
    margin-left: 80px;
    display: flex;
  }
  .customer_name>img {
    margin-right: 5px;
    max-width: 25px;
    max-height: 25px;
  }
  /*p.customer_name:not(:last-child){
    margin-right: 46px;
  }*/
  .el-icon-service {
    color: #fff;
    font-size: 20px;
  }
</style>
