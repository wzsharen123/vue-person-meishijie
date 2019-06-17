<template>
  <div class="topbar" id="topbar" style="width: 100%; left: 0px;">
    <div id="allmap" style="display:none;"></div>
    <input type="hidden" name="lat" value class="lat">
    <input type="hidden" name="lon" value class="lon">
    <div class="searchbar_index">
      <a href="javascript:void(0)" class="topsearch" @click="serch">
        <img src>搜索你感兴趣的
      </a>
      <a href="javascript:void(0);" class="topbar_photo_btn" id="topbar_photo_btn"></a>
      <a href class="topbar_mes_btn">
        <!--<span class="topbar_mes_btn_newtip">33</span>-->
      </a>
      <div class="topbar_box" id="topbar_box">
        <span class="arrow"></span>
        <ul>
          <li>
            <a href>
              <img src="https://s1.c.meishij.net/wap7/images/sys_pic@3x.png">晒作品
            </a>
          </li>
          <li>
            <a href>
              <img src="https://s1.c.meishij.net/wap7/images/sys_sc@3x.png">传菜谱
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
export default Vue.extend({
  methods: {
    serch() {
      this.$router.push({
        name: "serch"
      });
    }
  }
});
</script>

<style scope>
.topbar {
  height: 44px;
  width: 100%;
  background: #fefefe;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
  text-align: center;
}
.searchbar_index {
  height: 44px;
  width: 100%;
}
.topsearch {
  height: 32px;
  border-radius: 2px;
  background: #f5f5f5;
  line-height: 32px;
  margin: 0px 52px;
  color: #aaa;
  font-size: 14px;
  text-align: center;
  display: block;
  position: relative;
  top: 6px;
}
.topsearch img {
  display: inline-block;
  vertical-align: top;
  height: 14px;
  width: 14px;
  margin: 9px 4px 0px 0px;
}
.topbar_photo_btn {
  height: 44px;
  width: 52px;
  position: absolute;
  left: 0px;
  top: 0px;
  background: url(/img/meishitu/index_icon_photo@3x.png) center no-repeat;
  background-size: 52px 44px;
}
.topbar_mes_btn {
  height: 44px;
  width: 52px;
  position: absolute;
  right: 0px;
  top: 0px;
  background: url(/img/meishitu/ms_mail2@3x.png) center no-repeat;
  background-size: 52px 44px;
}
.topbar_box {
  position: absolute;
  top: 44px;
  left: 10px;
  border-radius: 4px;
  display: block;
  display: none;
}
.topbar_box .arrow {
  position: absolute;
  top: 0px;
  left: 10px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 7px solid #333;
}
.topbar_box ul {
  margin-top: 7px;
  border-radius: 4px;
  background: #333;
}
.topbar_box ul li {
  height: 48px;
  line-height: 48px;
  color: #fff;
  font-size: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-right: 16px;
}
.topbar_box ul li a {
  color: #fff;
  display: block;
  width: auto !important;
  height: auto !important;
  position: static !important;
}
.topbar_box ul li img {
  height: 30px;
  width: 30px;
  display: block;
  margin: 9px 4px 9px 6px;
  display: inline-block;
  vertical-align: top;
}
</style>