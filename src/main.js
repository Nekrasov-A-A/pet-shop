import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./firebase/firebase.config";
import MiddlewarePlugin from "vue-router-middleware-plugin";
import "normalize.css";

Vue.use(MiddlewarePlugin, { router, context: { store } });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
