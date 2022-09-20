<template>
  <section :class="[[baseSlide.container], [baseSlide.container__right]]">
    <BaseSlide>
      <template #headline>-10%</template>
      <template #paragraph>
        <div :class="baseSlide.paragraphWrapper">
          Скидка на<span> верхнюю одежду</span>
        </div>
      </template>
      <template #link>
        <router-link to="/catalog/men" :class="baseSlide.link">
          Для него
        </router-link>
      </template>
    </BaseSlide>
  </section>
</template>

<script>
import baseSlideMixin from "../../mixins/slides/baseSlideMixin";
export default {
  name: "SlideMen",
  mixins: [baseSlideMixin],
};
</script>
