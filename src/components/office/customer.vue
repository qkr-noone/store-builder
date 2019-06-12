<template>
  <div id="customer">
    <div class="customer_box" ref="customerBg">
      <div class="customer_wrap">
        <div class="customer_item">
          <div class="customer_info">
            <p class="customer_name" v-for="(item, tip) in list[0]" :key="item">{{tip}}:&nbsp;{{item}}</p>
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
    align-items: center;
    height: 280px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .customer_wrap {
    flex-grow: 1;
    padding: 25px 40px;
    background: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .customer_item {
    text-align: left;
    /*text-align: center;*/
    padding: 0 10px;
    /*width: 16.66667%;*/
    /*max-width: 16.66667%;*/
    /*flex: 0 0 16.66667%;*/

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
    margin-top: 8px;
  }
  .customer_name {
    color: #fff;
    line-height: 32px;
    font-size: 24px;
    /*line-height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;*/
  }
  .el-icon-service {
    color: #fff;
    font-size: 20px;
  }
</style>
