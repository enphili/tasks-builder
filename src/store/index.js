import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      allTasks: [
        {
          id: '3423424234',
          title: 'Название задача -1',
          status: 'primary',
          createData: '20.01/2012',
          description: 'Тут какоето описание задачи, может быть много текста , а может мало'
        },
        {
          id: '7777764',
          title: 'Название задача -2',
          status: 'danger',
          createData: '19.01/2012',
          description: 'Тут какоето описание задачи, может быть много текста , а может мало'
        },
        {
          id: '12088876',
          title: 'Название задача -3',
          status: 'warning',
          createData: '18.01/2012',
          description: 'Тут какоето описание задачи, может быть много текста , а может мало'
        },
        {
          id: '167657577776',
          title: 'Название задача -4',
          status: '',
          createData: '17.01/2012',
          description: 'Тут какоето описание задачи, может быть много текста , а может мало'
        }
      ],
      statusText: {
        primary: 'Активна',
        danger: 'Отменена',
        warning: 'Выполняется',
        default: 'Статус не задан'
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
  }
})
