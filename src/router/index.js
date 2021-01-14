import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Dashboard',
    component: dashboard,
    children: [
      {
        path: '',
        component: () => import('../views/Sobre.vue')
      },
      {
        path: 'messages',
        component: () => import('../views/Skills.vue')
      },
      {
        path: 'profile',
        component: () => import('../views/Projetos.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
