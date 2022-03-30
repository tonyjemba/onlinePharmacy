import { createStore, createLogger } from 'vuex';
import register from './modules/register';
import login from './modules/login';
import logout from "./modules/logout";
const debug = process.env.NODE_ENV !== 'production';

const store = createStore({
  modules: {
    register,
    login,
    logout
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store;