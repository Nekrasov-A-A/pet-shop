import { min, required, email } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("min", {
  ...min,
  message: "Не меньше {length} символов",
});

extend("required", {
  ...required,
  message: "Это поле обязательно к заполнению",
});

extend("email", {
  ...email,
  message: "Некорректный email",
});
