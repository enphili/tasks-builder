export default {
  async getAllTasks({rootState, commit}) {
    try {
      const response = await fetch(rootState.databaseUrl + '.json')
      const data = await response.json()
      data ? commit('updateTasks', data) : console.log('нет данных')
    } catch (e) {
      console.log(e.message)
    }
  }
}