import baseSlide from "../../slider/slides/baseSlide.module.sass";
import BaseSlide from "../../slider/slides/BaseSlide.vue";
const baseSliderMixin = {
  components: { BaseSlide },
  data() {
    return {
      baseSlide,
    };
  },
};

export default baseSliderMixin;
