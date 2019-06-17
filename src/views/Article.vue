<template>
  <div class="article">
    <Foodfind/>
  </div>
</template>

<script>
import Foodfind from "@/components/find/Foodfind.vue";
export default {
  name: "find",
  components: {
    Foodfind
  },
  activated() {
    this.$store.state.isShowfooter = 1;
  },
  deactivated() {
    this.$store.state.isShowfooter = 0;
  }
};
</script>
