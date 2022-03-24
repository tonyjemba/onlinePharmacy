import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Login.vue";
import About from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import DashboardLayout from "../layout/DashboardLayout.vue";
import Main from "../views/Main.vue"; 
import AddMedicine from "../views/AddMedicine.vue";
import MyProfile from "../views/MyProfile.vue";
import AddService from "../views/AddService.vue";
import store from "../store/index";


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
    meta: { auth: true },
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
      meta:{auth:false}
    },
    {
      path: "/register",
      name: "Register",
      component: About,
      meta:{auth:false}
    },
  ];

const router = createRouter({
    history: createWebHistory(),
    routes

})

router.beforeEach((to, from,next) => {
const loggedin =store.state.login.islogged;

if(to.meta.auth && !loggedin){
 next({name: 'Login'})
}else if(loggedin && (to.name === 'Login' || to.name === 'Register')){
  next({name: 'Dashboard'})
} else{
  next()
}

  // ...
  // explicitly return false to cancel the navigation
 // return false
})


export default router;