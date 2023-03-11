import { createRouter, createWebHistory } from 'vue-router'
import InicioNav from '../views/Inicio.vue'
import AyudaView from '../views/AyudaA.vue'
import QuienView from '../views/QuienView.vue'
import LoginView from '../views/LoginView.vue'


const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'inicio',
    component: InicioNav
  },
  {
    path: '/help',
    name: 'ayuda',
    component: AyudaView
  },
  {
    path: '/quienes',
    name: 'quienes',
    component: QuienView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
