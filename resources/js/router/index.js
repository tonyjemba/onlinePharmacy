import { createRouter, createWebHistory } from "vue-router";
import DashboardLayout from "../layout/DashboardLayout.vue";
import Main from "../views/Main.vue";
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
            //using route-level code splitting
            {
                path: "/dashboard",
                name: "Dashboard",
                component: ()=> import("../views/Dashboard.vue"),
            },
            {
                path: "/addMedicine",
                name: "AddMedicine",
                component: ()=> import ("../views/AddMedicine.vue"),
            },
            {
                path: "/addService",
                name: "AddService",
                component:()=> import("../views/AddService.vue"),
            },
            {
                path: "/myprofile",
                name: "MyProfile",
                component: ()=> import("../views/MyProfile.vue"),
            },
            {
                path: "/editproduct/:id",
                name: "EditItem",
                component: ()=> import("../views/UpdateItem.vue"),
            },
            {
                path: "/editservice/:id",
                name: "EditService",
                component: ()=> import("../views/UpdateService.vue"),
            }
        ],
    },
    {
        path: "/login",
        name: "Login",
        component:  ()=> import("../views/Login.vue"),
        meta: {},
    },
    {
        path: "/register",
        name: "Register",
        component: ()=> import("../views/Register.vue"),
    },
    {
        path:"/view/:id",
        name:"ViewProduct",
        component: ()=> import("../views/ViewItem.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    mode: "history",
    routes,
});

/**
 * This is a global route guard
 */
router.beforeEach((to, from, next) => {
  //this is the loggedin state of the user
    const loggedin = store.state.login.islogged;

    //if the user is not loggedin will stay in the login route
    if (to.meta.auth && !loggedin ) {
        next({ name: "Login" });
    } 
 
    //if the user is loggedin will move to the dashboard route defined as the next
    else if (loggedin && (to.name === "Login" || to.name === "Register" )) {
        next({ name: "Dashboard" });
    }
    
else {
      //the loading state of the route will be set to true  
        next();
    }
});

router.afterEach((to, from)=>{
  //after the route has finished loading the loading state is set back to false
  store.commit('login/ROUTE_LOADING', false)
})

export default router;
