<template>
  <transition-group name="list" tag="ul" :class="$style.list">
    <li
      v-for="({ subsection, categories }, index) in subsections"
      :key="subsection"
      :class="$style.listItem"
    >
      <transition-group @enter="appearToRigthWithScale" :class="$style.wrapper">
        <button
          :class="[
            [$style.button],
            { [$style.button__active]: selected === subsection },
          ]"
          :key="index + 'btn'"
          @click="setSelected(subsection)"
        >
          {{ subsection }}
          <span
            v-for="n in 2"
            :key="n + 'span'"
            :data-index="n"
            :class="$style.span"
          ></span>
        </button>
        <ul
          v-if="selected === subsection"
          :class="$style.categoriesList"
          :key="index + 'subul'"
          :ref="subsection"
        >
          <li
            v-for="category in categories"
            :key="category.name"
            :class="$style.categoriesItem"
          >
            <router-link
              :to="`/catalog/${category.path}`"
              :class="$style.categoryLink"
            >
              {{ category.name }}
              <hr :class="$style.categoryLine" />
            </router-link>
          </li>
        </ul>
      </transition-group>
    </li>
  </transition-group>
</template>

<script>
import gsap from "gsap";
export default {
  name: "HeaderMenuListSubsection",
  props: {
    subsections: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    setSelected(selectName) {
      if (this.selected) {
        this.fadeToLeaftWithScale(this.$refs[`${this.selected}`]);
        setTimeout(() => {
          this.selected = this.selected === selectName ? "" : selectName;
        }, 500);
      } else {
        this.selected = selectName;
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
      gsap.from(el, {
        opacity: 1,
        xPercent: 0,
        rotate: 0,
        scale: 1,
        height: "auto",
      });

      gsap.to(el, {
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
.wrapper
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  width: 100%
.list
  list-style: none
  padding: 0
  margin: 0
  font-size: 1.25rem
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
.listItem
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  width: 100%
  margin-bottom: 1em
.button
  position: relative
  border: 0
  background-color: transparent
  display: flex
  align-items: center
  justify-content: center
  padding: calc(1em / 2) 0
  width: 80%
  cursor: pointer
  &:hover .span
    height: 100%
  &__active .span
    height: 100%
.span
  position: absolute
  display: inline-flex
  width: 2px
  height: 40%
  top: 50%
  transform: translateY(-50%)
  transition: all .3s
  background-color: $border-special-color
  border-radius: 8px
  &:nth-child(1)
    left: 0
  &:nth-child(2)
    right: 0
.categoriesList
  list-style: none
  padding: 0
  margin: 0
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  width: 100%
  font-size: 1.1rem
.categoriesItem
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  width: 80%
  margin: calc(1em/2) 0
  cursor: pointer
  &:first-child
    margin-top: 1.25rem
  &:last-child
    margin-bottom: 0
  &:hover .categoryLine
    width: 80%
.categoryLink, .categoryLink:visited
  text-decoration: none
  color: $text-main
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
.categoryLine, .categoryLink:visited .categoryLine
  padding: 0
  border: 0
  margin: 0
  width: 30px
  height: 2px
  background-color: $menu-line-color
  color: $menu-line-color
  transition: all .3s
</style>
