<template>
  <div>
    <button :class="$style.signout" @click="handleClick">SIGNOUT</button>
  </div>
</template>

<script>
import FirebaseAuth from "../firebase/firebase-auth";
export default {
  name: "PersonalAccountView",

  methods: {
    async handleClick() {
      await FirebaseAuth.signOutUser();
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="sass" module>
.signout
  padding: 2em
</style>
