import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import { routes } from "./routes";
import VueTour from "vue-tour";
import { store } from "./store/store";
import cors from "cors";
require("vue-tour/dist/vue-tour.css");

import Tabs from "vue-tabs-component";
Vue.use(Tabs);

import VueSocialSharing from "vue-social-sharing";
Vue.use(VueSocialSharing);

Vue.config.productionTip = false;
Vue.use(VueRouter);

Vue.use(VueTour);
Vue.use(cors);

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      console.log(savedPosition);
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
  //   beforeMount() {
  //     window.addEventListener("beforeunload", this.preventNav);
  //     this.$once("hook:beforeDestroy", () => {
  //         window.removeEventListener("beforeunload", this.preventNav);
  //     });
  // },
  // beforeRouteLeave(to, from, next) {
  //     if (window.confirm("Are you sure you want to leave?")) {
  //         return
  //     }
  //     next();
  // },
  // methods: {
  //     preventNav(event) {
  //         event.preventDefault();
  //         event.returnValue = "";
  //     }
  // }
}).$mount("#app");
