import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import * as filter from './fillter/fillter';
Object.keys(filter).forEach((key)=>{Vue.filter(key, filter[key])})
require('./mock/mock')
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
