import Vue from 'vue'
import VueRouter from 'vue-router'
import school from '../views/school/School.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/school',
    name: 'school',
    component: school
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/school/project.vue')
  },
  {
    path: '/projectform',
    name: 'projectform',
    component: () => import('../components/projectform.vue')
  },
  {
    path: '/budget',
    name: 'budget',
    component: () => import('../views/school/budget.vue')
  },
  {
    path: '/status',
    name: 'status',
    component: () => import('../views/school/status.vue')
  },
  {
    path: '/used',
    name: 'used',
    component: () => import('../views/school/used.vue')
  },
  {
    path: '/bureau-BG',
    name: 'bureau-BG',
    component: () => import('../views/bureau/bureau-BG.vue')
  },
  {
    path: '/budget-BG',
    name: 'budget-BG',
    component: () => import('../views/bureau/budget-BG.vue')
  },
  {
    path: '/budgetform-BG',
    name: 'budgetform-BG',
    component: () => import('../views/bureau/budgetform-BG.vue')
  },
  {
    path: '/appeal-BG',
    name: 'appeal-BG',
    component: () => import('../views/bureau/appeal-BG.vue')
  },
  {
    path: '/appeal-DEPT',
    name: 'appeal-DEPT',
    component: () => import('../views/dept/appeal-DEPT.vue')
  },
  {
    path: '/budget-DEPT',
    name: 'budget-DEPT',
    component: () => import('../views/dept/budget-DEPT.vue')
  },
  {
    path: '/budgetform-DEPT',
    name: 'budgetform-DEPT',
    component: () => import('../views/dept/budgetform-DEPT.vue')
  },
  {
    path: '/confirmBG-DEPT',
    name: 'confirmBG-DEPT',
    component: () => import('../views/dept/confirmBG-DEPT.vue')
  },
  {
    path: '/home-DEPT',
    name: 'home-DEPT',
    component: () => import('../views/dept/home-DEPT.vue')
  },
  {
    path: '/pick-DEPT',
    name: 'pick-DEPT',
    component: () => import('../views/dept/pick-DEPT.vue')
  },
  {
    path: '/appeal-LC',
    name: 'appeal-LC',
    component: () => import('../views/local/appeal-LC.vue')
  },
  {
    path: '/budget-LC',
    name: 'budget-LC',
    component: () => import('../views/local/budget-LC.vue')
  },
  {
    path: '/budgetform-LC',
    name: 'budgetform-LC',
    component: () => import('../views/local/budgetform-LC.vue')
  },
  {
    path: '/confirmBG-LC',
    name: 'confirmBG-LC',
    component: () => import('../views/local/confirmBG-LC.vue')
  },
  {
    path: '/home-LC',
    name: 'home-LC',
    component: () => import('../views/local/home-LC.vue')
  },
  {
    path: '/pick-LC',
    name: 'pick-LC',
    component: () => import('../views/local/pick-LC.vue')
  },
  {
    path: '/project-LC',
    name: 'project-LC',
    component: () => import('../views/local/project-LC.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
