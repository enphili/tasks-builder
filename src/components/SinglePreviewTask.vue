<template >
  <div class="card">
    <h2 class="card-title">
      {{ taskTitle }}
      <AppStatus :type="status" />
    </h2>
    <p><strong><small>{{ createData }}</small></strong></p>
    <button
      class="btn primary"
      @click="setCurrentTaskID"
    >Посмотреть</button>
    <button class="btn danger onright" @click="deleteTask">Убрать в архив</button>

  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import AppStatus from '@/components/AppStatus'

export default {
  props: ['task', 'firebaseKey'],

  setup(props) {
    const store = useStore()
    const router = useRouter()

    const setCurrentFireBaseKey = () => {
      store.commit('setCurrentFireBaseKey', props.firebaseKey)
    }

    const deleteTask = () => {
      setCurrentFireBaseKey()
      store.dispatch('removeTaskToArchive')
    }

    const setCurrentTaskID = () => {
      store.commit('setCurrentID', props.task.id)
      setCurrentFireBaseKey()
      router.push(`/tasks/${props.task.id}`)
    }

    return {
      taskTitle: props.task.title,
      status: props.task.status,
      createData: props.task.createData,
      setCurrentTaskID,
      setCurrentFireBaseKey,
      deleteTask
    }
  },

  components: {
    AppStatus
  }
}
</script>

<style>
.onright {
  float: right;
}
</style>