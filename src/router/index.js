import { createRouter, createWebHistory } from 'vue-router'

import Accueil from '../Views/Accueil.vue'
import APropos from '../Views/APropos.vue'
import Projets from '../Views/Projets.vue'
import Certifications from '../Views/Certifications.vue'
import Competences from '../Views/Competences.vue'
import Parcours from '../Views/Parcours.vue'
import Veille from '../Views/Veille.vue'
import Contact from '../Views/Contact.vue'

const routes = [
  { path: '/', redirect: '/accueil' }, // ✅ route par défaut
  { path: '/accueil', component: Accueil },
  { path: '/apropos', component: APropos },
  { path: '/projets', component: Projets },
  { path: '/certifications', component: Certifications },
  { path: '/competences', component: Competences },
  { path: '/parcours', component: Parcours },
  { path: '/veille', component: Veille },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
