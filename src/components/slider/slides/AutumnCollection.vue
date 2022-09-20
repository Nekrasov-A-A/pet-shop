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
import baseSlideMixin from "../../mixins/slides/baseSlideMixin";
export default {
  name: "AutumnCollection",
  mixins: [baseSlideMixin],
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
  width: 100%
  height: 100%
  align-items: flex-end
  justify-content: flex-start
  padding-bottom: 2rem
  padding-left: 2rem
  @media screen and (max-width: $sm)
    justify-content: center
    padding-bottom: 10%
    background-color: rgba(0,0,0,.2)
</style>
