<template>
  <ul class="am-avg-sm-4 am-thumbnails">
    <li>
      <a class="click_url" @click="metfenlei">菜谱分类</a>
    </li>
    <li>
      <a class="click_url2" href="###">视频菜谱</a>
    </li>
    <li>
      <a class="click_url3" href="###">早餐</a>
    </li>
    <li>
      <a class="click_url4" href="###">附近</a>
    </li>
  </ul>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  methods: {
    metfenlei() {
      this.$router.push({
        name: "menu"
      });
    }
  },
  // mounted() {
  //   // console.log(666);
  //   // this.$store.state.isShowfooter = 0;
  // },
  // destroyed() {
  //   // console.log(555);
  //   // this.$store.state.isShowfooter = 1;
  // },
  activated() {
    this.$store.state.isShowfooter = 1;
  },
  deactivated() {
    this.$store.state.isShowfooter = 0;
  }
});
</script>

<style lang="less" scope>
.am-thumbnails {
  margin-left: 0;
  margin-right: 0;
}
.am-thumbnails li a {
  display: inline-block;
  vertical-align: top;
  padding-top: 60%;
  margin: 0px 3%;
  line-height: 32px;
  font-size: 12px;
  color: #333;
  text-align: center;
  box-sizing: border-box;
  width: 48px;

  background-size: 100% auto;
}
.am-thumbnails li .click_url {
  background: url("../../public/img/meishitu/quanbunew.png") center top
    no-repeat;
  background-size: 100% auto;
}
.am-thumbnails li .click_url2 {
  background: url("../../public/img/meishitu/shipincaipunew.png") center top
    no-repeat;
  background-size: 100% auto;
}
.am-thumbnails li .click_url3 {
  background: url("../../public/img/meishitu/kuaishoucainew.png") center top
    no-repeat;
  background-size: 100% auto;
}
.am-thumbnails li .click_url4 {
  background: url("../../public/img/meishitu/fujinnew.png") center top no-repeat;
  background-size: 100% auto;
}
</style>

