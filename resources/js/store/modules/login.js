import axios from "axios";
import router from "../../router/index";

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    loginUser: [],
    myProducts: [],
    myServices: [],
    islogged: false,
    routeLoading: false,
    errorMessage: "",
    appURL: process.env.MIX_APP_URL,
};

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    LOGGED_DATA(state, data) {
        state.loginUser = data;
    },
    ISLOGGED(state) {
        state.islogged = true;
    },
    NOTLOGGED(state) {
        state.islogged = false;
    },
    MYPRODUCTS(state, data) {
        state.myProducts = data;
    },
    MYSERVICES(state, data) {
        state.myServices = data;
    },
    CLEARLOGGEDDATA(state) {
        state.loginUser = [];
    },
    ROUTE_LOADING(state, data) {
        state.routeLoading = data;
    },
    Error(state, data) {
        state.errorMessage = data;
    },
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    submitLoginForm({ commit, state }, payload) {
        //displays a loading indicator
        commit("ROUTE_LOADING", true);
        //making api request
        axios
            .post(`/api/login`, payload)
            .then((response) => {
                commit("LOGGED_DATA", response.data);
                commit("ISLOGGED");

                router.push("/dashboard");
            })
            .catch((error) => {
                commit("Error", error.response.data.message);
                commit("ROUTE_LOADING", false);
            });
    },
    getProducts({ commit, state }, payload) {
        //making api request
        axios
            .post(
                `/api/myProducts`,
                payload
            )
            .then((response) => {
                commit("MYPRODUCTS", response.data);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    },
    getServices({ commit, state }, payload) {
        //making api request
        axios
            .post(
                `/api/myServices`,
                payload
            )
            .then((response) => {
                commit("MYSERVICES", response.data);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    },
};

// getters are functions.
const getters = {
    getToken(state) {
        return state.loginUser.token;
    },
    getMessage(state) {
        return state.loginUser.message;
    },
    islogged(state) {
        return state.islogged;
    },
    getLoggedUser(state) {
        return state.loginUser.user.email;
    },
    getLoggedId(state) {
        return state.loginUser.user.id;
    },
    getRouteLoadingState(state) {
        return state.routeLoading;
    },
    getError(state) {
        return state.errorMessage;
    },
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
const login = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

export default login;
