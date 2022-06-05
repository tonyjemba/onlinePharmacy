import { createStore, createLogger } from "vuex";
import register from "./modules/register";
import login from "./modules/login";
import logout from "./modules/logout";
import products from "./modules/products";
import services from "./modules/services";
// for state persistence
import VuexPersist from "vuex-persist";

const debug = process.env.NODE_ENV !== "production";

const vuexLocalStorage = new VuexPersist({
    key: "vuex", // The key to store the state on in the storage provider.
    storage: window.localStorage, // or window.sessionStorage or localForage
});

const store = createStore({
    modules: {
        register,
        login,
        logout,
        products,
        services,
    },
    strict: debug,
    plugins: debug
        ? [createLogger(), vuexLocalStorage.plugin]
        : [createLogger(), vuexLocalStorage.plugin],
});

export default store;
