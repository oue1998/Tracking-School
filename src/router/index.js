import Vue from 'vue'
import VueRouter from 'vue-router'
import school from '../views/school/School.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
