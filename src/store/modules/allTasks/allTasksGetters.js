export default {
  allTasks(state) {
    return state.allTasks
  },

  allTasksInArray(_, getters) {
    return Object.values(getters.allTasks)
  }
}