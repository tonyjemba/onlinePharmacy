// import axios from "axios";
// import store from "../index";
// import router from "../../router/index";
// // root state object.
// // each Vuex instance is just a single state tree.
// const state = {
  
//   }
  
//   // mutations are operations that actually mutate the state.
//   // each mutation handler gets the entire state tree as the
//   // first argument, followed by additional payload arguments.
//   // mutations must be synchronous and can be recorded by plugins
//   // for debugging purposes.
//   const mutations = {

//   }
  
//   // actions are functions that cause side effects and can involve
//   // asynchronous operations.
//   const actions = {
//     storeProduct({ commit, state }, payload) {
 
//         //making api request
//         axios
//             .post("https://online-pharmacy-project.herokuapp.com/api/add-product", payload)
//             .then((response) => {
//                 commit("REG_DATA", response);
//                 commit("MSG", response.data.message);
//                 commit("REGISTERED");
//                 router.push("/login");
//             })
//             .catch((error) => {
//                 commit("Error", error.response.data.message);
//                 commit("ROUTE_LOADING", false);
//             });
//     },
//   }
  
//   // getters are functions.
//   const getters = {
 
 
//   }
  
//   // A Vuex instance is created by combining the state, mutations, actions,
//   // and getters.
//   const products =  {
//       namespaced: true,
//       state,
//       getters,
//       actions,
//       mutations
//     };
  
//     export default products;