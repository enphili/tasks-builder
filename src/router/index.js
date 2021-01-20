import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '@/views/Tasks'
import Task from '@/views/Task';
import New from '@/views/New';


const routes = [
  {
    path: '/alltasks',
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
    path: '/task',
    name: 'Task',
    component: Task
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
