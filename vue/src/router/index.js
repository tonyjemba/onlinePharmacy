import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Login.vue";
import About from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import DashboardLayout from "../layout/DashboardLayout.vue";
import Main from "../views/Main.vue"; 
import AddMedicine from "../views/AddMedicine.vue";
import MyProfile from "../views/MyProfile.vue";
import AddService from "../views/AddService.vue";


const routes = [
 
  {
    path: "/",
    name: "Home",
    component: Main,
  },
  {
    path:"/dashboard",
    name: "DashboardLayout",
    component: DashboardLayout,
    meta: { authOnly: true },
    children:[
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/addMedicine",
        name: "AddMedicine",
        component: AddMedicine,
      },
      {
        path: "/addService",
        name: "AddService",
        component: AddService,
      },
      {
        path: "/myprofile",
        name: "MyProfile",
        component: MyProfile,
      }
    ]
  },
    {
      path: "/login",
      name: "Login",
      component: Home,
      meta: { guestOnly: true }
    },
    {
      path: "/register",
      name: "Register",
      component: About,
      meta: { guestOnly: true }
    },
  ];

const router = createRouter({
    history: createWebHistory(),
    routes

})


export default router;