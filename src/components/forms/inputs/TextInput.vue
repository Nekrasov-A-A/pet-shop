<template>
  <ValidationProvider
    v-slot="{ errors }"
    rules="required"
    mode="eager"
    tag="label"
    :class="baseInput.field"
  >
    <input
      :value="value"
      :placeholder="placeholder"
      type="text"
      :class="[
        [baseInput.field_input],
        {
          [baseInput.field_input__error]: errors.length,
        },
      ]"
      @focus.once="handleFocus('textHeadline')"
      @input="$emit('input', $event.target.value)"
      autocomplete
    />
    <span
      ref="textHeadline"
      :class="[
        [baseInput.field_headline],
        { [baseInput.field_headline__error]: errors.length },
      ]"
    >
      {{ headline }}</span
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

  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    headline: {
      type: String,
      required: true,
    },
  },
};
</script>
