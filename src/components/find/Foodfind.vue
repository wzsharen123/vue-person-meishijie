<template>
  <div>
    <div class="tj_w">
      <div class="tj_titlew">
        <div class="tj_title">为你推荐</div>
      </div>
    </div>

    <div id="wz_list">
      <div>
        <a href class="recipeitem" v-for="(item,index) in news" :key="index">
          <div class="recipeitemw">
            <div class="cpimgw" :style="item.url"></div>
            <div class="cpinfow">
              <div class="cpnamew">
                <div class="cpname">{{item.conten}}</div>
              </div>
              <div class="viewdata">
                <img src="https://s1.st.meishij.net/p2/20181214/20181214154020_569.png">
                <span>265285</span>
                <span>2019-04-02</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      news: [
        {
          conten: "比鱼还鲜，比肉还贵，一斤20块，常吃身体好，可惜知道的人不多",
          url:
            "background:#f8f8f8 url(http://site.meishij.net/r/181/118/6092181/a6092181_151454648729767.jpg) center no-repeat;background-size:cover;"
        },
        {
          conten: "女人过了25岁，一周吃一次这个，保证50岁依然肌肤紧致没皱纹",
          url:
            "background:#f8f8f8 url(http://site.meishij.net/r/85/75/10268835/a10268835_151159936896885.jpg) center no-repeat;background-size:cover;"
        },
        {
          conten: "它是“女人美容院”，就算到40岁还是少女脸，女人常吃美容祛斑",
          url:
            "background:#f8f8f8 url(http://s1.st.meishij.net/r/155/126/5469155/a5469155_151679343096989.jpg) center no-repeat;background-size:cover;"
        },
        {
          conten: "再贵都吃这菜，男人补肾益精，女人滋阴养颜，唯独小孩不能吃",
          url:
            "background:#f8f8f8 url(http://site.meishij.net/r/63/134/96063/a96063_149749210185559.jpg) center no-repeat;background-size:cover;"
        },
        {
          conten: "天冷吃一碗，舒筋活络，补气血，老一辈留下来的东西，就是好！",
          url:
            "background:#f8f8f8 url(http://site.meishij.net/r/63/134/96063/a96063_149749210185559.jpg) center no-repeat;background-size:cover;"
        },
        {
          conten: "“西兰花”有人焯水！有人直接炒！大厨老爸这样做，又脆又入味！",
          url:
            "background:#f8f8f8 url(http://site.meishij.net/r/63/180/6482563/a6482563_149434366117707.jpg) center no-repeat;background-size:cover;"
        }
      ]
    };
  }
});
</script>

<style lang="less" scoped>
.tj_w {
  width: 100%;
}
.tj_titlew {
  display: block;
  margin: 30px 15px 10px;
  height: 22px;
}
.tj_title {
  height: 22px;
  color: #333;
  line-height: 22px;
  font-size: 20px;
  display: inline-block;
  border-radius: 11px;
  vertical-align: top;
  font-weight: 900;
}
.recipeitem {
  width: 100%;
  box-sizing: border-box;
  padding: 0px 15px;
  display: block;
}
.recipeitemw {
  width: 100%;
  box-sizing: border-box;
  padding: 12px 114px 12px 0px;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  min-height: 114px;
}
.cpimgw {
  height: 85px;
  width: 114px;
  position: absolute;
  right: 0px;
  top: 12px;
  background: #f8f8f8;
}
.cpinfow {
  padding-right: 15px;
}
.cpinfow .cpnamew {
  padding-top: 0px;
}
.cpinfow .cpname {
  max-height: 85px;
  font-size: 16px;
  color: #333;
  font-weight: 400;
  line-height: 22px;
  padding: 9px 0px;
  box-sizing: border-box;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cpinfow .viewdata {
  height: 16px;
  line-height: 16px;
  margin-top: 0px;
}
.cpinfow .viewdata img {
  display: inline-block;
  vertical-align: top;
  height: 13px;
  width: 13px;
  margin-top: 2px;
}
.cpinfow .viewdata span {
  display: inline-block;
  vertical-align: top;
  font-size: 9px;
  color: #666;
  margin: 0 15px 0 3px;
  font-weight: 400;
}
.cpinfow .viewdata span {
  display: inline-block;
  vertical-align: top;
  font-size: 9px;
  color: #666;
  margin: 0 15px 0 3px;
  font-weight: 400;
}
</style>
