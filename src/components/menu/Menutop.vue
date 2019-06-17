<template>
  <header data-am-widget="header" class="am-header am-header-default" style>
    <div class="am-header-left am-header-nav">
      <a @click="tabs">
        <i class="am-header-icon am-icon-angle-left"></i>
      </a>
    </div>

    <div class="am-header-title">
      <p>
        <input type="text" class="am-form-field am-radius" placeholder="搜索你感兴趣的">
      </p>
    </div>

    <div class="am-header-right am-header-nav">
      <a href="#right-link" class>
        <i class="am-header-icon am-icon-minus-square-o"></i>
      </a>
    </div>
  </header>
</template>


<script>
import Vue from "vue";
export default Vue.extend({
  methods: {
    tabs() {
      this.$router.push({
        name: "home"
      });
    }
  }
});
</script>

<style lang="less" scope>
.am-header {
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
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