<template>
  <Swiper
    :class="$style.slider"
    class="swiper"
    :options="swiperOptions"
    ref="mainSlider"
  >
    <SwiperSlide
      :class="$style.slide"
      v-for="(item, index) in imagesData"
      :key="item.componentName + index"
    >
      <div
        :class="[
          [$style.slideInner],
          {
            [$style.slideInner__left]: item.imageSide === 'left',
            [$style.slideInner__right]: item.imageSide === 'right',
            [$style.slideInner__center]: item.imageSide === 'center',
          },
        ]"
        :style="{ backgroundImage: `url(${item.imagePath})` }"
      >
        <Component :is="item.slideComponent" />
      </div>
    </SwiperSlide>
    <div
      class="swiper-pagination"
      slot="pagination"
      :class="$style.pagination"
    ></div>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

import "swiper/css/swiper.css";

export default {
  name: "MainSlider",
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      imagesData: [],
      swiperOptions: {
        direction: "vertical",
        spaceBetween: 0,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet(_, className) {
            return `<div class="${className} swiper-pagination-bullet-custom" ></div>`;
          },
        },
        mousewheel: { enabled: true },
        keyboard: { enabled: true },
      },
    };
  },
  created() {
    let images = require.context("../../assets/images/slider", true, /\.jpg$/);
    this.importAll(images);
  },
  methods: {
    importAll(images) {
      images.keys().forEach(async (key) => {
        let componentName = this.getComponentName(key);
        let component = await this.importComponent(componentName);
        let imageSide = this.getImageSide(key);
        let imageData = {
          imagePath: images(key),
          slideComponent: component,
          imageSide,
          componentName,
        };
        this.imagesData.push(imageData);
      });
    },
    getImageSide(key) {
      let value = key.split("-");
      return this.removeImageType(value[3]) || "center";
    },
    getComponentName(key) {
      let value = key.split("-");
      let name =
        this.firstLetterToUpperCase(value[1]) +
        this.firstLetterToUpperCase(this.removeImageType(value[2]));
      return name;
    },
    async importComponent(componentName) {
      let component = await import(`./slides/${componentName}.vue`);
      return component.default;
    },
    firstLetterToUpperCase(string) {
      return string.slice(0, 1).toUpperCase() + string.slice(1);
    },
    removeImageType(string) {
      return string.replace(/.jpg/gi, "");
    },
  },
};
</script>

<style lang="sass" module>
.image
  width: 100%
  height: 100%
.slider
  width: 100vw
  height: 100vh
  overflow: hidden
.slide
  width: 100vw
  height: 100vh
.slideInner
  width: 100%
  height: 100%
  display: flex
  align-items: center
  justify-content: center
  background-repeat: no-repeat
  background-size: cover
  &__left
    background-position: center left
    @media screen and (max-width: $xl)
      background-position: center 10%
    @media screen and (max-width: $sm)
      background-position: 30% 0
  &__right
    background-position: center right
    @media screen and (max-width: $xl)
      background-position: center right 10%
    @media screen and (max-width: $sm)
      background-position: center right 30%
  &__center
    background-position: center center

.pagination
  display: flex
  flex-direction: column
  position: absolute
  top: 50%
  left: 95%
  transform: translateY(-50%)
  background-color: transparent
  @media screen and (max-width: $sm)
    left: 90%
</style>

<style lang="sass">
.swiper-pagination-bullet-custom
  display: flex
  justify-content: center
  align-items: center
  font-size: 0
  background-color: $slider-dots-bg-color
  cursor: pointer
  border-radius: 50%
  margin: 8px 0
  width: 20px
  height: 20px
  opacity: 0.75
  transition: all .3s
  &:hover
    opacity: 1
.swiper-pagination-bullet-active
  height: 45px
  border-radius: 12px
  background-color: $slider-dots-bg-color
  opacity: 1
  &:hover
    background-color: $slider-dots-bg-color
</style>
