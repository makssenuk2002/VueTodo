import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuelidate from 'vuelidate'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import * as firebase from "firebase";

Vue.config.productionTip = false
Vue.use(Vuelidate)

firebase.initializeApp({
  apiKey: "AIzaSyDORus25JH8eoWc2t6-Zq0fSmLeBlRRq64",
  authDomain: "vue-todo-75fe2.firebaseapp.com",
  projectId: "vue-todo-75fe2",
  storageBucket: "vue-todo-75fe2.appspot.com",
  messagingSenderId: "26876629563",
  appId: "1:26876629563:web:22e818d79994a72dba021e"
})

let app
firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

