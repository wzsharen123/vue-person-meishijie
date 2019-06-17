<template>
  <header data-am-widget="header" class="am-header am-header-default" style>
    <div class="am-header-left am-header-nav"></div>

    <div class="am-header-title">
      <p class="titile">发现最热门</p>
    </div>

    <div class="am-header-right am-header-nav">
      <a href="#right-link" class>
        <i class="am-header-icon am-icon-minus-square-o"></i>
      </a>
    </div>
  </header>
</template>


<script>
export default {};
</script>

<style lang="less" scope>
.am-header {
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;

  .titile {
    color: #000;
    margin: -10px;
    font-size: 18px;
  }
  .am-header-title {
    width: 70%;
    margin: 0 auto;
    padding-top: 10px;
    input {
      height: 32px;
    }
  }
}
</style>