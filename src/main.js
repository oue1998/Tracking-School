import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://budget-tracking-school.herokuapp.com/';
//http://10.228.2.71/
//https://budget-tracking-school.herokuapp.com/


Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
