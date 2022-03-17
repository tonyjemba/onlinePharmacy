import { createStore, createLogger } from 'vuex'
import couter from './modules/couter'
import register from './modules/register'
const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  modules: {
    couter,
    register
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store;