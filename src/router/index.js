import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },

  {
    path: '/home',
    name: 'home',
    redirect: '/table',
    component: () => import('../views/home/home.vue'),
    children:[{
      path: '/table',
      component: () => import('../views/table/sss.vue')
    },
      {
      path: '/abc',

      component: () => import('../views/a/abc.vue')
    },
      {
        path: '/qqq',
        component: () => import('../views/qqq.vue')
      }

    ]

  },

 /* {
    path: '/qqq',
    name: 'qqq',
    component: () => import('../views/qqq.vue'),
    children:[

    ]
  },*/




]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
