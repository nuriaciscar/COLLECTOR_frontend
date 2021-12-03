import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/LoginPage.vue";
import DetailCollection from "../views/DetailCollection.vue";
import DetailImage from "../views/DetailImage.vue";
import Profile from "../views/Profile.vue";
import AddCollection from "../views/AddCollection.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/collections",
  },
  {
    path: "/collections",
    name: "Home",
    component: Home,
  },

  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/collections/:id",
    name: "DetailCollection",
    component: DetailCollection,
  },
  {
    path: "/image/:id",
    name: "DetailImage",
    component: DetailImage,
  },

  {
    path: "/user/:id",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/addCollection",
    name: "AddCollection",
    component: AddCollection,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
