import { createStore, createLogger } from 'vuex';
import register from './modules/register';
import login from './modules/login';
import logout from "./modules/logout";
// for state persistence
import VuexPersist from 'vuex-persist';


const debug = process.env.NODE_ENV !== 'production';

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  
})

const store = createStore({
  modules: {
    register,
    login,
    logout
  },
  strict: debug,
  plugins: debug ? [createLogger(),vuexLocalStorage.plugin] : [vuexLocalStorage.plugin]
})

export default store;