<template>
  <div class="zt2017_top">
    <a href="javascript:history.back(-1)" class="btn1">&lt; 美食杰</a>
    <a href class="btn2">菜谱分类 &gt;</a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.zt2017_top {
  height: 45px;
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1000;
}
.zt2017_top .btn1 {
  display: inline-block;
  vertical-align: top;
  height: 30px;
  padding: 0px 12px;
  font-size: 14px;
  color: #fff;
  border-radius: 15px;
  line-height: 30px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 15px;
  top: 15px;
}
.zt2017_top .btn2 {
  display: inline-block;
  vertical-align: top;
  height: 30px;
  padding: 0px 12px;
  font-size: 14px;
  color: #fff;
  border-radius: 15px;
  line-height: 30px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 15px;
  top: 15px;
}
</style>
