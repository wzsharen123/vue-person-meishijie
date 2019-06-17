<template>
  <div class="man1">
    <Foodfaxiantop/>
    <Faxiannav/>
    <Faxianitem/>
  </div>
</template>


<script>
import Foodfaxiantop from "@/components/discover/Foodfaxiantop.vue";
import Faxiannav from "@/components/discover/Faxiannav.vue";

import Faxianitem from "@/components/discover/Faxianitem.vue";
export default {
  name: "faxian",
  components: {
    Foodfaxiantop,
    Faxiannav,
    Faxianitem
  },
  activated() {
    this.$store.state.isShowfooter = 1;
  },
  deactivated() {
    this.$store.state.isShowfooter = 0;
  }
};
</script>

<style lang="less" scoped>
.man1 {
  padding-top: 50px;
  width: 100%;
  max-width: 640px;
  margin: 0px auto;
  background: #f5f5f5;
  box-sizing: border-box;
  padding-bottom: 50px;
}
</style>

