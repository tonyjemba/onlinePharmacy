import axios from "axios";
import router from "../../router/index";
import store from "../index";

// root state object.
// each Vuex instance is just a single state tree.
const state = {
   resMsg:"",
   loading: false
};

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
 MSG(state,data){
     state.resMsg = data;
 },
 ROUTE_LOADING(state,data){
     state.loading =data;
 }
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    submitLogout({ commit, state }, payload) {
        const email = {'email': payload}
      //displays a loading indicator
       commit("ROUTE_LOADING", true);
       // making api request
        axios
            .post("http://localhost:8000/api/logout", email)
            .then((response) => {
                commit("MSG", response.data);
                store.commit("login/NOTLOGGED");
                store.commit("login/CLEARLOGGEDDATA");
                router.push("/");
            })
            .catch((error) => {
                commit("MSG", error.response.data.message);
                commit("ROUTE_LOADING", false);
            });
    },
};

// getters are functions.
const getters = {

};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
const logout = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

export default logout;
