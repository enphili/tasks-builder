import { createStore } from 'vuex'

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
      },
      currentTaskID: '',
      fireBaseKey: '',
      databaseUrl: 'https://spatasksbuilder-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
    }
  },

  getters: {
    allTasks(state) {
      return state.allTasks
    },

    allTasksInArray(_, getters) {
      return Object.values(getters.allTasks)
    },

    statusText(state) {
      return state.statusText
    },

    currentTaskID(state) {
      return state.currentTaskID
    },

    fireBaseKey(state) {
      return state.fireBaseKey
    }
  },

  mutations: {
    updateTaskStatus(state, payload) {
      state.allTasks[state.fireBaseKey].status = payload
    },

    setCurrentID(state, payload) {
      state.currentTaskID = payload
    },

    setCurrentFireBaseKey(state, payload) {
      state.fireBaseKey = payload
    },

    updateTasks(state, payload) {
        state.allTasks = payload
    }
  },

  actions: {
    async updateAllTasksInBD(context, payload) {
      const url = `https://spatasksbuilder-default-rtdb.europe-west1.firebasedatabase.app/tasks/${payload.key}.json`
      try {
        await fetch(url, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload.status)
        })
      } catch (e) {
        console.log(e.message)
      }
    },

    async saveNewTask(context, payload) {
     const data = {
       id: Math.floor(Date.now() / 1000),
       title: payload.title,
       status: payload.status,
       createData: new Date().toLocaleDateString(),
       deadlineData: new Date(payload.deadlineData).toLocaleDateString(),
       description: payload.description
     }
     try {
       await fetch(context.state.databaseUrl, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
       })
       await context.dispatch('getAllTasks')
     } catch (e) {
       console.log(e.message)
     }
    },

    async getAllTasks(context) {
      try {
        const response = await fetch(context.state.databaseUrl)
        const data = await response.json()
        data ? context.commit('updateTasks', data) : console.log('нет данных')
      } catch (e) {
        console.log(e.message)
      }
    }
  }
})
