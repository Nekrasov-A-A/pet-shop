<template>
  <section :class="$style.loader">Loading...</section>
</template>

<script>
export default {
  name: "AppLoader",
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>

<style lang="sass" module>
.loader
  position: absolute
  width: 100vw
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  z-index: 599
  background-color: #fff
</style>
