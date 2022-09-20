<template>
  <transition-group name="list" tag="ul" :class="$style.list">
    <li
      v-for="({ name, subsections }, index) in structure"
      :key="name + index"
      :class="$style.listItem"
    >
      <transition-group @enter="appearToRigthWithScale">
        <button
          :class="[
            [$style.listItem_button],
            { [$style.listItem_button__active]: selectOpen === name },
          ]"
          @click="setSelectOpen(name)"
          :key="name"
        >
          {{ name }}
          <hr :class="$style.listItem_line" />
        </button>
        <HeaderMenuListSubsection
          v-if="selectOpen === name"
          :subsections="subsections"
          :key="'subsection' + index"
          :ref="name"
        />
      </transition-group>
    </li>
    <li :class="$style.listItem" key="lookbook">
      <router-link :to="{ name: 'lookbook' }" :class="$style.link">
        Lookbook
        <hr :class="$style.linkLine" />
      </router-link>
    </li>
  </transition-group>
</template>

<script>
import gsap from "gsap";
import HeaderMenuListSubsection from "./HeaderMenuListSubsection.vue";
export default {
  name: "HeaderMenuList",
  components: { HeaderMenuListSubsection },
  inject: ["structureMenu"],

  data() {
    return {
      selectOpen: "",
      structure: [...this.structureMenu].reverse(),
    };
  },

  methods: {
    setSelectOpen(selectName) {
      if (this.selectOpen) {
        this.fadeToLeaftWithScale(this.$refs[`${this.selectOpen}`]);
        setTimeout(() => {
          this.selectOpen = this.selectOpen === selectName ? "" : selectName;
        }, 500);
      } else {
        this.selectOpen = selectName;
      }
    },
    appearToRigthWithScale(el) {
      let tl = gsap.timeline();
      tl.from(el, {
        opacity: 0,
        xPercent: -100,
        rotate: 5,
        scale: 0,
        height: 0,
      });

      tl.to(el, {
        opacity: 1,
        xPercent: 0,
        duration: 0.4,
        scale: 1,
        height: "auto",
      });
      tl.to(el, {
        rotate: 0,
        duration: 0.1,
      });
    },
    fadeToLeaftWithScale(el) {
      gsap.from(el[0]?.$el || el.$el, {
        opacity: 1,
        xPercent: 0,
        rotate: 0,
        scale: 1,
        height: "auto",
      });

      gsap.to(el[0]?.$el || el.$el, {
        opacity: 0,
        xPercent: -100,
        scale: 0,
        height: 0,
      });
    },
  },
};
</script>

<style lang="sass" module>
.list
  list-style: none
  padding: 40px 0
  margin: 0 0
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  min-height: 100%
  font-size: 1.5rem
  text-align: center
  transition: all .5s
  margin-right: calc(-1 * (var(--width-value) - 100%))
.listItem
  width: 100%
  transition: all .5s
  &_button
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    width: 100%
    border: 0
    padding: 3px 0
    cursor: pointer
    background-color: transparent
    transition: all .5s
    &:hover .listItem_line
      width: 80%
    &__active .listItem_line
        width: 80%
  &_line
    background-color: $menu-line-color
    color: $menu-line-color
    border: 0
    width: 20%
    height: 3px
    transition: all .3s
    border-radius: 8px
.link, .link:visited
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  padding: 3px 0
  text-decoration: none
  color: $text-main
  &:hover .linkLine
    width: 80%
.linkLine
  @extend .listItem_line
</style>
