<template>
  <div id="app">
    <component :is="currentLayout">
      <transition mode="out-in" @enter="fadeIn" @leave="fadeOut">
        <router-view />
      </transition>
    </component>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { mapActions, mapGetters } from "vuex";
import DefaultLayout from "./views/layouts/DefaultLayout.vue";
import EmptyLayout from "./views/layouts/EmptyLayout.vue";
import gsap from "gsap";

export default {
  components: { DefaultLayout, EmptyLayout },

  data() {
    return {
      currentLayout: "DefaultLayout",
    };
  },

  computed: {
    ...mapGetters(["isLoggedIn"]),
    someshit() {
      return getAuth().currentUser;
    },
  },

  watch: {
    $route: {
      immediate: true,
      handler(route) {
        this.currentLayout = route.meta.layout || "DefaultLayout";
      },
    },
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
      gsap.fromTo(el, { y: 0 }, { y: "100%" });
    },
    fadeIn(el) {
      gsap.fromTo(el, { y: "100%" }, { y: 0 });
    },
  },
};
</script>
