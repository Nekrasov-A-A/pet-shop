import Vue from "vue";
import MiddlewarePlugin from "vue-router-middleware-plugin";
import router from "./index";

Vue.use(MiddlewarePlugin, { router });
