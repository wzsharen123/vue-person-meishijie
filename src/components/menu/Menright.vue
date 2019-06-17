<template>
  <div class="con_inner">
    <ul>
      <li>
        <a href="https://m.meishij.net/fenlei/kuaishoucai/">
          <img class src="http://static.meishij.net/images/get3/fenlei/fl_shiyongfenlei_1.png">
          <span class>快手菜</span>
        </a>
      </li>

      <li>
        <a href="https://m.meishij.net/fenlei/xiafancai/">
          <img class src="http://static.meishij.net/images/get3/fenlei/fl_shiyongfenlei_2.png">
          <span class>下饭菜</span>
        </a>
      </li>

      <li>
        <a href="https://m.meishij.net/fenlei/yingjishishu/">
          <img class src="http://static.meishij.net/images/get3/fenlei/fl_shiyongfenlei_3.png">
          <span class>应季时蔬</span>
        </a>
      </li>

      <li>
        <a href="https://m.meishij.net/fenlei/sushi/">
          <img class src="http://static.meishij.net/images/get3/fenlei/fl_shiyongfenlei_4.png">
          <span class>素食</span>
        </a>
      </li>

      <li>
        <a href="https://m.meishij.net/fenlei/roushi/">
          <img class src="http://static.meishij.net/images/get3/fenlei/fl_shiyongfenlei_5.png">
          <span class>肉食</span>
        </a>
      </li>

      <li>
        <a href="https://m.meishij.net/fenlei/tang/">
          <img class src="http://static.meishij.net/images/get3/fenlei/fl_shiyongfenlei_6.png">
          <span class>汤</span>
        </a>
      </li>

      <li>
        <a href="https://m.meishij.net/fenlei/jiachangcai/">
          <img class src="https://s1.c.meishij.net/zt/images/fenlei_xihongshichaojidan1.png">
          <span class>家常菜</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.con_inner {
  // float: left;
  margin-left: 100px;
  // height: 100%;
  float: right;
  position: absolute;
  right: 0;
  top: 50px;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.con_inner ul {
  width: 100%;
  font-size: 0;
  position: relative;
  height: 100%;
  overflow: scroll;
}
.con_inner ul {
  width: 100%;
  font-size: 0;
  position: relative;
  height: 100%;
  overflow: scroll;
}
.con_inner ul li {
  width: 33%;
  display: inline-block;
  vertical-align: top;
  padding: 10px;
  box-sizing: border-box;
}
.con_inner ul li a {
  display: block;
  width: 100%;
}
.con_inner ul li img {
  display: block;
  width: 100%;
}
.con_inner ul li span {
  font-size: 12px;
  line-height: 24px;
  display: block;
  text-align: center;
  color: #000;
}
</style>
