<template>

  <div class="card" v-if="!isTaskExists">
    <h3 class="text-center">
      Задачи с id = <strong>{{ reportedID }}</strong> нет.
    </h3>
  </div>

  <router-view v-else></router-view>

</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import AppStatus from '../components/AppStatus'

export default {
  setup() {
    const store = useStore()
    const route = useRoute()

    const reportedID = Number(route.params.taskID) ? Number(route.params.taskID) : 'ID отсутствует'
    const isTaskExists = computed(() => !!store.getters['tasks/allTasksInArray'].find(task => task.id === reportedID))

    return {
      reportedID,
      isTaskExists
    }
  },

  components: {AppStatus}
}
</script>

<style scoped>
.text-center{
  text-align: center
}
</style>