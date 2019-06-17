<template>
  <div>
    <Sousuo/>
  </div>
</template>
<script>
import Vue from "vue";
import Sousuo from "@/components/sersh/Sousuo.vue";

export default {
  name: "login",
  components: {
    Sousuo
  },
  created() {
    this.$store.state.isShowfooter = 0;
  }
};
</script>

