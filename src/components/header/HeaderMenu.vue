<template>
  <div>
    <button :class="$style.icon" @click="openMenu">
      <span :class="$style.line"></span>
      <span :class="$style.line"></span>
      <span :class="$style.line"></span>
    </button>
    <transition @enter="setBackground">
      <div
        v-if="isShow"
        :class="$style.wrapper"
        @click.self.once="closeMenu('menu')"
        ref="wrapper"
      >
        <transition appear @enter="appearToRight">
          <div :class="$style.itemList" ref="menu">
            <section :class="$style.menuContent">
              <button :class="$style.iconClose" @click.once="closeMenu('menu')">
                <span :class="$style.cross"></span>
                <span :class="$style.cross"></span>
              </button>
              <slot>Slot</slot>
            </section>
            <div :class="$style.border"></div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import { gsap, Power1, Back } from "gsap";
export default {
  name: "HeaderMenu",
  data() {
    return {
      isShow: false,
    };
  },

  methods: {
    openMenu() {
      this.isShow = true;
    },

    closeMenu(refName) {
      let currentX = gsap.getProperty(this.$refs[`${refName}`], "x");
      this.fadeToLeft(this.$refs[`${refName}`], currentX);
      this.unsetBackground(this.$refs["wrapper"]);
      setTimeout(() => {
        this.isShow = false;
      }, 500);
    },

    setBackground(el) {
      gsap.fromTo(el, { xPercent: -100 }, { xPercent: 0, duration: 0.1 });
    },
    unsetBackground(el) {
      gsap.set(el, { xPercent: -100, delay: 0.25 });
    },
    appearToRight(el) {
      gsap.from(el, {
        x: "-100%",
      });
      gsap.to(el, {
        x: 0,
        ease: Power1.easeOut,
      });
    },

    fadeToLeft(el, xFrom = 0) {
      gsap.from(el, {
        x: xFrom,
      });
      gsap.to(el, {
        x: "-100%",
        ease: Back.easeOut,
        duration: 0.3,
      });
    },
  },
};
</script>

<style lang="sass" module>
.icon
  width: 28px
  height: 28px
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  cursor: pointer
  border: 0
  padding: 0
  background-color: transparent
  &:hover .line
    background-color: $icon-hover
    &:nth-child(odd)
      width: 100%
.line
  display: inline-flex
  width: 100%
  height: 3px
  background-color: $icon-default
  border-radius: 8px
  transition: .3s
  &:nth-child(odd)
    width: 80%
.wrapper
  position: fixed
  overflow: hidden
  z-index: 10
  inset: 0
  background-color: $open-menu-bg
.itemList
  --width-value: 280px
  width: var(--width-value)
  height: 100vh
  display: flex
  justify-content: space-between
  background-color: $elements-bg
  @media screen and (max-width: $sm)
    --width-value: 240px
.menuContent
  width: 100%
  height: 100%
  overflow-y: auto
  overflow-x: hidden
  margin-right: calc(-1 * (var(--width-value) - 100%))
  scrollbar-color: $scrollbar-color $scrollbar-bg
  scrollbar-width: thin
  &::-webkit-scrollbar
    width: 8px
    background-color: $scrollbar-bg
  &::-webkit-scrollbar-thumb
    border-radius: 8px
    background-color: $scrollbar-color
    &:hover
      background-color: darken($scrollbar-color, 20%)
.border
  width: 3px
  height: 100%
  background: linear-gradient(-45deg, #7ceffc -9%, #60efff 100%  )
.iconClose
  position: absolute
  right: 26px
  top: 13px
  width: 32px
  height: 32px
  padding: 0
  border: 2px solid $icon-default
  border-radius: 50%
  background-color: transparent
  cursor: pointer
  transition: all .3s
  &:hover
    border-color:  $icon-hover
  &:hover .cross
    background-color: $icon-hover
.cross
  position: absolute
  top: 50%
  left: 10%
  transform: translateY(-50%)
  display: inline-block
  width: 80%
  height: 2px
  background-color: $icon-default
  transition: all .3s
  &:nth-child(1)
    transform: rotate(-45deg)
  &:nth-child(2)
    transform: rotate(45deg)
</style>
