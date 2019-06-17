<template>
  <div>
    <h2 class="i_t_h2">今日推荐</h2>
    <div class="i_ztw">
      <a href="###">
        <img src="../../public/img/meishitu/qiezi.jpg">
      </a>
      <a href="###">
        <img src="../../public/img/meishitu/zongzi.jpg">
      </a>
      <a href="###">
        <img src="../../public/img/meishitu/zhujiao.jpg">
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="less">
.i_t_h2 {
  width: 100%;
  color: #333;
  font-size: 18px;
  line-height: 40px;
  padding-top: 14px;
  text-align: center;
  font-weight: normal;
}
.i_ztw {
  width: 93.75%;
  margin: 0px auto;
}
.i_ztw a {
  display: block;
  margin-bottom: 3%;
  width: 100%;
  padding-top: 44%;
  position: relative;
  overflow: hidden;
}
.i_ztw a img {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
}
</style>