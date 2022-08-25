<template>
  <div :class="$style.register">
    <BaseForm
      headline="Форма регистрации"
      :class="$style.register_form"
      @formAction="handleRegister"
      >Регистрация</BaseForm
    >
    <p v-show="errorMessage" :class="$style.register_error">
      {{ errorMessage }}
    </p>
    <p :class="$style.register_text">
      Уже есть аккаунт?
      <router-link :to="{ name: 'login' }" :class="$style.register_link"
        >Войти в систему</router-link
      >
    </p>
  </div>
</template>

<script>
import BaseForm from "../components/form/BaseForm.vue";
import FirebaseAuth from "../firebase/firebase-auth";

export default {
  name: "RegisterView",
  components: { BaseForm },

  data() {
    return {
      errorMessage: "",
    };
  },

  methods: {
    async handleRegister(email, password) {
      try {
        await FirebaseAuth.createUser(email, password);
        this.$router.replace({ name: "home" });
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
  },
};
</script>

<style lang="sass" module>
.register
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  background-color: $main-bg
  @media screen and (max-width: 430px)
    padding: 0 5%
  &_form
    width: 400px
    margin-bottom: 1em
    @media screen and (max-width: 430px)
      width: 100%
  &_text
    font-weight: 400
    @media screen and (max-width: 340px)
      margin-bottom: 0.75em
  &_link
    font-weight: 800
    text-decoration: none
    color: $text-main
    @media screen and (max-width: 340px)
      display: block
  &_error
    color: $error
</style>
