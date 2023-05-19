import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import JupiterView from '../views/Planets/JupiterView.vue'
// import MarteView from '../views/Planets/MarteView.vue'
// import MercurioView from '../views/Planets/MercurioView.vue'
// import NeptunoView from '../views/Planets/NeptunoView.vue'
// import SaturnoView from '../views/Planets/SaturnoView.vue'
// import SolView from '../views/Planets/SolView.vue'
// import TierraView from '../views/Planets/TierraView.vue'
// import UranoView from '../views/Planets/UranoView.vue'
// import VenusView from '../views/Planets/VenusView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/jupiter',
    //   name: 'Jupiter',
    //   component: JupiterView
    // },
    // {
    //   path: '/marte',
    //   name: 'Marte',
    //   component: MarteView
    // },
    // {
    //   path: '/mercurio',
    //   name: 'Mercurio',
    //   component: MercurioView
    // },
    // {
    //   path: '/neptuno',
    //   name: 'Neptuno',
    //   component: NeptunoView
    // },
    // {
    //   path: '/saturno',
    //   name: 'Saturno',
    //   component: SaturnoView
    // },
    // {
    //   path: '/sol',
    //   name: 'Sol',
    //   component: SolView
    // },
    // {
    //   path: '/tierra',
    //   name: 'Tierra',
    //   component: TierraView
    // },
    // {
    //   path: '/urano',
    //   name: 'Urano',
    //   component: UranoView
    // },
    // {
    //   path: '/venus',
    //   name: 'Venus',
    //   component: VenusView
    // },
  ],
});

export default router

