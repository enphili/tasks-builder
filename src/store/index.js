import { createStore } from 'vuex'
import {sortTasksObject} from '@/utilities/sortTaskObject';

export default createStore({

  state() {
    return {
      allTasks: {},
      statusText: {
        primary: 'В ожидании',
        danger: 'Отменена',
        warning: 'Выполняется',
        default: 'Статус не задан',
        completed: 'Выполнена'
      }
    }
  },

  getters: {
    allTasksInArray(state) {
      return sortTasksObject(state.allTasks)
    }
  },

  mutations: {
    deleteTask(state, payload) {
      delete state.allTasks[payload]
    },

    updateTaskStatus(state, {fireBaseKey, status}) {
      state.allTasks[fireBaseKey].status = status
    },

    updateTasks(state, payload) {
      state.allTasks = payload
    }
  },

  actions: {
    async getAllTasks({commit}) {
      try {
        const response = await fetch(process.env.VUE_APP_FIREBASE_URL + '.json')
        const data = await response.json()
        data ? commit('updateTasks', data) : console.log('нет данных')
      } catch (e) {
        console.log(e.message)
      }
    }
  }
})
