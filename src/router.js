import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/live",
      name: "live",
      component: () =>
        import(/* webpackChunkName: "live" */ "./views/PageQuestions.vue")
    }
  ]
});
