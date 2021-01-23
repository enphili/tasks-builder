export default {
  deleteTask(state, payload) {
    delete state.allTasks[payload]
  },

  updateTaskStatus(state, {fireBaseKey, status}) {
    state.allTasks[fireBaseKey].status = status
  },

  updateTasks(state, payload) {
    state.allTasks = payload
  }
}