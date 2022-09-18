<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form
      :class="$style.form"
      @submit.prevent="handleSubmit(onSubmit)"
      novalidate
    >
      <h3 :class="$style.form_headline">{{ headline }}</h3>
      <TextInput
        v-model="name"
        placeholder="Как к вам обращаться?"
        headline="Имя пользователя"
      />
      <EmailInput v-model="email" />
      <PasswordInput v-model="password" />
      <button :class="$style.form_submit">
        <slot>submit</slot>
      </button>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import "./rules";
import PasswordInput from "./inputs/PasswordInput.vue";
import EmailInput from "./inputs/EmailInput.vue";
import TextInput from "./inputs/TextInput.vue";
export default {
  name: "LoginForm",
  components: { ValidationObserver, PasswordInput, EmailInput, TextInput },
  props: {
    headline: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      currentType: "password",
      email: "",
      password: "",
      name: "",
    };
  },

  methods: {
    onSubmit() {
      this.$emit("formAction", this.email, this.password, this.name);
    },
  },
};
</script>

<style lang="sass" module>
.form
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  background-color: $main-bg
  &_headline
    font-weight: 800
    color: $headline-color
    font-size: 1.25em
  &_submit
    padding: 1em 3em
    border: 1px solid transparent
    border-radius: 8px
    box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6)
    cursor: pointer
    background-color: $elements-bg
    color: $text-main
    text-transform: uppercase
    letter-spacing: 1px
    &:hover
      transform: scale(0.99)
</style>
