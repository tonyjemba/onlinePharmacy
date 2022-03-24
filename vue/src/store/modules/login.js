import axios from "axios";
import router from '../../router/index';

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    loginUser:[],
    islogged:false,
    routeLoading:false
  }
  
  // mutations are operations that actually mutate the state.
  // each mutation handler gets the entire state tree as the
  // first argument, followed by additional payload arguments.
  // mutations must be synchronous and can be recorded by plugins
  // for debugging purposes.
  const mutations = {
    LOGGED_DATA(state,data){
            state.loginUser = data;
         
    },
    ISLOGGED(state){
     
        state.islogged = true
    
    },
    ROUTE_LOADING(state,data){
      state.routeLoading = data
    }
  
  }
  
  // actions are functions that cause side effects and can involve
  // asynchronous operations.
  const actions = {
    submitLoginForm({ commit,state },payload) {
        axios.post("http://localhost:8000/api/login", payload)
            .then(response => {
                commit('LOGGED_DATA', response.data)
                commit('ISLOGGED')
                router.push('/dashboard')
                
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
    },
    getLoggedUser(state){
        return state.loginUser.user;
    },
    getRouteLoadingState(state){
      return state.routeLoading;
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