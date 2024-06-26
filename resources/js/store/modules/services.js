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
    isLoading:false,
};

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    storeServiceImage(state, data) {
        state.uploadedServiceImage = data;
    },
    STORESERVICES(state, data) {
        state.services = data.reverse();
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
    ROUTE_LOADING(state, data) {
        state.isLoading= data
    },
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    addService({ commit, state }, payload) {
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
        //displays a loading indicator
        commit("ROUTE_LOADING", true);
        //making api request
        axios
            .post(`/api/services`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(() => {
                //on success push back to the dashboard
                router.push("/dashboard");
                commit("ROUTE_LOADING", false);
            })
            .catch((error) => {
                commit("ERROR", error.response.data.message);
                commit("ROUTE_LOADING", false);
            });
    },
    fetchServices({ commit, state }) {
        //making api request
        axios
            .get(`/api/services`)
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
            .get(`/api/services/${payload}`)
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
            .get(`/api/searchServices/${payload}`)
            .then((res) => {
                //accessing data that needs to be edited
                commit("SEARCHDATA", res.data);
            })
            .catch((error) => {
                console.log("ERROR", error.response.data.message);
            });
    },
    updateService({ commit, state }, payload) {
        // puting data in a formdata object
        const formData = new FormData();
        //updated image
        formData.append("productImage", payload.imageFile);
        formData.append("service_name", payload.service_name);
        formData.append("Pharmacy_name", payload.Pharmacy_name);
        formData.append("location", payload.location);
        formData.append("price", payload.price);
        formData.append("disease", payload.disease);
        formData.append("descprition", payload.descprition);
        formData.append("contact", payload.contact);
        formData.append("image_url", payload.image_url);
        formData.append("id", payload.id);
       commit("ROUTE_LOADING", true);
        axios
            .post(`/api/update-service`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                 router.push("/dashboard").then(() => {
                     //refresh the path to see the latest changes
                     window.location.reload();
                 });
                 commit("ROUTE_LOADING", false);
            })
            .catch((error) => {
                console.log("ERROR", error.response.data.message);
                commit("ROUTE_LOADING", false);
            });
    },
    deleteService({ commit, state }, payload) {
        //making api request
        axios
            .delete(`/api/services/${payload}`)
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
