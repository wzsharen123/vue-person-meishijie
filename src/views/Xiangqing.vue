<template>
  <div>
    <Xiangtop/>
    <Xiangtoutu/>
    <Xiangman/>
    <Xiangbu/>
  </div>
</template>

<script>
import Xiangtop from "@/components/xiangqing/Xiangtop.vue";
import Xiangtoutu from "@/components/xiangqing/Xiangtoutu.vue";
import Xiangman from "@/components/xiangqing/Xiangman.vue";
import Xiangbu from "@/components/xiangqing/Xiangbu.vue";
export default {
  name: "login",
  components: {
    Xiangtop,
    Xiangtoutu,
    Xiangman,
    Xiangbu
  },
  created() {
    this.$store.state.isShowfooter = 0;
  }
};
</script>