import Vue from 'vue'
import VueRouter from 'vue-router'
import Registration from "../views/Registration";
import MainApp from "../views/MainApp";

Vue.use(VueRouter)

const routes = [
  {path:'/', component:Registration},
  {path:'/main', component:MainApp},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
