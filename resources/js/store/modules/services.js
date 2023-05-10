import axios from "axios";
import router from "../../router/index";

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    services: [],
    editService: {},
    searched: [],
    error: "",
    uploadedServiceImage: null,
};

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    storeServiceImage(state, data){
        state.uploadedServiceImage = data; 
    },
    STORESERVICES(state, data) {
        state.services = data;
    },
    EDITDATA(state, data) {
        state.editService = data;
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
    addService({ commit, state }, payload) {
        //displays a loading indicator
        commit("ROUTE_LOADING", true);
        // puting data in a formdata object
        const formData = new FormData();
        formData.append("serviceImage", payload.service_image);
        formData.append("user_id", payload.user_id);
        formData.append("service_name", payload.service_name);
        formData.append("Pharmacy_name", payload.phamacy_name);
        formData.append("location", payload.location);
        formData.append("price", payload.price);
        formData.append("disease", payload.disease);
        formData.append("descprition", payload.description);
        formData.append("contact", payload.contact);

        //making api request
        axios
            .post(`${process.env.MIX_APP_URL}/api/services`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(() => {
                //on success push back to the dashboard
                router.push("/dashboard");
            })
            .catch((error) => {
                commit("ERROR", error.response.data.message);
            });
    },
    fetchServices({ commit, state }) {
        //making api request
        axios
            .get(`${process.env.MIX_APP_URL}/api/services`)
            .then((res) => {
                //Store data in vuex store
                commit("STORESERVICES", res.data);
            })
            .catch((error) => {
                commit("ERROR", error.response.data.message);
            });
    },
    editService({ commit, state }, payload) {
        router.push(`/editservice/${payload}`);
        //making api request to get product deatils to edit
        axios
            .get(`${process.env.MIX_APP_URL}/api/services/${payload}`)
            .then((res) => {
                //accessing data that needs to be edited
                commit("EDITDATA", res.data);
            })
            .catch((error) => {
                console.log("ERROR", error.response.data.message);
            });
    },
    searchService({ commit, state }, payload) {
        //making api request to get product results
        axios
            .get(`${process.env.MIX_APP_URL}/api/searchServices/${payload}`)
            .then((res) => {
                //accessing data that needs to be edited
                commit("SEARCHDATA", res.data);
            })
            .catch((error) => {
                console.log("ERROR", error.response.data.message);
            });
    },
    updateService({ commit, state }, payload) {
        axios
            .put(
                `${process.env.MIX_APP_URL}/api/services/${payload.id}`,
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
    deleteService({ commit, state }, payload) {
        //making api request
        axios
            .delete(`${process.env.MIX_APP_URL}/api/services/${payload}`)
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
const services = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

export default services;
