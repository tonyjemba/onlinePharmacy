import axios from "axios";
import router from "../../router/index";

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    products: [],
    editProduct: {},
    searched: [],
    error: "",
    uploadedProductImage: null
};

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    //storing the uploaded product image to the store
    storeProductImage(state,data){
        state.uploadedProductImage = data; 
    },
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
        // puting data in a formdata object
          const formData = new FormData();
          formData.append("productImage", payload.product_image);
          formData.append("user_id", payload.user_id);
          formData.append("product_name", payload.product_name);
          formData.append("Pharmacy_name", payload.phamacy_name);
          formData.append("location", payload.location);
          formData.append("price", payload.price);
          formData.append("disease", payload.disease);
          formData.append("descprition", payload.description);
          formData.append("contact", payload.contact);

        axios
            .post(`${process.env.MIX_APP_URL}/api/products`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                console.log(response);
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
            .get(`${process.env.MIX_APP_URL}/api/products`)
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
            .get(`${process.env.MIX_APP_URL}/api/products/${payload}`)
            .then((res) => {
                //accessing data that needs to be edited
                commit("EDITDATA", res.data);
        state.products = res.data;

            })
            .catch((error) => {
                console.log("ERROR", error.response.data.message);
            });
    },
    searchProduct({ commit, state }, payload) {
        //making api request to get product results

        axios
            .get(`${process.env.MIX_APP_URL}/api/searchProducts/${payload}`)
            .then((res) => {
                //accessing data that needs to be edited
                commit("SEARCHDATA", res.data);
            })
            .catch((error) => {
                console.log("ERROR", error.response.data.message);
            });
    },
    updateProduct({ commit, state }, payload) {
        // puting data in a formdata object
        const formData = new FormData();
        //updated image file
        formData.append("productImage", payload.imageFile);
        
        formData.append("product_name", payload.product_name);
        formData.append("Pharmacy_name", payload.Pharmacy_name);
        formData.append("location", payload.location);
        formData.append("price", payload.price);
        formData.append("disease", payload.disease);
        formData.append("descprition", payload.descprition);
        formData.append("contact", payload.contact);
        formData.append("image_url", payload.image_url);
        formData.append("id",payload.id);
        
        axios
            .post(
                `${process.env.MIX_APP_URL}/api/update-product`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then((res) => {
                 router.push("/dashboard").then(()=>{
                    //refresh the path to see the latest changes
                  window.location.reload();
                 });
            })
            .catch((error) => {

                console.log("ERROR", error.response.data.message);
            });
    },
    deleteProduct({ commit, state }, payload) {
        //making api request
        axios
            .delete(`${process.env.MIX_APP_URL}/api/products/${payload}`)
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
