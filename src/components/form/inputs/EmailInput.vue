<template>
  <ValidationProvider
    v-slot="{ errors }"
    rules="required|email"
    mode="eager"
    tag="label"
    :class="baseInput.field"
  >
    <input
      v-model.trim="email"
      placeholder="Введите почтовый адрес"
      type="email"
      :class="[
        [baseInput.field_input],
        {
          [baseInput.field_input__error]: errors.length,
        },
      ]"
      @focus.once="handleFocus('emailHeadline')"
      autocomplete
    />
    <span
      ref="emailHeadline"
      :class="[
        [baseInput.field_headline],
        { [baseInput.field_headline__error]: errors.length },
      ]"
    >
      Почтовый адрес</span
    >
    <transition @before-enter="beforeEnter" @enter="enter">
      <span v-if="errors.length" :class="baseInput.field_errors">{{
        errors[0]
      }}</span>
    </transition>
  </ValidationProvider>
</template>
<script>
import inputMixin from "../../mixins/inputMixin";
export default {
  name: "EmailInput",
  mixins: [inputMixin],

  data() {
    return {
      email: "",
    };
  },
};
</script>
