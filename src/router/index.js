import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView'
import Login from '@/views/Login.vue'
import Apartments from '@/views/Apartments.vue'
import Guests from '@/views/Guests.vue'
import Reservations from '@/views/Reservations.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/apartments',
    name: 'Apartments',
    component: Apartments
  },
  {
    path: '/guests',
    name: 'Guests',
    component: Guests
  },
  {
    path: '/reservations',
    name: 'Reservations',
    component: Reservations
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
