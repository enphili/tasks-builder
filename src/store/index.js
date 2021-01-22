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
      databaseUrl: 'https://spatasksbuilder-default-rtdb.europe-west1.firebasedatabase.app/tasks',
      databaseArchiveUrl: 'https://spatasksbuilder-default-rtdb.europe-west1.firebasedatabase.app/archive.json'
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
    },

    getCurrentTask(_, getters) {
      return getters.allTasks[getters.fireBaseKey]
    }
  },

  mutations: {
    deleteTask(state, payload) {
      delete state.allTasks[payload]
    },

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
    async removeTaskToArchive(context) {
      try {
        await fetch(context.state.databaseArchiveUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(context.getters.getCurrentTask)
        })
        await fetch(`${context.state.databaseUrl}/${context.getters.fireBaseKey}.json`, {
          method: 'DELETE'
        })
        context.commit('deleteTask', context.getters.fireBaseKey)
      } catch (e) {
        console.log(e.message())
      }
    },

    async updateAllTasksInBD(context, {key, status}) {
      const url = `${context.state.databaseUrl}/${key}/status.json`
      try {
        await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(status)
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
       await fetch(context.state.databaseUrl + '.json', {
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
        const response = await fetch(context.state.databaseUrl + '.json')
        const data = await response.json()
        data ? context.commit('updateTasks', data) : console.log('нет данных')
      } catch (e) {
        console.log(e.message)
      }
    }
  }
})
