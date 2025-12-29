import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FAQ from '../views/FAQ.vue'
import WhyRoomActually from '../views/WhyRoomActually.vue'
import Results from '../views/Results.vue'
import PropertyDetail from '../views/PropertyDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/why-roomactually',
    name: 'WhyRoomActually',
    component: WhyRoomActually
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  },
  {
    path: '/property/:id',
    name: 'PropertyDetail',
    component: PropertyDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

