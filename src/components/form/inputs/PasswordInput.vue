<template>
  <ValidationProvider
    rules="required|min:6"
    v-slot="{ errors }"
    mode="eager"
    tag="label"
    :class="baseInput.field"
  >
    <input
      v-model.trim="password"
      :type="currentType"
      placeholder="Введите пароль"
      :class="[
        [baseInput.field_input],
        {
          [baseInput.field_input__error]: errors.length,
        },
      ]"
      @focus.once="handleFocus('passwordHeadline')"
      autocomplete
    />

    <button
      type="button"
      :class="$style.switch"
      @click="currentType = currentType === 'password' ? 'text' : 'password'"
    >
      <div
        v-show="currentType === 'password'"
        :class="[$style.icon, $style.icon__visible]"
      ></div>
      <div
        v-show="currentType === 'text'"
        :class="[$style.icon, $style.icon__hidden]"
      ></div>
    </button>
    <span
      ref="passwordHeadline"
      :class="[
        [baseInput.field_headline],
        { [baseInput.field_headline__error]: errors.length },
      ]"
    >
      Пароль</span
    >
    <transition @before-enter="beforeEnter" @enter="enter">
      <span v-if="errors.length" :class="baseInput.field_errors">{{
        errors[0]
      }}</span>
    </transition>
  </ValidationProvider>
</template>

<script>
import inputMixin from "../../mixins/inputMixin";

export default {
  name: "PasswordInput",
  mixins: [inputMixin],

  data() {
    return {
      password: "",
      currentType: "password",
    };
  },
};
</script>

<style lang="sass" module>
.icon
  width: 24px
  height: 24px
  background-color: $icon-default
  transition: all .3s
  &:hover
    background-color: $text-main
  &__visible
    mask-image: url("@/assets/icons/visibility_grey_24dp.svg")
  &__hidden
    mask-image: url("@/assets/icons/visibility_off_grey_24dp.svg")
.switch
  position: absolute
  top: 50%
  transform: translateY(-50%)
  right: .5em
  display: flex
  align-items: center
  border: 0
  cursor: pointer
  background: transparent
</style>
