<template>
  <div>
    <Registertop/>
    <Registerman/>
  </div>
</template>

<script>
import Registertop from "@/components/register/Registertop.vue";
import Registerman from "@/components/register/Registerman.vue";
export default {
  name: "login",
  components: {
    Registertop,
    Registerman
  },
  created() {
    this.$store.state.isShowfooter = 0;
  }
};
</script>