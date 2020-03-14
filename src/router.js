import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: () => import( './views/Home/Home.vue')
    },
    {
      path: '/',
      name: 'Login',
      component: () => import( './views/login/login.vue')
    },
  ]
})
