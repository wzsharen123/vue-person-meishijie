<template>
  <div>
    <Menleft/>
    <Menright/>
  </div>
</template>

<script>
import Menleft from "@/components/menu/Menleft.vue";
import Menright from "@/components/menu/Menright.vue";
export default {
  name: "menu",
  components: {
    Menleft,
    Menright
  }
};
</script>