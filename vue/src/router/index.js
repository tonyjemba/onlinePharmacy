import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Login.vue";
import About from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import DashboardLayout from "../layout/DashboardLayout.vue";
import Main from "../views/Main.vue"; 
import AddMedicine from "../views/AddMedicine.vue";
import MyProfile from "../views/MyProfile.vue";
import AddService from "../views/AddService.vue";
import store from "../store";


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
    },
    {
      path: "/register",
      name: "Register",
      component: About,
    },
  ];

const router = createRouter({
    history: createWebHistory(),
    routes

})

// router.beforeEach(async (to, from) => {
//  const token = store.getters['login/getToken']()
//   if (
//     // make sure the user is authenticated
//     !token &&
//     // ❗️ Avoid an infinite redirect
//     to.name !== 'Login'
//   ) {
//     // redirect the user to the login page
//     return { name: 'Login' }
//   }
// })


export default router;