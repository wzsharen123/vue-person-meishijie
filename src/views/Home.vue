<template>
  <div>
    <Foodtop/>
    <Foodlunbo/>
    <Foodmenu/>
    <Fooddaytuijian/>
    <Foodindex/>
  </div>
</template>

<script>
// @ is an alias to /src
import Foodtop from "@/components/Foodtop.vue";
import Foodlunbo from "@/components/Foodlunbo.vue";
import Foodmenu from "@/components/Foodmenu.vue";
import Fooddaytuijian from "@/components/Fooddaytuijian.vue";
import Foodindex from "@/components/Foodindex.vue";
import Foodfooter from "@/components/Foodfooter.vue";

export default {
  name: "home",
  components: {
    Foodtop,
    Foodlunbo,
    Foodmenu,
    Fooddaytuijian,
    Foodindex
  },
  created() {
    this.$store.state.isShowfooter = 1;
  }
};
</script>
