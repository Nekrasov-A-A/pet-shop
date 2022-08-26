<template>
  <div :class="$style.notFound">
    <h1 :class="$style.notFound_headline">404</h1>
    <p :class="$style.notFound_text">Страница не найдена</p>
    <button :class="$style.notFound_homeButton">
      <router-link :to="{ name: 'home' }" :class="$style.notFound_homeLink"
        >На главную</router-link
      >
    </button>
  </div>
</template>

<script>
export default {
  name: "NotFoundView",
};
</script>

<style lang="sass" module>
.notFound
  min-height: 100vh
  padding: 0 calc(20px - (100vw - 100%)) 0 0
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  background-color: $main-bg
  &_headline
    font-size: 3em
    font-weight: 800
    color: $headline-color
  &_text
    margin-bottom: 2.75em
    font-weight: 400
  &_homeButton
    padding: 0.75em 1.75em
    border: 0
    border-radius: 8px
    background-color: $elements-bg
    box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6)
    cursor: pointer
    letter-spacing: 1px
    text-transform: uppercase
    &:hover
      transform: scale(0.99)
  &_homeLink
    text-decoration: none
    color: $text-main
</style>
