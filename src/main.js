import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import VueAxios from 'vue-axios'
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
import * as filter from './fillter/fillter';
NutUI.install(Vue)
// Vue.use(VueAxios,axios);
Object.keys(filter).forEach((key)=>{Vue.filter(key, filter[key])})

Vue.config.productionTip = false
axios.interceptors.request.use(
  config=>{
    console.log(config)
    return config
  }
);
router.beforeEach((to, from, next) => {
  let ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) != "micromessenger") {
    next()
   }else{
     next()
   }
})
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
