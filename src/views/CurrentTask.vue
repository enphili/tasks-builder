<template>
  <div class="card">
    <h2>{{ currentTask.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="currentTask.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ currentTask.deadlineData }}</p>
    <p><strong>Описание</strong>: {{ currentTask.description }}</p>
    <div>
      <button class="btn"
              @click="takeToWork"
              :disabled="isOver || currentTask.status === 'warning'"
      >Взять в работу</button>

      <button class="btn primary"
              @click="completeTask"
              :disabled="isOver"
      >Завершить</button>

      <button class="btn danger"
              @click="cancelTask"
              :disabled="isOver"
      >Отменить</button>

    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex';
import {computed} from 'vue';
import AppStatus from '@/components/AppStatus'

export default {
  props: ['taskID'],

  setup(props) {
    const  store = useStore()

    const currentTask = computed(() => store.getters.allTasks.find(task => task.id === Number(props.taskID)))
    const taskIndex = computed(() => store.getters.allTasks.indexOf(currentTask.value))
    const isOver = computed(() => currentTask.value.status === 'danger' || currentTask.value.status === 'completed')

    const cancelTask = () => store.state.allTasks[taskIndex.value].status = 'danger'
    const takeToWork = () => store.state.allTasks[taskIndex.value].status = 'warning'
    const completeTask = () => store.state.allTasks[taskIndex.value].status = 'completed'

    return {
      currentTask,
      taskIndex,
      cancelTask,
      takeToWork,
      completeTask,
      isOver
    }
  },

  components: {AppStatus}
}
</script>