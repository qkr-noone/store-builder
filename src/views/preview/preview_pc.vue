<template>
  <div class="preview_pc">
    <pingpuP></pingpuP>
    <div style="width: 1226px; margin: 0 auto; display: flex; justify-content: space-between; align-items: flex-start;"><pingpuN></pingpuN><pingpuW></pingpuW></div>
    <chuchuangP></chuchuangP>
    <chuchuangW></chuchuangW>
    <daileimuP></daileimuP>
    <zhongdiantuijianP></zhongdiantuijianP>
    <danpinP></danpinP>
    <zhuyingleimuP></zhuyingleimuP>
    <chanpinfenleiN></chanpinfenleiN>
    <industry></industry>
    <fullScreen></fullScreen>
    <banner></banner>
    <dynamic></dynamic>
    <live></live>
    <threeD></threeD>
  </div>
</template>

<script>
import pingpuP from '@/components/goods/pingpu_p'
import pingpuW from '@/components/goods/pingpu_w'
import pingpuN from '@/components/goods/pingpu_n'
import chuchuangP from '@/components/goods/chuchuang_p'
import chuchuangW from '@/components/goods/chuchuang_w'
import daileimuP from '@/components/goods/daileimu_p'
// 智能产品与重点推荐一样布局
import zhongdiantuijianP from '@/components/goods/zhongdiantuijian_p'
import danpinP from '@/components/goods/danpin_p'
import zhuyingleimuP from '@/components/goods/zhuyingleimu_p'
import chanpinfenleiN from '@/components/goods/chanpinfenlei_n'
import industry from '@/components/picWord/industry'
import fullScreen from '@/components/picWord/fullScreen'
import banner from '@/components/picWord/banner'
import dynamic from '@/components/video/dynamic'
import live from '@/components/video/live'
import threeD from '@/components/video/3D'

export default {
  data () {
    return {}
  },
  components: { pingpuP, pingpuW, pingpuN, chuchuangP, chuchuangW, daileimuP, zhongdiantuijianP, danpinP, zhuyingleimuP, chanpinfenleiN, industry, fullScreen, banner, dynamic, live, threeD }
}
</script>

<style lang="scss" scoped>
.preview_pc {
  margin-bottom: 50px;
  overflow-x: hidden;
  &>:nth-child(n) {
    margin: 0 auto !important;
    margin-bottom: 20px !important;
  }
}
</style>
