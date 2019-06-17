<template>
  <div>
    <div class="my_itemw">
      <a
        href="http://www.duiba.com.cn/autoLogin/autologin?uid=13837097&amp;credits=220&amp;appKey=8V5r5e7XaJ3R2veZQcr5eKq7ZZX&amp;sign=1387384a3b93ec7508eb5bf8369bc24b&amp;timestamp=1560220580000&amp;vip=0"
        class="my_item"
      >
        <img src="https://s1.c.meishij.net/wap7/images/myhome_jifen@3x.png">积分商城
        <span class="red">免费兑换</span>
      </a>
    </div>
    <div class="my_itemw">
      <a href="https://m.meishij.net/html5/message_list.php" class="my_item">
        <img src="https://s1.c.meishij.net/wap7/images/myhome_xiaoxi@3x.png">消息通知
      </a>
    </div>
    <div class="my_itemw">
      <a href="https://m.meishij.net/html5/my_fabu.php" class="my_item">
        <img src="https://s1.c.meishij.net/wap7/images/myhome_fabu@3x.png">我的发布
      </a>
      <a href="https://m.meishij.net/html5/user_shoucang.php?uid=13837097" class="my_item">
        <img src="https://s1.c.meishij.net/wap7/images/myhome_shoucang@3x.png">我的收藏
      </a>
      <a href="http://mshop.meishij.net/wap/tmpl/member/order_list_new.html" class="my_item">
        <img src="https://s1.c.meishij.net/wap7/images/myhome_dingdan@3x.png">我的订单
      </a>
      <a href="https://j.meishi.cc/m/aboutus.html" class="my_item">
        <img src="https://s1.st.meishij.net/p2/20190112/20190112151958_101.png">关于我们
      </a>
      <!-- <a href="" class="my_item"><img src="images/myhome_qingdan@3x.png">买菜清单</a> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.my_itemw {
  margin-bottom: 10px;
  width: 100%;
}
.my_item {
  height: 44px;
  border-bottom: 1px solid #f5f5f5;
  display: block;
  line-height: 44px;
  font-size: 16px;
  color: #333;
  background: #fefefe
    url(../../../public/img/meishitu/ms_publis_recipe_r@3x.png) 96% center
    no-repeat;
  background-size: 6px 10px;
  position: relative;
}
.my_item img {
  display: block;
  height: 27px;
  width: 27px;
  margin: 8px 10px 8px 10px;
  float: left;
}
.my_item .red {
  font-size: 12px;
  color: #ff4c35;
  line-height: 44px;
  position: absolute;
  right: 30px;
  top: 0px;
}
a {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}
a {
  text-decoration: none;
}
.my_item img {
  display: block;
  height: 27px;
  width: 27px;
  margin: 8px 10px 8px 10px;
  float: left;
}
</style>
