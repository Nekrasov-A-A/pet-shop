<template>
  <nav :class="$style.menu">
    <div @mouseover.once="flipAndBounce">
      <router-link :to="{ name: 'home' }" :class="$style.logo"
        >Sh<span :class="$style.logo_item" ref="specialLetter">o</span
        >p</router-link
      >
    </div>
    <div :class="$style.tools">
      <HeaderMenu> <HeaderMenuList /> </HeaderMenu>
      <router-link :to="{ name: 'personal-account' }" :class="$style.personal">
        <p v-if="isLoggedIn" :class="$style.personal_userName">
          {{ getUserName }}
        </p>
        <div :class="$style.icon"></div>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import gsap from "gsap";
import HeaderMenu from "./HeaderMenu.vue";
import HeaderMenuList from "./HeaderMenuList.vue";
export default {
  name: "HeaderTools",
  components: { HeaderMenu, HeaderMenuList },
  computed: {
    ...mapGetters(["isLoggedIn", "getUserName"]),
  },
  methods: {
    flipAndBounce() {
      let tl = gsap.timeline({ yoyo: true });
      tl.to(this.$refs["specialLetter"], {
        y: "-0.54em",
        duration: 0.4,
      });
      tl.to(
        this.$refs["specialLetter"],
        {
          rotate: 270,
        },
        0.1
      );
      tl.to(this.$refs["specialLetter"], {
        y: 0,
        ease: "power1.in",
        duration: 0.2,
      });
    },
  },
};
</script>

<style lang="sass" module>
.menu
  display: flex
  justify-content: space-between
  align-items: center
  padding: 12px 24px
  @media screen and (max-width: 600px)
    padding: 12px
.tools
  display: flex
  align-items: center
.logo
  font-family: "Coda"
  font-size: 1.75em
  letter-spacing: 1px
  cursor: pointer
  color: $headline-color
  text-decoration: none
  &_item
    display: inline-block
    font-family: "Coda"
    font-size: 1em
    letter-spacing: 1px
    cursor: pointer
    color: $text-special-color
.personal
  display: flex
  align-items: center
  text-decoration: none
  &:hover .icon
    background-color: $text-main
  &_userName
    color: $text-main
.icon
  width: 40px
  height: 40px
  background-color: $icon-default
  transition: all .3s
  cursor: pointer
  mask-image: url("@/assets/icons/person_FILL1_wght200_GRAD0_opsz40.svg")
</style>
