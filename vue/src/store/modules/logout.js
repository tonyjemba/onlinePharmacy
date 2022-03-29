import axios from "axios";
import router from "../../router/index";

// root state object.
// each Vuex instance is just a single state tree.
const state = {
   resMsg:""
};

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
 MSG(state,data){
     state.resMsg = data;
 }
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    submitLoginForm({ commit, state }, payload) {
      //displays a loading indicator
        commit("ROUTE_LOADING", true);
        //making api request
        axios
            .post("http://localhost:8000/api/login", payload)
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
