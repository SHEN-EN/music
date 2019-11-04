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
      component: () => import( './views/Home.vue')
    },
    {
      path:'/activity',
      name:'activity',
      component:()=>import('./views/activity.vue')
    },
    {
      path: '/index.html',
      name: 'index',
      redirect: '/',
    },
    {
      path:'/',
      name:'guide',
      component:()=>import('./views/guide.vue')
    },
    {
      path:'/find',
      name:'find',
      component:()=>import('./views/find.vue')
    },
  ]
})
