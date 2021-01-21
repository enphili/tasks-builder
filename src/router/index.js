import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '@/views/Tasks'
import Task from '@/views/Task'
import New from '@/views/New'
import CurrentTask from '@/views/CurrentTask'


const routes = [
  {
    path: '/dashboard',
    alias: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/newtask',
    name: 'New',
    component: New
  },
  {
    path: '/tasks',
    component: Task,
    children: [{path: ':taskID?', component: CurrentTask, props: true}]
  },
  {
    path: '/:notfound(.*)', redirect: '/dashboard'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
