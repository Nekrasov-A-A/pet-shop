<template>
  <div :class="$style.loginPage">
    <LoginForm
      headline="Форма входа"
      :class="$style.loginPage_form"
      @formAction="handleLogin"
      >Войти в систему</LoginForm
    >
    <transition @before-enter="shakeStart" @enter="shakeActive">
      <p v-if="errorMessage" :class="$style.loginPage_error">
        {{ errorMessage }}
      </p>
    </transition>
    <p :class="$style.loginPage_text">
      Нет аккаунта?
      <router-link :to="{ name: 'register' }" :class="$style.loginPage_link"
        >Регистрация</router-link
      >
    </p>
  </div>
</template>

<script>
import FirebaseAuth from "../firebase/firebase-auth";
import formsMixin from "@/components/mixins/formsMixin.js";
import LoginForm from "../components/forms/LoginForm.vue";
export default {
  name: "LoginView",
  components: { LoginForm },
  mixins: [formsMixin],
  methods: {
    async handleLogin(email, password) {
      try {
        await FirebaseAuth.loginUser(email, password);
        this.$router.replace({ name: "home" });
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
  },
};
</script>
<style lang="sass" module>
.loginPage
  min-height: 100vh
  padding: 0 calc(20px - (100vw - 100%)) 0 0
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
