import Vue from "vue";
import VueRouter from "vue-router";

import EshopCatalog from "../components/catalog/EshopCatalog";
import EshopCart from "../components/cart/EshopCart";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "catalog",
    component: EshopCatalog,
  },
  {
    path: "/cart",
    name: "cart",
    component: EshopCart,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
