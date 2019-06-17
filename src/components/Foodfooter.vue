<template>
  <div v-if="isShowfooter" class="bottombar" id="bottombar" style="width: 100%; left: 0px;">
    <a
      v-for="(tabt,index) in tables"
      :key="index"
      @click="totle(index)"
      class="bottombaritem"
      :class="{'bottombaritem_current':tab===index}"
    >
      <img :src="urls(index)">
      {{tabt.name}}
    </a>
    <!-- <router-link to="/" class="bottombaritem bottombaritem_25 bottombaritem_current">
      <img src="https://s1.c.meishij.net/wap7/images/tabbar_01ed@3x.png">推荐
    </router-link>-->
    <!-- <router-link to="/article" class="bottombaritem bottombaritem_25">
      <img src="https://s1.c.meishij.net/wap7/images/tabbar_04@3x.png">文章精选
    </router-link>
    <router-link to="/faxian" class="bottombaritem bottombaritem_25">
      <img src="https://s1.c.meishij.net/wap7/images/tabbar_02@3x.png">发现
    </router-link>
    <router-link to="/myfood" class="bottombaritem bottombaritem_25">
      <img src="https://s1.c.meishij.net/wap7/images/tabbar_05@3x.png">我的
    </router-link>-->
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      tables: [
        {
          name: "推荐",
          url: "https://s1.c.meishij.net/wap7/images/tabbar_01@3x.png",
          newurl: "https://s1.c.meishij.net/wap7/images/tabbar_01ed@3x.png",
          className: "bottombaritem_25",
          root: "home",
          isas: true,
          urls: "https://s1.c.meishij.net/wap7/images/tabbar_01ed@3x.png"
        },
        {
          name: "文章精选",
          url: "https://s1.c.meishij.net/wap7/images/tabbar_04@3x.png",
          newurl: "https://s1.c.meishij.net/wap7/images/tabbar_04ed@3x.png",
          className: "bottombaritem_25",
          root: "article",
          isas: false,
          urls: ""
        },
        {
          name: "发现",
          url: "https://s1.c.meishij.net/wap7/images/tabbar_02@3x.png",
          newurl: "https://s1.c.meishij.net/wap7/images/tabbar_02ed@3x.png",
          className: "bottombaritem_25",
          root: "faxian",

          isas: false,
          urls: ""
        },
        {
          name: "我的",
          url: "https://s1.c.meishij.net/wap7/images/tabbar_05@3x.png",
          newurl: "https://s1.c.meishij.net/wap7/images/tabbar_05ed@3x.png",

          className: "bottombaritem_25",
          root: "myfood",
          isas: false,
          urls: ""
        }
      ],
      tab: 0
    };
  },
  computed: {
    futis() {
      var newarr = [];
      for (var i = 0; i < this.tables.length; i++) {
        this.tables[i].isas = false;

        newarr.push(this.tables[i].url);

        // if (this.tables[tab].isas == true) {
        //   this.tables[tab].url = this.tables[tab].newurl;
        // } else {
        // }
      }

      return newarr;
    },
    isShowfooter() {
      return this.$store.state.isShowfooter;
    }
  },
  methods: {
    totle(tab) {
      console.log(tab);

      this.$router.push({
        name: this.tables[tab].root
      });

      this.tab = tab;

      // console.log(this.futis[tab]);
      // this.tables[tab].url = this.tables[tab].newurl;

      for (let i = 0; i < this.tables.length; i++) {
        this.tables[i].isas = false;

        // if (this.tables[tab].isas == true) {
        //   this.tables[tab].url = this.tables[tab].newurl;
        // } else {
        // }
        // this.tables[i].url = this.futis[i];
      }

      this.tables[tab].isas = true;
    },

    urls(tabs) {
      if (this.tables[tabs].isas === true) {
        this.tables[tabs].urls = this.tables[tabs].newurl;
      } else {
        this.tables[tabs].urls = this.tables[tabs].url;
      }

      return this.tables[tabs].urls;
    }
  }
});
</script>


<style lang="less" scoped>
.bottombar {
  height: 51px;
  width: 100%;
  background: #fefefe;
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 1000;
  border-top: 1px solid #eee;
  font-size: 0px;
  overflow: hidden;
}

.bottombaritem {
  display: inline-block;
  vertical-align: top;
  height: 50px;
  font-size: 10px;
  color: #868686;
  line-height: 14px;
  text-align: center;

  width: 25%;
  text-decoration: none;
}
.bottombaritem.bottombaritem_current {
  color: #ff4c39;
}
.bottombaritem img {
  display: block;
  margin: 3px auto 0px;
  height: 30px;
  width: 30px;
}

.bottombaritem {
  display: inline-block;
  vertical-align: top;
  height: 50px;
  font-size: 10px;
  color: #868686;
  line-height: 14px;
  text-align: center;
}
</style>

