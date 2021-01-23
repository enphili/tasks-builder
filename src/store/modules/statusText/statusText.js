export default {
  state() {
    return {
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
    statusText(state) {
      return state.statusText
    }
  }
}