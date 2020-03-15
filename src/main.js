import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
import * as filter from './fillter/fillter';
Object.keys(filter).forEach((key)=>{Vue.filter(key, filter[key])})

Vue.config.productionTip = false
axios.interceptors.request.use(config=>{ // 请求响应拦截器
    return config
});

router.beforeEach((to, from, next) => {
  console.log(store)
      if(store.getters.userToken && document.cookie.split(';')[0]!=''){
        next()
      }else{
        alert('用户登陆凭证过期导致部分功能不能使用,请尽快重新登陆！！');
        next()  
      }

})
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
