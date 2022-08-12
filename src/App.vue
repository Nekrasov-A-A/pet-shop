<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    this.controlAuth();
  },
  methods: {
    ...mapActions(["changeLoggedIn"]),
    controlAuth() {
      const auth = getAuth();
      this.changeLoggedIn(auth);
      onAuthStateChanged(auth, () => {
        this.changeLoggedIn(!!auth.currentUser);
      });
    },
  },
};
</script>
