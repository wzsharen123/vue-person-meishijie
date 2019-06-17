<template>
  <div class="alls">
    <Menutop/>
    <Menall/>
  </div>
</template>

<script>
import Menutop from "@/components/menu/Menutop.vue";
import Menall from "@/components/menu/Menall.vue";

export default {
  name: "menu",
  components: {
    Menutop,
    Menall
  },
  created() {
    this.$store.state.isShowfooter = 0;
  }
};
</script>

<style lang="less">
.alls {
  position: relative;
}
</style>
