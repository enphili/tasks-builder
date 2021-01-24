<template >
  <div class="card">
    <h2 class="card-title">
      {{ taskTitle }}
      <AppStatus :type="status" />
    </h2>
    <p><strong><small>{{ createData }}</small></strong></p>
    <button class="btn primary" @click="$router.push(`/tasks/${task.id}`)">Посмотреть</button>
    <button class="btn danger onright" @click="deleteTask">Убрать в архив</button>

  </div>
</template>

<script>
import { useStore } from 'vuex'
import AppStatus from '@/components/AppStatus'

export default {
  props: ['task', 'firebaseKey'],

  setup(props) {
    const store = useStore()

    const deleteTask = () => store.commit('deleteTask', props.firebaseKey)

    return {
      taskTitle: props.task.title,
      status: props.task.status,
      createData: props.task.createData,
      deleteTask
    }
  },

  components: {AppStatus}
}
</script>

<style>
.onright {
  float: right;
}
</style>