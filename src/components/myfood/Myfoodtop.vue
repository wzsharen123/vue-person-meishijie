<template>
  <div>
    <div class="my_top">
      <div class="my_top_c">
        <a @click="elelcie" class="a1">
          <img src="https://s1.c.meishij.net/images/default/tx2_3.png">
          <div class="c">
            <strong>杰米5619379454</strong>
            <span>正在通往美食达人的路上...</span>
          </div>
        </a>
        <a href class="a2">
          <span>美食杰DNA 0条 &gt;</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  methods: {
    elelcie() {
      this.$router.push({
        name: "login"
      });
    }
  }
});
</script>


<style lang="less" scoped>
.my_top {
  width: 100%;
  padding-top: 40%;
  background: url(../../../public/img/meishitu/home_bgOnline@3x.png) center
    no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.my_top_c {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
}
.my_top_c .a1 {
  width: 80%;
  margin: 5% auto 0px;
  display: block;
  position: relative;
}
.my_top_c .a1 img {
  display: block;
  height: 66px;
  width: 66px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-radius: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
}
.my_top_c .a1 .c {
  height: 72px;
  width: 100%;
  padding-left: 80px;
  box-sizing: border-box;
}
.my_top_c .a1 .c strong {
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-top: 12px;
}
.my_top_c .a1 .c span {
  color: #fff;
  font-size: 12px;
  line-height: 24px;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.my_top_c .a2 {
  width: 80%;
  margin: 0px auto 0px;
  display: block;
  position: relative;
  padding-left: 80px;
  box-sizing: border-box;
}
.my_top_c .a2 span {
  height: 24px;
  line-height: 22px;
  border-radius: 16px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  padding: 0px 12px;
}
</style>
