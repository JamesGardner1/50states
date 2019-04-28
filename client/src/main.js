import Vue from 'vue'
import App from './App.vue'

//Imports VueRouter library and apps routes
import VueRouter from 'vue-router'
import router from './router'

//Import Bootstrap
import BootstrapVue from 'bootstrap-vue'

//Import API service
import StateAPIService from '@/services/stateService'

Vue.use(VueRouter)

//Configure Bootstrap
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Adding API service to Vue
Vue.prototype.$stateService = StateAPIService

new Vue({
  render: h => h(App),
    router
}).$mount('#app')
