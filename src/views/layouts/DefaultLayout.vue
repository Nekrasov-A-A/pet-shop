<template>
  <section>
    <TheHeader />
    <main :class="$style.wrapper">
      <slot></slot>
    </main>
  </section>
</template>

<script>
import TheHeader from "../../components/header/TheHeader.vue";
export default {
  name: "DefaultLayout",
  components: { TheHeader },
};
</script>

<style lang="sass" module>
.wrapper
  background-color: $main-bg
</style>
