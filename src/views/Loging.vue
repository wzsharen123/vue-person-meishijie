<template>
  <div>
    <Logintop/>
    <logingman/>
  </div>
</template>

<script>
import Logintop from "@/components/loging/Logintop.vue";
import logingman from "@/components/loging/logingman.vue";
export default {
  name: "login",
  components: {
    Logintop,
    logingman
  },
  created() {
    this.$store.state.isShowfooter = 0;
  }
};
</script>