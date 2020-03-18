import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import( './views/Home/Home.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import( './views/login/login.vue')
    },
    {
      path: '/playList',
      name: 'playList',
      component: () => import( './views/playList/playList.vue')
    },
    {
      path: '/songControl',
      name: 'songControl',
      component: () => import( './views/songControl/songControl.vue')
    },
  ]
})
