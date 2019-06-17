<template>
  <div class="searchbar_mall">
    <h1>登录美食杰</h1>
    <a
      href="javascript:(history.go( /http:\/\/(mshop.meishi|shopapi.meishi)/.test(document.referrer) ? -2 : -1 ));"
      class="topbar_back"
    >返回</a>
    <a @click="register" class="topbar_rightbtn">注册</a>
  </div>
</template>


<script>
import Vue from "vue";
export default Vue.extend({
  methods: {
    register() {
      this.$router.push({
        name: "register"
      });
    }
  }
});
</script>


<style lang="less" scoped>
.searchbar_mall {
  height: 50px;
  background: #fdfdfd;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  z-index: 9999;
}
.searchbar_mall h1 {
  font-size: 18px;
  color: #000;
  line-height: 50px;
  text-align: center;
}
.topbar_back {
  height: 50px;
  position: absolute;
  left: 0px;
  top: 0px;
  line-height: 50px;
  padding-left: 35px;
  //background: url(../images/back_icon.png) 16px center no-repeat;
  background-size: 19px 44px;
  color: #ff5151;
  font-size: 16px;
}
.topbar_rightbtn {
  height: 50px;
  line-height: 50px;
  padding: 0px 16px;
  position: absolute;
  right: 0px;
  top: 0px;
  color: #ff5151;
  font-size: 16px;
}
</style>
