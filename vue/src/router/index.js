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
        path: "/dashboard",
        name: "DashboardLayout",
        component: DashboardLayout,
        meta: { auth: true },
        children: [
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
            },
        ],
    },
    {
        path: "/login",
        name: "Login",
        component: Home,
        meta: {},
    },
    {
        path: "/register",
        name: "Register",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

/**
 * This is a global route guard
 */
router.beforeEach((to, from, next) => {
  //this is the loggedin state of the user
    const loggedin = store.state.login.islogged;
    const registered = store.state.register.registered;

    //if the user is not loggedin will stay in the login route
    if (to.meta.auth && !loggedin && (to.name !== "Login" )) {
        next({ name: "Login" });
    } 
 
    //if the user is loggedin will move to the dashboard route defined as the next
    else if (loggedin && (to.name === "Login" || to.name === "Register" )) {
        next({ name: "Dashboard" });
    } else {
      //the loading state of the rout will be set to true  
      
        next();
    }
});

router.afterEach((to, from)=>{
  //after the route has finished loading the loading state is set back to false
  store.commit('login/ROUTE_LOADING', false)
})

export default router;
