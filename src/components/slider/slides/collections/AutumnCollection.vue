<template>
  <section :class="$style.container">
    <BaseSlide>
      <template #headline>Новая коллекция</template>
      <template #paragraph>Осень 2022</template>
      <template #link>
        <div :class="$style.linkContainer">
          <router-link to="/catalog/women" :class="baseSlide.link"
            >Для неё</router-link
          >
          <router-link to="/catalog/men" :class="baseSlide.link"
            >Для него</router-link
          >
        </div>
      </template>
    </BaseSlide>
  </section>
</template>

<script>
import BaseSlide from "../BaseSlide.vue";
import baseSlide from "../base/baseSlide.module.sass";
export default {
  name: "AutumnCollection",
  components: { BaseSlide },
  data() {
    return {
      baseSlide,
    };
  },
};
</script>

<style lang="sass" module>
.linkContainer
  display: flex
  width: 100%
  align-items: center
  justify-content: space-around
  @media screen and (max-width: $sm)
    flex-direction: column
    gap: 16px
.container
  display: flex
  width: 90%
  justify-content: flex-start
  @media screen and (max-width: $xl)
    width: 100%
    height: 100%
    align-items: flex-end
    justify-content: center
  @media screen and (max-width: $sm)
    padding-bottom: 10%
    background-color: rgba(0,0,0,.2)
</style>
