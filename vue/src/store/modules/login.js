import axios from "axios";

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    loginUser:[]
  }
  
  // mutations are operations that actually mutate the state.
  // each mutation handler gets the entire state tree as the
  // first argument, followed by additional payload arguments.
  // mutations must be synchronous and can be recorded by plugins
  // for debugging purposes.
  const mutations = {
    LOGGED_DATA(state,data){
            state.loginUser = data;
    }
  }
  
  // actions are functions that cause side effects and can involve
  // asynchronous operations.
  const actions = {
    submitLoginForm({ commit },payload) {
        axios.post("http://localhost:8000/api/login", payload)
            .then(response => {
                commit('LOGGED_DATA', response.data)
        })
      

    }
  }
  
  // getters are functions.
  const getters = {
    getToken (state) {
        return state.loginUser.token;
      },
    getMessage(state){
        return state.loginUser.message;
    }
      

  }
  
  // A Vuex instance is created by combining the state, mutations, actions,
  // and getters.
  const login =  {
      namespaced: true,
      state,
      getters,
      actions,
      mutations
    };
  
    export default login;