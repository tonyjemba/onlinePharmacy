import axios from "axios";

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    registeredUser:[]
  }
  
  // mutations are operations that actually mutate the state.
  // each mutation handler gets the entire state tree as the
  // first argument, followed by additional payload arguments.
  // mutations must be synchronous and can be recorded by plugins
  // for debugging purposes.
  const mutations = {
    REG_DATA(state,data){
            state.registeredUser = data;
    }
  }
  
  // actions are functions that cause side effects and can involve
  // asynchronous operations.
  const actions = {
    submitRegForm({ commit }) {
        axios.post('localhost:3000/api/register')
            .then(response => {
                commit('REG_DATA', response.data)
        })
      

        // axios.all([
        //     axios.get('localhost:3000/sanctum/csrf-cookie'), 
        //     axios.post('localhost:3000/register')
        //   ])
        //   .then(axios.spread((obj1, obj2) => {
        //     // Both requests are now complete
        //     console.log(obj1);
        //     console.log(obj2);
        //   }));
    }
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