<template>
  <div id="live">
    <div class="live_box">
      <a class="live_link" href="" target="_blank">
        <img src="static/img/tem.jpeg">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  // 直播模块和行业化海报  industry 差不多
  name: 'live',
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
  #live {
    max-width: 1226px;
    width: 100%;
  }
  .live_box {
  }
  .live_link {
    background-color: transparent;
  }
  .live_link img {
    display: block;
    max-width: 100%;
  }
</style>
