require('./bootstrap');


import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import { initializeApp } from "firebase/app";
import moment from "moment";


/**
 * @params {date} date to be converted to timeago
 * @returns returns timeAgo
 */
 app.config.globalProperties.$filters = {
  timeAgo(date) {
    return moment(date).fromNow()
  },
}

createApp(App).use(store).use(router).mount('#app');

//Firebase configuration needs to be in a .env file
const firebaseConfig = {
    apiKey: "AIzaSyB8QfjMzpGR8zokG8cUsvGwiJDZb4bQ6Oc",
    authDomain: "online-pharmacy-d7579.firebaseapp.com",
    projectId: "online-pharmacy-d7579",
    storageBucket: "online-pharmacy-d7579.appspot.com",
    messagingSenderId: "505849769684",
    appId: "1:505849769684:web:c99a5273d41446f602d541",
    measurementId: "G-SPK833DJ5Z"
  };
  
// Initialize Firebase
 initializeApp(firebaseConfig);

