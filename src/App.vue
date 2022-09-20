<template>
  <div id="app">
    <Component :is="this.$route.meta.layoutComponent">
      <transition @enter="fadeIn" @leave="fadeOut">
        <router-view />
      </transition>
    </Component>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { mapActions, mapGetters } from "vuex";
import gsap from "gsap";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },

  created() {
    this.controlAuth();
  },

  methods: {
    ...mapActions(["changeLoggedIn", "changeUserName"]),

    controlAuth() {
      const auth = getAuth();
      this.changeLoggedIn(auth?.currentUser);
      if (this.isLoggedIn) {
        this.changeUserName(auth.currentUser.displayName);
      }
      onAuthStateChanged(auth, () => {
        this.changeLoggedIn(!!auth.currentUser);
        if (this.isLoggedIn) {
          if (auth.currentUser.displayName) {
            this.changeUserName(auth.currentUser.displayName);
          }
        } else {
          this.changeUserName("");
        }
      });
    },

    fadeOut(el) {
      gsap.fromTo(el, { opacity: 0 }, { opacity: 0 });
    },
    fadeIn(el) {
      gsap.fromTo(el, { x: "100%" }, { x: 0 });
    },
  },
};
</script>
