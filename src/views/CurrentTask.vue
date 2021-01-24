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

      <button class="btn danger onright" @click="deleteTask">Убрать в архив</button>

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

    const currentTask = computed(() => store.getters.allTasksInArray.find(task => task.id === props.taskID))
    const isOver = computed(() => currentTask.value.status === 'danger' || currentTask.value.status === 'completed')
    const firebaseNameKey = computed(() => currentTask.value.firebaseKey)

    const deleteTask = () => store.commit('deleteTask', firebaseNameKey.value)

    const cancelTask = () => store.commit('updateTaskStatus', {fireBaseKey: firebaseNameKey.value, status: 'danger'})

    const takeToWork = () => store.commit('updateTaskStatus', {fireBaseKey: firebaseNameKey.value, status: 'warning'})

    const completeTask = () => store.commit('updateTaskStatus', {fireBaseKey: firebaseNameKey.value, status: 'completed'})

    return {
      currentTask,
      cancelTask,
      takeToWork,
      completeTask,
      deleteTask,
      firebaseNameKey,
      isOver
    }
  },

  components: {AppStatus}
}
</script>