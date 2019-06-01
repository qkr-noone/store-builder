<template>
  <div id="threeD">
    <div class="threeD_box">
      <a class="threeD_link" href="" target="_blank">
        <img src="static/img/tem.jpeg">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  // 3D模块和行业化海报  industry 差不多
  name: 'threeD',
  data () {
    return {
    }
  },
  methods: {
  },
  watch: {
  }
}

</script>
<style lang="" scoped>
  #threeD {
    max-width: 1226px;
    width: 100%;
  }
  .threeD_box {
  }
  .threeD_link {
    background-color: transparent;
  }
  .threeD_link img {
    display: block;
    max-width: 100%;
  }
</style>
