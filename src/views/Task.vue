<template>
  <div class="card" v-if="!!currentTask">
    <h2>{{ currentTask.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="currentTask.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ currentTask.deadlineData }}</p>
    <p><strong>Описание</strong>: {{ currentTask.description }}</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ currentID }}</strong> нет.
  </h3>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import AppStatus from '../components/AppStatus'

export default {
  setup() {
    const  store = useStore()

    const currentID = store.getters.currentTaskID
    const currentTask = computed(() => store.getters.allTasks.find(task => task.id === currentID))

    return {
      currentID,
      currentTask,
    }
  },

  components: {AppStatus}
}
</script>