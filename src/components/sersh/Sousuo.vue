<template>
  <div class="main">
    <div class="wap2017_topsearch">
      <div class="wap2017_topsearch_c hasbb1">
        <a href="javascript:history.go(-1);" class="back"></a>
        <div class="wap2017_topsearch_cw">
          <form action>
            <input type="text" placeholder="菜谱名、食材名" value name="q">
            <input type="submit" value="搜索">
          </form>
        </div>
      </div>
    </div>
    <div class="wap2017_cplist">
      <ul class="wap2017_cplist_ul">
        <p class="cplist_loadmorebtn">请输入要搜索的关键字</p>
        <p></p>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {};
</script>

<style scoped>
.main {
  width: 100%;
  position: relative;
  background: #f6f6f6;
}
.wap2017_topsearch {
  height: 44px;
  width: 100%;
}
.wap2017_topsearch_c {
  height: 44px;
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  background: #fff;
  z-index: 400;
}
.wap2017_topsearch_c .back {
  height: 44px;
  width: 60px;
  background: url(/img/meishitu/wap2017icons1.png?v=2) -160px 0px no-repeat;
  background-size: 400px 400px;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 100;
}
.wap2017_topsearch_cw {
  height: 44px;
  padding: 6px 75px 6px 60px;
  box-sizing: border-box;
  width: 100%;
}
input,
select,
textarea {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-appearance: none;
  border: 0;
  border-radius: 0;
}
.wap2017_topsearch_cw input[type="text"] {
  height: 32px;
  background: #eee;
  border-radius: 2px;
  color: #333;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  display: block;
  padding: 4px 8px;
  line-height: 24px;
}
.wap2017_topsearch_cw input[type="submit"] {
  height: 32px;
  background: #ff4c39;
  border-radius: 2px;
  color: #fff;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  display: block;
  line-height: 32px;
  text-align: center;
  position: absolute;
  right: 15px;
  top: 6px;
  width: 55px;
}
.hasbb1:after {
  content: " ";
  width: 200%;
  height: 1px;
  background: #e2e2e2;
  position: absolute;
  left: -50%;
  bottom: 0px;
  transform: scale(0.5);
  -webkit-transform: scale(0.5);
}
.wap2017_cplist {
  background: #fff;
}
ol,
ul {
  list-style: none;
}
.cplist_loadmorebtn {
  height: 64px;
  font-size: 16px;
  color: #666;
  line-height: 64px;
  text-align: center;
  display: block;
}
</style>
