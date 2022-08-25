import gsap from "gsap";
import { ValidationProvider } from "vee-validate";
import baseInput from "@/components/form/inputs/baseInput.sass";

const inputMixin = {
  components: { ValidationProvider },
  data() {
    return {
      baseInput,
    };
  },
  methods: {
    handleFocus(refName) {
      gsap.from(this.$refs[`${refName}`], {
        opacity: 0,
        x: 24,
      });
      gsap.to(this.$refs[`${refName}`], {
        ease: "power1.out",
        opacity: 1,
        x: 0,
        display: "block",
      });
    },
    beforeEnter(el) {
      gsap.from(el, {
        opacity: 0,
      });
    },
    enter(el) {
      gsap.to(el, {
        ease: "power1.out",
        opacity: 1,
      });
    },
  },
};

export default inputMixin;
