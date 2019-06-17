<template>
  <div>
    <div class="cnxh_title">
      <img src="https://s1.c.meishij.net/wap7/images/home_title_love@3x.png">
      <div class="t">
        <strong>猜你喜欢</strong>
        <br>
        <em>15:13为您更新</em>
      </div>
    </div>

    <div class="cnxh_cplist">
      <a
        v-for="(list,index) in shopList"
        :key="index"
        name="recipe"
        recipe_id="1689829"
        href="javascript:void(0)"
        @click="tiaozhuan"
      >
        <img :src="list.imgUrl">
        <strong>{{list.name}}</strong>
      </a>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import requer from "../lib/requer";
import "../../node_modules/amazeui/dist/css/amazeui.css";

import jquery from "jquery";

import "../../node_modules/amazeui/dist/js/amazeui.min.js";

export default Vue.extend({
  data() {
    return {
      shopList: [],
      timer: null,
      offsetHeight: 0,
      isflas: 0
    };
  },

  created() {
    this.getShopList();
  },

  methods: {
    wmPoiScore(score) {
      return (score / 10).toFixed(1);
    },
    async getShopList() {
      const { gets, posts } = requer;
      const data = await gets({
        url:
          "https://www.easy-mock.com/mock/5cf5c000596281437b1396c5/example/food-index#!method=get"
      });

      console.log(data.data.data.star);
      this.shopList = [...data.data.data.star];
    },
    tiaozhuan() {
      this.$router.push({
        name: "xiangqing"
      });
    }
  }
});
</script>

<style lang="less" scoped>
.cnxh_title {
  height: 30px;
  text-align: center;
  padding: 24px 0px 14px;
}
.cnxh_title img {
  display: inline-block;
  vertical-align: top;
  height: 30px;
  width: 30px;
}
.cnxh_title div {
  display: inline-block;
  vertical-align: top;
  height: 30px;
  padding-left: 4px;
  text-align: left;
}
.cnxh_title div strong {
  font-size: 18px;
  color: #333;
  line-height: 20px;
  margin-top: -1px;
}

element.style {
}
.cnxh_title div {
  display: inline-block;
  vertical-align: top;
  height: 30px;
  padding-left: 4px;
  text-align: left;
}
.cnxh_title div em {
  font-size: 10px;
  color: #999;
  line-height: 12px;
}
.cnxh_cplist {
  width: 93.75%;
  margin: 45px auto;
  font-size: 0px;
  padding-bottom: 2%;
}
.cnxh_cplist a {
  width: 49%;
  margin: 0px 1% 2% 0px;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  border-radius: 2px;
  overflow: hidden;

  position: relative;
  img {
    width: 100%;
  }
}
.cnxh_cplist a:nth-child(2n) {
  margin: 0px 0% 2% 1%;
}
.cnxh_cplist a strong {
  height: 44px;
  padding-top: 12px;
  line-height: 32px;
  font-size: 14px;
  text-align: center;
  color: #fff;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.7);
  text-overflow: ellipsis;
  white-space: nowrap;
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: block;
  width: 100%;
  background: url(https://site.meishij.net/p2/20160308/20160308103254_342.png)
    center no-repeat;
  background-size: 100% auto;
}
</style>

