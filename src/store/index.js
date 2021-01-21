import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      allTasks: [
        {
          id: 3423424234,
          title: 'Название задача -1',
          status: 'primary',
          createData: '20.01/2012',
          deadlineData: '21.01/2012',
          description: 'Тут какоето описание задачи, может быть много текста , а может мало'
        },
        {
          id: 7777764,
          title: 'Название задача -2',
          status: 'danger',
          createData: '19.01/2012',
          deadlineData: '22.01/2012',
          description: 'Тут какоето описание задачи, может быть много текста , а может мало'
        },
        {
          id: 12088876,
          title: 'Название задача -3',
          status: 'warning',
          createData: '18.01/2012',
          deadlineData: '23.01/2012',
          description: 'Тут какоето описание задачи, может быть много текста , а может мало'
        },
        {
          id: 167657577776,
          title: 'Название задача -4',
          status: '',
          createData: '17.01/2012',
          deadlineData: '24.01/2012',
          description: 'Тут какоето описание задачи, может быть много текста , а может мало'
        },
        {
          id: 16765343434347776,
          title: 'Название задача -5',
          status: 'completed',
          createData: '17.01/2012',
          deadlineData: '24.01/2012',
          description: 'Тут какоето описание задачи, может быть много текста , а может мало'
        }
      ],
      statusText: {
        primary: 'В ожидании',
        danger: 'Отменена',
        warning: 'Выполняется',
        default: 'Статус не задан',
        completed: 'Выполнена'
      },
      currentTaskID: ''
    }
  },

  getters: {
    allTasks(state) {
      return state.allTasks
    },

    statusText(state) {
      return state.statusText
    },

    currentTaskID(state) {
      return state.currentTaskID
    }
  },

  mutations: {
    setCurrentID(state, payload) {
      state.currentTaskID = payload
    },

    addNewTask(state, payload) {
      state.allTasks.push({
        id: Math.floor(Date.now() / 1000),
        title: payload.title,
        status: payload.status,
        createData: new Date().toLocaleDateString(),
        deadlineData: new Date(payload.deadlineData).toLocaleDateString(),
        description: payload.description
      })
    }
  }
})
