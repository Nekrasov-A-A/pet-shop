<template>
  <header :class="$style.header">
    <AppLoader v-if="loading" />

    <keep-alive>
      <HeaderTools />
    </keep-alive>
  </header>
</template>

<script>
import HeaderTools from "./HeaderTools.vue";
import FirebaseFirestore from "../../firebase/firebase-firestore";
import { computed } from "vue";

export default {
  name: "TheHeader",
  components: { HeaderTools },

  data() {
    return {
      structure: "",
      loading: false,
    };
  },
  provide() {
    return {
      structureMenu: computed(() => this.structure),
    };
  },
  async created() {
    this.loading = true;
    await this.getMenu();
    this.loading = false;
  },
  methods: {
    async getMenu() {
      this.structure = await FirebaseFirestore.getStructureMenu();
    },
  },
};
</script>

<style lang="sass" module>
.header
  position: fixed
  top: 0
  left: 0
  right: 0
  z-index: 100
  background-color: transparentize($elements-bg, .4)
</style>
