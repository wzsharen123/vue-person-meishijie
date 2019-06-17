<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Foodfooter/>
  </div>
</template>

<script>
// import AmazeVue from "amaze-vue";
import "../node_modules/amazeui/dist/css/amazeui.css";
import jquery from "jquery";
import "../node_modules/amazeui/dist/js/amazeui.min.js";
import Foodfooter from "@/components/Foodfooter.vue";
export default {
  name: "home",
  components: {
    Foodfooter
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
