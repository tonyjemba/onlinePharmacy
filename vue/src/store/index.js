import { createStore, createLogger } from 'vuex';
import couter from './modules/couter';
import register from './modules/register';
import login from './modules/login'
const debug = process.env.NODE_ENV !== 'production';

const store = createStore({
  modules: {
    couter,
    register,
    login
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store;