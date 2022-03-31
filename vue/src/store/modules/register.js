import axios from "axios";
import store from "../index";
import router from "../../router/index";
// root state object.
// each Vuex instance is just a single state tree.
const state = {
    registeredUser:[],
    routeLoading: false,
    registered:false,
    errorMessage2: "",
  }
  
  // mutations are operations that actually mutate the state.
  // each mutation handler gets the entire state tree as the
  // first argument, followed by additional payload arguments.
  // mutations must be synchronous and can be recorded by plugins
  // for debugging purposes.
  const mutations = {
    REG_DATA(state,data){
            state.registeredUser = data;
    },
    REGISTERED(state){
        state.registered = true
    },
    ROUTE_LOADING(state, data) {
      state.routeLoading = data;
  },
  Error(state, data) {
    state.errorMessage2 = data;
},
  }
  
  // actions are functions that cause side effects and can involve
  // asynchronous operations.
  const actions = {
    submitRegForm({ commit, state }, payload) {
      //displays a loading indicator
        commit("ROUTE_LOADING", true);
        //making api request
        axios
            .post("http://localhost:8000/api/register", payload)
            .then((response) => {
                commit("REG_DATA", response);
                commit("REGISTERED");
                store.commit("login/ISLOGGED");
                router.push("/dashboard");
            })
            .catch((error) => {
                commit("Error", error.response.data.message);
                commit("ROUTE_LOADING", false);
            });
    },
  }
  
  // getters are functions.
  const getters = {
 
  }
  
  // A Vuex instance is created by combining the state, mutations, actions,
  // and getters.
  const register =  {
      namespaced: true,
      state,
      getters,
      actions,
      mutations
    };
  
    export default register;