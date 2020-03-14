import Vue from 'vue'
import Vuex from 'vuex'
import login from './module/login'
import getters from './getter'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    login
  },
  getters
})
