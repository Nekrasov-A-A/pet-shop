<template>
  <div :class="$style.homeWrapper">
    <MainSlider />
  </div>
</template>
<script>
import MainSlider from "../components/slider/MainSlider.vue";

export default {
  name: "HomeView",
  components: { MainSlider },
};
</script>
<style lang="sass" module>
.homeWrapper
  background-color: $main-bg
  overflow: hidden
</style>
