<template>
  <div :class="$style.wrapper">
    <h2 :class="$style.headline" :style="{ color: headlineColor }">
      <slot name="headline"></slot>
    </h2>
    <div :class="$style.paragraph" :style="{ color: paragraphColor }">
      <slot name="paragraph"></slot>
    </div>
    <div :class="$style.linkWrapper">
      <slot name="link"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSlide",
  props: {
    headlineColor: {
      type: String,
      default: "hsla(186, 100%, 69%,.8)",
    },
    paragraphColor: {
      type: String,
      default: "hsl(0,0%,100%)",
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
  padding: 1em
  border-radius: 12px
.headline
  font-size: 4.5rem
  color: darken($slider-text-special-color, 10%)
  margin: 0
  margin-bottom: 2rem
  cursor: default
  text-align: center
  @media screen and (max-width: $sm)
    font-size: 3.3rem
.paragraph
  font-size: 2rem
  color: $slider-text-paragraph-color
  margin-bottom: 3.5rem
  cursor: default
.linkWrapper
  width: 100%
  display: flex
  align-items: center
  justify-content: center
</style>
