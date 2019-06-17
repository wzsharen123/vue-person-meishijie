<template>
  <div class="myfood">
    <Myfoodtop/>
    <Myfoodcl1/>
    <Myfoodcl2/>
    <Myfoodcl3/>
  </div>
</template>


<script>
import Myfoodtop from "@/components/myfood/Myfoodtop.vue";
import Myfoodcl1 from "@/components/myfood/Myfoodcl1.vue";
import Myfoodcl2 from "@/components/myfood/Myfoodcl2.vue";
import Myfoodcl3 from "@/components/myfood/Myfoodcl3.vue";
// import MyfoodtopVue from "../components/myfood/Myfoodtop.vue";
export default {
  name: "myfood",
  components: {
    Myfoodtop,
    Myfoodcl1,
    Myfoodcl2,
    Myfoodcl3
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
.myfood {
  background: #f5f5f5;
  padding-bottom: 50px;
}
</style>

