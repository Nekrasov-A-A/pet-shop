import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./firebase/firebase.config";
import MiddlewarePlugin from "vue-router-middleware-plugin";
import layoutMiddleware from "./router/middleware/layoutMiddleware";
import AppLoader from "./components/AppLoader.vue";
import "normalize.css";

Vue.component("AppLoader", AppLoader);
Vue.use(MiddlewarePlugin, {
  router,
  context: { store },
  middleware: layoutMiddleware,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
