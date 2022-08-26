import gsap from "gsap";

const authMixin = {
  data() {
    return {
      errorMessage: "",
    };
  },
  methods: {
    shakeStart(el) {
      gsap.from(el, {
        x: 0,
      });
    },
    shakeActive(el) {
      gsap.to(el, {
        x: 10,
        duration: 0.3,
      });
      gsap.to(el, {
        x: -10,
        duration: 0.3,
        delay: 0.3,
      });
      gsap.to(el, {
        x: 0,
        duration: 0.3,
        delay: 0.6,
      });
    },
  },
};

export default authMixin;
