import { createStore } from 'vuex'
import statusTextModule from './modules/statusText/statusText'
import allTasksModule from './modules/allTasks'

export default createStore({
  modules: {
    status: statusTextModule,
    tasks: allTasksModule
  },

  state() {
    return {
      databaseUrl: process.env.VUE_APP_FIREBASE_URL,
    }
  }
})
