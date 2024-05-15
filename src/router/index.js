import { createRouter, createWebHistory } from 'vue-router'
import AllVoyagesView from '../views/AllVoyagesView.vue'
import ThisVoyageView from '../views/ThisVoyageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllVoyagesView
    },
    {
      path: '/voyage/:destination',
      name: 'voyage',
      component: ThisVoyageView
    },
  ]

})

export default router
