import axios from "axios";
import router from "../../router/index";

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    products: [],
    editProduct: {},
    searched: [],
    error: "",
};

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    STOREPRODUCTS(state, data) {
        state.products = data;
    },
    EDITDATA(state, data) {
        state.editProduct = data;
    },
    ERROR(state, data) {
        state.error = data;
    },
    SEARCHDATA(state, data) {
        state.searched = data;
    },
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    addProduct({ commit, state }, payload) {
        //displays a loading indicator
        commit("ROUTE_LOADING", true);
        //making api request
        axios
            .post(
                "https://online-pharmacy-project.herokuapp.com/api/products",
                payload
            )
            .then(() => {
                //on success push back to the dashboard
                router.push("/dashboard");
            })
            .catch((error) => {
                commit("ERROR", error.response.data.message);
            });
    },
    fetchProcucts({ commit, state }) {
        //making api request
        axios
            .get("https://online-pharmacy-project.herokuapp.com/api/products")
            .then((res) => {
                //Store data in vuex store
                commit("STOREPRODUCTS", res.data);
            })
            .catch((error) => {
                commit("ERROR", error.response.data.message);
            });
    },
    editProduct({ commit, state }, payload) {
        router.push(`/editproduct/${payload}`);

        //making api request to get product deatils to edit
        axios
            .get(
                "https://online-pharmacy-project.herokuapp.com/api/products/" +
                    `${payload}`
            )
            .then((res) => {
                //accessing data that needs to be edited
                commit("EDITDATA", res.data);
            })
            .catch((error) => {
                console.log("ERROR", error.response.data.message);
            });
    },
    searchProduct({ commit, state }, payload) {
        //making api request to get product results

        axios
            .get(
                "https://online-pharmacy-project.herokuapp.com/api/searchProducts/" +
                    `${payload}`
            )
            .then((res) => {
                //accessing data that needs to be edited
                commit("SEARCHDATA", res.data);
            })
            .catch((error) => {
                console.log("ERROR", error.response.data.message);
            });
    },
    updateProduct({ commit, state }, payload) {
        axios
            .put(
                "https://online-pharmacy-project.herokuapp.com/api/products/" +
                    `${payload.id}`,
                payload,
                payload.id
            )
            .then((res) => {
                router.push("/dashboard");
            })
            .catch((error) => {
                console.log("ERROR", error.response.data.message);
            });
    },
    deleteProduct({ commit, state }, payload) {
        //making api request
        axios
            .delete(
                "https://online-pharmacy-project.herokuapp.com/api/products/" +
                    `${payload}`
            )
            .then(() => {
                //refreshes currrent page
                router.go();
            })
            .catch((error) => {
                commit("ERROR", error.response.data.message);
            });
    },
};

// getters are functions.
const getters = {};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
const products = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

export default products;
