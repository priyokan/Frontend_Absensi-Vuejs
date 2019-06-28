import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './router.js'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode : 'history',
  routes: routes()
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

export function apiUrl(){
  return 'http://192.168.5.224:8080/api/'
}
